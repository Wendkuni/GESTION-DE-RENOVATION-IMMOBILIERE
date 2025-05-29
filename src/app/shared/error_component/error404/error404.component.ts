import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {
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
