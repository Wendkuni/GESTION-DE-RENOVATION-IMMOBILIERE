import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { typeSocietesModel } from 'src/app/shared/models/societe.model';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { typeSocietesServices } from './type-societe.service';
import { UpadateTypeSocieteComponent } from './upadate-type-societe/upadate-type-societe.component';

@Component({
  selector: 'app-type-societe',
  templateUrl: './type-societe.component.html',
  styleUrls: ['./type-societe.component.scss']
})
export class TypeSocieteComponent implements OnInit {
  typeSocietes: typeSocietesModel[] = [];
  rechercheGeneral = '';
  isLoadingResults = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['id', 'appellation','action'];
  dataSources = new MatTableDataSource<typeSocietesModel>(this.typeSocietes);
  constructor(private typeSocieteService: typeSocietesServices, public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.typeSocieteService.getAlltypeSociete().subscribe((data)=>{
      this.typeSocietes = data;
      this.dataSources = new MatTableDataSource<typeSocietesModel>(this.typeSocietes);
      //console.log(this.dataSources);typeSocietes
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

  openDialog(typeSociete): void {
    const dialogRef = this.dialog.open(UpadateTypeSocieteComponent, {
      width: '600px',
      data: {typeSociete: typeSociete},
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
        this.typeSocieteService.delete(index).subscribe(()=>{
          
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
