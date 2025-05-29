import { AutreUserAdminService } from './../autre-user.service';
import { societeModel } from './../../../shared/models/societe.model';
import { ProfileModel } from 'src/app/shared/models/Securite';
import { ProfilesSecuriteServices } from './../../profiles/ProfilesSecuriteServices';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { societeServices } from '../../societe/societe.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-autre-user',
  templateUrl: './update-autre-user.component.html',
  styleUrls: ['./update-autre-user.component.scss']
})
export class UpdateAutreUserComponent implements OnInit {

  user : FormGroup;
    profile:ProfileModel[]=[];
  societeList: societeModel[]=[];
  isLoadingResults= true;
  constructor(public dialogRef: MatDialogRef<UpdateAutreUserComponent>,private snackBar: SnackBarService, private autreUserService: AutreUserAdminService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private _fb: FormBuilder, private profileService: ProfilesSecuriteServices, private societeService: societeServices) {
      this.isLoadingResults = true;
    this.societeService.getAllsociete().subscribe(data=>{
      this.societeList = data;
      this.profileService.getAllprofile().subscribe((listProfile)=>{
        this.profile = listProfile;
        this.isLoadingResults = false;
      })
     
    })
     }
  ngOnInit(): void {
    this.init();
  }

  init(){
    if(this.data.user){
        this.user = this._fb.group({
          id: [this.data.user.id],
          nom : [this.data.user.nom, ],
          prenom: [this.data.user.prenom,],
          contact: this.data.user.contact,
          imgUrl : this.data.user.imgUrl,
          societe : [this.data.user.societe,Validators.required],
          email: [this.data.user.email,[Validators.required, Validators.email]],
          password: [this.data.user.password,],
          profile:[this.data.user.profiles, Validators.required],
          civilite:[this.data.user.civilite, Validators.required]
        })
    }
    else{
      this.user = this._fb.group({
        nom : ['', ],
        prenom: ['',],
        extension: null,
        contact: null,
        imgUrl : null,
        societe : [null,Validators.required],
        email: [null,[Validators.required, Validators.email]],
        password: [null,],
        profile:[null, Validators.required],
        civilite:[null, Validators.required]
      })
    }
  }

  onSubmit(){
    console.log(this.user.value);
   if(this.user.valid){
    this.isLoadingResults=true;
    if(this.data.user){
      this.autreUserService.updateUser(this.data.user.id, this.user.value).subscribe( (data)=>{
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
      this.autreUserService.addUser(this.user.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter", "OK",3000);
            }
            
        });
    }
   }
   else{
    this.snackBar.openSnackBar("Remplire tous les champs svp", "OK",5000);
   }
  }

}
