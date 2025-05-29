import { MenuServiceAdmin } from '../../menus/menuServices';
import { MenuService } from '../../../layout/menu/menu.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileModel } from 'src/app/shared/models/Securite';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { ProfilesSecuriteServices } from '../../profiles/ProfilesSecuriteServices';
import { UserMenusServices } from '../user-menu-admin.service';
import { Menu } from 'src/app/layout/menu/menu.model';

@Component({
  selector: 'app-update-user-menu',
  templateUrl: './update-user-menu.component.html',
  styleUrls: ['./update-user-menu.component.scss'],
  providers:[MenuServiceAdmin]
})
export class UpdateUserMenuComponent implements OnInit {

  UserMenuForm : FormGroup;
  isLoadingResults=false;
  Profile:ProfileModel[] = [];
  menu: Menu[]=[];
  constructor(public dialogRef: MatDialogRef<UpdateUserMenuComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private menuService: MenuServiceAdmin,
    private fb: FormBuilder, private UserMenuService: UserMenusServices, private ProfileService: ProfilesSecuriteServices) {
      this.isLoadingResults = true;
    this.ProfileService.getAllprofile().subscribe(data=>{
      this.Profile = data;
      this.isLoadingResults = false;
    })
    this.UserMenuService.getAllMenu().subscribe((data)=>{
      this.menu = data;
      this.isLoadingResults = false;
     })
    }

  ngOnInit(): void {
    this.init();
    console.log(this.UserMenuForm.value)
  }

  init(){
    
      if(this.data.UserMenu){
        this.UserMenuForm = this.fb.group({
          id:[this.data.UserMenu.id],
          profile: [this.data.UserMenu.profile, Validators.required],
          menu: [this.data.UserMenu.menu,Validators.required],
        })
    }
    else{
      
      this.UserMenuForm = this.fb.group({
        profile: [null, Validators.required],
        menu: [null,Validators.required],
      })
    }
  }

  onSubmit(){
    this.isLoadingResults=true;
    if(this.data.UserMenu){
      this.UserMenuService.updateUserMenu(this.UserMenuForm.get('id').value, this.UserMenuForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car le profile a deja des menu", "OK",3000);
            }
            
            
        });
    }
    else{
      this.UserMenuService.addUserMenu(this.UserMenuForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car le profile a deja des menu", "OK",3000);
            }
            
        });
    }
  }

}
