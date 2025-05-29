import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TypeBase64 } from '../../models/FichierBase64';
import { Justificatif } from '../../models/Renovation';

@Component({
  selector: 'view-justificatif',
  templateUrl: './view-justificatif.component.html',
  styleUrls: ['./view-justificatif.component.scss']
})
export class ViewJustificatif implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,) { }
  file: TypeBase64;
  justificatif: Justificatif;
  image;
  ngOnInit(): void {
    this.file = this.data.file;
    this.justificatif = this.data.justificatif;
    console.log(this.justificatif);
    this.image = "data:"+this.file.type+"/"+this.file.extension+";base64,"+this.file.base64;
  }

}
