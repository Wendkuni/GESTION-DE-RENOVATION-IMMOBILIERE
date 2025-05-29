import { LoginService } from './../../shared/services/authentification';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { TokenStorageService } from './_helper/localStorage';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { RolesModel } from 'src/app/shared/models/Securite';
import { BrowserStack } from 'protractor/built/driverProviders';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public settings: Settings;
  user: SocialUser;
  loggedIn: boolean;
  hide = true;

  constructor(private authService: SocialAuthService,public appSettings:AppSettings, private projetStorage: ProjetStorageService,
    public fb: FormBuilder, public router:Router, private http: HttpClient,private snackBar: SnackBarService,
     private loginS :LoginService,private token: TokenStorageService){
      if(this.token.getToken() && this.loginS.checkIAmLogin()){
        this.router.navigate(["/"]);
      }
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.hide=true;
      this.form.get('password').setValue(user.id);
      this.form.get('email').setValue(user.email);
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
    if(this.form.valid){
      const user = {
        username: this.form.get('email').value,
        password: this.form.get('password').value
      }
      this.loginS.login(user).subscribe((data)=>{
        console.log(data);
        const roles: RolesModel[] = data.roles;
        this.token.saveToken(data.accessToken);
        this.token.setMenu(data.id)
        this.token.saveUtilisateur(data.nom+" "+data.prenom)
        this.projetStorage.saveGestionTache(0);
        this.projetStorage.saveGestionUser(0);
        this.projetStorage.setGestionAgenda(0);
        this.projetStorage.setGestionDossier(0);
        data.roles.forEach(element => {
          
          if(element == "ROLE_GESTION_TACHE_RENOVATION")
          {
            this.projetStorage.saveGestionTache(1);
          }
          else if(element == "ROLE_GESTION_USER_RENOVATION")
          {
            this.projetStorage.saveGestionUser(1);
          }
          else if(element == "ROLE_GESTION_AGENDA_RENOVATION")
          {
            this.projetStorage.setGestionAgenda(1);
          }
          else if(element =="ROLE_GESTION_DOSSIER")
          {
            this.projetStorage.setGestionDossier(1);
          }
          else if(element=="ROLE_GESTION_DEMARRAGE_PROJET_RENOVATION")
          {
            this.projetStorage.saveGestionUser(1);
            this.projetStorage.setGestionAgenda(1);
            this.projetStorage.setGestionDossier(1);
          }
        });
        this.snackBar.openSnackBar("Bienvenu " + data.nom + " " + data.prenom, "Connecter", 5000);
        this.router.navigate(['/']);
        console.log(data);
      },
      (err: ErrorHandler) => {
        console.log(err);
        this.form.reset();
          this.snackBar.openSnackBar("Email ou Password Incorrecte", "Connexion", 3000);
      })
    }
    else{
      this.snackBar.openSnackBar("Remplire les Champs SVP", "Champs Vide", 3000);
    }
  }
}
