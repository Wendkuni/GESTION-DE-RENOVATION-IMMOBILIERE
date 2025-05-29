import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BilanComponent } from './bilan.component';
import { GanttComponent } from './gantt/gantt.component';
import { CirculaireComponent } from './circulaire/circulaire.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgGanttEditorModule } from 'ng-gantt';
import { RouterModule } from '@angular/router';
import { ListTacheService } from '../projet-user/user-projet.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FinanceProjetComponent } from './finance-projet/finance-projet.component';

export const routes = [
  { path: '', component: BilanComponent, data: { breadcrumb: 'Bilan' } },
];

@NgModule({
  declarations: [BilanComponent, GanttComponent, CirculaireComponent, FinanceProjetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    NgGanttEditorModule,
    SharedModule,
  ],
  providers: [ListTacheService]
})
export class BilanModule { }
