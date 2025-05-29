(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-login-login-module"],{

/***/ "+UTu":
/*!***********************************************************************!*\
  !*** ./src/app/features/forget-password/forget-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./forget-password.component.html */ "MZzM");
/* harmony import */ var _forget_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.component.scss */ "4QKd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var _forget_password_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password.service */ "kcJd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(forgetPassword, route, snackBar) {
        this.forgetPassword = forgetPassword;
        this.route = route;
        this.snackBar = snackBar;
        this.isLoadingResults = false;
        this.consigne = false;
    }
    ngOnInit() {
    }
    recuperationDuMail() {
        this.forgetPassword.MailDeRecuperation(this.mailRecuperation).subscribe((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
            if (error.status > 300) {
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("Mail n'existe pas ou vous vous etes inscrit automatiquement", "error mail", 5000);
            }
            else {
                this.consigne = true;
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("Code de validation envoyer", "code de validation", 4000);
            }
        });
    }
    envoiDuPassword() {
        this.forgetPassword.envoiMailByCode(this.codeValidation).subscribe((data) => {
        }, (error) => {
            console.log(error);
            if (error.status > 300) {
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("Le code inserer est incorrect veillez verifier a nouveau", "Code invalide", 5000);
            }
            else {
                this.consigne = true;
                this.snackBar.openSnackBar("Mot de passe envoyer a votre compte mail", "Password modifier", 4000);
                this.route.navigate(["/login"]);
            }
        });
    }
    onSubmit() {
        this.isLoadingResults = true;
        if (this.consigne) {
            this.envoiDuPassword();
        }
        else {
            this.recuperationDuMail();
        }
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _forget_password_service__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"] }
];
ForgetPasswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forget_password_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_forget_password_service__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]])
], ForgetPasswordComponent);



/***/ }),

/***/ "4QKd":
/*!*************************************************************************!*\
  !*** ./src/app/features/forget-password/forget-password.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titre {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.body {\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.reseau {\n  padding: 5px;\n}\n\n.reseau button {\n  padding: 5px;\n  color: rgba(14, 14, 161, 0.767);\n  font-weight: bold;\n}\n\n.inscription {\n  padding-left: 15px;\n}\n\n.reaseau-head {\n  text-align: center;\n  color: rgba(14, 14, 161, 0.986);\n  font-size: 20px;\n  font-weight: 200px;\n}\n\n@media (max-height: 768px) and (max-width: 1024px) {\n  .reseau {\n    padding: 0px;\n  }\n  .reseau button {\n    color: rgba(14, 14, 161, 0.767);\n    font-weight: bold;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQURJO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFHUjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBQUE7RUFFSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNJLFlBQUE7RUFFTjtFQURNO0lBQ0ksK0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFHVjtBQUNGIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRyZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcbi5yZXNlYXV7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjc2Nyk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmluc2NyaXB0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVhc2VhdS1oZWFke1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjk4Nik7O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC5yZXNlYXV7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTQsIDE0LCAxNjEsIDAuNzY3KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "4T4a":
/*!***************************************************************!*\
  !*** ./src/app/features/inscription/inscription.component.ts ***!
  \***************************************************************/
/*! exports provided: InscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function() { return InscriptionComponent; });
/* harmony import */ var _raw_loader_inscription_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./inscription.component.html */ "7/u2");
/* harmony import */ var _inscription_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription.component.scss */ "CHBC");
/* harmony import */ var _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/SnackBar */ "77k+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/authentification */ "ob7d");
/* harmony import */ var _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login/_helper/localStorage */ "+64y");
/* harmony import */ var _helpe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_helpe */ "8loJ");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "VAss");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let InscriptionComponent = class InscriptionComponent {
    constructor(authService, appSettings, fb, router, http, loginS, token, snackBar) {
        this.authService = authService;
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.loginS = loginS;
        this.token = token;
        this.snackBar = snackBar;
        this.hidev = true;
        this.hide = true;
        this.settings = this.appSettings.settings;
        this.formIns = this.fb.group({
            'nom': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'prenom': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'imgUrl': [null],
            'provider': [null],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_12__["emailValidator"]])],
            'password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            'passwordValid': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
        }, {
            validator: Object(_helpe__WEBPACK_IMPORTED_MODULE_11__["MustMatch"])('password', 'passwordValid')
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
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    onSubmit() {
        if (this.formIns.valid) {
            //console.log(this.form.value)
            this.loginS.inscription(this.formIns.value).subscribe((data) => {
            }, (err) => {
                //console.log(err);
                if (err.status == 201) {
                    this.snackBar.openSnackBar("Compte creer avec success", "Inscription", 5000);
                    this.router.navigate(['/login']);
                }
                else {
                    this.formIns.reset();
                    this.snackBar.openSnackBar("Utilisateur existe deja", "Inscription", 3000);
                    location.reload();
                }
            });
        }
        else {
            this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide", 3000);
        }
    }
};
InscriptionComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"] },
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_8__["AppSettings"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_9__["LoginService"] },
    { type: _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"] },
    { type: _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"] }
];
InscriptionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-inscription',
        template: _raw_loader_inscription_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inscription_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_8__["AppSettings"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"], _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]])
], InscriptionComponent);



/***/ }),

/***/ "7/u2":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/inscription/inscription.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"body\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n  \r\n         <div  fxFlex=\"80\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"80\">\r\n  \r\n              <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <img width=\"150px\" height=\"120px\" src=\"./assets/logo.png\">\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box\" >\r\n                      <mat-card class=\"form-card\" fxLayout=\"column\"  class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"titre\">Inscription</span>  \r\n                            <form [formGroup]=\"formIns\" #f=\"ngForm\">\r\n                                <div fxLayoutAlign=\"satrt\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                    <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                      <mat-form-field appearance=\"outline\" class=\"w-100\" >\r\n                                          <mat-label>Nom</mat-label>\r\n                                            <input matInput placeholder=\"Nom\" formControlName=\"nom\">\r\n                                            <mat-error *ngIf=\"formIns.controls.nom.errors?.required\">Nom ne doit pas etre vide</mat-error>                               \r\n                                        </mat-form-field>\r\n                                    </span>\r\n                                    <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                      <mat-form-field class=\"form-fiel\" appearance=\"outline\" class=\"w-100\" >\r\n                                          <mat-label>Prenom</mat-label>\r\n                                            <input matInput placeholder=\"Prenom\" formControlName=\"prenom\">\r\n                                            <mat-error *ngIf=\"formIns.controls.prenom.errors?.required\">Prenom ne doit pas etre vide</mat-error> \r\n                                        </mat-form-field>\r\n                                    </span>\r\n                                </div>\r\n                                  <span fxLayoutAlign=\"start\">\r\n                                     <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                        <mat-label>Email</mat-label>\r\n                                          <input matInput placeholder=\"Email\" formControlName=\"email\" >\r\n                                          <mat-error *ngIf=\"formIns.controls.email.errors?.required\">Email ne doit pas etre vide</mat-error> \r\n                                          <mat-error *ngIf=\"formIns.controls.email.hasError('invalidEmail')\">Mail Invalide</mat-error>\r\n                                          <mat-error *ngIf=\"formIns.controls.email.hasError('invalidEmail')\">Email invalide</mat-error>\r\n                                      </mat-form-field>\r\n                                  </span>\r\n                              <div fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                  <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                        <mat-label>Password</mat-label>\r\n                                        <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\r\n                                        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        </button>\r\n                                        <mat-error *ngIf=\"formIns.controls.password.errors?.required\">Password doit pas etre vide</mat-error>\r\n                                        <mat-error *ngIf=\"formIns.controls.password.hasError('minlength')\">La taille minimum est de 6 caractere</mat-error>\r\n                                     </mat-form-field>\r\n                                  </span>\r\n                                  <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                    <mat-form-field appearance=\"outline\" class=\"w-100\" >\r\n                                        <mat-label>Validation Password</mat-label>\r\n                                        <input matInput formControlName=\"passwordValid\" [type]=\"hidev ? 'password' : 'text'\">\r\n                                        <button mat-icon-button matSuffix (click)=\"hidev = !hidev\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidev\">\r\n                                        <mat-icon>{{hidev ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        </button>\r\n                                        <mat-error *ngIf=\"formIns.controls.passwordValid.errors?.required\">Password doit pas etre vide</mat-error>\r\n                                        <mat-error *ngIf=\"formIns.controls.passwordValid.hasError('minlength')\">La taille minimum est de 6 caractere</mat-error>\r\n                                      </mat-form-field>\r\n                                  </span>\r\n                              </div>\r\n                            </form>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                            <p>J'aimerais <a mat-button routerLink=\"/login\">me connecter</a></p>\r\n                          </div>\r\n                      </mat-card>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\"  class=\"mat-elevation-z12 box-button\" type=\"submit\">S'Inscrire</button>\r\n                  </mat-card-content>\r\n                    <mat-card>\r\n                        <h3 class=\"reaseau-head\">s'inscrire avec </h3>\r\n                        <mat-card-content >\r\n                            <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                <button (click)=\"signInWithGoogle()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/google.png\">\r\n                                     Google\r\n                                    </button>\r\n                                <button (click)=\"signInWithFB()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/facebook.png\">\r\n                                  Facebook</button>\r\n                              </div>\r\n            \r\n                              <!-- <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/twitter.png\">\r\n                                  Twitter</button>\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\"  src=\"./assets/icones/linkedin.png\">\r\n                                  Linkedin</button>\r\n                              </div> -->\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n              </mat-card>\r\n            </div>\r\n    </div>\r\n  \r\n  </mat-sidenav-container>");

/***/ }),

/***/ "9zYU":
/*!*****************************************************!*\
  !*** ./src/app/features/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titre {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.body {\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.reseau {\n  padding: 5px;\n}\n\n.reseau button {\n  padding: 5px;\n  color: rgba(14, 14, 161, 0.767);\n  font-weight: bold;\n}\n\n.inscription {\n  padding-left: 15px;\n}\n\n.reaseau-head {\n  text-align: center;\n  color: rgba(14, 14, 161, 0.986);\n  font-size: 20px;\n  font-weight: 200px;\n}\n\n@media (max-height: 768px) and (max-width: 1024px) {\n  .reseau {\n    padding: 0px;\n  }\n  .reseau button {\n    color: rgba(14, 14, 161, 0.767);\n    font-weight: bold;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUdSOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFBQTtFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQUVOO0VBRE07SUFDSSwrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQUdWO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0cmV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2JnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG4ucmVzZWF1e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNCwgMTQsIDE2MSwgMC43NjcpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5pbnNjcmlwdGlvbntcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnJlYXNlYXUtaGVhZHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiYSgxNCwgMTQsIDE2MSwgMC45ODYpOztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAucmVzZWF1e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjc2Nyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "CHBC":
/*!*****************************************************************!*\
  !*** ./src/app/features/inscription/inscription.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titre {\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n.reseau {\n  padding: 5px;\n}\n\n.reseau button {\n  padding: 5px;\n  color: rgba(14, 14, 161, 0.767);\n  font-weight: bold;\n}\n\n.inscription {\n  padding-left: 15px;\n}\n\n.reaseau-head {\n  text-align: center;\n  color: rgba(14, 14, 161, 0.986);\n  font-size: 20px;\n  font-weight: 200px;\n}\n\n.box {\n  width: 100%;\n}\n\n.box .form-card {\n  width: 80%;\n}\n\n.form-fiel {\n  width: 100%;\n}\n\n.form-fiel input {\n  width: 100%;\n}\n\n@media (max-height: 768px) and (max-width: 1024px) {\n  .reseau {\n    padding: 0px;\n  }\n  .reseau button {\n    color: rgba(14, 14, 161, 0.767);\n    font-weight: bold;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBQ0k7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFDSTtFQUNJLFVBQUE7QUFDUjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFHQTtFQUNJO0lBQ0ksWUFBQTtFQUFOO0VBQ007SUFDSSwrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQUNWO0FBQ0YiLCJmaWxlIjoiaW5zY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0cmV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5yZXNlYXV7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjc2Nyk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmluc2NyaXB0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVhc2VhdS1oZWFke1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjk4Nik7O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZm9ybS1jYXJke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC5yZXNlYXV7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTQsIDE0LCAxNjEsIDAuNzY3KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "I1Vh":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container >\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n  \r\n         <form [formGroup]=\"form\"  fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n  \r\n              <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <img width=\"150px\" height=\"120px\" src=\"./assets/logo.png\">\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                      <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"titre\">Connexion</span>  \r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Username</mat-label>\r\n                              <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                              <mat-error *ngIf=\"form.controls.email.errors?.required\">Email ne doit pas etre vide</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Email invalide</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                              <mat-label>Password</mat-label>\r\n                              <mat-icon matPrefix>lock</mat-icon>\r\n                            <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\r\n                            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                            </button>\r\n\r\n                              <mat-error *ngIf=\"form.controls.password.errors?.required\">password ne doit pas etre vide</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">La longueur du mot de passe est de 6 caractere minimum</mat-error>\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n                          </div>\r\n                      </mat-card>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" class=\"mat-elevation-z12 box-button\" type=\"submit\">Connexion</button>\r\n                  </mat-card-content>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                    <mat-card-content class=\"inscription\">\r\n                        <p>J'aimerais <a mat-button routerLink=\"/login/inscription\">m'inscrire</a></p>\r\n                    </mat-card-content>\r\n                  </div>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                    <mat-card-content class=\"inscription\">\r\n                        <p><a mat-button routerLink=\"/login/forgetpassword\">mot de passe oublier</a></p>\r\n                    </mat-card-content>\r\n                  </div>\r\n                    <mat-card>\r\n                        <h3 class=\"reaseau-head\">se connecter avec </h3>\r\n                        <mat-card-content >\r\n                            <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                <button (click)=\"signInWithGoogle()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/google.png\">\r\n                                     Google\r\n                                    </button>\r\n                                <button (click)=\"signInWithFB()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/facebook.png\">\r\n                                  Facebook</button>\r\n                              </div>\r\n<!--             \r\n                              <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/twitter.png\">\r\n                                  Twitter</button>\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\"  src=\"./assets/icones/linkedin.png\">\r\n                                  Linkedin</button>\r\n\r\n                              </div> -->\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n              </mat-card>\r\n              \r\n          </form>    \r\n    \r\n    </div>\r\n  \r\n  </mat-sidenav-container>");

/***/ }),

/***/ "MZzM":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/forget-password/forget-password.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<mat-sidenav-container >\r\n    <div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n        <mat-spinner color=\"primary\"></mat-spinner>\r\n      </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n         <form   fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n              <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <img width=\"150px\" height=\"120px\" src=\"./assets/logo.png\">\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                      <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"titre\">Mot de passe oublier</span>  \r\n                          <mat-form-field *ngIf=\"!consigne\" appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Mail de recuperation</mat-label>\r\n                              <input [(ngModel)]=\"mailRecuperation\" matInput type=\"email\" placeholder=\"Mail de recuperation\" name=\"mailRecuperation\">\r\n                              <!-- <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error> -->\r\n                          </mat-form-field>\r\n                          <mat-form-field *ngIf=\"consigne\" appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Code de validation</mat-label>\r\n                              <input [(ngModel)]=\"codeValidation\" matInput type=\"email\" placeholder=\"Code de validation\" name=\"codeValidation\">\r\n                              <!-- <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error> -->\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                          </div>\r\n                      </mat-card>\r\n                      <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\">Valider</button>\r\n                  </mat-card-content>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                    <mat-card-content class=\"inscription\">\r\n                        <p>J'aimerais <a mat-button routerLink=\"/login\">me connecter</a></p>\r\n                    </mat-card-content>\r\n                </div>\r\n              </mat-card>\r\n              \r\n          </form>    \r\n    \r\n    </div>\r\n  \r\n  </mat-sidenav-container>");

/***/ }),

/***/ "VAss":
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return (group) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "ahC7":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js ***!
  \*******************************************************************************************/
/*! exports provided: AmazonLoginProvider, BaseLoginProvider, DummyLoginProvider, FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialLoginModule, SocialUser, VKLoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmazonLoginProvider", function() { return AmazonLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoginProvider", function() { return BaseLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyLoginProvider", function() { return DummyLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function() { return FacebookLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function() { return GoogleLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicrosoftLoginProvider", function() { return MicrosoftLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAuthService", function() { return SocialAuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialUser", function() { return SocialUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKLoginProvider", function() { return VKLoginProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





class BaseLoginProvider {
    constructor() { }
    loadScript(id, src, onload, parentElement = null) {
        // get document if platform is only browser
        if (typeof document !== 'undefined' && !document.getElementById(id)) {
            let signInJS = document.createElement('script');
            signInJS.async = true;
            signInJS.src = src;
            signInJS.onload = onload;
            if (!parentElement) {
                parentElement = document.head;
            }
            parentElement.appendChild(signInJS);
        }
    }
}

class SocialUser {
}

class GoogleLoginProvider extends BaseLoginProvider {
    constructor(clientId, initOptions = { scope: 'email' }) {
        super();
        this.clientId = clientId;
        this.initOptions = initOptions;
    }
    initialize() {
        return new Promise((resolve, reject) => {
            try {
                this.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', () => {
                    gapi.load('auth2', () => {
                        this.auth2 = gapi.auth2.init(Object.assign(Object.assign({}, this.initOptions), { client_id: this.clientId }));
                        this.auth2
                            .then(() => {
                            resolve();
                        })
                            .catch((err) => {
                            reject(err);
                        });
                    });
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getLoginStatus(loginStatusOptions) {
        return new Promise((resolve, reject) => {
            if (this.auth2.isSignedIn.get()) {
                let user = new SocialUser();
                const profile = this.auth2.currentUser.get().getBasicProfile();
                user.id = profile.getId();
                user.name = profile.getName();
                user.email = profile.getEmail();
                user.photoUrl = profile.getImageUrl();
                user.firstName = profile.getGivenName();
                user.lastName = profile.getFamilyName();
                user.response = profile;
                if (loginStatusOptions && loginStatusOptions.refreshToken) {
                    this.auth2.currentUser.get().reloadAuthResponse().then(authResponse => {
                        user.authToken = authResponse.access_token;
                        user.idToken = authResponse.id_token;
                        resolve(user);
                    });
                }
                else {
                    const authResponse = this.auth2.currentUser.get().getAuthResponse(true);
                    user.authToken = authResponse.access_token;
                    user.idToken = authResponse.id_token;
                    resolve(user);
                }
            }
            else {
                reject(`No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`);
            }
        });
    }
    signIn(signInOptions) {
        const options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
        return new Promise((resolve, reject) => {
            const offlineAccess = options && options.offline_access;
            let promise = !offlineAccess
                ? this.auth2.signIn(signInOptions)
                : this.auth2.grantOfflineAccess(signInOptions);
            promise
                .then((response) => {
                let user = new SocialUser();
                if (response && response.code) {
                    user.authorizationCode = response.code;
                }
                else {
                    let profile = this.auth2.currentUser.get().getBasicProfile();
                    let token = this.auth2.currentUser.get().getAuthResponse(true)
                        .access_token;
                    let backendToken = this.auth2.currentUser
                        .get()
                        .getAuthResponse(true).id_token;
                    user.id = profile.getId();
                    user.name = profile.getName();
                    user.email = profile.getEmail();
                    user.photoUrl = profile.getImageUrl();
                    user.firstName = profile.getGivenName();
                    user.lastName = profile.getFamilyName();
                    user.authToken = token;
                    user.idToken = backendToken;
                    user.response = profile;
                }
                resolve(user);
            }, (closed) => {
                reject(closed);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    signOut(revoke) {
        return new Promise((resolve, reject) => {
            let signOutPromise;
            if (revoke) {
                signOutPromise = this.auth2.disconnect();
            }
            else {
                signOutPromise = this.auth2.signOut();
            }
            signOutPromise
                .then((err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';

/** @dynamic */
class SocialAuthService {
    constructor(config) {
        this.providers = new Map();
        this.autoLogin = false;
        this._user = null;
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /* Consider making this an enum comprising LOADING, LOADED, FAILED etc. */
        this.initialized = false;
        this._initState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        if (config instanceof Promise) {
            config.then((config) => {
                this.initialize(config);
            });
        }
        else {
            this.initialize(config);
        }
    }
    get authState() {
        return this._authState.asObservable();
    }
    get initState() {
        return this._initState.asObservable();
    }
    initialize(config) {
        this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
        const { onError = console.error } = config;
        config.providers.forEach((item) => {
            this.providers.set(item.id, item.provider);
        });
        Promise.all(Array.from(this.providers.values()).map((provider) => provider.initialize()))
            .then(() => {
            if (this.autoLogin) {
                const loginStatusPromises = [];
                let loggedIn = false;
                this.providers.forEach((provider, key) => {
                    let promise = provider.getLoginStatus();
                    loginStatusPromises.push(promise);
                    promise
                        .then((user) => {
                        user.provider = key;
                        this._user = user;
                        this._authState.next(user);
                        loggedIn = true;
                    })
                        .catch(console.debug);
                });
                Promise.all(loginStatusPromises).catch(() => {
                    if (!loggedIn) {
                        this._user = null;
                        this._authState.next(null);
                    }
                });
            }
        })
            .catch((error) => {
            onError(error);
        })
            .finally(() => {
            this.initialized = true;
            this._initState.next(this.initialized);
            this._initState.complete();
        });
    }
    refreshAuthToken(providerId) {
        return new Promise((resolve, reject) => {
            if (!this.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
            }
            else if (providerId !== GoogleLoginProvider.PROVIDER_ID) {
                reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
            }
            else {
                const providerObject = this.providers.get(providerId);
                if (providerObject) {
                    providerObject
                        .getLoginStatus({ refreshToken: true })
                        .then((user) => {
                        user.provider = providerId;
                        this._user = user;
                        this._authState.next(user);
                        resolve();
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }
                else {
                    reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
            }
        });
    }
    signIn(providerId, signInOptions) {
        return new Promise((resolve, reject) => {
            if (!this.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
            }
            else {
                let providerObject = this.providers.get(providerId);
                if (providerObject) {
                    providerObject
                        .signIn(signInOptions)
                        .then((user) => {
                        user.provider = providerId;
                        resolve(user);
                        this._user = user;
                        this._authState.next(user);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }
                else {
                    reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
            }
        });
    }
    signOut(revoke = false) {
        return new Promise((resolve, reject) => {
            if (!this.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
            }
            else if (!this._user) {
                reject(SocialAuthService.ERR_NOT_LOGGED_IN);
            }
            else {
                let providerId = this._user.provider;
                let providerObject = this.providers.get(providerId);
                if (providerObject) {
                    providerObject
                        .signOut(revoke)
                        .then(() => {
                        resolve();
                        this._user = null;
                        this._authState.next(null);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }
                else {
                    reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
            }
        });
    }
}
SocialAuthService.ɵfac = function SocialAuthService_Factory(t) { return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('SocialAuthServiceConfig')); };
SocialAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocialAuthService, factory: SocialAuthService.ɵfac });
SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
SocialAuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
SocialAuthService.ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN = 'Chosen login provider is not supported for refreshing a token';
SocialAuthService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['SocialAuthServiceConfig',] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['SocialAuthServiceConfig']
            }] }]; }, null); })();

class SocialLoginModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
        }
    }
    static initialize(config) {
        return {
            ngModule: SocialLoginModule,
            providers: [
                SocialAuthService,
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: config
                }
            ]
        };
    }
}
SocialLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialLoginModule });
SocialLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialLoginModule_Factory(t) { return new (t || SocialLoginModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SocialLoginModule, 12)); }, providers: [
        SocialAuthService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
SocialLoginModule.ctorParameters = () => [
    { type: SocialLoginModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialLoginModule, { imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [
                    SocialAuthService
                ]
            }]
    }], function () { return [{ type: SocialLoginModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();

// Simulates login / logout without actually requiring an Internet connection.
//
// Useful for certain development situations.
//
// For example, if you want to simulate the greatest football referee England has ever produced:
//
//  const dummyUser: SocialUser = {
//     id: '0123456789',
//     name: 'Howard Webb',
//     email: 'howard@webb.com',
//     firstName: 'Howard',
//     lastName: 'Webb',
//     authToken: 'dummyAuthToken',
//     photoUrl: 'https://en.wikipedia.org/wiki/Howard_Webb#/media/File:Howard_Webb_march11.jpg',
//     provider: 'DUMMY',
//     idToken: 'dummyIdToken',
//     authorizationCode: 'dummyAuthCode'
// };
//
//  let config = new AuthServiceConfig([
//  { ... },
//  {
//       id: DummyLoginProvider.PROVIDER_ID,
//       provider: new DummyLoginProvider(dummyUser)  // Pass your user into the constructor
//   },
//  { ... }
//  ]);
class DummyLoginProvider extends BaseLoginProvider {
    constructor(dummy) {
        super();
        if (dummy) {
            this.dummy = dummy;
        }
        else {
            this.dummy = DummyLoginProvider.DEFAULT_USER;
        }
        // Start not logged in
        this.loggedIn = false;
    }
    getLoginStatus() {
        return new Promise((resolve, reject) => {
            if (this.loggedIn) {
                resolve(this.dummy);
            }
            else {
                reject('No user is currently logged in.');
            }
        });
    }
    initialize() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    signIn() {
        return new Promise((resolve, reject) => {
            this.loggedIn = true;
            resolve(this.dummy);
        });
    }
    signOut(revoke) {
        return new Promise((resolve, reject) => {
            this.loggedIn = false;
            resolve();
        });
    }
}
DummyLoginProvider.PROVIDER_ID = 'DUMMY';
DummyLoginProvider.DEFAULT_USER = {
    id: '1234567890',
    name: 'Mickey Mouse',
    email: 'mickey@mouse.com',
    firstName: 'Mickey',
    lastName: 'Mouse',
    authToken: 'dummyAuthToken',
    photoUrl: 'https://en.wikipedia.org/wiki/File:Mickey_Mouse.png',
    provider: 'DUMMY',
    idToken: 'dummyIdToken',
    authorizationCode: 'dummyAuthCode',
    response: {}
};

class FacebookLoginProvider extends BaseLoginProvider {
    constructor(clientId, initOptions = {
        scope: 'email,public_profile',
        locale: 'en_US',
        fields: 'name,email,picture,first_name,last_name',
        version: 'v4.0',
    }) {
        super();
        this.clientId = clientId;
        this.initOptions = initOptions;
    }
    initialize() {
        return new Promise((resolve, reject) => {
            try {
                this.loadScript(FacebookLoginProvider.PROVIDER_ID, `//connect.facebook.net/${this.initOptions.locale}/sdk.js`, () => {
                    FB.init({
                        appId: this.clientId,
                        autoLogAppEvents: true,
                        cookie: true,
                        xfbml: true,
                        version: this.initOptions.version,
                    });
                    resolve();
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getLoginStatus() {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus((response) => {
                if (response.status === 'connected') {
                    let authResponse = response.authResponse;
                    FB.api(`/me?fields=${this.initOptions.fields}`, (fbUser) => {
                        let user = new SocialUser();
                        user.id = fbUser.id;
                        user.name = fbUser.name;
                        user.email = fbUser.email;
                        user.photoUrl =
                            'https://graph.facebook.com/' +
                                fbUser.id +
                                '/picture?type=normal';
                        user.firstName = fbUser.first_name;
                        user.lastName = fbUser.last_name;
                        user.authToken = authResponse.accessToken;
                        user.response = fbUser;
                        resolve(user);
                    });
                }
                else {
                    reject(`No user is currently logged in with ${FacebookLoginProvider.PROVIDER_ID}`);
                }
            });
        });
    }
    signIn(signInOptions) {
        const options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                if (response.authResponse) {
                    let authResponse = response.authResponse;
                    FB.api(`/me?fields=${options.fields}`, (fbUser) => {
                        let user = new SocialUser();
                        user.id = fbUser.id;
                        user.name = fbUser.name;
                        user.email = fbUser.email;
                        user.photoUrl =
                            'https://graph.facebook.com/' +
                                fbUser.id +
                                '/picture?type=normal';
                        user.firstName = fbUser.first_name;
                        user.lastName = fbUser.last_name;
                        user.authToken = authResponse.accessToken;
                        user.response = fbUser;
                        resolve(user);
                    });
                }
                else {
                    reject('User cancelled login or did not fully authorize.');
                }
            }, options);
        });
    }
    signOut() {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                resolve();
            });
        });
    }
}
FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';

class AmazonLoginProvider extends BaseLoginProvider {
    constructor(clientId, initOptions = {
        scope: 'profile',
        scope_data: {
            profile: { essential: false },
        },
        redirect_uri: location.origin,
    }) {
        super();
        this.clientId = clientId;
        this.initOptions = initOptions;
    }
    initialize() {
        let amazonRoot = null;
        if (document) {
            amazonRoot = document.createElement('div');
            amazonRoot.id = 'amazon-root';
            document.body.appendChild(amazonRoot);
        }
        window.onAmazonLoginReady = () => {
            amazon.Login.setClientId(this.clientId);
        };
        return new Promise((resolve, reject) => {
            try {
                this.loadScript('amazon-login-sdk', 'https://assets.loginwithamazon.com/sdk/na/login1.js', () => {
                    resolve();
                }, amazonRoot);
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getLoginStatus() {
        return new Promise((resolve, reject) => {
            let token = this.retrieveToken();
            if (token) {
                amazon.Login.retrieveProfile(token, (response) => {
                    if (response.success) {
                        let user = new SocialUser();
                        user.id = response.profile.CustomerId;
                        user.name = response.profile.Name;
                        user.email = response.profile.PrimaryEmail;
                        user.response = response.profile;
                        resolve(user);
                    }
                    else {
                        reject(response.error);
                    }
                });
            }
            else {
                reject(`No user is currently logged in with ${AmazonLoginProvider.PROVIDER_ID}`);
            }
        });
    }
    signIn(signInOptions) {
        const options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
        return new Promise((resolve, reject) => {
            amazon.Login.authorize(options, (authResponse) => {
                if (authResponse.error) {
                    reject(authResponse.error);
                }
                else {
                    amazon.Login.retrieveProfile(authResponse.access_token, (response) => {
                        let user = new SocialUser();
                        user.id = response.profile.CustomerId;
                        user.name = response.profile.Name;
                        user.email = response.profile.PrimaryEmail;
                        user.authToken = authResponse.access_token;
                        user.response = response.profile;
                        this.persistToken(authResponse.access_token);
                        resolve(user);
                    });
                }
            });
        });
    }
    signOut(revoke) {
        return new Promise((resolve, reject) => {
            try {
                amazon.Login.logout();
                this.clearToken();
                resolve();
            }
            catch (err) {
                reject(err.message);
            }
        });
    }
    persistToken(token) {
        localStorage.setItem(`${AmazonLoginProvider.PROVIDER_ID}_token`, token);
    }
    retrieveToken() {
        return localStorage.getItem(`${AmazonLoginProvider.PROVIDER_ID}_token`);
    }
    clearToken() {
        localStorage.removeItem(`${AmazonLoginProvider.PROVIDER_ID}_token`);
    }
}
AmazonLoginProvider.PROVIDER_ID = 'AMAZON';

class VKLoginProvider extends BaseLoginProvider {
    constructor(clientId, initOptions = {
        fields: 'photo_max,contacts',
        version: '5.124',
    }) {
        super();
        this.clientId = clientId;
        this.initOptions = initOptions;
        this.VK_API_URL = '//vk.com/js/api/openapi.js';
        this.VK_API_GET_USER = 'users.get';
    }
    initialize() {
        return new Promise((resolve, reject) => {
            try {
                this.loadScript(VKLoginProvider.PROVIDER_ID, this.VK_API_URL, () => {
                    VK.init({
                        apiId: this.clientId,
                    });
                    resolve();
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getLoginStatus() {
        return new Promise((resolve, reject) => this.getLoginStatusInternal(resolve, reject));
    }
    signIn() {
        return new Promise((resolve, reject) => this.signInInternal(resolve, reject));
    }
    signOut() {
        return new Promise((resolve, reject) => {
            VK.Auth.logout((response) => {
                resolve();
            });
        });
    }
    signInInternal(resolve, reject) {
        VK.Auth.login((loginResponse) => {
            if (loginResponse.status === 'connected') {
                this.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
            }
        });
    }
    getUser(userId, token, resolve) {
        VK.Api.call(this.VK_API_GET_USER, {
            user_id: userId,
            fields: this.initOptions.fields,
            v: this.initOptions.version,
        }, (userResponse) => {
            resolve(this.createUser(Object.assign({}, { token }, userResponse.response[0])));
        });
    }
    getLoginStatusInternal(resolve, reject) {
        VK.Auth.getLoginStatus((loginResponse) => {
            if (loginResponse.status === 'connected') {
                this.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
            }
        });
    }
    createUser(response) {
        const user = new SocialUser();
        user.id = response.id;
        user.name = `${response.first_name} ${response.last_name}`;
        user.photoUrl = response.photo_max;
        user.authToken = response.token;
        return user;
    }
}
VKLoginProvider.PROVIDER_ID = 'VK';

/**
 * Protocol modes supported by MSAL.
 */
var ProtocolMode;
(function (ProtocolMode) {
    ProtocolMode["AAD"] = "AAD";
    ProtocolMode["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));
const COMMON_AUTHORITY = 'https://login.microsoftonline.com/common/';
/**
 * Microsoft Authentication using MSAL v2: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser
 */
class MicrosoftLoginProvider extends BaseLoginProvider {
    constructor(clientId, initOptions) {
        super();
        this.clientId = clientId;
        this.initOptions = {
            redirect_uri: location.origin,
            authority: COMMON_AUTHORITY,
            scopes: ['openid', 'profile', 'User.Read'],
            knownAuthorities: [],
            protocolMode: ProtocolMode.AAD,
            clientCapabilities: [],
            cacheLocation: 'sessionStorage'
        };
        this.initOptions = Object.assign(Object.assign({}, this.initOptions), initOptions);
    }
    initialize() {
        return new Promise((resolve, reject) => {
            this.loadScript(MicrosoftLoginProvider.PROVIDER_ID, 'https://alcdn.msauth.net/browser/2.1.0/js/msal-browser.js', () => {
                try {
                    const config = {
                        auth: {
                            clientId: this.clientId,
                            redirectUri: this.initOptions.redirect_uri,
                            authority: this.initOptions.authority,
                            knownAuthorities: this.initOptions.knownAuthorities,
                            protocolMode: this.initOptions.protocolMode,
                            clientCapabilities: this.initOptions.clientCapabilities
                        },
                        cache: !this.initOptions.cacheLocation ? null : {
                            cacheLocation: this.initOptions.cacheLocation
                        }
                    };
                    this._instance = new msal.PublicClientApplication(config);
                    resolve();
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    getSocialUser(loginResponse) {
        return new Promise((resolve, reject) => {
            //After login, use Microsoft Graph API to get user info
            let meRequest = new XMLHttpRequest();
            meRequest.onreadystatechange = () => {
                if (meRequest.readyState == 4) {
                    try {
                        if (meRequest.status == 200) {
                            let userInfo = JSON.parse(meRequest.responseText);
                            let user = new SocialUser();
                            user.provider = MicrosoftLoginProvider.PROVIDER_ID;
                            user.id = loginResponse.idToken;
                            user.name = loginResponse.idTokenClaims.name;
                            user.email = loginResponse.account.username;
                            user.idToken = loginResponse.idToken;
                            user.response = loginResponse;
                            user.firstName = userInfo.givenName;
                            user.lastName = userInfo.surname;
                            resolve(user);
                        }
                        else {
                            reject(`Error retrieving user info: ${meRequest.status}`);
                        }
                    }
                    catch (err) {
                        reject(err);
                    }
                }
            };
            //Microsoft Graph ME Endpoint: https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http
            meRequest.open('GET', 'https://graph.microsoft.com/v1.0/me');
            meRequest.setRequestHeader('Authorization', `Bearer ${loginResponse.accessToken}`);
            try {
                meRequest.send();
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getLoginStatus() {
        return new Promise((resolve, reject) => {
            const accounts = this._instance.getAllAccounts();
            if (accounts.length > 0) {
                try {
                    this._instance.ssoSilent({
                        scopes: this.initOptions.scopes,
                        loginHint: accounts[0].username
                    })
                        .then(loginResponse => {
                        this.getSocialUser(loginResponse)
                            .then(user => resolve(user))
                            .catch(err => reject(err));
                    })
                        .catch(err => reject(err));
                }
                catch (err) {
                    reject(err);
                }
            }
            else {
                reject(`No user is currently logged in with ${MicrosoftLoginProvider.PROVIDER_ID}`);
            }
        });
    }
    signIn() {
        return new Promise((resolve, reject) => {
            try {
                this._instance.loginPopup({
                    scopes: this.initOptions.scopes
                })
                    .then(loginResponse => {
                    this.getSocialUser(loginResponse)
                        .then(user => resolve(user))
                        .catch(err => reject(err));
                })
                    .catch(err => reject(err));
            }
            catch (err) {
                reject(err);
            }
        });
    }
    signOut(revoke) {
        return new Promise((resolve, reject) => {
            try {
                const accounts = this._instance.getAllAccounts();
                //TODO: This redirects to a Microsoft page, then sends us back to redirect_uri... this doesn't seem to match other providers
                //Open issues:
                // https://github.com/abacritt/angularx-social-login/issues/306
                // https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2563
                this._instance.logout({
                    account: accounts[0],
                    postLogoutRedirectUri: this.initOptions.redirect_uri
                })
                    .then(() => {
                    resolve();
                })
                    .catch(err => {
                    reject(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
MicrosoftLoginProvider.PROVIDER_ID = 'MICROSOFT';

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angularx-social-login.js.map

/***/ }),

/***/ "kcJd":
/*!*********************************************************************!*\
  !*** ./src/app/features/forget-password/forget-password.service.ts ***!
  \*********************************************************************/
/*! exports provided: ForgetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordService", function() { return ForgetPasswordService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ForgetPasswordService = class ForgetPasswordService {
    constructor(http) {
        this.http = http;
    }
    MailDeRecuperation(mail) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.LOGIN.CONNEXION + "mail-de-recuperation/" + mail);
    }
    envoiMailByCode(code) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.LOGIN.CONNEXION + "envoi-code/" + code);
    }
};
ForgetPasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
ForgetPasswordService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], ForgetPasswordService);



/***/ }),

/***/ "vm+o":
/*!************************************************!*\
  !*** ./src/app/features/login/login.module.ts ***!
  \************************************************/
/*! exports provided: routes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forget-password/forget-password.component */ "+UTu");
/* harmony import */ var _shared_services_authentification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/authentification */ "ob7d");
/* harmony import */ var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../inscription/inscription.component */ "4T4a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "w3x6");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
    { path: 'inscription', component: _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionComponent"], pathMatch: 'full' },
    { path: 'forgetpassword', component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"], pathMatch: 'full' }
];
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"]
        ],
        providers: [
            {
                provide: 'SocialAuthServiceConfig',
                useValue: {
                    autoLogin: false,
                    providers: [
                        {
                            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"].PROVIDER_ID,
                            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"]('743279905565-e1g2po029tupno9991csqsbb98qrqg8q.apps.googleusercontent.com')
                        },
                        {
                            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"].PROVIDER_ID,
                            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"]('708823373162698')
                        }
                    ]
                },
            },
            _shared_services_authentification__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        ],
    })
], LoginModule);



/***/ }),

/***/ "w3x6":
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "I1Vh");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "9zYU");
/* harmony import */ var _shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/authentification */ "ob7d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "VAss");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _helper_localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helper/localStorage */ "+64y");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/ProjetRenovation.localStorage */ "Geum");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let LoginComponent = class LoginComponent {
    constructor(authService, appSettings, projetStorage, fb, router, http, snackBar, loginS, token) {
        this.authService = authService;
        this.appSettings = appSettings;
        this.projetStorage = projetStorage;
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.loginS = loginS;
        this.token = token;
        this.hide = true;
        if (this.token.getToken() && this.loginS.checkIAmLogin()) {
            this.router.navigate(["/"]);
        }
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)])]
        });
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.hide = true;
            this.form.get('password').setValue(user.id);
            this.form.get('email').setValue(user.email);
            this.onSubmit();
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    onSubmit() {
        if (this.form.valid) {
            const user = {
                username: this.form.get('email').value,
                password: this.form.get('password').value
            };
            this.loginS.login(user).subscribe((data) => {
                console.log(data);
                const roles = data.roles;
                this.token.saveToken(data.accessToken);
                this.token.setMenu(data.id);
                this.token.saveUtilisateur(data.nom + " " + data.prenom);
                this.projetStorage.saveGestionTache(0);
                this.projetStorage.saveGestionUser(0);
                this.projetStorage.setGestionAgenda(0);
                this.projetStorage.setGestionDossier(0);
                data.roles.forEach(element => {
                    if (element == "ROLE_GESTION_TACHE_RENOVATION") {
                        this.projetStorage.saveGestionTache(1);
                    }
                    else if (element == "ROLE_GESTION_USER_RENOVATION") {
                        this.projetStorage.saveGestionUser(1);
                    }
                    else if (element == "ROLE_GESTION_AGENDA_RENOVATION") {
                        this.projetStorage.setGestionAgenda(1);
                    }
                    else if (element == "ROLE_GESTION_DOSSIER") {
                        this.projetStorage.setGestionDossier(1);
                    }
                    else if (element == "ROLE_GESTION_DEMARRAGE_PROJET_RENOVATION") {
                        this.projetStorage.saveGestionUser(1);
                        this.projetStorage.setGestionAgenda(1);
                        this.projetStorage.setGestionDossier(1);
                    }
                });
                this.snackBar.openSnackBar("Bienvenu " + data.nom + " " + data.prenom, "Connecter", 5000);
                this.router.navigate(['/']);
                console.log(data);
            }, (err) => {
                console.log(err);
                this.form.reset();
                this.snackBar.openSnackBar("Email ou Password Incorrecte", "Connexion", 3000);
            });
        }
        else {
            this.snackBar.openSnackBar("Remplire les Champs SVP", "Champs Vide", 3000);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialAuthService"] },
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"] },
    { type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_12__["ProjetStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__["SnackBarService"] },
    { type: _shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialAuthService"], _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_12__["ProjetStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__["SnackBarService"],
        _shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"]])
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=features-login-login-module-es2015.js.map