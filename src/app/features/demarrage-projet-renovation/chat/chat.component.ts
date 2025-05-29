import { HttpErrorResponse } from '@angular/common/http';
import { RolesModel } from 'src/app/shared/models/Securite';
import { DemarrageProjetRenovationComponent } from './../demarrage-projet-renovation.component';
import { ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { CanalChat, ChatUser } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Component, OnInit, HostListener, ViewChild, SimpleChanges } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { CanalService } from './canal.service';
import { WebSocketAPI } from './message.service';
import { Utilisateur } from 'src/app/shared/models/utilisateeur';
import { TokenStorageService } from '../../login/_helper/localStorage';
import { timeInterval } from 'rxjs/operators';

export class TemplateMessage{
  constructor(){}
  id:number;
  typeContenu:string;
  contenu: string;
  canal;
  utilisateur;
  dateEnvoyer;
  reponseSms;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public userImage = 'assets/img/users/user.jpg';
  public talks: CanalChat;
  MessageListe: ChatUser[] = []
  public canalChat : Array<CanalChat>;
  public sidenavOpen:boolean = true;
  public newMessage:string;
  smsRepondre: ChatUser;
  idSmsReponse = 0;
  projet : ProjetRenauvation;
  idUser: Number;
  messageTemplate  = new TemplateMessage();
  afficheSmsReponse: ChatUser;

  constructor(public appSettings:AppSettings, private canalService :CanalService, private msgService: WebSocketAPI, private token: TokenStorageService) { 
    this.settings = this.appSettings.settings; 
    this.projet = DemarrageProjetRenovationComponent.projetRenovation;
    this.idUser = parseInt(this.token.getMenu());
    
  }

  ngOnInit() {
    this.canalService.getcanals(this.projet.id).subscribe((data)=>{
      this.canalChat = data;
      this.talks = this.canalChat[0];
      this.MessageListe = data[0].messages;
      this.talks.messages = null;
      this.talks.projetRenovation = null;
      //this.talks.projetRenovation = null;
      this.msgService._connect(this.MessageListe);
     
    });
    if(window.innerWidth <= 768){
      this.sidenavOpen = false;
    }    
  } 

  retrouveChat(id)
  {
    this.afficheSmsReponse ==null;
   
    //return true;
    for(let i=0; i<this.MessageListe.length;i++)
    {
        if(this.MessageListe[i].id==id)
        {
          this.afficheSmsReponse = this.MessageListe[i];
          
          break;
        }
    }
    return this.afficheSmsReponse;
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  public getChat(obj){
    this.talks = obj;
    this.MessageListe = this.talks.messages;
    //this.msgService.getAllMessageAction(obj.id);
    
    // if(this.talks){
    //    this.talks.length = 2;
    // }   
    // this.talks = this.chatService.getTalk();
    // this.talks.push(obj);
    // this.currentChat = obj;      
    // this.talks.forEach(talk => {
    //   if(!talk.my){
    //     talk.image = obj.image;
    //   }
    // });
    // if(window.innerWidth <= 768){
    //   this.sidenav.close();
    // }     
  }
  
  public sendMessage(message: string) {       
    if(this.talks!=null)
    {
      
      this.messageTemplate.contenu = message;
      this.messageTemplate.canal = this.talks;
      this.messageTemplate.typeContenu = 'text';
      this.messageTemplate.dateEnvoyer = new Date();
      this.messageTemplate.reponseSms = this.idSmsReponse;
      this.messageTemplate.utilisateur= {
        id : this.idUser,
        email: 'Hello Mail',
         imgUrl :'',
         nom :'',
         password :'',
         prenom :'',
         provider :'',         
         contact: '',
         profile: {
          id : 0,
          libelle :'',
          roles:[{
            id : 0,
            libelle :'string',
            Type :'string',
            name :'string',
          }]
         }
      }
      this.newMessage = '';
      this.fermerReponse();
      console.log(this.messageTemplate);
      this.msgService._send(this.messageTemplate);
    }
    else{
      let canal = {
        id: 0,
        appellation: 'GENERAL',
        messages: [],
        projetRenovation: this.projet,
        dateCreation: new Date()
      }
      this.canalService.addcanal(canal).subscribe((data)=>{
        location.reload();
      },(error: HttpErrorResponse)=>{
        if(error.status<300)
        {
          location.reload();
        }
      })
    }
  }
  entrainEcrire($event){

  }

  repondreSms(chat: ChatUser)
  {
      this.smsRepondre = chat;
      this.idSmsReponse = chat.id;
  }
  public ngOnDestroy(){
    // if(this.talks)
    //   this.talks.length = 2;
  }

  fermerReponse()
  {
    this.smsRepondre = null;
    this.idSmsReponse = 0
  }

}
