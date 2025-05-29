import { Component } from '@angular/core';
import { NavigationCancel, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  constructor(public appSettings:AppSettings, private router: Router){
      this.settings = this.appSettings.settings;
  } 

  ngOnInit() { 

    this.router.events.subscribe(event =>{
      //console.log(event);
      if(event instanceof NavigationStart){
        setTimeout(()=>{
          this.settings.loadingSpinner = true;
        })
      }

      else if(event instanceof NavigationCancel){
        setTimeout(()=>{
          this.settings.loadingSpinner = false;
        })
      }

      else if(event instanceof NavigationEnd){
        setTimeout(()=>{
          this.settings.loadingSpinner = false;
        })
      }

      else{
        setTimeout(()=>{
          this.settings.loadingSpinner = false;
        })
      }
    })
  }
}