import { ViewJustificatifComponent } from './renovation-view/view-justificatif/view-justificatif.component';
import { HttpClientModule } from '@angular/common/http';
import { RenovationViewComponent } from './renovation-view/renovation-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewQuestionnaireComponent } from './renovation-view/view-questionnaire/view-questionnaire.component';
import { ExtratBase64 } from 'src/app/shared/models/FichierBase64';
import { UpdateComponentRenovation } from './update/update.component';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

export const routes = [
  { path: '', component: RenovationViewComponent, data: { breadcrumb: 'Renovation' } },
  { path: 'update/:id', component: UpdateComponentRenovation, data: { breadcrumb: 'Update' } }
];


@NgModule({
  declarations: [
    RenovationViewComponent, 
    ViewJustificatifComponent,
     ViewQuestionnaireComponent, 
     UpdateComponentRenovation,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    UtilsModule,
  ],
  providers:[ExtratBase64]
})
export class RenovationsModule { }
