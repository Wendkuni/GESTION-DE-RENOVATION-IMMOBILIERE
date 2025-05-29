import { ClientAdminService } from './client-admin-service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { Client } from 'src/app/shared/models/utilisateeur';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UpdateClientAdminComponent } from './update/update.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ClientAdminService ]  
})
export class ClientComponent implements OnInit {
    public users: Client[];
    public searchText: string;
    public page:any;
    public settings: Settings;
    isLoadingResults=true;
    constructor(public appSettings:AppSettings,private snackBar: SnackBarService,
                public dialog: MatDialog,private confirm: AppConfirmService,
                public usersService: ClientAdminService){
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
      const dialogRef = this.dialog.open(UpdateClientAdminComponent, {
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
                  this.snackBar.openSnackBar("Element non supprimer car deja commencer des action", "OK",3000);
                }
                
            });
        }
  
      });
    }
}
