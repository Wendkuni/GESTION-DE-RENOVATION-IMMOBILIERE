import { ResponsableEtudeAdminService } from './directeur-travaux.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableTravauxComponent } from './directeur-travaux.component';
import { UpdateResponsableComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { authInterceptorProviders } from '../login/_helper/AuthInterceptorService';
import { ErrorInterceptor } from '../login/_helper/error.interceptor';

export const routes = [
  { path: '', component: ResponsableTravauxComponent, data: { breadcrumb: 'Bureau etude' } },
];

@NgModule({
  declarations: [ResponsableTravauxComponent, UpdateResponsableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    UtilsModule,
    NgSelectModule,
    NgxPaginationModule,
  ],
  providers:[ResponsableEtudeAdminService,
    authInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },]
})
export class DirecteurTravauxModule { }
