import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { CloturerRenovationService } from '../cloturerProjet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  isLoadingResults = true;
  projetRenovation : FormGroup;
  listeRenovation: ProjetRenauvation[];

  constructor(private fb : FormBuilder, private projetService: CloturerRenovationService,
    private confirm: AppConfirmService,
    public dialogRef: MatDialogRef<ProjetComponent>,
    private snackBar:SnackBarService) {
      this.projetRenovation = fb.group({
        id: 0.0,
        dateCloture: new Date(),
        projetRenovation : [null, Validators.required]
      });
     }

  ngOnInit(): void {
    this.isLoadingResults =true;
    this.projetService.getprojetRenovation().subscribe(data=>{
      this.listeRenovation = data;
      this.isLoadingResults =false;
    })
  }

  onSubmit()
  {
   console.log(this.projetRenovation.value)
    if(this.projetRenovation.valid){
      this.isLoadingResults = true;
          this.projetService.addProjet(this.projetRenovation.value).subscribe((data)=>{

          },(error: HttpErrorResponse)=>{
            if(error.status<300){
              this.snackBar.openSnackBar("Projet cloturer avec success","OK",5000);
              this.dialogRef.close();
            }else{
              console.log(error);
              this.isLoadingResults = false;
              this.snackBar.openSnackBar("Projet non cloturer car la renovation choisis existe deja","OK",5000);
            }
          })
    }
    else{
      this.snackBar.openSnackBar("Remplire tous les champs svp","OK",5000);
    }
  }

}
