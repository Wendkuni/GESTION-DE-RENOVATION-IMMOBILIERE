import { UpdatePasswordComponent } from './../update-password/update-password.component';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../features/login/_helper/localStorage';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { ProfileService } from 'src/app/features/profile/profile.service';
import { Utilisateur } from 'src/app/shared/models/utilisateeur';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = './assets/img/avatars/avatar-1.png';
  constructor(private token : TokenStorageService, public dialog: MatDialog,
    private profileService : ProfileService) { }
  isLoad = false;
  Utilisateur : Utilisateur;
  ngOnInit(): void {
    this.isLoad = true;
    this.profileService.getMe().subscribe(
      (user) =>{
        this.Utilisateur = user;
        if(this.Utilisateur.imgUrl !=null)
        {
          this.profileService.userProfile = user;
          this.userImage = this.Utilisateur.imgUrl;
        }
        this.isLoad = false;
      }
    )
  }

  signOut(){
    this.token.signOut();
    location.reload();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdatePasswordComponent, {
      width: '600px',
      disableClose: true
    });
  }

}
