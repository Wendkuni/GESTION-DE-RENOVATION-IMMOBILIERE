import { MenuModel, userMenuModel } from './../../shared/models/MenuEntity';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserMenusServices {

  private datas :Array<userMenuModel>;
  private observable:Observable<userMenuModel[]>;
  constructor(private http: HttpClient) { }


  getAllUserMenu() : Observable<userMenuModel[]> {

        if(this.datas !=null && this.datas.length>0){
            return of(this.datas);
        }
        else if(!this.observable) {
            this.observable = this.http.get<userMenuModel[]>(environment.BACK_END.MENU.MENU_FROM_USER);
        }
    return this.observable;
  }

  addUserMenu(UserMenus){
    return this.http.post(environment.BACK_END.MENU.MENU_FROM_USER, UserMenus);
  }

  updateUserMenu(id, UserMenus){
      return this.http.put(environment.BACK_END.MENU.MENU_FROM_USER+""+id, UserMenus);
  }

  delete(id){
    return this.http.delete(environment.BACK_END.MENU.MENU_FROM_USER+""+id);
  }

  getAllMenu() : Observable<MenuModel[]> {
    return this.http.get<MenuModel[]>(environment.BACK_END.MENU.MENU_ACTION);
  }
}
