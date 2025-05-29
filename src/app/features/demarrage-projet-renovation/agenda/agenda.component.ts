import { ViewAgendaComponent } from './view-agenda/view-agenda.component';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { DemarrageProjetRenovationComponent } from './../demarrage-projet-renovation.component';
import { Agenda, ProjetRenauvation, Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { GestionAgendaService } from './agenda.system.service';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject } from 'rxjs';
import { blockTransition } from 'src/app/theme/utils/app-animation';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ListTacheService } from '../projet-user/user-projet.service';
import { GestionTachesComponent } from '../taches/gestion-taches/gestion-taches.component';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';

const colors: any = {
  red: {
    primary: '#1e90ff',
    secondary: '#1e90ff'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class AgendaComponent implements OnInit {
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  isLoadingResults = false;
  tacheList: Tache[]=[];
  actions: CalendarEventAction[] = [{
      label: '<i class="material-icons icon-sm white">edit</i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
          this.openScheduleDialog(event);
      }
  }, {
      label: '<i class="material-icons icon-sm white">close</i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
          this.supprimerElement(this.listeAgenda[event.id].id);
      }
  },{
    label: '<i class="white">voir+</i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
          this.openScheduleView(event);
      }
  }];

  actionsUser: CalendarEventAction[] = [{
  label: '<i class="white">voir+</i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
        this.openScheduleView(event);
    }
}];




  actionsTache: CalendarEventAction[] = [{
      label: '<i class="white">voir+</i>',
        onClick: ({event}: {event: CalendarEvent}): void => {
          console.log(this.tacheList[event.id]);
          this.voirPlusTache(this.tacheList[event.id]);
        }
    }];


  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();


  public settings: Settings;
  projet: ProjetRenauvation = DemarrageProjetRenovationComponent.projetRenovation;
  listeAgenda: Agenda[] = [];
  isGestion = 0;
  constructor(public appSettings:AppSettings, 
              private userTache: ListTacheService,
              public dialog: MatDialog,
              private snackService: SnackBarService,
              private confirm: AppConfirmService,
              private projetStorage: ProjetStorageService,
              private agendaSrvice: GestionAgendaService,
              public snackBar: MatSnackBar){
      this.settings = this.appSettings.settings; 
      this.isGestion = projetStorage.getGestionAgenda();
  }

  ngOnInit() {
    if(this.isGestion>0)
    {
      this.getElementGestion()
    }
    else{
      this.getuserAgenda();
    }
    this.elementUser();
  }

  getElementGestion(){
    this.isLoadingResults = true;
    this.agendaSrvice.getAgendas(this.projet.id).subscribe((data)=>{
      this.listeAgenda = data;
      this.viewAgenda();
      this.isLoadingResults = false;
      console.log(this.events);
    })
  }
  getuserAgenda(){
    
    this.isLoadingResults = true;
    this.agendaSrvice.getAgendaUser(this.projet.id).subscribe((data)=>{
      this.listeAgenda = data;
      this.viewAgenda();
      this.isLoadingResults = false;
      console.log(this.events);
    })
  }


  elementUser(){
    this.userTache.gettachess(this.projet.id).subscribe((data)=>{
      this.tacheList = data;
    },(error:HttpErrorResponse)=>{
      
    })
  }

  viewAgenda(){
    if(this.isGestion>0)
    {
      this.events = [];
      this.listeAgenda.forEach((element, index)=>{
        let dateD: Date =this.dateTranslate(element.dateDemarrage);
        let dateF: Date = this.dateTranslate(element.dateFinition);
        this.events.push({
          id: index,
          start: dateD,
          end:  dateF,
          title: element.motif,
          color: {
            primary: element.color,
            secondary: element.color
          },
          actions: this.actions
        })
      })
    }
    else{
      this.events = [];
      this.listeAgenda.forEach((element, index)=>{
        let dateD: Date =this.dateTranslate(element.dateDemarrage);
        let dateF: Date = this.dateTranslate(element.dateFinition);
        this.events.push({
          id: index,
          start: dateD,
          end:  dateF,
          title: element.motif,
          color: {
            primary: element.color,
            secondary: element.color
          },
          actions: this.actionsUser
        })
      })
    }

  }

  viewTache()
  {
    this.events = [];
    this.tacheList.forEach((element, index)=>{
      if(element.niveauAvancer == 'VALIDER')
      {
        let dateD: Date =this.dateTranslate(element.dateDemarrage);
        let dateF: Date = this.dateTranslate(element.dateFinition);
        this.events.push({
          id: index,
          start: dateD,
          end:  dateF,
          title: element.appellation,
          color: {
            primary: 'rgb(9, 172, 115)',
            secondary: 'rgb(9, 172, 115)'
          },
          actions: this.actionsTache
        })
      }
      else if(element.niveauAvancer === 'ENCOURS')
      {
        let dateD: Date =this.dateTranslate(element.dateDemarrage);
        let dateF: Date = this.dateTranslate(element.dateFinition);
        this.events.push({
          id: index,
          start: dateD,
          end:  dateF,
          title: element.appellation,
          color: {
            primary: 'rgb(236, 139, 11)',
            secondary: 'rgb(236, 139, 11)'
          },
          actions: this.actionsTache
        })
      }
      else if(element.niveauAvancer == 'AREFAIRE')
      {
        let dateD: Date =this.dateTranslate(element.dateDemarrage);
        let dateF: Date = this.dateTranslate(element.dateFinition);
        this.events.push({
          id: index,
          start: dateD,
          end:  dateF,
          title: element.appellation,
          color: {
            primary: 'rgb(236, 11, 105)',
            secondary: 'rgb(236, 11, 105)'
          },
          actions: this.actionsTache
        })
      }
      else{
        let dateD: Date =this.dateTranslate(element.dateDemarrage);
        let dateF: Date = this.dateTranslate(element.dateFinition);
        this.events.push({
          id: index,
          start: dateD,
          end:  dateF,
          title: element.appellation,
          color: {
            primary: 'rgb(34, 6, 194)',
            secondary: 'rgb(34, 6, 194)'
          },
          actions: this.actionsTache
        })
      }
    })
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {    
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  
  voirPlusTache(tache): void {
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

  supprimerElement(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cet evenement ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.agendaSrvice.deleteAgenda(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.snackService.openSnackBar("Element supprimé avec succès", "OK",3000);
                this.ngOnInit();
              }
              else{
                this.snackService.openSnackBar("Element non supprimer ", "OK",3000);
              }
              
          });
      }

    });
  }

  openScheduleDialog(event){
    let selectElement = null;
    if(event !=null)
      selectElement = this.listeAgenda[event.id];
    let dialogRef = this.dialog.open(UpdateAgendaComponent, {
      data: {agenda: selectElement}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.ngOnInit();
      }
    });
  }


  openScheduleView(event){
    let selectElement = null;
    if(event !=null)
      selectElement = this.listeAgenda[event.id];
    let dialogRef = this.dialog.open(ViewAgendaComponent, {
      data: {agenda: selectElement}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }


  dateTranslate(date: Date): Date{
    let dateFormat = new Date(date);
    return dateFormat;
  }
}