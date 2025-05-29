import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValiderRenovationComponent } from './valider-renovation.component';
import { RouterModule } from '@angular/router';
import { ViewAndValiderFilesComponent } from './view-and-valider-files/view-and-valider-files.component';
import { ViewAndValiderQuestionnaireComponent } from './view-and-valider-questionnaire/view-and-valider-questionnaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

export const routes = [
  { path: '', component: ValiderRenovationComponent, data: { breadcrumb: 'Renovation-Validation' } },
];


@NgModule({
  declarations: [ValiderRenovationComponent, ViewAndValiderFilesComponent, ViewAndValiderQuestionnaireComponent],
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
export class ValiderRenovationModule { }
