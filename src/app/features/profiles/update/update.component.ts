import { RolesModel } from 'src/app/shared/models/Securite';
import { RolesServices } from './../../roles/rolesServices';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { ProfilesSecuriteServices } from '../ProfilesSecuriteServices';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateProfilesSecuriteComponent implements OnInit {

  
  
  profileForm : FormGroup;
  isLoadingResults=false;
  roles:RolesModel[] = [];
  constructor(public dialogRef: MatDialogRef<UpdateProfilesSecuriteComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private profileService: ProfilesSecuriteServices, private rolesService: RolesServices) {
      this.isLoadingResults = true;
    this.rolesService.getAllrole().subscribe(data=>{
      this.roles = data;
      this.isLoadingResults = false;
    })
     }

  ngOnInit(): void {
    this.init();
  }

  init(){
    
      if(this.data.profile){
        this.profileForm = this.fb.group({
          id:[this.data.profile.id],
          libelle: [this.data.profile.libelle, Validators.required],
          roles: [this.data.profile.roles,Validators.required],
        })
    }
    else{
      
      this.profileForm = this.fb.group({
        libelle: [null, Validators.required],
        roles: [null,Validators.required],
      })
    }
  }

  onSubmit(){
    this.isLoadingResults=true;
    if(this.data.profile){
      this.profileService.updateprofile(this.profileForm.get('id').value, this.profileForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car l'appellation existe deja", "OK",3000);
            }
            
            
        });
    }
    else{
      this.profileService.addprofile(this.profileForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car l'appellation existe deja", "OK",3000);
            }
            
        });
    }
  }

}
