import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agenda, ProjetRenauvation, Tache, UserAffecterProjet } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { CloturerRenovation } from 'src/app/shared/models/cloturerRenovation.class';

@Injectable()
export class CloturerRenovationService {
    
    constructor(public http:HttpClient) { }
    
    getProjet(): Observable<CloturerRenovation[]> {
        return this.http.get<CloturerRenovation[]>(environment.BACK_END.CLOTURER);
    }
    addProjet(agenda){	    
        return this.http.post(environment.BACK_END.CLOTURER, agenda);
    }

    deleteProjet(id: number) {
        return this.http.delete(environment.BACK_END.CLOTURER + "" + id);
    } 

    getprojetRenovation(): Observable<ProjetRenauvation[]> {
        return this.http.get<ProjetRenauvation[]>(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT);
    }

    getAllProjet(): Observable<ProjetRenauvation[]>{	    
        return this.http.get<ProjetRenauvation[]>(environment.BACK_END.BILAN_CLOTURE);
    }
} 