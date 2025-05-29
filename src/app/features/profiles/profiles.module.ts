import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { UpdateProfilesSecuriteComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { NgSelectModule } from '@ng-select/ng-select';

export const routes = [
  { path: '', component: ProfilesComponent, data: { breadcrumb: 'Profiles' } },
];

@NgModule({
  declarations: [ProfilesComponent, UpdateProfilesSecuriteComponent],
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
  ]
})
export class ProfilesModule { }
