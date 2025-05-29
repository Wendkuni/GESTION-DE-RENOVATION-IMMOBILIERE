import { DocumentSelect, Dossier, UserAffecterProjet } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class GestionDossier {
    
    constructor(public http:HttpClient) { }
    
    modifierParent(dossier){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER, dossier);
    }
    deleteDossier(id)
    {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER+""+id);
    }

    getUser(id): Observable<UserAffecterProjet[]>
    {
        return this.http.get<UserAffecterProjet[]>(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER+"user-projet/"+id);
    }

    UserDossier(id): Observable<UserAffecterProjet[]>
    {
        return this.http.get<UserAffecterProjet[]>(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER+""+id);
    }

    authoriserUser(idDossier, user)
    {
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER+"user-autoriser/ajouter/"+idDossier,user);
    }

    supprimerUser(idDossier, userId)
    {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER+"user-autoriser/"+idDossier+"/"+userId);
    }


} 