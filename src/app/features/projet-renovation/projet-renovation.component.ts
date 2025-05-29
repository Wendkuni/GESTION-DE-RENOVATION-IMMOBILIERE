import { HttpErrorResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { environment } from 'src/environments/environment';
import { ProjetRenauvationService } from './projet-renovation.service';
import { UtilisateurAffecterModalComponent } from './utilisateur-affecter-modal/utilisateur-affecter-modal.component';

@Component({
  selector: 'app-projet-renovation',
  templateUrl: './projet-renovation.component.html',
  styleUrls: ['./projet-renovation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjetRenovationComponent implements OnInit {
projet :ProjetRenauvation[];
page: any;
elementRecheche=['budget', 'dateDemarrage', 'email', 'nomRenovation']
public settings: Settings;
isLoadingResults=false;
URLpage=environment.BACK_END.FILEUPLOAD+'download/';
constructor(public appSettings:AppSettings,private snackBar: SnackBarService,
            public dialog: MatDialog,private confirm: AppConfirmService,
            public projetService: ProjetRenauvationService){
    this.settings = this.appSettings.settings; 
}

  ngOnInit(): void {
    this.getElement();
  }

  getImgUsrl(p: ProjetRenauvation): string
  {
    //console.log(p.photo);
    return p.photo;
    //return this.URLpage+""+img.split('/')[2];
  }

  getElement(){
    this.isLoadingResults=true;
    this.projetService.getprojets().subscribe((data) =>{
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

  openDialog(projet: ProjetRenauvation): void {
    const dialogRef = this.dialog.open(UtilisateurAffecterModalComponent, {
      width: '600px',
      height:'700px',
      data: {projet: projet},
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
      message:`Voulez-vous supprimer cette pièce complémentaire ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.projetService.deleteprojet(index).subscribe(()=>{
          
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

  rechercheBudget(arr : ProjetRenauvation[], requete) {
    return arr.filter(function (el) {
      return  el.budget+"".indexOf(requete.toLowerCase()) !== -1;
    })
  }

  rechercheNomRenovation(arr : ProjetRenauvation[], requete) {
    return arr.filter(function (el) {
      return  el.renovation.nomRenovation.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    })
  }

  rechercheEmail(arr : ProjetRenauvation[], requete) {
    return arr.filter(function (el) {
      return  el.renovation.client.email.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    })
  }

}
