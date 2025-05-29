import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { Menu } from '../menu/menu.model';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})
export class SidenavComponent implements OnInit {
  public userImage= '../assets/img/users/user.jpg';
  public menuItems:Array<any>;
  public settings: Settings;
  listMenu: Menu[];
  lordMenu = true;
  constructor(public appSettings:AppSettings, public menuService:MenuService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    //this.menuService.loading= true;
    //this.menuItems = this.menuService.getVerticalMenuItems();
    this.lordMenu = true;
    this.listMenu = [];
    this.menuService.getAppMenu().subscribe((list: Menu[]) => {
      this.menuService.datas = list;
      list.forEach((menu: Menu) => {
        const m = new Menu(menu.id,menu.title,menu.routerLink,menu.href,menu.icon,menu.target,menu.hasSubMenu,menu.parentId);
        this.listMenu.push(m);
      });
      // console.log(this.menuService.getVerticalMenuItems());
      // this.listMenu = this.menuService.getVerticalMenuItems();
      this.menuItems = this.listMenu;
      //console.log(this.listMenu);
      this.lordMenu = false;
    })
  }

  public closeSubMenus(){
    let menu = document.getElementById("vertical-menu");
    if(menu){
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if(child){
          if(child.children[0].classList.contains('expanded')){
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
