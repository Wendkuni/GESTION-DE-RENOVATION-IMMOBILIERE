import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { UpdateMenuComponent } from './update/update.component';
import { NgSelectModule } from '@ng-select/ng-select';

export const routes = [
  { path: '', component: MenusComponent, data: { breadcrumb: 'MENU' } },
];

@NgModule({
  declarations: [MenusComponent, UpdateMenuComponent],
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
  ],
  providers: []
})
export class MenusModule { }
