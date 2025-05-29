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
export class ValiderRenovation {

  public datas :Array<Renovation>;
  private observable : Observable<Renovation[]>;
  constructor(private http: HttpClient, private token : TokenStorageService) { }


  getClienListtRenovation() : Observable<Renovation[]> {
    if(this.token.getToken())
    {
        if(this.datas !=null && this.datas.length>0){
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<Renovation[]>(environment.BACK_END.RENOVATION.VALIDATIOn_RENOVATION);
        }
    }
    return this.observable;
  }

  validerFile(j) : Observable<any>{
      return this.http.put(environment.BACK_END.RENOVATION.VALIDATIOn_RENOVATION, j);
  }
}
