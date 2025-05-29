import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent  {

  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router) {
    this.settings = this.appSettings.settings; 
  }

  goHome(): void {
    this.router.navigate(['/login']);
  }

}
