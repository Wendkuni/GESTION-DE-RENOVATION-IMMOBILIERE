import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatLayoutSharedModule } from './../material-modules/materialLayoutShared.module';
import { Error500Component } from './error500/error500.component';
import { Error404Component } from './error404/error404.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNavigationSharedModule } from '../material-modules/materialNavigationShared.module';
import { MatButtonIndicatorSharedModule } from '../material-modules/materialButtonIndicatorShared.module';
import { MatPopupModalSharedModule } from '../material-modules/materialPopupModalShared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';



@NgModule({
  declarations: [
    Error404Component,
    Error500Component
  ],
  imports: [
    CommonModule,
    MatLayoutSharedModule,
    MatNavigationSharedModule,
    MatButtonIndicatorSharedModule,
    MatPopupModalSharedModule,
    PipesModule,
    RouterModule,
    SharedModule,
    PerfectScrollbarModule
  ],
  exports : [
    Error404Component,
    Error500Component
  ]
})
export class ErrorComponentModule { }
