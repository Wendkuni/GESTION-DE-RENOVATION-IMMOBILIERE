import { UserAffecterProjet } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { DemarrageProjetRenovationComponent } from './../../demarrage-projet-renovation.component';
import { DossierProjet } from './../dossier-fichier.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-or-update-dossier',
  templateUrl: './add-or-update-dossier.component.html',
  styleUrls: ['./add-or-update-dossier.component.scss']
})
export class AddOrUpdateDossierComponent implements OnInit {

  isLoadingResults = false;
  userList: UserAffecterProjet[]=[];
  dossierForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddOrUpdateDossierComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private dossierService : DossierProjet) { 
    
  }

  ngOnInit(): void {
    this.init();
  }

  init()
  {
    if(this.data.dossier)
    {
      console.log(this.data.dossier);
      this.dossierForm = this.fb.group({
        id: this.data.dossier.id,
        appellation: [this.data.dossier.appellation, Validators.required],
        dossierParent: [this.data.dossier.dossierParent],
        projetRenovation : DemarrageProjetRenovationComponent.projetRenovation,
      })
    }
    else{
      this.dossierForm = this.fb.group({
        appellation: [null, Validators.required],
        dossierParent: [this.data.parentId],
        projetRenovation : DemarrageProjetRenovationComponent.projetRenovation,
      })
    }
  }



  onSubmit(){
      
    this.isLoadingResults = true;
    if(this.data.dossier){
        this.dossierService.updateDossier(this.data.dossier.id, this.dossierForm.value).subscribe( (data)=>{
          this.isLoadingResults=false;
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.dialogRef.close();
                this.snackBar.openSnackBar("Dossier modifier  avec succès", "OK",3000);
              }
              else{
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("Dossier non modifier car Dossier existe deja", "OK",5000);
              }
              
              
          });
      }
      else{
        this.dossierService.addDossier(this.dossierForm.value).subscribe( (data)=>{
          //console.log(data);
          this.isLoadingResults=false;
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.dialogRef.close();
                this.snackBar.openSnackBar("Dossier Ajouter  avec succès", "OK",3000);
              }
              else{
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("Dossier non ajouter car Dossier existe deja", "OK",5000);
              }
              
          });
      }
  }
}
