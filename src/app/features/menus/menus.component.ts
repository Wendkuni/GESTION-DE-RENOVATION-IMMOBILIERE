import { HttpErrorResponse } from '@angular/common/http';
import { MenuServiceAdmin } from './menuServices';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuModel } from 'src/app/shared/models/MenuEntity';
import { UpdateMenuComponent } from './update/update.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  menus: MenuModel[] = [];
  rechercheGeneral = '';
  isLoadingResults = false;
  public settings: Settings;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['title', 'href', 'icon', 'router', 'target', 'parend', 'hasSub', 'action'];
  dataSources = new MatTableDataSource<MenuModel>(this.menus);
  constructor(public appSettings:AppSettings,private menuService: MenuServiceAdmin, public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService)
   { 
    this.settings = this.appSettings.settings; 
   }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.menuService.getAllMenu().subscribe((data)=>{
      this.menus = data;
      this.dataSources = new MatTableDataSource<MenuModel>(this.menus);
      //console.log(this.dataSources);
      this.isLoadingResults = false;
      this.dataSources.paginator = this.paginator;
    this.dataSources.sort = this.sort;
    })
  }

  ngAfterViewInit() {
    
  }

  recherche() {
    this.dataSources.filter = this.rechercheGeneral.trim().toLowerCase();
  }

  annulerRechercheGeneral()
  {
    this.rechercheGeneral = '';
    this.recherche();
  }

  openDialog(menu: MenuModel): void {
    const dialogRef = this.dialog.open(UpdateMenuComponent, {
      width: '600px',
      data: {menu: menu, list:this.menus },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.ngOnInit();
      }
    });
  }

  supprimerRenovation(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cette pièce complémentaire ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.menuService.delete(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
                this.ngOnInit();
              }
              else{
                this.snackBar.openSnackBar("Element non supprimer ", "OK",3000);
              }
              
          });
      }

    });
  }

}
