import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileModel } from 'src/app/shared/models/Securite';
import { societeModel } from 'src/app/shared/models/societe.model';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { ProfilesSecuriteServices } from '../../profiles/ProfilesSecuriteServices';
import { societeServices } from '../../societe/societe.service';
import { GerantAdminService } from '../gerant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateGerantComponent implements OnInit {

  user : FormGroup;
  profile:ProfileModel[]=[];
  societeList: societeModel[]=[];
  isLoadingResults= true;
  constructor(public dialogRef: MatDialogRef<UpdateGerantComponent>,private snackBar: SnackBarService, private autreUserService: GerantAdminService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private _fb: FormBuilder, private profileService: ProfilesSecuriteServices, private societeService: societeServices) {
      this.isLoadingResults = true;

      this.profileService.getAllprofile().subscribe((listProfile)=>{
        this.profile = listProfile;
        this.isLoadingResults = false;
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
          email: [this.data.user.email,[Validators.required, Validators.email]],
          password: [this.data.user.password],
          profile:[this.data.user.profile, Validators.required],
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
        email: [null,[Validators.required, Validators.email]],
        password: [null],
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
