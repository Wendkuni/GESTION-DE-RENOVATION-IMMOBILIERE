import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAffecterProjet } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { Utilisateur } from 'src/app/shared/models/utilisateeur';

@Injectable()
export class UserAffecterProjetRenovationServices {
    
    constructor(public http:HttpClient) { }
    
    getUsers(id): Observable<UserAffecterProjet[]> {
        return this.http.get<UserAffecterProjet[]>(environment.BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER+""+id);
    }
    addUser(User){	    
        return this.http.post(environment.BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER, User);
    }

    deleteUser(id: number) {
        return this.http.delete(environment.BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER + "" + id);
    } 
    updateUser(User, id){	    
        return this.http.put(environment.BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER+""+id, User);
    }
    listUserNonAffecter(id): Observable<Utilisateur[]> {
        return this.http.get<Utilisateur[]>(environment.BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER+"user-a-affecter/"+id);
    }
} 