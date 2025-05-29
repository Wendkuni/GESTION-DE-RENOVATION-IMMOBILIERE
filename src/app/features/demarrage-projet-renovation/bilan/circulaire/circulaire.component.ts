import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { disk_space } from 'src/app/pages/dashboard/dashboard.data';
import { Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';


export interface tacheInterface {
  name: string;
  value: number;
}
@Component({
  selector: 'app-circulaire',
  templateUrl: './circulaire.component.html',
  styleUrls: ['./circulaire.component.scss']
})
export class CirculaireComponent implements OnInit {
  @Input("taches")
  taches: Tache[];
  valider=0;
  refare =0;
  encours= 0;
  afaire=0;
  public data: any[]; 
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#378D3B','rgb(22, 12, 160)','rgb(193, 20, 228)', 'rgb(228, 207, 20)']
  }; 
  public showLabels = true;
  public explodeSlices = true;
  public doughnut = false; 
  @ViewChild('resizedDiv') resizedDiv:ElementRef;
  public previousWidthOfResizedDiv:number = 0; 
  
  constructor() { }

  ngOnInit(){
    this. getElement();
    this.data = [{name:"TACHE FINI", value:this.valider}, {name:"TACHE A FAIRE", value:this.afaire},{name:"TACHE A REPRENDRE", value:this.refare}, {name:"TACHE ENCOURS", value:this.encours}];  
  }
  
  public onSelect(event) {
    console.log(event);
  }

  ngAfterViewChecked() {    
    if(this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth){
      setTimeout(() => this.data = [...this.data] );
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }

  getElement(){
    this.taches.forEach((tache, index)=>{
      if(tache.niveauAvancer == 'VALIDER')
      {
        this.valider++;
      }
      else if(tache.niveauAvancer == 'ENCOURS')
      {
        this.encours++;
      }
      else if(tache.niveauAvancer == 'AREFAIRE')
      {
        this.refare++;
      }
      else{
        this.afaire++;
      }
    })
  }

}
