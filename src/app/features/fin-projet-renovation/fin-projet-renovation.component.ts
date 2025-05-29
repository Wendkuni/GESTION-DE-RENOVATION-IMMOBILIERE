import { ProjetComponent } from './projet/projet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { CloturerRenovation } from 'src/app/shared/models/cloturerRenovation.class';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { environment } from 'src/environments/environment';
import { CloturerRenovationService } from './cloturerProjet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fin-projet-renovation',
  templateUrl: './fin-projet-renovation.component.html',
  styleUrls: ['./fin-projet-renovation.component.scss']
})
export class FinProjetRenovationComponent implements OnInit {
  projet :CloturerRenovation[];
  page: any;
  elementRecheche=['budget', 'dateDemarrage', 'email', 'nomRenovation']
  public settings: Settings;
  isLoadingResults=false;
  URLpage=environment.BACK_END.FILEUPLOAD+'download/';
  constructor(public appSettings:AppSettings,private snackBar: SnackBarService,
              public dialog: MatDialog,private confirm: AppConfirmService,
              public projetService: CloturerRenovationService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit(): void {
    this.getElement();
  }

  getElement(){
    this.isLoadingResults=true;
    this.projetService.getProjet().subscribe((data) =>{
      this.projet = data;
      console.log(this.projet);
      this.isLoadingResults=false;
    })
  }

    public onPageChanged(event){
      this.page = event;
      //this.getUsers();
      if(this.settings.fixedHeader){      
          document.getElementById('main-content').scrollTop = 0;
      }
      else{
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
      }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ProjetComponent, {
      width: '600px',
      height:'700px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.getElement();
      }
    });
  }

  supprimerRenovation(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous revoquer la cloture du projet ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.projetService.deleteProjet(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
                this.getElement();
              }
              else{
                this.snackBar.openSnackBar("Element non supprimer ", "OK",3000);
              }
              
          });
      }

    });
  }
}
