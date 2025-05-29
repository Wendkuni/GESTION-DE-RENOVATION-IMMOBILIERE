import { RolesServices } from './rolesServices';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RolesModel } from 'src/app/shared/models/Securite';
import { UpdateRolesComponent } from './update/update.component';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: RolesModel[] = [];
  rechercheGeneral = '';
  isLoadingResults = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['libelle', 'name', 'type','action'];
  dataSources = new MatTableDataSource<RolesModel>(this.roles);
  constructor(private roleService: RolesServices, public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.roleService.getAllrole().subscribe((data)=>{
      this.roles = data;
      this.dataSources = new MatTableDataSource<RolesModel>(this.roles);
      console.log(this.roles);
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

  openDialog(role): void {
    const dialogRef = this.dialog.open(UpdateRolesComponent, {
      width: '600px',
      data: {role: role},
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
        this.roleService.delete(index).subscribe(()=>{
          
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
