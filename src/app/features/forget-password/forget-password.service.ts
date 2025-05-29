import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private http: HttpClient) { }
  MailDeRecuperation(mail){
    return this.http.get(environment.BACK_END.LOGIN.CONNEXION+"mail-de-recuperation/"+mail);
  }
  envoiMailByCode(code){
    return this.http.get(environment.BACK_END.LOGIN.CONNEXION+"envoi-code/"+code);
  }

}
