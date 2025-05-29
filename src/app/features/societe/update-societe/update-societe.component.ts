import { typeSocietesModel } from 'src/app/shared/models/societe.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { typeSocietesServices } from '../../type-societe/type-societe.service';
import { societeServices } from '../societe.service';

@Component({
  selector: 'app-update-societe',
  templateUrl: './update-societe.component.html',
  styleUrls: ['./update-societe.component.scss']
})
export class UpdateSocieteComponent implements OnInit {

  societeForm : FormGroup;
  isLoadingResults=false;
  listTypeSociete: typeSocietesModel[] =[];
  constructor(public dialogRef: MatDialogRef<UpdateSocieteComponent>,private typeSociete: typeSocietesServices,
    private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private societeervice: societeServices) {
      this.isLoadingResults=true;
      typeSociete.getAlltypeSociete().subscribe((data)=>{
        this.listTypeSociete = data;
        this.isLoadingResults=false;
      })
     }

  ngOnInit(): void {
    this.init();
  }

  init(){
      if(this.data.societe){
        this.societeForm = this.fb.group({
          id:[this.data.societe.id],
          nomSociete: [this.data.societe.nomSociete, Validators.required],
          siret: [this.data.societe.siret, Validators.required],
          adresse: [this.data.societe.adresse, Validators.required],
          email: [this.data.societe.email, Validators.required],
          contact: [this.data.societe.contact, Validators.required],
          typeSociete: [this.data.societe.typeSociete, Validators.required],
      })
    }
    else{
      this.societeForm = this.fb.group({
        nomSociete: [null, Validators.required],
        siret: [null, [Validators.required, Validators.maxLength(15), Validators.minLength(10)]],
        adresse: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        contact: [null, [Validators.required, Validators.minLength(7)]],
        typeSociete: [null, Validators.required]
      })
    }
  }

  onSubmit(){
    if(this.societeForm.valid){
          this.isLoadingResults=true;
        if(this.data.societe){
          this.societeervice.updatesociete(this.societeForm.get('id').value, this.societeForm.value).subscribe( (data)=>{
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
                  this.snackBar.openSnackBar("Element non Ajouter car la societe existe deja", "OK",3000);
                }
                
                
            });
        }
        else{
          this.societeervice.addsociete(this.societeForm.value).subscribe( (data)=>{
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
                  this.snackBar.openSnackBar("Element non Ajouter car la societe existe deja", "OK",3000);
                }
                
            });
        }
    }
    else
    {
      this.snackBar.openSnackBar("Remplire les champs svp", "Error Champs",5000);
    }
      
  }

}
