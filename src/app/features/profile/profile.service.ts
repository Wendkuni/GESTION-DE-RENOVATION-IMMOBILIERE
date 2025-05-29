import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../login/_helper/localStorage';
import { Utilisateur } from 'src/app/shared/models/utilisateeur';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public userProfile : Utilisateur;
  constructor(private http: HttpClient, private token : TokenStorageService) { }


  getMe() : Observable<any> {
    return this.http.get(environment.BACK_END.LOGIN.CHECK_I_AM_LOGIN+""+this.token.getToken());
  }
}
