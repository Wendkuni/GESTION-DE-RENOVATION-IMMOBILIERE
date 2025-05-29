import { Injectable } from "@angular/core";

const GESTION_USER = 'gestion-user';
const GESTION_TACHE = 'gestion-tache';
const GESTION_AGENDA = 'gestion-agenda';
const GESTION_DOSSIER = 'gestion-dossier';

@Injectable({
  providedIn: 'root'
})
export class ProjetStorageService {

  signOut() {
    window.sessionStorage.clear();
  }

  public saveGestionUser(user) {
    window.sessionStorage.removeItem(GESTION_USER);
    window.sessionStorage.setItem(GESTION_USER, user);
  }

  public getGestionUser() {
    return sessionStorage.getItem(GESTION_USER);
  }

  public saveGestionTache(user) {
    window.sessionStorage.removeItem(GESTION_TACHE);
    window.sessionStorage.setItem(GESTION_TACHE, JSON.stringify(user));
  }

  public getGestionTache() {
    return JSON.parse(sessionStorage.getItem(GESTION_TACHE));
  }

  public setGestionAgenda(menu)
  {
    window.sessionStorage.removeItem(GESTION_AGENDA);
    window.sessionStorage.setItem(GESTION_AGENDA, menu);
  }
  public setGestionDossier(id)
  {
    window.sessionStorage.removeItem(GESTION_DOSSIER);
    window.sessionStorage.setItem(GESTION_DOSSIER, JSON.stringify(id));
  }
  public getGestionDossier()
  {
    return JSON.parse(sessionStorage.getItem(GESTION_DOSSIER));
  }
  public getGestionAgenda()
  {
    return JSON.parse(sessionStorage.getItem(GESTION_AGENDA));
  }

}
