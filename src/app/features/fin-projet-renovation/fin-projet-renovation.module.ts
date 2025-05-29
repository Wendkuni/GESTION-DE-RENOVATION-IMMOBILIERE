import { FinProjetRenovationComponent } from './fin-projet-renovation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetComponent } from './projet/projet.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { CloturerRenovationService } from './cloturerProjet.service';
import { ProjetRealiserComponent } from './projet-realiser/projet-realiser.component';

export const routes = [
  { path: 'cloturer', component: FinProjetRenovationComponent, data: { breadcrumb: 'Projet Cloturé' } },
  { path: '', component: ProjetRealiserComponent, data: { breadcrumb: 'projet realiser' } },
];

@NgModule({
  declarations: [
    ProjetComponent,
    FinProjetRenovationComponent,
    ProjetRealiserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    NgSelectModule
  ],
  providers : [CloturerRenovationService]
})
export class FinProjetRenovationModule { }
