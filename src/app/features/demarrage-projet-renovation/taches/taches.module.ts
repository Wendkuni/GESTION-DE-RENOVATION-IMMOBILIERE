import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TachesComponent } from './taches.component';
import { UpdateTachesComponent } from './update-taches/update-taches.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { DragulaModule } from 'ng2-dragula';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { GestionTachesComponent } from './gestion-taches/gestion-taches.component';
import { GestionTacheService } from './gestion-taches.services';

export const routes = [
  { path: '', component: TachesComponent, data: { breadcrumb: 'taches' } },
];

@NgModule({
  declarations: [TachesComponent, UpdateTachesComponent, GestionTachesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DropzoneModule,
    NgxPaginationModule,
    NgSelectModule,
    DragDropModule
  ],
  providers: [
    GestionTacheService
  ],
  exports:[
    GestionTachesComponent
  ]
})
export class TachesModule { }
