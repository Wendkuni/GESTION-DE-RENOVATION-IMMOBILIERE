import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/utilisateeur';
import { environment } from 'src/environments/environment';
import { ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { Renovation } from 'src/app/shared/models/Renovation';

@Injectable()
export class ProjetRenauvationService {
    
    constructor(public http:HttpClient) { }
    
    getprojets(): Observable<ProjetRenauvation[]> {
        return this.http.get<ProjetRenauvation[]>(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT);
    }
    getProjetById(id): Observable<ProjetRenauvation> {
        return this.http.get<ProjetRenauvation>(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT+""+id);
    }

    addprojet(projet){	    
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT, projet);
    }

    deleteprojet(id: number) {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT + "" + id);
    } 

    updateprojet(projet, id){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT+""+id, projet);
    }

    getAllRenovation(): Observable<Renovation[]> {
        return this.http.get<Renovation[]>(environment.BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT+"renovation/");
    }
} 