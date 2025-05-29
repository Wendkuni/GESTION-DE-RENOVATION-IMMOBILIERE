import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichierComponent } from './fichier.component';
import { AddOrUpdateFileComponent } from './add-or-update-file/add-or-update-file.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DossierProjet } from './dossier-fichier.service';
import { AddOrUpdateDossierComponent } from './add-or-update-dossier/add-or-update-dossier.component';
import { environment } from 'src/environments/environment';
import { GestionDossier } from './gestion-dossier.service';
import { UserAuthoriserComponent } from './user-authoriser/user-authoriser.component';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: environment.BACK_END.FILEUPLOAD+'file',
   maxFilesize: 50,
   acceptedFiles: 'image/*,application/pdf',
   addRemoveLinks: true,
 };

export const routes = [
  { path: '', component: FichierComponent, data: { breadcrumb: 'Fichier' } },
];

@NgModule({
  declarations: [FichierComponent, AddOrUpdateFileComponent, AddOrUpdateDossierComponent, UserAuthoriserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    DragAndDropModule,
    ReactiveFormsModule,
    SharedModule,
    DragulaModule.forRoot(),
    DropzoneModule,
    NgxPaginationModule,
    NgSelectModule,
    DragDropModule
  ],
  providers:[
    DossierProjet,
    GestionDossier,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    }
  ]
})
export class FichierModule { }
