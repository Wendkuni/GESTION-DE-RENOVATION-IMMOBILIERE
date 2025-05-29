import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AutresUser } from 'src/app/shared/models/utilisateeur';
import { UpdateAutrePersonneComponent } from '../../update-profile/autre-personne/autre-personne.component';

@Component({
  selector: 'app-autre-user',
  templateUrl: './autre-user.component.html',
  styleUrls: ['./autre-user.component.scss']
})
export class AutreUserComponent implements OnInit {

  @Input('user')
  user: AutresUser ;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log(this.user);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateAutrePersonneComponent, {
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
