(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-login-login-module"], {
    /***/
    "+UTu":
    /*!***********************************************************************!*\
      !*** ./src/app/features/forget-password/forget-password.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ForgetPasswordComponent */

    /***/
    function UTu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
        return ForgetPasswordComponent;
      });
      /* harmony import */


      var _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "MZzM");
      /* harmony import */


      var _forget_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forget-password.component.scss */
      "4QKd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/SnackBar */
      "77k+");
      /* harmony import */


      var _forget_password_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forget-password.service */
      "kcJd");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ForgetPasswordComponent = /*#__PURE__*/function () {
        function ForgetPasswordComponent(forgetPassword, route, snackBar) {
          _classCallCheck(this, ForgetPasswordComponent);

          this.forgetPassword = forgetPassword;
          this.route = route;
          this.snackBar = snackBar;
          this.isLoadingResults = false;
          this.consigne = false;
        }

        _createClass(ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "recuperationDuMail",
          value: function recuperationDuMail() {
            var _this = this;

            this.forgetPassword.MailDeRecuperation(this.mailRecuperation).subscribe(function (data) {
              console.log(data);
            }, function (error) {
              console.log(error);

              if (error.status > 300) {
                _this.isLoadingResults = false;

                _this.snackBar.openSnackBar("Mail n'existe pas ou vous vous etes inscrit automatiquement", "error mail", 5000);
              } else {
                _this.consigne = true;
                _this.isLoadingResults = false;

                _this.snackBar.openSnackBar("Code de validation envoyer", "code de validation", 4000);
              }
            });
          }
        }, {
          key: "envoiDuPassword",
          value: function envoiDuPassword() {
            var _this2 = this;

            this.forgetPassword.envoiMailByCode(this.codeValidation).subscribe(function (data) {}, function (error) {
              console.log(error);

              if (error.status > 300) {
                _this2.isLoadingResults = false;

                _this2.snackBar.openSnackBar("Le code inserer est incorrect veillez verifier a nouveau", "Code invalide", 5000);
              } else {
                _this2.consigne = true;

                _this2.snackBar.openSnackBar("Mot de passe envoyer a votre compte mail", "Password modifier", 4000);

                _this2.route.navigate(["/login"]);
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.isLoadingResults = true;

            if (this.consigne) {
              this.envoiDuPassword();
            } else {
              this.recuperationDuMail();
            }
          }
        }]);

        return ForgetPasswordComponent;
      }();

      ForgetPasswordComponent.ctorParameters = function () {
        return [{
          type: _forget_password_service__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]
        }];
      };

      ForgetPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forget_password_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_forget_password_service__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]])], ForgetPasswordComponent);
      /***/
    },

    /***/
    "4QKd":
    /*!*************************************************************************!*\
      !*** ./src/app/features/forget-password/forget-password.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function QKd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titre {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.body {\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.reseau {\n  padding: 5px;\n}\n\n.reseau button {\n  padding: 5px;\n  color: rgba(14, 14, 161, 0.767);\n  font-weight: bold;\n}\n\n.inscription {\n  padding-left: 15px;\n}\n\n.reaseau-head {\n  text-align: center;\n  color: rgba(14, 14, 161, 0.986);\n  font-size: 20px;\n  font-weight: 200px;\n}\n\n@media (max-height: 768px) and (max-width: 1024px) {\n  .reseau {\n    padding: 0px;\n  }\n  .reseau button {\n    color: rgba(14, 14, 161, 0.767);\n    font-weight: bold;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQURJO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFHUjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBQUE7RUFFSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNJLFlBQUE7RUFFTjtFQURNO0lBQ0ksK0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFHVjtBQUNGIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRyZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcbi5yZXNlYXV7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjc2Nyk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmluc2NyaXB0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVhc2VhdS1oZWFke1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjk4Nik7O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC5yZXNlYXV7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTQsIDE0LCAxNjEsIDAuNzY3KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "4T4a":
    /*!***************************************************************!*\
      !*** ./src/app/features/inscription/inscription.component.ts ***!
      \***************************************************************/

    /*! exports provided: InscriptionComponent */

    /***/
    function T4a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function () {
        return InscriptionComponent;
      });
      /* harmony import */


      var _raw_loader_inscription_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./inscription.component.html */
      "7/u2");
      /* harmony import */


      var _inscription_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inscription.component.scss */
      "CHBC");
      /* harmony import */


      var _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/services/SnackBar */
      "77k+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");
      /* harmony import */


      var src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/authentification */
      "ob7d");
      /* harmony import */


      var _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../login/_helper/localStorage */
      "+64y");
      /* harmony import */


      var _helpe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./_helpe */
      "8loJ");
      /* harmony import */


      var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/theme/utils/app-validators */
      "VAss");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var InscriptionComponent = /*#__PURE__*/function () {
        function InscriptionComponent(authService, appSettings, fb, router, http, loginS, token, snackBar) {
          _classCallCheck(this, InscriptionComponent);

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

        _createClass(InscriptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.authService.authState.subscribe(function (user) {
              _this3.user = user;

              _this3.formIns.get('nom').setValue(user.firstName);

              _this3.formIns.get('prenom').setValue(user.lastName); //this.formIns.get('imgUrl').setValue(user.photoUrl);


              _this3.formIns.get('provider').setValue(user.provider);

              _this3.formIns.get('password').setValue(user.id);

              _this3.formIns.get('passwordValid').setValue(user.id);

              _this3.formIns.get('email').setValue(user.email);

              _this3.onSubmit();
            });
          }
        }, {
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID);
          }
        }, {
          key: "signInWithFB",
          value: function signInWithFB() {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.authService.signOut();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            if (this.formIns.valid) {
              //console.log(this.form.value)
              this.loginS.inscription(this.formIns.value).subscribe(function (data) {}, function (err) {
                //console.log(err);
                if (err.status == 201) {
                  _this4.snackBar.openSnackBar("Compte creer avec success", "Inscription", 5000);

                  _this4.router.navigate(['/login']);
                } else {
                  _this4.formIns.reset();

                  _this4.snackBar.openSnackBar("Utilisateur existe deja", "Inscription", 3000);

                  location.reload();
                }
              });
            } else {
              this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide", 3000);
            }
          }
        }]);

        return InscriptionComponent;
      }();

      InscriptionComponent.ctorParameters = function () {
        return [{
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"]
        }, {
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_8__["AppSettings"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
        }, {
          type: _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"]
        }, {
          type: _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]
        }];
      };

      InscriptionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-inscription',
        template: _raw_loader_inscription_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inscription_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_8__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"], _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]])], InscriptionComponent);
      /***/
    },

    /***/
    "7/u2":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/inscription/inscription.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container class=\"body\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n  \r\n         <div  fxFlex=\"80\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"80\">\r\n  \r\n              <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <img width=\"150px\" height=\"120px\" src=\"./assets/logo.png\">\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box\" >\r\n                      <mat-card class=\"form-card\" fxLayout=\"column\"  class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"titre\">Inscription</span>  \r\n                            <form [formGroup]=\"formIns\" #f=\"ngForm\">\r\n                                <div fxLayoutAlign=\"satrt\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                    <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                      <mat-form-field appearance=\"outline\" class=\"w-100\" >\r\n                                          <mat-label>Nom</mat-label>\r\n                                            <input matInput placeholder=\"Nom\" formControlName=\"nom\">\r\n                                            <mat-error *ngIf=\"formIns.controls.nom.errors?.required\">Nom ne doit pas etre vide</mat-error>                               \r\n                                        </mat-form-field>\r\n                                    </span>\r\n                                    <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                      <mat-form-field class=\"form-fiel\" appearance=\"outline\" class=\"w-100\" >\r\n                                          <mat-label>Prenom</mat-label>\r\n                                            <input matInput placeholder=\"Prenom\" formControlName=\"prenom\">\r\n                                            <mat-error *ngIf=\"formIns.controls.prenom.errors?.required\">Prenom ne doit pas etre vide</mat-error> \r\n                                        </mat-form-field>\r\n                                    </span>\r\n                                </div>\r\n                                  <span fxLayoutAlign=\"start\">\r\n                                     <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                        <mat-label>Email</mat-label>\r\n                                          <input matInput placeholder=\"Email\" formControlName=\"email\" >\r\n                                          <mat-error *ngIf=\"formIns.controls.email.errors?.required\">Email ne doit pas etre vide</mat-error> \r\n                                          <mat-error *ngIf=\"formIns.controls.email.hasError('invalidEmail')\">Mail Invalide</mat-error>\r\n                                          <mat-error *ngIf=\"formIns.controls.email.hasError('invalidEmail')\">Email invalide</mat-error>\r\n                                      </mat-form-field>\r\n                                  </span>\r\n                              <div fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                  <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                        <mat-label>Password</mat-label>\r\n                                        <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\r\n                                        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        </button>\r\n                                        <mat-error *ngIf=\"formIns.controls.password.errors?.required\">Password doit pas etre vide</mat-error>\r\n                                        <mat-error *ngIf=\"formIns.controls.password.hasError('minlength')\">La taille minimum est de 6 caractere</mat-error>\r\n                                     </mat-form-field>\r\n                                  </span>\r\n                                  <span [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                                    <mat-form-field appearance=\"outline\" class=\"w-100\" >\r\n                                        <mat-label>Validation Password</mat-label>\r\n                                        <input matInput formControlName=\"passwordValid\" [type]=\"hidev ? 'password' : 'text'\">\r\n                                        <button mat-icon-button matSuffix (click)=\"hidev = !hidev\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidev\">\r\n                                        <mat-icon>{{hidev ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        </button>\r\n                                        <mat-error *ngIf=\"formIns.controls.passwordValid.errors?.required\">Password doit pas etre vide</mat-error>\r\n                                        <mat-error *ngIf=\"formIns.controls.passwordValid.hasError('minlength')\">La taille minimum est de 6 caractere</mat-error>\r\n                                      </mat-form-field>\r\n                                  </span>\r\n                              </div>\r\n                            </form>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                            <p>J'aimerais <a mat-button routerLink=\"/login\">me connecter</a></p>\r\n                          </div>\r\n                      </mat-card>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\"  class=\"mat-elevation-z12 box-button\" type=\"submit\">S'Inscrire</button>\r\n                  </mat-card-content>\r\n                    <mat-card>\r\n                        <h3 class=\"reaseau-head\">s'inscrire avec </h3>\r\n                        <mat-card-content >\r\n                            <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                <button (click)=\"signInWithGoogle()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/google.png\">\r\n                                     Google\r\n                                    </button>\r\n                                <button (click)=\"signInWithFB()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/facebook.png\">\r\n                                  Facebook</button>\r\n                              </div>\r\n            \r\n                              <!-- <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/twitter.png\">\r\n                                  Twitter</button>\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\"  src=\"./assets/icones/linkedin.png\">\r\n                                  Linkedin</button>\r\n                              </div> -->\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n              </mat-card>\r\n            </div>\r\n    </div>\r\n  \r\n  </mat-sidenav-container>";
      /***/
    },

    /***/
    "9zYU":
    /*!*****************************************************!*\
      !*** ./src/app/features/login/login.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function zYU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titre {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.body {\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.reseau {\n  padding: 5px;\n}\n\n.reseau button {\n  padding: 5px;\n  color: rgba(14, 14, 161, 0.767);\n  font-weight: bold;\n}\n\n.inscription {\n  padding-left: 15px;\n}\n\n.reaseau-head {\n  text-align: center;\n  color: rgba(14, 14, 161, 0.986);\n  font-size: 20px;\n  font-weight: 200px;\n}\n\n@media (max-height: 768px) and (max-width: 1024px) {\n  .reseau {\n    padding: 0px;\n  }\n  .reseau button {\n    color: rgba(14, 14, 161, 0.767);\n    font-weight: bold;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUdSOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFBQTtFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQUVOO0VBRE07SUFDSSwrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQUdWO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0cmV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2JnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG4ucmVzZWF1e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNCwgMTQsIDE2MSwgMC43NjcpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5pbnNjcmlwdGlvbntcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnJlYXNlYXUtaGVhZHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiYSgxNCwgMTQsIDE2MSwgMC45ODYpOztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAucmVzZWF1e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjc2Nyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "CHBC":
    /*!*****************************************************************!*\
      !*** ./src/app/features/inscription/inscription.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function CHBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titre {\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n.reseau {\n  padding: 5px;\n}\n\n.reseau button {\n  padding: 5px;\n  color: rgba(14, 14, 161, 0.767);\n  font-weight: bold;\n}\n\n.inscription {\n  padding-left: 15px;\n}\n\n.reaseau-head {\n  text-align: center;\n  color: rgba(14, 14, 161, 0.986);\n  font-size: 20px;\n  font-weight: 200px;\n}\n\n.box {\n  width: 100%;\n}\n\n.box .form-card {\n  width: 80%;\n}\n\n.form-fiel {\n  width: 100%;\n}\n\n.form-fiel input {\n  width: 100%;\n}\n\n@media (max-height: 768px) and (max-width: 1024px) {\n  .reseau {\n    padding: 0px;\n  }\n  .reseau button {\n    color: rgba(14, 14, 161, 0.767);\n    font-weight: bold;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBQ0k7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFDSTtFQUNJLFVBQUE7QUFDUjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFHQTtFQUNJO0lBQ0ksWUFBQTtFQUFOO0VBQ007SUFDSSwrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQUNWO0FBQ0YiLCJmaWxlIjoiaW5zY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0cmV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5yZXNlYXV7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjc2Nyk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmluc2NyaXB0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVhc2VhdS1oZWFke1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDE0LCAxNCwgMTYxLCAwLjk4Nik7O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZm9ybS1jYXJke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC5yZXNlYXV7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTQsIDE0LCAxNjEsIDAuNzY3KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "I1Vh":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/login/login.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function I1Vh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container >\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n  \r\n         <form [formGroup]=\"form\"  fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n  \r\n              <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <img width=\"150px\" height=\"120px\" src=\"./assets/logo.png\">\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                      <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"titre\">Connexion</span>  \r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Username</mat-label>\r\n                              <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                              <mat-error *ngIf=\"form.controls.email.errors?.required\">Email ne doit pas etre vide</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Email invalide</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                              <mat-label>Password</mat-label>\r\n                              <mat-icon matPrefix>lock</mat-icon>\r\n                            <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\r\n                            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                            </button>\r\n\r\n                              <mat-error *ngIf=\"form.controls.password.errors?.required\">password ne doit pas etre vide</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">La longueur du mot de passe est de 6 caractere minimum</mat-error>\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n                          </div>\r\n                      </mat-card>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" class=\"mat-elevation-z12 box-button\" type=\"submit\">Connexion</button>\r\n                  </mat-card-content>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                    <mat-card-content class=\"inscription\">\r\n                        <p>J'aimerais <a mat-button routerLink=\"/login/inscription\">m'inscrire</a></p>\r\n                    </mat-card-content>\r\n                  </div>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                    <mat-card-content class=\"inscription\">\r\n                        <p><a mat-button routerLink=\"/login/forgetpassword\">mot de passe oublier</a></p>\r\n                    </mat-card-content>\r\n                  </div>\r\n                    <mat-card>\r\n                        <h3 class=\"reaseau-head\">se connecter avec </h3>\r\n                        <mat-card-content >\r\n                            <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                                <button (click)=\"signInWithGoogle()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/google.png\">\r\n                                     Google\r\n                                    </button>\r\n                                <button (click)=\"signInWithFB()\" [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/facebook.png\">\r\n                                  Facebook</button>\r\n                              </div>\r\n<!--             \r\n                              <div class=\"reseau\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button  class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\" height=\"30px\" src=\"./assets/icones/twitter.png\">\r\n                                  Twitter</button>\r\n\r\n                                <button [fxFlex.xs]=\"45\" [fxFlex.sm]=\"45\" [fxFlex.md]=\"45\" [fxFlex.lg]=\"45\" [fxFlex.xl]=\"45\"\r\n                                  mat-raised-button class=\"mat-elevation-z12 box-button\">\r\n                                  <img  width=\"30px\"  src=\"./assets/icones/linkedin.png\">\r\n                                  Linkedin</button>\r\n\r\n                              </div> -->\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n              </mat-card>\r\n              \r\n          </form>    \r\n    \r\n    </div>\r\n  \r\n  </mat-sidenav-container>";
      /***/
    },

    /***/
    "MZzM":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/forget-password/forget-password.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MZzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n<mat-sidenav-container >\r\n    <div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n        <mat-spinner color=\"primary\"></mat-spinner>\r\n      </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n         <form   fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n              <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <img width=\"150px\" height=\"120px\" src=\"./assets/logo.png\">\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                      <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"titre\">Mot de passe oublier</span>  \r\n                          <mat-form-field *ngIf=\"!consigne\" appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Mail de recuperation</mat-label>\r\n                              <input [(ngModel)]=\"mailRecuperation\" matInput type=\"email\" placeholder=\"Mail de recuperation\" name=\"mailRecuperation\">\r\n                              <!-- <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error> -->\r\n                          </mat-form-field>\r\n                          <mat-form-field *ngIf=\"consigne\" appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Code de validation</mat-label>\r\n                              <input [(ngModel)]=\"codeValidation\" matInput type=\"email\" placeholder=\"Code de validation\" name=\"codeValidation\">\r\n                              <!-- <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error> -->\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                          </div>\r\n                      </mat-card>\r\n                      <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\">Valider</button>\r\n                  </mat-card-content>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                    <mat-card-content class=\"inscription\">\r\n                        <p>J'aimerais <a mat-button routerLink=\"/login\">me connecter</a></p>\r\n                    </mat-card-content>\r\n                </div>\r\n              </mat-card>\r\n              \r\n          </form>    \r\n    \r\n    </div>\r\n  \r\n  </mat-sidenav-container>";
      /***/
    },

    /***/
    "VAss":
    /*!***********************************************!*\
      !*** ./src/app/theme/utils/app-validators.ts ***!
      \***********************************************/

    /*! exports provided: emailValidator, matchingPasswords */

    /***/
    function VAss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailValidator", function () {
        return emailValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matchingPasswords", function () {
        return matchingPasswords;
      });

      function emailValidator(control) {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

        if (control.value && !emailRegexp.test(control.value)) {
          return {
            invalidEmail: true
          };
        }
      }

      function matchingPasswords(passwordKey, passwordConfirmationKey) {
        return function (group) {
          var password = group.controls[passwordKey];
          var passwordConfirmation = group.controls[passwordConfirmationKey];

          if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({
              mismatchedPasswords: true
            });
          }
        };
      }
      /***/

    },

    /***/
    "ahC7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js ***!
      \*******************************************************************************************/

    /*! exports provided: AmazonLoginProvider, BaseLoginProvider, DummyLoginProvider, FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialLoginModule, SocialUser, VKLoginProvider */

    /***/
    function ahC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmazonLoginProvider", function () {
        return AmazonLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseLoginProvider", function () {
        return BaseLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DummyLoginProvider", function () {
        return DummyLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function () {
        return FacebookLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function () {
        return GoogleLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MicrosoftLoginProvider", function () {
        return MicrosoftLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialAuthService", function () {
        return SocialAuthService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function () {
        return SocialLoginModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialUser", function () {
        return SocialUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VKLoginProvider", function () {
        return VKLoginProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var BaseLoginProvider = /*#__PURE__*/function () {
        function BaseLoginProvider() {
          _classCallCheck(this, BaseLoginProvider);
        }

        _createClass(BaseLoginProvider, [{
          key: "loadScript",
          value: function loadScript(id, src, onload) {
            var parentElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            // get document if platform is only browser
            if (typeof document !== 'undefined' && !document.getElementById(id)) {
              var signInJS = document.createElement('script');
              signInJS.async = true;
              signInJS.src = src;
              signInJS.onload = onload;

              if (!parentElement) {
                parentElement = document.head;
              }

              parentElement.appendChild(signInJS);
            }
          }
        }]);

        return BaseLoginProvider;
      }();

      var SocialUser = function SocialUser() {
        _classCallCheck(this, SocialUser);
      };

      var GoogleLoginProvider = /*#__PURE__*/function (_BaseLoginProvider) {
        _inherits(GoogleLoginProvider, _BaseLoginProvider);

        var _super = _createSuper(GoogleLoginProvider);

        function GoogleLoginProvider(clientId) {
          var _this5;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'email'
          };

          _classCallCheck(this, GoogleLoginProvider);

          _this5 = _super.call(this);
          _this5.clientId = clientId;
          _this5.initOptions = initOptions;
          return _this5;
        }

        _createClass(GoogleLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this6.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', function () {
                  gapi.load('auth2', function () {
                    _this6.auth2 = gapi.auth2.init(Object.assign(Object.assign({}, _this6.initOptions), {
                      client_id: _this6.clientId
                    }));

                    _this6.auth2.then(function () {
                      resolve();
                    })["catch"](function (err) {
                      reject(err);
                    });
                  });
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus(loginStatusOptions) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              if (_this7.auth2.isSignedIn.get()) {
                var user = new SocialUser();

                var profile = _this7.auth2.currentUser.get().getBasicProfile();

                user.id = profile.getId();
                user.name = profile.getName();
                user.email = profile.getEmail();
                user.photoUrl = profile.getImageUrl();
                user.firstName = profile.getGivenName();
                user.lastName = profile.getFamilyName();
                user.response = profile;

                if (loginStatusOptions && loginStatusOptions.refreshToken) {
                  _this7.auth2.currentUser.get().reloadAuthResponse().then(function (authResponse) {
                    user.authToken = authResponse.access_token;
                    user.idToken = authResponse.id_token;
                    resolve(user);
                  });
                } else {
                  var authResponse = _this7.auth2.currentUser.get().getAuthResponse(true);

                  user.authToken = authResponse.access_token;
                  user.idToken = authResponse.id_token;
                  resolve(user);
                }
              } else {
                reject("No user is currently logged in with ".concat(GoogleLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var _this8 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              var offlineAccess = options && options.offline_access;
              var promise = !offlineAccess ? _this8.auth2.signIn(signInOptions) : _this8.auth2.grantOfflineAccess(signInOptions);
              promise.then(function (response) {
                var user = new SocialUser();

                if (response && response.code) {
                  user.authorizationCode = response.code;
                } else {
                  var profile = _this8.auth2.currentUser.get().getBasicProfile();

                  var token = _this8.auth2.currentUser.get().getAuthResponse(true).access_token;

                  var backendToken = _this8.auth2.currentUser.get().getAuthResponse(true).id_token;

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
              }, function (closed) {
                reject(closed);
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              var signOutPromise;

              if (revoke) {
                signOutPromise = _this9.auth2.disconnect();
              } else {
                signOutPromise = _this9.auth2.signOut();
              }

              signOutPromise.then(function (err) {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }]);

        return GoogleLoginProvider;
      }(BaseLoginProvider);

      GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';
      /** @dynamic */

      var SocialAuthService = /*#__PURE__*/function () {
        function SocialAuthService(config) {
          var _this10 = this;

          _classCallCheck(this, SocialAuthService);

          this.providers = new Map();
          this.autoLogin = false;
          this._user = null;
          this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          /* Consider making this an enum comprising LOADING, LOADED, FAILED etc. */

          this.initialized = false;
          this._initState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          if (config instanceof Promise) {
            config.then(function (config) {
              _this10.initialize(config);
            });
          } else {
            this.initialize(config);
          }
        }

        _createClass(SocialAuthService, [{
          key: "initialize",
          value: function initialize(config) {
            var _this11 = this;

            this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
            var _config$onError = config.onError,
                onError = _config$onError === void 0 ? console.error : _config$onError;
            config.providers.forEach(function (item) {
              _this11.providers.set(item.id, item.provider);
            });
            Promise.all(Array.from(this.providers.values()).map(function (provider) {
              return provider.initialize();
            })).then(function () {
              if (_this11.autoLogin) {
                var loginStatusPromises = [];
                var loggedIn = false;

                _this11.providers.forEach(function (provider, key) {
                  var promise = provider.getLoginStatus();
                  loginStatusPromises.push(promise);
                  promise.then(function (user) {
                    user.provider = key;
                    _this11._user = user;

                    _this11._authState.next(user);

                    loggedIn = true;
                  })["catch"](console.debug);
                });

                Promise.all(loginStatusPromises)["catch"](function () {
                  if (!loggedIn) {
                    _this11._user = null;

                    _this11._authState.next(null);
                  }
                });
              }
            })["catch"](function (error) {
              onError(error);
            })["finally"](function () {
              _this11.initialized = true;

              _this11._initState.next(_this11.initialized);

              _this11._initState.complete();
            });
          }
        }, {
          key: "refreshAuthToken",
          value: function refreshAuthToken(providerId) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              if (!_this12.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else if (providerId !== GoogleLoginProvider.PROVIDER_ID) {
                reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
              } else {
                var providerObject = _this12.providers.get(providerId);

                if (providerObject) {
                  providerObject.getLoginStatus({
                    refreshToken: true
                  }).then(function (user) {
                    user.provider = providerId;
                    _this12._user = user;

                    _this12._authState.next(user);

                    resolve();
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(providerId, signInOptions) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              if (!_this13.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else {
                var providerObject = _this13.providers.get(providerId);

                if (providerObject) {
                  providerObject.signIn(signInOptions).then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this13._user = user;

                    _this13._authState.next(user);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this14 = this;

            var revoke = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return new Promise(function (resolve, reject) {
              if (!_this14.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else if (!_this14._user) {
                reject(SocialAuthService.ERR_NOT_LOGGED_IN);
              } else {
                var providerId = _this14._user.provider;

                var providerObject = _this14.providers.get(providerId);

                if (providerObject) {
                  providerObject.signOut(revoke).then(function () {
                    resolve();
                    _this14._user = null;

                    _this14._authState.next(null);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }, {
          key: "authState",
          get: function get() {
            return this._authState.asObservable();
          }
        }, {
          key: "initState",
          get: function get() {
            return this._initState.asObservable();
          }
        }]);

        return SocialAuthService;
      }();

      SocialAuthService.ɵfac = function SocialAuthService_Factory(t) {
        return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('SocialAuthServiceConfig'));
      };

      SocialAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SocialAuthService,
        factory: SocialAuthService.ɵfac
      });
      SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
      SocialAuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
      SocialAuthService.ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
      SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN = 'Chosen login provider is not supported for refreshing a token';

      SocialAuthService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['SocialAuthServiceConfig']
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['SocialAuthServiceConfig']
            }]
          }];
        }, null);
      })();

      var SocialLoginModule = /*#__PURE__*/function () {
        function SocialLoginModule(parentModule) {
          _classCallCheck(this, SocialLoginModule);

          if (parentModule) {
            throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
          }
        }

        _createClass(SocialLoginModule, null, [{
          key: "initialize",
          value: function initialize(config) {
            return {
              ngModule: SocialLoginModule,
              providers: [SocialAuthService, {
                provide: 'SocialAuthServiceConfig',
                useValue: config
              }]
            };
          }
        }]);

        return SocialLoginModule;
      }();

      SocialLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SocialLoginModule
      });
      SocialLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SocialLoginModule_Factory(t) {
          return new (t || SocialLoginModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SocialLoginModule, 12));
        },
        providers: [SocialAuthService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      SocialLoginModule.ctorParameters = function () {
        return [{
          type: SocialLoginModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialLoginModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [SocialAuthService]
          }]
        }], function () {
          return [{
            type: SocialLoginModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, null);
      })(); // Simulates login / logout without actually requiring an Internet connection.
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


      var DummyLoginProvider = /*#__PURE__*/function (_BaseLoginProvider2) {
        _inherits(DummyLoginProvider, _BaseLoginProvider2);

        var _super2 = _createSuper(DummyLoginProvider);

        function DummyLoginProvider(dummy) {
          var _this15;

          _classCallCheck(this, DummyLoginProvider);

          _this15 = _super2.call(this);

          if (dummy) {
            _this15.dummy = dummy;
          } else {
            _this15.dummy = DummyLoginProvider.DEFAULT_USER;
          } // Start not logged in


          _this15.loggedIn = false;
          return _this15;
        }

        _createClass(DummyLoginProvider, [{
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              if (_this16.loggedIn) {
                resolve(_this16.dummy);
              } else {
                reject('No user is currently logged in.');
              }
            });
          }
        }, {
          key: "initialize",
          value: function initialize() {
            return new Promise(function (resolve, reject) {
              resolve();
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              _this17.loggedIn = true;
              resolve(_this17.dummy);
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              _this18.loggedIn = false;
              resolve();
            });
          }
        }]);

        return DummyLoginProvider;
      }(BaseLoginProvider);

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

      var FacebookLoginProvider = /*#__PURE__*/function (_BaseLoginProvider3) {
        _inherits(FacebookLoginProvider, _BaseLoginProvider3);

        var _super3 = _createSuper(FacebookLoginProvider);

        function FacebookLoginProvider(clientId) {
          var _this19;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'email,public_profile',
            locale: 'en_US',
            fields: 'name,email,picture,first_name,last_name',
            version: 'v4.0'
          };

          _classCallCheck(this, FacebookLoginProvider);

          _this19 = _super3.call(this);
          _this19.clientId = clientId;
          _this19.initOptions = initOptions;
          return _this19;
        }

        _createClass(FacebookLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this20 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this20.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/".concat(_this20.initOptions.locale, "/sdk.js"), function () {
                  FB.init({
                    appId: _this20.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: _this20.initOptions.version
                  });
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this21 = this;

            return new Promise(function (resolve, reject) {
              FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                  var authResponse = response.authResponse;
                  FB.api("/me?fields=".concat(_this21.initOptions.fields), function (fbUser) {
                    var user = new SocialUser();
                    user.id = fbUser.id;
                    user.name = fbUser.name;
                    user.email = fbUser.email;
                    user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                    user.firstName = fbUser.first_name;
                    user.lastName = fbUser.last_name;
                    user.authToken = authResponse.accessToken;
                    user.response = fbUser;
                    resolve(user);
                  });
                } else {
                  reject("No user is currently logged in with ".concat(FacebookLoginProvider.PROVIDER_ID));
                }
              });
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              FB.login(function (response) {
                if (response.authResponse) {
                  var authResponse = response.authResponse;
                  FB.api("/me?fields=".concat(options.fields), function (fbUser) {
                    var user = new SocialUser();
                    user.id = fbUser.id;
                    user.name = fbUser.name;
                    user.email = fbUser.email;
                    user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                    user.firstName = fbUser.first_name;
                    user.lastName = fbUser.last_name;
                    user.authToken = authResponse.accessToken;
                    user.response = fbUser;
                    resolve(user);
                  });
                } else {
                  reject('User cancelled login or did not fully authorize.');
                }
              }, options);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return new Promise(function (resolve, reject) {
              FB.logout(function (response) {
                resolve();
              });
            });
          }
        }]);

        return FacebookLoginProvider;
      }(BaseLoginProvider);

      FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';

      var AmazonLoginProvider = /*#__PURE__*/function (_BaseLoginProvider4) {
        _inherits(AmazonLoginProvider, _BaseLoginProvider4);

        var _super4 = _createSuper(AmazonLoginProvider);

        function AmazonLoginProvider(clientId) {
          var _this22;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'profile',
            scope_data: {
              profile: {
                essential: false
              }
            },
            redirect_uri: location.origin
          };

          _classCallCheck(this, AmazonLoginProvider);

          _this22 = _super4.call(this);
          _this22.clientId = clientId;
          _this22.initOptions = initOptions;
          return _this22;
        }

        _createClass(AmazonLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this23 = this;

            var amazonRoot = null;

            if (document) {
              amazonRoot = document.createElement('div');
              amazonRoot.id = 'amazon-root';
              document.body.appendChild(amazonRoot);
            }

            window.onAmazonLoginReady = function () {
              amazon.Login.setClientId(_this23.clientId);
            };

            return new Promise(function (resolve, reject) {
              try {
                _this23.loadScript('amazon-login-sdk', 'https://assets.loginwithamazon.com/sdk/na/login1.js', function () {
                  resolve();
                }, amazonRoot);
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              var token = _this24.retrieveToken();

              if (token) {
                amazon.Login.retrieveProfile(token, function (response) {
                  if (response.success) {
                    var user = new SocialUser();
                    user.id = response.profile.CustomerId;
                    user.name = response.profile.Name;
                    user.email = response.profile.PrimaryEmail;
                    user.response = response.profile;
                    resolve(user);
                  } else {
                    reject(response.error);
                  }
                });
              } else {
                reject("No user is currently logged in with ".concat(AmazonLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var _this25 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              amazon.Login.authorize(options, function (authResponse) {
                if (authResponse.error) {
                  reject(authResponse.error);
                } else {
                  amazon.Login.retrieveProfile(authResponse.access_token, function (response) {
                    var user = new SocialUser();
                    user.id = response.profile.CustomerId;
                    user.name = response.profile.Name;
                    user.email = response.profile.PrimaryEmail;
                    user.authToken = authResponse.access_token;
                    user.response = response.profile;

                    _this25.persistToken(authResponse.access_token);

                    resolve(user);
                  });
                }
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this26 = this;

            return new Promise(function (resolve, reject) {
              try {
                amazon.Login.logout();

                _this26.clearToken();

                resolve();
              } catch (err) {
                reject(err.message);
              }
            });
          }
        }, {
          key: "persistToken",
          value: function persistToken(token) {
            localStorage.setItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"), token);
          }
        }, {
          key: "retrieveToken",
          value: function retrieveToken() {
            return localStorage.getItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"));
          }
        }, {
          key: "clearToken",
          value: function clearToken() {
            localStorage.removeItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"));
          }
        }]);

        return AmazonLoginProvider;
      }(BaseLoginProvider);

      AmazonLoginProvider.PROVIDER_ID = 'AMAZON';

      var VKLoginProvider = /*#__PURE__*/function (_BaseLoginProvider5) {
        _inherits(VKLoginProvider, _BaseLoginProvider5);

        var _super5 = _createSuper(VKLoginProvider);

        function VKLoginProvider(clientId) {
          var _this27;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            fields: 'photo_max,contacts',
            version: '5.124'
          };

          _classCallCheck(this, VKLoginProvider);

          _this27 = _super5.call(this);
          _this27.clientId = clientId;
          _this27.initOptions = initOptions;
          _this27.VK_API_URL = '//vk.com/js/api/openapi.js';
          _this27.VK_API_GET_USER = 'users.get';
          return _this27;
        }

        _createClass(VKLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this28.loadScript(VKLoginProvider.PROVIDER_ID, _this28.VK_API_URL, function () {
                  VK.init({
                    apiId: _this28.clientId
                  });
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this29 = this;

            return new Promise(function (resolve, reject) {
              return _this29.getLoginStatusInternal(resolve, reject);
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this30 = this;

            return new Promise(function (resolve, reject) {
              return _this30.signInInternal(resolve, reject);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return new Promise(function (resolve, reject) {
              VK.Auth.logout(function (response) {
                resolve();
              });
            });
          }
        }, {
          key: "signInInternal",
          value: function signInInternal(resolve, reject) {
            var _this31 = this;

            VK.Auth.login(function (loginResponse) {
              if (loginResponse.status === 'connected') {
                _this31.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
              }
            });
          }
        }, {
          key: "getUser",
          value: function getUser(userId, token, resolve) {
            var _this32 = this;

            VK.Api.call(this.VK_API_GET_USER, {
              user_id: userId,
              fields: this.initOptions.fields,
              v: this.initOptions.version
            }, function (userResponse) {
              resolve(_this32.createUser(Object.assign({}, {
                token: token
              }, userResponse.response[0])));
            });
          }
        }, {
          key: "getLoginStatusInternal",
          value: function getLoginStatusInternal(resolve, reject) {
            var _this33 = this;

            VK.Auth.getLoginStatus(function (loginResponse) {
              if (loginResponse.status === 'connected') {
                _this33.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
              }
            });
          }
        }, {
          key: "createUser",
          value: function createUser(response) {
            var user = new SocialUser();
            user.id = response.id;
            user.name = "".concat(response.first_name, " ").concat(response.last_name);
            user.photoUrl = response.photo_max;
            user.authToken = response.token;
            return user;
          }
        }]);

        return VKLoginProvider;
      }(BaseLoginProvider);

      VKLoginProvider.PROVIDER_ID = 'VK';
      /**
       * Protocol modes supported by MSAL.
       */

      var ProtocolMode;

      (function (ProtocolMode) {
        ProtocolMode["AAD"] = "AAD";
        ProtocolMode["OIDC"] = "OIDC";
      })(ProtocolMode || (ProtocolMode = {}));

      var COMMON_AUTHORITY = 'https://login.microsoftonline.com/common/';
      /**
       * Microsoft Authentication using MSAL v2: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser
       */

      var MicrosoftLoginProvider = /*#__PURE__*/function (_BaseLoginProvider6) {
        _inherits(MicrosoftLoginProvider, _BaseLoginProvider6);

        var _super6 = _createSuper(MicrosoftLoginProvider);

        function MicrosoftLoginProvider(clientId, initOptions) {
          var _this34;

          _classCallCheck(this, MicrosoftLoginProvider);

          _this34 = _super6.call(this);
          _this34.clientId = clientId;
          _this34.initOptions = {
            redirect_uri: location.origin,
            authority: COMMON_AUTHORITY,
            scopes: ['openid', 'profile', 'User.Read'],
            knownAuthorities: [],
            protocolMode: ProtocolMode.AAD,
            clientCapabilities: [],
            cacheLocation: 'sessionStorage'
          };
          _this34.initOptions = Object.assign(Object.assign({}, _this34.initOptions), initOptions);
          return _this34;
        }

        _createClass(MicrosoftLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this35 = this;

            return new Promise(function (resolve, reject) {
              _this35.loadScript(MicrosoftLoginProvider.PROVIDER_ID, 'https://alcdn.msauth.net/browser/2.1.0/js/msal-browser.js', function () {
                try {
                  var config = {
                    auth: {
                      clientId: _this35.clientId,
                      redirectUri: _this35.initOptions.redirect_uri,
                      authority: _this35.initOptions.authority,
                      knownAuthorities: _this35.initOptions.knownAuthorities,
                      protocolMode: _this35.initOptions.protocolMode,
                      clientCapabilities: _this35.initOptions.clientCapabilities
                    },
                    cache: !_this35.initOptions.cacheLocation ? null : {
                      cacheLocation: _this35.initOptions.cacheLocation
                    }
                  };
                  _this35._instance = new msal.PublicClientApplication(config);
                  resolve();
                } catch (e) {
                  reject(e);
                }
              });
            });
          }
        }, {
          key: "getSocialUser",
          value: function getSocialUser(loginResponse) {
            return new Promise(function (resolve, reject) {
              //After login, use Microsoft Graph API to get user info
              var meRequest = new XMLHttpRequest();

              meRequest.onreadystatechange = function () {
                if (meRequest.readyState == 4) {
                  try {
                    if (meRequest.status == 200) {
                      var userInfo = JSON.parse(meRequest.responseText);
                      var user = new SocialUser();
                      user.provider = MicrosoftLoginProvider.PROVIDER_ID;
                      user.id = loginResponse.idToken;
                      user.name = loginResponse.idTokenClaims.name;
                      user.email = loginResponse.account.username;
                      user.idToken = loginResponse.idToken;
                      user.response = loginResponse;
                      user.firstName = userInfo.givenName;
                      user.lastName = userInfo.surname;
                      resolve(user);
                    } else {
                      reject("Error retrieving user info: ".concat(meRequest.status));
                    }
                  } catch (err) {
                    reject(err);
                  }
                }
              }; //Microsoft Graph ME Endpoint: https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http


              meRequest.open('GET', 'https://graph.microsoft.com/v1.0/me');
              meRequest.setRequestHeader('Authorization', "Bearer ".concat(loginResponse.accessToken));

              try {
                meRequest.send();
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this36 = this;

            return new Promise(function (resolve, reject) {
              var accounts = _this36._instance.getAllAccounts();

              if (accounts.length > 0) {
                try {
                  _this36._instance.ssoSilent({
                    scopes: _this36.initOptions.scopes,
                    loginHint: accounts[0].username
                  }).then(function (loginResponse) {
                    _this36.getSocialUser(loginResponse).then(function (user) {
                      return resolve(user);
                    })["catch"](function (err) {
                      return reject(err);
                    });
                  })["catch"](function (err) {
                    return reject(err);
                  });
                } catch (err) {
                  reject(err);
                }
              } else {
                reject("No user is currently logged in with ".concat(MicrosoftLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this37 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this37._instance.loginPopup({
                  scopes: _this37.initOptions.scopes
                }).then(function (loginResponse) {
                  _this37.getSocialUser(loginResponse).then(function (user) {
                    return resolve(user);
                  })["catch"](function (err) {
                    return reject(err);
                  });
                })["catch"](function (err) {
                  return reject(err);
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this38 = this;

            return new Promise(function (resolve, reject) {
              try {
                var accounts = _this38._instance.getAllAccounts(); //TODO: This redirects to a Microsoft page, then sends us back to redirect_uri... this doesn't seem to match other providers
                //Open issues:
                // https://github.com/abacritt/angularx-social-login/issues/306
                // https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2563


                _this38._instance.logout({
                  account: accounts[0],
                  postLogoutRedirectUri: _this38.initOptions.redirect_uri
                }).then(function () {
                  resolve();
                })["catch"](function (err) {
                  reject(err);
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }]);

        return MicrosoftLoginProvider;
      }(BaseLoginProvider);

      MicrosoftLoginProvider.PROVIDER_ID = 'MICROSOFT';
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angularx-social-login.js.map

      /***/
    },

    /***/
    "kcJd":
    /*!*********************************************************************!*\
      !*** ./src/app/features/forget-password/forget-password.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ForgetPasswordService */

    /***/
    function kcJd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordService", function () {
        return ForgetPasswordService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ForgetPasswordService = /*#__PURE__*/function () {
        function ForgetPasswordService(http) {
          _classCallCheck(this, ForgetPasswordService);

          this.http = http;
        }

        _createClass(ForgetPasswordService, [{
          key: "MailDeRecuperation",
          value: function MailDeRecuperation(mail) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.LOGIN.CONNEXION + "mail-de-recuperation/" + mail);
          }
        }, {
          key: "envoiMailByCode",
          value: function envoiMailByCode(code) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.LOGIN.CONNEXION + "envoi-code/" + code);
          }
        }]);

        return ForgetPasswordService;
      }();

      ForgetPasswordService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      ForgetPasswordService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], ForgetPasswordService);
      /***/
    },

    /***/
    "vm+o":
    /*!************************************************!*\
      !*** ./src/app/features/login/login.module.ts ***!
      \************************************************/

    /*! exports provided: routes, LoginModule */

    /***/
    function vmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../forget-password/forget-password.component */
      "+UTu");
      /* harmony import */


      var _shared_services_authentification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/services/authentification */
      "ob7d");
      /* harmony import */


      var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../inscription/inscription.component */
      "4T4a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login.component */
      "w3x6");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        pathMatch: 'full'
      }, {
        path: 'inscription',
        component: _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionComponent"],
        pathMatch: 'full'
      }, {
        path: 'forgetpassword',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"],
        pathMatch: 'full'
      }];

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"]],
        providers: [{
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"]('743279905565-e1g2po029tupno9991csqsbb98qrqg8q.apps.googleusercontent.com')
            }, {
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"]('708823373162698')
            }]
          }
        }, _shared_services_authentification__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
      })], LoginModule);
      /***/
    },

    /***/
    "w3x6":
    /*!***************************************************!*\
      !*** ./src/app/features/login/login.component.ts ***!
      \***************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function w3x6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "I1Vh");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.scss */
      "9zYU");
      /* harmony import */


      var _shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/services/authentification */
      "ob7d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../theme/utils/app-validators */
      "VAss");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../app.settings */
      "/RaO");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _helper_localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_helper/localStorage */
      "+64y");
      /* harmony import */


      var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/SnackBar */
      "77k+");
      /* harmony import */


      var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/ProjetRenovation.localStorage */
      "Geum");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, appSettings, projetStorage, fb, router, http, snackBar, loginS, token) {
          _classCallCheck(this, LoginComponent);

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

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.authService.authState.subscribe(function (user) {
              _this39.user = user;
              _this39.hide = true;

              _this39.form.get('password').setValue(user.id);

              _this39.form.get('email').setValue(user.email);

              _this39.onSubmit();
            });
          }
        }, {
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID);
          }
        }, {
          key: "signInWithFB",
          value: function signInWithFB() {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.authService.signOut();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this40 = this;

            if (this.form.valid) {
              var user = {
                username: this.form.get('email').value,
                password: this.form.get('password').value
              };
              this.loginS.login(user).subscribe(function (data) {
                console.log(data);
                var roles = data.roles;

                _this40.token.saveToken(data.accessToken);

                _this40.token.setMenu(data.id);

                _this40.token.saveUtilisateur(data.nom + " " + data.prenom);

                _this40.projetStorage.saveGestionTache(0);

                _this40.projetStorage.saveGestionUser(0);

                _this40.projetStorage.setGestionAgenda(0);

                _this40.projetStorage.setGestionDossier(0);

                data.roles.forEach(function (element) {
                  if (element == "ROLE_GESTION_TACHE_RENOVATION") {
                    _this40.projetStorage.saveGestionTache(1);
                  } else if (element == "ROLE_GESTION_USER_RENOVATION") {
                    _this40.projetStorage.saveGestionUser(1);
                  } else if (element == "ROLE_GESTION_AGENDA_RENOVATION") {
                    _this40.projetStorage.setGestionAgenda(1);
                  } else if (element == "ROLE_GESTION_DOSSIER") {
                    _this40.projetStorage.setGestionDossier(1);
                  } else if (element == "ROLE_GESTION_DEMARRAGE_PROJET_RENOVATION") {
                    _this40.projetStorage.saveGestionUser(1);

                    _this40.projetStorage.setGestionAgenda(1);

                    _this40.projetStorage.setGestionDossier(1);
                  }
                });

                _this40.snackBar.openSnackBar("Bienvenu " + data.nom + " " + data.prenom, "Connecter", 5000);

                _this40.router.navigate(['/']);

                console.log(data);
              }, function (err) {
                console.log(err);

                _this40.form.reset();

                _this40.snackBar.openSnackBar("Email ou Password Incorrecte", "Connexion", 3000);
              });
            } else {
              this.snackBar.openSnackBar("Remplire les Champs SVP", "Champs Vide", 3000);
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialAuthService"]
        }, {
          type: _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"]
        }, {
          type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_12__["ProjetStorageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__["SnackBarService"]
        }, {
          type: _shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"]
        }];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialAuthService"], _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_12__["ProjetStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__["SnackBarService"], _shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _helper_localStorage__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"]])], LoginComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-login-login-module-es5.js.map