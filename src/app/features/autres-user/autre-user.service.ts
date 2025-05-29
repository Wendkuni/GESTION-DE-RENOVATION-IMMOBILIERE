import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutresUser } from 'src/app/shared/models/utilisateeur';
import { environment } from 'src/environments/environment';

@Injectable()
export class AutreUserAdminService {
    public url = "api/users";
    constructor(public http:HttpClient) { }
    
    getUsers(): Observable<AutresUser[]> {
        return this.http.get<AutresUser[]>(environment.BACK_END.UTILISATEUR.AUTRE_USER);
    }

    addUser(user){	    
        return this.http.post(environment.BACK_END.UTILISATEUR.AUTRE_USER, user);
    }

    updateUser(id, user){
        return this.http.put(environment.BACK_END.UTILISATEUR.AUTRE_USER+""+id, user);
    }

    deleteUser(id: number) {
        return this.http.delete(environment.BACK_END.UTILISATEUR.AUTRE_USER + "" + id);
    } 
} 