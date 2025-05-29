import { authInterceptorProviders } from './../login/_helper/AuthInterceptorService';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateAutreUserComponent } from './update-autre-user/update-autre-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AutresUserComponent } from './autres-user.component';
import { AutreUserAdminService } from './autre-user.service';
import { ErrorInterceptor } from '../login/_helper/error.interceptor';

export const routes = [
  { path: '', component: AutresUserComponent, data: { breadcrumb: 'Client' } },
];

@NgModule({
  declarations: [UpdateAutreUserComponent,AutresUserComponent],
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
  providers:[AutreUserAdminService,
    authInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },]
})
export class AutresUserModule { }
