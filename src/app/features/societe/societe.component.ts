import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { societeModel } from 'src/app/shared/models/societe.model';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { societeServices } from './societe.service';
import { UpdateSocieteComponent } from './update-societe/update-societe.component';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {
  societes: societeModel[] = [];
  rechercheGeneral = '';
  isLoadingResults = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['nomSociete', 'siret', 'adresse','email', 'contact','typeSociete' ,'action'];
  dataSources = new MatTableDataSource<societeModel>(this.societes);
  constructor(private societeService: societeServices, public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.societeService.getAllsociete().subscribe((data)=>{
      this.societes = data;
      this.dataSources = new MatTableDataSource<societeModel>(this.societes);
      //console.log(this.dataSources);societes
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

  openDialog(societe): void {
    const dialogRef = this.dialog.open(UpdateSocieteComponent, {
      width: '600px',
      data: {societe: societe},
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
        this.societeService.delete(index).subscribe(()=>{
          
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
