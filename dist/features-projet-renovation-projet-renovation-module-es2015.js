(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-projet-renovation-projet-renovation-module"],{

/***/ "0wMe":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/projet-renovation/update-projet-renovation/update-projet-renovation.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<!-- <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h2 *ngIf=\"data.menu\">Modifier Un Menu</h2>\r\n    <h2 *ngIf=\"!data.menu\">AJouter Un Menu</h2>\r\n</div> -->\r\n\r\n\r\n<mat-card *ngIf=\"!isLoadingResults\">\r\n    <mat-card-content>\r\n        <form [formGroup]=\"projetRenovation\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                    <mat-label>Budget total reserver pour le projet</mat-label>\r\n                    <input matInput type=\"number\" #input formControlName=\"budget\">\r\n                    <span matSuffix ><b>euros</b></span>\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                \r\n                    <mat-label>date de debut et de fin</mat-label>\r\n                    <mat-date-range-input [rangePicker]=\"picker\">\r\n                      <input matStartDate formControlName=\"dateDemarrage\" placeholder=\"Start date\">\r\n                      <input matEndDate formControlName=\"dateFinission\" placeholder=\"End date\">\r\n                    </mat-date-range-input>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-date-range-picker #picker></mat-date-range-picker>\r\n                  \r\n                    <!-- <mat-error *ngIf=\"range.controls.dateDemarrage.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\r\n                    <mat-error *ngIf=\"range.controls.dateFinition.hasError('matEndDateInvalid')\">Invalid end date</mat-error> -->\r\n            </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <ng-select class=\"select\"  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"listeRenovation\"\r\n                   bindLabel=\"nomRenovation\"\r\n                   placeholder=\"Selectionner Selectionner la renovation\"\r\n                   formControlName=\"renovation\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n            </div>\r\n            <div fxLayout=\"row\" *ngIf=\"img!='' && photo.value\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                <div fxLayoutAlign=\"center end\" class=\"content-container\" *ngIf=\"id>0\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                    <img class=\"image\" src=\"{{URLpage}}{{img.split('/')[2]}}\"><br/>\r\n                    <b><p>Image actuellement utiliser</p></b>\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n                \r\n                <div class=\"content-container\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                    <dropzone class=\"dropzone-container\" [fxFlex]=\"100\" [config]=\"config\" [message]=\"'Cliquez ou faites glisser la pièce ici jointe'\" (init)=\"onUploadInit($event)\" (error)=\"onUploadError($event)\" (success)=\"onUploadSuccess($event)\">\r\n                    </dropzone>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n        <button mat-raised-button color=\"warn\" routerLink=\"/projet-renovation\"  >Annuler</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Enregistrer</button>\r\n    </mat-card-actions>\r\n</mat-card>");

/***/ }),

/***/ "2YuX":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/projet-renovation/utilisateur-affecter-modal/utilisateur-affecter-modal.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n\r\n<div *ngIf=\"!isLoadingResults\"  class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3>Gestion des utilisateur du Projet {{data.projet.renovation.nomRenovation}}</h3>\r\n</div>\r\n<div mat-dialog-content class=\"body-content contenu-body\" *ngIf=\"!isLoadingResults\" >\r\n    <form   [formGroup]=\"userForm\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field  appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                <mat-label>Libelle de la renovation</mat-label>\r\n                <input matInput #input  placeholder=\"Ex. Nougat\" [value]=\"data.projet.renovation.nomRenovation\" readonly>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <ng-select  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"listeUser\"\r\n                   bindLabel=\"email\"\r\n                   placeholder=\" Selectionner l'tilisateur conserner\"\r\n                   formControlName=\"utilisateurs\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div  *ngIf=\"!isLoadingResults\"  mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"userForm.value\" >Fermer</button>\r\n        <button mat-raised-button [disabled]=\"userForm.invalid\" (click)=\"onSubmit()\" color=\"primary\" >Enregistrer</button>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"row wrap\" class=\"table\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <div class=\"example-container\">\r\n            <table mat-table [dataSource]=\"dataSources\" matSort>\r\n                <ng-container matColumnDef=\"id\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> id </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                  </ng-container>\r\n              <!-- Name Column -->\r\n              <ng-container matColumnDef=\"libelle\" sticky>\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.utilisateurs.email}} </td>\r\n              </ng-container>\r\n          \r\n              <!-- Position Column -->\r\n              \r\n          \r\n              <!-- Weight Column -->\r\n              <ng-container matColumnDef=\"roles\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Nom</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.utilisateurs.nom}} {{element.utilisateurs.prenom}}</td>\r\n              </ng-container>\r\n              \r\n              <!-- Star Column -->\r\n              <ng-container matColumnDef=\"action\" stickyEnd>\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                    <button mat-button  color=\"warn\" (click)=\"supprimerUser(element.id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Supprimer</span>\r\n                      </button>\r\n                </td>\r\n              </ng-container>\r\n          \r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[4]\"></mat-paginator>\r\n          </div>\r\n    </div>");

/***/ }),

/***/ "4897":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/projet-renovation/update-projet-renovation/update-projet-renovation.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  width: 100px;\n  height: 100px;\n  border-radius: 20px 20px 20px 20px;\n  border: 1px solid rgba(8, 8, 146, 0.651);\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBkYXRlLXByb2pldC1yZW5vdmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJ1cGRhdGUtcHJvamV0LXJlbm92YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOCwgOCwgMTQ2LCAwLjY1MSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "80PU":
/*!*****************************************************************************!*\
  !*** ./src/app/features/projet-renovation/projet-renovation.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".element {\n  color: white;\n}\n\n.image {\n  height: 200px;\n}\n\n.example-tooltip-red {\n  background: #080883;\n  font-weight: bold;\n}\n\n.infor {\n  font-size: 13px;\n  padding: 5px;\n}\n\n.infor mat-icon {\n  margin-right: 10px;\n}\n\n.buton-action {\n  float: right;\n}\n\n.recherche {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZXQtcmVub3ZhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxrQkFBQTtBQUdSOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKIiwiZmlsZSI6InByb2pldC1yZW5vdmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVsZW1lbnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXRvb2x0aXAtcmVke1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDgsIDgsIDEzMSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW5mb3J7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXQtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXRvbi1hY3Rpb257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5yZWNoZXJjaGV7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "M2mF":
/*!*************************************************************************!*\
  !*** ./src/app/features/projet-renovation/projet-renovation.service.ts ***!
  \*************************************************************************/
/*! exports provided: ProjetRenauvationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetRenauvationService", function() { return ProjetRenauvationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
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



let ProjetRenauvationService = class ProjetRenauvationService {
    constructor(http) {
        this.http = http;
    }
    getprojets() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT);
    }
    getProjetById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT + "" + id);
    }
    addprojet(projet) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT, projet);
    }
    deleteprojet(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT + "" + id);
    }
    updateprojet(projet, id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT + "" + id, projet);
    }
    getAllRenovation() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.PROJET_RENAUVATION_GERANT + "renovation/");
    }
};
ProjetRenauvationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProjetRenauvationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProjetRenauvationService);



/***/ }),

/***/ "U7It":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/projet-renovation/update-projet-renovation/update-projet-renovation.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UpdateProjetRenovationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProjetRenovationComponent", function() { return UpdateProjetRenovationComponent; });
/* harmony import */ var _raw_loader_update_projet_renovation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update-projet-renovation.component.html */ "0wMe");
/* harmony import */ var _update_projet_renovation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-projet-renovation.component.scss */ "4897");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projet_renovation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projet-renovation.service */ "M2mF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let UpdateProjetRenovationComponent = class UpdateProjetRenovationComponent {
    constructor(fb, projetService, route, confirm, snackBar, router) {
        this.fb = fb;
        this.projetService = projetService;
        this.route = route;
        this.confirm = confirm;
        this.snackBar = snackBar;
        this.router = router;
        this.isLoadingResults = true;
        this.img = '';
        this.id = null;
        this.URLpage = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].BACK_END.FILEUPLOAD + 'download/';
        this.config = {
            clickable: true,
            maxFiles: 1,
            autoReset: null,
            resizeWidth: 300,
            resizeHeight: 300,
            thumbnailHeight: 300,
            thumbnailWidth: 300,
            acceptedFiles: 'image/*',
            errorReset: null,
            cancelReset: null
        };
        this.id = this.route.snapshot.params.id;
    }
    get photo() { return this.projetRenovation.get('photo'); }
    ngOnInit() {
        this.init();
    }
    init() {
        this.id = parseInt(this.id);
        if (this.id > 0) {
            this.projetService.getProjetById(this.id).subscribe((projet) => {
                this.projetService.getAllRenovation().subscribe((data) => {
                    this.listeRenovation = data;
                    this.isLoadingResults = false;
                });
                this.img = projet.photo;
                this.projetRenovation = this.fb.group({
                    id: projet.id,
                    budget: [projet.budget, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    dateDemarrage: [projet.dateDemarrage, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    dateFinission: [projet.dateFinission, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    renovation: [projet.renovation, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    photo: [projet.photo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            }, (error) => {
                this.id = null;
                this.projetService.getAllRenovation().subscribe((data) => {
                    this.listeRenovation = data;
                    this.isLoadingResults = false;
                });
                this.projetRenovation = this.fb.group({
                    id: null,
                    budget: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    dateDemarrage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    dateFinission: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    renovation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            });
        }
        else {
            this.projetService.getAllRenovation().subscribe((data) => {
                this.listeRenovation = data;
                this.isLoadingResults = false;
            });
            this.projetRenovation = this.fb.group({
                id: null,
                budget: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                dateDemarrage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                dateFinission: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                renovation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    }
    onUploadError(args) {
        this.dropzoneComponentRef.directiveRef.reset();
    }
    resetDropZone() {
        this.dropzoneComponentRef.directiveRef.reset();
        this.photo.setValue(null);
    }
    onUploadSuccess(remoteResponse) {
        this.photo.setValue("data:" + remoteResponse[1].contentType + ";base64," + remoteResponse[1].url);
    }
    onUploadInit(args) {
    }
    onSubmit() {
        if (this.projetRenovation.valid) {
            this.isLoadingResults = true;
            if (this.id > 0) {
                this.projetService.updateprojet(this.projetRenovation.value, this.id).subscribe((data) => {
                }, (error) => {
                    if (error.status < 300) {
                        this.snackBar.openSnackBar("Projet modifier avec success", "OK", 5000);
                        this.router.navigate(["/projet-renovation"]);
                    }
                    else {
                        this.isLoadingResults = false;
                        this.snackBar.openSnackBar("Projet non Modifier car la renovation choisis existe deja", "OK", 5000);
                    }
                });
            }
            else {
                this.projetService.addprojet(this.projetRenovation.value).subscribe((data) => {
                }, (error) => {
                    if (error.status < 300) {
                        this.snackBar.openSnackBar("Projet enregistrer avec success", "OK", 5000);
                        this.router.navigate(["/projet-renovation"]);
                    }
                    else {
                        this.isLoadingResults = false;
                        this.snackBar.openSnackBar("Projet non enregistrer car la renovation choisis existe deja", "OK", 5000);
                    }
                });
            }
        }
        else {
            this.snackBar.openSnackBar("Remplire tous les champs svp", "OK", 5000);
        }
    }
};
UpdateProjetRenovationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _projet_renovation_service__WEBPACK_IMPORTED_MODULE_4__["ProjetRenauvationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__["AppConfirmService"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdateProjetRenovationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-projet-renovation',
        template: _raw_loader_update_projet_renovation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_projet_renovation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _projet_renovation_service__WEBPACK_IMPORTED_MODULE_4__["ProjetRenauvationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__["AppConfirmService"],
        src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], UpdateProjetRenovationComponent);



/***/ }),

/***/ "XXB5":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/projet-renovation/projet-renovation.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div fxLayout=\"row wrap\">\r\n    <div class=\"table-bouton-ajout\">\r\n        <mat-button-toggle-group appearance=\"legacy\">\r\n            <button routerLink=\"update/null\" mat-raised-button color=\"primary\">Demarrer un projet de renovation</button>\r\n        </mat-button-toggle-group>\r\n    </div>\r\n        <!--<div class=\"recherche\">\r\n            <mat-form-field class=\"recherche\">\r\n                <input matInput  placeholder=\"Rechercher generale...\" >\r\n                <mat-icon matSuffix >clear</mat-icon>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>indice de recherche</mat-label>\r\n                <mat-select >\r\n                    <mat-option [value]=\"'budget'\"></mat-option>\r\n                    <mat-option *ngFor=\"let e of elementRecheche\" [value]=\"e\">{{e}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>-->\r\n  </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n        <div fxFlex=\"32\" class=\"flex-p\" *ngFor=\"let p of projet  | paginate: { itemsPerPage: 6, currentPage: page }\"> \r\n            <mat-card class=\"custom-card\">\r\n                    <mat-card-header class=\"bg-primary p-1\" fxLayoutAlign=\"space-between center\">\r\n                        <mat-card-title  class=\"m-0\"><h3><button mat-button>{{p.renovation.nomRenovation}}</button></h3></mat-card-title>\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\r\n                    </mat-card-header>\r\n                    <mat-menu #menu=\"matMenu\">\r\n                        <button mat-menu-item routerLink=\"update/{{p.id}}\">\r\n                          <mat-icon>edite</mat-icon>\r\n                          <span>Modifier</span>\r\n                        </button>\r\n                        <button mat-menu-item color=\"warn\" (click)=\"supprimerRenovation(p.id)\">\r\n                          <mat-icon>delete</mat-icon>\r\n                          <span>Supprimer</span>\r\n                        </button>\r\n                      </mat-menu>\r\n                <img class=\"image\" mat-card-image src=\"{{URLpage}}{{p.photo.split('/')[2]}}\" alt=\"5\">\r\n                <mat-card-content class=\"p-\">\r\n                    <p fxLayout=\"row\" class=\"infor\">\r\n                        <mat-icon>face</mat-icon>  \r\n                        <span> <strong><i>Client : </i> {{p.renovation.client.email}}</strong></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" class=\"infor\">\r\n                        <mat-icon>local_atm</mat-icon>  \r\n                        <span> <strong><i>Budget : </i> {{p.budget}} euros</strong></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\"  class=\"infor\">\r\n                        <mat-icon>timer</mat-icon>  \r\n                        <span> <strong><i>Durée :</i> {{p.dateDemarrage| date:'dd/MM/yyyy'}} - {{p.dateFinission| date:'dd/MM/yyyy'}}</strong></span>\r\n                    </p>\r\n                    \r\n                    <p fxLayout=\"row\" class=\"infor\">\r\n                        <mat-icon>location_on</mat-icon>  \r\n                        <span> <strong><i>Adresse : </i> {{p.renovation.adressChantier}}</strong></span>\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-divider></mat-divider>\r\n                <mat-card-actions fxLayoutAlign=\"end center\">\r\n                    <button\r\n                        matTooltip=\"Utilisateurs affecter au projet pour la renovation\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\"\r\n                     button mat-icon-button (click)=\"openDialog(p)\">\r\n                        <mat-icon>groups</mat-icon>\r\n                    </button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n\r\n<div fxLayout=\"row wrap\" *ngIf=\"projet\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 text-center\">           \r\n            <pagination-controls class=\"gradus-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>");

/***/ }),

/***/ "cf0u":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/projet-renovation/utilisateur-affecter-modal/utilisateur-affecter-modal.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: UtilisateurAffecterModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurAffecterModalComponent", function() { return UtilisateurAffecterModalComponent; });
/* harmony import */ var _raw_loader_utilisateur_affecter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./utilisateur-affecter-modal.component.html */ "2YuX");
/* harmony import */ var _utilisateur_affecter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilisateur-affecter-modal.component.scss */ "qsCd");
/* harmony import */ var _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../user-affecter-projet-renovation/user-affecter-projet.service */ "Ta7a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let UtilisateurAffecterModalComponent = class UtilisateurAffecterModalComponent {
    constructor(dialogRef, snackBar, dialog, data, fb, userAffecter, confirm) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.userAffecter = userAffecter;
        this.confirm = confirm;
        this.isLoadingResults = false;
        this.userAffect = [];
        this.displayedColumns = ['id', 'libelle', 'roles', 'action'];
        this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.userAffect);
    }
    ngOnInit() {
        this.initDonner();
        this.init();
    }
    initDonner() {
        this.isLoadingResults = true;
        this.userAffecter.listUserNonAffecter("" + this.data.projet.id).subscribe((data) => {
            this.listeUser = data;
            console.log(this.listeUser);
            this.userAffecter.getUsers(this.data.projet.id).subscribe((userA) => {
                this.userAffect = userA;
                this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.userAffect);
                this.dataSources.paginator = this.paginator;
                this.dataSources.sort = this.sort;
                this.isLoadingResults = false;
            });
        });
    }
    init() {
        this.userForm = this.fb.group({
            id: null,
            utilisateurs: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            projetRenovation: this.data.projet,
        });
    }
    onSubmit() {
        console.log(this.userForm.value);
        if (this.userForm.valid) {
            this.isLoadingResults = true;
            this.userAffecter.addUser(this.userForm.value).subscribe((data) => {
            }, (error) => {
                if (error.status < 300) {
                    this.snackBar.openSnackBar("utilisateur ajouter avec success", "success", 3000);
                    this.initDonner();
                    this.userForm.get('utilisateurs').setValue(null);
                }
                else {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("utilisateur est deja affecter au projet", "error", 3000);
                }
            });
        }
        else {
            this.snackBar.openSnackBar("Remplirer tous les champs svp", "error", 3000);
        }
    }
    supprimerUser(index) {
        this.confirm.confirm({
            title: "Confirmation",
            message: `Voulez-vous supprimer cette pièce complémentaire ? `
        }).subscribe(($choix) => {
            if ($choix) {
                this.isLoadingResults = true;
                this.userAffecter.deleteUser(index).subscribe(() => {
                }, (error) => {
                    this.isLoadingResults = false;
                    if (error.status < 300) {
                        this.snackBar.openSnackBar("Element supprimé avec succès", "OK", 3000);
                        this.ngOnInit();
                    }
                    else {
                        this.snackBar.openSnackBar("Element non supprimer ", "OK", 3000);
                    }
                });
            }
        });
    }
};
UtilisateurAffecterModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_2__["UserAffecterProjetRenovationServices"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_10__["AppConfirmService"] }
];
UtilisateurAffecterModalComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
};
UtilisateurAffecterModalComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-utilisateur-affecter-modal',
        template: _raw_loader_utilisateur_affecter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_2__["UserAffecterProjetRenovationServices"]],
        styles: [_utilisateur_affecter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_2__["UserAffecterProjetRenovationServices"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_10__["AppConfirmService"]])
], UtilisateurAffecterModalComponent);



/***/ }),

/***/ "qsCd":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/projet-renovation/utilisateur-affecter-modal/utilisateur-affecter-modal.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenu-body {\n  height: 200px;\n}\n\n.example-container {\n  width: 100%;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.recherche {\n  width: 80%;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky-border-elem-right {\n  border-left: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky-border-elem-left {\n  border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXRpbGlzYXRldXItYWZmZWN0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7QUFISjs7QUFNRTtFQUNFLFVBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0FBSEo7O0FBTUU7RUFDRSwrQkFBQTtBQUhKIiwiZmlsZSI6InV0aWxpc2F0ZXVyLWFmZmVjdGVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnUtYm9keXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZWNoZXJjaGV7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLXJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZS1zdGlja3ktYm9yZGVyLWVsZW0tbGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "w8D7":
/*!***************************************************************************!*\
  !*** ./src/app/features/projet-renovation/projet-renovation.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjetRenovationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetRenovationComponent", function() { return ProjetRenovationComponent; });
/* harmony import */ var _raw_loader_projet_renovation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./projet-renovation.component.html */ "XXB5");
/* harmony import */ var _projet_renovation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projet-renovation.component.scss */ "80PU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _projet_renovation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projet-renovation.service */ "M2mF");
/* harmony import */ var _utilisateur_affecter_modal_utilisateur_affecter_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilisateur-affecter-modal/utilisateur-affecter-modal.component */ "cf0u");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let ProjetRenovationComponent = class ProjetRenovationComponent {
    constructor(appSettings, snackBar, dialog, confirm, projetService) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.confirm = confirm;
        this.projetService = projetService;
        this.elementRecheche = ['budget', 'dateDemarrage', 'email', 'nomRenovation'];
        this.isLoadingResults = false;
        this.URLpage = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BACK_END.FILEUPLOAD + 'download/';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getElement();
    }
    getImgUsrl(p) {
        //console.log(p.photo);
        return p.photo;
        //return this.URLpage+""+img.split('/')[2];
    }
    getElement() {
        this.isLoadingResults = true;
        this.projetService.getprojets().subscribe((data) => {
            this.projet = data;
            console.log(this.projet);
            this.isLoadingResults = false;
        });
    }
    onPageChanged(event) {
        this.page = event;
        //this.getUsers();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }
    openDialog(projet) {
        const dialogRef = this.dialog.open(_utilisateur_affecter_modal_utilisateur_affecter_modal_component__WEBPACK_IMPORTED_MODULE_9__["UtilisateurAffecterModalComponent"], {
            width: '600px',
            height: '700px',
            data: { projet: projet },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
                this.getElement();
            }
        });
    }
    supprimerRenovation(index) {
        this.confirm.confirm({
            title: "Confirmation",
            message: `Voulez-vous supprimer cette pièce complémentaire ? `
        }).subscribe(($choix) => {
            if ($choix) {
                this.isLoadingResults = true;
                this.projetService.deleteprojet(index).subscribe(() => {
                }, (error) => {
                    this.isLoadingResults = false;
                    if (error.status < 300) {
                        this.snackBar.openSnackBar("Element supprimé avec succès", "OK", 3000);
                        this.getElement();
                    }
                    else {
                        this.snackBar.openSnackBar("Element non supprimer ", "OK", 3000);
                    }
                });
            }
        });
    }
    rechercheBudget(arr, requete) {
        return arr.filter(function (el) {
            return el.budget + "".indexOf(requete.toLowerCase()) !== -1;
        });
    }
    rechercheNomRenovation(arr, requete) {
        return arr.filter(function (el) {
            return el.renovation.nomRenovation.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
        });
    }
    rechercheEmail(arr, requete) {
        return arr.filter(function (el) {
            return el.renovation.client.email.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
        });
    }
};
ProjetRenovationComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__["AppConfirmService"] },
    { type: _projet_renovation_service__WEBPACK_IMPORTED_MODULE_8__["ProjetRenauvationService"] }
];
ProjetRenovationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-projet-renovation',
        template: _raw_loader_projet_renovation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_projet_renovation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__["AppConfirmService"],
        _projet_renovation_service__WEBPACK_IMPORTED_MODULE_8__["ProjetRenauvationService"]])
], ProjetRenovationComponent);



/***/ }),

/***/ "yVXe":
/*!************************************************************************!*\
  !*** ./src/app/features/projet-renovation/projet-renovation.module.ts ***!
  \************************************************************************/
/*! exports provided: routes, ProjetRenovationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetRenovationModule", function() { return ProjetRenovationModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projet-renovation.component */ "w8D7");
/* harmony import */ var _update_projet_renovation_update_projet_renovation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-projet-renovation/update-projet-renovation.component */ "U7It");
/* harmony import */ var _projet_renovation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projet-renovation.service */ "M2mF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _renovations_client_renovation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../renovations/client-renovation */ "JR9s");
/* harmony import */ var _utilisateur_affecter_modal_utilisateur_affecter_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilisateur-affecter-modal/utilisateur-affecter-modal.component */ "cf0u");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].BACK_END.FILEUPLOAD + 'file',
    maxFilesize: 50,
    acceptedFiles: 'image/*,application/pdf',
    addRemoveLinks: true,
};
const routes = [
    { path: '', component: _projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__["ProjetRenovationComponent"], data: { breadcrumb: 'Projet Renauvation' } },
    { path: 'update/:id', component: _update_projet_renovation_update_projet_renovation_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProjetRenovationComponent"], data: { breadcrumb: 'update' } },
];
let ProjetRenovationModule = class ProjetRenovationModule {
};
ProjetRenovationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__["ProjetRenovationComponent"], _update_projet_renovation_update_projet_renovation_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProjetRenovationComponent"], _utilisateur_affecter_modal_utilisateur_affecter_modal_component__WEBPACK_IMPORTED_MODULE_13__["UtilisateurAffecterModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
        ],
        providers: [
            _projet_renovation_service__WEBPACK_IMPORTED_MODULE_5__["ProjetRenauvationService"],
            _renovations_client_renovation__WEBPACK_IMPORTED_MODULE_12__["ClientRenovation"],
            {
                provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DROPZONE_CONFIG"],
                useValue: DEFAULT_DROPZONE_CONFIG,
            }
        ],
        exports: [_utilisateur_affecter_modal_utilisateur_affecter_modal_component__WEBPACK_IMPORTED_MODULE_13__["UtilisateurAffecterModalComponent"]]
    })
], ProjetRenovationModule);



/***/ })

}]);
//# sourceMappingURL=features-projet-renovation-projet-renovation-module-es2015.js.map