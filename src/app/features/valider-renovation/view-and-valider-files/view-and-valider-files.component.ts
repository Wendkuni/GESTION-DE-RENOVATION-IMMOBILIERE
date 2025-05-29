import { ValiderRenovation } from './../valider-renovation.service';
import { Component, Input, OnInit } from '@angular/core';
import { GetJustificatifForReno, Justificatif, Renovation } from 'src/app/shared/models/Renovation';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/shared/services/SnackBar';

@Component({
  selector: 'app-view-and-valider-files',
  templateUrl: './view-and-valider-files.component.html',
  styleUrls: ['./view-and-valider-files.component.scss']
})
export class ViewAndValiderFilesComponent implements OnInit {


  @Input("renovation")
  renovation: Renovation;
  fileExtrat: any;
  file:any;
  formulaire: FormGroup;
  URL=environment.BACK_END.FILEUPLOAD+'download/';
  remarque;
  isLoadingResults= false;
  valide;
  constructor(private getFile: ValiderRenovation, private fb : FormBuilder, private snabar: SnackBarService) { }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
        id:[null],
        appellation: [null],
        urlFile: [null],
        remarque: [null],
        dateCreaction: [null],
        dateUpdate:[null],
        valide: [null],
      });
  }


  valid(j: Justificatif){
    j.valide = true;
    j.remarque = null;
    this.valide= true;
  }

  nonValid(j: Justificatif){
    j.valide = false;
    this.valide= false;
  }

  validerModification(j : Justificatif){
    this.isLoadingResults= true;
    this.getFile.validerFile(j).subscribe((data)=>{
      this.isLoadingResults= false;
    },
    (error: HttpErrorResponse) =>{
      this.isLoadingResults= false;
      if(error.status <300)
      {
        this.valide=null;
        this.snabar.openSnackBar("Validation de fichier effectuer avec succes", "OK", 5000);
      }
      else{
        this.snabar.openSnackBar("Validation de fichier non effectuer", "OK", 5000);
      }
    })
  }
}
