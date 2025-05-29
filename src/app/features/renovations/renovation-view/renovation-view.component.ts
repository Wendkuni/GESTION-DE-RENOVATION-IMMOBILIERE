import { ClientRenovation } from './../client-renovation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Renovation } from 'src/app/shared/models/Renovation';
import { TokenStorageService } from '../../login/_helper/localStorage';
import { MatTableDataSource } from '@angular/material/table';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';

@Component({
  selector: 'app-renovation-view',
  templateUrl: './renovation-view.component.html',
  styleUrls: ['./renovation-view.component.scss']
})
export class RenovationViewComponent implements OnInit {

  img;
  isLoadingResults= false;
  public sidenavOpen:boolean = true;
  renovateur : Renovation[]=[];
  rechercheGeneral = '';
  renovationSelect: Renovation;
  dataSource = new MatTableDataSource<Renovation>(this.renovateur);
  constructor(private http: HttpClient, private renovation : ClientRenovation,
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

  supprimerRenovation(index){
      this.confirm.confirm({
        title:"Confirmation",
        message:`Voulez-vous supprimer cette pièce complémentaire ? `
      }).subscribe(($choix)=> {

        if($choix) {
          this.isLoadingResults=true;
          this.renovation.deleteRenovation(index).subscribe(()=>{
            this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
            this.renovationSelect = null;
            this.ngOnInit();
          },
          (errorResponseMembre) => {
                this.isLoadingResults=false;
                this.snackBar.openSnackBar("Element non supprimer ", "OK",3000);
            });
        }

      });
   }




  //files: File = null;
 
//  verifier les etension
// onSelect(event) {

//   //event.target.files[0] on doit mettre dans format data
//   console.log(event.target.files[0]);
//   var file = new FileReader();
//   file.readAsDataURL(event.target.files[0]);
//   file.onload = (_event) => {

//     //console.log(file.result);
//     this.img = file.result;
//     const base64 = this.img.split(",")[1];
//     const filess = new FormData();
//     const model  = {
//       'fileName' : event.target.files[0].name,
//       'base64' : this.img.split(",")[1],
//       'extension' : event.target.files[0].type.split("/")[1]
//     };
//     filess.append('fileName', event.target.files[0])
//     filess.append('base64', base64)
//     filess.append('extension',this.img.split(",")[1])
//     console.log(model);
//     this.http.post('http://localhost:9090/api/justificatif/', model).subscribe((data) =>{
//       console.log(data);
//     })
//   }
 



//   //this.files=event.addedFiles[0];
// }
 
// onRemove(event) {
//   console.log(event);
//   this.files=null;
// }

}
