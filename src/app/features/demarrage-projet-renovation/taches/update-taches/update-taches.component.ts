import { Tache, UserAffecterProjet } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserAffecterProjetRenovationServices } from 'src/app/features/user-affecter-projet-renovation/user-affecter-projet.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { DemarrageProjetRenovationComponent } from '../../demarrage-projet-renovation.component';
import { GestionTacheService } from '../gestion-taches.services';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';

@Component({
  selector: 'app-update-taches',
  templateUrl: './update-taches.component.html',
  styleUrls: ['./update-taches.component.scss'],
  providers: [UserAffecterProjetRenovationServices]
})
export class UpdateTachesComponent implements OnInit {
  tacheForm : FormGroup;
  userList: UserAffecterProjet[] =[];
  isLoadingResults=false;
  constructor(private confirm: AppConfirmService,public dialogRef: MatDialogRef<UpdateTachesComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private tacheService: GestionTacheService) { }

  ngOnInit(): void {
    this.isLoadingResults=true;
    this.tacheService.getUser(DemarrageProjetRenovationComponent.projetRenovation.id).subscribe((data)=>{
      this.userList = data;
      this.isLoadingResults=false;
    });
    this.init();
  }

  init(){
      if(this.data.tache){
        this.tacheForm = this.fb.group({
          id:[this.data.tache.id],
          appellation: [this.data.tache.appellation, Validators.required],
          description: [this.data.tache.description, Validators.required],
          dateDemarrage: [this.data.tache.dateDemarrage, Validators.required],
          dateFinition: [this.data.tache.dateFinition, Validators.required],
          utilisateur: [this.data.tache.utilisateur, Validators.required],
          enregistre: [null],
          niveauAvancer: this.data.tache.niveauAvancer,
          sommeTache:[this.data.tache.sommeTache, Validators.required],
          projetRenovation: [DemarrageProjetRenovationComponent.projetRenovation,],
    })
    }
    else{
      
        this.tacheForm = this.fb.group({
          id:[null],
          appellation: [null, Validators.required],
          description: [null, Validators.required],
          dateDemarrage: [null, Validators.required],
          dateFinition: [null, Validators.required],
          utilisateur: [null, Validators.required],
          enregistre: [null],
          niveauAvancer: null,
          sommeTache:[null, Validators.required],
          projetRenovation: [DemarrageProjetRenovationComponent.projetRenovation,],
    })
    }
  }

  onSubmit(){
    this.isLoadingResults=true;
    this.tacheService.verifierTaches(this.tacheForm.value).subscribe((data)=>{
       var list: Tache[] = data;
      console.log(data);
      if(list.length>0)
      {
        this.TachesExisteDeja();
      }
      else{
        this.enregistrer();
      }
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })
  }

  TachesExisteDeja(){
    this.confirm.confirm({
      title:"Conflit de Taches",
      message:"Il y a deja une tache en cours selon la date choisi. Voulez-vous continuer ? "
    }).subscribe(($choix)=> {

      if($choix) {
        this.Remeniation();
      }
      else{
        this.isLoadingResults=false;
      }

    });
  }

  Remeniation(){
    this.confirm.confirm({
      title:"Comment Enregistrer la tache",
      message:` doit-on enregistrer la tache parallelement ou decaller les dates? `,
      buttun1: `Enregistré simplement`,
      buttun2:`Enregistré avec decallage`
    }).subscribe(($choix)=> {

      if($choix) {
        this.tacheForm.get('enregistre').setValue("Decaller");
      }
      else{
        this.tacheForm.get('enregistre').setValue("Parallele");
      }
      console.log(this.tacheForm.value)
      this.enregistrer();
    });
  }


enregistrer(){
  if(this.data.tache){
      this.tacheService.updatetaches(this.data.tache.id, this.tacheForm.value).subscribe( (data)=>{
        this.isLoadingResults=false;
      },
      (error: HttpErrorResponse) => {
            this.isLoadingResults=false;
            if(error.status<300)
            {
              this.dialogRef.close();
              this.snackBar.openSnackBar("Element modifier  avec succès", "OK",3000);
            }
            else{
              this.snackBar.openSnackBar("Element non Ajouter car tache existe deja", "OK",3000);
            }
            
            
        });
    }
    else{
      this.tacheService.addtaches(this.tacheForm.value).subscribe( (data)=>{
        //console.log(data);
        this.isLoadingResults=false;
      },
      (error: HttpErrorResponse) => {
            this.isLoadingResults=false;
            if(error.status<300)
            {
              this.dialogRef.close();
              this.snackBar.openSnackBar("Element Ajouter  avec succès", "OK",3000);
            }
            else{
              this.snackBar.openSnackBar("Element non Ajouter car tache existe deja", "OK",3000);
            }
            
        });
    }
}
}
