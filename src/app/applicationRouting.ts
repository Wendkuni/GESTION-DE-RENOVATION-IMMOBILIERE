import { Error500Component } from './shared/error_component/error500/error500.component';
import { ErrorComponent } from './layout/error/error.component';
import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 
import { environment } from 'src/environments/environment';
import { AuthGuard } from './features/login/_guard/auth.guard';
import { TemplateComponent } from './layout/template/template.component';
import { Error404Component } from './shared/error_component/error404/error404.component';

export const routes: Routes = [
    { 
        path: '',
        canActivate: [AuthGuard],
        component: TemplateComponent, 
        children: [
            { path: environment.FRONTEND_ROUTES.DASHBOARD, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: environment.FRONTEND_ROUTES.RENOVATION, loadChildren: () => import('./features/renovations/renovations.module').then(m => m.RenovationsModule), data: { breadcrumb: 'Renovations' } },
            { path: environment.FRONTEND_ROUTES.PROFILE_USER, loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },
            { path: environment.FRONTEND_ROUTES.VALIDER_FILE_RENOVATION, loadChildren: () => import('./features/valider-renovation/valider-renovation.module').then(m => m.ValiderRenovationModule), data: { breadcrumb: 'Valider-Renovation' } },
            { path: environment.FRONTEND_ROUTES.MENU, loadChildren: () => import('./features/menus/menus.module').then(m => m.MenusModule), data: { breadcrumb: 'Menu' } },
            { path: environment.FRONTEND_ROUTES.ROLES, loadChildren: () => import('./features/roles/roles.module').then(m => m.RolesModule), data: { breadcrumb: 'Roles' } },
            { path: environment.FRONTEND_ROUTES.PROFILES, loadChildren: () => import('./features/profiles/profiles.module').then(m => m.ProfilesModule), data: { breadcrumb: 'profiles' } },
            { path: environment.FRONTEND_ROUTES.CLIENT, loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule), data: { breadcrumb: 'client' } },
            { path: environment.FRONTEND_ROUTES.TYPE_SOCIETE, loadChildren: () => import('./features/type-societe/type-societe.module').then(m => m.TypeSocieteModule), data: { breadcrumb: 'types-societe' } },
            { path: environment.FRONTEND_ROUTES.SOCIETE, loadChildren: () => import('./features/societe/societe.module').then(m => m.SocieteModule), data: { breadcrumb: 'societe' } },
            { path: environment.FRONTEND_ROUTES.USER_MENU, loadChildren: () => import('./features/user-menu/user-menu.module').then(m => m.UserMenuModule), data: { breadcrumb: 'societe' } },
            { path: environment.FRONTEND_ROUTES.AUTRE_USER, loadChildren: () => import('./features/autres-user/autres-user.module').then(m => m.AutresUserModule), data: { breadcrumb: 'Autres-user' } },
            { path: environment.FRONTEND_ROUTES.BUREAU_ETUDE, loadChildren: () => import('./features/bureau-etude/bureau-etude.module').then(m => m.BureauEtudeModule), data: { breadcrumb: 'Bureau etude' } },
            { path: environment.FRONTEND_ROUTES.RESPONSABLE_TRAVAUX, loadChildren: () => import('./features/directeur-travaux/directeur-travaux.module').then(m => m.DirecteurTravauxModule), data: { breadcrumb: 'Responsable Travaux' } },
            { path: environment.FRONTEND_ROUTES.GERANT, loadChildren: () => import('./features/gerant/gerant.module').then(m => m.GerantModule), data: { breadcrumb: 'Gerant' } },
            { path: environment.FRONTEND_ROUTES.PROJET_RENAUVATION, loadChildren: () => import('./features/projet-renovation/projet-renovation.module').then(m => m.ProjetRenovationModule), data: { breadcrumb: 'Demarrer projet de renovation' } },
            { path: environment.FRONTEND_ROUTES.DEMARRER_PROJET, loadChildren: () => import('./features/demarrage-projet-renovation/demarrage-projet-renovation.module').then(m => m.DemarrageProjetRenovationModule), data: { breadcrumb: 'Suivi de chantier' } },
            { path: environment.FRONTEND_ROUTES.PROJET_REALISER, loadChildren: () => import('./features/fin-projet-renovation/fin-projet-renovation.module').then(m => m.FinProjetRenovationModule), data: { breadcrumb: 'Projet realisé' } },
            { path: environment.FRONTEND_ROUTES.STATISTIQUE, loadChildren: () => import('./features/statistique/statistique.module').then(m => m.StatistiqueModule), data: { breadcrumb: 'Statistique General' } },
        ],
        
    },
    { path: environment.FRONTEND_ROUTES.LOGIN, loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    {path: environment.FRONTEND_ROUTES.ERROR, component: ErrorComponent},
    {path: environment.FRONTEND_ROUTES.ERROR404, component: Error404Component},
    {path: environment.FRONTEND_ROUTES.ERROR500, component: Error500Component},
    { path: '**', redirectTo: 'Error/400', pathMatch: 'full' },

]; 

@NgModule({
    imports: [
        RouterModule.forRoot(routes,  { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }