(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-gerant-gerant-module"],{

/***/ "2NGa":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/gerant/gerant.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"flex-p\">\r\n    <div fxLayout=\"row\">\r\n        <mat-button-toggle-group #controls=\"matButtonToggleGroup\" appearance=\"legacy\">            \r\n            <mat-button-toggle value=\"add\" (click)=\"openDialog(null)\">\r\n                <mat-icon>person_add</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"search\">\r\n                <mat-icon>search</mat-icon>\r\n            </mat-button-toggle>           \r\n        </mat-button-toggle-group>            \r\n    </div>\r\n    <form class=\"user-search\" [class.show]=\"controls.value == 'search'\">\r\n        <mat-form-field class=\"user-search-input\">\r\n            <input matInput placeholder=\"Search user by name...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <mat-button-toggle-group #viewType=\"matButtonToggleGroup\" appearance=\"legacy\" value=\"grid\">            \r\n            <mat-button-toggle value=\"grid\">\r\n                <mat-icon>view_module</mat-icon>\r\n            </mat-button-toggle>         \r\n        </mat-button-toggle-group>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"viewType.value == 'grid'\" fxLayout=\"row wrap\">    \r\n    <div *ngFor=\"let user of users | paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" fxFlex.gt-md=\"33.3\" fxFlex.md=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">  \r\n            <div class=\"bg-primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h3 class=\"user-name\">{{user.email}}</h3> \r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </div>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                    <button mat-menu-item (click)=\"openDialog(user)\" >\r\n                        <mat-icon>mode_edit</mat-icon>\r\n                        <span>Edit</span>\r\n                    </button>\r\n                     <button mat-menu-item (click)=\"suprimerUser(user.id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Delete</span>\r\n                    </button> \r\n                </span>\r\n            </mat-menu>\r\n            <div class=\"user-content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.civilite !='Mr'\"  src=\"./assets/img/avatars/avatar-5.png\" class=\"transition-2\" >  \r\n                        <img *ngIf=\"user.civilite =='Mr'\"  src=\"./assets/img/avatars/avatar-9.png\" class=\"transition-2\" >\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"70\" fxLayout=\"column\" class=\"user-details transition-2\" [class.blocked]=\"false\">\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">accessibility</mat-icon>\r\n                        <span><b><i>Civilité</i> : {{user.civilite}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">face</mat-icon>\r\n                        <span><b><i>Appellation</i> : {{user.nom}} {{user.prenom}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">call</mat-icon>\r\n                        <span><b><i>Contact</i> : {{user.contact}}</b></span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">security</mat-icon>\r\n                        <span><b><i>Profile</i> : {{user.profile.libelle}}</b></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"users\" fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 text-center\">           \r\n            <pagination-controls class=\"gradus-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "3CGE":
/*!**************************************************************!*\
  !*** ./src/app/features/gerant/update/update.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "8jF2":
/*!*****************************************************!*\
  !*** ./src/app/features/gerant/gerant.component.ts ***!
  \*****************************************************/
/*! exports provided: GerantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerantComponent", function() { return GerantComponent; });
/* harmony import */ var _raw_loader_gerant_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gerant.component.html */ "2NGa");
/* harmony import */ var _gerant_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gerant.component.scss */ "A4w/");
/* harmony import */ var _gerant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gerant.service */ "echI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "auKl");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let GerantComponent = class GerantComponent {
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
        const dialogRef = this.dialog.open(_update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateGerantComponent"], {
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
                    this.isLoadingResults = false;
                }, (error) => {
                    this.isLoadingResults = false;
                    if (error.status < 300) {
                        this.snackBar.openSnackBar("Element supprimé avec succès", "OK", 3000);
                        this.ngOnInit();
                    }
                    else {
                        this.snackBar.openSnackBar("Element non supprimer car affilier a un utilisateur", "OK", 3000);
                        this.isLoadingResults = false;
                    }
                });
            }
        });
    }
};
GerantComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"] },
    { type: _gerant_service__WEBPACK_IMPORTED_MODULE_2__["GerantAdminService"] }
];
GerantComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gerant',
        template: _raw_loader_gerant_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_gerant_service__WEBPACK_IMPORTED_MODULE_2__["GerantAdminService"]],
        styles: [_gerant_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"],
        _gerant_service__WEBPACK_IMPORTED_MODULE_2__["GerantAdminService"]])
], GerantComponent);



/***/ }),

/***/ "A4w/":
/*!*******************************************************!*\
  !*** ./src/app/features/gerant/gerant.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  padding: 0 12px;\n  font-weight: 400;\n}\n\n.user-content {\n  padding: 10px;\n}\n\n.user-content .user-img {\n  position: relative;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .mat-slide-toggle {\n  margin-top: 15px;\n}\n\n.user-content .user-details span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.user-content .user-details .mat-icon {\n  padding: 2px 10px;\n}\n\n.user-content .user-details.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.user-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnZXJhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFESTtFQUNJLGtCQUFBO0FBR1I7O0FBRlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSVo7O0FBSFk7RUFDSSxZQUFBO0FBS2hCOztBQUZRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlaOztBQURJO0VBQ0ksZ0JBQUE7QUFHUjs7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVaOztBQUFRO0VBQ0ksaUJBQUE7QUFFWjs7QUFBUTtFQUNJLFlBQUE7QUFFWjs7QUFHQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBQ0k7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7QUFDUjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQU8sUUFBQTtFQUFVLFNBQUE7RUFBVyxPQUFBO0FBR2hDIiwiZmlsZSI6ImdlcmFudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW5hbWV7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi51c2VyLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLnVzZXItaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgJi5ibG9ja2Vke1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC04cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTZweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItZGV0YWlsc3tcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi51c2VyLXNlYXJjaHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1zcGlubmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6MDtcclxufSJdfQ== */");

/***/ }),

/***/ "F1MR":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/gerant/update/update.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3 *ngIf=\"data.menu\">Modifier Un utilisateur</h3>\r\n    <h3 *ngIf=\"!data.menu\">AJouter Un utilisateur</h3>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div *ngIf=\"isLoadingResults\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\">\r\n        <div id=\"app-spinner\" > \r\n            <mat-spinner color=\"primary\"></mat-spinner>  \r\n            <h4>Chargement...</h4>\r\n        </div>\r\n    </div>\r\n    <form *ngIf=\"!isLoadingResults\"  [formGroup]=\"user\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput #input  placeholder=\"Email\"  formControlName=\"email\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <ng-select   [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"profile\"\r\n                   bindLabel=\"libelle\"\r\n                   placeholder=\"Selectionner Selectionner le profile\"\r\n                   formControlName=\"profile\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Status Familiale</mat-label>\r\n                <mat-select disableRipple formControlName=\"civilite\" required>\r\n                    <mat-option >--SELECT--</mat-option>\r\n                    <mat-option value=\"Mr\">Mr</mat-option>\r\n                    <mat-option value=\"Mme\">Mme</mat-option>\r\n                    <mat-option value=\"Mesdamoiselle\">Mesdamoiselle</mat-option>\r\n                </mat-select>\r\n           </mat-form-field>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"user.value\" >Annuler</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"user.invalid\">Enregistrer</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "auKl":
/*!************************************************************!*\
  !*** ./src/app/features/gerant/update/update.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateGerantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGerantComponent", function() { return UpdateGerantComponent; });
/* harmony import */ var _raw_loader_update_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update.component.html */ "F1MR");
/* harmony import */ var _update_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.component.scss */ "3CGE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var _profiles_ProfilesSecuriteServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../profiles/ProfilesSecuriteServices */ "VM7B");
/* harmony import */ var _societe_societe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../societe/societe.service */ "F36I");
/* harmony import */ var _gerant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gerant.service */ "echI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let UpdateGerantComponent = class UpdateGerantComponent {
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
        this.profileService.getAllprofile().subscribe((listProfile) => {
            this.profile = listProfile;
            this.isLoadingResults = false;
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
                email: [this.data.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                password: [this.data.user.password],
                profile: [this.data.user.profile, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                civilite: [this.data.user.civilite, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
        else {
            this.user = this._fb.group({
                nom: ['',],
                prenom: ['',],
                extension: null,
                contact: null,
                imgUrl: null,
                email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                password: [null],
                profile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                civilite: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
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
UpdateGerantComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] },
    { type: _gerant_service__WEBPACK_IMPORTED_MODULE_8__["GerantAdminService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _profiles_ProfilesSecuriteServices__WEBPACK_IMPORTED_MODULE_6__["ProfilesSecuriteServices"] },
    { type: _societe_societe_service__WEBPACK_IMPORTED_MODULE_7__["societeServices"] }
];
UpdateGerantComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-update',
        template: _raw_loader_update_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"], _gerant_service__WEBPACK_IMPORTED_MODULE_8__["GerantAdminService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _profiles_ProfilesSecuriteServices__WEBPACK_IMPORTED_MODULE_6__["ProfilesSecuriteServices"], _societe_societe_service__WEBPACK_IMPORTED_MODULE_7__["societeServices"]])
], UpdateGerantComponent);



/***/ }),

/***/ "echI":
/*!***************************************************!*\
  !*** ./src/app/features/gerant/gerant.service.ts ***!
  \***************************************************/
/*! exports provided: GerantAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerantAdminService", function() { return GerantAdminService; });
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



let GerantAdminService = class GerantAdminService {
    constructor(http) {
        this.http = http;
        this.url = "api/users";
    }
    getUsers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.GERANT);
    }
    addUser(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.GERANT, user);
    }
    updateUser(id, user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.GERANT + "" + id, user);
    }
    deleteUser(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.UTILISATEUR.GERANT + "" + id);
    }
};
GerantAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
GerantAdminService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], GerantAdminService);



/***/ }),

/***/ "gQxV":
/*!**************************************************!*\
  !*** ./src/app/features/gerant/gerant.module.ts ***!
  \**************************************************/
/*! exports provided: routes, GerantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerantModule", function() { return GerantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gerant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gerant.component */ "8jF2");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "auKl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/utils/utils.module */ "MQax");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _gerant_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gerant.service */ "echI");
/* harmony import */ var _login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../login/_helper/AuthInterceptorService */ "ct3H");
/* harmony import */ var _login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../login/_helper/error.interceptor */ "AmT5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















const routes = [
    { path: '', component: _gerant_component__WEBPACK_IMPORTED_MODULE_2__["GerantComponent"], data: { breadcrumb: 'Gerant' } },
];
let GerantModule = class GerantModule {
};
GerantModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_gerant_component__WEBPACK_IMPORTED_MODULE_2__["GerantComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateGerantComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            src_app_shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_9__["UtilsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        ],
        providers: [_gerant_service__WEBPACK_IMPORTED_MODULE_12__["GerantAdminService"],
            _login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_13__["authInterceptorProviders"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },]
    })
], GerantModule);



/***/ })

}]);
//# sourceMappingURL=features-gerant-gerant-module-es2015.js.map