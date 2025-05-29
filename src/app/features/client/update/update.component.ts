import { ClientAdminService } from './../client-admin-service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateClientAdminComponent implements OnInit {

  user : FormGroup;
  isLoadingResults= false;
  constructor(public dialogRef: MatDialogRef<UpdateClientAdminComponent>,private snackBar: SnackBarService, private clientServices: ClientAdminService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private _fb: FormBuilder,) {
      
     }
  ngOnInit(): void {
    this.init();
  }

  init(){
    if(this.data.user){
        this.user = this._fb.group({
          id : [this.data.user.id],
          nom : [this.data.user.nom, Validators.required],
          prenom: [this.data.user.prenom, Validators.required],
          provider: this.data.user.provider,
          email: [this.data.user.email],
          contact: this.data.user.contact,
          imgUrl : this.data.user.imgUrl,
          societe : this.data.user.societe,
          statusFamiliale: [this.data.user.statusFamiliale, Validators.required],
          heureAContacter: this.data.user.heureAContacter,
          adresse:[this.data.user.adresse]
        })
    }
  }

  onSubmit(){
    //console.log(this.user.value);
   if(this.user.valid){
    this.isLoadingResults=true;
      this.clientServices.updateUser(this.user.value, this.data.user.id).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car le mail existe deja", "OK",3000);
            }
        });
   }
   else{
    this.snackBar.openSnackBar("Remplire tous les champs svp", "OK",5000);
   }
  }
}
