import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetRenovationComponent } from './projet-renovation.component';
import { UpdateProjetRenovationComponent } from './update-projet-renovation/update-projet-renovation.component';
import { ProjetRenauvationService } from './projet-renovation.service';
import { environment } from 'src/environments/environment';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RenovationsModule } from '../renovations/renovations.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClientRenovation } from '../renovations/client-renovation';
import { UtilisateurAffecterModalComponent } from './utilisateur-affecter-modal/utilisateur-affecter-modal.component';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: environment.BACK_END.FILEUPLOAD+'file',
   maxFilesize: 50,
   acceptedFiles: 'image/*,application/pdf',
   addRemoveLinks: true,
 };
 
export const routes = [
  { path: '', component: ProjetRenovationComponent, data: { breadcrumb: 'Projet Renauvation' } },
  { path: 'update/:id', component: UpdateProjetRenovationComponent, data: { breadcrumb: 'update' } },
];

@NgModule({
  declarations: [ProjetRenovationComponent, UpdateProjetRenovationComponent, UtilisateurAffecterModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DropzoneModule,
    NgxPaginationModule,
    NgSelectModule
  ],
  providers: [
    ProjetRenauvationService,
    ClientRenovation,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    }
  ],
  exports: [UtilisateurAffecterModalComponent]
})
export class ProjetRenovationModule { }
