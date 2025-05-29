import { UserMenuAdminComponent } from './user-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserMenuComponent } from './update-user-menu/update-user-menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { NgSelectModule } from '@ng-select/ng-select';

export const routes = [
  { path: '', component: UserMenuAdminComponent, data: { breadcrumb: 'Profiles' } },
];

@NgModule({
  declarations: [
    UserMenuAdminComponent,
    UpdateUserMenuComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    UtilsModule,
    NgSelectModule,
  ]
})
export class UserMenuModule { }
