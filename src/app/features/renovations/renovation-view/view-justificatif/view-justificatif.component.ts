import { ViewJustificatif } from './../../../../shared/utils/view-justificatif/view-justificatif.component';
import { ExtratBase64, TypeBase64 } from './../../../../shared/models/FichierBase64';
import { GetJustificatifForReno, Justificatif } from './../../../../shared/models/Renovation';
import { Component, OnInit, Input } from '@angular/core';
import { Renovation } from 'src/app/shared/models/Renovation';
import { ClientRenovation } from '../../client-renovation';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-justificatif',
  templateUrl: './view-justificatif.component.html',
  styleUrls: ['./view-justificatif.component.scss']
})
export class ViewJustificatifComponent implements OnInit {

  @Input("renovation")
  renovation: Renovation;
  fileExtrat: any;
  file:any;
  URL=environment.BACK_END.FILEUPLOAD+'download/';
  constructor(private getFile: ClientRenovation, private extract: ExtratBase64, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewFichier(j: Justificatif){
    var just = new GetJustificatifForReno()
    
    just.idJustificatif = j.id;
    just.idRenovation = this.renovation.idProjetRenovation;
    console.log(just);
  }

  openDialog(j: Justificatif): void {
    const dialogRef = this.dialog.open(ViewJustificatif, {
      width: '1000px',
      data: {file: this.fileExtrat,justificatif:j },
      //disableClose: true
    });
  }

}
