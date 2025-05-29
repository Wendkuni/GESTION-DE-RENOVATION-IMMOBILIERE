import { MenuServiceAdmin } from './../menuServices';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/shared/services/SnackBar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateMenuComponent implements OnInit {

  menuForm : FormGroup;
  isLoadingResults=false;
  constructor(public dialogRef: MatDialogRef<UpdateMenuComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private menuService: MenuServiceAdmin) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
      if(this.data.menu){
        this.menuForm = this.fb.group({
          id:[this.data.menu.id],
          title: [this.data.menu.title,],
          routerLink: [this.data.menu.routerLink,],
          href: [this.data.menu.href,],
          icon: [this.data.menu.icon,],
          target: [this.data.menu.target,],
          hasSubMenu: [this.data.menu.hasSubMenu,],
          parentId: [this.data.menu.parentId,]
    })
    }
    else{
      
        this.menuForm = this.fb.group({
          id:[],
          title: [null, Validators.required],
          routerLink: [null,],
          href: [null,],
          icon: [null,],
          target: [null,],
          hasSubMenu: [null,],
          parentId: [0, Validators.required]
    })
    }
  }

  onSubmit(){
    this.isLoadingResults=true;
    if(this.data.menu){
      this.menuService.updateMenu(this.menuForm.get('id').value, this.menuForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car menu existe deja", "OK",3000);
            }
            
            
        });
    }
    else{
      this.menuService.addMenu(this.menuForm.value).subscribe( (data)=>{
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
              this.snackBar.openSnackBar("Element non Ajouter car menu existe deja", "OK",3000);
            }
            
        });
    }
  }

}
