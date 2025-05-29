import { GestionTachesComponent } from './gestion-taches/gestion-taches.component';
import { ListTacheService } from './../projet-user/user-projet.service';
import { AvancerTache, ProjetRenauvation } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { GestionTacheService } from './gestion-taches.services';
import { UpdateTachesComponent } from './update-taches/update-taches.component';
import { environment } from 'src/environments/environment';
import { DemarrageProjetRenovationComponent } from '../demarrage-projet-renovation.component';
import { TokenStorageService } from '../../login/_helper/localStorage';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';
import { blockTransition } from 'src/app/theme/utils/app-animation';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss'],
  providers: [ListTacheService],
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class TachesComponent implements OnInit {
  tacheList: Tache[] = [];
  evolution= [0,25,50,75,100];
  aFaire: Tache[] = [];
  aReFaire: Tache[] = [];
  valider: Tache[] = [];
  enCours: Tache[] = [];
  pourcentage:number;

  id: number;
  projet: ProjetRenauvation;
  rechercheGeneral = '';
  isLoadingResults = false;
  public settings: Settings;
  Gerant: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['appellation', 'description','status', 'dateD', 'DateF', 'user',  'action'];
  dataSources = new MatTableDataSource<Tache>(this.tacheList);
  constructor(private appSettings: AppSettings,private route: ActivatedRoute,
    private userTache: ListTacheService,private projetStorage: ProjetStorageService,
     private tacheService: GestionTacheService,private router: Router,private tokenService: TokenStorageService,
    public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService) {
    this.settings = this.appSettings.settings; 
    this.projet = DemarrageProjetRenovationComponent.projetRenovation;
    this.Gerant = parseInt(projetStorage.getGestionTache());
    // this.id = this.route.snapshot.params.id;
    // console.log(this.route.snapshot.parent)
   }

  ngOnInit(): void {
    this.aFaire= [];
    this.aReFaire = [];
    this.valider = [];
    this.enCours= [];
    if(this.Gerant ==1)
    {
      this.elementGerant();
    }
    else{
      this.elementUser();
    }
  }
  elementUser(){
    this.isLoadingResults = true;
    this.userTache.gettachess(this.projet.id).subscribe((data)=>{
      this.tacheList = data;
      this.dataSources = new MatTableDataSource<Tache>(this.tacheList);
      this.tacheList.forEach((tache, index)=>{
        if(tache.niveauAvancer == 'VALIDER')
        {
          this.valider.push(tache);
        }
        else if(tache.niveauAvancer === 'ENCOURS')
        {
          this.enCours.push(tache);
        }
        else if(tache.niveauAvancer == 'AREFAIRE')
        {
          this.aReFaire.push(tache);
        }
        else{
          this.aFaire.push(tache);
        }
      })
      //console.log(this.dataSources);
      this.isLoadingResults = false;
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
    },(error:HttpErrorResponse)=>{
      if(error.status>300)
      {
        this.router.navigate([environment.FRONTEND_ROUTES.DASHBOARD]);
      }
      
    })
  }

nombreJour(tache: Tache): number
{
    let temps = new Date(tache.dateFinition).getTime() - new Date(tache.dateDemarrage).getTime();
    return temps/(1000*60*60*24);
}

  elementGerant(){
    this.isLoadingResults = true;
    this.tacheService.gettachess(this.projet.id).subscribe((data)=>{
      this.tacheList = data;
      this.dataSources = new MatTableDataSource<Tache>(this.tacheList);
      this.tacheList.forEach((tache, index)=>{
        if(tache.niveauAvancer == 'VALIDER')
        {
          this.valider.push(tache);
        }
        else if(tache.niveauAvancer == 'ENCOURS')
        {
          this.enCours.push(tache);
        }
        else if(tache.niveauAvancer == 'AREFAIRE')
        {
          this.aReFaire.push(tache);
        }
        else{
          this.aFaire.push(tache);
        }
      })
      //console.log(this.dataSources);
      this.isLoadingResults = false;
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
    },(error:HttpErrorResponse)=>{
      if(error.status>300)
      {
        this.router.navigate([environment.FRONTEND_ROUTES.DASHBOARD]);
      }
      
    })
  }

  drop(event: CdkDragDrop<string[]>, types) {
    console.log(event.currentIndex)
    this.isLoadingResults = true;
    let tache: Tache;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      if(types=='VALIDER')
      {
        tache = this.valider[event.currentIndex];
      }
      else if(types=='ENCOURS')
      {
        tache = this.enCours[event.currentIndex];
      }
      else if(types=='AREFAIRE')
      {
        tache =this.aReFaire[event.currentIndex];
      }
      else{
        tache = this.aFaire[event.currentIndex];
      }
     // if(this.tokenService.getMenu()==tache.utilisateur.utilisateurs.id || tache.utilisateur.utilisateurs.profile.libelle.substil )

      tache.niveauAvancer = types;
      this.userTache.updatetaches(tache.id, tache).subscribe((data)=>{
        console.log(data);
      },(error:HttpErrorResponse)=>{
        if(error.status<300)
        {
          this.isLoadingResults = false;
          this.snackBar.openSnackBar("status de la tache changer avec success", "OK",3000);
        }
        else{
          this.isLoadingResults = false;
          this.snackBar.openSnackBar("status de la tache non changer", "OK",3000);
          this.ngOnInit();
        }
      })
    }
  }

  onChangePourcentage(event, tache: Tache)
  {
    console.log(event);
    if(event>0)
    {
      if(String(event) === '100')
      {
        tache.niveauAvancer = 'VALIDER';
        this.supprimerAndAssigneElemet(tache,this.enCours, this.valider);
      }
      this.userTache.updatetaches(tache.id, tache).subscribe((data)=>{
      },(error:HttpErrorResponse)=>{
        if(error.status<300)
        {
          this.snackBar.openSnackBar("status de la tache changer avec success", "OK",3000);
        }
        else{
          this.snackBar.openSnackBar("status de la tache non changer", "OK",3000);
          this.ngOnInit();
        }
      })
    }
  }

  public supprimerAndAssigneElemet(element : Tache, tab1: Tache[], tab2:Tache[])
  {
    tab1.forEach((t, index) => {
        if(t.id = element.id)
        {
          console.log(index);
          tab1.splice(index,1);
        }
    });
    tab2.push(element);
  }

  recherche() {
    this.dataSources.filter = this.rechercheGeneral.trim().toLowerCase();
  }

  annulerRechercheGeneral()
  {
    this.rechercheGeneral = '';
    this.recherche();
  }

  openDialog(tache): void {
    const dialogRef = this.dialog.open(UpdateTachesComponent, {
      width: '600px',
      data: {tache: tache},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.ngOnInit();
      }
    });
  }


  voirPlus(tache): void {
    const dialogRef = this.dialog.open(GestionTachesComponent, {
      width: '600px',
      data: {tache: tache},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {

      }
    });
  }

  supprimerRenovation(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cette taches ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.tacheService.deletetaches(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
                this.ngOnInit();
              }
              else{
                this.snackBar.openSnackBar("Element non supprimer ", "OK",3000);
              }
              
          });
      }

    });
  }

}
