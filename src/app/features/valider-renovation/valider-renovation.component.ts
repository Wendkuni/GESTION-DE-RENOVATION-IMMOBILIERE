import { ValiderRenovation } from './valider-renovation.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Renovation } from 'src/app/shared/models/Renovation';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { TokenStorageService } from '../login/_helper/localStorage';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';

@Component({
  selector: 'app-valider-renovation',
  templateUrl: './valider-renovation.component.html',
  styleUrls: ['./valider-renovation.component.scss']
})
export class ValiderRenovationComponent implements OnInit {


  img;
  isLoadingResults= false;
  public sidenavOpen:boolean = true;
  renovateur : Renovation[]=[];
  rechercheGeneral = '';
  renovationSelect: Renovation;
  dataSource = new MatTableDataSource<Renovation>(this.renovateur);
  constructor(private http: HttpClient, private renovation : ValiderRenovation,
    private snackBar:SnackBarService,
    private token: TokenStorageService,
     private confirm: AppConfirmService) { }
  tokenUrl:any;
  idRenovation;
  ngOnInit(): void {
    this.initData();
    this.tokenUrl = this.token.getToken()
  }
  initData(){
    this.isLoadingResults = true;
    this.renovation.getClienListtRenovation().subscribe((data =>{
      this.renovateur = data;
      //this.renovation.datas = data;
      this.dataSource = new MatTableDataSource<Renovation>(this.renovateur);
      this.isLoadingResults = false;
    }))
  }

  public selectRenovation(renov)
  {
    this.renovationSelect = renov;
    this.idRenovation = renov.idProjetRenovation;
  }

  recherche() {
    this.dataSource.filter = this.rechercheGeneral.trim().toLowerCase();
  }
  annulerRechercheGeneral()
  {
    this.rechercheGeneral = '';
    this.recherche();
  }

  // supprimerRenovation(index){
  //     this.confirm.confirm({
  //       title:"Confirmation",
  //       message:`Voulez-vous supprimer cette pièce complémentaire ? `
  //     }).subscribe(($choix)=> {

  //       if($choix) {
  //         this.isLoadingResults=true;
  //         this.renovation.deleteRenovation(index).subscribe(()=>{
  //           this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
  //           this.renovationSelect = null;
  //           this.ngOnInit();
  //         },
  //         (errorResponseMembre) => {
  //               this.isLoadingResults=false;
  //               this.snackBar.openSnackBar("Element non supprimer ", "OK",3000);
  //           });
  //       }

  //     });
  //  }

}
