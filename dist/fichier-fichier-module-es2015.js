(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fichier-fichier-module"],{

/***/ "0MNP":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/gestion-dossier.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: GestionDossier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionDossier", function() { return GestionDossier; });
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



let GestionDossier = class GestionDossier {
    constructor(http) {
        this.http = http;
    }
    modifierParent(dossier) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER, dossier);
    }
    deleteDossier(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER + "" + id);
    }
    getUser(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER + "user-projet/" + id);
    }
    UserDossier(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER + "" + id);
    }
    authoriserUser(idDossier, user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER + "user-autoriser/ajouter/" + idDossier, user);
    }
    supprimerUser(idDossier, userId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_DOSSIER + "user-autoriser/" + idDossier + "/" + userId);
    }
};
GestionDossier.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GestionDossier = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], GestionDossier);



/***/ }),

/***/ "4pC3":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/add-or-update-dossier/add-or-update-dossier.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddOrUpdateDossierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrUpdateDossierComponent", function() { return AddOrUpdateDossierComponent; });
/* harmony import */ var _raw_loader_add_or_update_dossier_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-or-update-dossier.component.html */ "89NV");
/* harmony import */ var _add_or_update_dossier_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-or-update-dossier.component.scss */ "X/h+");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dossier-fichier.service */ "e01Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AddOrUpdateDossierComponent = class AddOrUpdateDossierComponent {
    constructor(dialogRef, snackBar, dialog, data, fb, dossierService) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.dossierService = dossierService;
        this.isLoadingResults = false;
        this.userList = [];
    }
    ngOnInit() {
        this.init();
    }
    init() {
        if (this.data.dossier) {
            console.log(this.data.dossier);
            this.dossierForm = this.fb.group({
                id: this.data.dossier.id,
                appellation: [this.data.dossier.appellation, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                dossierParent: [this.data.dossier.dossierParent],
                projetRenovation: _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_2__["DemarrageProjetRenovationComponent"].projetRenovation,
            });
        }
        else {
            this.dossierForm = this.fb.group({
                appellation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                dossierParent: [this.data.parentId],
                projetRenovation: _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_2__["DemarrageProjetRenovationComponent"].projetRenovation,
            });
        }
    }
    onSubmit() {
        this.isLoadingResults = true;
        if (this.data.dossier) {
            this.dossierService.updateDossier(this.data.dossier.id, this.dossierForm.value).subscribe((data) => {
                this.isLoadingResults = false;
            }, (error) => {
                this.isLoadingResults = false;
                if (error.status < 300) {
                    this.dialogRef.close();
                    this.snackBar.openSnackBar("Dossier modifier  avec succès", "OK", 3000);
                }
                else {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("Dossier non modifier car Dossier existe deja", "OK", 5000);
                }
            });
        }
        else {
            this.dossierService.addDossier(this.dossierForm.value).subscribe((data) => {
                //console.log(data);
                this.isLoadingResults = false;
            }, (error) => {
                this.isLoadingResults = false;
                if (error.status < 300) {
                    this.dialogRef.close();
                    this.snackBar.openSnackBar("Dossier Ajouter  avec succès", "OK", 3000);
                }
                else {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("Dossier non ajouter car Dossier existe deja", "OK", 5000);
                }
            });
        }
    }
};
AddOrUpdateDossierComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_3__["DossierProjet"] }
];
AddOrUpdateDossierComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-or-update-dossier',
        template: _raw_loader_add_or_update_dossier_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_or_update_dossier_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_3__["DossierProjet"]])
], AddOrUpdateDossierComponent);



/***/ }),

/***/ "4w8Z":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/fichier/fichier.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <h3 class=\"bg-primary p-1\" fxLayoutAlign=\"center center\">Gestionnaire des fichiers du projet de renovation</h3>\r\n\r\n\r\n<mat-card>\r\n  <button mat-button (click)=\"addDossier(null)\"><mat-icon>create_new_folder</mat-icon>ajouter un dossier</button>\r\n  <button mat-button (click)=\"addFichier(null)\"><mat-icon>post_add</mat-icon>ajouter un fichier</button>\r\n</mat-card>\r\n<mat-card>\r\n  <mat-card-header *ngIf=\"fileDossier.length<=0\">\r\n    <button  mwlDroppable mat-button (click)=\"retourRoot()\">\r\n      Racine\r\n     </button>\r\n  </mat-card-header>\r\n  <mat-card-header *ngIf=\"fileDossier.length>0\">\r\n    <button mat-button mwlDroppable (drop)=\"onDrop($event, parent)\" (click)=\"retourRoot()\">\r\n     Racine\r\n    </button>\r\n    <span *ngFor=\"let e of fileDossier\">\r\n      /\r\n      <button mat-button mwlDroppable (drop)=\"onDrop($event, e)\"  (click)=\"selecteRetour(e)\">\r\n        {{e.appellation}}\r\n      </button>\r\n    </span>\r\n  </mat-card-header>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n      <div fxFlex=\"20\" class=\"flex-p\" *ngFor=\"let element of listDossier\"> \r\n\r\n        <div class=\"custom-card\" (drop)=\"onDrop($event, element)\" mwlDroppable mwlDraggable dropData=\"dossier {{element.id}}\">\r\n              <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-icon>folder</mat-icon>\r\n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\r\n              </mat-card-header>\r\n              <mat-menu #menu=\"matMenu\">\r\n                  <a mat-line mat-button  (click)=\"addDossier(element)\">\r\n                    <mat-icon color=\"primary\">edite</mat-icon>\r\n                    <span>Modifier</span>\r\n                  </a><br/>\r\n                  <a mat-line mat-button *ngIf=\"haveGestionDossier==1\" (click)=\"supprimerDossier(element.id)\">\r\n                    <mat-icon color=\"warn\">delete</mat-icon>\r\n                    <span>Supprimer</span>\r\n                  </a><br/>\r\n                  <a mat-line mat-button *ngIf=\"haveGestionUser==1\" (click)=\"authorisationUser(element)\">\r\n                    <mat-icon>personne</mat-icon>\r\n                    <span>Authorisation</span>\r\n                  </a>\r\n                </mat-menu>\r\n                <mat-card-content fxLayoutAlign=\"center center\" class=\"bg-primary p-1\">\r\n                  <button mat-button (click)=\"selecteDossier(element)\">{{element.appellation}}</button>\r\n                </mat-card-content>\r\n        </div>\r\n        \r\n      </div>\r\n      <div fxFlex=\"20\" class=\"flex-p\" *ngFor=\"let element of listFile\"> \r\n\r\n        <div class=\"custom-card\" (drop)=\"onDrop($event, element)\" mwlDroppable mwlDraggable dropData=\"fichier {{element.id}}\">\r\n              <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-icon>file_copy</mat-icon>\r\n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\r\n              </mat-card-header>\r\n              <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item (click)=\"addFichier(element)\">\r\n                    <mat-icon>edite</mat-icon>\r\n                    <span>Modifier</span>\r\n                  </button>\r\n                  <button mat-menu-item color=\"warn\" (click)=\"supprimerFile(element.id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Supprimer</span>\r\n                  </button>\r\n                    <a mat-line mat-button href=\"{{URLFile}}{{element.link.split('/')[2]}}\" target=\"_blank\">\r\n                      <mat-icon>visibility</mat-icon>\r\n                      visualiser\r\n                  </a>\r\n                </mat-menu>\r\n                <mat-card-content fxLayoutAlign=\"center center\" class=\"p-1\">\r\n                  <a mat-line mat-button href=\"{{URLFile}}{{element.link.split('/')[2]}}\" target=\"_blank\">\r\n                    <mat-icon>cloud_download</mat-icon>\r\n                    {{element.nomFile}}\r\n                </a>\r\n                </mat-card-content>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n</mat-card>\r\n\r\n\r\n<!--\r\n<div mwlDraggable dropData=\"foo\" dragActiveClass=\"drag-active\" dragCursor=\"not-allowed\">\r\n  Mouse over me\r\n</div>\r\n<div\r\n  mwlDroppable\r\n  (drop)=\"onDrop($event)\"\r\n  dragOverClass=\"drop-over-active\">\r\n  <span [hidden]=\"droppedData\">Drop here</span>\r\n  <span [hidden]=\"!droppedData\">Item dropped here with data: \"{{ droppedData }}\"!</span>\r\n</div> -->\r\n");

/***/ }),

/***/ "5tfQ":
/*!********************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/fichier.module.ts ***!
  \********************************************************************************/
/*! exports provided: routes, FichierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichierModule", function() { return FichierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fichier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fichier.component */ "p+cG");
/* harmony import */ var _add_or_update_file_add_or_update_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-or-update-file/add-or-update-file.component */ "6Ox8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-dragula */ "9Ejp");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-draggable-droppable */ "3x2b");
/* harmony import */ var _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dossier-fichier.service */ "e01Z");
/* harmony import */ var _add_or_update_dossier_add_or_update_dossier_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-or-update-dossier/add-or-update-dossier.component */ "4pC3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gestion-dossier.service */ "0MNP");
/* harmony import */ var _user_authoriser_user_authoriser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-authoriser/user-authoriser.component */ "LyGI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















const DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].BACK_END.FILEUPLOAD + 'file',
    maxFilesize: 50,
    acceptedFiles: 'image/*,application/pdf',
    addRemoveLinks: true,
};
const routes = [
    { path: '', component: _fichier_component__WEBPACK_IMPORTED_MODULE_2__["FichierComponent"], data: { breadcrumb: 'Fichier' } },
];
let FichierModule = class FichierModule {
};
FichierModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_fichier_component__WEBPACK_IMPORTED_MODULE_2__["FichierComponent"], _add_or_update_file_add_or_update_file_component__WEBPACK_IMPORTED_MODULE_3__["AddOrUpdateFileComponent"], _add_or_update_dossier_add_or_update_dossier_component__WEBPACK_IMPORTED_MODULE_14__["AddOrUpdateDossierComponent"], _user_authoriser_user_authoriser_component__WEBPACK_IMPORTED_MODULE_17__["UserAuthoriserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_12__["DragAndDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_11__["DragulaModule"].forRoot(),
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]
        ],
        providers: [
            _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_13__["DossierProjet"],
            _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_16__["GestionDossier"],
            {
                provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DROPZONE_CONFIG"],
                useValue: DEFAULT_DROPZONE_CONFIG,
            }
        ]
    })
], FichierModule);



/***/ }),

/***/ "6Ox8":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/add-or-update-file/add-or-update-file.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddOrUpdateFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrUpdateFileComponent", function() { return AddOrUpdateFileComponent; });
/* harmony import */ var _raw_loader_add_or_update_file_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-or-update-file.component.html */ "QtWE");
/* harmony import */ var _add_or_update_file_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-or-update-file.component.scss */ "vps2");
/* harmony import */ var _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../login/_helper/localStorage */ "+64y");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../dossier-fichier.service */ "e01Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AddOrUpdateFileComponent = class AddOrUpdateFileComponent {
    constructor(dialogRef, snackBar, dialog, data, tokenService, fb, dossierService) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.tokenService = tokenService;
        this.fb = fb;
        this.dossierService = dossierService;
        this.isLoadingResults = false;
        this.config = {
            clickable: true,
            maxFiles: 1,
            autoReset: null,
            resizeWidth: 300,
            resizeHeight: 300,
            thumbnailHeight: 300,
            thumbnailWidth: 300,
            acceptedFiles: 'image/*,application/pdf',
            errorReset: null,
            cancelReset: null
        };
    }
    get link() { return this.fileForm.get("link"); }
    get nomFile() { return this.fileForm.get("nomFile"); }
    ngOnInit() {
        this.init();
    }
    init() {
        if (this.data.file) {
            console.log(this.data.file);
            this.fileForm = this.fb.group({
                id: this.data.file.id,
                nomFile: this.data.file.nomFile,
                link: this.data.file.link,
                description: this.data.file.description,
                appellation: [this.data.file.appellation],
                dossier: [this.data.dossier],
                projetRenovation: _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__["DemarrageProjetRenovationComponent"].projetRenovation,
                utilisateur: this.user,
            });
        }
        else {
            this.fileForm = this.fb.group({
                nomFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                link: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                description: null,
                appellation: [null],
                dossier: [this.data.dossier],
                projetRenovation: _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__["DemarrageProjetRenovationComponent"].projetRenovation,
                utilisateur: this.user,
            });
        }
    }
    onUploadError(args) {
        this.dropzoneComponentRef.directiveRef.reset();
    }
    resetDropZone() {
        this.dropzoneComponentRef.directiveRef.reset();
        this.link.setValue(null);
        this.nomFile.setValue(null);
    }
    onUploadSuccess(remoteResponse) {
        console.log(remoteResponse);
        this.link.setValue("data:" + remoteResponse[1].contentType + ";base64," + remoteResponse[1].url);
        this.nomFile.setValue(remoteResponse[1].fileName);
    }
    onUploadInit(args) {
    }
    onSubmit() {
        console.log(this.fileForm.value);
        this.isLoadingResults = true;
        if (this.data.file) {
            console.log(this.fileForm.value);
            this.dossierService.updateFile(this.data.file.id, this.fileForm.value).subscribe((data) => {
                this.isLoadingResults = false;
                this.dialogRef.close();
                this.snackBar.openSnackBar("fichier modifier  avec succès", "OK", 3000);
            }, (error) => {
                this.isLoadingResults = false;
                if (error.status < 300) {
                    this.dialogRef.close();
                    this.snackBar.openSnackBar("fichier modifier  avec succès", "OK", 3000);
                }
                else {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("fichier non modifier car fichier existe deja", "OK", 5000);
                }
            });
        }
        else {
            console.log("***********hello************");
            this.dossierService.addFile(this.fileForm.value).subscribe((data) => {
                //console.log(data);
                this.isLoadingResults = false;
            }, (error) => {
                this.isLoadingResults = false;
                if (error.status < 300) {
                    this.dialogRef.close();
                    this.snackBar.openSnackBar("fichier Ajouter  avec succès", "OK", 3000);
                }
                else {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("fichier non ajouter car fichier existe deja", "OK", 5000);
                }
            });
        }
    }
};
AddOrUpdateFileComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_4__["DossierProjet"] }
];
AddOrUpdateFileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-add-or-update-file',
        template: _raw_loader_add_or_update_file_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_or_update_file_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], Object, _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_4__["DossierProjet"]])
], AddOrUpdateFileComponent);



/***/ }),

/***/ "8/JR":
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(/*! atoa */ "8T9/");
var debounce = __webpack_require__(/*! ./debounce */ "Ibf7");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "89NV":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/fichier/add-or-update-dossier/add-or-update-dossier.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3 *ngIf=\"data.tache\">Modifier un selecteDossier</h3>\r\n    <h3 *ngIf=\"!data.tache\">AJouter un dossier</h3>\r\n</div>\r\n<div mat-dialog-content *ngIf=\"!isLoadingResults\">\r\n    <form [formGroup]=\"dossierForm\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>appellation de la tache</mat-label>\r\n                <input matInput #input  placeholder=\"Ex. Nougat\"  formControlName=\"appellation\">\r\n            </mat-form-field>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"dossierForm.value\" >Annuler</button>\r\n        <button mat-raised-button (click)=\"onSubmit()\" [disabled]=\"dossierForm.invalid\" color=\"primary\" >Enregistrer</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "8T9/":
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "9Ejp":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
  \****************************************************************************/
/*! exports provided: DragulaDirective, DragulaService, DragulaModule, dragula, DrakeFactory, Group, EventTypes, MockDrake, MockDrakeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaDirective", function() { return DragulaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaService", function() { return DragulaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaModule", function() { return DragulaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragula", function() { return dragula; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrakeFactory", function() { return DrakeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTypes", function() { return EventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDrake", function() { return MockDrake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDrakeFactory", function() { return MockDrakeFactory; });
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ "YS7c");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

class Group {
    /**
     * @param {?} name
     * @param {?} drake
     * @param {?} options
     */
    constructor(name, drake, options) {
        this.name = name;
        this.drake = drake;
        this.options = options;
        this.initEvents = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EventTypes = {
    Cancel: "cancel",
    Cloned: "cloned",
    Drag: "drag",
    DragEnd: "dragend",
    Drop: "drop",
    Out: "out",
    Over: "over",
    Remove: "remove",
    Shadow: "shadow",
    DropModel: "dropModel",
    RemoveModel: "removeModel",
};
/** @type {?} */
const AllEvents = Object.keys(EventTypes).map(k => /** @type {?} */ (EventTypes[/** @type {?} */ (k)]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const dragula = dragula__WEBPACK_IMPORTED_MODULE_0___default.a || dragula__WEBPACK_IMPORTED_MODULE_0__;
class DrakeFactory {
    /**
     * @param {?=} build
     */
    constructor(build = dragula) {
        this.build = build;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const filterEvent = (eventType, filterDragType, projector) => (input) => {
    return input.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ event, name }) => {
        return event === eventType
            && (filterDragType === undefined || name === filterDragType);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ name, args }) => projector(name, args)));
};
/** @type {?} */
const elContainerSourceProjector = (name, [el, container, source]) => ({ name, el, container, source });
class DragulaService {
    /**
     * @param {?=} drakeFactory
     */
    constructor(drakeFactory = null) {
        this.drakeFactory = drakeFactory;
        this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.drag = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, (name, [el, source]) => ({ name, el, source })));
        this.dragend = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, (name, [el]) => ({ name, el })));
        this.drop = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, (name, [el, target, source, sibling]) => {
            return { name, el, target, source, sibling };
        }));
        this.elContainerSource = (eventType) => (groupName) => this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
        this.cancel = this.elContainerSource(EventTypes.Cancel);
        this.remove = this.elContainerSource(EventTypes.Remove);
        this.shadow = this.elContainerSource(EventTypes.Shadow);
        this.over = this.elContainerSource(EventTypes.Over);
        this.out = this.elContainerSource(EventTypes.Out);
        this.cloned = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, (name, [clone, original, cloneType]) => {
            return { name, clone, original, cloneType };
        }));
        this.dropModel = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, (name, [el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex]) => {
            return { name, el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex };
        }));
        this.removeModel = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, (name, [el, container, source, item, sourceModel, sourceIndex]) => {
            return { name, el, container, source, item, sourceModel, sourceIndex };
        }));
        this.groups = {};
        if (this.drakeFactory === null) {
            this.drakeFactory = new DrakeFactory();
        }
    }
    /**
     * Public mainly for testing purposes. Prefer `createGroup()`.
     * @param {?} group
     * @return {?}
     */
    add(group) {
        /** @type {?} */
        let existingGroup = this.find(group.name);
        if (existingGroup) {
            throw new Error('Group named: "' + group.name + '" already exists.');
        }
        this.groups[group.name] = group;
        this.handleModels(group);
        this.setupEvents(group);
        return group;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    find(name) {
        return this.groups[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    destroy(name) {
        /** @type {?} */
        let group = this.find(name);
        if (!group) {
            return;
        }
        group.drake && group.drake.destroy();
        delete this.groups[name];
    }
    /**
     * Creates a group with the specified name and options.
     *
     * Note: formerly known as `setOptions`
     * @template T
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    createGroup(name, options) {
        return this.add(new Group(name, this.drakeFactory.build([], options), options));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleModels({ name, drake, options }) {
        /** @type {?} */
        let dragElm;
        /** @type {?} */
        let dragIndex;
        /** @type {?} */
        let dropIndex;
        drake.on('remove', (el, container, source) => {
            if (!drake.models) {
                return;
            }
            /** @type {?} */
            let sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel = sourceModel.slice(0);
            /** @type {?} */
            const item = sourceModel.splice(dragIndex, 1)[0];
            // console.log('REMOVE');
            // console.log(sourceModel);
            this.dispatch$.next({
                event: EventTypes.RemoveModel,
                name,
                args: [el, container, source, item, sourceModel, dragIndex]
            });
        });
        drake.on('drag', (el, source) => {
            if (!drake.models) {
                return;
            }
            dragElm = el;
            dragIndex = this.domIndexOf(el, source);
        });
        drake.on('drop', (dropElm, target, source, sibling) => {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = this.domIndexOf(dropElm, target);
            /** @type {?} */
            let sourceModel = drake.models[drake.containers.indexOf(source)];
            /** @type {?} */
            let targetModel = drake.models[drake.containers.indexOf(target)];
            /** @type {?} */
            let item;
            if (target === source) {
                sourceModel = sourceModel.slice(0);
                item = sourceModel.splice(dragIndex, 1)[0];
                sourceModel.splice(dropIndex, 0, item);
                // this was true before we cloned and updated sourceModel,
                // but targetModel still has the old value
                targetModel = sourceModel;
            }
            else {
                /** @type {?} */
                let isCopying = dragElm !== dropElm;
                item = sourceModel[dragIndex];
                if (isCopying) {
                    if (!options.copyItem) {
                        throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                    }
                    item = options.copyItem(item);
                }
                if (!isCopying) {
                    sourceModel = sourceModel.slice(0);
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel = targetModel.slice(0);
                targetModel.splice(dropIndex, 0, item);
                if (isCopying) {
                    try {
                        target.removeChild(dropElm);
                    }
                    catch (e) { }
                }
            }
            this.dispatch$.next({
                event: EventTypes.DropModel,
                name,
                args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
            });
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    setupEvents(group) {
        if (group.initEvents) {
            return;
        }
        group.initEvents = true;
        /** @type {?} */
        const name = group.name;
        /** @type {?} */
        let emitter = (event) => {
            group.drake.on(event, (...args) => {
                this.dispatch$.next({ event, name, args });
            });
        };
        AllEvents.forEach(emitter);
    }
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    domIndexOf(child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    }
}
DragulaService.ɵfac = function DragulaService_Factory(t) { return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DrakeFactory, 8)); };
DragulaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DragulaService, factory: DragulaService.ɵfac });
/** @nocollapse */
DragulaService.ctorParameters = () => [
    { type: DrakeFactory, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: DrakeFactory, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragulaDirective {
    /**
     * @param {?} el
     * @param {?} dragulaService
     */
    constructor(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get container() {
        return this.el && this.el.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.dragula) {
            const { previousValue: prev, currentValue: current, firstChange } = changes.dragula;
            /** @type {?} */
            let hadPreviousValue = !!prev;
            /** @type {?} */
            let hasNewValue = !!current;
            // something -> null       =>  teardown only
            // something -> something  =>  teardown, then setup
            //      null -> something  =>  setup only
            //
            //      null -> null (precluded by fact of change being present)
            if (hadPreviousValue) {
                this.teardown(prev);
            }
            if (hasNewValue) {
                this.setup();
            }
        }
        else if (changes && changes.dragulaModel) {
            const { previousValue: prev, currentValue: current, firstChange } = changes.dragulaModel;
            const { drake } = this.group;
            if (this.dragula && drake) {
                drake.models = drake.models || [];
                /** @type {?} */
                let prevIndex = drake.models.indexOf(prev);
                if (prevIndex !== -1) {
                    // delete the previous
                    drake.models.splice(prevIndex, 1);
                    // maybe insert a new one at the same spot
                    if (!!current) {
                        drake.models.splice(prevIndex, 0, current);
                    }
                }
                else if (!!current) {
                    // no previous one to remove; just push this one.
                    drake.models.push(current);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setup() {
        /** @type {?} */
        let checkModel = (group) => {
            if (this.dragulaModel) {
                if (group.drake.models) {
                    group.drake.models.push(this.dragulaModel);
                }
                else {
                    group.drake.models = [this.dragulaModel];
                }
            }
        };
        /** @type {?} */
        let group = this.dragulaService.find(this.dragula);
        if (!group) {
            /** @type {?} */
            let options = {};
            group = this.dragulaService.createGroup(this.dragula, options);
        }
        // ensure model and container element are pushed
        checkModel(group);
        group.drake.containers.push(this.container);
        this.subscribe(this.dragula);
        this.group = group;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    subscribe(name) {
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.subs.add(this.dragulaService
            .dropModel(name)
            .subscribe(({ source, target, sourceModel, targetModel }) => {
            if (source === this.el.nativeElement) {
                this.dragulaModelChange.emit(sourceModel);
            }
            else if (target === this.el.nativeElement) {
                this.dragulaModelChange.emit(targetModel);
            }
        }));
        this.subs.add(this.dragulaService
            .removeModel(name)
            .subscribe(({ source, sourceModel }) => {
            if (source === this.el.nativeElement) {
                this.dragulaModelChange.emit(sourceModel);
            }
        }));
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    teardown(groupName) {
        if (this.subs) {
            this.subs.unsubscribe();
        }
        /** @type {?} */
        const group = this.dragulaService.find(groupName);
        if (group) {
            /** @type {?} */
            const itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);
            if (itemToRemove !== -1) {
                group.drake.containers.splice(itemToRemove, 1);
            }
            if (this.dragulaModel && group.drake && group.drake.models) {
                /** @type {?} */
                let modelIndex = group.drake.models.indexOf(this.dragulaModel);
                if (modelIndex !== -1) {
                    group.drake.models.splice(modelIndex, 1);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.teardown(this.dragula);
    }
}
DragulaDirective.ɵfac = function DragulaDirective_Factory(t) { return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragulaService)); };
DragulaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DragulaDirective, selectors: [["", "dragula", ""]], inputs: { dragula: "dragula", dragulaModel: "dragulaModel" }, outputs: { dragulaModelChange: "dragulaModelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DragulaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: DragulaService }
];
DragulaDirective.propDecorators = {
    dragula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dragulaModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dragulaModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[dragula]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: DragulaService }]; }, { dragulaModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragula: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragulaModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragulaModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DragulaModule,
            providers: [DragulaService]
        };
    }
}
DragulaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DragulaModule });
DragulaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DragulaModule_Factory(t) { return new (t || DragulaModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragulaModule, { declarations: [DragulaDirective], exports: [DragulaDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [DragulaDirective],
                declarations: [DragulaDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const MockDrakeFactory = new DrakeFactory((containers, options) => {
    return new MockDrake(containers, options);
});
/**
 * You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
class MockDrake {
    /**
     * @param {?=} containers A list of container elements.
     * @param {?=} options These will NOT be used. At all.
     * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
     *               Note, default value is undefined, like a real Drake. Don't change that.
     */
    constructor(containers = [], options = {}, models) {
        this.containers = containers;
        this.options = options;
        this.models = models;
        /* Doesn't represent anything meaningful. */
        this.dragging = false;
        this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    start(item) {
        this.dragging = true;
    }
    /**
     * @return {?}
     */
    end() {
        this.dragging = false;
    }
    /**
     * @param {?=} revert
     * @return {?}
     */
    cancel(revert) {
        this.dragging = false;
    }
    /**
     * @return {?}
     */
    remove() {
        this.dragging = false;
    }
    /**
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    on(event, callback) {
        this.subs.add(this.emitter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ eventType }) => eventType === event))
            .subscribe(({ args }) => {
            callback(...args);
        }));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.subs.unsubscribe();
    }
    /**
     * This is the most useful method. You can use it to manually fire events that would normally
     * be fired by a real drake.
     *
     * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
     * DragulaService uses to implement [dragulaModel].
     *
     * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
     *
     * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
     * @param {?} eventType
     * @param {...?} args
     * @return {?}
     */
    emit(eventType, ...args) {
        this.emitter$.next({ eventType, args });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEuanMiLCJzb3VyY2VzIjpbIm5nMi1kcmFndWxhL0dyb3VwLnRzIiwibmcyLWRyYWd1bGEvRXZlbnRUeXBlcy50cyIsIm5nMi1kcmFndWxhL0RyYWtlRmFjdG9yeS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5zZXJ2aWNlLnRzIiwibmcyLWRyYWd1bGEvY29tcG9uZW50cy9kcmFndWxhLmRpcmVjdGl2ZS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5tb2R1bGUudHMiLCJuZzItZHJhZ3VsYS9Nb2NrRHJha2UudHMiXSwibmFtZXMiOlsiKC8qKiBAdHlwZSB7P30gKi8gKGRyYWd1bGFFeHB0KSkuZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTtBQUFjO0FBQ2I7QUFBdUI7QUFDZDtBQUNXO0FBQ2pCLElBRkYsWUFDUyxNQUNBLE9BQ0E7QUFBVyxRQUZYLFNBQUksR0FBSixJQUFJO0FBQUUsUUFDTixVQUFLLEdBQUwsS0FBSztBQUFFLFFBQ1AsWUFBTyxHQUFQLE9BQU87QUFBRSwwQkFKVyxLQUFLO0FBQ3BDLEtBSU07QUFDTixDQUFDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FBQUk7QUFBc0I7QUFBcUIsSUNWM0gsUUFBUyxRQUFRO0FBQ3JCLElBQUksUUFBUyxRQUFRO0FBQ3JCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksU0FBVSxTQUFTO0FBQ3ZCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksS0FBTSxLQUFLO0FBQ2YsSUFBSSxNQUFPLE1BQU07QUFDakIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxXQUFZLFdBQVc7QUFDM0IsSUFBSSxhQUFjLGFBQWE7QUFDL0I7QUFFQTtBQUFBLE1BQWEsU0FBUyxHQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFJLFVBQVUsbUJB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QUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFDM0MsS0FBRztBQUNILENBQ0M7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBeUM7QUFBSTtBQUFDO0FBQUk7QUFBa0M7QUFBeUM7QUFBSTtBQUFDOztBTjlGQSxBQUVBLEFBQ0EsQUFDQSxBQUNBLEFBRkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBSkEsQUFBQSxBQUtBLEFBQ0EsQUNUQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ1pBLEFBQ0EsQUFBQSxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNUQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBcUZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTlFQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUF4TkEsQUFBQSxBQXZCQSxBQUFBLEFBMEdBLEFBQUEsQUNoSEEsQUFtQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVRBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBaElBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFOQSxBQUFBLEFBQ0EsQUFBQSxBQU9BLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQ1ZBLEFBU0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNQQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQWtCQSxBQU9BLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFGQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBc0JBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUEzQkEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFhQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSBcIi4vRHJha2VXaXRoTW9kZWxzXCI7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gXCIuL0RyYWd1bGFPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIHB1YmxpYyBpbml0RXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRyYWtlOiBEcmFrZVdpdGhNb2RlbHMsXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zXG4gICkge31cbn1cbiIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIENhbmNlbCA9IFwiY2FuY2VsXCIsXG4gICAgQ2xvbmVkID0gXCJjbG9uZWRcIixcbiAgICBEcmFnID0gXCJkcmFnXCIsXG4gICAgRHJhZ0VuZCA9IFwiZHJhZ2VuZFwiLFxuICAgIERyb3AgPSBcImRyb3BcIixcbiAgICBPdXQgPSBcIm91dFwiLFxuICAgIE92ZXIgPSBcIm92ZXJcIixcbiAgICBSZW1vdmUgPSBcInJlbW92ZVwiLFxuICAgIFNoYWRvdyA9IFwic2hhZG93XCIsXG4gICAgRHJvcE1vZGVsID0gXCJkcm9wTW9kZWxcIixcbiAgICBSZW1vdmVNb2RlbCA9IFwicmVtb3ZlTW9kZWxcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFsbEV2ZW50czogRXZlbnRUeXBlc1tdID0gT2JqZWN0LmtleXMoRXZlbnRUeXBlcykubWFwKGsgPT4gRXZlbnRUeXBlc1trIGFzIGFueV0gYXMgRXZlbnRUeXBlcyk7XG5cbiIsImltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgKiBhcyBkcmFndWxhRXhwdCBmcm9tICdkcmFndWxhJztcbmV4cG9ydCBjb25zdCBkcmFndWxhOiAoY29udGFpbmVycz86IGFueSwgb3B0aW9ucz86IGFueSkgPT4gYW55ID0gKGRyYWd1bGFFeHB0IGFzIGFueSkuZGVmYXVsdCB8fCBkcmFndWxhRXhwdDtcblxuZXhwb3J0IHR5cGUgRHJha2VCdWlsZGVyID0gKGNvbnRhaW5lcnM6IGFueVtdLCBvcHRpb25zOiBEcmFndWxhT3B0aW9ucykgPT4gRHJha2VXaXRoTW9kZWxzO1xuXG5leHBvcnQgY2xhc3MgRHJha2VGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBidWlsZDogRHJha2VCdWlsZGVyID0gZHJhZ3VsYSkge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL0dyb3VwJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzLCBBbGxFdmVudHMgfSBmcm9tICcuLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWtlRmFjdG9yeSB9IGZyb20gJy4uL0RyYWtlRmFjdG9yeSc7XG5cbnR5cGUgRmlsdGVyUHJvamVjdG9yPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZzsgfT4gPSAobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT4gVDtcbnR5cGUgRGlzcGF0Y2ggPSB7IGV2ZW50OiBFdmVudFR5cGVzOyBuYW1lOiBzdHJpbmc7IGFyZ3M6IGFueVtdOyB9O1xuXG5jb25zdCBmaWx0ZXJFdmVudCA9IDxUIGV4dGVuZHMgeyBuYW1lOiBzdHJpbmc7IH0+KFxuICBldmVudFR5cGU6IEV2ZW50VHlwZXMsXG4gIGZpbHRlckRyYWdUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHByb2plY3RvcjogRmlsdGVyUHJvamVjdG9yPFQ+XG4pID0+IChpbnB1dDogT2JzZXJ2YWJsZTxEaXNwYXRjaD4pOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgcmV0dXJuIGlucHV0LnBpcGUoXG4gICAgZmlsdGVyKCh7IGV2ZW50LCBuYW1lIH0pID0+IHtcbiAgICAgIHJldHVybiBldmVudCA9PT0gZXZlbnRUeXBlXG4gICAgICAgICAgJiYgKGZpbHRlckRyYWdUeXBlID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gZmlsdGVyRHJhZ1R5cGUpO1xuICAgIH0pLFxuICAgIG1hcCgoeyBuYW1lLCBhcmdzIH0pID0+IHByb2plY3RvcihuYW1lLCBhcmdzKSlcbiAgKTtcbn1cblxuY29uc3QgZWxDb250YWluZXJTb3VyY2VQcm9qZWN0b3IgPVxuICAobmFtZTogc3RyaW5nLCBbZWwsIGNvbnRhaW5lciwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PlxuICAgICh7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSB9KTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWd1bGFTZXJ2aWNlIHtcblxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYSNkcmFrZW9uLWV2ZW50cyAqL1xuXG4gIHByaXZhdGUgZGlzcGF0Y2gkID0gbmV3IFN1YmplY3Q8RGlzcGF0Y2g+KCk7XG5cbiAgcHVibGljIGRyYWcgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5EcmFnLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtlbCwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnRdKSA9PiAoeyBuYW1lLCBlbCwgc291cmNlIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcmFnZW5kID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJhZ0VuZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbZWxdOiBbRWxlbWVudF0pID0+ICh7IG5hbWUsIGVsIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcm9wID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJvcCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZ1xuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZyB9O1xuICAgICAgfSlcbiAgKTtcblxuICBwcml2YXRlIGVsQ29udGFpbmVyU291cmNlID1cbiAgICAoZXZlbnRUeXBlOiBFdmVudFR5cGVzKSA9PlxuICAgIChncm91cE5hbWU/OiBzdHJpbmcpID0+XG4gICAgdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICAgIGZpbHRlckV2ZW50KGV2ZW50VHlwZSwgZ3JvdXBOYW1lLCBlbENvbnRhaW5lclNvdXJjZVByb2plY3RvcilcbiAgICApO1xuXG4gIHB1YmxpYyBjYW5jZWwgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuQ2FuY2VsKTtcbiAgcHVibGljIHJlbW92ZSA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5SZW1vdmUpO1xuICBwdWJsaWMgc2hhZG93ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLlNoYWRvdyk7XG4gIHB1YmxpYyBvdmVyID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk92ZXIpO1xuICBwdWJsaWMgb3V0ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk91dCk7XG5cbiAgcHVibGljIGNsb25lZCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkNsb25lZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlXG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgJ21pcnJvcicgfCAnY29weSddKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlIH1cbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIGRyb3BNb2RlbCA9IDxUID0gYW55Pihncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXhcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBULCBUW10sIFRbXSwgbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXggfVxuICAgICAgfSlcbiAgKTtcblxuICBwdWJsaWMgcmVtb3ZlTW9kZWwgPSA8VCA9IGFueT4oZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5SZW1vdmVNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4XG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgVCwgVFtdLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4IH1cbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBncm91cHM6IHsgW2s6IHN0cmluZ106IEdyb3VwIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvciAoQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmFrZUZhY3Rvcnk6IERyYWtlRmFjdG9yeSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5kcmFrZUZhY3RvcnkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQdWJsaWMgbWFpbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLiBQcmVmZXIgYGNyZWF0ZUdyb3VwKClgLiAqL1xuICBwdWJsaWMgYWRkKGdyb3VwOiBHcm91cCk6IEdyb3VwIHtcbiAgICBsZXQgZXhpc3RpbmdHcm91cCA9IHRoaXMuZmluZChncm91cC5uYW1lKTtcbiAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcm91cCBuYW1lZDogXCInICsgZ3JvdXAubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICB9XG4gICAgdGhpcy5ncm91cHNbZ3JvdXAubmFtZV0gPSBncm91cDtcbiAgICB0aGlzLmhhbmRsZU1vZGVscyhncm91cCk7XG4gICAgdGhpcy5zZXR1cEV2ZW50cyhncm91cCk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgcHVibGljIGZpbmQobmFtZTogc3RyaW5nKTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBncm91cCA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwLmRyYWtlICYmIGdyb3VwLmRyYWtlLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5ncm91cHNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdyb3VwIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBvcHRpb25zLlxuICAgKlxuICAgKiBOb3RlOiBmb3JtZXJseSBrbm93biBhcyBgc2V0T3B0aW9uc2BcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVHcm91cDxUID0gYW55PihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zPFQ+KTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmFkZChuZXcgR3JvdXAoXG4gICAgICBuYW1lLFxuICAgICAgdGhpcy5kcmFrZUZhY3RvcnkuYnVpbGQoW10sIG9wdGlvbnMpLFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb2RlbHMoeyBuYW1lLCBkcmFrZSwgb3B0aW9ucyB9OiBHcm91cCk6IHZvaWQge1xuICAgIGxldCBkcmFnRWxtOiBhbnk7XG4gICAgbGV0IGRyYWdJbmRleDogbnVtYmVyO1xuICAgIGxldCBkcm9wSW5kZXg6IG51bWJlcjtcbiAgICBkcmFrZS5vbigncmVtb3ZlJywgKGVsOiBhbnksIGNvbnRhaW5lcjogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMCk7IC8vIGNsb25lIGl0XG4gICAgICBjb25zdCBpdGVtID0gc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF07XG4gICAgICAvLyBjb25zb2xlLmxvZygnUkVNT1ZFJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHtcbiAgICAgICAgZXZlbnQ6IEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFyZ3M6IFsgZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgZHJhZ0luZGV4IF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcmFnJywgKGVsOiBhbnksIHNvdXJjZTogYW55KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbTogYW55LCB0YXJnZXQ6IEVsZW1lbnQsIHNvdXJjZTogRWxlbWVudCwgc2libGluZz86IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcEluZGV4ID0gdGhpcy5kb21JbmRleE9mKGRyb3BFbG0sIHRhcmdldCk7XG4gICAgICBsZXQgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEUk9QJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICBsZXQgaXRlbTogYW55O1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMClcbiAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgLy8gdGhpcyB3YXMgdHJ1ZSBiZWZvcmUgd2UgY2xvbmVkIGFuZCB1cGRhdGVkIHNvdXJjZU1vZGVsLFxuICAgICAgICAvLyBidXQgdGFyZ2V0TW9kZWwgc3RpbGwgaGFzIHRoZSBvbGQgdmFsdWVcbiAgICAgICAgdGFyZ2V0TW9kZWwgPSBzb3VyY2VNb2RlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpc0NvcHlpbmcgPSBkcmFnRWxtICE9PSBkcm9wRWxtO1xuICAgICAgICBpdGVtID0gc291cmNlTW9kZWxbZHJhZ0luZGV4XTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jb3B5SXRlbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWYgeW91IGhhdmUgZW5hYmxlZCBgY29weWAgb24gYSBncm91cCwgeW91IG11c3QgcHJvdmlkZSBhIGBjb3B5SXRlbWAgZnVuY3Rpb24uXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0gPSBvcHRpb25zLmNvcHlJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0NvcHlpbmcpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApXG4gICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0TW9kZWwgPSB0YXJnZXRNb2RlbC5zbGljZSgwKVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgIGV2ZW50OiBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYXJnczogWyBkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBkcmFnSW5kZXgsIGRyb3BJbmRleCBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBFdmVudHMoZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwLmluaXRFdmVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JvdXAuaW5pdEV2ZW50cyA9IHRydWU7XG4gICAgY29uc3QgbmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG4gICAgbGV0IGVtaXR0ZXIgPSAoZXZlbnQ6IEV2ZW50VHlwZXMpID0+IHtcbiAgICAgIGdyb3VwLmRyYWtlLm9uKGV2ZW50LCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7IGV2ZW50LCBuYW1lLCBhcmdzIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBBbGxFdmVudHMuZm9yRWFjaChlbWl0dGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9tSW5kZXhPZihjaGlsZDogYW55LCBwYXJlbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9kcmFndWxhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi4vRHJha2VXaXRoTW9kZWxzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9Hcm91cCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RyYWd1bGFdJ30pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGE6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGFNb2RlbDogYW55W107XG4gIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ3VsYU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCBjb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcmFndWxhU2VydmljZTogRHJhZ3VsYVNlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7ZHJhZ3VsYT86IFNpbXBsZUNoYW5nZSwgZHJhZ3VsYU1vZGVsPzogU2ltcGxlQ2hhbmdlfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYSkge1xuICAgICAgY29uc3QgeyBwcmV2aW91c1ZhbHVlOiBwcmV2LCBjdXJyZW50VmFsdWU6IGN1cnJlbnQsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLmRyYWd1bGE7XG4gICAgICBsZXQgaGFkUHJldmlvdXNWYWx1ZSA9ICEhcHJldjtcbiAgICAgIGxldCBoYXNOZXdWYWx1ZSA9ICEhY3VycmVudDtcbiAgICAgIC8vIHNvbWV0aGluZyAtPiBudWxsICAgICAgID0+ICB0ZWFyZG93biBvbmx5XG4gICAgICAvLyBzb21ldGhpbmcgLT4gc29tZXRoaW5nICA9PiAgdGVhcmRvd24sIHRoZW4gc2V0dXBcbiAgICAgIC8vICAgICAgbnVsbCAtPiBzb21ldGhpbmcgID0+ICBzZXR1cCBvbmx5XG4gICAgICAvL1xuICAgICAgLy8gICAgICBudWxsIC0+IG51bGwgKHByZWNsdWRlZCBieSBmYWN0IG9mIGNoYW5nZSBiZWluZyBwcmVzZW50KVxuICAgICAgaWYgKGhhZFByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZWFyZG93bihwcmV2KTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNOZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgb25seSBydW5zIHdoZW4geW91J3JlIG5vdCBjaGFuZ2luZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgLy8gYmVjYXVzZSBpZiB5b3UncmUgY2hhbmdpbmcgdGhlIGdyb3VwIG5hbWUsIHlvdSdsbCBiZSBkb2luZyBzZXR1cCBvciB0ZWFyZG93blxuICAgICAgLy8gaXQgYWxzbyBvbmx5IHJ1bnMgaWYgdGhlcmUgaXMgYSBncm91cCBuYW1lIHRvIGF0dGFjaCB0by5cbiAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhTW9kZWw7XG4gICAgICBjb25zdCB7IGRyYWtlIH0gPSB0aGlzLmdyb3VwO1xuICAgICAgaWYgKHRoaXMuZHJhZ3VsYSAmJiBkcmFrZSkge1xuICAgICAgICBkcmFrZS5tb2RlbHMgPSBkcmFrZS5tb2RlbHMgfHwgW107XG4gICAgICAgIGxldCBwcmV2SW5kZXggPSBkcmFrZS5tb2RlbHMuaW5kZXhPZihwcmV2KTtcbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBkZWxldGUgdGhlIHByZXZpb3VzXG4gICAgICAgICAgZHJha2UubW9kZWxzLnNwbGljZShwcmV2SW5kZXgsIDEpO1xuICAgICAgICAgIC8vIG1heWJlIGluc2VydCBhIG5ldyBvbmUgYXQgdGhlIHNhbWUgc3BvdFxuICAgICAgICAgIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAwLCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISFjdXJyZW50KSB7XG4gICAgICAgICAgLy8gbm8gcHJldmlvdXMgb25lIHRvIHJlbW92ZTsganVzdCBwdXNoIHRoaXMgb25lLlxuICAgICAgICAgIGRyYWtlLm1vZGVscy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbCBuZ09uSW5pdCAnc2V0dXAnIGJlY2F1c2Ugd2Ugd2FudCB0byBjYWxsIGl0IGluIG5nT25DaGFuZ2VzXG4gIC8vIGFuZCBpdCB3b3VsZCBvdGhlcndpc2UgcnVuIHR3aWNlXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICBsZXQgY2hlY2tNb2RlbCA9IChncm91cDogR3JvdXApID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgICBpZiAoZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgZ3JvdXAuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscyA9IFt0aGlzLmRyYWd1bGFNb2RlbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZmluZCBvciBjcmVhdGUgYSBncm91cFxuICAgIGxldCBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmRyYWd1bGEpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuY3JlYXRlR3JvdXAodGhpcy5kcmFndWxhLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgbW9kZWwgYW5kIGNvbnRhaW5lciBlbGVtZW50IGFyZSBwdXNoZWRcbiAgICBjaGVja01vZGVsKGdyb3VwKTtcbiAgICBncm91cC5kcmFrZS5jb250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuZHJhZ3VsYSk7XG5cbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gIH1cblxuICBwdWJsaWMgc3Vic2NyaWJlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgdGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgLmRyb3BNb2RlbChuYW1lKVxuICAgICAgLnN1YnNjcmliZSgoeyBzb3VyY2UsIHRhcmdldCwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsIH0pID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHRhcmdldE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlXG4gICAgICAucmVtb3ZlTW9kZWwobmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc291cmNlLCBzb3VyY2VNb2RlbCB9KSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQoc291cmNlTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdGVhcmRvd24oZ3JvdXBOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQoZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGl0ZW1Ub1JlbW92ZSAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5zcGxpY2UoaXRlbVRvUmVtb3ZlLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCAmJiBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgbGV0IG1vZGVsSW5kZXggPSBncm91cC5kcmFrZS5tb2RlbHMuaW5kZXhPZih0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICAgIGlmIChtb2RlbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZWFyZG93bih0aGlzLmRyYWd1bGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFndWxhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJy4vZHJhZ3VsYS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0RyYWd1bGFEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRHJhZ3VsYU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RyYWd1bGFTZXJ2aWNlXVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZUZhY3RvcnkgfSBmcm9tICcuL0RyYWtlRmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBNb2NrRHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgoY29udGFpbmVycywgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gbmV3IE1vY2tEcmFrZShjb250YWluZXJzLCBvcHRpb25zKTtcbn0pO1xuXG4vKiogWW91IGNhbiB1c2UgTW9ja0RyYWtlIHRvIHNpbXVsYXRlIERyYWtlIGV2ZW50cy5cbiAqXG4gKiBUaGUgdGhyZWUgbWV0aG9kcyB0aGF0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGFyZSBgb24oZXZlbnQsIGxpc3RlbmVyKWAsXG4gKiBgZGVzdHJveSgpYCwgYW5kIGEgbmV3IG1ldGhvZCwgYGVtaXQoKWAuIFVzZSBgZW1pdCgpYCB0byBtYW51YWxseSBlbWl0IERyYWtlXG4gKiBldmVudHMsIGFuZCBpZiB5b3UgaW5qZWN0ZWQgTW9ja0RyYWtlIHByb3Blcmx5IHdpdGggTW9ja0RyYWtlRmFjdG9yeSBvclxuICogbW9ja2VkIHRoZSBEcmFndWxhU2VydmljZS5maW5kKCkgbWV0aG9kLCB0aGVuIHlvdSBjYW4gbWFrZSBuZzItZHJhZ3VsYSB0aGlua1xuICogZHJhZ3MgYW5kIGRyb3BzIGFyZSBoYXBwZW5pbmcuXG4gKlxuICogQ2F2ZWF0czpcbiAqXG4gKiAxLiBZT1UgTVVTVCBNQUtFIFRIRSBET00gQ0hBTkdFUyBZT1VSU0VMRi5cbiAqIDIuIFJFUEVBVDogWU9VIE1VU1QgTUFLRSBUSEUgRE9NIENIQU5HRVMgWU9VUlNFTEYuXG4gKiAgICBUaGF0IG1lYW5zIGBzb3VyY2UucmVtb3ZlQ2hpbGQoZWwpYCwgYW5kIGB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsKWAuXG4gKiAzLiBOb25lIG9mIHRoZSBvdGhlciBtZXRob2RzIGRvIGFueXRoaW5nLlxuICogICAgVGhhdCdzIG9rLCBiZWNhdXNlIG5nMi1kcmFndWxhIGRvZXNuJ3QgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrRHJha2UgaW1wbGVtZW50cyBEcmFrZVdpdGhNb2RlbHMge1xuICAvKipcbiAgICogQHBhcmFtIGNvbnRhaW5lcnMgQSBsaXN0IG9mIGNvbnRhaW5lciBlbGVtZW50cy5cbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlc2Ugd2lsbCBOT1QgYmUgdXNlZC4gQXQgYWxsLlxuICAgKiBAcGFyYW0gbW9kZWxzIE5vbnN0YW5kYXJkLCBidXQgdXNlZnVsIGZvciB0ZXN0aW5nIHVzaW5nIGBuZXcgTW9ja0RyYWtlKClgIGRpcmVjdGx5LlxuICAgKiAgICAgICAgICAgICAgIE5vdGUsIGRlZmF1bHQgdmFsdWUgaXMgdW5kZWZpbmVkLCBsaWtlIGEgcmVhbCBEcmFrZS4gRG9uJ3QgY2hhbmdlIHRoYXQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29udGFpbmVyczogRWxlbWVudFtdID0gW10sXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zID0ge30sXG4gICAgcHVibGljIG1vZGVscz86IGFueVtdW11cbiAgKSB7fVxuXG4gIC8qIERvZXNuJ3QgcmVwcmVzZW50IGFueXRoaW5nIG1lYW5pbmdmdWwuICovXG4gIGRyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgc3RhcnQoaXRlbTogRWxlbWVudCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgZW5kKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIGNhbmNlbChyZXZlcnQ6IGJvb2xlYW4pOiBhbnk7XG4gIGNhbmNlbCgpOiBhbnk7XG4gIGNhbmNlbChyZXZlcnQ/OiBhbnkpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgcmVtb3ZlKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQmFzaWMgYnV0IGZ1bGx5IGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciBzaGltXG4gIHByaXZhdGUgZW1pdHRlciQgPSBuZXcgU3ViamVjdDx7IGV2ZW50VHlwZTogRXZlbnRUeXBlcywgYXJnczogYW55W10gfT4oKTtcblxuICBwcml2YXRlIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZW1pdHRlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgZXZlbnRUeXBlIH0pID0+IGV2ZW50VHlwZSA9PT0gZXZlbnQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IGFyZ3MgfSkgPT4ge1xuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtb3N0IHVzZWZ1bCBtZXRob2QuIFlvdSBjYW4gdXNlIGl0IHRvIG1hbnVhbGx5IGZpcmUgZXZlbnRzIHRoYXQgd291bGQgbm9ybWFsbHlcbiAgICogYmUgZmlyZWQgYnkgYSByZWFsIGRyYWtlLlxuICAgKlxuICAgKiBZb3UncmUgbGlrZWx5IG1vc3QgaW50ZXJlc3RlZCBpbiBmaXJpbmcgYGRyYWdgLCBgcmVtb3ZlYCBhbmQgYGRyb3BgLCB0aGUgdGhyZWUgZXZlbnRzXG4gICAqIERyYWd1bGFTZXJ2aWNlIHVzZXMgdG8gaW1wbGVtZW50IFtkcmFndWxhTW9kZWxdLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEjZHJha2Vvbi1ldmVudHMgZm9yIHdoYXQgeW91IHNob3VsZCBlbWl0IChhbmQgaW4gd2hhdCBvcmRlcikuXG4gICAqXG4gICAqIChOb3RlIGFsc28sIGZpcmluZyBkcm9wTW9kZWwgYW5kIHJlbW92ZU1vZGVsIHdvbid0IHdvcmsuIFlvdSB3b3VsZCBoYXZlIHRvIG1vY2sgRHJhZ3VsYVNlcnZpY2UgZm9yIHRoYXQuKVxuICAgKi9cbiAgZW1pdChldmVudFR5cGU6IEV2ZW50VHlwZXMsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy5lbWl0dGVyJC5uZXh0KHsgZXZlbnRUeXBlLCBhcmdzIH0pXG4gIH1cblxufVxuIl19

/***/ }),

/***/ "Gjsa":
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ }),

/***/ "Ibf7":
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(/*! ticky */ "Gjsa");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "LyGI":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/user-authoriser/user-authoriser.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UserAuthoriserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthoriserComponent", function() { return UserAuthoriserComponent; });
/* harmony import */ var _raw_loader_user_authoriser_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-authoriser.component.html */ "qtd6");
/* harmony import */ var _user_authoriser_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-authoriser.component.scss */ "WFGx");
/* harmony import */ var _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../gestion-dossier.service */ "0MNP");
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











let UserAuthoriserComponent = class UserAuthoriserComponent {
    constructor(dialogRef, snackBar, confirm, dialog, data, fb, dossierService) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.confirm = confirm;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.dossierService = dossierService;
        this.isLoadingResults = false;
        this.listeUser = [];
        this.userAffect = [];
        this.displayedColumns = ['id', 'libelle', 'roles', 'action'];
        this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.userAffect);
    }
    ngOnInit() {
        this.initDonner();
        this.init();
    }
    init() {
        this.userForm = this.fb.group({
            utilisateurs: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    initDonner() {
        this.isLoadingResults = true;
        this.dossierService.getUser(this.data.dossier.projetRenovation.id).subscribe((data) => {
            this.listeUser = data;
            console.log(this.listeUser);
            this.dossierService.UserDossier(this.data.dossier.id).subscribe((userA) => {
                this.userAffect = userA;
                this.userAffect.forEach((element, index) => {
                    this.listeUser.forEach((user, idUser) => {
                        if (element.id == user.id) {
                            this.listeUser.splice(idUser, 1);
                        }
                    });
                });
                this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.userAffect);
                console.log(this.userAffect);
                this.dataSources.paginator = this.paginator;
                this.dataSources.sort = this.sort;
                this.isLoadingResults = false;
            });
        });
    }
    onSubmit() {
        console.log(this.userForm.get('utilisateurs').value);
        console.log(this.data.dossier.id);
        if (this.userForm.valid) {
            this.isLoadingResults = true;
            this.dossierService.authoriserUser(this.data.dossier.id, this.userForm.get('utilisateurs').value).subscribe((data) => {
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
                this.dossierService.supprimerUser(this.data.dossier.id, index).subscribe(() => {
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
UserAuthoriserComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_10__["AppConfirmService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_2__["GestionDossier"] }
];
UserAuthoriserComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
};
UserAuthoriserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-authoriser',
        template: _raw_loader_user_authoriser_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_authoriser_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_10__["AppConfirmService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_2__["GestionDossier"]])
], UserAuthoriserComponent);



/***/ }),

/***/ "PzH3":
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ "bBst");
var eventmap = __webpack_require__(/*! ./eventmap */ "Ys8N");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}


/***/ }),

/***/ "QtWE":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/fichier/add-or-update-file/add-or-update-file.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div> -->\r\n\r\n<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3 *ngIf=\"data.file\">Modifier un fichier</h3>\r\n    <h3 *ngIf=\"!data.file\">AJouter un fichier</h3>\r\n</div>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"fileForm\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Description du fichier</mat-label>\r\n                <textarea matInput formControlName=\"description\"></textarea>\r\n            </mat-form-field>\r\n            <div *ngIf=\"!data.file\" class=\"content-container\" class=\"w-100\">\r\n                    <dropzone class=\"dropzone-container\" [fxFlex]=\"100\" [config]=\"config\" [message]=\"'Cliquez ou faites glisser la pièce ici jointe'\" (init)=\"onUploadInit($event)\" (error)=\"onUploadError($event)\" (success)=\"onUploadSuccess($event)\">\r\n                    </dropzone>\r\n            </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"fileForm.value\" >Annuler</button>\r\n        <button mat-raised-button (click)=\"onSubmit()\" [disabled]=\"fileForm.invalid\" color=\"primary\" >Enregistrer</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "WFGx":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/user-authoriser/user-authoriser.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenu-body {\n  height: 200px;\n}\n\n.example-container {\n  width: 100%;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.recherche {\n  width: 80%;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky-border-elem-right {\n  border-left: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky-border-elem-left {\n  border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXItYXV0aG9yaXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGFBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtBQUhKOztBQU1FO0VBQ0UsVUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7QUFISjs7QUFNRTtFQUNFLCtCQUFBO0FBSEoiLCJmaWxlIjoidXNlci1hdXRob3Jpc2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnUtYm9keXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZWNoZXJjaGV7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLXJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZS1zdGlja3ktYm9yZGVyLWVsZW0tbGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "X/h+":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/add-or-update-dossier/add-or-update-dossier.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3ItdXBkYXRlLWRvc3NpZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "YS7c":
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ "8/JR");
var crossvent = __webpack_require__(/*! crossvent */ "PzH3");
var classes = __webpack_require__(/*! ./classes */ "n6yW");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if ((e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0)) &&
      (e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0))) {
      return;
    }

    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;


/***/ }),

/***/ "Ys8N":
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;


/***/ }),

/***/ "bBst":
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}


/***/ }),

/***/ "e01Z":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/dossier-fichier.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: DossierProjet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DossierProjet", function() { return DossierProjet; });
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



let DossierProjet = class DossierProjet {
    constructor(http) {
        this.http = http;
    }
    getAllDocumentRacine(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET + "" + id);
    }
    addDossier(dossier) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET, dossier);
    }
    findDossierByI(idDossier) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET + "findById/" + idDossier);
    }
    updateDossier(id, dossier) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.DOSSIER_PROJET + "" + id, dossier);
    }
    addFile(file) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.FICHIER_PROJET, file);
    }
    updateFile(id, file) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.FICHIER_PROJET + "" + id, file);
    }
    deleteFile(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.FICHIER_PROJET + "" + id);
    }
};
DossierProjet.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DossierProjet = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DossierProjet);



/***/ }),

/***/ "iyk9":
/*!*************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/fichier.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmljaGllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJmaWNoaWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "n6yW":
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "p+cG":
/*!***********************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/fichier.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FichierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichierComponent", function() { return FichierComponent; });
/* harmony import */ var _raw_loader_fichier_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./fichier.component.html */ "4w8Z");
/* harmony import */ var _fichier_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fichier.component.scss */ "iyk9");
/* harmony import */ var _user_authoriser_user_authoriser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-authoriser/user-authoriser.component */ "LyGI");
/* harmony import */ var _add_or_update_dossier_add_or_update_dossier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-or-update-dossier/add-or-update-dossier.component */ "4pC3");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dossier-fichier.service */ "e01Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_or_update_file_add_or_update_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-or-update-file/add-or-update-file.component */ "6Ox8");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gestion-dossier.service */ "0MNP");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
/* harmony import */ var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/ProjetRenovation.localStorage */ "Geum");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let FichierComponent = class FichierComponent {
    constructor(dossierService, snackBar, confirm, dialog, gestionDossier, tokenElement) {
        this.dossierService = dossierService;
        this.snackBar = snackBar;
        this.confirm = confirm;
        this.dialog = dialog;
        this.gestionDossier = gestionDossier;
        this.tokenElement = tokenElement;
        this.droppedData = '';
        this.isLoading = false;
        this.parendId = 0;
        this.haveGestionUser = 0;
        this.haveGestionDossier = 0;
        this.parent = {
            id: 0,
            Appellation: 'Racine',
            dossierParent: 0,
            projetRenovation: null,
            fichiers: null,
            utilisateursAutoriser: null,
        };
        this.fileDossier = [];
        this.parentId = [];
        this.URLFile = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].BACK_END.FILEUPLOAD + 'download/';
        this.projet = _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_4__["DemarrageProjetRenovationComponent"].projetRenovation;
        this.haveGestionDossier = parseInt(tokenElement.getGestionDossier());
        this.haveGestionUser = parseFloat(tokenElement.getGestionUser());
    }
    ngOnInit() {
        if (this.parendId == 0) {
            this.fileDossier = [];
            this.parendId = 0;
            this.dossierService.getAllDocumentRacine(this.projet.id).subscribe((data) => {
                this.listeDocument = data;
                this.listDossier = data.dossiers;
                this.listFile = data.fichiers;
                this.parent.id = this.listeDocument.id;
                console.log(this.parent);
            });
        }
        else {
            this.dossierService.findDossierByI(this.parendId).subscribe((data) => {
                this.listDossier = data.dossiers;
                this.listFile = data.fichiers;
                console.log(data);
            });
        }
    }
    addDossier(dossier) {
        console.log(dossier);
        const dialogRef = this.dialog.open(_add_or_update_dossier_add_or_update_dossier_component__WEBPACK_IMPORTED_MODULE_3__["AddOrUpdateDossierComponent"], {
            width: '600px',
            data: { dossier: dossier, parentId: this.parendId },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
                this.ngOnInit();
            }
        });
    }
    authorisationUser(dossier) {
        const dialogRef = this.dialog.open(_user_authoriser_user_authoriser_component__WEBPACK_IMPORTED_MODULE_2__["UserAuthoriserComponent"], {
            width: '600px',
            data: { dossier: dossier },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    addFichier(file) {
        this.isLoading = true;
        console.log(file);
        const dialogRef = this.dialog.open(_add_or_update_file_add_or_update_file_component__WEBPACK_IMPORTED_MODULE_8__["AddOrUpdateFileComponent"], {
            width: '600px',
            data: { file: file, dossier: this.fileParent },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
                this.ngOnInit();
                this.isLoading = false;
            }
        });
    }
    retourRoot() {
        this.isLoading = true;
        this.fileDossier = [];
        this.fileParent = null;
        this.parendId = 0;
        this.dossierService.getAllDocumentRacine(this.projet.id).subscribe((data) => {
            this.listDossier = data.dossiers;
            this.listFile = data.fichiers;
            this.isLoading = false;
            console.log(data);
        });
    }
    selecteDossier(dossier) {
        this.isLoading = true;
        this.fileDossier.push(dossier);
        this.parendId = dossier.id;
        this.fileParent = dossier;
        this.dossierService.findDossierByI(dossier.id).subscribe((data) => {
            this.listDossier = data.dossiers;
            this.listFile = data.fichiers;
            this.isLoading = false;
            console.log(data);
        });
    }
    selecteRetour(dossier) {
        this.isLoading = true;
        let list = [];
        let i = 0;
        for (i = 0; i < this.fileDossier.length; i++) {
            list.push(this.fileDossier[i]);
            if (this.fileDossier[i].id == dossier.id) {
                this.dossierService.findDossierByI(dossier.id).subscribe((data) => {
                    this.listDossier = data.dossiers;
                    this.listFile = data.fichiers;
                    console.log(data);
                    this.fileParent = dossier;
                    this.parendId = dossier.id;
                    this.fileDossier = list;
                    this.isLoading = false;
                });
                break;
            }
        }
    }
    onDropRoot(event, element) {
        let document = event.dropData;
        let indice = document.split(" ")[0];
        let id = document.split(" ")[1];
        let file;
        if (element.dossierParent) {
            if (indice == 'fichier') {
            }
            else if (indice == 'dossier') {
            }
        }
    }
    onDrop(event, element) {
        if (this.haveGestionDossier == 1) {
            this.isLoading = true;
            console.log(element);
            console.log(event);
            let document = event.dropData;
            let indice = document.split(" ")[0];
            let id = document.split(" ")[1];
            let file;
            console.log(indice);
            console.log(id);
            if (indice == 'fichier') {
                for (let i = 0; i < this.listFile.length; i++) {
                    if (this.listFile[i].id == id) {
                        file = this.listFile[i];
                        break;
                    }
                }
                file.dossier = element;
                file.projetRenovation = this.projet;
                console.log(file);
                this.dossierService.updateFile(file.id, file).subscribe((data) => {
                }, (error) => {
                    if (error.status < 300) {
                        this.ngOnInit();
                        this.isLoading = false;
                        this.snackBar.openSnackBar("fichier Deplacer  avec succès", "OK", 3000);
                    }
                    else {
                        this.ngOnInit();
                        this.isLoading = false;
                        this.snackBar.openSnackBar("fichier non Deplacer", "OK", 5000);
                    }
                });
            }
            else if (indice == 'dossier') {
                if (element.id != id) {
                    console.log(element);
                    element.dossierParent = element.id;
                    element.id = parseInt(id);
                    console.log(element);
                    this.gestionDossier.modifierParent(element).subscribe((data) => {
                    }, (error) => {
                        if (error.status < 300) {
                            this.ngOnInit();
                            this.isLoading = false;
                            this.snackBar.openSnackBar("Dossier Deplacer  avec succès", "OK", 3000);
                        }
                        else {
                            this.ngOnInit();
                            this.isLoading = false;
                            this.snackBar.openSnackBar("Dossier non Deplacer car fichier existe deja", "OK", 5000);
                        }
                    });
                }
            }
        }
    }
    supprimerDossier(index) {
        this.confirm.confirm({
            title: "Confirmation",
            message: `Voulez-vous supprimer cette taches ? `
        }).subscribe(($choix) => {
            if ($choix) {
                this.isLoading = true;
                this.gestionDossier.deleteDossier(index).subscribe(() => {
                }, (error) => {
                    if (error.status < 300) {
                        this.isLoading = false;
                        this.snackBar.openSnackBar("Dossier supprimé avec succès", "OK", 3000);
                        this.ngOnInit();
                        this.isLoading = false;
                    }
                    else {
                        this.isLoading = false;
                        this.snackBar.openSnackBar("Dossier non supprimer car contient des element", "OK", 3000);
                    }
                });
            }
        });
    }
    supprimerFile(index) {
        console.log(index);
        this.confirm.confirm({
            title: "Confirmation",
            message: `Voulez-vous supprimer cette taches ? `
        }).subscribe(($choix) => {
            if ($choix) {
                this.isLoading = true;
                this.dossierService.deleteFile(index).subscribe(() => {
                }, (error) => {
                    if (error.status < 300) {
                        this.isLoading = false;
                        this.snackBar.openSnackBar("fichier supprimé avec succès", "OK", 3000);
                        this.ngOnInit();
                    }
                    else {
                        this.isLoading = false;
                        this.snackBar.openSnackBar("fichier non supprimer car vous n'avez pas le droit", "OK", 3000);
                    }
                });
            }
        });
    }
    sousElement(element) {
        this.parentId.push(element);
        this.elementAfficher = element.sousElement;
    }
    revenirEnArriere(element) {
        let level = 0;
        this.parentId.forEach((e, index) => {
            if (e.id == element.id) {
                level = this.parentId.length - (index + 1);
            }
        });
    }
};
FichierComponent.ctorParameters = () => [
    { type: _dossier_fichier_service__WEBPACK_IMPORTED_MODULE_5__["DossierProjet"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__["SnackBarService"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_12__["AppConfirmService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_10__["GestionDossier"] },
    { type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_13__["ProjetStorageService"] }
];
FichierComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-fichier',
        template: _raw_loader_fichier_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fichier_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_dossier_fichier_service__WEBPACK_IMPORTED_MODULE_5__["DossierProjet"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_11__["SnackBarService"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_12__["AppConfirmService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _gestion_dossier_service__WEBPACK_IMPORTED_MODULE_10__["GestionDossier"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_13__["ProjetStorageService"]])
], FichierComponent);



/***/ }),

/***/ "qtd6":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/fichier/user-authoriser/user-authoriser.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n\r\n<div *ngIf=\"!isLoadingResults\"  class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3>Gestion des utilisateur Authoriser au dossier</h3>\r\n</div>\r\n<div mat-dialog-content class=\"body-content contenu-body\" *ngIf=\"!isLoadingResults\" >\r\n    <form   [formGroup]=\"userForm\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field  appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                <mat-label>Appellation du dossier</mat-label>\r\n                <input matInput #input  placeholder=\"Ex. Nougat\" [value]=\"data.dossier.appellation\" readonly>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <ng-select  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"listeUser\"\r\n                   bindLabel=\"utilisateurs.email\"\r\n                   placeholder=\" Selectionner l'tilisateur conserner\"\r\n                   formControlName=\"utilisateurs\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div  *ngIf=\"!isLoadingResults\"  mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"userForm.value\" >Fermer</button>\r\n        <button mat-raised-button [disabled]=\"userForm.invalid\" (click)=\"onSubmit()\" color=\"primary\" >Enregistrer</button>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"row wrap\" class=\"table\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <div class=\"example-container\">\r\n            <table mat-table [dataSource]=\"dataSources\" matSort>\r\n                <ng-container matColumnDef=\"id\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> id </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                  </ng-container>\r\n              <!-- Name Column -->\r\n              <ng-container matColumnDef=\"libelle\" sticky>\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.utilisateurs.email}} </td>\r\n              </ng-container>\r\n          \r\n              <!-- Position Column -->\r\n              \r\n          \r\n              <!-- Weight Column -->\r\n              <ng-container matColumnDef=\"roles\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Nom</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.utilisateurs.nom}} {{element.utilisateurs.prenom}}</td>\r\n              </ng-container>\r\n              \r\n              <!-- Star Column -->\r\n              <ng-container matColumnDef=\"action\" stickyEnd>\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                    <button mat-button  color=\"warn\" (click)=\"supprimerUser(element.id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Supprimer</span>\r\n                      </button>\r\n                </td>\r\n              </ng-container>\r\n          \r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[4]\"></mat-paginator>\r\n          </div>\r\n    </div>");

/***/ }),

/***/ "vps2":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/fichier/add-or-update-file/add-or-update-file.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3ItdXBkYXRlLWZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=fichier-fichier-module-es2015.js.map