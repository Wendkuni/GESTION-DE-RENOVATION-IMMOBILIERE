import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from 'src/app/app.settings.model';
import { ProjetRenauvation, Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';
import { blockTransition } from 'src/app/theme/utils/app-animation';
import { environment } from 'src/environments/environment';
import { DemarrageProjetRenovationComponent } from '../demarrage-projet-renovation.component';
import { ListTacheService } from '../projet-user/user-projet.service';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss'],
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class BilanComponent implements OnInit {
  tacheList: Tache[] = [];

  isGerant=0;
  id: number;
  projet: ProjetRenauvation;
  rechercheGeneral = '';
  isLoadingResults = false;
  public settings: Settings;
  constructor(private userTache: ListTacheService,private router: Router, private projetStorage: ProjetStorageService) {
    this.projet = DemarrageProjetRenovationComponent.projetRenovation;
   }

  ngOnInit(): void {
    this.isGerant = parseInt(this.projetStorage.getGestionTache());
    this.elementUser();
  }
  elementUser(){
    this.isLoadingResults = true;
    this.userTache.gettachess(this.projet.id).subscribe((data)=>{
      this.tacheList = data;
      //console.log(this.tacheList);
      this.isLoadingResults = false;
    },(error:HttpErrorResponse)=>{
      if(error.status>300)
      {
        this.router.navigate([environment.FRONTEND_ROUTES.DASHBOARD]);
      }
      
    })
  }
}
