import { Component, Input, OnInit } from '@angular/core';
import { Renovation } from 'src/app/shared/models/Renovation';
import { Client } from 'src/app/shared/models/utilisateeur';

@Component({
  selector: 'app-view-and-valider-questionnaire',
  templateUrl: './view-and-valider-questionnaire.component.html',
  styleUrls: ['./view-and-valider-questionnaire.component.scss']
})
export class ViewAndValiderQuestionnaireComponent implements OnInit {

  @Input("renovation")
  renovation: Renovation;
  client: Client;
  constructor() {
    //this.client = this.renovation.client;
   }

  ngOnInit(): void {
    this.client = this.renovation.client;
  }
}
