import { Agenda } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-agenda',
  templateUrl: './view-agenda.component.html',
  styleUrls: ['./view-agenda.component.scss']
})
export class ViewAgendaComponent implements OnInit {

  event: Agenda;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.event = this.data.agenda;
  }
  
}
