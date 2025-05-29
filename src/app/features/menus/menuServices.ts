import { environment } from 'src/environments/environment';
import { MenuModel } from './../../shared/models/MenuEntity';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


/****
 * 
 * [
  {
    "id": 1,
    "title": "Dashbord",
    "routerLink": "/",
    "href": null,
    "icon": "dashboard",
    "target": null,
    "hasSubMenu": false,
    "parentId": 0
  },
  {
    "id": 8,
    "title": "Annuaire d'identité",
    "routerLink": "",
    "href": "",
    "icon": "dvr",
    "target": null,
    "hasSubMenu": true,
    "parentId": 0
  },
  {
    "id": 9,
    "title": "Gerants",
    "routerLink": "/user/gerant",
    "href": null,
    "icon": "supervisor_account",
    "target": null,
    "hasSubMenu": false,
    "parentId": 8
  },
  {
    "id": 19,
    "title": "Parametre",
    "routerLink": null,
    "href": null,
    "icon": "settings",
    "target": null,
    "hasSubMenu": true,
    "parentId": 0
  },
  {
    "id": 17,
    "title": "Profile Menu",
    "routerLink": "/systeme/user-menu",
    "href": null,
    "icon": "verified_user",
    "target": null,
    "hasSubMenu": false,
    "parentId": 19
  },
  {
    "id": 16,
    "title": "Profile des Utilisateur",
    "routerLink": "/systeme/profiles",
    "href": null,
    "icon": "security",
    "target": null,
    "hasSubMenu": false,
    "parentId": 14
  },
  {
    "id": 18,
    "title": "Roles",
    "routerLink": "/systeme/roles",
    "href": null,
    "icon": "security",
    "target": null,
    "hasSubMenu": false,
    "parentId": 14
  },
  {
    "id": 15,
    "title": "Menu",
    "routerLink": "/systeme/menu",
    "href": null,
    "icon": "list_alt",
    "target": null,
    "hasSubMenu": false,
    "parentId": 19
  },
  {
    "id": 14,
    "title": "System",
    "routerLink": null,
    "href": null,
    "icon": "memory",
    "target": null,
    "hasSubMenu": true,
    "parentId": 0
  },
  {
    "id": 2,
    "title": "Suivi chantier",
    "routerLink": "/renovation",
    "href": "",
    "icon": "business",
    "target": null,
    "hasSubMenu": false,
    "parentId": 0
  },
  {
    "id": 13,
    "title": "Validation des fichier",
    "routerLink": "/valider-renovation",
    "href": null,
    "icon": "business",
    "target": null,
    "hasSubMenu": false,
    "parentId": 0
  },
  {
    "id": 20,
    "title": "Client",
    "routerLink": "/user/client",
    "href": null,
    "icon": "supervisor_account",
    "target": null,
    "hasSubMenu": false,
    "parentId": 8
  },
  {
    "id": 12,
    "title": "Autre Utilisateur",
    "routerLink": "/user/autre-user",
    "href": null,
    "icon": "supervisor_account",
    "target": null,
    "hasSubMenu": false,
    "parentId": 8
  },
  {
    "id": 11,
    "title": "Bureau Etude",
    "routerLink": "/user/bureau-etude",
    "href": null,
    "icon": "supervisor_account",
    "target": null,
    "hasSubMenu": false,
    "parentId": 8
  },
  {
    "id": 10,
    "title": "Responsable Travaux",
    "routerLink": "/user/responsable-travaux",
    "href": null,
    "icon": "supervisor_account",
    "target": null,
    "hasSubMenu": false,
    "parentId": 8
  },
  {
    "id": 21,
    "title": "Gerer Société",
    "routerLink": null,
    "href": null,
    "icon": "business",
    "target": null,
    "hasSubMenu": true,
    "parentId": 8
  },
  {
    "id": 22,
    "title": "Société",
    "routerLink": "/societe",
    "href": null,
    "icon": "business",
    "target": null,
    "hasSubMenu": false,
    "parentId": 21
  },
  {
    "id": 23,
    "title": "Type Société",
    "routerLink": "/types-societe",
    "href": null,
    "icon": "bookmark",
    "target": null,
    "hasSubMenu": false,
    "parentId": 21
  },
  {
    "id": 24,
    "title": null,
    "routerLink": null,
    "href": null,
    "icon": null,
    "target": null,
    "hasSubMenu": false,
    "parentId": 0
  },
  {
    "id": 26,
    "title": "Demarrer une renovation",
    "routerLink": "/projet-renovation",
    "href": null,
    "icon": "note_alt",
    "target": null,
    "hasSubMenu": false,
    "parentId": 0
  }
]
 */
@Injectable({
  providedIn: 'root'
})
export class MenuServiceAdmin {

  private datas :Array<MenuModel>;
  private observable:Observable<MenuModel[]>;
  constructor(private http: HttpClient) { }


  getAllMenu() : Observable<MenuModel[]> {

        if(this.datas !=null && this.datas.length>0){
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<MenuModel[]>(environment.BACK_END.MENU.MENU_ACTION);
        }
    return this.observable;
  }

  addMenu(menu){
    return this.http.post(environment.BACK_END.MENU.MENU_ACTION, menu);
  }

  updateMenu(id, menu){
      return this.http.put(environment.BACK_END.MENU.MENU_ACTION+""+id, menu);
  }

  delete(id){
    return this.http.delete(environment.BACK_END.MENU.MENU_ACTION+""+id);
  }
}
