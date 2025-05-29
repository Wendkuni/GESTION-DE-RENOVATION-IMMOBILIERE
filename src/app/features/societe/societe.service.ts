import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { societeModel } from 'src/app/shared/models/societe.model';

@Injectable({
  providedIn: 'root'
})
export class societeServices {

  private datas :Array<societeModel>;
  private observable:Observable<societeModel[]>;
  constructor(private http: HttpClient) { }


  getAllsociete() : Observable<societeModel[]> {

        if(this.datas !=null && this.datas.length>0){
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<societeModel[]>(environment.BACK_END.SOCIETE.SOCIETE);
        }
    return this.observable;
  }

  addsociete(societe){
    return this.http.post(environment.BACK_END.SOCIETE.SOCIETE, societe);
  }

  updatesociete(id, societe){
      return this.http.put(environment.BACK_END.SOCIETE.SOCIETE+""+id, societe);
  }

  delete(id){
    return this.http.delete(environment.BACK_END.SOCIETE.SOCIETE+""+id);
  }
}
