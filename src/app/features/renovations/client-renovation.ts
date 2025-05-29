import { GetJustificatifForReno } from './../../shared/models/Renovation';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../login/_helper/localStorage';
import { Renovation } from 'src/app/shared/models/Renovation';

@Injectable({
  providedIn: 'root'
})
export class ClientRenovation {

  public datas :Array<Renovation>;
  private observable:Observable<Renovation[]>;
  constructor(private http: HttpClient, private token : TokenStorageService) { }


  getClienListtRenovation() : Observable<Renovation[]> {
    if(this.token.getToken())
    {
        if(this.datas !=null && this.datas.length>0){
            //console.log(this.datas);
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<Renovation[]>(environment.BACK_END.RENOVATION.CLIENT_RENOVATION+""+this.token.getToken());
        }
    }
    return this.observable;
  }

  findRenovationById(id){
    return this.http.get(environment.BACK_END.RENOVATION.CLIENT_RENOVATION+""+this.token.getToken()+"/"+id);
  }

  addRenovation(r){
    return this.http.post(environment.BACK_END.RENOVATION.CLIENT_RENOVATION+""+this.token.getToken(), r);
  }

  updateRenovation(id,r){
    return this.http.put(environment.BACK_END.RENOVATION.CLIENT_RENOVATION+""+id, r);
  }
  deleteFile(appellatio)
  {
    return this.http.delete(environment.BACK_END.RENOVATION.CLIENT_RENOVATION+'justificatif/'+appellatio);
  }
  deleteRenovation(id){
    return this.http.delete(environment.BACK_END.RENOVATION.CLIENT_RENOVATION+''+id);
  }
}
