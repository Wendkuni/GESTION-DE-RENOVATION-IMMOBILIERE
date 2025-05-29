import { Injectable } from "@angular/core";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const MENU_KEY = 'menu';
const USER_NAME ='utilisateur';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUtilisateur(token: string) {
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.setItem(USER_NAME, token);
  }

  public getUtilisateur(): string {
    return sessionStorage.getItem(USER_NAME);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public setMenu(menu)
  {
    window.sessionStorage.removeItem(MENU_KEY);
    window.sessionStorage.setItem(MENU_KEY, JSON.stringify(menu));
  }
  getMenu()
  {
    return JSON.parse(sessionStorage.getItem(MENU_KEY));
  }

}
