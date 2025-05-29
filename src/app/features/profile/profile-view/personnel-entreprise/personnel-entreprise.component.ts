import { UpdatePersonnelEntrepriseComponent } from './../../update-profile/update-personnel-entreprise/update-personnel-entreprise.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonnelSociete } from 'src/app/shared/models/utilisateeur';

@Component({
  selector: 'app-personnel-entreprise',
  templateUrl: './personnel-entreprise.component.html',
  styleUrls: ['./personnel-entreprise.component.scss']
})
export class PersonnelEntrepriseComponent implements OnInit {

  @Input('user')
  user: PersonnelSociete ;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log(this.user);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdatePersonnelEntrepriseComponent, {
      width: '600px',
      data: {user: this.user},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        location.reload();
      }
    });
  }
}
