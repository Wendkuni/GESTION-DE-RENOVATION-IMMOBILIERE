import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  isLoadingResults=false;
  codeValidation;
  mailRecuperation;
  consigne = false;
  constructor(private forgetPassword: ForgetPasswordService,private route: Router,
                private snackBar: SnackBarService) { }

  ngOnInit(): void {
  }

  recuperationDuMail(){
    
    this.forgetPassword.MailDeRecuperation(this.mailRecuperation).subscribe((data)=>{
      console.log(data);
      
    },(error: HttpErrorResponse)=>{
      console.log(error);
      if(error.status>300)
      {
        this.isLoadingResults=false;
        this.snackBar.openSnackBar("Mail n'existe pas ou vous vous etes inscrit automatiquement", "error mail", 5000);
      }
      else{
        this.consigne= true;
        this.isLoadingResults=false;
        this.snackBar.openSnackBar("Code de validation envoyer","code de validation", 4000);
      }
    })
  }

  envoiDuPassword(){
    this.forgetPassword.envoiMailByCode(this.codeValidation).subscribe((data)=>{

    },(error: HttpErrorResponse)=>{
      console.log(error);
      if(error.status>300)
      {
        this.isLoadingResults=false;
        this.snackBar.openSnackBar("Le code inserer est incorrect veillez verifier a nouveau", "Code invalide", 5000);
      }
      else{
        this.consigne= true;
        this.snackBar.openSnackBar("Mot de passe envoyer a votre compte mail","Password modifier", 4000);
        this.route.navigate(["/login"]);
      }
    })
  }

  onSubmit(){
    this.isLoadingResults=true;
    if(this.consigne){
      this.envoiDuPassword();
    }
    else{
      this.recuperationDuMail();
    }
  }

}
