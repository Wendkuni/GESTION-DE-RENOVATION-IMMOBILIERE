import { UserAffecterProjetRenovationServices } from './../../user-affecter-projet-renovation/user-affecter-projet.service';
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
  selector: 'app-utilisateur-affecter-modal',
  templateUrl: './utilisateur-affecter-modal.component.html',
  styleUrls: ['./utilisateur-affecter-modal.component.scss'],
  providers:[UserAffecterProjetRenovationServices]
})
export class UtilisateurAffecterModalComponent implements OnInit {
  isLoadingResults = false;
  listeUser:Utilisateur[];
  userAffect: UserAffecterProjet[]=[];
  userForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['id','libelle', 'roles','action'];
  dataSources = new MatTableDataSource<UserAffecterProjet>(this.userAffect);
  constructor(public dialogRef: MatDialogRef<UtilisateurAffecterModalComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, 
    private userAffecter: UserAffecterProjetRenovationServices,private confirm: AppConfirmService) { }

  ngOnInit(): void {
    this.initDonner();
    this.init();
  }

  initDonner(){
    this.isLoadingResults = true;
    this.userAffecter.listUserNonAffecter(""+this.data.projet.id).subscribe((data)=>{
      this.listeUser = data;
      console.log(this.listeUser);
      this.userAffecter.getUsers(this.data.projet.id).subscribe((userA)=>{
        this.userAffect = userA;
        this.dataSources = new MatTableDataSource<UserAffecterProjet>(this.userAffect);
        this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
      this.isLoadingResults = false;
      })
    })
  }

  init(){
    this.userForm = this.fb.group({
      id: null,
      utilisateurs: [null, Validators.required],
      projetRenovation: this.data.projet,
    })
  }

  onSubmit(){
    console.log(this.userForm.value)
   if(this.userForm.valid){
    this.isLoadingResults = true;
    this.userAffecter.addUser(this.userForm.value).subscribe((data)=>{

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
        this.userAffecter.deleteUser(index).subscribe(()=>{
          
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
