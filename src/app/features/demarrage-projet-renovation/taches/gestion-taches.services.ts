import { UserAffecterProjet } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renovation } from 'src/app/shared/models/Renovation';
import { Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';

@Injectable()
export class GestionTacheService {
    
    constructor(public http:HttpClient) { }
    
    gettachess(id): Observable<Tache[]> {
        return this.http.get<Tache[]>(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE+""+id);
    }
    addtaches(taches){	    
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE, taches);
    }

    deletetaches(id: number) {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE + "" + id);
    } 

    updatetaches( id, taches){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE+""+id, taches);
    }

    verifierTaches(taches) : Observable<Tache[]>{	    
        return this.http.post<Tache[]>(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE+"verifierTache", taches);
    }

    getUser(id): Observable<UserAffecterProjet[]>
    {
        return this.http.get<UserAffecterProjet[]>(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM+"user-projet/"+id);
    }
} 