import { AppConfirmService } from './app-confirm/app-confirm.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewJustificatif } from './view-justificatif/view-justificatif.component';
import { SharedModule } from '../shared.module';
import { UploardFileComponent } from './uploard-file/uploard-file.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppComfirmComponent } from './app-confirm/app-confirm.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: environment.BACK_END.FILEUPLOAD+'file',
   maxFilesize: 50,
   acceptedFiles: 'image/*,application/pdf',
   addRemoveLinks: true,
 };

@NgModule({
  declarations: [ViewJustificatif, UploardFileComponent,AppComfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DropzoneModule
  ],
  exports:[ViewJustificatif, UploardFileComponent],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    }
  ]
})
export class UtilsModule { }
