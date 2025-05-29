import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from 'src/app/shared/services/authentification';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; 

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './applicationRouting';

import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';
import { LayoutModule } from './layout/layout.module';
import { authInterceptorProviders } from './features/login/_helper/AuthInterceptorService';
import { ErrorInterceptor } from './features/login/_helper/error.interceptor';
import { ErrorComponentModule } from './shared/error_component/error-component.module';
import { UtilsModule } from './shared/utils/utils.module';
import { NgSelectModule } from '@ng-select/ng-select';


export function windowFactory() {
  return window;
}
@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    NgSelectModule,
    BrowserAnimationsModule,     
    FormsModule, 
    HttpClientModule,

    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
    }), 
    PerfectScrollbarModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule,
    AppRoutingModule,
   
    ErrorComponentModule,
    UtilsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ 
    authInterceptorProviders,
    AppSettings,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LoginService,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: "window", useFactory: windowFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }