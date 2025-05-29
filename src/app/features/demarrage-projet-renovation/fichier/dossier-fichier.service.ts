import { DocumentSelect, Dossier, UserAffecterProjet } from './../../../shared/models/demarrage-projet/projet-renovation.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DossierProjet {
    
    constructor(public http:HttpClient) { }
    
    getAllDocumentRacine(id): Observable<DocumentSelect> {
        return this.http.get<DocumentSelect>(environment.BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET+""+id);
    }
    addDossier(dossier){	    
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET, dossier);
    }

    findDossierByI(idDossier): Observable<DocumentSelect> 
    {
        return this.http.get<DocumentSelect>(environment.BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET+"findById/"+idDossier);
    }

    updateDossier( id, dossier){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET+""+id, dossier);
    }

    addFile(file)
    {
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.FICHIER_PROJET, file);
    }

    updateFile(id,file)
    {
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.FICHIER_PROJET+""+id, file);
    }
    deleteFile(id)
    {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.FICHIER_PROJET+""+id);
    }
} 