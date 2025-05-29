import { UserMenusServices } from './user-menu-admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { userMenuModel } from 'src/app/shared/models/MenuEntity';
import { UpdateUserMenuComponent } from './update-user-menu/update-user-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuAdminComponent implements OnInit {
  UserMenus: userMenuModel[] = [];
  rechercheGeneral = '';
  isLoadingResults = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['id','menu', 'profile','action'];
  dataSources = new MatTableDataSource<userMenuModel>(this.UserMenus);
  constructor(private UserMenuService: UserMenusServices, public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.UserMenuService.getAllUserMenu().subscribe((data)=>{
      this.UserMenus = data;
      this.dataSources = new MatTableDataSource<userMenuModel>(this.UserMenus);
      //console.log(this.dataSources);UserMenus
      this.dataSources.paginator = this.paginator;
    this.dataSources.sort = this.sort;
      this.isLoadingResults = false;
    })
  }

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
    this.dataSources.sort = this.sort;
  }

  recherche() {
    this.dataSources.filter = this.rechercheGeneral.trim().toLowerCase();
  }

  annulerRechercheGeneral()
  {
    this.rechercheGeneral = '';
    this.recherche();
  }

  openDialog(UserMenu): void {
    const dialogRef = this.dialog.open(UpdateUserMenuComponent, {
      width: '600px',
      height: '350px',
      data: {UserMenu: UserMenu},
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
        this.UserMenuService.delete(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
                this.ngOnInit();
              }
              else{
                this.snackBar.openSnackBar("Element non supprimer car affilier a un utilisateur", "OK",3000);
              }
              
          });
      }

    });
  }
}
