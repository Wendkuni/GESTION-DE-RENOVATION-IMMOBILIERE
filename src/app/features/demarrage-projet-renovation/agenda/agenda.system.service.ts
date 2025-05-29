import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agenda, Tache, UserAffecterProjet } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';

@Injectable()
export class GestionAgendaService {
    
    constructor(public http:HttpClient) { }
    
    getAgendas(id): Observable<Agenda[]> {
        return this.http.get<Agenda[]>(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM+""+id);
    }
    addAgenda(agenda){	    
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM, agenda);
    }

    deleteAgenda(id: number) {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM + "" + id);
    } 

    updateAgenda( id, agenda){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM+""+id, agenda);
    }

    getUser(id): Observable<UserAffecterProjet[]>
    {
        return this.http.get<UserAffecterProjet[]>(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM+"user-projet/"+id);
    }

    getAgendaUser(id): Observable<Agenda[]> {
        return this.http.get<Agenda[]>(environment.BACK_END.DEMARRAGERENAUVATION.AGENDA_USER+""+id);
    }

} 