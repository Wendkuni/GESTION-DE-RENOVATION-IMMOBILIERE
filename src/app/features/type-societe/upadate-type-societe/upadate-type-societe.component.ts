import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { typeSocietesServices } from '../type-societe.service';

@Component({
  selector: 'app-upadate-type-societe',
  templateUrl: './upadate-type-societe.component.html',
  styleUrls: ['./upadate-type-societe.component.scss']
})
export class UpadateTypeSocieteComponent implements OnInit {

  typeSocietesForm : FormGroup;
  isLoadingResults=false;
  constructor(public dialogRef: MatDialogRef<UpadateTypeSocieteComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private typeSocieteService: typeSocietesServices) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
      if(this.data.typeSociete){
        this.typeSocietesForm = this.fb.group({
          id:[this.data.typeSociete.id],
          appellation: [this.data.typeSociete.appellation, Validators.required],
      })
    }
    else{
      
      this.typeSocietesForm = this.fb.group({
        appellation: [null, Validators.required],
      })
    }
  }

  onSubmit(){
    this.isLoadingResults=true;
    if(this.data.typeSociete){
      this.typeSocieteService.updatetypeSociete(this.typeSocietesForm.get('id').value, this.typeSocietesForm.value).subscribe( (data)=>{
        this.isLoadingResults=false;
      },
      (error: HttpErrorResponse) => {
            this.isLoadingResults=false;
            if(error.status<300)
            {
              this.dialogRef.close();
              this.snackBar.openSnackBar("Element modifier  avec succès", "OK",3000);
            }
            else{
              this.snackBar.openSnackBar("Element non Ajouter car name existe deja", "OK",3000);
            }
            
            
        });
    }
    else{
      this.typeSocieteService.addtypeSociete(this.typeSocietesForm.value).subscribe( (data)=>{
        //console.log(data);
        this.isLoadingResults=false;
      },
      (error: HttpErrorResponse) => {
            this.isLoadingResults=false;
            if(error.status<300)
            {
              this.dialogRef.close();
              this.snackBar.openSnackBar("Element Ajouter  avec succès", "OK",3000);
            }
            else{
              this.snackBar.openSnackBar("Element non Ajouter car name existe deja", "OK",3000);
            }
            
        });
    }
  }
}
