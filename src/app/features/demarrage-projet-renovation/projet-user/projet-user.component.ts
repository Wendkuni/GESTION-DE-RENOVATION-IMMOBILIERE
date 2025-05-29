import { ListTacheService } from './user-projet.service';
import { ProjetRenauvation } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { environment } from 'src/environments/environment';
import { AppSettings } from 'src/app/app.settings';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';

@Component({
  selector: 'app-projet-user',
  templateUrl: './projet-user.component.html',
  styleUrls: ['./projet-user.component.scss'],
  providers: [ListTacheService],
  encapsulation: ViewEncapsulation.None,
})
export class ProjetUserComponent implements OnInit {
  projet :ProjetRenauvation[];
  page: any;
  elementRecheche=['budget', 'dateDemarrage', 'email', 'nomRenovation']
  public settings: Settings;
  isLoadingResults=true;
  GererTache = 0;
  GererUser = 0;
  URLpage=environment.BACK_END.FILEUPLOAD+'download/';
  constructor(public appSettings:AppSettings,private projetStorage: ProjetStorageService,
              public projetService: ListTacheService){
      this.settings = this.appSettings.settings; 
      this.GererTache = projetStorage.getGestionTache();
      this.GererUser = parseInt(projetStorage.getGestionUser());
  }
  
    ngOnInit(): void {
      this.getElement();
    }
  
    getElement(){
      this.isLoadingResults=true;
      this.projetService.getAllProjet().subscribe((data) =>{
        this.projet = data;
        //console.log(this.projet);
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
