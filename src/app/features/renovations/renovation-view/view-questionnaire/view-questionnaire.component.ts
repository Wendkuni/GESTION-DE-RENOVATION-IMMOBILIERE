import { Renovation } from './../../../../shared/models/Renovation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-questionnaire',
  templateUrl: './view-questionnaire.component.html',
  styleUrls: ['./view-questionnaire.component.scss']
})
export class ViewQuestionnaireComponent implements OnInit {

  @Input("renovation")
  renovation: Renovation;
  constructor() { }

  ngOnInit(): void {
  }

}
