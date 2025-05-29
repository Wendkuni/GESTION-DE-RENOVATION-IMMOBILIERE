import { HttpErrorResponse } from '@angular/common/http';
import { ProjetRenauvationService } from './../projet-renovation/projet-renovation.service';
import { ProjetRenauvation } from './../../shared/models/demarrage-projet/projet-renovation.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../login/_helper/localStorage';
import { ListTacheService } from './projet-user/user-projet.service';
import { UtilisateurAffecterModalComponent } from '../projet-renovation/utilisateur-affecter-modal/utilisateur-affecter-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';
import { UserAffecterDemarrageComponent } from './user-affecter-demarrage/user-affecter-demarrage.component';

@Component({
  selector: 'app-demarrage-projet-renovation',
  templateUrl: './demarrage-projet-renovation.component.html',
  styleUrls: ['./demarrage-projet-renovation.component.scss'],
  providers :[ListTacheService],
  encapsulation: ViewEncapsulation.None,
})
export class DemarrageProjetRenovationComponent implements OnInit {
  id:number;
  static projetRenovation: ProjetRenauvation;
  Gerant: number;
  GererUser = 0;
  isLoadingResults=  true;
  projet: ProjetRenauvation;
  constructor(private route: ActivatedRoute,public dialog: MatDialog,
    private router: Router, private projetStorage: ProjetStorageService,
     private projetServices: ListTacheService) { 
    this.id = route.snapshot.params.id;
    this.GererUser = parseInt(projetStorage.getGestionUser());
    
  }

  ngOnInit(): void {
    this.projetServices.getProjet(this.id).subscribe((data : ProjetRenauvation)=>{
      this.projet = data;
      DemarrageProjetRenovationComponent.projetRenovation = data;
      
      this.isLoadingResults = false;
    },(error:HttpErrorResponse)=>{
      this.router.navigate([environment.FRONTEND_ROUTES.PROJET_RENAUVATION]);
    })
  }

  openDialog(projet: ProjetRenauvation): void {
    const dialogRef = this.dialog.open(UserAffecterDemarrageComponent, {
      width: '600px',
      height:'700px',
      data: {projet: projet},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        
      }
    });
  }

}
