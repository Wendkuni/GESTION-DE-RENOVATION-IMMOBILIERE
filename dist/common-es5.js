(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "21PC":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/taches/gestion-taches/gestion-taches.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3 *ngIf=\"data.tache\">tache : {{tache.appellation}}</h3>\r\n</div>\r\n<div mat-dialog-content>\r\n   \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <div \r\n        [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" \r\n        [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n        <b> <i> Personne assigné : </i>{{tache.utilisateur.utilisateurs.nom}} {{tache.utilisateur.utilisateurs.prenom}} </b>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <div \r\n        [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" \r\n        [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n        <b><i>Durée :</i> {{tache.dateDemarrage | date : 'dd LLLL yyyy'}} - {{tache.dateFinition | date : 'dd LLLL yyyy'}}</b>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <div \r\n        [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" s\r\n        [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n            <p><b><i>Description :</i></b> <br/> {{tache.description}}</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" mat-dialog-close>Fermer</button>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "F36I":
    /*!*****************************************************!*\
      !*** ./src/app/features/societe/societe.service.ts ***!
      \*****************************************************/

    /*! exports provided: societeServices */

    /***/
    function F36I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "societeServices", function () {
        return societeServices;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

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

      var societeServices = /*#__PURE__*/function () {
        function societeServices(http) {
          _classCallCheck(this, societeServices);

          this.http = http;
        }

        _createClass(societeServices, [{
          key: "getAllsociete",
          value: function getAllsociete() {
            if (this.datas != null && this.datas.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.datas);
            } else if (!this.observable) {
              this.observable = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.SOCIETE);
            }

            return this.observable;
          }
        }, {
          key: "addsociete",
          value: function addsociete(societe) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.SOCIETE, societe);
          }
        }, {
          key: "updatesociete",
          value: function updatesociete(id, societe) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.SOCIETE + "" + id, societe);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.SOCIETE + "" + id);
          }
        }]);

        return societeServices;
      }();

      societeServices.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      societeServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], societeServices);
      /***/
    },

    /***/
    "Geum":
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/ProjetRenovation.localStorage.ts ***!
      \******************************************************************/

    /*! exports provided: ProjetStorageService */

    /***/
    function Geum(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetStorageService", function () {
        return ProjetStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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

      var GESTION_USER = 'gestion-user';
      var GESTION_TACHE = 'gestion-tache';
      var GESTION_AGENDA = 'gestion-agenda';
      var GESTION_DOSSIER = 'gestion-dossier';

      var ProjetStorageService = /*#__PURE__*/function () {
        function ProjetStorageService() {
          _classCallCheck(this, ProjetStorageService);
        }

        _createClass(ProjetStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveGestionUser",
          value: function saveGestionUser(user) {
            window.sessionStorage.removeItem(GESTION_USER);
            window.sessionStorage.setItem(GESTION_USER, user);
          }
        }, {
          key: "getGestionUser",
          value: function getGestionUser() {
            return sessionStorage.getItem(GESTION_USER);
          }
        }, {
          key: "saveGestionTache",
          value: function saveGestionTache(user) {
            window.sessionStorage.removeItem(GESTION_TACHE);
            window.sessionStorage.setItem(GESTION_TACHE, JSON.stringify(user));
          }
        }, {
          key: "getGestionTache",
          value: function getGestionTache() {
            return JSON.parse(sessionStorage.getItem(GESTION_TACHE));
          }
        }, {
          key: "setGestionAgenda",
          value: function setGestionAgenda(menu) {
            window.sessionStorage.removeItem(GESTION_AGENDA);
            window.sessionStorage.setItem(GESTION_AGENDA, menu);
          }
        }, {
          key: "setGestionDossier",
          value: function setGestionDossier(id) {
            window.sessionStorage.removeItem(GESTION_DOSSIER);
            window.sessionStorage.setItem(GESTION_DOSSIER, JSON.stringify(id));
          }
        }, {
          key: "getGestionDossier",
          value: function getGestionDossier() {
            return JSON.parse(sessionStorage.getItem(GESTION_DOSSIER));
          }
        }, {
          key: "getGestionAgenda",
          value: function getGestionAgenda() {
            return JSON.parse(sessionStorage.getItem(GESTION_AGENDA));
          }
        }]);

        return ProjetStorageService;
      }();

      ProjetStorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], ProjetStorageService);
      /***/
    },

    /***/
    "JR9s":
    /*!***********************************************************!*\
      !*** ./src/app/features/renovations/client-renovation.ts ***!
      \***********************************************************/

    /*! exports provided: ClientRenovation */

    /***/
    function JR9s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientRenovation", function () {
        return ClientRenovation;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../login/_helper/localStorage */
      "+64y");

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

      var ClientRenovation = /*#__PURE__*/function () {
        function ClientRenovation(http, token) {
          _classCallCheck(this, ClientRenovation);

          this.http = http;
          this.token = token;
        }

        _createClass(ClientRenovation, [{
          key: "getClienListtRenovation",
          value: function getClienListtRenovation() {
            if (this.token.getToken()) {
              if (this.datas != null && this.datas.length > 0) {
                //console.log(this.datas);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.datas);
              } else if (!this.observable) {
                this.observable = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.RENOVATION.CLIENT_RENOVATION + "" + this.token.getToken());
              }
            }

            return this.observable;
          }
        }, {
          key: "findRenovationById",
          value: function findRenovationById(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.RENOVATION.CLIENT_RENOVATION + "" + this.token.getToken() + "/" + id);
          }
        }, {
          key: "addRenovation",
          value: function addRenovation(r) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.RENOVATION.CLIENT_RENOVATION + "" + this.token.getToken(), r);
          }
        }, {
          key: "updateRenovation",
          value: function updateRenovation(id, r) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.RENOVATION.CLIENT_RENOVATION + "" + id, r);
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(appellatio) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.RENOVATION.CLIENT_RENOVATION + 'justificatif/' + appellatio);
          }
        }, {
          key: "deleteRenovation",
          value: function deleteRenovation(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACK_END.RENOVATION.CLIENT_RENOVATION + '' + id);
          }
        }]);

        return ClientRenovation;
      }();

      ClientRenovation.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
        }];
      };

      ClientRenovation = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])], ClientRenovation);
      /***/
    },

    /***/
    "NObv":
    /*!**********************************************!*\
      !*** ./src/app/theme/utils/app-animation.ts ***!
      \**********************************************/

    /*! exports provided: blockTransition, listTransition */

    /***/
    function NObv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blockTransition", function () {
        return blockTransition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listTransition", function () {
        return listTransition;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var blockTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('blockTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0px)',
        opacity: 1
      }))]), {
        optional: true
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0px)',
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(100px)',
        opacity: 0
      }))]), {
        optional: true
      })])]);
      var listTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translateY(-75px)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: .5,
        transform: 'translateY(35px)',
        offset: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateY(0)',
        offset: 1
      })]))]), {
        optional: true
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateY(0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: .5,
        transform: 'translateY(35px)',
        offset: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translateY(-75px)',
        offset: 1
      })]))]), {
        optional: true
      })])]);
      /***/
    },

    /***/
    "OE4s":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/features/demarrage-projet-renovation/taches/gestion-taches/gestion-taches.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OE4s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXN0aW9uLXRhY2hlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Ta7a":
    /*!******************************************************************************************!*\
      !*** ./src/app/features/user-affecter-projet-renovation/user-affecter-projet.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: UserAffecterProjetRenovationServices */

    /***/
    function Ta7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAffecterProjetRenovationServices", function () {
        return UserAffecterProjetRenovationServices;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
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

      var UserAffecterProjetRenovationServices = /*#__PURE__*/function () {
        function UserAffecterProjetRenovationServices(http) {
          _classCallCheck(this, UserAffecterProjetRenovationServices);

          this.http = http;
        }

        _createClass(UserAffecterProjetRenovationServices, [{
          key: "getUsers",
          value: function getUsers(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER + "" + id);
          }
        }, {
          key: "addUser",
          value: function addUser(User) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER, User);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER + "" + id);
          }
        }, {
          key: "updateUser",
          value: function updateUser(User, id) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER + "" + id, User);
          }
        }, {
          key: "listUserNonAffecter",
          value: function listUserNonAffecter(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.USER_AFFECTER + "user-a-affecter/" + id);
          }
        }]);

        return UserAffecterProjetRenovationServices;
      }();

      UserAffecterProjetRenovationServices.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      UserAffecterProjetRenovationServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UserAffecterProjetRenovationServices);
      /***/
    },

    /***/
    "VM7B":
    /*!***************************************************************!*\
      !*** ./src/app/features/profiles/ProfilesSecuriteServices.ts ***!
      \***************************************************************/

    /*! exports provided: ProfilesSecuriteServices */

    /***/
    function VM7B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilesSecuriteServices", function () {
        return ProfilesSecuriteServices;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

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
      /**
       *
       * [
        {
          "id": 1,
          "libelle": "CLIENT",
          "roles": [
            {
              "id": 5,
              "libelle": "Gerer Mes Renovation (Client)",
              "name": "ROLE_GESTION_RENOVATION",
              "type": "gestion des renovation"
            },
            {
              "id": 1,
              "libelle": "Utilisateur",
              "name": "ROLE_UTILISATEUR",
              "type": "User"
            }
          ]
        },
        {
          "id": 7,
          "libelle": "Admin",
          "roles": [
            {
              "id": 4,
              "libelle": "Gerer le Menu Des Profile",
              "name": "ROLE_GESTION_USER_MENU",
              "type": "gestion profile user"
            },
            {
              "id": 5,
              "libelle": "Gerer Mes Renovation (Client)",
              "name": "ROLE_GESTION_RENOVATION",
              "type": "gestion des renovation"
            },
            {
              "id": 11,
              "libelle": "Gerer  User Bureau Etude",
              "name": "ROLE_GESTION_BUREAU_ETUDE",
              "type": "Gestion des user Bureau Etude"
            },
            {
              "id": 1,
              "libelle": "Utilisateur",
              "name": "ROLE_UTILISATEUR",
              "type": "User"
            },
            {
              "id": 6,
              "libelle": "Gerer les Profiles",
              "name": "ROLE_GESTIONS_PROFILES",
              "type": "Gestion des profiles"
            },
            {
              "id": 14,
              "libelle": "Gerer Autre User",
              "name": "ROLE_GESTION_AUTRE_USER",
              "type": "Gestion Autre User"
            },
            {
              "id": 3,
              "libelle": "Creer Modifier Supprimer Menu",
              "name": "ROLE_GESTION_MENU",
              "type": "Gestion Menu"
            },
            {
              "id": 2,
              "libelle": "Admin",
              "name": "ROLE_ADMIN",
              "type": "Root"
            },
            {
              "id": 7,
              "libelle": "Gerer les roles",
              "name": "ROLE_GESTION_ROLES",
              "type": "Gestion des roles"
            },
            {
              "id": 10,
              "libelle": "Gerer les client",
              "name": "ROLE_GESTION_CLIENT",
              "type": "Gestion des client"
            },
            {
              "id": 12,
              "libelle": "Gestion User Responsable Travaux",
              "name": "ROLE_GESTION_RESPONSABLE_TRAVAUX",
              "type": "Gestion des Responsable Travaux"
            },
            {
              "id": 8,
              "libelle": "Gerer Type Societe",
              "name": "ROLE_GESTION_TYPE_SOCIETE",
              "type": "Gestion des type de société"
            },
            {
              "id": 13,
              "libelle": "Gerer User Gerant",
              "name": "ROLE_GESTION_GERANT",
              "type": "Gestion des Gerants"
            },
            {
              "id": 16,
              "libelle": "usti",
              "name": "ROLE_USER1",
              "type": "user"
            },
            {
              "id": 9,
              "libelle": "Gerer les Société",
              "name": "ROLE_GESTION_SOCIETE",
              "type": "gestion des societe"
            },
            {
              "id": 15,
              "libelle": "Gerer validation des justificatif renovation",
              "name": "ROLE_GESTION_VALIDER_FILE_RENOVATION",
              "type": "Gestion des validation des justificatif renovation"
            }
          ]
        }
      ]
       */


      var ProfilesSecuriteServices = /*#__PURE__*/function () {
        function ProfilesSecuriteServices(http) {
          _classCallCheck(this, ProfilesSecuriteServices);

          this.http = http;
        }

        _createClass(ProfilesSecuriteServices, [{
          key: "getAllprofile",
          value: function getAllprofile() {
            if (this.datas != null && this.datas.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.datas);
            } else if (!this.observable) {
              this.observable = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.PROFILES);
            }

            return this.observable;
          }
        }, {
          key: "addprofile",
          value: function addprofile(profiles) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.PROFILES, profiles);
          }
        }, {
          key: "updateprofile",
          value: function updateprofile(id, profiles) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.PROFILES + "" + id, profiles);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.PROFILES + "" + id);
          }
        }]);

        return ProfilesSecuriteServices;
      }();

      ProfilesSecuriteServices.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ProfilesSecuriteServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ProfilesSecuriteServices);
      /***/
    },

    /***/
    "Z17b":
    /*!***************************************************************!*\
      !*** ./src/app/features/type-societe/type-societe.service.ts ***!
      \***************************************************************/

    /*! exports provided: typeSocietesServices */

    /***/
    function Z17b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "typeSocietesServices", function () {
        return typeSocietesServices;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

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

      var typeSocietesServices = /*#__PURE__*/function () {
        function typeSocietesServices(http) {
          _classCallCheck(this, typeSocietesServices);

          this.http = http;
        }

        _createClass(typeSocietesServices, [{
          key: "getAlltypeSociete",
          value: function getAlltypeSociete() {
            if (this.datas != null && this.datas.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.datas);
            } else if (!this.observable) {
              this.observable = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.TYPE_SOCIETE);
            }

            return this.observable;
          }
        }, {
          key: "addtypeSociete",
          value: function addtypeSociete(typeSocietes) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.TYPE_SOCIETE, typeSocietes);
          }
        }, {
          key: "updatetypeSociete",
          value: function updatetypeSociete(id, typeSocietes) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.TYPE_SOCIETE + "" + id, typeSocietes);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SOCIETE.TYPE_SOCIETE + "" + id);
          }
        }]);

        return typeSocietesServices;
      }();

      typeSocietesServices.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      typeSocietesServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], typeSocietesServices);
      /***/
    },

    /***/
    "d1hD":
    /*!************************************************!*\
      !*** ./src/app/features/menus/menuServices.ts ***!
      \************************************************/

    /*! exports provided: MenuServiceAdmin */

    /***/
    function d1hD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuServiceAdmin", function () {
        return MenuServiceAdmin;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

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
      /****
       *
       * [
        {
          "id": 1,
          "title": "Dashbord",
          "routerLink": "/",
          "href": null,
          "icon": "dashboard",
          "target": null,
          "hasSubMenu": false,
          "parentId": 0
        },
        {
          "id": 8,
          "title": "Annuaire d'identité",
          "routerLink": "",
          "href": "",
          "icon": "dvr",
          "target": null,
          "hasSubMenu": true,
          "parentId": 0
        },
        {
          "id": 9,
          "title": "Gerants",
          "routerLink": "/user/gerant",
          "href": null,
          "icon": "supervisor_account",
          "target": null,
          "hasSubMenu": false,
          "parentId": 8
        },
        {
          "id": 19,
          "title": "Parametre",
          "routerLink": null,
          "href": null,
          "icon": "settings",
          "target": null,
          "hasSubMenu": true,
          "parentId": 0
        },
        {
          "id": 17,
          "title": "Profile Menu",
          "routerLink": "/systeme/user-menu",
          "href": null,
          "icon": "verified_user",
          "target": null,
          "hasSubMenu": false,
          "parentId": 19
        },
        {
          "id": 16,
          "title": "Profile des Utilisateur",
          "routerLink": "/systeme/profiles",
          "href": null,
          "icon": "security",
          "target": null,
          "hasSubMenu": false,
          "parentId": 14
        },
        {
          "id": 18,
          "title": "Roles",
          "routerLink": "/systeme/roles",
          "href": null,
          "icon": "security",
          "target": null,
          "hasSubMenu": false,
          "parentId": 14
        },
        {
          "id": 15,
          "title": "Menu",
          "routerLink": "/systeme/menu",
          "href": null,
          "icon": "list_alt",
          "target": null,
          "hasSubMenu": false,
          "parentId": 19
        },
        {
          "id": 14,
          "title": "System",
          "routerLink": null,
          "href": null,
          "icon": "memory",
          "target": null,
          "hasSubMenu": true,
          "parentId": 0
        },
        {
          "id": 2,
          "title": "Suivi chantier",
          "routerLink": "/renovation",
          "href": "",
          "icon": "business",
          "target": null,
          "hasSubMenu": false,
          "parentId": 0
        },
        {
          "id": 13,
          "title": "Validation des fichier",
          "routerLink": "/valider-renovation",
          "href": null,
          "icon": "business",
          "target": null,
          "hasSubMenu": false,
          "parentId": 0
        },
        {
          "id": 20,
          "title": "Client",
          "routerLink": "/user/client",
          "href": null,
          "icon": "supervisor_account",
          "target": null,
          "hasSubMenu": false,
          "parentId": 8
        },
        {
          "id": 12,
          "title": "Autre Utilisateur",
          "routerLink": "/user/autre-user",
          "href": null,
          "icon": "supervisor_account",
          "target": null,
          "hasSubMenu": false,
          "parentId": 8
        },
        {
          "id": 11,
          "title": "Bureau Etude",
          "routerLink": "/user/bureau-etude",
          "href": null,
          "icon": "supervisor_account",
          "target": null,
          "hasSubMenu": false,
          "parentId": 8
        },
        {
          "id": 10,
          "title": "Responsable Travaux",
          "routerLink": "/user/responsable-travaux",
          "href": null,
          "icon": "supervisor_account",
          "target": null,
          "hasSubMenu": false,
          "parentId": 8
        },
        {
          "id": 21,
          "title": "Gerer Société",
          "routerLink": null,
          "href": null,
          "icon": "business",
          "target": null,
          "hasSubMenu": true,
          "parentId": 8
        },
        {
          "id": 22,
          "title": "Société",
          "routerLink": "/societe",
          "href": null,
          "icon": "business",
          "target": null,
          "hasSubMenu": false,
          "parentId": 21
        },
        {
          "id": 23,
          "title": "Type Société",
          "routerLink": "/types-societe",
          "href": null,
          "icon": "bookmark",
          "target": null,
          "hasSubMenu": false,
          "parentId": 21
        },
        {
          "id": 24,
          "title": null,
          "routerLink": null,
          "href": null,
          "icon": null,
          "target": null,
          "hasSubMenu": false,
          "parentId": 0
        },
        {
          "id": 26,
          "title": "Demarrer une renovation",
          "routerLink": "/projet-renovation",
          "href": null,
          "icon": "note_alt",
          "target": null,
          "hasSubMenu": false,
          "parentId": 0
        }
      ]
       */


      var MenuServiceAdmin = /*#__PURE__*/function () {
        function MenuServiceAdmin(http) {
          _classCallCheck(this, MenuServiceAdmin);

          this.http = http;
        }

        _createClass(MenuServiceAdmin, [{
          key: "getAllMenu",
          value: function getAllMenu() {
            if (this.datas != null && this.datas.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.datas);
            } else if (!this.observable) {
              this.observable = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.MENU.MENU_ACTION);
            }

            return this.observable;
          }
        }, {
          key: "addMenu",
          value: function addMenu(menu) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.MENU.MENU_ACTION, menu);
          }
        }, {
          key: "updateMenu",
          value: function updateMenu(id, menu) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.MENU.MENU_ACTION + "" + id, menu);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.MENU.MENU_ACTION + "" + id);
          }
        }]);

        return MenuServiceAdmin;
      }();

      MenuServiceAdmin.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      MenuServiceAdmin = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], MenuServiceAdmin);
      /***/
    },

    /***/
    "dppI":
    /*!********************************************************************************************************!*\
      !*** ./src/app/features/demarrage-projet-renovation/taches/gestion-taches/gestion-taches.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: GestionTachesComponent */

    /***/
    function dppI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionTachesComponent", function () {
        return GestionTachesComponent;
      });
      /* harmony import */


      var _raw_loader_gestion_taches_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./gestion-taches.component.html */
      "21PC");
      /* harmony import */


      var _gestion_taches_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gestion-taches.component.scss */
      "OE4s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

      var GestionTachesComponent = /*#__PURE__*/function () {
        function GestionTachesComponent(data) {
          _classCallCheck(this, GestionTachesComponent);

          this.data = data;
        }

        _createClass(GestionTachesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tache = this.data.tache;
          }
        }]);

        return GestionTachesComponent;
      }();

      GestionTachesComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      GestionTachesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-gestion-taches',
        template: _raw_loader_gestion_taches_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gestion_taches_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [Object])], GestionTachesComponent);
      /***/
    },

    /***/
    "ds2Z":
    /*!*************************************************!*\
      !*** ./src/app/features/roles/rolesServices.ts ***!
      \*************************************************/

    /*! exports provided: RolesServices */

    /***/
    function ds2Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesServices", function () {
        return RolesServices;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

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
      /***
       *
       *
       *
       * [
        {
          "id": 1,
          "libelle": "Utilisateur",
          "name": "ROLE_UTILISATEUR",
          "type": "User"
        },
        {
          "id": 2,
          "libelle": "Admin",
          "name": "ROLE_ADMIN",
          "type": "Root"
        },
        {
          "id": 4,
          "libelle": "Gerer le Menu Des Profile",
          "name": "ROLE_GESTION_USER_MENU",
          "type": "gestion profile user"
        },
        {
          "id": 5,
          "libelle": "Gerer Mes Renovation (Client)",
          "name": "ROLE_GESTION_RENOVATION",
          "type": "gestion des renovation"
        },
        {
          "id": 6,
          "libelle": "Gerer les Profiles",
          "name": "ROLE_GESTIONS_PROFILES",
          "type": "Gestion des profiles"
        },
        {
          "id": 7,
          "libelle": "Gerer les roles",
          "name": "ROLE_GESTION_ROLES",
          "type": "Gestion des roles"
        },
        {
          "id": 8,
          "libelle": "Gerer Type Societe",
          "name": "ROLE_GESTION_TYPE_SOCIETE",
          "type": "Gestion des type de société"
        },
        {
          "id": 9,
          "libelle": "Gerer les Société",
          "name": "ROLE_GESTION_SOCIETE",
          "type": "gestion des societe"
        },
        {
          "id": 10,
          "libelle": "Gerer les client",
          "name": "ROLE_GESTION_CLIENT",
          "type": "Gestion des client"
        },
        {
          "id": 11,
          "libelle": "Gerer  User Bureau Etude",
          "name": "ROLE_GESTION_BUREAU_ETUDE",
          "type": "Gestion des user Bureau Etude"
        },
        {
          "id": 12,
          "libelle": "Gestion User Responsable Travaux",
          "name": "ROLE_GESTION_RESPONSABLE_TRAVAUX",
          "type": "Gestion des Responsable Travaux"
        },
        {
          "id": 13,
          "libelle": "Gerer User Gerant",
          "name": "ROLE_GESTION_GERANT",
          "type": "Gestion des Gerants"
        },
        {
          "id": 14,
          "libelle": "Gerer Autre User",
          "name": "ROLE_GESTION_AUTRE_USER",
          "type": "Gestion Autre User"
        },
        {
          "id": 15,
          "libelle": "Gerer validation des justificatif renovation",
          "name": "ROLE_GESTION_VALIDER_FILE_RENOVATION",
          "type": "Gestion des validation des justificatif renovation"
        },
        {
          "id": 3,
          "libelle": "Creer Modifier Supprimer Menu",
          "name": "ROLE_GESTION_MENU",
          "type": "Gestion Menu"
        },
        {
          "id": 16,
          "libelle": "usti",
          "name": "ROLE_USER1",
          "type": "user"
        }
      ]
       */


      var RolesServices = /*#__PURE__*/function () {
        function RolesServices(http) {
          _classCallCheck(this, RolesServices);

          this.http = http;
        }

        _createClass(RolesServices, [{
          key: "getAllrole",
          value: function getAllrole() {
            if (this.datas != null && this.datas.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.datas);
            } else if (!this.observable) {
              this.observable = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.ROLE);
            }

            return this.observable;
          }
        }, {
          key: "addrole",
          value: function addrole(roles) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.ROLE, roles);
          }
        }, {
          key: "updaterole",
          value: function updaterole(id, roles) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.ROLE + "" + id, roles);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BACK_END.SECURITE.ROLE + "" + id);
          }
        }]);

        return RolesServices;
      }();

      RolesServices.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      RolesServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], RolesServices);
      /***/
    },

    /***/
    "el93":
    /*!*********************************************!*\
      !*** ./src/app/shared/models/Renovation.ts ***!
      \*********************************************/

    /*! exports provided: Renovation, Justificatif, GetJustificatifForReno */

    /***/
    function el93(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Renovation", function () {
        return Renovation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Justificatif", function () {
        return Justificatif;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetJustificatifForReno", function () {
        return GetJustificatifForReno;
      });

      var Renovation = function Renovation() {
        _classCallCheck(this, Renovation);
      };

      var Justificatif = function Justificatif() {
        _classCallCheck(this, Justificatif);
      };

      var GetJustificatifForReno = function GetJustificatifForReno() {
        _classCallCheck(this, GetJustificatifForReno);
      };
      /***/

    },

    /***/
    "omVV":
    /*!**************************************************************************!*\
      !*** ./src/app/features/fin-projet-renovation/cloturerProjet.service.ts ***!
      \**************************************************************************/

    /*! exports provided: CloturerRenovationService */

    /***/
    function omVV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloturerRenovationService", function () {
        return CloturerRenovationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
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

      var CloturerRenovationService = /*#__PURE__*/function () {
        function CloturerRenovationService(http) {
          _classCallCheck(this, CloturerRenovationService);

          this.http = http;
        }

        _createClass(CloturerRenovationService, [{
          key: "getProjet",
          value: function getProjet() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.CLOTURER);
          }
        }, {
          key: "addProjet",
          value: function addProjet(agenda) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.CLOTURER, agenda);
          }
        }, {
          key: "deleteProjet",
          value: function deleteProjet(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.CLOTURER + "" + id);
          }
        }, {
          key: "getprojetRenovation",
          value: function getprojetRenovation() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT);
          }
        }, {
          key: "getAllProjet",
          value: function getAllProjet() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.BILAN_CLOTURE);
          }
        }]);

        return CloturerRenovationService;
      }();

      CloturerRenovationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CloturerRenovationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CloturerRenovationService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map