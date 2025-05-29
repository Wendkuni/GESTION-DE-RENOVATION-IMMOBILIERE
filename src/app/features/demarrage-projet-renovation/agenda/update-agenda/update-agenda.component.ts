import { UserAffecterProjet, ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { GestionAgendaService } from '../agenda.system.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { DemarrageProjetRenovationComponent } from '../../demarrage-projet-renovation.component';

@Component({
  selector: 'app-update-agenda',
  templateUrl: './update-agenda.component.html',
  styleUrls: ['./update-agenda.component.scss']
})
export class UpdateAgendaComponent implements OnInit {
  public form:FormGroup;
  userList: UserAffecterProjet[]=[];
  projet: ProjetRenauvation = DemarrageProjetRenovationComponent.projetRenovation;
  isLoadingResults = false;
  constructor(public dialogRef: MatDialogRef<UpdateAgendaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private snackBar: SnackBarService,
              public formBuilder: FormBuilder, private agendaService: GestionAgendaService) {
    this.form = this.formBuilder.group({ 
      'id': null,
      'motif': ['', Validators.required],      
      'color': null,      
      'dateDemarrage': ['', Validators.required], 
      'dateFinition': '',
      'description':'',
      'projetRenovation': this.projet,
      'utilisateurs' : null
    });
  }

  ngOnInit() {
    this.isLoadingResults = true;
    this.agendaService.getUser(this.projet.id).subscribe((data)=>{
      this.userList = data;
      this.isLoadingResults = false;
    })
    if (this.data.agenda){
      this.form.patchValue({
        'id': this.data.agenda.id,
        'motif': this.data.agenda.motif,
        'color': this.data.agenda.color,
        'dateDemarrage': this.data.agenda.dateDemarrage,
        'dateFinition': this.data.agenda.dateFinition,
        'description':this.data.agenda.description,
        'projetRenovation': this.data.agenda.projetRenovation,
        'utilisateurs' : this.data.agenda.utilisateurs
      })
    }
  }

    enregistrer(){
      
      this.isLoadingResults = true;
      if(this.data.agenda){
          this.agendaService.updateAgenda(this.data.agenda.id, this.form.value).subscribe( (data)=>{
            this.isLoadingResults=false;
          },
          (error: HttpErrorResponse) => {
                this.isLoadingResults=false;
                if(error.status<300)
                {
                  this.dialogRef.close();
                  this.snackBar.openSnackBar("Evemenent modifier  avec succès", "OK",3000);
                }
                else{
                  this.isLoadingResults = false;
                  this.snackBar.openSnackBar("Element non modifier car evemenent deja programmer a cette date", "OK",5000);
                }
                
                
            });
        }
        else{
          this.agendaService.addAgenda(this.form.value).subscribe( (data)=>{
            //console.log(data);
            this.isLoadingResults=false;
          },
          (error: HttpErrorResponse) => {
                this.isLoadingResults=false;
                if(error.status<300)
                {
                  this.dialogRef.close();
                  this.snackBar.openSnackBar("Evemenent Ajouter  avec succès", "OK",3000);
                }
                else{
                  this.isLoadingResults = false;
                  this.snackBar.openSnackBar("Element non ajouter car evemenent deja programmer a cette date", "OK",5000);
                }
                
            });
        }
    }

  close(): void {
    this.dialogRef.close();
  }

}
