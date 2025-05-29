import { CanalChat, UserAffecterProjet } from '../../../shared/models/demarrage-projet/projet-renovation.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renovation } from 'src/app/shared/models/Renovation';
import { Tache } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';

@Injectable()
export class CanalService {
    
    constructor(public http:HttpClient) { }
    
    getcanals(id): Observable<CanalChat[]> {
        return this.http.get<CanalChat[]>(environment.BACK_END.DEMARRAGERENAUVATION.CANAL_MESSAGERIE+""+id);
    }
    addcanal(canal){	    
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.CANAL_MESSAGERIE, canal);
    }

    deletecanal(id: number) {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.CANAL_MESSAGERIE + "" + id);
    } 

    updatecanal( id, canal){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.CANAL_MESSAGERIE+""+id, canal);
    }

    getUser(id): Observable<UserAffecterProjet[]>
    {
        return this.http.get<UserAffecterProjet[]>(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM+"user-projet/"+id);
    }
} 