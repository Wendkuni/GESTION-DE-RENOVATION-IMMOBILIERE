import { multi, single } from './../charts.data';
import { Component, Input, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-statistique-budget',
  templateUrl: './statistique-budget.component.html',
  styleUrls: ['./statistique-budget.component.scss']
})
export class StatistiqueBudgetComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  @Input('budgetStatistique')
  statistiqueBugetAnnee: any=[]
  @Input('budgetStatistiqueMois')
  statistiqueBugetMois: any=[]
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#378D3B', '#0096A6', '#F47B00', '#606060']
  };  
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    //Object.assign(this, {single, multi}); 
  }

  ngOnInit(): void {
  }

}
