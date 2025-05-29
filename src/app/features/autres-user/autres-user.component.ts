import { AutreUserAdminService } from './autre-user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { AutresUser } from 'src/app/shared/models/utilisateeur';
import { UpdateAutreUserComponent } from './update-autre-user/update-autre-user.component';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';

@Component({
  selector: 'app-autres-user',
  templateUrl: './autres-user.component.html',
  styleUrls: ['./autres-user.component.scss']
})
export class AutresUserComponent implements OnInit {
  public users: AutresUser[];
  public searchText: string;
  public page:any;
  public settings: Settings;
  isLoadingResults=true;
  constructor(public appSettings:AppSettings,private snackBar: SnackBarService,
              public dialog: MatDialog,private confirm: AppConfirmService,
              public usersService:AutreUserAdminService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
      this.getUsers();         
  }

  public getUsers(): void {
      this.users = null; //for show spinner each time
      this.isLoadingResults=true;
      this.usersService.getUsers().subscribe(users => {this.users = users; this.isLoadingResults=false});    
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
    const dialogRef = this.dialog.open(UpdateAutreUserComponent, {
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
              }
              
          });
      }

    });
  }
}
