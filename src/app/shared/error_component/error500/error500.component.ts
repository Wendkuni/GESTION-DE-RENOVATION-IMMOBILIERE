import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss']
})
export class Error500Component {
  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router) {
    this.settings = this.appSettings.settings; 
  }

  goHome(): void {
    this.router.navigate(['/login']);
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false;  
  } 
}
