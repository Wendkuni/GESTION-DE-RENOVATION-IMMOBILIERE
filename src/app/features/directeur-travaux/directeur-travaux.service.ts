import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonnelSociete } from 'src/app/shared/models/utilisateeur';
import { environment } from 'src/environments/environment';

@Injectable()
export class ResponsableEtudeAdminService {
    public url = "api/users";
    constructor(public http:HttpClient) { }
    
    getUsers(): Observable<PersonnelSociete[]> {
        return this.http.get<PersonnelSociete[]>(environment.BACK_END.UTILISATEUR.RESPONSABLE_TRAVAUX);
    }

    addUser(user){	    
        return this.http.post(environment.BACK_END.UTILISATEUR.RESPONSABLE_TRAVAUX, user);
    }

    updateUser(id, user){
        return this.http.put(environment.BACK_END.UTILISATEUR.RESPONSABLE_TRAVAUX+""+id, user);
    }

    deleteUser(id: number) {
        return this.http.delete(environment.BACK_END.UTILISATEUR.RESPONSABLE_TRAVAUX + "" + id);
    } 
} 