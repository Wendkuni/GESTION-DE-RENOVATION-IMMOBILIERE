import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { CloturerRenovationService } from '../cloturerProjet.service';

@Component({
  selector: 'app-projet-realiser',
  templateUrl: './projet-realiser.component.html',
  styleUrls: ['./projet-realiser.component.scss'],
  providers : [CloturerRenovationService],
  encapsulation: ViewEncapsulation.None,
})
export class ProjetRealiserComponent implements OnInit {
  projet :ProjetRenauvation[];
  page: any;
  elementRecheche=['budget', 'dateDemarrage', 'email', 'nomRenovation']
  public settings: Settings;
  isLoadingResults=false;
  constructor(public appSettings:AppSettings,
              public projetService: CloturerRenovationService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit(): void {
    this.getElement();
  }

  getElement(){
    this.isLoadingResults=true;
    this.projetService.getAllProjet().subscribe((data) =>{
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
}
