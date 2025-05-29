import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/utilisateeur';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientAdminService {
    
    constructor(public http:HttpClient) { }
    
    getUsers(): Observable<Client[]> {
        return this.http.get<Client[]>(environment.BACK_END.UTILISATEUR.CLIENT);
    }

    addUser(user){	    
        return this.http.post(environment.BACK_END.UTILISATEUR.CLIENT, user);
    }


    deleteUser(id: number) {
        return this.http.delete(environment.BACK_END.UTILISATEUR.CLIENT + "" + id);
    } 

    updateUser(user, id){	    
        return this.http.patch(environment.BACK_END.UTILISATEUR.CLIENT+"update/"+id, user);
    }
} 