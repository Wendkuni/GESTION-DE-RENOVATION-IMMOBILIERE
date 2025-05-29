(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taches-taches-module"],{

/***/ "8CHN":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/taches/update-taches/update-taches.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtdGFjaGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "BgE4":
/*!*********************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/taches/taches.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TachesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TachesComponent", function() { return TachesComponent; });
/* harmony import */ var _raw_loader_taches_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./taches.component.html */ "Lmox");
/* harmony import */ var _taches_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taches.component.scss */ "TzIp");
/* harmony import */ var _gestion_taches_gestion_taches_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestion-taches/gestion-taches.component */ "dppI");
/* harmony import */ var _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../projet-user/user-projet.service */ "D2DK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
/* harmony import */ var _gestion_taches_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gestion-taches.services */ "q1+a");
/* harmony import */ var _update_taches_update_taches_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-taches/update-taches.component */ "OEg8");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../login/_helper/localStorage */ "+64y");
/* harmony import */ var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services/ProjetRenovation.localStorage */ "Geum");
/* harmony import */ var src_app_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/theme/utils/app-animation */ "NObv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















let TachesComponent = class TachesComponent {
    constructor(appSettings, route, userTache, projetStorage, tacheService, router, tokenService, dialog, confirm, snackBar) {
        this.appSettings = appSettings;
        this.route = route;
        this.userTache = userTache;
        this.projetStorage = projetStorage;
        this.tacheService = tacheService;
        this.router = router;
        this.tokenService = tokenService;
        this.dialog = dialog;
        this.confirm = confirm;
        this.snackBar = snackBar;
        this.tacheList = [];
        this.evolution = [0, 25, 50, 75, 100];
        this.aFaire = [];
        this.aReFaire = [];
        this.valider = [];
        this.enCours = [];
        this.rechercheGeneral = '';
        this.isLoadingResults = false;
        this.displayedColumns = ['appellation', 'description', 'status', 'dateD', 'DateF', 'user', 'action'];
        this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.tacheList);
        this.settings = this.appSettings.settings;
        this.projet = _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_17__["DemarrageProjetRenovationComponent"].projetRenovation;
        this.Gerant = parseInt(projetStorage.getGestionTache());
        // this.id = this.route.snapshot.params.id;
        // console.log(this.route.snapshot.parent)
    }
    ngOnInit() {
        this.aFaire = [];
        this.aReFaire = [];
        this.valider = [];
        this.enCours = [];
        if (this.Gerant == 1) {
            this.elementGerant();
        }
        else {
            this.elementUser();
        }
    }
    elementUser() {
        this.isLoadingResults = true;
        this.userTache.gettachess(this.projet.id).subscribe((data) => {
            this.tacheList = data;
            this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.tacheList);
            this.tacheList.forEach((tache, index) => {
                if (tache.niveauAvancer == 'VALIDER') {
                    this.valider.push(tache);
                }
                else if (tache.niveauAvancer === 'ENCOURS') {
                    this.enCours.push(tache);
                }
                else if (tache.niveauAvancer == 'AREFAIRE') {
                    this.aReFaire.push(tache);
                }
                else {
                    this.aFaire.push(tache);
                }
            });
            //console.log(this.dataSources);
            this.isLoadingResults = false;
            this.dataSources.paginator = this.paginator;
            this.dataSources.sort = this.sort;
        }, (error) => {
            if (error.status > 300) {
                this.router.navigate([src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].FRONTEND_ROUTES.DASHBOARD]);
            }
        });
    }
    nombreJour(tache) {
        let temps = new Date(tache.dateFinition).getTime() - new Date(tache.dateDemarrage).getTime();
        return temps / (1000 * 60 * 60 * 24);
    }
    elementGerant() {
        this.isLoadingResults = true;
        this.tacheService.gettachess(this.projet.id).subscribe((data) => {
            this.tacheList = data;
            this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.tacheList);
            this.tacheList.forEach((tache, index) => {
                if (tache.niveauAvancer == 'VALIDER') {
                    this.valider.push(tache);
                }
                else if (tache.niveauAvancer == 'ENCOURS') {
                    this.enCours.push(tache);
                }
                else if (tache.niveauAvancer == 'AREFAIRE') {
                    this.aReFaire.push(tache);
                }
                else {
                    this.aFaire.push(tache);
                }
            });
            //console.log(this.dataSources);
            this.isLoadingResults = false;
            this.dataSources.paginator = this.paginator;
            this.dataSources.sort = this.sort;
        }, (error) => {
            if (error.status > 300) {
                this.router.navigate([src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].FRONTEND_ROUTES.DASHBOARD]);
            }
        });
    }
    drop(event, types) {
        console.log(event.currentIndex);
        this.isLoadingResults = true;
        let tache;
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            if (types == 'VALIDER') {
                tache = this.valider[event.currentIndex];
            }
            else if (types == 'ENCOURS') {
                tache = this.enCours[event.currentIndex];
            }
            else if (types == 'AREFAIRE') {
                tache = this.aReFaire[event.currentIndex];
            }
            else {
                tache = this.aFaire[event.currentIndex];
            }
            // if(this.tokenService.getMenu()==tache.utilisateur.utilisateurs.id || tache.utilisateur.utilisateurs.profile.libelle.substil )
            tache.niveauAvancer = types;
            this.userTache.updatetaches(tache.id, tache).subscribe((data) => {
                console.log(data);
            }, (error) => {
                if (error.status < 300) {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("status de la tache changer avec success", "OK", 3000);
                }
                else {
                    this.isLoadingResults = false;
                    this.snackBar.openSnackBar("status de la tache non changer", "OK", 3000);
                    this.ngOnInit();
                }
            });
        }
    }
    onChangePourcentage(event, tache) {
        console.log(event);
        if (event > 0) {
            if (String(event) === '100') {
                tache.niveauAvancer = 'VALIDER';
                this.supprimerAndAssigneElemet(tache, this.enCours, this.valider);
            }
            this.userTache.updatetaches(tache.id, tache).subscribe((data) => {
            }, (error) => {
                if (error.status < 300) {
                    this.snackBar.openSnackBar("status de la tache changer avec success", "OK", 3000);
                }
                else {
                    this.snackBar.openSnackBar("status de la tache non changer", "OK", 3000);
                    this.ngOnInit();
                }
            });
        }
    }
    supprimerAndAssigneElemet(element, tab1, tab2) {
        tab1.forEach((t, index) => {
            if (t.id = element.id) {
                console.log(index);
                tab1.splice(index, 1);
            }
        });
        tab2.push(element);
    }
    recherche() {
        this.dataSources.filter = this.rechercheGeneral.trim().toLowerCase();
    }
    annulerRechercheGeneral() {
        this.rechercheGeneral = '';
        this.recherche();
    }
    openDialog(tache) {
        const dialogRef = this.dialog.open(_update_taches_update_taches_component__WEBPACK_IMPORTED_MODULE_15__["UpdateTachesComponent"], {
            width: '600px',
            data: { tache: tache },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
                this.ngOnInit();
            }
        });
    }
    voirPlus(tache) {
        const dialogRef = this.dialog.open(_gestion_taches_gestion_taches_component__WEBPACK_IMPORTED_MODULE_2__["GestionTachesComponent"], {
            width: '600px',
            data: { tache: tache },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == null) {
            }
        });
    }
    supprimerRenovation(index) {
        this.confirm.confirm({
            title: "Confirmation",
            message: `Voulez-vous supprimer cette taches ? `
        }).subscribe(($choix) => {
            if ($choix) {
                this.isLoadingResults = true;
                this.tacheService.deletetaches(index).subscribe(() => {
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
TachesComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_11__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_3__["ListTacheService"] },
    { type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_19__["ProjetStorageService"] },
    { type: _gestion_taches_services__WEBPACK_IMPORTED_MODULE_14__["GestionTacheService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_18__["TokenStorageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_13__["AppConfirmService"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_12__["SnackBarService"] }
];
TachesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }]
};
TachesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-taches',
        template: _raw_loader_taches_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_3__["ListTacheService"]],
        animations: [src_app_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_20__["blockTransition"]],
        host: {
            '[@blockTransition]': ''
        },
        styles: [_taches_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_11__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_3__["ListTacheService"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_19__["ProjetStorageService"],
        _gestion_taches_services__WEBPACK_IMPORTED_MODULE_14__["GestionTacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_18__["TokenStorageService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_13__["AppConfirmService"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_12__["SnackBarService"]])
], TachesComponent);



/***/ }),

/***/ "Lmox":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/taches/taches.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n    <mat-tab-group mat-stretch-tabs class=\"header-card mat-elevation-z4 block p-0\">\r\n        <mat-tab label=\"Liste des taches\" *ngIf=\"Gerant==1\">\r\n            <div fxLayout=\"row wrap\" class=\" button-add\">\r\n                <div class=\"table-bouton-ajout\" >\r\n                    <div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner mat-elevation-z8\">   \r\n                        <mat-spinner color=\"primary\"></mat-spinner>\r\n                      </div>\r\n                    <mat-button-toggle-group appearance=\"legacy\" >\r\n                        <mat-button-toggle (click)=\"openDialog(null)\" class=\"bg-primary\">\r\n                            <mat-icon>add_circle_outline</mat-icon>\r\n                        </mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                </div>\r\n                    <div class=\"recherche\">\r\n                        <mat-form-field class=\"recherche\">\r\n                            <input matInput [(ngModel)]=\"rechercheGeneral\" placeholder=\"Rechercher generale...\" autocomplete=\"off\" (keyup)=\"recherche()\" [ngModelOptions]=\"{standalone: true}\">\r\n                            <mat-icon matSuffix (click)=\"rechercheGeneral = ''; recherche()\" class=\"sycad-element-clickable\">clear</mat-icon>\r\n                        </mat-form-field>\r\n                    </div>\r\n              </div>\r\n              <div fxLayout=\"row wrap\">\r\n                  <div fxFlex=\"100\" class=\"flex-p\"> \r\n                      <div class=\"example-container mat-elevation-z8\">\r\n                          <table mat-table [dataSource]=\"dataSources\" matSort>\r\n                        \r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"appellation\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Appellation </th>\r\n                              <td mat-cell *matCellDef=\"let element\"> {{element.appellation}} </td>\r\n                            </ng-container>\r\n                        \r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"description\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                              <td mat-cell *matCellDef=\"let element\">\r\n                                <button [matMenuTriggerFor]=\"descri\" mat-button color=\"warn\">Voir description</button>\r\n                                <mat-menu #descri=\"matMenu\">\r\n                                  <mat-list>\r\n                                      <mat-list-item>{{element.description}}</mat-list-item>\r\n                                  </mat-list>\r\n                                </mat-menu>\r\n                              </td>\r\n                            </ng-container>\r\n                        \r\n                            <!-- Weight Column -->\r\n                            <ng-container matColumnDef=\"status\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                              <td mat-cell *matCellDef=\"let element\"> {{element.niveauAvancer}} </td>\r\n                            </ng-container>\r\n              \r\n                            <ng-container matColumnDef=\"dateD\">\r\n                              <th mat-header-cell *matHeaderCellDef > Date debut </th>\r\n                              <td mat-cell *matCellDef=\"let element\"> {{element.dateDemarrage | date : 'dd LLLL yyyy'}} </td>\r\n                            </ng-container>\r\n                        \r\n                            <!-- Symbol Column -->\r\n                            <ng-container matColumnDef=\"DateF\">\r\n                              <th mat-header-cell *matHeaderCellDef> Date Fin </th>\r\n                              <td mat-cell *matCellDef=\"let element\"> {{element.dateFinition | date : 'dd LLLL yyyy'}} </td>\r\n                            </ng-container>\r\n              \r\n                            <ng-container matColumnDef=\"user\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> user </th>\r\n                              <td mat-cell *matCellDef=\"let element\">\r\n                                  <button [matMenuTriggerFor]=\"user\" mat-icon-button>Voir+</button>\r\n                                  <mat-menu #user=\"matMenu\">\r\n                                    <mat-list>\r\n                                        <mat-list-item>Email: {{element.utilisateur.utilisateurs.email}}</mat-list-item>\r\n                                        <mat-list-item>Nom: {{element.utilisateur.utilisateurs.civilite}} {{element.utilisateur.utilisateurs.nom}} {{element.utilisateur.utilisateurs.prenom}}</mat-list-item>\r\n                                    </mat-list>\r\n                                  </mat-menu>\r\n                            </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"projet\">\r\n                              <th mat-header-cell *matHeaderCellDef> Projet </th>\r\n                              <td mat-cell *matCellDef=\"let element\"> {{element.id }} </td>\r\n                            </ng-container>\r\n                            \r\n                            <!-- Star Column -->\r\n                            <ng-container matColumnDef=\"action\" stickyEnd>\r\n                              <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                              <td mat-cell *matCellDef=\"let element\">\r\n                                  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n                                      <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                    <mat-menu #menu=\"matMenu\">\r\n                                      <button mat-menu-item (click)=\"openDialog(element)\">\r\n                                        <mat-icon>edite</mat-icon>\r\n                                        <span>Modifier</span>\r\n                                      </button>\r\n                                      <button mat-menu-item color=\"warn\" (click)=\"supprimerRenovation(element.id)\">\r\n                                        <mat-icon>delete</mat-icon>\r\n                                        <span>Supprimer</span>\r\n                                      </button>\r\n                                    </mat-menu>\r\n                              </td>\r\n                            </ng-container>\r\n                        \r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                          </table>\r\n                          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Gestion des taches\">\r\n          \r\n                <div fxLayout=\"row\"  fxLayout.lt-md=\"row wrap\">\r\n                  <div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner mat-elevation-z8\">   \r\n                    <mat-spinner color=\"primary\"></mat-spinner>\r\n                  </div>\r\n              <mat-card\r\n              [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" \r\n              [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n              <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <mat-card-title>\r\n                      Travail A Realiser\r\n                  </mat-card-title>\r\n              </mat-card-header>\r\n                  <mat-card-content>\r\n                      <div\r\n                        cdkDropList\r\n                        #aFaireList=\"cdkDropList\"\r\n                        [cdkDropListData]=\"aFaire\"\r\n                        [cdkDropListConnectedTo]=\"[encoursList,refaireList, validerList]\"\r\n                        class=\"example-list\"\r\n                        (cdkDropListDropped)=\"drop($event, 'AFAIRE')\">\r\n                          <div class=\"example-box init\" *ngFor=\"let item of aFaire\" fxLayout=\"column\" cdkDrag>\r\n                            <h4>{{item.appellation}}</h4>\r\n                            <p  class=\"w-100\"><i>date demarrage</i> : {{item.dateDemarrage | date : 'dd LLLL yyyy'}}</p>\r\n                            <p  class=\"w-100\"><i>Date finition </i>: {{item.dateFinition | date : 'dd LLLL yyyy'}} </p>\r\n                            <p class=\"w-100\"><i>Nombre de jour</i> : {{nombreJour(item)}} Jours</p>\r\n                            <p class=\"w-100\"><i>Assigné à</i> : {{item.utilisateur.utilisateurs.nom | uppercase}} {{item.utilisateur.utilisateurs.nom}}</p>\r\n                            <span fxLayoutAlign=\"end center\">\r\n                              <button mat-icon-button (click)=\"voirPlus(item)\">\r\n                                  voir+\r\n                              </button>\r\n                          </span>\r\n                          </div>\r\n                          <div class=\"example-box init\">\r\n                            \r\n                          </div>\r\n                      </div>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n              <mat-card\r\n              [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" \r\n              [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n              <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <mat-card-title>\r\n                      Travail En Cours\r\n                  </mat-card-title>\r\n              </mat-card-header>\r\n                  <mat-card-content>\r\n                    <div\r\n                        cdkDropList\r\n                        #encoursList=\"cdkDropList\"\r\n                        [cdkDropListData]=\"enCours\"\r\n                        [cdkDropListConnectedTo]=\"[aFaireList,refaireList, validerList]\"\r\n                        class=\"example-list\"\r\n                        (cdkDropListDropped)=\"drop($event, 'ENCOURS')\">\r\n                          <div class=\"example-box encours\" *ngFor=\"let item of enCours\" fxLayout=\"column\" cdkDrag>\r\n                            <h4>{{item.appellation}}</h4>\r\n                            <ng-select class=\"w-100\" [items]=\"evolution\"\r\n                            [(ngModel)]=\"item.tauxProgression\"\r\n                            (change)=\"onChangePourcentage($event,item)\"\r\n                            placeholder=\"Evolution de la tache\"\r\n                            >\r\n\r\n                            </ng-select>\r\n                            <p class=\"w-100\"><i>date demarrage</i> : {{item.dateDemarrage | date : 'dd LLLL yyyy'}}</p>\r\n                            <p class=\"w-100\"><i>Date finition </i>: {{item.dateFinition | date : 'dd LLLL yyyy'}} </p>\r\n                            <p class=\"w-100\"><i>Nombre de jour</i> : {{nombreJour(item)}} Jours</p>\r\n                            <p class=\"w-100\"><i>Assigné à</i> : {{item.utilisateur.utilisateurs.nom | uppercase}} {{item.utilisateur.utilisateurs.nom}}</p>\r\n                            <span fxLayoutAlign=\"end center\">\r\n                              <button mat-icon-button (click)=\"voirPlus(item)\">\r\n                                  voir+\r\n                              </button>\r\n                              </span>\r\n                          </div>\r\n\r\n                          <div class=\"example-box encours\">\r\n                            \r\n                          </div>\r\n                      </div>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n\r\n              <mat-card\r\n              [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" \r\n              [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n              <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <mat-card-title>\r\n                      Travail A Refaire\r\n                  </mat-card-title>\r\n              </mat-card-header>\r\n                  <mat-card-content>\r\n                    <div\r\n                    cdkDropList\r\n                    #refaireList=\"cdkDropList\"\r\n                    [cdkDropListData]=\"aReFaire\"\r\n                    [cdkDropListConnectedTo]=\"[aFaireList, encoursList, validerList]\"\r\n                    class=\"example-list\"\r\n                    (cdkDropListDropped)=\"drop($event, 'AREFAIRE')\">\r\n                      <div class=\"example-box revoir\" *ngFor=\"let item of aReFaire\" fxLayout=\"column\" cdkDrag>\r\n                        <h4>{{item.appellation}}</h4>\r\n                            <p class=\"w-100\"><i>date demarrage</i> : {{item.dateDemarrage | date : 'dd LLLL yyyy'}}</p>\r\n                            <p class=\"w-100\"><i>Date finition </i>: {{item.dateFinition | date : 'dd LLLL yyyy'}} </p>\r\n                            <p class=\"w-100\"><i>Nombre de jour</i> : {{nombreJour(item)}} Jours</p>\r\n                            <p class=\"w-100\"><i>Assigné à</i> : {{item.utilisateur.utilisateurs.nom | uppercase}} {{item.utilisateur.utilisateurs.nom}}</p>\r\n                            <span fxLayoutAlign=\"end center\">\r\n                              <button mat-icon-button (click)=\"voirPlus(item)\">\r\n                                  voir+\r\n                              </button>\r\n                            </span>\r\n                      </div>\r\n                      <div class=\"example-box revoir\">\r\n                            \r\n                      </div>\r\n                  </div>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n\r\n              <mat-card\r\n              [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" \r\n              [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                  <mat-card-header fxLayoutAlign=\"center center\">\r\n                      <mat-card-title>\r\n                          Travail Valider\r\n                      </mat-card-title>\r\n                  </mat-card-header>\r\n                  <mat-card-content>\r\n                    <div\r\n                    cdkDropList\r\n                    #validerList=\"cdkDropList\"\r\n                    [cdkDropListData]=\"valider\"\r\n                    [cdkDropListConnectedTo]=\"[aFaireList, encoursList,refaireList]\"\r\n                    class=\"example-list\"\r\n                    (cdkDropListDropped)=\"drop($event, 'VALIDER')\">\r\n                      <div class=\"example-box valider\" *ngFor=\"let item of valider\" fxLayout=\"column\" cdkDrag>\r\n                        <h4>{{item.appellation}}</h4>\r\n                            <p class=\"w-100\"><i>date demarrage</i> : {{item.dateDemarrage | date : 'dd LLLL yyyy'}}</p>\r\n                            <p class=\"w-100\"><i>Date finition </i>: {{item.dateFinition | date : 'dd LLLL yyyy'}} </p>\r\n                            <p class=\"w-100\"><i>Nombre de jour</i> : {{nombreJour(item)}} Jours</p>\r\n                            <p class=\"w-100\"><i>Assigné à</i> : {{item.utilisateur.utilisateurs.nom | uppercase}} {{item.utilisateur.utilisateurs.nom}}</p>\r\n                            <span fxLayoutAlign=\"end center\">\r\n                              <button mat-icon-button (click)=\"voirPlus(item)\">\r\n                                  voir+\r\n                              </button>\r\n                           </span>\r\n                      </div>\r\n                      <div class=\"example-box valider\">\r\n                            \r\n                      </div>\r\n                  </div>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n      </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n");

/***/ }),

/***/ "OEg8":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/taches/update-taches/update-taches.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UpdateTachesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTachesComponent", function() { return UpdateTachesComponent; });
/* harmony import */ var _raw_loader_update_taches_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update-taches.component.html */ "RV+r");
/* harmony import */ var _update_taches_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-taches.component.scss */ "8CHN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_features_user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/features/user-affecter-projet-renovation/user-affecter-projet.service */ "Ta7a");
/* harmony import */ var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/SnackBar */ "77k+");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _gestion_taches_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gestion-taches.services */ "q1+a");
/* harmony import */ var src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/utils/app-confirm/app-confirm.service */ "iN25");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let UpdateTachesComponent = class UpdateTachesComponent {
    constructor(confirm, dialogRef, snackBar, dialog, data, fb, tacheService) {
        this.confirm = confirm;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.tacheService = tacheService;
        this.userList = [];
        this.isLoadingResults = false;
    }
    ngOnInit() {
        this.isLoadingResults = true;
        this.tacheService.getUser(_demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_7__["DemarrageProjetRenovationComponent"].projetRenovation.id).subscribe((data) => {
            this.userList = data;
            this.isLoadingResults = false;
        });
        this.init();
    }
    init() {
        if (this.data.tache) {
            this.tacheForm = this.fb.group({
                id: [this.data.tache.id],
                appellation: [this.data.tache.appellation, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: [this.data.tache.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                dateDemarrage: [this.data.tache.dateDemarrage, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                dateFinition: [this.data.tache.dateFinition, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                utilisateur: [this.data.tache.utilisateur, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                enregistre: [null],
                niveauAvancer: this.data.tache.niveauAvancer,
                sommeTache: [this.data.tache.sommeTache, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                projetRenovation: [_demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_7__["DemarrageProjetRenovationComponent"].projetRenovation,],
            });
        }
        else {
            this.tacheForm = this.fb.group({
                id: [null],
                appellation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                dateDemarrage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                dateFinition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                utilisateur: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                enregistre: [null],
                niveauAvancer: null,
                sommeTache: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                projetRenovation: [_demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_7__["DemarrageProjetRenovationComponent"].projetRenovation,],
            });
        }
    }
    onSubmit() {
        this.isLoadingResults = true;
        this.tacheService.verifierTaches(this.tacheForm.value).subscribe((data) => {
            var list = data;
            console.log(data);
            if (list.length > 0) {
                this.TachesExisteDeja();
            }
            else {
                this.enregistrer();
            }
        }, (error) => {
            console.log(error);
        });
    }
    TachesExisteDeja() {
        this.confirm.confirm({
            title: "Conflit de Taches",
            message: "Il y a deja une tache en cours selon la date choisi. Voulez-vous continuer ? "
        }).subscribe(($choix) => {
            if ($choix) {
                this.Remeniation();
            }
            else {
                this.isLoadingResults = false;
            }
        });
    }
    Remeniation() {
        this.confirm.confirm({
            title: "Comment Enregistrer la tache",
            message: ` doit-on enregistrer la tache parallelement ou decaller les dates? `,
            buttun1: `Enregistré simplement`,
            buttun2: `Enregistré avec decallage`
        }).subscribe(($choix) => {
            if ($choix) {
                this.tacheForm.get('enregistre').setValue("Decaller");
            }
            else {
                this.tacheForm.get('enregistre').setValue("Parallele");
            }
            console.log(this.tacheForm.value);
            this.enregistrer();
        });
    }
    enregistrer() {
        if (this.data.tache) {
            this.tacheService.updatetaches(this.data.tache.id, this.tacheForm.value).subscribe((data) => {
                this.isLoadingResults = false;
            }, (error) => {
                this.isLoadingResults = false;
                if (error.status < 300) {
                    this.dialogRef.close();
                    this.snackBar.openSnackBar("Element modifier  avec succès", "OK", 3000);
                }
                else {
                    this.snackBar.openSnackBar("Element non Ajouter car tache existe deja", "OK", 3000);
                }
            });
        }
        else {
            this.tacheService.addtaches(this.tacheForm.value).subscribe((data) => {
                //console.log(data);
                this.isLoadingResults = false;
            }, (error) => {
                this.isLoadingResults = false;
                if (error.status < 300) {
                    this.dialogRef.close();
                    this.snackBar.openSnackBar("Element Ajouter  avec succès", "OK", 3000);
                }
                else {
                    this.snackBar.openSnackBar("Element non Ajouter car tache existe deja", "OK", 3000);
                }
            });
        }
    }
};
UpdateTachesComponent.ctorParameters = () => [
    { type: src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _gestion_taches_services__WEBPACK_IMPORTED_MODULE_8__["GestionTacheService"] }
];
UpdateTachesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-update-taches',
        template: _raw_loader_update_taches_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [src_app_features_user_affecter_projet_renovation_user_affecter_projet_service__WEBPACK_IMPORTED_MODULE_5__["UserAffecterProjetRenovationServices"]],
        styles: [_update_taches_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_shared_utils_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _gestion_taches_services__WEBPACK_IMPORTED_MODULE_8__["GestionTacheService"]])
], UpdateTachesComponent);



/***/ }),

/***/ "QWJR":
/*!******************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/taches/taches.module.ts ***!
  \******************************************************************************/
/*! exports provided: routes, TachesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TachesModule", function() { return TachesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _taches_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taches.component */ "BgE4");
/* harmony import */ var _update_taches_update_taches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-taches/update-taches.component */ "OEg8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _gestion_taches_gestion_taches_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gestion-taches/gestion-taches.component */ "dppI");
/* harmony import */ var _gestion_taches_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gestion-taches.services */ "q1+a");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const routes = [
    { path: '', component: _taches_component__WEBPACK_IMPORTED_MODULE_2__["TachesComponent"], data: { breadcrumb: 'taches' } },
];
let TachesModule = class TachesModule {
};
TachesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_taches_component__WEBPACK_IMPORTED_MODULE_2__["TachesComponent"], _update_taches_update_taches_component__WEBPACK_IMPORTED_MODULE_3__["UpdateTachesComponent"], _gestion_taches_gestion_taches_component__WEBPACK_IMPORTED_MODULE_11__["GestionTachesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]
        ],
        providers: [
            _gestion_taches_services__WEBPACK_IMPORTED_MODULE_12__["GestionTacheService"]
        ],
        exports: [
            _gestion_taches_gestion_taches_component__WEBPACK_IMPORTED_MODULE_11__["GestionTachesComponent"]
        ]
    })
], TachesModule);



/***/ }),

/***/ "RV+r":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/taches/update-taches/update-taches.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-title color=\"primary\">\r\n    <h3 *ngIf=\"data.tache\">Modifier Une tache</h3>\r\n    <h3 *ngIf=\"!data.tache\">AJouter Une tache</h3>\r\n</div>\r\n<div mat-dialog-content *ngIf=\"!isLoadingResults\">\r\n    <form [formGroup]=\"tacheForm\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>appellation de la tache</mat-label>\r\n                <input matInput #input  placeholder=\"Ex. Nougat\"  formControlName=\"appellation\">\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            \r\n\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                \r\n                    <mat-label>date de debut et de fin</mat-label>\r\n                    <mat-date-range-input [rangePicker]=\"picker\">\r\n                      <input matStartDate formControlName=\"dateDemarrage\" placeholder=\"Start date\">\r\n                      <input matEndDate formControlName=\"dateFinition\" placeholder=\"End date\">\r\n                    </mat-date-range-input>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-date-range-picker #picker></mat-date-range-picker>\r\n                  \r\n                    <!-- <mat-error *ngIf=\"range.controls.dateDemarrage.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\r\n                    <mat-error *ngIf=\"range.controls.dateFinition.hasError('matEndDateInvalid')\">Invalid end date</mat-error> -->\r\n            </mat-form-field>\r\n\r\n            <ng-select class=\"select\"  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"userList\"\r\n                   bindLabel=\"utilisateurs.email\"\r\n                   placeholder=\"Selectionner l'utilisateur pour la tache\"\r\n                   formControlName=\"utilisateur\">\r\n                   <ng-template ng-loadingspinner-tmp>\r\n                    <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Description de la tache</mat-label>\r\n                <textarea matInput placeholder=\"Description de la tache\" formControlName=\"description\" maxlength=\"300\"></textarea>\r\n                \r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n                <mat-label>Budget reserver pour la tache</mat-label>\r\n                <input matInput type=\"number\" #input formControlName=\"sommeTache\" max=\"80000000\" min=\"0\">\r\n                <span matSuffix ><b>euros</b></span>\r\n            </mat-form-field>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"tacheForm.value\" >Annuler</button>\r\n        <button mat-raised-button (click)=\"onSubmit()\" [disabled]=\"tacheForm.invalid\" color=\"primary\" >Enregistrer</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "TzIp":
/*!***********************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/taches/taches.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.containe {\n  width: 100%;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 100%;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.valider {\n  border-left: 6px solid #09ac73;\n  color: #09ac73;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.init {\n  border-left: 6px solid #2206c2;\n  color: #2206c2;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.encours {\n  border-left: 6px solid #ec8b0b;\n  color: #ec8b0b;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.revoir {\n  border-left: 6px solid #ec0b69;\n  color: #ec0b69;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.header-card {\n  width: 100%;\n}\n\n.example-container {\n  width: 100%;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky-border-elem-right {\n  border-left: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky-border-elem-left {\n  border-right: 1px solid #e0e0e0;\n}\n\n.user-name {\n  padding: 0 12px;\n  font-weight: 400;\n}\n\n.user-content {\n  padding: 10px;\n}\n\n.user-content .user-img {\n  position: relative;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .mat-slide-toggle {\n  margin-top: 15px;\n}\n\n.user-content .user-details span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.user-content .user-details .mat-icon {\n  padding: 2px 10px;\n}\n\n.user-content .user-details.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.user-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.example-full-width {\n  width: 60%;\n  cursor: pointer;\n}\n\n.mat-row:nth-child(even) {\n  background-color: rgba(8, 106, 235, 0.247);\n}\n\n.mat-row:nth-child(odd) {\n  background-color: rgba(252, 249, 249, 0.116);\n}\n\nth.mat-sort-header-sorted {\n  color: red;\n}\n\n.recherche {\n  width: 80%;\n}\n\n.button-add {\n  padding: 20px;\n}\n\np {\n  text-align: left;\n  font-size: 10px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFjaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNJLFdBQUE7QUFDTjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBQ0o7O0FBSUU7RUFDRSxVQUFBO0FBREo7O0FBSUU7RUFDRSxzREFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0Usc0RBQUE7QUFESjs7QUFJRTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFETjs7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNJLFdBQUE7QUFBTjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsOEJBQUE7QUFBSjs7QUFHRTtFQUNFLCtCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7O0FBQVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVo7O0FBRFk7RUFDSSxZQUFBO0FBR2hCOztBQUFRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVaOztBQUNJO0VBQ0ksZ0JBQUE7QUFDUjs7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFaOztBQUVRO0VBQ0ksaUJBQUE7QUFBWjs7QUFFUTtFQUNJLFlBQUE7QUFBWjs7QUFLQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBR0k7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQURSOztBQUdJO0VBQ0ksWUFBQTtBQURSOztBQUdJO0VBQ0ksa0JBQUE7QUFEUjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQURSOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNJLDBDQUFBO0FBREo7O0FBSUE7RUFDSSw0Q0FBQTtBQURKOztBQUlJO0VBQ0ksVUFBQTtBQURSOztBQUtNO0VBQ0UsVUFBQTtBQUZSOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZGIiwiZmlsZSI6InRhY2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmV7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZXhhbXBsZS1saXN0IHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG5cclxuICAudmFsaWRlcntcclxuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZ2IoOSwgMTcyLCAxMTUpO1xyXG4gICAgICBjb2xvcjogcmdiKDksIDE3MiwgMTE1KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbml0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAgcmdiKDM0LCA2LCAxOTQpO1xyXG4gICAgY29sb3I6IHJnYigzNCwgNiwgMTk0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmVuY291cnN7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICByZ2IoMjM2LCAxMzksIDExKTtcclxuICAgIGNvbG9yOiByZ2IoMjM2LCAxMzksIDExKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnJldm9pcntcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIHJnYigyMzYsIDExLCAxMDUpO1xyXG4gICAgY29sb3I6IHJnYigyMzYsIDExLCAxMDUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5oZWFkZXItY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLXJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZS1zdGlja3ktYm9yZGVyLWVsZW0tbGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udXNlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAudXNlci1pbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICYuYmxvY2tlZCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC04cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYmxvY2tlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyLXNlYXJjaCB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLnNob3cge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoOCwgMTA2LCAyMzUsIDAuMjQ3KTtcclxuICAgIH1cclxuXHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1MiwgMjQ5LCAyNDksIDAuMTE2KTtcclxuICAgIH1cclxuXHJcbiAgICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLnJlY2hlcmNoZXtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcblxyXG4uYnV0dG9uLWFkZHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "q1+a":
/*!****************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/taches/gestion-taches.services.ts ***!
  \****************************************************************************************/
/*! exports provided: GestionTacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionTacheService", function() { return GestionTacheService; });
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



let GestionTacheService = class GestionTacheService {
    constructor(http) {
        this.http = http;
    }
    gettachess(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE + "" + id);
    }
    addtaches(taches) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE, taches);
    }
    deletetaches(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE + "" + id);
    }
    updatetaches(id, taches) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE + "" + id, taches);
    }
    verifierTaches(taches) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.GESTION_TACHE + "verifierTache", taches);
    }
    getUser(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.DEMARRAGERENAUVATION.AGENDA_SYSTEM + "user-projet/" + id);
    }
};
GestionTacheService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GestionTacheService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], GestionTacheService);



/***/ })

}]);
//# sourceMappingURL=taches-taches-module-es2015.js.map