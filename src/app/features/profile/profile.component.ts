import { Utilisateur } from './../../shared/models/utilisateeur';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isLoad = false;
  constructor(private profileService : ProfileService) { }

  Utilisateur : any;
  ngOnInit(): void {
    this.isLoad = true;
    this.profileService.getMe().subscribe(
      (user) =>{
        this.Utilisateur = user;
        this.isLoad = false;
      }
    )
  }



}
