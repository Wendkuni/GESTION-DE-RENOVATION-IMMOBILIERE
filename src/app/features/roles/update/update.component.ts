import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { RolesServices } from '../rolesServices';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateRolesComponent implements OnInit {

  rolesForm : FormGroup;
  isLoadingResults=false;
  constructor(public dialogRef: MatDialogRef<UpdateRolesComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private roleService: RolesServices) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
      if(this.data.role){
        this.rolesForm = this.fb.group({
          id:[this.data.role.id],
          libelle: [this.data.role.libelle, Validators.required],
          type: [this.data.role.type,Validators.required],
          name: [this.data.role.name,Validators.required],
      })
    }
    else{
      
      this.rolesForm = this.fb.group({
        libelle: [null, Validators.required],
        type: [null, Validators.required],
        name: [null, Validators.required],
      })
    }
  }

  onSubmit(){
    this.isLoadingResults=true;
    if(this.data.role){
      this.roleService.updaterole(this.rolesForm.get('id').value, this.rolesForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car name existe deja", "OK",3000);
            }
            
            
        });
    }
    else{
      this.roleService.addrole(this.rolesForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car name existe deja", "OK",3000);
            }
            
        });
    }
  }
}
