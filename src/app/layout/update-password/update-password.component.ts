import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/features/inscription/_helpe';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from 'src/app/features/login/_helper/localStorage';
import { SnackBarService } from 'src/app/shared/services/SnackBar';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  updat: FormGroup;
  isLoadingResults = false;
  constructor(private _fb: FormBuilder,private token: TokenStorageService,private snackBar:SnackBarService,
    public dialogRef: MatDialogRef<UpdatePasswordComponent>,private http: HttpClient) { }

  ngOnInit(): void {
    this.updat = this._fb.group({
      'password': [null, [Validators.required, Validators.minLength(6)]],
      'confirm': [null, [Validators.required, Validators.minLength(6)]] }
      , {
        validator: MustMatch('password', 'confirm')
    });
  }
  onSubmit(){
    this.isLoadingResults = true;
    this.http.put(environment.BACK_END.LOGIN.UPDATE_PASSWORD+""+this.token.getMenu(), this.updat.value).subscribe(
      (data)=>{

      },
      (error: HttpErrorResponse)=>{
        if(error.status<300)
        {
          this.snackBar.openSnackBar("password modifier avec succes", "success",4000)
          this.dialogRef.close();
        }
        else{
          this.snackBar.openSnackBar("information incorrect", "error",4000)
        }
      }
    )
  }

}
