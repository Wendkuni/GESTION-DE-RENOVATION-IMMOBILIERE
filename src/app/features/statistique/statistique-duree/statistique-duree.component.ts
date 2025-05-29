import { tacheInterface } from './../../demarrage-projet-renovation/bilan/circulaire/circulaire.component';
import { single, multi } from './../charts.data';
import { Component, Input, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

export interface DataAnalyse{
  name: string;
  serie: tacheInterface[];
}

@Component({
  selector: 'app-statistique-duree',
  templateUrl: './statistique-duree.component.html',
  styleUrls: ['./statistique-duree.component.scss']
})
export class StatistiqueDureeComponent implements OnInit {
  public single: any[];
  public multi: any[];
  donneeMois: any=[];
  donneeAnnee: any=[];
  @Input('listeAnnee')
  listeAnnee :tacheInterface[] = [];
  @Input('listeMois')
  listeMois:tacheInterface[] = [];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabelAnnee = 'Années';
  public xAxisLabelMois = 'Mois';
  public showYAxisLabel = true;
  public yAxisLabel = 'nombre de projet';
  public colorScheme = {
    domain: ['#2F3E9E']
  }; 
  public autoScale = true;
  public settings: Settings;
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    //Object.assign(this, {single, multi})   
  }

  ngOnInit(): void {
    this.donneeMois = [{
      name:"Nombre de projet cloturé au mois de  ",
      series:this.listeMois
    }]

    this.donneeAnnee = [{
      name:"Nombre de projet cloturé à l'année ",
      series:this.listeAnnee
    }]
  }

}
