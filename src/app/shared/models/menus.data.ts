import { Menu } from "src/app/layout/menu/menu.model";

export const MenuData: Menu[] = [
    {
      "id": 2,
      "title": "Annuaire d'identité",
      "routerLink": "",
      "href": "",
      "icon": "dvr",
      "target": null,
      "hasSubMenu": true,
      "parentId": 0
    },
    {
      "id": 6,
      "title": "System",
      "routerLink": null,
      "href": null,
      "icon": "memory",
      "target": null,
      "hasSubMenu": true,
      "parentId": 0
    },
    {
      "id": 8,
      "title": "Validation des fichier",
      "routerLink": "/valider-renovation",
      "href": null,
      "icon": "business",
      "target": null,
      "hasSubMenu": false,
      "parentId": 0
    },
    {
      "id": 16,
      "title": "Demarrer une renovation",
      "routerLink": "/projet-renovation",
      "href": null,
      "icon": "note_alt",
      "target": null,
      "hasSubMenu": false,
      "parentId": 0
    },
    {
      "id": 10,
      "title": "Autre Utilisateur",
      "routerLink": "/user/autre-user",
      "href": null,
      "icon": "supervisor_account",
      "target": null,
      "hasSubMenu": false,
      "parentId": 2
    },
    {
      "id": 12,
      "title": "Responsable Travaux",
      "routerLink": "/user/responsable-travaux",
      "href": null,
      "icon": "supervisor_account",
      "target": null,
      "hasSubMenu": false,
      "parentId": 2
    },
    {
      "id": 11,
      "title": "Bureau Etude",
      "routerLink": "/user/bureau-etude",
      "href": null,
      "icon": "supervisor_account",
      "target": null,
      "hasSubMenu": false,
      "parentId": 2
    },
    {
      "id": 9,
      "title": "Client",
      "routerLink": "/user/client",
      "href": null,
      "icon": "supervisor_account",
      "target": null,
      "hasSubMenu": false,
      "parentId": 2
    },
    {
      "id": 14,
      "title": "Société",
      "routerLink": "/societe",
      "href": null,
      "icon": "business",
      "target": null,
      "hasSubMenu": false,
      "parentId": 13
    },
    {
      "id": 15,
      "title": "Type Société",
      "routerLink": "/types-societe",
      "href": null,
      "icon": "bookmark",
      "target": null,
      "hasSubMenu": false,
      "parentId": 13
    },
    {
      "id": 13,
      "title": "Gerer Société",
      "routerLink": null,
      "href": null,
      "icon": "business",
      "target": null,
      "hasSubMenu": true,
      "parentId": 2
    },
    {
      "id": 17,
      "title": "Parametre",
      "routerLink": null,
      "href": null,
      "icon": "settings",
      "target": null,
      "hasSubMenu": true,
      "parentId": 0
    },
    {
      "id": 4,
      "title": "Roles",
      "routerLink": "/systeme/roles",
      "href": null,
      "icon": "security",
      "target": null,
      "hasSubMenu": false,
      "parentId": 6
    },
    {
      "id": 3,
      "title": "Profile des Utilisateur",
      "routerLink": "/systeme/profiles",
      "href": null,
      "icon": "security",
      "target": null,
      "hasSubMenu": false,
      "parentId": 6
    },
    {
      "id": 1,
      "title": "Profile Menu",
      "routerLink": "/systeme/user-menu",
      "href": null,
      "icon": "verified_user",
      "target": null,
      "hasSubMenu": false,
      "parentId": 17
    },
    {
      "id": 5,
      "title": "Menu",
      "routerLink": "/systeme/menu",
      "href": null,
      "icon": "list_alt",
      "target": null,
      "hasSubMenu": false,
      "parentId": 17
    },
    {
      "id": 7,
      "title": "Nouvelle renovation",
      "routerLink": "/renovation",
      "href": "",
      "icon": "business",
      "target": null,
      "hasSubMenu": false,
      "parentId": 0
    },
    {
      "id": 19,
      "title": "Suivi de chantier",
      "routerLink": "/demarrer-projet",
      "href": null,
      "icon": "business",
      "target": null,
      "hasSubMenu": false,
      "parentId": 0
    },
    {
      "id": 20,
      "title": "Dashbord",
      "routerLink": "/",
      "href": null,
      "icon": "dashboard",
      "target": null,
      "hasSubMenu": false,
      "parentId": 0
    },
    {
      "id": 21,
      "title": "Gerants",
      "routerLink": "/user/gerant",
      "href": null,
      "icon": "supervisor_account",
      "target": null,
      "hasSubMenu": false,
      "parentId": 2
    }
  ];