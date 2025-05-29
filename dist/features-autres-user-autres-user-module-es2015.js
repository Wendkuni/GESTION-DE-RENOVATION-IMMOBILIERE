(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-autres-user-autres-user-module"],{

/***/ "09aA":
/*!***************************************************************************************!*\
  !*** ./src/app/features/autres-user/update-autre-user/update-autre-user.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UpdateAutreUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAutreUserComponent", function() { return UpdateAutreUserComponent; });
/* harmony import */ var _raw_loader_update_autre_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update-autre-user.component.html */ "nzl0");
/* harmony import */ var _update_autre_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-autre-user.component.scss */ "BggM");
/* harmony import */ var _autre_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../autre-user.service */ "qyjG");
/* harmony import */ var _profiles_ProfilesSecuriteServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../profiles/ProfilesSecuriteServices */ "VM7B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _societe_societe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../societe/societe.service */ "F36I");
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









let UpdateAutreUserComponent = class UpdateAutreUserComponent {
    constructor(dialogRef, snackBar, autreUserService, dialog, data, _fb, profileService, societeService) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.autreUserService = autreUserService;
        this.dialog = dialog;
        this.data = data;
        this._fb = _fb;
        this.profileService = profileService;
        this.societeService = societeService;
        this.profile = [];
        this.societeList = [];
        this.isLoadingResults = true;
        this.isLoadingResults = true;
        this.societeService.getAllsociete().subscribe(data => {
            this.societeList = data;
            this.profileService.getAllprofile().subscribe((listProfile) => {
                this.profile = listProfile;
                this.isLoadingResults = false;
            });
        });
    }
    ngOnInit() {
        this.init();
    }
    init() {
        if (this.data.user) {
            this.user = this._fb.group({
                id: [this.data.user.id],
                nom: [this.data.user.nom,],
                prenom: [this.data.user.prenom,],
                contact: this.data.user.contact,
                imgUrl: this.data.user.imgUrl,
                societe: [this.data.user.societe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: [this.data.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                password: [this.data.user.password,],
                profile: [this.data.user.profiles, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                civilite: [this.data.user.civilite, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
        }
        else {
            this.user = this._fb.group({
                nom: ['',],
                prenom: ['',],
                extension: null,
                contact: null,
                imgUrl: null,
                societe: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                password: [null,],
                profile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                civilite: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
        }
    }
    onSubmit() {
        console.log(this.user.value);
        if (this.user.valid) {
            this.isLoadingResults = true;
            if (this.data.user) {
                this.autreUserService.updateUser(this.data.user.id, this.user.value).subscribe((data) => {
                    this.isLoadingResults = false;
                }, (error) => {
                    this.isLoadingResults = false;
                    if (error.status < 300) {
                        this.dialogRef.close();
                        this.snackBar.openSnackBar("Element modifier  avec succès", "OK", 3000);
                    }
                    else {
                        this.snackBar.openSnackBar("Element non Ajouter car le mail existe deja", "OK", 3000);
                    }
                });
            }
            else {
                this.autreUserService.addUser(this.user.value).subscribe((data) => {
                    //console.log(data);
                    this.isLoadingResults = false;
                }, (error) => {
                    this.isLoadingResults = false;
                    if (error.status < 300) {
                        this.dialogRef.close();
                        this.snackBar.openSnackBar("Element Ajouter  avec succès", "OK", 3000);
                    }
                    else {
                        this.snackBar.openSnackBar("Element non Ajouter", "OK", 3000);
                    }
                });
            }
        }
        else {
            this.snackBar.openSnackBar("Remplire tous les champs svp", "OK", 5000);
        }
    }
};
UpdateAutreUserComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"] },
    { type: _autre_user_service__WEBPACK_IMPORTED_MODULE_2__["AutreUserAdminService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _profiles_ProfilesSecuriteServices__WEBPACK_IMPORTED_MODULE_3__["ProfilesSecuriteServices"] },
    { type: _societe_societe_service__WEBPACK_IMPORTED_MODULE_6__["societeServices"] }
];
UpdateAutreUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-update-autre-user',
        template: _raw_loader_update_autre_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_autre_user_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"], _autre_user_service__WEBPACK_IMPORTED_MODULE_2__["AutreUserAdminService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _profiles_ProfilesSecuriteServices__WEBPACK_IMPORTED_MODULE_3__["ProfilesSecuriteServices"], _societe_societe_service__WEBPACK_IMPORTED_MODULE_6__["societeServices"]])
], UpdateAutreUserComponent);



/***/ }),

/***/ "Aupu":
/*!************************************************************!*\
  !*** ./src/app/features/autres-user/autres-user.module.ts ***!
  \************************************************************/
/*! exports provided: routes, AutresUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutresUserModule", function() { return AutresUserModule; });
/* harmony import */ var _login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../login/_helper/AuthInterceptorService */ "ct3H");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _update_autre_user_update_autre_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-autre-user/update-autre-user.component */ "09aA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/utils/utils.module */ "MQax");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _autres_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autres-user.component */ "UozA");
/* harmony import */ var _autre_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./autre-user.service */ "qyjG");
/* harmony import */ var _login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../login/_helper/error.interceptor */ "AmT5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















const routes = [
    { path: '', component: _autres_user_component__WEBPACK_IMPORTED_MODULE_12__["AutresUserComponent"], data: { breadcrumb: 'Client' } },
];
let AutresUserModule = class AutresUserModule {
};
AutresUserModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_update_autre_user_update_autre_user_component__WEBPACK_IMPORTED_MODULE_4__["UpdateAutreUserComponent"], _autres_user_component__WEBPACK_IMPORTED_MODULE_12__["AutresUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            src_app_shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_10__["UtilsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        ],
        providers: [_autre_user_service__WEBPACK_IMPORTED_MODULE_13__["AutreUserAdminService"],
            _login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_0__["authInterceptorProviders"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },]
    })
], AutresUserModule);



/***/ }),

/***/ "BggM":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/autres-user/update-autre-user/update-autre-user.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYXV0cmUtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "HDid":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/autres-user/autres-user.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"flex-p\">\r\n    <div fxLayout=\"row\">\r\n        <mat-button-toggle-group #controls=\"matButtonToggleGroup\" appearance=\"legacy\">            \r\n            <mat-button-toggle value=\"add\" (click)=\"openDialog(null)\">\r\n                <mat-icon>person_add</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"search\">\r\n                <mat-icon>search</mat-icon>\r\n            </mat-button-toggle>           \r\n        </mat-button-toggle-group>            \r\n    </div>\r\n    <form class=\"user-search\" [class.show]=\"controls.value == 'search'\">\r\n        <mat-form-field class=\"user-search-input\">\r\n            <input matInput placeholder=\"Search user by name...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <mat-button-toggle-group #viewType=\"matButtonToggleGroup\" appearance=\"legacy\" value=\"grid\">            \r\n            <mat-button-toggle value=\"grid\">\r\n                <mat-icon>view_module</mat-icon>\r\n            </mat-button-toggle>         \r\n        </mat-button-toggle-group>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"viewType.value == 'grid'\" fxLayout=\"row wrap\">    \r\n    <div *ngFor=\"let user of users | paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" fxFlex.gt-md=\"33.3\" fxFlex.md=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">  \r\n            <div class=\"bg-primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h3 class=\"user-name\">{{user.email}}</h3> \r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </div>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                    <button mat-menu-item (click)=\"openDialog(user)\" >\r\n                        <mat-icon>mode_edit</mat-icon>\r\n                        <span>Edit</span>\r\n                    </button>\r\n                     <button mat-menu-item (click)=\"suprimerUser(user.id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Delete</span>\r\n                    </button> \r\n                </span>\r\n            </mat-menu>\r\n            <div class=\"user-content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.civilite !='Mr'\"  src=\"./assets/img/avatars/avatar-5.png\" class=\"transition-2\" >  \r\n                        <img *ngIf=\"user.civilite =='Mr'\"  src=\"./assets/img/avatars/avatar-9.png\" class=\"transition-2\" >\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"70\" fxLayout=\"column\" class=\"user-details transition-2\" [class.blocked]=\"false\">\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">accessibility</mat-icon>\r\n                        <span><b><i>Civilité</i> : {{user.civilite}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">face</mat-icon>\r\n                        <span><b><i>Appellation</i> : {{user.nom}} {{user.prenom}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">call</mat-icon>\r\n                        <span><b><i>Contact</i> : {{user.contact}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">business</mat-icon>\r\n                        <span><b><i>Societe</i> : {{user.societe.nomSociete}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">store_mall_directory</mat-icon>\r\n                        <span><b><i>Type Societe</i> : {{user.societe.typeSociete.appellation}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">security</mat-icon>\r\n                        <span><b><i>Profile</i> : {{user.profile.libelle}}</b></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"users\" fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 text-center\">           \r\n            <pagination-controls class=\"gradus-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "UozA":
/*!***************************************************************!*\
  !*** ./src/app/features/autres-user/autres-user.component.ts ***!
  \***************************************************************/
/*! exports provided: AutresUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutresUserComponent", function() { return AutresUserComponent; });
/* harmony import */ var _raw_loader_autres_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./autres-user.component.html */ "HDid");
/* harmony import */ var _autres_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autres-user.component.scss */ "lKNb");
/* harmony import */ var _autre_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autre-user.service */ "qyjG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var _update_autre_user_update_autre_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-autre-user/update-autre-user.component */ "09aA");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AutresUserComponent = class AutresUserComponent {
    constructor(appSettings, snackBar, dialog, confirm, usersService) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.confirm = confirm;
        this.usersService = usersService;
        this.isLoadingResults = true;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.users = null; //for show spinner each time
        this.isLoadingResults = true;
        this.usersService.getUsers().subscribe(users => { this.users = users; this.isLoadingResults = false; });
    }
    onPageChanged(event) {
        this.page = event;
        this.getUsers();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }
    openDialog(user) {
        const dialogRef = this.dialog.open(_update_autre_user_update_autre_user_component__WEBPACK_IMPORTED_MODULE_6__["UpdateAutreUserComponent"], {
            width: '600px',
            data: { user: user },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
                this.getUsers();
            }
        });
    }
    suprimerUser(index) {
        this.confirm.confirm({
            title: "Confirmation",
            message: `Voulez-vous supprimer cette pièce complémentaire ? `
        }).subscribe(($choix) => {
            if ($choix) {
                this.isLoadingResults = true;
                this.usersService.deleteUser(index).subscribe(() => {
                }, (error) => {
                    this.isLoadingResults = false;
                    if (error.status < 300) {
                        this.snackBar.openSnackBar("Element supprimé avec succès", "OK", 3000);
                        this.ngOnInit();
                    }
                    else {
                        this.snackBar.openSnackBar("Element non supprimer car affilier a un utilisateur", "OK", 3000);
                    }
                });
            }
        });
    }
};
AutresUserComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_8__["AppConfirmService"] },
    { type: _autre_user_service__WEBPACK_IMPORTED_MODULE_2__["AutreUserAdminService"] }
];
AutresUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-autres-user',
        template: _raw_loader_autres_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_autres_user_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_8__["AppConfirmService"],
        _autre_user_service__WEBPACK_IMPORTED_MODULE_2__["AutreUserAdminService"]])
], AutresUserComponent);



/***/ }),

/***/ "lKNb":
/*!*****************************************************************!*\
  !*** ./src/app/features/autres-user/autres-user.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  padding: 0 12px;\n  font-weight: 400;\n}\n\n.user-content {\n  padding: 10px;\n}\n\n.user-content .user-img {\n  position: relative;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .mat-slide-toggle {\n  margin-top: 15px;\n}\n\n.user-content .user-details span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.user-content .user-details .mat-icon {\n  padding: 2px 10px;\n}\n\n.user-content .user-details.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.user-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRyZXMtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQURJO0VBQ0ksa0JBQUE7QUFHUjs7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJWjs7QUFIWTtFQUNJLFlBQUE7QUFLaEI7O0FBRlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSVo7O0FBREk7RUFDSSxnQkFBQTtBQUdSOztBQUFRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVo7O0FBQVE7RUFDSSxpQkFBQTtBQUVaOztBQUFRO0VBQ0ksWUFBQTtBQUVaOztBQUdBO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtBQUNSOztBQUNJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFBTyxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7QUFHaEMiLCJmaWxlIjoiYXV0cmVzLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1uYW1le1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udXNlci1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC51c2VyLWltZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDk2cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1zbGlkZS10b2dnbGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbHN7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAmLmJsb2NrZWR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4udXNlci1zZWFyY2h7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYuc2hvd3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItc3Bpbm5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OjA7XHJcbn0iXX0= */");

/***/ }),

/***/ "nzl0":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/autres-user/update-autre-user/update-autre-user.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3 *ngIf=\"data.menu\">Modifier Un utilisateur</h3>\r\n    <h3 *ngIf=\"!data.menu\">AJouter Un utilisateur</h3>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div *ngIf=\"isLoadingResults\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\">\r\n        <div id=\"app-spinner\" > \r\n            <mat-spinner color=\"primary\"></mat-spinner>  \r\n            <h4>Chargement...</h4>\r\n        </div>\r\n    </div>\r\n    <form *ngIf=\"!isLoadingResults\"  [formGroup]=\"user\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput #input  placeholder=\"Email\"  formControlName=\"email\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <ng-select   [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"profile\"\r\n                   bindLabel=\"libelle\"\r\n                   placeholder=\"Selectionner le profile\"\r\n                   formControlName=\"profile\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n              <ng-select class=\"select\"  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"societeList\"\r\n                   bindLabel=\"nomSociete\"\r\n                   placeholder=\"Selectionner Selectionner la societe\"\r\n                   formControlName=\"societe\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Status Familiale</mat-label>\r\n                <mat-select disableRipple formControlName=\"civilite\" required>\r\n                    <mat-option >--SELECT--</mat-option>\r\n                    <mat-option value=\"Mr\">Mr</mat-option>\r\n                    <mat-option value=\"Mme\">Mme</mat-option>\r\n                    <mat-option value=\"Mesdamoiselle\">Mesdamoiselle</mat-option>\r\n                </mat-select>\r\n           </mat-form-field>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"user.value\" >Annuler</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"user.invalid\">Enregistrer</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "qyjG":
/*!************************************************************!*\
  !*** ./src/app/features/autres-user/autre-user.service.ts ***!
  \************************************************************/
/*! exports provided: AutreUserAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutreUserAdminService", function() { return AutreUserAdminService; });
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



let AutreUserAdminService = class AutreUserAdminService {
    constructor(http) {
        this.http = http;
        this.url = "api/users";
    }
    getUsers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.AUTRE_USER);
    }
    addUser(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.AUTRE_USER, user);
    }
    updateUser(id, user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.AUTRE_USER + "" + id, user);
    }
    deleteUser(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.AUTRE_USER + "" + id);
    }
};
AutreUserAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
AutreUserAdminService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], AutreUserAdminService);



/***/ })

}]);
//# sourceMappingURL=features-autres-user-autres-user-module-es2015.js.map