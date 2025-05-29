import { ProfilesSecuriteServices } from './ProfilesSecuriteServices';
import { UpdateProfilesSecuriteComponent } from './update/update.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileModel } from 'src/app/shared/models/Securite';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profiles: ProfileModel[] = [];
  rechercheGeneral = '';
  isLoadingResults = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns =['id','libelle', 'roles','action'];
  dataSources = new MatTableDataSource<ProfileModel>(this.profiles);
  constructor(private profileService: ProfilesSecuriteServices, public dialog: MatDialog, private confirm: AppConfirmService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.profileService.getAllprofile().subscribe((data)=>{
      this.profiles = data;
      this.dataSources = new MatTableDataSource<ProfileModel>(this.profiles);
      //console.log(this.dataSources);profiles
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

  openDialog(profile): void {
    const dialogRef = this.dialog.open(UpdateProfilesSecuriteComponent, {
      width: '600px',
      height: '350px',
      data: {profile: profile},
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
        this.profileService.delete(index).subscribe(()=>{
          
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
