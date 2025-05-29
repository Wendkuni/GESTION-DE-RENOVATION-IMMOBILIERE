import { ProjetRenauvation } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renovation } from 'src/app/shared/models/Renovation';
import { Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';

@Injectable()
export class ListTacheService {
    
    constructor(public http:HttpClient) { }
    
    gettachess(id): Observable<Tache[]> {
        return this.http.get<Tache[]>(environment.BACK_END.DEMARRAGERENAUVATION.TACHES_USER+"taches/"+id);
    }
    getAllProjet(): Observable<ProjetRenauvation[]>{	    
        return this.http.get<ProjetRenauvation[]>(environment.BACK_END.DEMARRAGERENAUVATION.TACHES_USER+"projet/");
    }
    getProjet(id): Observable<ProjetRenauvation>{	    
        return this.http.get<ProjetRenauvation>(environment.BACK_END.DEMARRAGERENAUVATION.TACHES_USER+"projet/"+id);
    }

    updatetaches(id, taches){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.TACHES_USER+"taches/"+id, taches);
    }
} 