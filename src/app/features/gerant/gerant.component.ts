import { GerantAdminService } from './gerant.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonnelSociete } from 'src/app/shared/models/utilisateeur';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material/dialog';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { Settings } from 'src/app/app.settings.model';
import { UpdateGerantComponent } from './update/update.component';

@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.scss'],
  providers: [GerantAdminService]
})
export class GerantComponent implements OnInit {
  public users: PersonnelSociete[];
  public searchText: string;
  public page:any;
  public settings: Settings;
  isLoadingResults=true;
  constructor(public appSettings:AppSettings,private snackBar: SnackBarService,
              public dialog: MatDialog,private confirm: AppConfirmService,
              public usersService:GerantAdminService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
      this.getUsers();         
  }

  public getUsers(): void {
      this.users = null; //for show spinner each time
      this.isLoadingResults=true;
      this.usersService.getUsers().subscribe(users => {this.users = users; this.isLoadingResults=false},);    
  }
 


  public onPageChanged(event){
      this.page = event;
      this.getUsers();
      if(this.settings.fixedHeader){      
          document.getElementById('main-content').scrollTop = 0;
      }
      else{
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
      }
  }

  openDialog(user): void {
    const dialogRef = this.dialog.open(UpdateGerantComponent, {
      width: '600px',
      data: {user: user},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.getUsers();
      }
    });
  }

  suprimerUser(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cette pièce complémentaire ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.usersService.deleteUser(index).subscribe(()=>{
          this.isLoadingResults=false;
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
                this.ngOnInit();
              }
              else{
                this.snackBar.openSnackBar("Element non supprimer car affilier a un utilisateur", "OK",3000);
                this.isLoadingResults=false;
              }
              
          });
      }

    });
  }
}
