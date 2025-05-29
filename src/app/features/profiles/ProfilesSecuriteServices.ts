import { ProfileModel } from 'src/app/shared/models/Securite';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


/**
 * 
 * [
  {
    "id": 1,
    "libelle": "CLIENT",
    "roles": [
      {
        "id": 5,
        "libelle": "Gerer Mes Renovation (Client)",
        "name": "ROLE_GESTION_RENOVATION",
        "type": "gestion des renovation"
      },
      {
        "id": 1,
        "libelle": "Utilisateur",
        "name": "ROLE_UTILISATEUR",
        "type": "User"
      }
    ]
  },
  {
    "id": 7,
    "libelle": "Admin",
    "roles": [
      {
        "id": 4,
        "libelle": "Gerer le Menu Des Profile",
        "name": "ROLE_GESTION_USER_MENU",
        "type": "gestion profile user"
      },
      {
        "id": 5,
        "libelle": "Gerer Mes Renovation (Client)",
        "name": "ROLE_GESTION_RENOVATION",
        "type": "gestion des renovation"
      },
      {
        "id": 11,
        "libelle": "Gerer  User Bureau Etude",
        "name": "ROLE_GESTION_BUREAU_ETUDE",
        "type": "Gestion des user Bureau Etude"
      },
      {
        "id": 1,
        "libelle": "Utilisateur",
        "name": "ROLE_UTILISATEUR",
        "type": "User"
      },
      {
        "id": 6,
        "libelle": "Gerer les Profiles",
        "name": "ROLE_GESTIONS_PROFILES",
        "type": "Gestion des profiles"
      },
      {
        "id": 14,
        "libelle": "Gerer Autre User",
        "name": "ROLE_GESTION_AUTRE_USER",
        "type": "Gestion Autre User"
      },
      {
        "id": 3,
        "libelle": "Creer Modifier Supprimer Menu",
        "name": "ROLE_GESTION_MENU",
        "type": "Gestion Menu"
      },
      {
        "id": 2,
        "libelle": "Admin",
        "name": "ROLE_ADMIN",
        "type": "Root"
      },
      {
        "id": 7,
        "libelle": "Gerer les roles",
        "name": "ROLE_GESTION_ROLES",
        "type": "Gestion des roles"
      },
      {
        "id": 10,
        "libelle": "Gerer les client",
        "name": "ROLE_GESTION_CLIENT",
        "type": "Gestion des client"
      },
      {
        "id": 12,
        "libelle": "Gestion User Responsable Travaux",
        "name": "ROLE_GESTION_RESPONSABLE_TRAVAUX",
        "type": "Gestion des Responsable Travaux"
      },
      {
        "id": 8,
        "libelle": "Gerer Type Societe",
        "name": "ROLE_GESTION_TYPE_SOCIETE",
        "type": "Gestion des type de société"
      },
      {
        "id": 13,
        "libelle": "Gerer User Gerant",
        "name": "ROLE_GESTION_GERANT",
        "type": "Gestion des Gerants"
      },
      {
        "id": 16,
        "libelle": "usti",
        "name": "ROLE_USER1",
        "type": "user"
      },
      {
        "id": 9,
        "libelle": "Gerer les Société",
        "name": "ROLE_GESTION_SOCIETE",
        "type": "gestion des societe"
      },
      {
        "id": 15,
        "libelle": "Gerer validation des justificatif renovation",
        "name": "ROLE_GESTION_VALIDER_FILE_RENOVATION",
        "type": "Gestion des validation des justificatif renovation"
      }
    ]
  }
]
 */
@Injectable({
  providedIn: 'root'
})
export class ProfilesSecuriteServices {

  private datas :Array<ProfileModel>;
  private observable:Observable<ProfileModel[]>;
  constructor(private http: HttpClient) { }


  getAllprofile() : Observable<ProfileModel[]> {

        if(this.datas !=null && this.datas.length>0){
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<ProfileModel[]>(environment.BACK_END.SECURITE.PROFILES);
        }
    return this.observable;
  }

  addprofile(profiles){
    return this.http.post(environment.BACK_END.SECURITE.PROFILES, profiles);
  }

  updateprofile(id, profiles){
      return this.http.put(environment.BACK_END.SECURITE.PROFILES+""+id, profiles);
  }

  delete(id){
    return this.http.delete(environment.BACK_END.SECURITE.PROFILES+""+id);
  }
}
