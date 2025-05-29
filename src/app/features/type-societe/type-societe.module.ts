import { TypeSocieteComponent } from './type-societe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UpadateTypeSocieteComponent } from './upadate-type-societe/upadate-type-societe.component';

export const routes = [
  { path: '', component: TypeSocieteComponent, data: { breadcrumb: 'Type-societe' } },
];

@NgModule({
  declarations: [TypeSocieteComponent, UpadateTypeSocieteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class TypeSocieteModule { }
