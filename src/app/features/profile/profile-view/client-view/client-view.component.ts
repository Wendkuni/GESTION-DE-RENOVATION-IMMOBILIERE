import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/shared/models/utilisateeur';
import { UpdateClientComponent } from '../../update-profile/update-client/update-client.component';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  @Input('client')
  client: Client ;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log(this.client);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateClientComponent, {
      width: '600px',
      data: {client: this.client},
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
