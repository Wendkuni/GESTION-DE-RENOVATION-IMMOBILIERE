import { SnackBarService } from './../../../../shared/services/SnackBar';
import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Client } from './../../../../shared/models/utilisateeur';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface FileProfile{
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  files =[];
  image: any;
  clientForm : FormGroup;
  client: Client;
  ext = "jpeg";
  isLoadingResults= false;
  constructor(public dialogRef: MatDialogRef<UpdateClientComponent>,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
              private _fb: FormBuilder, private http: HttpClient,
              private snackBar : SnackBarService) { }

  ngOnInit(): void {
    //console.log(this.data.client.imgUrl);
    this.image = this.data.client.imgUrl;
    this.client = this.data.client;
    this.init();
  }
  onSelect(event) {
   var file = new FileReader();
   file.readAsDataURL(event.target.files[0]);
  // console.log(event.target.files[0]);

   var verifiImage = event.target.files[0].type;
   if(verifiImage.match(/image\/*/))
   {
      file.onload = (_event) => {
  
        this.image = file.result;
        const base64 = this.image.split(",")[1];
        const filess = new FormData();
        this.ext = event.target.files[0].type.split("/")[1];
        return;
        //console.log(this.image);
      }
   }
   else{
    this.snackBar.openSnackBar("Selectionner une image", "ERROR Image",3000);
   }
   
  }

    public init(){
      this.clientForm = this._fb.group({
        id : [this.client.id],
        nom : [this.client.nom, Validators.required],
        prenom: [this.client.prenom, Validators.required],
        extension: null,
        contact: this.client.contact,
        imgUrl : this.client.imgUrl,
        societe : this.client.societe,
        statusFamiliale: this.client.statusFamiliale,
        heureAContacter: this.client.heureAContacter,
        adresse:[this.client.adresse, Validators.required]
      })
    }


    onSubmit()
    {
      if(this.clientForm.valid)
      {
        this.isLoadingResults= true;
        if(this.image !=null){
          this.clientForm.get("imgUrl").setValue(this.image.split(",")[1]);
          this.clientForm.get("extension").setValue(this.ext);
        }
      //console.log(this.clientForm.value);
      this.http.put(environment.BACK_END.LOGIN.PROFILE_UPDATE_CLIENT+""+this.client.id, this.clientForm.value).subscribe(
        data =>
        {
          //console.log(data);
        },
        (err : HttpErrorResponse) =>
        {
            console.log(err);
            if(err.status <300)
            {
              this.snackBar.openSnackBar("Profile Modifier", "Success",3000);
              this.dialogRef.close();
            }
            else{
              this.isLoadingResults= false;
                this.snackBar.openSnackBar("Remplire les champs obligatoire", "ERROR",3000);
            }
            
        }
      )
      }
      else
      {
        this.isLoadingResults= false;
        this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide",3000);
      }
    }

}
