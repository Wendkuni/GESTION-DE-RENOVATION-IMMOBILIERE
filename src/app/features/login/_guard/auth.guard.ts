
import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/shared/services/authentification';

import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../_helper/localStorage';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    bool = false;

    constructor(
        private router: Router,
        private authenticationService: LoginService,
        private token: TokenStorageService
    ) {
      
     }
 
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        if(this.token.getToken() && this.authenticationService.checkIAmLogin().subscribe()){
            this.authenticationService.checkIAmLogin();
            return true;
           
        }else {
            //console.log("pageFirstTime false")
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
        }
        
    }
}