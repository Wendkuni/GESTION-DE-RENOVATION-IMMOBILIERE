import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';

@Component({
  selector: 'app-gestion-taches',
  templateUrl: './gestion-taches.component.html',
  styleUrls: ['./gestion-taches.component.scss']
})
export class GestionTachesComponent implements OnInit {
  tache: Tache;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tache = this.data.tache;
  }

}
