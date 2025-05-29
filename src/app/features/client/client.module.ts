import { ClientAdminService } from './client-admin-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { UpdateClientAdminComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { authInterceptorProviders } from '../login/_helper/AuthInterceptorService';
import { ErrorInterceptor } from '../login/_helper/error.interceptor';

export const routes = [
  { path: '', component: ClientComponent, data: { breadcrumb: 'Client' } },
];


@NgModule({
  declarations: [ClientComponent, UpdateClientAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    UtilsModule,
    NgxPaginationModule,
  ],
  providers:[ClientAdminService,
    authInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },]
})
export class ClientModule { }
