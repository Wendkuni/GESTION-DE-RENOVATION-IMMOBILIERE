import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { typeSocietesModel } from 'src/app/shared/models/societe.model';

@Injectable({
  providedIn: 'root'
})
export class typeSocietesServices {

  private datas :Array<typeSocietesModel>;
  private observable:Observable<typeSocietesModel[]>;
  constructor(private http: HttpClient) { }


  getAlltypeSociete() : Observable<typeSocietesModel[]> {

        if(this.datas !=null && this.datas.length>0){
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<typeSocietesModel[]>(environment.BACK_END.SOCIETE.TYPE_SOCIETE);
        }
    return this.observable;
  }

  addtypeSociete(typeSocietes){
    return this.http.post(environment.BACK_END.SOCIETE.TYPE_SOCIETE, typeSocietes);
  }

  updatetypeSociete(id, typeSocietes){
      return this.http.put(environment.BACK_END.SOCIETE.TYPE_SOCIETE+""+id, typeSocietes);
  }

  delete(id){
    return this.http.delete(environment.BACK_END.SOCIETE.TYPE_SOCIETE+""+id);
  }
}
