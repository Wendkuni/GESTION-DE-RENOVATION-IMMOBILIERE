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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-profile-profile-module"], {
    /***/
    "++Me":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/update-profile/update-client/update-client.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Me(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n        <h2>Modifier Le Profile</h2>\r\n    </div>\r\n    <div mat-dialog-content *ngIf=\"!isLoadingResults\">\r\n        <form [formGroup]=\"clientForm\" enctype=\"multipart/form-data\" >\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <div *ngIf=\"image\">\r\n                    <img class=\"profile-img\" src=\"{{image}}\" alt=\"user-image\" width=\"100\" class=\"rounded mat-elevation-z6\">\r\n                </div>\r\n\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\">\r\n                <input mat-raised-button type=\"file\" (change)=\"onSelect($event)\" placeholder=\"Changer sa photo de profile\">\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" [value]=\"client.email\" readonly>\r\n                    \r\n                </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Nom</mat-label>\r\n                    <input matInput #input placeholder=\"Ex. Nougat\" formControlName=\"nom\" required>\r\n                    <mat-error *ngIf=\"clientForm.get('nom').touched && clientForm.get('nom').invalid\" >\r\n                        <p>Champs obligatoire, cet champs doit pas etre vide</p>\r\n                      </mat-error> \r\n                  </mat-form-field>\r\n                  <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Prenom</mat-label>\r\n                    <input matInput #input placeholder=\"Ex. Nougat\" formControlName=\"prenom\" required>\r\n                    <mat-error *ngIf=\"clientForm.get('prenom').touched && clientForm.get('prenom').invalid\">\r\n                        <p>Champs obligatoire, cet champs doit pas etre vide</p>\r\n                      </mat-error> \r\n                  </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Sociéte</mat-label>\r\n                    <input matInput #input placeholder=\"Ex. Nougat\" formControlName=\"societe\">\r\n                    \r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Contact</mat-label>\r\n                    <span matPrefix>+33 &nbsp;</span>\r\n                    <input matInput #input type=\"number\" placeholder=\"Ex. Nougat\" formControlName=\"contact\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                  <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                        <mat-label>Status Familiale</mat-label>\r\n                        <mat-select disableRipple formControlName=\"statusFamiliale\" required>\r\n                            <mat-option >--SELECT--</mat-option>\r\n                            <mat-option value=\"Mr\">Mr</mat-option>\r\n                            <mat-option value=\"Mme\">Mme</mat-option>\r\n                            <mat-option value=\"Mesdamoiselle\">Mesdamoiselle</mat-option>\r\n                        </mat-select>\r\n                   </mat-form-field>\r\n                  <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                        <mat-label>Heure à Joindre</mat-label>\r\n                        <mat-select formControlName=\"heureAContacter\">\r\n                          <mat-option >Je sais pas</mat-option>\r\n                          <mat-option value=\"Tout Moment\">Tout Moment</mat-option>\r\n                          <mat-option value=\"MATIN\">Matin</mat-option>\r\n                          <mat-option value=\"APRES MIDI\">Apres Midi</mat-option>\r\n                          <mat-option value=\"FIN DE JOURNEE\">Fin de Journée</mat-option>\r\n                        </mat-select>\r\n                  </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                      <mat-label>Adresse du client</mat-label>\r\n                      <input matInput formControlName=\"adresse\">\r\n                </mat-form-field>\r\n          </div>\r\n        </form>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\" *ngIf=\"!isLoadingResults\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"clientForm.value\" >Annuler</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" >Enregistrer</button>\r\n        </div>\r\n    </div>";
      /***/
    },

    /***/
    "+nbQ":
    /*!*********************************************************!*\
      !*** ./src/app/features/profile/profile.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function nbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "/wot":
    /*!************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/client-view/client-view.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ClientViewComponent */

    /***/
    function wot(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientViewComponent", function () {
        return ClientViewComponent;
      });
      /* harmony import */


      var _raw_loader_client_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./client-view.component.html */
      "nTq4");
      /* harmony import */


      var _client_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./client-view.component.scss */
      "LsTF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_models_utilisateeur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/models/utilisateeur */
      "nvv7");
      /* harmony import */


      var _update_profile_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../update-profile/update-client/update-client.component */
      "zu6U");

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

      var ClientViewComponent = /*#__PURE__*/function () {
        function ClientViewComponent(dialog) {
          _classCallCheck(this, ClientViewComponent);

          this.dialog = dialog;
        }

        _createClass(ClientViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//console.log(this.client);
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_update_profile_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_5__["UpdateClientComponent"], {
              width: '600px',
              data: {
                client: this.client
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == null) {
                location.reload();
              }
            });
          }
        }]);

        return ClientViewComponent;
      }();

      ClientViewComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      };

      ClientViewComponent.propDecorators = {
        client: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['client']
        }]
      };
      ClientViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-client-view',
        template: _raw_loader_client_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_client_view_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])], ClientViewComponent);
      /***/
    },

    /***/
    "0Qkb":
    /*!**********************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/autre-personne/autre-personne.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qkb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRyZS1wZXJzb25uZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "2k+6":
    /*!******************************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/personnel-entreprise/personnel-entreprise.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: PersonnelEntrepriseComponent */

    /***/
    function k6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonnelEntrepriseComponent", function () {
        return PersonnelEntrepriseComponent;
      });
      /* harmony import */


      var _raw_loader_personnel_entreprise_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./personnel-entreprise.component.html */
      "3W2K");
      /* harmony import */


      var _personnel_entreprise_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./personnel-entreprise.component.scss */
      "c87X");
      /* harmony import */


      var _update_profile_update_personnel_entreprise_update_personnel_entreprise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../update-profile/update-personnel-entreprise/update-personnel-entreprise.component */
      "RQ+K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_models_utilisateeur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/models/utilisateeur */
      "nvv7");

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

      var PersonnelEntrepriseComponent = /*#__PURE__*/function () {
        function PersonnelEntrepriseComponent(dialog) {
          _classCallCheck(this, PersonnelEntrepriseComponent);

          this.dialog = dialog;
        }

        _createClass(PersonnelEntrepriseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//console.log(this.user);
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_update_profile_update_personnel_entreprise_update_personnel_entreprise_component__WEBPACK_IMPORTED_MODULE_2__["UpdatePersonnelEntrepriseComponent"], {
              width: '600px',
              data: {
                user: this.user
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == null) {
                location.reload();
              }
            });
          }
        }]);

        return PersonnelEntrepriseComponent;
      }();

      PersonnelEntrepriseComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      PersonnelEntrepriseComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['user']
        }]
      };
      PersonnelEntrepriseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personnel-entreprise',
        template: _raw_loader_personnel_entreprise_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_personnel_entreprise_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], PersonnelEntrepriseComponent);
      /***/
    },

    /***/
    "3W2K":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/profile-view/personnel-entreprise/personnel-entreprise.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W2K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n                <img *ngIf=\"user.imgUrl\" class=\"profile-img\" src=\"{{user.imgUrl}}\" alt=\"user-image\" width=\"100px\" class=\"rounded\">\r\n                <p><b>{{user.email}}</b></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card class=\"information\">\r\n            <p fxLayout=\"row\"  class=\"infor\">\r\n                <mat-icon>accessibility</mat-icon>  \r\n                <span> <strong><i>Civilité :</i> {{user.civilite}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\"  class=\"infor\">\r\n                <mat-icon>perm_identity</mat-icon>  \r\n                <span> <strong><i>Nom :</i> {{user.nom}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon>face</mat-icon>  \r\n                <span> <strong><i>Prenom : </i> {{user.prenom}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon> call</mat-icon>  \r\n                <span> <strong><i>Contact : </i> {{user.contact}}</strong></span>\r\n            </p>\r\n            <div class=\"divider\"></div>\r\n            <mat-card-actions align=\"end\" class=\"action-modif\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" >Modifier</button>\r\n            </mat-card-actions>\r\n\r\n        </mat-card>\r\n    <!--</span>-->\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "73iC":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/profile-view/artisan-view/artisan-view.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>artisan-view works!</p>\r\n";
      /***/
    },

    /***/
    "9kkw":
    /*!****************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/artisan-view/artisan-view.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function kkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpc2FuLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "AKof":
    /*!************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/autre-user/autre-user.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function AKof(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .user-info p .profile-img {\n  padding-right: 10px;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n.information {\n  width: 100%;\n}\n.information .infor {\n  font-size: 15px;\n  padding: 10px;\n}\n.information .infor mat-icon {\n  margin-right: 10px;\n}\n.action-modif {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF1dHJlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLG1CQUFBO0FBRWhCO0FBRUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlBO0VBQ0ksV0FBQTtBQURKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBSUE7RUFDSSxhQUFBO0FBREoiLCJmaWxlIjoiYXV0cmUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW1lbnV7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnVzZXItaW5mb3tcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAucHJvZmlsZS1pbWd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5mb3JtYXRpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5pbmZvcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbi1tb2RpZntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "AW4X":
    /*!**********************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/update-artisan/update-artisan.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AW4X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYXJ0aXNhbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "CYsz":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/update-profile/update-artisan/update-artisan.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CYsz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>update-artisan works!</p>\r\n";
      /***/
    },

    /***/
    "DApb":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/artisan-view/artisan-view.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ArtisanViewComponent */

    /***/
    function DApb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtisanViewComponent", function () {
        return ArtisanViewComponent;
      });
      /* harmony import */


      var _raw_loader_artisan_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./artisan-view.component.html */
      "73iC");
      /* harmony import */


      var _artisan_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./artisan-view.component.scss */
      "9kkw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      var ArtisanViewComponent = /*#__PURE__*/function () {
        function ArtisanViewComponent() {
          _classCallCheck(this, ArtisanViewComponent);
        }

        _createClass(ArtisanViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ArtisanViewComponent;
      }();

      ArtisanViewComponent.ctorParameters = function () {
        return [];
      };

      ArtisanViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-artisan-view',
        template: _raw_loader_artisan_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_artisan_view_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ArtisanViewComponent);
      /***/
    },

    /***/
    "EGyY":
    /*!********************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/update-artisan/update-artisan.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: UpdateArtisanComponent */

    /***/
    function EGyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateArtisanComponent", function () {
        return UpdateArtisanComponent;
      });
      /* harmony import */


      var _raw_loader_update_artisan_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./update-artisan.component.html */
      "CYsz");
      /* harmony import */


      var _update_artisan_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./update-artisan.component.scss */
      "AW4X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      var UpdateArtisanComponent = /*#__PURE__*/function () {
        function UpdateArtisanComponent() {
          _classCallCheck(this, UpdateArtisanComponent);
        }

        _createClass(UpdateArtisanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UpdateArtisanComponent;
      }();

      UpdateArtisanComponent.ctorParameters = function () {
        return [];
      };

      UpdateArtisanComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-update-artisan',
        template: _raw_loader_update_artisan_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_artisan_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], UpdateArtisanComponent);
      /***/
    },

    /***/
    "LHf2":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/update-personnel-entreprise/update-personnel-entreprise.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LHf2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcGVyc29ubmVsLWVudHJlcHJpc2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "LsTF":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/client-view/client-view.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function LsTF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .user-info p .profile-img {\n  padding-right: 10px;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n.information {\n  width: 100%;\n}\n.information .infor {\n  font-size: 15px;\n  padding: 10px;\n}\n.information .infor mat-icon {\n  margin-right: 10px;\n}\n.action-modif {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNsaWVudC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFJQTtFQUNJLFdBQUE7QUFESjtBQUVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7QUFDWjtBQUlBO0VBQ0ksYUFBQTtBQURKIiwiZmlsZSI6ImNsaWVudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbWVudXtcclxuICAgIC5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyLXJvd3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZve1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5wcm9maWxlLWltZ3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmluZm9ye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLW1vZGlme1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Momz":
    /*!********************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/update-client/update-client.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Momz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  color: rgba(28, 28, 29, 0.808);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVwZGF0ZS1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI5LCAwLjgwOCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "RQ+K":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/update-personnel-entreprise/update-personnel-entreprise.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: UpdatePersonnelEntrepriseComponent */

    /***/
    function RQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePersonnelEntrepriseComponent", function () {
        return UpdatePersonnelEntrepriseComponent;
      });
      /* harmony import */


      var _raw_loader_update_personnel_entreprise_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./update-personnel-entreprise.component.html */
      "i4oM");
      /* harmony import */


      var _update_personnel_entreprise_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./update-personnel-entreprise.component.scss */
      "LHf2");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../environments/environment */
      "AytR");
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


      var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/SnackBar */
      "77k+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

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

      var UpdatePersonnelEntrepriseComponent = /*#__PURE__*/function () {
        function UpdatePersonnelEntrepriseComponent(dialogRef, dialog, data, _fb, http, snackBar) {
          _classCallCheck(this, UpdatePersonnelEntrepriseComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this._fb = _fb;
          this.http = http;
          this.snackBar = snackBar;
          this.files = [];
          this.isLoadingResults = false;
          this.ext = "jpeg";
        }

        _createClass(UpdatePersonnelEntrepriseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.data.user.imgUrl);
            this.image = this.data.user.imgUrl;
            this.user = this.data.user;
            this.init();
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this = this;

            var file = new FileReader();
            file.readAsDataURL(event.target.files[0]); // console.log(event.target.files[0]);

            var verifiImage = event.target.files[0].type;

            if (verifiImage.match(/image\/*/)) {
              file.onload = function (_event) {
                _this.image = file.result;

                var base64 = _this.image.split(",")[1];

                var filess = new FormData();
                _this.ext = event.target.files[0].type.split("/")[1];
                return; //console.log(this.image);
              };
            } else {
              this.snackBar.openSnackBar("Selectionner une image", "ERROR Image", 3000);
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.userForm = this._fb.group({
              id: [this.user.id],
              nom: [this.user.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              prenom: [this.user.prenom, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              extension: null,
              contact: this.user.contact,
              imgUrl: this.user.imgUrl,
              civilite: this.user.civilite,
              provider: this.user.provider
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            if (this.userForm.valid) {
              this.isLoadingResults = true;

              if (this.image != null) {
                this.userForm.get("imgUrl").setValue(this.image.split(",")[1]);
                this.userForm.get("extension").setValue(this.ext);
              } //console.log(this.userForm.value);


              this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.LOGIN.PROFILE_UPDATE_USER + "" + this.user.id, this.userForm.value).subscribe(function (data) {
                //console.log(data);
                _this2.isLoadingResults = false;
              }, function (err) {
                console.log(err);

                if (err.status < 300) {
                  _this2.isLoadingResults = false;

                  _this2.snackBar.openSnackBar("Profile Modifier", "Success", 3000);

                  _this2.dialogRef.close();
                } else {
                  _this2.snackBar.openSnackBar("User Not Modifier", "ERROR", 3000);

                  _this2.isLoadingResults = false;
                }
              });
            } else {
              this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide", 3000);
              this.isLoadingResults = false;
            }
          }
        }]);

        return UpdatePersonnelEntrepriseComponent;
      }();

      UpdatePersonnelEntrepriseComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]
        }];
      };

      UpdatePersonnelEntrepriseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-update-personnel-entreprise',
        template: _raw_loader_update_personnel_entreprise_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_personnel_entreprise_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]])], UpdatePersonnelEntrepriseComponent);
      /***/
    },

    /***/
    "c87X":
    /*!********************************************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/personnel-entreprise/personnel-entreprise.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c87X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .user-info p .profile-img {\n  padding-right: 10px;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n.information {\n  width: 100%;\n}\n.information .infor {\n  font-size: 15px;\n  padding: 10px;\n}\n.information .infor mat-icon {\n  margin-right: 10px;\n}\n.action-modif {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBlcnNvbm5lbC1lbnRyZXByaXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFJQTtFQUNJLFdBQUE7QUFESjtBQUVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7QUFDWjtBQUlBO0VBQ0ksYUFBQTtBQURKIiwiZmlsZSI6InBlcnNvbm5lbC1lbnRyZXByaXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbWVudXtcclxuICAgIC5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyLXJvd3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZve1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5wcm9maWxlLWltZ3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmluZm9ye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLW1vZGlme1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "dd6T":
    /*!**********************************************************************************!*\
      !*** ./src/app/features/profile/profile-view/autre-user/autre-user.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AutreUserComponent */

    /***/
    function dd6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutreUserComponent", function () {
        return AutreUserComponent;
      });
      /* harmony import */


      var _raw_loader_autre_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./autre-user.component.html */
      "f8WT");
      /* harmony import */


      var _autre_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./autre-user.component.scss */
      "AKof");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_models_utilisateeur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/models/utilisateeur */
      "nvv7");
      /* harmony import */


      var _update_profile_autre_personne_autre_personne_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../update-profile/autre-personne/autre-personne.component */
      "fh2g");

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

      var AutreUserComponent = /*#__PURE__*/function () {
        function AutreUserComponent(dialog) {
          _classCallCheck(this, AutreUserComponent);

          this.dialog = dialog;
        }

        _createClass(AutreUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//console.log(this.user);
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_update_profile_autre_personne_autre_personne_component__WEBPACK_IMPORTED_MODULE_5__["UpdateAutrePersonneComponent"], {
              width: '600px',
              data: {
                user: this.user
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == null) {
                location.reload();
              }
            });
          }
        }]);

        return AutreUserComponent;
      }();

      AutreUserComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      };

      AutreUserComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['user']
        }]
      };
      AutreUserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-autre-user',
        template: _raw_loader_autre_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_autre_user_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])], AutreUserComponent);
      /***/
    },

    /***/
    "f8WT":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/profile-view/autre-user/autre-user.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f8WT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n                <img *ngIf=\"user.imgUrl\" class=\"profile-img\" src=\"{{user.imgUrl}}\" alt=\"user-image\" width=\"100px\" class=\"rounded\">\r\n                <p><b>{{user.email}}</b></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card class=\"information\">\r\n            <p fxLayout=\"row\"  class=\"infor\">\r\n                <mat-icon>accessibility</mat-icon>  \r\n                <span> <strong><i>Civilité :</i> {{user.civilite}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\"  class=\"infor\">\r\n                <mat-icon>perm_identity</mat-icon>  \r\n                <span> <strong><i>Nom :</i> {{user.nom}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon>face</mat-icon>  \r\n                <span> <strong><i>Prenom : </i> {{user.prenom}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon> business</mat-icon>  \r\n                <span> <strong><i>Sociéte : </i> {{user.societe.nomSociete}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon> call</mat-icon>  \r\n                <span> <strong><i>Contact : </i> {{user.contact}}</strong></span>\r\n            </p>\r\n            <div class=\"divider\"></div>\r\n            <mat-card-actions align=\"end\" class=\"action-modif\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" >Modifier</button>\r\n            </mat-card-actions>\r\n\r\n        </mat-card>\r\n    <!--</span>-->\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "fh2g":
    /*!********************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/autre-personne/autre-personne.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: UpdateAutrePersonneComponent */

    /***/
    function fh2g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateAutrePersonneComponent", function () {
        return UpdateAutrePersonneComponent;
      });
      /* harmony import */


      var _raw_loader_autre_personne_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./autre-personne.component.html */
      "gyeM");
      /* harmony import */


      var _autre_personne_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./autre-personne.component.scss */
      "0Qkb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/SnackBar */
      "77k+");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

      var UpdateAutrePersonneComponent = /*#__PURE__*/function () {
        function UpdateAutrePersonneComponent(dialogRef, dialog, data, _fb, http, snackBar) {
          _classCallCheck(this, UpdateAutrePersonneComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this._fb = _fb;
          this.http = http;
          this.snackBar = snackBar;
          this.isLoadingResults = false;
          this.files = [];
          this.ext = "jpeg";
        }

        _createClass(UpdateAutrePersonneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.data.user.imgUrl);
            this.image = this.data.user.imgUrl;
            this.user = this.data.user;
            this.init();
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this3 = this;

            var file = new FileReader();
            file.readAsDataURL(event.target.files[0]); // console.log(event.target.files[0]);

            var verifiImage = event.target.files[0].type;

            if (verifiImage.match(/image\/*/)) {
              file.onload = function (_event) {
                _this3.image = file.result;

                var base64 = _this3.image.split(",")[1];

                var filess = new FormData();
                _this3.ext = event.target.files[0].type.split("/")[1];
                return; //console.log(this.image);
              };
            } else {
              this.snackBar.openSnackBar("Selectionner une image", "ERROR Image", 3000);
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.userForm = this._fb.group({
              id: [this.user.id],
              nom: [this.user.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              prenom: [this.user.prenom, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              extension: null,
              contact: this.user.contact,
              imgUrl: this.user.imgUrl,
              civilite: this.user.civilite,
              provider: this.user.provider
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            if (this.userForm.valid) {
              this.isLoadingResults = true;

              if (this.image != null) {
                this.userForm.get("imgUrl").setValue(this.image.split(",")[1]);
                this.userForm.get("extension").setValue(this.ext);
              }

              console.log(this.userForm.value);
              this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BACK_END.LOGIN.PROFILE_UPDATE_USER + "" + this.user.id, this.userForm.value).subscribe(function (data) {//console.log(data);
              }, function (err) {
                console.log(err);

                if (err.status < 300) {
                  _this4.snackBar.openSnackBar("Profile Modifier", "Success", 3000);

                  _this4.dialogRef.close();
                } else {
                  _this4.isLoadingResults = false;

                  _this4.snackBar.openSnackBar("User Not Modifier", "ERROR", 3000);
                }
              });
            } else {
              this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide", 3000);
            }
          }
        }]);

        return UpdateAutrePersonneComponent;
      }();

      UpdateAutrePersonneComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]
        }];
      };

      UpdateAutrePersonneComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-autre-personne',
        template: _raw_loader_autre_personne_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_autre_personne_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]])], UpdateAutrePersonneComponent);
      /***/
    },

    /***/
    "gyeM":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/update-profile/autre-personne/autre-personne.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gyeM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<div class=\"header\"  fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h2>Modifier Le Profile</h2>\r\n</div>\r\n<div mat-dialog-content *ngIf=\"!isLoadingResults\">\r\n    <form [formGroup]=\"userForm\" enctype=\"multipart/form-data\" >\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <div *ngIf=\"image\">\r\n                <img class=\"profile-img\" src=\"{{image}}\" alt=\"user-image\" width=\"100\" class=\"rounded mat-elevation-z6\">\r\n            </div>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\">\r\n            <input mat-raised-button type=\"file\" (change)=\"onSelect($event)\" placeholder=\"Changer sa photo de profile\">\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput #input maxlength=\"10\"  [value]=\"user.email\" readonly>\r\n                \r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput #input  formControlName=\"nom\" required>\r\n                <mat-error *ngIf=\"userForm.get('nom').touched && userForm.get('nom').invalid\" >\r\n                    <p>Champs obligatoire, cet champs doit pas etre vide</p>\r\n                  </mat-error> \r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Prenom</mat-label>\r\n                <input matInput #input  formControlName=\"prenom\" required>\r\n                <mat-error *ngIf=\"userForm.get('prenom').touched && userForm.get('prenom').invalid\">\r\n                    <p>Champs obligatoire, cet champs doit pas etre vide</p>\r\n                  </mat-error> \r\n              </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Contact</mat-label>\r\n                <span matPrefix>+33 &nbsp;</span>\r\n                <input matInput #input type=\"number\"  formControlName=\"contact\">\r\n            </mat-form-field>\r\n              <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Civilité</mat-label>\r\n                    <mat-select disableRipple formControlName=\"civilite\" required>\r\n                        <mat-option >--SELECT--</mat-option>\r\n                        <mat-option value=\"Mr\">Mr</mat-option>\r\n                        <mat-option value=\"Mme\">Mme</mat-option>\r\n                        <mat-option value=\"Mesdamoiselle\">Mesdamoiselle</mat-option>\r\n                    </mat-select>\r\n               </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            \r\n      </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\" *ngIf=\"!isLoadingResults\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"userForm.value\" >Annuler</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" >Enregistrer</button>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "hv3r":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/profile.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function hv3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span *ngIf=\"!isLoad\">\r\n    <span *ngIf=\"Utilisateur.profile.libelle =='CLIENT'\" >\r\n        <app-client-view [client]=\"Utilisateur\"></app-client-view>\r\n    </span>\r\n    <span *ngIf=\"Utilisateur.societe && Utilisateur.civilite\">\r\n        <app-autre-user [user]=\"Utilisateur\"></app-autre-user>\r\n    </span>\r\n    <span *ngIf=\" !Utilisateur.societe && Utilisateur.civilite\">\r\n        <app-personnel-entreprise [user]=\"Utilisateur\"></app-personnel-entreprise>\r\n    </span>\r\n\r\n    \r\n</span>\r\n\r\n<span fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"isLoad\">\r\n    <div id=\"app-spinner\" [class.hide]=\"true\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>Chargement...</h4>\r\n    </div>\r\n</span>\r\n\r\n";
      /***/
    },

    /***/
    "i4oM":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/update-profile/update-personnel-entreprise/update-personnel-entreprise.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i4oM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h2>Modifier Le Profile</h2>\r\n</div>\r\n<div mat-dialog-content *ngIf=\"!isLoadingResults\">\r\n    <form [formGroup]=\"userForm\" enctype=\"multipart/form-data\" >\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <div *ngIf=\"image\">\r\n                <img class=\"profile-img\" src=\"{{image}}\" alt=\"user-image\" width=\"100\" class=\"rounded mat-elevation-z6\">\r\n            </div>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\">\r\n            <input mat-raised-button type=\"file\" (change)=\"onSelect($event)\" placeholder=\"Changer sa photo de profile\">\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput #input maxlength=\"10\"  [value]=\"user.email\" readonly>\r\n                \r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput #input  formControlName=\"nom\" required>\r\n                <mat-error *ngIf=\"userForm.get('nom').touched && userForm.get('nom').invalid\" >\r\n                    <p>Champs obligatoire, cet champs doit pas etre vide</p>\r\n                  </mat-error> \r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Prenom</mat-label>\r\n                <input matInput #input  formControlName=\"prenom\" required>\r\n                <mat-error *ngIf=\"userForm.get('prenom').touched && userForm.get('prenom').invalid\">\r\n                    <p>Champs obligatoire, cet champs doit pas etre vide</p>\r\n                  </mat-error> \r\n              </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Contact</mat-label>\r\n                <span matPrefix>+33 &nbsp;</span>\r\n                <input matInput #input type=\"number\"  formControlName=\"contact\">\r\n            </mat-form-field>\r\n              <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Civilité</mat-label>\r\n                    <mat-select disableRipple formControlName=\"civilite\" required>\r\n                        <mat-option >--SELECT--</mat-option>\r\n                        <mat-option value=\"Mr\">Mr</mat-option>\r\n                        <mat-option value=\"Mme\">Mme</mat-option>\r\n                        <mat-option value=\"Mesdamoiselle\">Mesdamoiselle</mat-option>\r\n                    </mat-select>\r\n               </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            \r\n      </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\" *ngIf=\"!isLoadingResults\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"userForm.value\" >Annuler</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" >Enregistrer</button>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "kEQi":
    /*!*******************************************************!*\
      !*** ./src/app/features/profile/profile.component.ts ***!
      \*******************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function kEQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "hv3r");
      /* harmony import */


      var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component.scss */
      "+nbQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.service */
      "RaeH");

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

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(profileService) {
          _classCallCheck(this, ProfileComponent);

          this.profileService = profileService;
          this.isLoad = false;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.isLoad = true;
            this.profileService.getMe().subscribe(function (user) {
              _this5.Utilisateur = user;
              _this5.isLoad = false;
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }];
      };

      ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])], ProfileComponent);
      /***/
    },

    /***/
    "nTq4":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/profile/profile-view/client-view/client-view.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nTq4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n                <img *ngIf=\"client.imgUrl\" class=\"profile-img\" src=\"{{client.imgUrl}}\" alt=\"user-image\" width=\"100px\" class=\"rounded\">\r\n                <p><b>{{client.email}}</b></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card class=\"information\">\r\n            <p fxLayout=\"row\"  class=\"infor\">\r\n                <mat-icon>perm_identity</mat-icon>  \r\n                <span> <strong><i>Nom :</i> {{client.nom}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon>face</mat-icon>  \r\n                <span> <strong><i>Prenom : </i> {{client.prenom}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon> business</mat-icon>  \r\n                <span> <strong><i>Sociéte : </i> {{client.societe}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon> call</mat-icon>  \r\n                <span> <strong><i>Contact : </i> {{client.contact}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\"  class=\"infor\">\r\n                <mat-icon>wc</mat-icon>  \r\n                <span> <strong><i>Status Familiale : </i> {{client.statusFamiliale}}</strong></span>\r\n            </p>\r\n            <p fxLayout=\"row\" class=\"infor\">\r\n                <mat-icon>access_time</mat-icon>  \r\n                <span> <strong><i>Heure à Joindre : </i> {{client.heureAContacter}}</strong></span>\r\n            </p>\r\n            <div class=\"divider\"></div>\r\n            <mat-card-actions align=\"end\" class=\"action-modif\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" >Modifier</button>\r\n            </mat-card-actions>\r\n\r\n        </mat-card>\r\n    <!--</span>-->\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "nvv7":
    /*!***********************************************!*\
      !*** ./src/app/shared/models/utilisateeur.ts ***!
      \***********************************************/

    /*! exports provided: Utilisateur, Client, UpdatePassword, AutresUser, PersonnelSociete */

    /***/
    function nvv7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Utilisateur", function () {
        return Utilisateur;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Client", function () {
        return Client;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePassword", function () {
        return UpdatePassword;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutresUser", function () {
        return AutresUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonnelSociete", function () {
        return PersonnelSociete;
      });

      var Utilisateur = function Utilisateur() {
        _classCallCheck(this, Utilisateur);
      };

      var Client = /*#__PURE__*/function (_Utilisateur) {
        _inherits(Client, _Utilisateur);

        var _super = _createSuper(Client);

        function Client() {
          _classCallCheck(this, Client);

          return _super.apply(this, arguments);
        }

        return Client;
      }(Utilisateur);

      var UpdatePassword = function UpdatePassword() {
        _classCallCheck(this, UpdatePassword);
      };

      var AutresUser = /*#__PURE__*/function (_Utilisateur2) {
        _inherits(AutresUser, _Utilisateur2);

        var _super2 = _createSuper(AutresUser);

        function AutresUser() {
          _classCallCheck(this, AutresUser);

          return _super2.apply(this, arguments);
        }

        return AutresUser;
      }(Utilisateur);

      var PersonnelSociete = /*#__PURE__*/function (_Utilisateur3) {
        _inherits(PersonnelSociete, _Utilisateur3);

        var _super3 = _createSuper(PersonnelSociete);

        function PersonnelSociete() {
          _classCallCheck(this, PersonnelSociete);

          return _super3.apply(this, arguments);
        }

        return PersonnelSociete;
      }(Utilisateur);
      /***/

    },

    /***/
    "xaGl":
    /*!****************************************************!*\
      !*** ./src/app/features/profile/profile.module.ts ***!
      \****************************************************/

    /*! exports provided: routes, ProfileModule */

    /***/
    function xaGl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.component */
      "kEQi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_view_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-view/client-view/client-view.component */
      "/wot");
      /* harmony import */


      var _profile_view_artisan_view_artisan_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-view/artisan-view/artisan-view.component */
      "DApb");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _update_profile_update_artisan_update_artisan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./update-profile/update-artisan/update-artisan.component */
      "EGyY");
      /* harmony import */


      var _update_profile_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./update-profile/update-client/update-client.component */
      "zu6U");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _profile_view_autre_user_autre_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profile-view/autre-user/autre-user.component */
      "dd6T");
      /* harmony import */


      var _profile_view_personnel_entreprise_personnel_entreprise_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./profile-view/personnel-entreprise/personnel-entreprise.component */
      "2k+6");
      /* harmony import */


      var _update_profile_autre_personne_autre_personne_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./update-profile/autre-personne/autre-personne.component */
      "fh2g");
      /* harmony import */


      var _update_profile_update_personnel_entreprise_update_personnel_entreprise_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./update-profile/update-personnel-entreprise/update-personnel-entreprise.component */
      "RQ+K");
      /* harmony import */


      var _login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../login/_helper/AuthInterceptorService */
      "ct3H");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");
      /* harmony import */


      var _login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../login/_helper/error.interceptor */
      "AmT5");

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
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        pathMatch: 'full'
      }];

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _profile_view_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_5__["ClientViewComponent"], _profile_view_artisan_view_artisan_view_component__WEBPACK_IMPORTED_MODULE_6__["ArtisanViewComponent"], _update_profile_update_artisan_update_artisan_component__WEBPACK_IMPORTED_MODULE_8__["UpdateArtisanComponent"], _update_profile_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_9__["UpdateClientComponent"], _profile_view_autre_user_autre_user_component__WEBPACK_IMPORTED_MODULE_11__["AutreUserComponent"], _profile_view_personnel_entreprise_personnel_entreprise_component__WEBPACK_IMPORTED_MODULE_12__["PersonnelEntrepriseComponent"], _update_profile_autre_personne_autre_personne_component__WEBPACK_IMPORTED_MODULE_13__["UpdateAutrePersonneComponent"], _update_profile_update_personnel_entreprise_update_personnel_entreprise_component__WEBPACK_IMPORTED_MODULE_14__["UpdatePersonnelEntrepriseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        providers: [_login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_15__["authInterceptorProviders"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_16__["AppSettings"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
          useClass: _login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
          multi: true
        }]
      })], ProfileModule);
      /***/
    },

    /***/
    "zu6U":
    /*!******************************************************************************************!*\
      !*** ./src/app/features/profile/update-profile/update-client/update-client.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: UpdateClientComponent */

    /***/
    function zu6U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientComponent", function () {
        return UpdateClientComponent;
      });
      /* harmony import */


      var _raw_loader_update_client_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./update-client.component.html */
      "++Me");
      /* harmony import */


      var _update_client_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./update-client.component.scss */
      "Momz");
      /* harmony import */


      var _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../shared/services/SnackBar */
      "77k+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

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

      var UpdateClientComponent = /*#__PURE__*/function () {
        function UpdateClientComponent(dialogRef, dialog, data, _fb, http, snackBar) {
          _classCallCheck(this, UpdateClientComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this._fb = _fb;
          this.http = http;
          this.snackBar = snackBar;
          this.files = [];
          this.ext = "jpeg";
          this.isLoadingResults = false;
        }

        _createClass(UpdateClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.data.client.imgUrl);
            this.image = this.data.client.imgUrl;
            this.client = this.data.client;
            this.init();
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this6 = this;

            var file = new FileReader();
            file.readAsDataURL(event.target.files[0]); // console.log(event.target.files[0]);

            var verifiImage = event.target.files[0].type;

            if (verifiImage.match(/image\/*/)) {
              file.onload = function (_event) {
                _this6.image = file.result;

                var base64 = _this6.image.split(",")[1];

                var filess = new FormData();
                _this6.ext = event.target.files[0].type.split("/")[1];
                return; //console.log(this.image);
              };
            } else {
              this.snackBar.openSnackBar("Selectionner une image", "ERROR Image", 3000);
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.clientForm = this._fb.group({
              id: [this.client.id],
              nom: [this.client.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              prenom: [this.client.prenom, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              extension: null,
              contact: this.client.contact,
              imgUrl: this.client.imgUrl,
              societe: this.client.societe,
              statusFamiliale: this.client.statusFamiliale,
              heureAContacter: this.client.heureAContacter,
              adresse: [this.client.adresse, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            if (this.clientForm.valid) {
              this.isLoadingResults = true;

              if (this.image != null) {
                this.clientForm.get("imgUrl").setValue(this.image.split(",")[1]);
                this.clientForm.get("extension").setValue(this.ext);
              } //console.log(this.clientForm.value);


              this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.LOGIN.PROFILE_UPDATE_CLIENT + "" + this.client.id, this.clientForm.value).subscribe(function (data) {//console.log(data);
              }, function (err) {
                console.log(err);

                if (err.status < 300) {
                  _this7.snackBar.openSnackBar("Profile Modifier", "Success", 3000);

                  _this7.dialogRef.close();
                } else {
                  _this7.isLoadingResults = false;

                  _this7.snackBar.openSnackBar("Remplire les champs obligatoire", "ERROR", 3000);
                }
              });
            } else {
              this.isLoadingResults = false;
              this.snackBar.openSnackBar("Remplire les champs SVP", "Champs Vide", 3000);
            }
          }
        }]);

        return UpdateClientComponent;
      }();

      UpdateClientComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]
        }];
      };

      UpdateClientComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-update-client',
        template: _raw_loader_update_client_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_client_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]])], UpdateClientComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-profile-profile-module-es5.js.map