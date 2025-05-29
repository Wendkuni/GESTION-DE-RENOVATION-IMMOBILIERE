import { GestionAgendaService } from './agenda.system.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarModule } from 'angular-calendar';
import { ViewAgendaComponent } from './view-agenda/view-agenda.component';

export const routes = [
  { path: '', component: AgendaComponent, data: { breadcrumb: 'Agenda' } },
];

@NgModule({
  declarations: [AgendaComponent, UpdateAgendaComponent, ViewAgendaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DropzoneModule,
    NgxPaginationModule,
    NgSelectModule,
    CalendarModule,
  ],providers :[GestionAgendaService]
})
export class AgendaModule { }
