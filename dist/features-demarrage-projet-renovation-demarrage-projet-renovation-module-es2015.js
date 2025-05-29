(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-demarrage-projet-renovation-demarrage-projet-renovation-module"],{

/***/ "+G9r":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/projet-user/projet-user.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".element {\n  color: white;\n}\n\n.image {\n  height: 200px;\n}\n\n.example-tooltip-red {\n  background: #080883;\n  font-weight: bold;\n}\n\n.infor {\n  font-size: 13px;\n  padding: 5px;\n}\n\n.infor mat-icon {\n  margin-right: 10px;\n}\n\n.buton-action {\n  float: right;\n}\n\n.recherche {\n  width: 70%;\n}\n\n.example-tooltip-red {\n  background: #080883;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBQ0ksa0JBQUE7QUFHUjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJwcm9qZXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGVtZW50e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS10b29sdGlwLXJlZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4LCA4LCAxMzEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmluZm9ye1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWF0LWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0b24tYWN0aW9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucmVjaGVyY2hle1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXRvb2x0aXAtcmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICMwODA4ODM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9Il19 */");

/***/ }),

/***/ "4dYz":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/user-affecter-demarrage/user-affecter-demarrage.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: UserAffecterDemarrageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAffecterDemarrageComponent", function() { return UserAffecterDemarrageComponent; });
/* harmony import */ var _raw_loader_user_affecter_demarrage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-affecter-demarrage.component.html */ "axxz");
/* harmony import */ var _user_affecter_demarrage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-affecter-demarrage.component.scss */ "ydRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
/* harmony import */ var _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user-affecter-projet-renovation/user-affecter-projet.service */ "Ta7a");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let UserAffecterDemarrageComponent = class UserAffecterDemarrageComponent {
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
        this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.userAffect);
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
                this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.userAffect);
                this.dataSources.paginator = this.paginator;
                this.dataSources.sort = this.sort;
                this.isLoadingResults = false;
            });
        });
    }
    init() {
        this.userForm = this.fb.group({
            id: null,
            utilisateurs: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
UserAffecterDemarrageComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_10__["UserAffecterProjetRenovationServices"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"] }
];
UserAffecterDemarrageComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
};
UserAffecterDemarrageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-affecter-demarrage',
        template: _raw_loader_user_affecter_demarrage_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_affecter_demarrage_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_10__["UserAffecterProjetRenovationServices"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"]])
], UserAffecterDemarrageComponent);



/***/ }),

/***/ "63V8":
/*!********************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/demarrage-projet-renovation.module.ts ***!
  \********************************************************************************************/
/*! exports provided: routes, DemarrageProjetRenovationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemarrageProjetRenovationModule", function() { return DemarrageProjetRenovationModule; });
/* harmony import */ var _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user-affecter-projet-renovation/user-affecter-projet.service */ "Ta7a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _projet_user_projet_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projet-user/projet-user.component */ "hj9z");
/* harmony import */ var _user_affecter_demarrage_user_affecter_demarrage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-affecter-demarrage/user-affecter-demarrage.component */ "4dYz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    { path: ':id',
        component: _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__["DemarrageProjetRenovationComponent"],
        children: [
            { path: 'taches', loadChildren: () => Promise.all(/*! import() | taches-taches-module */[__webpack_require__.e("default~fichier-fichier-module~taches-taches-module"), __webpack_require__.e("common"), __webpack_require__.e("taches-taches-module")]).then(__webpack_require__.bind(null, /*! ./taches/taches.module */ "QWJR")).then(m => m.TachesModule), data: { breadcrumb: 'taches' } },
            { path: 'agenda', loadChildren: () => Promise.all(/*! import() | agenda-agenda-module */[__webpack_require__.e("common"), __webpack_require__.e("agenda-agenda-module")]).then(__webpack_require__.bind(null, /*! ./agenda/agenda.module */ "Z3Ba")).then(m => m.AgendaModule), data: { breadcrumb: 'Agenda' } },
            { path: 'bilan', loadChildren: () => Promise.all(/*! import() | bilan-bilan-module */[__webpack_require__.e("default~bilan-bilan-module~features-statistique-statistique-module~pages-dashboard-dashboard-module"), __webpack_require__.e("default~bilan-bilan-module~features-statistique-statistique-module"), __webpack_require__.e("common"), __webpack_require__.e("bilan-bilan-module")]).then(__webpack_require__.bind(null, /*! ./bilan/bilan.module */ "vwhf")).then(m => m.BilanModule), data: { breadcrumb: 'Bilan' } },
            { path: 'fichier', loadChildren: () => Promise.all(/*! import() | fichier-fichier-module */[__webpack_require__.e("default~fichier-fichier-module~taches-taches-module"), __webpack_require__.e("fichier-fichier-module")]).then(__webpack_require__.bind(null, /*! ./fichier/fichier.module */ "5tfQ")).then(m => m.FichierModule), data: { breadcrumb: 'fichier' } },
            { path: 'message', loadChildren: () => __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "Ve1s")).then(m => m.ChatModule), data: { breadcrumb: 'chat' } },
        ]
    },
    { path: '', component: _projet_user_projet_user_component__WEBPACK_IMPORTED_MODULE_10__["ProjetUserComponent"], data: { breadcrumb: 'Projet' } },
];
let DemarrageProjetRenovationModule = class DemarrageProjetRenovationModule {
};
DemarrageProjetRenovationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_3__["DemarrageProjetRenovationComponent"], _projet_user_projet_user_component__WEBPACK_IMPORTED_MODULE_10__["ProjetUserComponent"], _user_affecter_demarrage_user_affecter_demarrage_component__WEBPACK_IMPORTED_MODULE_11__["UserAffecterDemarrageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"]
        ],
        providers: [
            _user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_0__["UserAffecterProjetRenovationServices"]
        ]
    })
], DemarrageProjetRenovationModule);



/***/ }),

/***/ "D2DK":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/projet-user/user-projet.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListTacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTacheService", function() { return ListTacheService; });
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



let ListTacheService = class ListTacheService {
    constructor(http) {
        this.http = http;
    }
    gettachess(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.TACHES_USER + "taches/" + id);
    }
    getAllProjet() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.TACHES_USER + "projet/");
    }
    getProjet(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.TACHES_USER + "projet/" + id);
    }
    updatetaches(id, taches) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.TACHES_USER + "taches/" + id, taches);
    }
};
ListTacheService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ListTacheService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ListTacheService);



/***/ }),

/***/ "JPKO":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/demarrage-projet-renovation.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-tooltip-red {\n  background: #080883;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZW1hcnJhZ2UtcHJvamV0LXJlbm92YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiZGVtYXJyYWdlLXByb2pldC1yZW5vdmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdG9vbHRpcC1yZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzA4MDg4MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "axxz":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/user-affecter-demarrage/user-affecter-demarrage.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n\r\n<div *ngIf=\"!isLoadingResults\"  class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3>Gestion des utilisateur du Projet {{data.projet.renovation.nomRenovation}}</h3>\r\n</div>\r\n<div mat-dialog-content class=\"body-content contenu-body\" *ngIf=\"!isLoadingResults\" >\r\n    <form   [formGroup]=\"userForm\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field  appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                <mat-label>Libelle de la renovation</mat-label>\r\n                <input matInput #input  placeholder=\"Ex. Nougat\" [value]=\"data.projet.renovation.nomRenovation\" readonly>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <ng-select  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"listeUser\"\r\n                   bindLabel=\"email\"\r\n                   placeholder=\" Selectionner l'tilisateur conserner\"\r\n                   formControlName=\"utilisateurs\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div  *ngIf=\"!isLoadingResults\"  mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"userForm.value\" >Fermer</button>\r\n        <button mat-raised-button [disabled]=\"userForm.invalid\" (click)=\"onSubmit()\" color=\"primary\" >Enregistrer</button>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"row wrap\" class=\"table\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <div class=\"example-container\">\r\n            <table mat-table [dataSource]=\"dataSources\" matSort>\r\n                <ng-container matColumnDef=\"id\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> id </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                  </ng-container>\r\n              <!-- Name Column -->\r\n              <ng-container matColumnDef=\"libelle\" sticky>\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.utilisateurs.email}} </td>\r\n              </ng-container>\r\n          \r\n              <!-- Position Column -->\r\n              \r\n          \r\n              <!-- Weight Column -->\r\n              <ng-container matColumnDef=\"roles\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Nom</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.utilisateurs.nom}} {{element.utilisateurs.prenom}}</td>\r\n              </ng-container>\r\n              \r\n              <!-- Star Column -->\r\n              <ng-container matColumnDef=\"action\" stickyEnd>\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                    <button mat-button *ngIf=\"element.utilisateurs.profile.libelle != 'CLIENT'\"   color=\"warn\" (click)=\"supprimerUser(element.id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Supprimer</span>\r\n                      </button>\r\n                </td>\r\n              </ng-container>\r\n          \r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[4]\"></mat-paginator>\r\n          </div>\r\n    </div>");

/***/ }),

/***/ "dQdU":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/projet-user/projet-user.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--<div fxLayout=\"row wrap\">\r\n        <div class=\"recherche\">\r\n            <mat-form-field class=\"recherche\">\r\n                <input matInput  placeholder=\"Rechercher generale...\" >\r\n                <mat-icon matSuffix >clear</mat-icon>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>indice de recherche</mat-label>\r\n                <mat-select >\r\n                    <mat-option [value]=\"'budget'\"></mat-option>\r\n                    <mat-option *ngFor=\"let e of elementRecheche\" [value]=\"e\">{{e}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n  </div>-->\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" >\r\n        <div fxFlex=\"32\" class=\"flex-p\" *ngFor=\"let p of projet  | paginate: { itemsPerPage: 6, currentPage: page }\"> \r\n            <mat-card class=\"custom-card\">\r\n                <mat-card-header class=\"bg-primary p-1\" fxLayoutAlign=\"space-between center\">\r\n                    <mat-card-title  class=\"m-0\"><h3><button mat-button routerLink=\"{{p.id}}/\">{{p.renovation.nomRenovation}}</button></h3></mat-card-title>\r\n                </mat-card-header>\r\n                <img class=\"image\" mat-card-image src=\"{{URLpage}}{{p.photo.split('/')[2]}}\" alt=\"image non charger\">\r\n                <mat-card-content class=\"p-\">\r\n                    <p fxLayout=\"row\" class=\"infor\">\r\n                        <mat-icon>face</mat-icon>  \r\n                        <span> <strong><i>Client : </i> {{p.renovation.client.email}}</strong></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" class=\"infor\">\r\n                        <mat-icon>local_atm</mat-icon>  \r\n                        <span> <strong><i>Budget : </i> {{p.budget}} euros</strong></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\"  class=\"infor\">\r\n                        <mat-icon>timer</mat-icon>  \r\n                        <span> <strong><i>Durée :</i> {{p.dateDemarrage| date:'dd/MM/yyyy'}} - {{p.dateFinission| date:'dd/MM/yyyy'}}</strong></span>\r\n                    </p>\r\n                    \r\n                    <p fxLayout=\"row\" class=\"infor\">\r\n                        <mat-icon>location_on</mat-icon>  \r\n                        <span> <strong><i>Adresse : </i> {{p.renovation.adressChantier}}</strong></span>\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-divider></mat-divider>\r\n                <mat-card-actions fxLayoutAlign=\"end center\">\r\n                    <button routerLink=\"{{p.id}}/bilan\" mat-icon-button\r\n                    matTooltip=\"DIagramme d'evolution\"\r\n                    matTooltipClass=\"example-tooltip-red\"\r\n                    aria-label=\"Button that shows a red tooltip\">\r\n                        <mat-icon>poll</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button routerLink=\"{{p.id}}/agenda\"\r\n                    matTooltip=\"Agenda\"\r\n                    matTooltipClass=\"example-tooltip-red\"\r\n                    aria-label=\"Button that shows a red tooltip\">\r\n                        <mat-icon>event_note</mat-icon>\r\n                    </button>\r\n\r\n                    <button routerLink=\"{{p.id}}/taches\" mat-icon-button\r\n                    matTooltip=\"Taches\"\r\n                    matTooltipClass=\"example-tooltip-red\"\r\n                    aria-label=\"Button that shows a red tooltip\">\r\n                        <mat-icon>ballot</mat-icon>\r\n                    </button>\r\n                    \r\n                    <button mat-icon-button \r\n                    matTooltip=\"documents\"\r\n                    matTooltipClass=\"example-tooltip-red\"\r\n                    aria-label=\"Button that shows a red tooltip\">\r\n                        <mat-icon>insert_drive_file</mat-icon>\r\n                    </button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n\r\n<div fxLayout=\"row wrap\" *ngIf=\"projet\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 text-center\">           \r\n            <pagination-controls class=\"gradus-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>");

/***/ }),

/***/ "hj9z":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/projet-user/projet-user.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjetUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetUserComponent", function() { return ProjetUserComponent; });
/* harmony import */ var _raw_loader_projet_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./projet-user.component.html */ "dQdU");
/* harmony import */ var _projet_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projet-user.component.scss */ "+G9r");
/* harmony import */ var _user_projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-projet.service */ "D2DK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/ProjetRenovation.localStorage */ "Geum");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ProjetUserComponent = class ProjetUserComponent {
    constructor(appSettings, projetStorage, projetService) {
        this.appSettings = appSettings;
        this.projetStorage = projetStorage;
        this.projetService = projetService;
        this.elementRecheche = ['budget', 'dateDemarrage', 'email', 'nomRenovation'];
        this.isLoadingResults = true;
        this.GererTache = 0;
        this.GererUser = 0;
        this.URLpage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACK_END.FILEUPLOAD + 'download/';
        this.settings = this.appSettings.settings;
        this.GererTache = projetStorage.getGestionTache();
        this.GererUser = parseInt(projetStorage.getGestionUser());
    }
    ngOnInit() {
        this.getElement();
    }
    getElement() {
        this.isLoadingResults = true;
        this.projetService.getAllProjet().subscribe((data) => {
            this.projet = data;
            //console.log(this.projet);
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
ProjetUserComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_6__["ProjetStorageService"] },
    { type: _user_projet_service__WEBPACK_IMPORTED_MODULE_2__["ListTacheService"] }
];
ProjetUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projet-user',
        template: _raw_loader_projet_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_user_projet_service__WEBPACK_IMPORTED_MODULE_2__["ListTacheService"]],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_projet_user_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_6__["ProjetStorageService"],
        _user_projet_service__WEBPACK_IMPORTED_MODULE_2__["ListTacheService"]])
], ProjetUserComponent);



/***/ }),

/***/ "mgTU":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/demarrage-projet-renovation.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DemarrageProjetRenovationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemarrageProjetRenovationComponent", function() { return DemarrageProjetRenovationComponent; });
/* harmony import */ var _raw_loader_demarrage_projet_renovation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./demarrage-projet-renovation.component.html */ "xAJx");
/* harmony import */ var _demarrage_projet_renovation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demarrage-projet-renovation.component.scss */ "JPKO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projet-user/user-projet.service */ "D2DK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ProjetRenovation.localStorage */ "Geum");
/* harmony import */ var _user_affecter_demarrage_user_affecter_demarrage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-affecter-demarrage/user-affecter-demarrage.component */ "4dYz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DemarrageProjetRenovationComponent_1;









let DemarrageProjetRenovationComponent = DemarrageProjetRenovationComponent_1 = class DemarrageProjetRenovationComponent {
    constructor(route, dialog, router, projetStorage, projetServices) {
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.projetStorage = projetStorage;
        this.projetServices = projetServices;
        this.GererUser = 0;
        this.isLoadingResults = true;
        this.id = route.snapshot.params.id;
        this.GererUser = parseInt(projetStorage.getGestionUser());
    }
    ngOnInit() {
        this.projetServices.getProjet(this.id).subscribe((data) => {
            this.projet = data;
            DemarrageProjetRenovationComponent_1.projetRenovation = data;
            this.isLoadingResults = false;
        }, (error) => {
            this.router.navigate([src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.PROJET_RENAUVATION]);
        });
    }
    openDialog(projet) {
        const dialogRef = this.dialog.open(_user_affecter_demarrage_user_affecter_demarrage_component__WEBPACK_IMPORTED_MODULE_8__["UserAffecterDemarrageComponent"], {
            width: '600px',
            height: '700px',
            data: { projet: projet },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
            }
        });
    }
};
DemarrageProjetRenovationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_7__["ProjetStorageService"] },
    { type: _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_5__["ListTacheService"] }
];
DemarrageProjetRenovationComponent = DemarrageProjetRenovationComponent_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-demarrage-projet-renovation',
        template: _raw_loader_demarrage_projet_renovation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_5__["ListTacheService"]],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_demarrage_projet_renovation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_7__["ProjetStorageService"],
        _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_5__["ListTacheService"]])
], DemarrageProjetRenovationComponent);



/***/ }),

/***/ "xAJx":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/demarrage-projet-renovation.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<div fxLayout=\"row wrap\" *ngIf=\"!isLoadingResults\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <div [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"70\" [fxFlex.xl]=\"70\">\r\n                <h2>Projet {{projet.renovation.nomRenovation | uppercase}}</h2>\r\n            </div>\r\n            \r\n            <div fxLayoutAlign=\"center end\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"20\" [fxFlex.xl]=\"20\">\r\n                    <button *ngIf=\"GererUser==1\" \r\n                        matTooltip=\"Utilisateur affecter au Projet\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\"\r\n                     button mat-icon-button (click)=\"openDialog(projet)\">\r\n                        <mat-icon>groups</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button routerLink=\"bilan\"\r\n                        matTooltip=\"Diagramme de l'evolution du projet\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\"\r\n                    >\r\n                        <mat-icon>poll</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button routerLink=\"agenda\"\r\n                        matTooltip=\"Agenda d'evenement\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\"\r\n                    >\r\n                        <mat-icon>event_note</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button routerLink=\"taches\"\r\n                        matTooltip=\"Les taches\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\"\r\n                    >\r\n                        <mat-icon>ballot</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button routerLink=\"fichier\"\r\n                        matTooltip=\"documents\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\">\r\n                        <mat-icon>insert_drive_file</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button routerLink=\"message\"\r\n                        matTooltip=\"echange\"\r\n                        matTooltipClass=\"example-tooltip-red\"\r\n                        aria-label=\"Button that shows a red tooltip\">\r\n                        <mat-icon>question_answer</mat-icon>\r\n                    </button>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<router-outlet *ngIf=\"!isLoadingResults\"></router-outlet>");

/***/ }),

/***/ "ydRL":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/user-affecter-demarrage/user-affecter-demarrage.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFmZmVjdGVyLWRlbWFycmFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=features-demarrage-projet-renovation-demarrage-projet-renovation-module-es2015.js.map