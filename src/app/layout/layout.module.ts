import { ErrorComponent } from './error/error.component';
import { MatButtonIndicatorSharedModule } from './../shared/material-modules/materialButtonIndicatorShared.module';
import { MatLayoutSharedModule } from './../shared/material-modules/materialLayoutShared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagsMenuComponent } from './flags-menu/flags-menu.component';
import { FullScreenComponent } from './fullscreen/fullscreen.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { VerticalMenuComponent } from './menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './menu/horizontal-menu/horizontal-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MessagesComponent } from './messages/messages.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatNavigationSharedModule } from '../shared/material-modules/materialNavigationShared.module';
import { MatPopupModalSharedModule } from '../shared/material-modules/materialPopupModalShared.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationsComponent } from './applications/applications.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatBadgeModule} from '@angular/material/badge';
import { UpdatePasswordComponent } from './update-password/update-password.component';



@NgModule({
  declarations: [
    ApplicationsComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    BreadcrumbComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    SidenavComponent,
    MessagesComponent,
    UserMenuComponent,
    TemplateComponent,
    ErrorComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatLayoutSharedModule,
    MatNavigationSharedModule,
    MatButtonIndicatorSharedModule,
    MatPopupModalSharedModule,
    PipesModule,
    RouterModule,
    SharedModule,
    PerfectScrollbarModule,
    MatBadgeModule
  ],
  exports: [
    ApplicationsComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    BreadcrumbComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    SidenavComponent,
    MessagesComponent,
    UserMenuComponent,
    TemplateComponent,
    ErrorComponent,
    UpdatePasswordComponent
  ]
})
export class LayoutModule { }
