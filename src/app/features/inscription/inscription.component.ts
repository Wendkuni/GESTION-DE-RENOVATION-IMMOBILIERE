import { SnackBarService } from './../../shared/services/SnackBar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { LoginService } from 'src/app/shared/services/authentification';
import { TokenStorageService } from '../login/_helper/localStorage';
import { MustMatch } from './_helpe';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public formIns:FormGroup;
  public settings: Settings;
  user: SocialUser;
  loggedIn: boolean;
  hidev= true;
  hide = true;
  constructor(private authService: SocialAuthService,public appSettings:AppSettings, 
    public fb: FormBuilder, public router:Router, private http: HttpClient,
     private loginS :LoginService,private token: TokenStorageService,private snackBar: SnackBarService){
    this.settings = this.appSettings.settings; 
    this.formIns = this.fb.group({
      'nom' :[null, Validators.required],
      'prenom':[null, Validators.required],
      'imgUrl':[null],
      'provider' :[null],
      'email': [null,Validators.compose([Validators.required, emailValidator])],
      'password': [null, [Validators.required, Validators.minLength(6)]],
      'passwordValid': [null, [Validators.required, Validators.minLength(6)]] }
      , {
        validator: MustMatch('password', 'passwordValid')
    });
  }

  ngOnInit() {
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.formIns.get('nom').setValue(user.firstName);
      this.formIns.get('prenom').setValue(user.lastName);
      //this.formIns.get('imgUrl').setValue(user.photoUrl);
      this.formIns.get('provider').setValue(user.provider);
      this.formIns.get('password').setValue(user.id);
      this.formIns.get('passwordValid').setValue(user.id);
      this.formIns.get('email').setValue(user.email);
      this.onSubmit();
      
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }


  onSubmit(){
   if(this.formIns.valid){
      //console.log(this.form.value)
    this.loginS.inscription(this.formIns.value).subscribe((data)=>{
      
    },
    (err: HttpErrorResponse) => {
      //console.log(err);
      if(err.status ==201){
        this.snackBar.openSnackBar("Compte creer avec success", "Inscription", 5000);
        this.router.navigate(['/login']);
      }
      else{
        this.formIns.reset();
        this.snackBar.openSnackBar("Utilisateur existe deja", "Inscription", 3000);
        location.reload();
      }
    })
   }
   else{
    this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide", 3000);
   }
  }

}
