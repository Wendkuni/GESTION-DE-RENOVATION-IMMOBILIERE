import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Router, RouterModule } from '@angular/router';
import { ClientViewComponent } from './profile-view/client-view/client-view.component';
import { ArtisanViewComponent } from './profile-view/artisan-view/artisan-view.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdateArtisanComponent } from './update-profile/update-artisan/update-artisan.component';
import { UpdateClientComponent } from './update-profile/update-client/update-client.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutreUserComponent } from './profile-view/autre-user/autre-user.component';
import { PersonnelEntrepriseComponent } from './profile-view/personnel-entreprise/personnel-entreprise.component';
import { UpdateAutrePersonneComponent } from './update-profile/autre-personne/autre-personne.component';
import { UpdatePersonnelEntrepriseComponent } from './update-profile/update-personnel-entreprise/update-personnel-entreprise.component';
import { authInterceptorProviders } from '../login/_helper/AuthInterceptorService';
import { AppSettings } from 'src/app/app.settings';
import { ErrorInterceptor } from '../login/_helper/error.interceptor';

export const routes = [
  { path: '', component: ProfileComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ProfileComponent, ClientViewComponent, ArtisanViewComponent, UpdateArtisanComponent, UpdateClientComponent, AutreUserComponent, PersonnelEntrepriseComponent, UpdateAutrePersonneComponent, UpdatePersonnelEntrepriseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ 
    authInterceptorProviders,
    AppSettings,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
})
export class ProfileModule { }
