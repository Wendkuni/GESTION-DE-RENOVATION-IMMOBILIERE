import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { LoginService } from './../../shared/services/authentification';
import { InscriptionComponent } from './../inscription/inscription.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'inscription', component: InscriptionComponent, pathMatch: 'full' },
  { path: 'forgetpassword', component: ForgetPasswordComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [LoginComponent,InscriptionComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('743279905565-e1g2po029tupno9991csqsbb98qrqg8q.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('708823373162698')
          }
        ]
      } as SocialAuthServiceConfig,
      
    },
    LoginService
  ],
})
export class LoginModule { }
