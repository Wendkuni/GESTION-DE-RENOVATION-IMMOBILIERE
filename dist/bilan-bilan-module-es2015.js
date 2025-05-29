(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bilan-bilan-module"],{

/***/ "+MYY":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/finance-projet/finance-projet.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FinanceProjetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceProjetComponent", function() { return FinanceProjetComponent; });
/* harmony import */ var _raw_loader_finance_projet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./finance-projet.component.html */ "djF+");
/* harmony import */ var _finance_projet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance-projet.component.scss */ "PEci");
/* harmony import */ var src_app_shared_models_demarrage_projet_projet_renovation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/demarrage-projet/projet-renovation.model */ "0brl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let FinanceProjetComponent = class FinanceProjetComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = true;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Taches';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Sommes';
        this.sommeTotal = 0;
        this.colorRapprot = {
            domain: ['green', 'red']
        };
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.petitEcran = false;
        this.settings = this.appSettings.settings;
        //Object.assign(this, {single}); 
        if (window.innerWidth > 555) {
            this.petitEcran = true;
        }
    }
    ngOnInit() {
        //this.petitEcran = false;
        this.organiseTache();
        this.listeRapport = [{
                name: "Budget Restant Du Bugdet Global",
                value: this.projet.budget - this.sommeTotal,
            },
            {
                name: "Budget Total Pour Les Taches Effectuer",
                value: this.sommeTotal,
            }
        ];
    }
    onSelect(event) {
        console.log(event);
    }
    organiseTache() {
        this.colorScheme.domain = [];
        this.single = [];
        this.sommeTotal = 0;
        let color = '';
        for (let i = 0; i < this.taches.length; i++) {
            if (this.taches[i].niveauAvancer == "VALIDER") {
                color = "green";
            }
            else if (this.taches[i].niveauAvancer == "ENCOURS") {
                color = "yellow";
            }
            else if (this.taches[i].niveauAvancer == "AREFAIRE") {
                color = "purple";
            }
            else {
                color = "#0096A6";
            }
            this.sommeTotal += this.taches[i].sommeTache;
            this.colorScheme.domain.push(color);
            let tach = {
                name: this.taches[i].appellation,
                value: this.taches[i].sommeTache,
            };
            this.single.push(tach);
        }
    }
};
FinanceProjetComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] }
];
FinanceProjetComponent.propDecorators = {
    taches: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["taches",] }],
    projet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["projet",] }]
};
FinanceProjetComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-finance-projet',
        template: _raw_loader_finance_projet_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_finance_projet_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]])
], FinanceProjetComponent);



/***/ }),

/***/ "/eDu":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/circulaire/circulaire.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CirculaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirculaireComponent", function() { return CirculaireComponent; });
/* harmony import */ var _raw_loader_circulaire_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./circulaire.component.html */ "9950");
/* harmony import */ var _circulaire_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circulaire.component.scss */ "ryLS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CirculaireComponent = class CirculaireComponent {
    constructor() {
        this.valider = 0;
        this.refare = 0;
        this.encours = 0;
        this.afaire = 0;
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#378D3B', 'rgb(22, 12, 160)', 'rgb(193, 20, 228)', 'rgb(228, 207, 20)']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.getElement();
        this.data = [{ name: "TACHE FINI", value: this.valider }, { name: "TACHE A FAIRE", value: this.afaire }, { name: "TACHE A REPRENDRE", value: this.refare }, { name: "TACHE ENCOURS", value: this.encours }];
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.data = [...this.data]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
    getElement() {
        this.taches.forEach((tache, index) => {
            if (tache.niveauAvancer == 'VALIDER') {
                this.valider++;
            }
            else if (tache.niveauAvancer == 'ENCOURS') {
                this.encours++;
            }
            else if (tache.niveauAvancer == 'AREFAIRE') {
                this.refare++;
            }
            else {
                this.afaire++;
            }
        });
    }
};
CirculaireComponent.ctorParameters = () => [];
CirculaireComponent.propDecorators = {
    taches: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["taches",] }],
    resizedDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['resizedDiv',] }]
};
CirculaireComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-circulaire',
        template: _raw_loader_circulaire_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_circulaire_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], CirculaireComponent);



/***/ }),

/***/ "07Sr":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/bilan/bilan.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner mat-elevation-z8\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>\r\n  </div>\r\n\r\n<!-- <span *ngIf=\"!isLoadingResults\" >\r\n    \r\n</span> -->\r\n\r\n<mat-tab-group *ngIf=\"!isLoadingResults\" mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4 block p-0\">\r\n  <mat-tab label=\"Diagramme de Gantt\"><app-gantt [taches]=\"tacheList\"></app-gantt></mat-tab>\r\n  <mat-tab label=\"Evolution des taches\"><app-circulaire [taches]=\"tacheList\"></app-circulaire></mat-tab>\r\n  <mat-tab *ngIf=\"isGerant==1\" label=\"Budget des Realisation\"> <app-finance-projet [taches]=\"tacheList\" [projet]=\"projet\"></app-finance-projet> </mat-tab>\r\n  \r\n</mat-tab-group>");

/***/ }),

/***/ "0brl":
/*!***************************************************************************!*\
  !*** ./src/app/shared/models/demarrage-projet/projet-renovation.model.ts ***!
  \***************************************************************************/
/*! exports provided: ProjetRenauvation, UserAffecterProjet, Agenda, Tache, Dossier, DocumentSelect, Fichier, CanalChat, ChatUser, AvancerTache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetRenauvation", function() { return ProjetRenauvation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAffecterProjet", function() { return UserAffecterProjet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agenda", function() { return Agenda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tache", function() { return Tache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dossier", function() { return Dossier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSelect", function() { return DocumentSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fichier", function() { return Fichier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanalChat", function() { return CanalChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUser", function() { return ChatUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvancerTache", function() { return AvancerTache; });
class ProjetRenauvation {
}
class UserAffecterProjet {
}
class Agenda {
}
class Tache {
}
class Dossier {
}
class DocumentSelect {
}
class Fichier {
}
class CanalChat {
}
class ChatUser {
}
var AvancerTache;
(function (AvancerTache) {
    AvancerTache[AvancerTache["AFAIRE"] = 0] = "AFAIRE";
    AvancerTache[AvancerTache["ENCOURS"] = 1] = "ENCOURS";
    AvancerTache[AvancerTache["VALIDER"] = 2] = "VALIDER";
    AvancerTache[AvancerTache["AREFAIRE"] = 3] = "AREFAIRE";
})(AvancerTache || (AvancerTache = {}));


/***/ }),

/***/ "4YOp":
/*!*************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/gantt/gantt.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GanttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttComponent", function() { return GanttComponent; });
/* harmony import */ var _raw_loader_gantt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gantt.component.html */ "zXRQ");
/* harmony import */ var _gantt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gantt.component.scss */ "ouG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_gantt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-gantt */ "Zk1Q");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../demarrage-projet-renovation.component */ "mgTU");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let GanttComponent = class GanttComponent {
    constructor(fb) {
        this.fb = fb;
        this.isLoadingResults = false;
        this.listeGantt = [];
        this.projet = _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_5__["DemarrageProjetRenovationComponent"].projetRenovation;
    }
    ngOnInit() {
        this.elementTransformer();
        console.log(this.listeGantt);
        this.data = this.listeGantt;
        this.editorOptions = {
            vFormat: "day",
            vEditable: false,
            vEventsChange: {
                taskname: () => {
                    console.log("taskname");
                }
            }
        };
    }
    changeData() {
        this.data = [...this.data,
            { pID: Math.random() * 100,
                pName: "new item", }];
    }
    elementTransformer() {
        this.listeGantt = [];
        let projet = {
            pID: 1,
            pName: "Projet de renovation en cours",
            pStart: this.projet.dateDemarrage,
            pEnd: this.projet.dateFinission,
            pClass: "ggroupblack",
            pLink: "",
            pMile: 0,
            pRes: this.projet.renovation.client.email,
            pComp: 0,
            pGroup: 1,
            pParent: 0,
            pOpen: 1,
            pDepend: "",
            pCaption: "",
            pNotes: "date du projet de renovation projet de renovation"
        };
        this.listeGantt.push(projet);
        let tach = this.taches.sort(function compare(a, b) {
            if (a.dateDemarrage < b.dateDemarrage)
                return -1;
            else
                return 1;
        });
        console.log(tach);
        for (let i = 0; i < tach.length; i++) {
            let id = i + 2;
            let parentId = 0;
            if (id > 2) {
                parentId = id - 1;
            }
            let color = "blue";
            let pourcent = 0;
            if (this.taches[i].niveauAvancer == "VALIDER") {
                color = "green";
                pourcent = 100;
            }
            else if (this.taches[i].niveauAvancer == "ENCOURS") {
                color = "yellow";
                pourcent = 40;
            }
            else if (this.taches[i].niveauAvancer == "AREFAIRE") {
                color = "purple";
            }
            let tache = {
                pID: id,
                pName: this.taches[i].appellation,
                pStart: this.taches[i].dateDemarrage,
                pEnd: this.taches[i].dateFinition,
                pClass: "gtask" + color,
                pLink: "",
                pMile: 0,
                pRes: this.taches[i].utilisateur.utilisateurs.nom + " " + this.taches[i].utilisateur.utilisateurs.prenom,
                pComp: this.taches[i].tauxProgression,
                pGroup: 1,
                pParent: 1,
                pOpen: 1,
                pDepend: parentId,
                pCaption: "",
                pNotes: " " + this.taches[i].description
            };
            this.listeGantt.push(tache);
        }
    }
    initialData() {
        return [
            {
                pID: 1,
                pName: "Define Chart API",
                pStart: "",
                pEnd: "",
                pClass: "ggroupblack",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 0,
                pGroup: 1,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: "Some Notes text"
            },
            {
                pID: 11,
                pName: "Chart Object",
                pStart: "2017-02-20",
                pEnd: "2017-02-20",
                pClass: "gmilestone",
                pLink: "",
                pMile: 1,
                pRes: "Shlomy",
                pComp: 100,
                pGroup: 0,
                pParent: 1,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 12,
                pName: "Task Objects",
                pStart: "",
                pEnd: "",
                pClass: "ggroupblack",
                pLink: "",
                pMile: 0,
                pRes: "Shlomy",
                pComp: 41,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 121,
                pName: "Constructor Proc #1234 of February 2017",
                pStart: "2017-02-21",
                pEnd: "2017-03-09",
                pClass: "gtaskblue",
                pLink: "",
                pMile: 0,
                pRes: "Brian T.",
                pComp: 61,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 122,
                pName: "Task Variables",
                pStart: "2017-03-06",
                pEnd: "2017-03-11",
                pClass: "gtaskred",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 60,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 123,
                pName: "Task by Minute/Hour",
                pStart: "2017-03-09",
                pEnd: "2017-03-14 12: 00",
                pClass: "gtaskyellow",
                pLink: "",
                pMile: 0,
                pRes: "Ilan",
                pComp: 60,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 124,
                pName: "Task Functions",
                pStart: "2017-03-09",
                pEnd: "2017-03-29",
                pClass: "gtaskred",
                pLink: "",
                pMile: 0,
                pRes: "Anyone",
                pComp: 60,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: "123SS",
                pCaption: "This is a caption",
                pNotes: null
            },
            {
                pID: 2,
                pName: "Create HTML Shell",
                pStart: "2017-03-24",
                pEnd: "2017-03-24",
                pClass: "gtaskyellow",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 20,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: 0,
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 3,
                pName: "Code Javascript",
                pStart: "",
                pEnd: "",
                pClass: "ggroupblack",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 0,
                pGroup: 1,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 31,
                pName: "Define Variables",
                pStart: "2017-02-25",
                pEnd: "2017-03-17",
                pClass: "gtaskpurple",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 30,
                pGroup: 0,
                pParent: 3,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 32,
                pName: "Calculate Chart Size",
                pStart: "2017-03-15",
                pEnd: "2017-03-24",
                pClass: "gtaskgreen",
                pLink: "",
                pMile: 0,
                pRes: "Shlomy",
                pComp: 40,
                pGroup: 0,
                pParent: 0,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 33,
                pName: "Draw Task Items",
                pStart: "",
                pEnd: "",
                pClass: "ggroupblack",
                pLink: "",
                pMile: 0,
                pRes: "Someone",
                pComp: 40,
                pGroup: 2,
                pParent: 3,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 332,
                pName: "Task Label Table",
                pStart: "2017-03-06",
                pEnd: "2017-03-09",
                pClass: "gtaskblue",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 60,
                pGroup: 0,
                pParent: 33,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 333,
                pName: "Task Scrolling Grid",
                pStart: "2017-03-11",
                pEnd: "2017-03-20",
                pClass: "gtaskblue",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 0,
                pGroup: 0,
                pParent: 33,
                pOpen: 1,
                pDepend: "332",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 34,
                pName: "Draw Task Bars",
                pStart: "",
                pEnd: "",
                pClass: "ggroupblack",
                pLink: "",
                pMile: 0,
                pRes: "Anybody",
                pComp: 60,
                pGroup: 1,
                pParent: 3,
                pOpen: 0,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 341,
                pName: "Loop each Task",
                pStart: "2017-03-26",
                pEnd: "2017-04-11",
                pClass: "gtaskred",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 60,
                pGroup: 0,
                pParent: 34,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 342,
                pName: "Calculate Start/Stop",
                pStart: "2017-04-12",
                pEnd: "2017-05-18",
                pClass: "gtaskpink",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 60,
                pGroup: 0,
                pParent: 34,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 343,
                pName: "Draw Task Div",
                pStart: "2017-05-13",
                pEnd: "2017-05-17",
                pClass: "gtaskred",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 60,
                pGroup: 0,
                pParent: 34,
                pOpen: 1,
                pDepend: "",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 344,
                pName: "Draw Completion Div",
                pStart: "2017-05-17",
                pEnd: "2017-06-04",
                pClass: "gtaskred",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 60,
                pGroup: 0,
                pParent: 34,
                pOpen: 1,
                pDepend: "342,343",
                pCaption: "",
                pNotes: ""
            },
            {
                pID: 35,
                pName: "Make Updates",
                pStart: "2017-07-17",
                pEnd: "2017-09-04",
                pClass: "gtaskpurple",
                pLink: "",
                pMile: 0,
                pRes: "Brian",
                pComp: 30,
                pGroup: 0,
                pParent: 3,
                pOpen: 1,
                pDepend: "333",
                pCaption: "",
                pNotes: ""
            }
        ];
    }
};
GanttComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
GanttComponent.propDecorators = {
    editor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["editor",] }],
    taches: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["taches",] }]
};
GanttComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-gantt',
        template: _raw_loader_gantt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gantt_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], GanttComponent);



/***/ }),

/***/ "9950":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/bilan/circulaire/circulaire.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>Evolution des taches</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"explodeSlices\" (change)=\"explodeSlices = !explodeSlices\">Explode Slices</mat-checkbox>\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"showLabels\" (change)=\"showLabels = !showLabels\">Show Labels</mat-checkbox>\r\n        </div>\r\n        <div class=\"w-100 h-300p\" #resizedDiv>\r\n            <ngx-charts-pie-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"data\"\r\n                [legend]=\"showLegend\"\r\n                [explodeSlices]=\"explodeSlices\"\r\n                [labels]=\"showLabels\"\r\n                [doughnut]=\"doughnut\"\r\n                [gradient]=\"gradient\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-pie-chart>   \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "NLLp":
/*!*********************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/bilan.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxhbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "PEci":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/finance-projet/finance-projet.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNlLXByb2pldC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "djF+":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/bilan/finance-projet/finance-projet.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Rapport de depense</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div fxLayoutAlign=\"center center\">\r\n                <ngx-charts-advanced-pie-chart\r\n                    [scheme]=\"colorRapprot\"\r\n                    [results]=\"listeRapport\"\r\n                    [gradient]=\"gradient\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-advanced-pie-chart>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card >\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Statistique de l'impact de la tache en fonction du Budget total du projet</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div fxLayoutAlign=\"center center\">\r\n                <ngx-charts-pie-grid\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"single\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-pie-grid>           \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Statistique des Taches en fonction des Primes des Taches</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div  fxLayoutAlign=\"center center\" >\r\n                <ngx-charts-bar-vertical\r\n                      [scheme]=\"colorScheme\"\r\n                      [gradient]=\"gradient\"\r\n                      [xAxis]=\"showXAxis\"\r\n                      [yAxis]=\"showYAxis\"\r\n                      [legend]=\"showLegend\"\r\n                      [showXAxisLabel]=\"showXAxisLabel\"\r\n                      [showYAxisLabel]=\"showYAxisLabel\"\r\n                      [xAxisLabel]=\"xAxisLabel\"\r\n                      [yAxisLabel]=\"yAxisLabel\"\r\n                      [results]=\"single\"\r\n                      (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "ouG2":
/*!***************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/gantt/gantt.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGdhbnR0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "ryLS":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/circulaire/circulaire.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: #160ca0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNpcmN1bGFpcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiY2lyY3VsYWlyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBjb2xvcjogcmdiKDIyLCAxMiwgMTYwKTtcclxufSJdfQ== */");

/***/ }),

/***/ "vwhf":
/*!****************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/bilan.module.ts ***!
  \****************************************************************************/
/*! exports provided: routes, BilanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilanModule", function() { return BilanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bilan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bilan.component */ "x6k7");
/* harmony import */ var _gantt_gantt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gantt/gantt.component */ "4YOp");
/* harmony import */ var _circulaire_circulaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circulaire/circulaire.component */ "/eDu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_gantt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-gantt */ "Zk1Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projet-user/user-projet.service */ "D2DK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _finance_projet_finance_projet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finance-projet/finance-projet.component */ "+MYY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    { path: '', component: _bilan_component__WEBPACK_IMPORTED_MODULE_2__["BilanComponent"], data: { breadcrumb: 'Bilan' } },
];
let BilanModule = class BilanModule {
};
BilanModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_bilan_component__WEBPACK_IMPORTED_MODULE_2__["BilanComponent"], _gantt_gantt_component__WEBPACK_IMPORTED_MODULE_3__["GanttComponent"], _circulaire_circulaire_component__WEBPACK_IMPORTED_MODULE_4__["CirculaireComponent"], _finance_projet_finance_projet_component__WEBPACK_IMPORTED_MODULE_11__["FinanceProjetComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng_gantt__WEBPACK_IMPORTED_MODULE_6__["NgGanttEditorModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ],
        providers: [_projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_8__["ListTacheService"]]
    })
], BilanModule);



/***/ }),

/***/ "x6k7":
/*!*******************************************************************************!*\
  !*** ./src/app/features/demarrage-projet-renovation/bilan/bilan.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BilanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilanComponent", function() { return BilanComponent; });
/* harmony import */ var _raw_loader_bilan_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bilan.component.html */ "07Sr");
/* harmony import */ var _bilan_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bilan.component.scss */ "NLLp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/ProjetRenovation.localStorage */ "Geum");
/* harmony import */ var src_app_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/utils/app-animation */ "NObv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../demarrage-projet-renovation.component */ "mgTU");
/* harmony import */ var _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projet-user/user-projet.service */ "D2DK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let BilanComponent = class BilanComponent {
    constructor(userTache, router, projetStorage) {
        this.userTache = userTache;
        this.router = router;
        this.projetStorage = projetStorage;
        this.tacheList = [];
        this.isGerant = 0;
        this.rechercheGeneral = '';
        this.isLoadingResults = false;
        this.projet = _demarrage_projet_renovation_component__WEBPACK_IMPORTED_MODULE_7__["DemarrageProjetRenovationComponent"].projetRenovation;
    }
    ngOnInit() {
        this.isGerant = parseInt(this.projetStorage.getGestionTache());
        this.elementUser();
    }
    elementUser() {
        this.isLoadingResults = true;
        this.userTache.gettachess(this.projet.id).subscribe((data) => {
            this.tacheList = data;
            //console.log(this.tacheList);
            this.isLoadingResults = false;
        }, (error) => {
            if (error.status > 300) {
                this.router.navigate([src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].FRONTEND_ROUTES.DASHBOARD]);
            }
        });
    }
};
BilanComponent.ctorParameters = () => [
    { type: _projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_8__["ListTacheService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_4__["ProjetStorageService"] }
];
BilanComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bilan',
        template: _raw_loader_bilan_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [src_app_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_5__["blockTransition"]],
        host: {
            '[@blockTransition]': ''
        },
        styles: [_bilan_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_projet_user_user_projet_service__WEBPACK_IMPORTED_MODULE_8__["ListTacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_ProjetRenovation_localStorage__WEBPACK_IMPORTED_MODULE_4__["ProjetStorageService"]])
], BilanComponent);



/***/ }),

/***/ "zXRQ":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/demarrage-projet-renovation/bilan/gantt/gantt.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-card-header fxLayoutAlign=\"center\">                \r\n      <mat-card-subtitle><h2>Diagramme de Gantt</h2></mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div style=\"height:90%;\">\r\n      <ng-gantt [options]=\"editorOptions\" [data]=\"data\" #editor></ng-gantt>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>");

/***/ })

}]);
//# sourceMappingURL=bilan-bilan-module-es2015.js.map