import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiqueComponent } from './statistique.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgGanttEditorModule } from 'ng-gantt';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CloturerRenovationService } from '../fin-projet-renovation/cloturerProjet.service';
import { StatistiqueDureeComponent } from './statistique-duree/statistique-duree.component';
import { StatistiqueBudgetComponent } from './statistique-budget/statistique-budget.component';
import { StatistiqueElementsComponent } from './statistique-elements/statistique-elements.component';

export const routes = [
  { path: '', component: StatistiqueComponent, data: { breadcrumb: 'Statistique' } },
];


@NgModule({
  declarations: [StatistiqueComponent, StatistiqueDureeComponent, StatistiqueBudgetComponent, StatistiqueElementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    NgGanttEditorModule,
    SharedModule,
    NgSelectModule
  ],
  providers: [CloturerRenovationService]
})
export class StatistiqueModule { }
