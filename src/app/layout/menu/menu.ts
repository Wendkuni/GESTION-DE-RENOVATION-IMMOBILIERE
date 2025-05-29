import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    
    new Menu (2, 'Login', '/login', null, 'exit_to_app', null, false, 0), 
]

export const horizontalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    
    new Menu (2, 'Login', '/login', null, 'exit_to_app', null, false, 0), 
]

/*

[
  {
    "href": null,
    "icon": "dashboard",
    "id": 1,
    "parentId": 0,
    "routerLink": "/",
    "target": null,
    "title": "Dashbord"
  },
  {
    "href": null,
    "icon": "dashboard",
    "id": 2,
    "parentId": 0,
    "routerLink": "/",
    "target": null,
    "title": "Renovation"
  }
]*/