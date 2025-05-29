import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutresUser } from 'src/app/shared/models/utilisateeur';

@Component({
  selector: 'app-update-personnel-entreprise',
  templateUrl: './update-personnel-entreprise.component.html',
  styleUrls: ['./update-personnel-entreprise.component.scss']
})
export class UpdatePersonnelEntrepriseComponent implements OnInit {
  files =[];
  image: any;
  userForm : FormGroup;
  user: AutresUser;
  isLoadingResults= false;
  ext = "jpeg";
  constructor(public dialogRef: MatDialogRef<UpdatePersonnelEntrepriseComponent>,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
              private _fb: FormBuilder, private http: HttpClient,
              private snackBar : SnackBarService) { }

  ngOnInit(): void {
    //console.log(this.data.user.imgUrl);
    this.image = this.data.user.imgUrl;
    this.user = this.data.user;
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
      this.userForm = this._fb.group({
        id : [this.user.id],
        nom : [this.user.nom, Validators.required],
        prenom: [this.user.prenom, Validators.required],
        extension: null,
        contact: this.user.contact,
        imgUrl : this.user.imgUrl,
        civilite: this.user.civilite,
        provider: this.user.provider
      })
    }


    onSubmit()
    {
      if(this.userForm.valid)
      {
        this.isLoadingResults= true;
        if(this.image !=null){
          this.userForm.get("imgUrl").setValue(this.image.split(",")[1]);
          this.userForm.get("extension").setValue(this.ext);
        }
      //console.log(this.userForm.value);
      this.http.put(environment.BACK_END.LOGIN.PROFILE_UPDATE_USER+""+this.user.id, this.userForm.value).subscribe(
        data =>
        {
          //console.log(data);
          this.isLoadingResults= false;
        },
        (err : HttpErrorResponse) =>
        {
            console.log(err);
            if(err.status <300)
            {
              this.isLoadingResults= false;
              this.snackBar.openSnackBar("Profile Modifier", "Success",3000);
              this.dialogRef.close();
            }
            else{
                this.snackBar.openSnackBar("User Not Modifier", "ERROR",3000);
                this.isLoadingResults= false;
            }
            
        }
      )
      }
      else
      {
        this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide",3000);
        this.isLoadingResults= false;
      }
    }
}
