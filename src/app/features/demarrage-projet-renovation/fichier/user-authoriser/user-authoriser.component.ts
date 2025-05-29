import { GestionDossier } from './../gestion-dossier.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { Utilisateur } from 'src/app/shared/models/utilisateeur';
import { UserAffecterProjet } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';

@Component({
  selector: 'app-user-authoriser',
  templateUrl: './user-authoriser.component.html',
  styleUrls: ['./user-authoriser.component.scss']
})
export class UserAuthoriserComponent implements OnInit {

  isLoadingResults = false;
  listeUser:UserAffecterProjet[]=[];
  userAffect: UserAffecterProjet[]=[];
  userForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['id','libelle', 'roles','action'];
  dataSources = new MatTableDataSource<UserAffecterProjet>(this.userAffect);
  constructor(public dialogRef: MatDialogRef<UserAuthoriserComponent>,private snackBar: SnackBarService,private confirm: AppConfirmService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private dossierService : GestionDossier) { 
    }

  ngOnInit(): void {
    this. initDonner();
    this.init();
  }

  init(){
    this.userForm = this.fb.group({
      utilisateurs: [null, Validators.required],
    })
  }

   initDonner(){
    this.isLoadingResults = true;
    this.dossierService.getUser(this.data.dossier.projetRenovation.id).subscribe((data)=>{
      this.listeUser = data;
      console.log(this.listeUser);
      this.dossierService.UserDossier(this.data.dossier.id).subscribe((userA)=>{
        this.userAffect = userA;
        this.userAffect.forEach((element, index)=>{
          this.listeUser.forEach((user, idUser)=>{
            if(element.id==user.id)
            {
              this.listeUser.splice(idUser,1);
            }
          })
        })
        this.dataSources = new MatTableDataSource<UserAffecterProjet>(this.userAffect);
        console.log(this.userAffect);
        this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
      this.isLoadingResults = false;
      })
    })
  }

  onSubmit(){
    console.log(this.userForm.get('utilisateurs').value)
    console.log(this.data.dossier.id)

    if(this.userForm.valid){
     this.isLoadingResults = true;
     this.dossierService.authoriserUser(this.data.dossier.id,this.userForm.get('utilisateurs').value).subscribe((data)=>{
 
     },(error:HttpErrorResponse)=>{
       if(error.status<300)
       {
         this.snackBar.openSnackBar("utilisateur ajouter avec success", "success", 3000);
         this.initDonner();
         this.userForm.get('utilisateurs').setValue(null);
       }
       else{
         this.isLoadingResults = false;
         this.snackBar.openSnackBar("utilisateur est deja affecter au projet", "error", 3000);
       }
     })
    }else{
       this.snackBar.openSnackBar("Remplirer tous les champs svp", "error", 3000);
    }
  }

  supprimerUser(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cette pièce complémentaire ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoadingResults=true;
        this.dossierService.supprimerUser(this.data.dossier.id,index).subscribe(()=>{
          
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
