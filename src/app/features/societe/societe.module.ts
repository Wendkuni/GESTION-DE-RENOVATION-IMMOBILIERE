import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocieteComponent } from './societe.component';
import { UpdateSocieteComponent } from './update-societe/update-societe.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

export const routes = [
  { path: '', component: SocieteComponent, data: { breadcrumb: 'societe' } },
];

@NgModule({
  declarations: [SocieteComponent,UpdateSocieteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    NgSelectModule
  ]
})
export class SocieteModule { }
