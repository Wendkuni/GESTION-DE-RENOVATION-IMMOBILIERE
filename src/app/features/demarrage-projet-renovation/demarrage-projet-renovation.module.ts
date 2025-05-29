import { UserAffecterProjetRenovationServices } from './../user-affecter-projet-renovation/user-affecter-projet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemarrageProjetRenovationComponent } from './demarrage-projet-renovation.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjetUserComponent } from './projet-user/projet-user.component';
import { UserAffecterDemarrageComponent } from './user-affecter-demarrage/user-affecter-demarrage.component';

export const routes = [
  { path: ':id',
   component: DemarrageProjetRenovationComponent,
   children:[
    { path: 'taches', loadChildren: () => import('./taches/taches.module').then(m => m.TachesModule), data: { breadcrumb: 'taches' } },
    { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule), data: { breadcrumb: 'Agenda' } },
    { path: 'bilan', loadChildren: () => import('./bilan/bilan.module').then(m => m.BilanModule), data: { breadcrumb: 'Bilan' } },
    { path: 'fichier', loadChildren: () => import('./fichier/fichier.module').then(m => m.FichierModule), data: { breadcrumb: 'fichier' } },
    { path: 'message', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'chat' } },
   ]
  },
  {path:'', component: ProjetUserComponent, data: { breadcrumb: 'Projet' } },
  
];

@NgModule({
  declarations: [DemarrageProjetRenovationComponent, ProjetUserComponent, UserAffecterDemarrageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DropzoneModule,
    NgxPaginationModule,
    NgSelectModule
  ],
  providers:[
    UserAffecterProjetRenovationServices
  ]
})
export class DemarrageProjetRenovationModule { }
