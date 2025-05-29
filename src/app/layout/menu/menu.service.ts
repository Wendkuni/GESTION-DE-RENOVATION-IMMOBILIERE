import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Menu } from './menu.model';
import { verticalMenuItems, horizontalMenuItems } from './menu';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';
import { HelperService } from 'src/app/shared/services/Helper';
import { TokenStorageService } from 'src/app/features/login/_helper/localStorage';

@Injectable()
export class MenuService extends HelperService {

   datas :Array<Menu>;
  private observable:Observable<Menu[]>;
  public loading: boolean=true;
  private  API_MENU = environment.BACK_END.MENU.MENU_USER;
  constructor(private location:Location, private http: HttpClient, private token: TokenStorageService,
              private router:Router){

                super();
               } 
    
  public getVerticalMenuItems():Array<Menu> {
    return verticalMenuItems;
  }

  public getAppMenu() : Observable<Menu[]> {

    if(this.token.getToken())
    {
      if(this.datas &&  this.datas.length>0) {
        return of(this.datas);
      }else if(!this.observable) {
        this.observable=this.http.get<Menu[]>(this.API_MENU + ""+this.token.getToken())  
      }  
    }    
     return this.observable;
  }    

  public getHorizontalMenuItems():Array<Menu> {
    return horizontalMenuItems;
  }

  public expandActiveSubMenu(menu:Array<Menu>){
      let url = this.location.path();
      let routerLink = url; // url.substring(1, url.length);
      let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
      if(activeMenuItem[0]){
        let menuItem = activeMenuItem[0];
        while (menuItem.parentId != 0){  
          let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
          menuItem = parentMenuItem;
          this.toggleMenuItem(menuItem.id);
        }
      }
  }

  public toggleMenuItem(menuId){
    let menuItem = document.getElementById('menu-item-'+menuId);
    let subMenu = document.getElementById('sub-menu-'+menuId);  
    if(subMenu){
      if(subMenu.classList.contains('show')){
        subMenu.classList.remove('show');
        menuItem.classList.remove('expanded');
      }
      else{
        subMenu.classList.add('show');
        menuItem.classList.add('expanded');
      }      
    }
  }

  public closeOtherSubMenus(menu:Array<Menu>, menuId){
    let currentMenuItem = menu.filter(item => item.id == menuId)[0]; 
    if(currentMenuItem.parentId == 0 && !currentMenuItem.target){
      menu.forEach(item => {
        if(item.id != menuId){
          let subMenu = document.getElementById('sub-menu-'+item.id);
          let menuItem = document.getElementById('menu-item-'+item.id);
          if(subMenu){
            if(subMenu.classList.contains('show')){
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            }              
          } 
        }
      });
    }
  }

  getMenuUser()
  {
    return this.http.get(environment.BACK_END.MENU.MENU_USER);
  }
  
}
