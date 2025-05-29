import { ProjetRenauvation, Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { Component, Input, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

export interface ModelTacheAffiche{
  name: string;
  value: number;
}
@Component({
  selector: 'app-finance-projet',
  templateUrl: './finance-projet.component.html',
  styleUrls: ['./finance-projet.component.scss']
})
export class FinanceProjetComponent implements OnInit {
  @Input("taches")
  taches: Tache[];

  @Input("projet")
  projet: ProjetRenauvation
  public single: any[];
  public multi: any[];
  petitEcran ;
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Taches';
  public showYAxisLabel = true;
  public yAxisLabel = 'Sommes';
  listeRapport: any[];
  sommeTotal = 0;
  public colorRapprot = {
    domain: ['green', 'red']
  };
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };  
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.petitEcran = false;
    this.settings = this.appSettings.settings; 
    //Object.assign(this, {single}); 
    if(window.innerWidth > 555){
      this.petitEcran = true;
    } 
    
  }

  ngOnInit()
  {
    //this.petitEcran = false;
    this.organiseTache();
    this.listeRapport = [{
      name:"Budget Restant Du Bugdet Global",
      value: this.projet.budget - this.sommeTotal,
    },
    {
      name:"Budget Total Pour Les Taches Effectuer",
      value: this.sommeTotal,
    }
  ]
  
  }
  
  public onSelect(event) {
    console.log(event);
  }
  organiseTache()
  {
    this.colorScheme.domain=[];
    this.single = [];
    this.sommeTotal = 0;
    let color='';
    for(let i=0; i<this.taches.length; i++)
    {
        if(this.taches[i].niveauAvancer == "VALIDER")
        {
          color = "green"
        }
      else if(this.taches[i].niveauAvancer == "ENCOURS")
        {
          color = "yellow"
        }
      else if(this.taches[i].niveauAvancer == "AREFAIRE")
        {
          color = "purple"
        }
      else{
        color = "#0096A6";
      }
      this.sommeTotal+=this.taches[i].sommeTache;
      this.colorScheme.domain.push(color);
      let tach :ModelTacheAffiche  = {
        name: this.taches[i].appellation,
        value: this.taches[i].sommeTache,
      }
      this.single.push(tach)
    }

  }

}
