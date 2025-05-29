(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-statistique-statistique-module"], {
    /***/
    "1PoV":
    /*!*****************************************************************************************!*\
      !*** ./src/app/features/statistique/statistique-duree/statistique-duree.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function PoV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aXF1ZS1kdXJlZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "AJy+":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/statistique/statistique-elements/statistique-elements.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AJy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>statistique-elements works!</p>\n";
      /***/
    },

    /***/
    "BdIr":
    /*!***************************************************************!*\
      !*** ./src/app/features/statistique/statistique.component.ts ***!
      \***************************************************************/

    /*! exports provided: StatistiqueComponent */

    /***/
    function BdIr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatistiqueComponent", function () {
        return StatistiqueComponent;
      });
      /* harmony import */


      var _raw_loader_statistique_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./statistique.component.html */
      "r6lk");
      /* harmony import */


      var _statistique_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./statistique.component.scss */
      "bVz1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fin_projet_renovation_cloturerProjet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../fin-projet-renovation/cloturerProjet.service */
      "omVV");

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

      var StatistiqueComponent = /*#__PURE__*/function () {
        function StatistiqueComponent(projetService) {
          _classCallCheck(this, StatistiqueComponent);

          this.projetService = projetService;
          this.donneeMois = [];
          this.donneeAnnee = [];
          this.dateYear = [];
          this.listYear = [];
          this.listMois = [];
          this.listBudgetGeneral = [];
          this.listBudgetAnnee = [];
          this.listBudgetMois = [];
          this.budgetAnnee = 0;
          this.colorRapprot = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
          };
          this.budgetMois = 0;
          this.listPro = [];
          this.isLoadingResults = true;
          this.optionAnnee = false;
          this.showXAxis = true;
          this.showYAxis = true;
          this.gradient = false;
          this.showLegend = false;
          this.showXAxisLabel = true;
          this.xAxisLabelAnnee = 'Années';
          this.xAxisLabelMois = 'Mois';
          this.showYAxisLabel = true;
          this.yAxisLabel = 'nombre de projet';
          this.yAxisLabelBudget = 'Budget Total';
          this.colorScheme = {
            domain: ['#2F3E9E']
          };
          this.autoScale = true;
          this.optionMois = false;
          this.optionUtilisateur = false;
          this.optionClient = false;
          this.optionBudget = false;
          this.budgetCritere = "egale";
          this.MOIS = [{
            id: 0,
            name: 'Janvier'
          }, {
            id: 1,
            name: 'Fevrier'
          }, {
            id: 2,
            name: 'Mars'
          }, {
            id: 3,
            name: 'Avril'
          }, {
            id: 4,
            name: 'Mai'
          }, {
            id: 5,
            name: 'Juin'
          }, {
            id: 6,
            name: 'Juillet'
          }, {
            id: 7,
            name: 'Aout'
          }, {
            id: 8,
            name: 'Septembre'
          }, {
            id: 9,
            name: 'Octobre'
          }, {
            id: 10,
            name: 'Novembre'
          }, {
            id: 11,
            name: 'Decembre'
          }];
          this.getAllyear();
        }

        _createClass(StatistiqueComponent, [{
          key: "getElement",
          value: function getElement() {
            var _this = this;

            this.isLoadingResults = true;
            this.projetService.getProjet().subscribe(function (data) {
              _this.projet = data;
              console.log(_this.projet);

              _this.statistique(_this.projet);

              _this.donneeMois = [{
                name: "Nombre de projet cloturé au mois de  ",
                series: _this.listMois
              }];
              _this.donneeAnnee = [{
                name: "Nombre de projet cloturé à l'année ",
                series: _this.listYear
              }];
              _this.isLoadingResults = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getElement();
          }
        }, {
          key: "getAllyear",
          value: function getAllyear() {
            for (var i = 1996; i <= new Date().getFullYear(); i++) {
              this.dateYear.push(i + 1);
            }
          }
        }, {
          key: "rechercheNomRenovation",
          value: function rechercheNomRenovation(arr, requete) {
            return arr.filter(function (el) {
              return el.projetRenovation.renovation.nomRenovation.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
            });
          }
        }, {
          key: "rechercheOptionAnnee",
          value: function rechercheOptionAnnee(arr, requete, requete2) {
            return arr.filter(function (el) {
              if (requete2 == undefined) {
                return new Date(el.projetRenovation.dateDemarrage).getFullYear() >= requete;
              } else if (requete == undefined) {
                return new Date(el.projetRenovation.dateFinission).getFullYear() <= requete2;
              } else {
                return new Date(el.projetRenovation.dateDemarrage).getFullYear() >= requete && new Date(el.projetRenovation.dateFinission).getFullYear() <= requete2;
              } //el.projetRenovation.dateFinission.toString().toLowerCase().indexOf(requete2.toString()) !== 1;

            });
          }
        }, {
          key: "rechercheOptionMois",
          value: function rechercheOptionMois(arr, requete, requete2) {
            return arr.filter(function (el) {
              if (requete2 == undefined) {
                return new Date(el.projetRenovation.dateDemarrage).getMonth() >= requete;
              } else if (requete == undefined) {
                return new Date(el.projetRenovation.dateFinission).getMonth() < requete2;
              } else {
                return new Date(el.projetRenovation.dateDemarrage).getMonth() == requete && new Date(el.projetRenovation.dateFinission).getMonth() == requete2;
              } //el.projetRenovation.dateFinission.toString().toLowerCase().indexOf(requete2.toString()) !== 1;

            });
          }
        }, {
          key: "rechercheOptionBudget",
          value: function rechercheOptionBudget(arr, requete, requete2) {
            return arr.filter(function (el) {
              switch (requete2) {
                case "egale":
                  return el.projetRenovation.budget == requete;
                  break;

                case "superieure":
                  return el.projetRenovation.budget > requete;
                  break;

                default:
                  return el.projetRenovation.budget < requete;
              }

              return el.projetRenovation.budget == requete; //el.projetRenovation.dateFinission.toString().toLowerCase().indexOf(requete2.toString()) !== 1;
            });
          }
        }, {
          key: "rechercheOptionClient",
          value: function rechercheOptionClient(arr, requete) {
            return arr.filter(function (el) {
              return el.projetRenovation.renovation.client.email.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
            });
          }
        }, {
          key: "recherche",
          value: function recherche() {
            this.isLoadingResults = true;

            if (this.optionAnnee) {
              this.listPro = this.rechercheOptionAnnee(this.projet, this.anneeDebut, this.anneeFin);
            }

            if (this.optionMois) {
              if (this.optionAnnee) {
                this.listPro = this.rechercheOptionMois(this.listPro, this.moisDebut, this.moisFin);
              } else {
                this.listPro = this.rechercheOptionMois(this.projet, this.moisDebut, this.moisFin);
              }
            }

            if (this.optionClient) {
              if (this.optionAnnee || this.optionMois) {
                this.listPro = this.rechercheOptionClient(this.listPro, this.nomClient);
              } else {
                this.listPro = this.rechercheOptionClient(this.projet, this.nomClient);
              }
            }

            if (this.optionBudget) {
              if (this.optionAnnee || this.optionClient || this.optionMois) {
                this.listPro = this.rechercheOptionBudget(this.listPro, this.budget, this.budgetCritere);
              } else {
                this.listPro = this.rechercheOptionBudget(this.projet, this.budget, this.budgetCritere);
              }
            }

            console.log();
            this.statistique(this.listPro);
            this.donneeMois = [{
              name: "Nombre de projet cloturé au mois de  ",
              series: this.listMois
            }];
            this.donneeAnnee = [{
              name: "Nombre de projet cloturé à l'année ",
              series: this.listYear
            }];
            this.isLoadingResults = false;
          }
        }, {
          key: "listAnneeStatistique",
          value: function listAnneeStatistique(arr, requete) {
            return arr.filter(function (el) {
              //this.budgetAnnee +=el.projetRenovation.budget;
              return new Date(el.projetRenovation.dateFinission).getFullYear() == requete;
            });
          }
        }, {
          key: "listMoisStatistique",
          value: function listMoisStatistique(arr, requete, annee, BudgetMois) {
            return arr.filter(function (el) {
              BudgetMois += el.projetRenovation.budget;
              return new Date(el.projetRenovation.dateFinission).getFullYear() == annee && new Date(el.projetRenovation.dateFinission).getMonth() == requete;
            });
          }
        }, {
          key: "statistique",
          value: function statistique(list) {
            var _this2 = this;

            this.listYear = [];
            this.listBudgetAnnee = [];
            this.listMois = [];
            this.listBudgetMois = [];

            var _loop = function _loop(i) {
              _this2.budgetAnnee = 0;

              var nbA = _this2.listAnneeStatistique(list, i);

              if (nbA.length > 0 || _this2.listYear.length > 0) {
                //console.log(this.budgetAnnee)
                var anneeValue = {
                  name: i.toString(),
                  value: nbA.length
                };

                _this2.listYear.push(anneeValue);

                nbA.forEach(function (value) {
                  _this2.budgetAnnee += value.projetRenovation.budget;
                });
                var budgetAnneeValue = {
                  name: i.toString(),
                  value: _this2.budgetAnnee
                };

                _this2.listBudgetAnnee.push(budgetAnneeValue);
              }

              _this2.MOIS.forEach(function (value) {
                _this2.budgetMois = 0;

                var nbM = _this2.listMoisStatistique(list, value.id, i, _this2.budgetMois);

                if (nbM.length > 0 || _this2.listMois.length > 0) {
                  var moisValue = {
                    name: value.name + " " + i.toString(),
                    value: nbM.length
                  };

                  _this2.listMois.push(moisValue);

                  nbM.forEach(function (value) {
                    _this2.budgetMois += value.projetRenovation.budget;
                  });
                  var budgetMoisValue = {
                    name: value.name + " " + i.toString(),
                    value: _this2.budgetMois
                  };

                  _this2.listBudgetMois.push(budgetMoisValue);
                }
              });
            };

            for (var i = 1996; i <= new Date().getFullYear(); i++) {
              _loop(i);
            }

            console.log(this.listYear);
            console.log(this.listMois);
            console.log(this.listBudgetAnnee);
            console.log(this.listBudgetMois);
          }
        }]);

        return StatistiqueComponent;
      }();

      StatistiqueComponent.ctorParameters = function () {
        return [{
          type: _fin_projet_renovation_cloturerProjet_service__WEBPACK_IMPORTED_MODULE_3__["CloturerRenovationService"]
        }];
      };

      StatistiqueComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistique',
        template: _raw_loader_statistique_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_statistique_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_fin_projet_renovation_cloturerProjet_service__WEBPACK_IMPORTED_MODULE_3__["CloturerRenovationService"]])], StatistiqueComponent);
      /***/
    },

    /***/
    "CeqS":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/statistique/statistique-budget/statistique-budget.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function CeqS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aXF1ZS1idWRnZXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "CrrS":
    /*!***********************************************************************************************!*\
      !*** ./src/app/features/statistique/statistique-elements/statistique-elements.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CrrS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aXF1ZS1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "UT2c":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/statistique/statistique-duree/statistique-duree.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UT2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "VrSM":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/statistique/statistique-duree/statistique-duree.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: StatistiqueDureeComponent */

    /***/
    function VrSM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatistiqueDureeComponent", function () {
        return StatistiqueDureeComponent;
      });
      /* harmony import */


      var _raw_loader_statistique_duree_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./statistique-duree.component.html */
      "UT2c");
      /* harmony import */


      var _statistique_duree_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./statistique-duree.component.scss */
      "1PoV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");

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

      var StatistiqueDureeComponent = /*#__PURE__*/function () {
        function StatistiqueDureeComponent(appSettings) {
          _classCallCheck(this, StatistiqueDureeComponent);

          this.appSettings = appSettings;
          this.donneeMois = [];
          this.donneeAnnee = [];
          this.listeAnnee = [];
          this.listeMois = [];
          this.showXAxis = true;
          this.showYAxis = true;
          this.gradient = false;
          this.showLegend = false;
          this.showXAxisLabel = true;
          this.xAxisLabelAnnee = 'Années';
          this.xAxisLabelMois = 'Mois';
          this.showYAxisLabel = true;
          this.yAxisLabel = 'nombre de projet';
          this.colorScheme = {
            domain: ['#2F3E9E']
          };
          this.autoScale = true;
          this.settings = this.appSettings.settings; //Object.assign(this, {single, multi})   
        }

        _createClass(StatistiqueDureeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.donneeMois = [{
              name: "Nombre de projet cloturé au mois de  ",
              series: this.listeMois
            }];
            this.donneeAnnee = [{
              name: "Nombre de projet cloturé à l'année ",
              series: this.listeAnnee
            }];
          }
        }]);

        return StatistiqueDureeComponent;
      }();

      StatistiqueDureeComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      StatistiqueDureeComponent.propDecorators = {
        listeAnnee: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['listeAnnee']
        }],
        listeMois: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['listeMois']
        }]
      };
      StatistiqueDureeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistique-duree',
        template: _raw_loader_statistique_duree_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_statistique_duree_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], StatistiqueDureeComponent);
      /***/
    },

    /***/
    "bVz1":
    /*!*****************************************************************!*\
      !*** ./src/app/features/statistique/statistique.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function bVz1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aXF1ZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "dTnN":
    /*!************************************************************!*\
      !*** ./src/app/features/statistique/statistique.module.ts ***!
      \************************************************************/

    /*! exports provided: routes, StatistiqueModule */

    /***/
    function dTnN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatistiqueModule", function () {
        return StatistiqueModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _statistique_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./statistique.component */
      "BdIr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var ng_gantt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-gantt */
      "Zk1Q");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _fin_projet_renovation_cloturerProjet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../fin-projet-renovation/cloturerProjet.service */
      "omVV");
      /* harmony import */


      var _statistique_duree_statistique_duree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./statistique-duree/statistique-duree.component */
      "VrSM");
      /* harmony import */


      var _statistique_budget_statistique_budget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./statistique-budget/statistique-budget.component */
      "qw7m");
      /* harmony import */


      var _statistique_elements_statistique_elements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./statistique-elements/statistique-elements.component */
      "l67O");

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
        component: _statistique_component__WEBPACK_IMPORTED_MODULE_2__["StatistiqueComponent"],
        data: {
          breadcrumb: 'Statistique'
        }
      }];

      var StatistiqueModule = function StatistiqueModule() {
        _classCallCheck(this, StatistiqueModule);
      };

      StatistiqueModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_statistique_component__WEBPACK_IMPORTED_MODULE_2__["StatistiqueComponent"], _statistique_duree_statistique_duree_component__WEBPACK_IMPORTED_MODULE_10__["StatistiqueDureeComponent"], _statistique_budget_statistique_budget_component__WEBPACK_IMPORTED_MODULE_11__["StatistiqueBudgetComponent"], _statistique_elements_statistique_elements_component__WEBPACK_IMPORTED_MODULE_12__["StatistiqueElementsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_gantt__WEBPACK_IMPORTED_MODULE_6__["NgGanttEditorModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]],
        providers: [_fin_projet_renovation_cloturerProjet_service__WEBPACK_IMPORTED_MODULE_9__["CloturerRenovationService"]]
      })], StatistiqueModule);
      /***/
    },

    /***/
    "l67O":
    /*!*********************************************************************************************!*\
      !*** ./src/app/features/statistique/statistique-elements/statistique-elements.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: StatistiqueElementsComponent */

    /***/
    function l67O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatistiqueElementsComponent", function () {
        return StatistiqueElementsComponent;
      });
      /* harmony import */


      var _raw_loader_statistique_elements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./statistique-elements.component.html */
      "AJy+");
      /* harmony import */


      var _statistique_elements_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./statistique-elements.component.scss */
      "CrrS");
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

      var StatistiqueElementsComponent = /*#__PURE__*/function () {
        function StatistiqueElementsComponent() {
          _classCallCheck(this, StatistiqueElementsComponent);
        }

        _createClass(StatistiqueElementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatistiqueElementsComponent;
      }();

      StatistiqueElementsComponent.ctorParameters = function () {
        return [];
      };

      StatistiqueElementsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistique-elements',
        template: _raw_loader_statistique_elements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_statistique_elements_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], StatistiqueElementsComponent);
      /***/
    },

    /***/
    "qw7m":
    /*!*****************************************************************************************!*\
      !*** ./src/app/features/statistique/statistique-budget/statistique-budget.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: StatistiqueBudgetComponent */

    /***/
    function qw7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatistiqueBudgetComponent", function () {
        return StatistiqueBudgetComponent;
      });
      /* harmony import */


      var _raw_loader_statistique_budget_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./statistique-budget.component.html */
      "yLni");
      /* harmony import */


      var _statistique_budget_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./statistique-budget.component.scss */
      "CeqS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");

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

      var StatistiqueBudgetComponent = /*#__PURE__*/function () {
        function StatistiqueBudgetComponent(appSettings) {
          _classCallCheck(this, StatistiqueBudgetComponent);

          this.appSettings = appSettings;
          this.showXAxis = true;
          this.showYAxis = true;
          this.gradient = false;
          this.showLegend = false;
          this.showXAxisLabel = true;
          this.xAxisLabel = 'Country';
          this.showYAxisLabel = true;
          this.statistiqueBugetAnnee = [];
          this.statistiqueBugetMois = [];
          this.yAxisLabel = 'Population';
          this.colorScheme = {
            domain: ['#378D3B', '#0096A6', '#F47B00', '#606060']
          };
          this.settings = this.appSettings.settings; //Object.assign(this, {single, multi}); 
        }

        _createClass(StatistiqueBudgetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatistiqueBudgetComponent;
      }();

      StatistiqueBudgetComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      StatistiqueBudgetComponent.propDecorators = {
        statistiqueBugetAnnee: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['budgetStatistique']
        }],
        statistiqueBugetMois: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['budgetStatistiqueMois']
        }]
      };
      StatistiqueBudgetComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistique-budget',
        template: _raw_loader_statistique_budget_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_statistique_budget_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], StatistiqueBudgetComponent);
      /***/
    },

    /***/
    "r6lk":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/statistique/statistique.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r6lk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" class=\"flex-p\">\n        <mat-accordion>\n                    <mat-expansion-panel expanded hideToggle>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                           <h3>Critere Extraction</h3>\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\n                            <mat-checkbox \n                                [color]=\"'primary'\" \n                                (change)=\"optionAnnee=$event.checked\"\n                                [checked]=\"optionAnnee\" \n                                class=\"example-margin\">Analyse selon les années </mat-checkbox>\n                            <ng-select *ngIf=\"optionAnnee\" class=\"select\"  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"dateYear\"\n                                placeholder=\"Selectionner l'année de demarrage\"\n                                [(ngModel)]=\"anneeDebut\">\n                                <ng-template ng-loadingspinner-tmp>\n                                    <div class=\"lds-ellipsis\">\n                                        <div></div>\n                                        <div></div>\n                                        <div></div>\n                                        <div></div>\n                                    </div>\n                                </ng-template>\n                            </ng-select>\n                            <ng-select *ngIf=\"optionAnnee\" class=\"select\"  [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" [items]=\"dateYear\"\n                                placeholder=\"Selectionner l'année de demarrage\"\n                                [(ngModel)]=\"anneeFin\">\n                                <ng-template ng-loadingspinner-tmp>\n                                    <div class=\"lds-ellipsis\">\n                                        <div></div>\n                                        <div></div>\n                                        <div></div>\n                                        <div></div>\n                                    </div>\n                                </ng-template>\n                            </ng-select>\n                            \n                        </div>\n\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\n                        <mat-checkbox \n                            [color]=\"'primary'\" \n                            (change)=\"optionMois=$event.checked\"\n                            [checked]=\"optionMois\" \n                            class=\"example-margin\">Analyse selon les mois </mat-checkbox>\n                            <mat-form-field appearance=\"outline\" *ngIf=\"optionMois\">\n                                <mat-label>mois de depart chantier</mat-label>\n                                <mat-select [(ngModel)]=\"moisDebut\">\n                                    <mat-option></mat-option>\n                                    <mat-option [value]=\"option.id\" *ngFor=\"let option of MOIS\">{{ option.name }}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" *ngIf=\"optionMois\">\n                                <mat-label>mois de cloture chantier</mat-label>\n                                <mat-select [(ngModel)]=\"moisFin\">\n                                    <mat-option></mat-option>\n                                    <mat-option [value]=\"option.id\" *ngFor=\"let option of MOIS\">{{ option.name }}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            \n                        </div>\n\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\n                            <mat-checkbox \n                            [color]=\"'primary'\" \n                            (change)=\"optionClient=$event.checked\"\n                            [checked]=\"optionClient\" \n                            class=\"example-margin\">Analyse selon les clients</mat-checkbox>\n                            <mat-form-field appearance=\"outline\" *ngIf=\"optionClient\">\n                                <mat-label>mail de client</mat-label>\n                                <input matInput [(ngModel)]=\"nomClient\" (keyup)=\"rechercheOptionClient(projet, nomClient)\">\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\n                            <mat-checkbox \n                                [color]=\"'primary'\" \n                                (change)=\"optionBudget=$event.checked\"\n                                [checked]=\"optionBudget\" \n                                class=\"example-margin\">Analyse selon le budget</mat-checkbox>\n                            <mat-form-field appearance=\"outline\" *ngIf=\"optionBudget\">\n                                <mat-label>entre le bugdet</mat-label>\n                                <input matInput [(ngModel)]=\"budget\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" *ngIf=\"optionBudget\">\n                                <mat-label>Critere </mat-label>\n                                <mat-select [(ngModel)]=\"budgetCritere\">\n                                    <mat-option value=\"egale\">egale</mat-option>\n                                    <mat-option value=\"superieure\">superieure</mat-option>\n                                    <mat-option value=\"inferieure\">inferieure</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\n                            <button mat-raised-button \n                            (click)=\"recherche()\" color=\"primary\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\" >\n                                Rechercher\n                            </button>\n                        </div>\n                    </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</div>\n\n<div fxLayout=\"row wrap\" *ngIf=\"!isLoadingResults\">\n    <div fxFlex=\"100\" class=\"flex-p\">\n<mat-tab-group mat-stretch-tabs>\n  <mat-tab label=\"Statistique en fonction de la durée\">\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\n    <div fxFlex=\"100\" class=\"flex-p\"> \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center center\">                \n                <mat-card-subtitle><h2>nombre de projet realiser en fonction des années</h2></mat-card-subtitle>\n            </mat-card-header>\n            <div class=\"w-100 h-300p\">\n                <ngx-charts-line-chart\n                    [scheme]=\"colorScheme\"\n                    [results]=\"donneeAnnee\"\n                    [gradient]=\"gradient\"\n                    [xAxis]=\"showXAxis\"\n                    [yAxis]=\"showYAxis\"\n                    [legend]=\"showLegend\"\n                    [showXAxisLabel]=\"showXAxisLabel\"\n                    [showYAxisLabel]=\"showYAxisLabel\"\n                    [xAxisLabel]=\"xAxisLabelAnnee\"\n                    [yAxisLabel]=\"yAxisLabel\"\n                    [autoScale]=\"autoScale\">\n                </ngx-charts-line-chart>                  \n            </div>\n        </mat-card>\n    </div>\n    <div fxFlex=\"100\" class=\"flex-p\">\n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center center\">                \n                <mat-card-subtitle><h2>nombre de projet realiser en fonction des mois</h2></mat-card-subtitle>\n            </mat-card-header>\n            <div class=\"w-100 h-300p\">\n                <ngx-charts-area-chart\n                    [scheme]=\"colorScheme\"\n                    [results]=\"donneeMois\"\n                    [gradient]=\"gradient\"\n                    [xAxis]=\"showXAxis\"\n                    [yAxis]=\"showYAxis\"\n                    [legend]=\"showLegend\"\n                    [showXAxisLabel]=\"showXAxisLabel\"\n                    [showYAxisLabel]=\"showYAxisLabel\"\n                    [xAxisLabel]=\"xAxisLabelMois\"\n                    [yAxisLabel]=\"yAxisLabel\"\n                    [autoScale]=\"autoScale\">\n                </ngx-charts-area-chart>         \n            </div>\n        </mat-card>\n    </div>\n    <div fxFlex=\"100\" > \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center center\">                \n                <mat-card-subtitle><h2>Rapport total du budget des projets realisés en fonction des années</h2></mat-card-subtitle>\n            </mat-card-header>\n            <div class=\"w-100 h-300p\">\n                <ngx-charts-bar-vertical\n                      [scheme]=\"colorScheme\"\n                      [gradient]=\"gradient\"\n                      [xAxis]=\"showXAxis\"\n                      [yAxis]=\"showYAxis\"\n                      [legend]=\"showLegend\"\n                      [showXAxisLabel]=\"showXAxisLabel\"\n                      [showYAxisLabel]=\"showYAxisLabel\"\n                      [xAxisLabel]=\"xAxisLabelAnnee\"\n                      [yAxisLabel]=\"yAxisLabelBudget\"\n                      [results]=\"listBudgetAnnee\">\n                </ngx-charts-bar-vertical>                  \n            </div>\n        </mat-card>\n    </div>\n    <div fxFlex=\"100\" class=\"flex-p\"> \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center center\">                \n                <mat-card-subtitle><h2>Rapport total du budget des projets realisés en fonction des mois</h2></mat-card-subtitle>\n            </mat-card-header>\n            <div class=\"w-100 h-300p\">\n                <ngx-charts-bar-vertical\n                      [scheme]=\"colorScheme\"\n                      [gradient]=\"gradient\"\n                      [xAxis]=\"showXAxis\"\n                      [yAxis]=\"showYAxis\"\n                      [legend]=\"showLegend\"\n                      [showXAxisLabel]=\"showXAxisLabel\"\n                      [showYAxisLabel]=\"showYAxisLabel\"\n                      [xAxisLabel]=\"xAxisLabelMois\"\n                      [yAxisLabel]=\"yAxisLabelBudget\"\n                      [results]=\"listBudgetMois\">\n                </ngx-charts-bar-vertical>                  \n            </div>\n        </mat-card>\n    </div>\n    \n</div>\n\n  </mat-tab>\n  <mat-tab label=\"Statistique en fonction du buget\">\n<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\n    <div fxFlex=\"100\" class=\"flex-p\"> \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center center\">                \n                <mat-card-subtitle><h2>Rapport total du budget des projets realisés en fonction des années</h2></mat-card-subtitle>\n            </mat-card-header>\n            <div fxLayoutAlign=\"center center\">\n                <ngx-charts-advanced-pie-chart\n                    [scheme]=\"colorRapprot\"\n                    [results]=\"listBudgetAnnee\"\n                    [gradient]=\"gradient\">\n                </ngx-charts-advanced-pie-chart>         \n            </div>\n        </mat-card>\n    </div>\n     <div fxFlex=\"100\" class=\"flex-p\"> \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center center\">                \n                <mat-card-subtitle><h2>Rapport total du budget des projets realisés en fonction des mois</h2></mat-card-subtitle>\n            </mat-card-header>\n            <div fxLayoutAlign=\"center center\">\n                <ngx-charts-advanced-pie-chart\n                    [scheme]=\"colorRapprot\"\n                    [results]=\"listBudgetMois\"\n                    [gradient]=\"gradient\">\n                </ngx-charts-advanced-pie-chart>         \n            </div>\n        </mat-card>\n    </div>\n</div>\n  </mat-tab>\n</mat-tab-group>\n    </div>\n</div>\n\n";
      /***/
    },

    /***/
    "yLni":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/statistique/statistique-budget/statistique-budget.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yLni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-statistique-statistique-module-es5.js.map