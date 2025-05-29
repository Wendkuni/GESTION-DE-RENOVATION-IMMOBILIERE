import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/features/login/_helper/localStorage';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public settings: Settings;
  nom: string;
  constructor(public appSettings:AppSettings, private token: TokenStorageService){
    this.settings = this.appSettings.settings; 
    this.nom = token.getUtilisateur();
  }

  ngOnInit() {
  }

}
