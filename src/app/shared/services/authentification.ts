import { Utilisateur } from './../models/utilisateeur';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { HelperService } from './Helper';
import { Router } from '@angular/router';

const  httpOptions={
    headers: new HttpHeaders({'content-type': 'application/json'})
  }
  
  

  @Injectable({ providedIn: 'root' })
  export class LoginService extends HelperService{
    API = environment.BACK_END.LOGIN.CONNEXION;
    constructor(private http: HttpClient, private router: Router) {
        super();
     }
  
  
    login(user): Observable<any>{
      return this.http.post(this.API, {
        username:user.username,
        password:user.password},
        httpOptions);
    }

    inscription(user:Utilisateur){
        return this.http.post(environment.BACK_END.LOGIN.INSCRIPTION, user);
    }

    checkIAmLogin() : Observable<boolean>
    {
        return this.http.head(environment.BACK_END.LOGIN.CHECK_I_AM_LOGIN, { observe: "response" }).pipe(
            map((res) => {
                console.log(res); 
              if(res.status===200){
                return  true;
               }else {
                 return false;
               }
            }),
            catchError((err) => {
              this.handleErrorServer();
              return of(false)
            }),); 
    }
  
    handleErrorServer() { 
        this.handleError<any>(`ERROR SERVER`)
        this.router.navigate(['/error']); 
      }
  

}