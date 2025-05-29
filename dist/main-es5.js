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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+64y":
    /*!********************************************************!*\
      !*** ./src/app/features/login/_helper/localStorage.ts ***!
      \********************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
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

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';
      var MENU_KEY = 'menu';
      var USER_NAME = 'utilisateur';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "saveUtilisateur",
          value: function saveUtilisateur(token) {
            window.sessionStorage.removeItem(USER_NAME);
            window.sessionStorage.setItem(USER_NAME, token);
          }
        }, {
          key: "getUtilisateur",
          value: function getUtilisateur() {
            return sessionStorage.getItem(USER_NAME);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(sessionStorage.getItem(USER_KEY));
          }
        }, {
          key: "setMenu",
          value: function setMenu(menu) {
            window.sessionStorage.removeItem(MENU_KEY);
            window.sessionStorage.setItem(MENU_KEY, JSON.stringify(menu));
          }
        }, {
          key: "getMenu",
          value: function getMenu() {
            return JSON.parse(sessionStorage.getItem(MENU_KEY));
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], TokenStorageService);
      /***/
    },

    /***/
    "+I49":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/applications/applications.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function I49(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n.applications .header {\n  width: 250px;\n  font-size: 16px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7QUFBUjtBQUNRO0VBQ0ksWUFBQTtBQUNaO0FBQVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVoQiIsImZpbGUiOiJhcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbGljYXRpb25ze1xyXG4gICAgLm1hdC10b29sYmFyLCAubWF0LXRvb2xiYXItcm93e1xyXG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "/RaO":
    /*!*********************************!*\
      !*** ./src/app/app.settings.ts ***!
      \*********************************/

    /*! exports provided: AppSettings */

    /***/
    function RaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.settings.model */
      "wdBf");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);

        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Gradus', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        true, //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'indigo-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false, // true = rtl, false = ltr
        true // true = has footer, false = no footer
        );
      };

      AppSettings = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AppSettings);
      /***/
    },

    /***/
    "/eTi":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/error_component/error404/error404.component.ts ***!
      \***********************************************************************/

    /*! exports provided: Error404Component */

    /***/
    function eTi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
        return Error404Component;
      });
      /* harmony import */


      var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./error404.component.html */
      "P3Of");
      /* harmony import */


      var _error404_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error404.component.scss */
      "9sgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var Error404Component = /*#__PURE__*/function () {
        function Error404Component(appSettings, router) {
          _classCallCheck(this, Error404Component);

          this.appSettings = appSettings;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(Error404Component, [{
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.settings.loadingSpinner = false;
          }
        }]);

        return Error404Component;
      }();

      Error404Component.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      Error404Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-error404',
        template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error404_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], Error404Component);
      /***/
    },

    /***/
    "/y/e":
    /*!*******************************************!*\
      !*** ./src/app/layout/menu/menu.model.ts ***!
      \*******************************************/

    /*! exports provided: Menu */

    /***/
    function yE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Menu", function () {
        return Menu;
      });

      var Menu = function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        _classCallCheck(this, Menu);

        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
      };
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\yameogo\Desktop\.statistique\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "096P":
    /*!***********************************************************!*\
      !*** ./src/app/layout/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "bF3J");
      /* harmony import */


      var _breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./breadcrumb.component.scss */
      "ZI+9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../app.settings */
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

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
          var _this = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.title = title;
          this.breadcrumbs = [];
          this.settings = this.appSettings.settings;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
              _this.breadcrumbs = [];

              _this.parseRoute(_this.router.routerState.snapshot.root);

              _this.pageTitle = "";

              _this.breadcrumbs.forEach(function (breadcrumb) {
                _this.pageTitle += ' > ' + breadcrumb.name;
              });

              _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "parseRoute",
          value: function parseRoute(node) {
            if (node.data['breadcrumb']) {
              if (node.url.length) {
                var urlSegments = [];
                node.pathFromRoot.forEach(function (routerState) {
                  urlSegments = urlSegments.concat(routerState.url);
                });
                var url = urlSegments.map(function (urlSegment) {
                  return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                  name: node.data['breadcrumb'],
                  url: '/' + url
                });
              }
            }

            if (node.firstChild) {
              this.parseRoute(node.firstChild);
            }
          }
        }, {
          key: "closeSubMenus",
          value: function closeSubMenus() {
            var menu = document.querySelector(".sidenav-menu-outer");

            if (menu) {
              for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];

                if (child) {
                  if (child.children[0].classList.contains('expanded')) {
                    child.children[0].classList.remove('expanded');
                    child.children[1].classList.remove('show');
                  }
                }
              }
            }
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      };

      BreadcrumbComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], BreadcrumbComponent);
      /***/
    },

    /***/
    "0Hs5":
    /*!*************************************!*\
      !*** ./src/app/layout/menu/menu.ts ***!
      \*************************************/

    /*! exports provided: verticalMenuItems, horizontalMenuItems */

    /***/
    function Hs5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function () {
        return verticalMenuItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function () {
        return horizontalMenuItems;
      });
      /* harmony import */


      var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu.model */
      "/y/e");

      var verticalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Login', '/login', null, 'exit_to_app', null, false, 0)];
      var horizontalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Login', '/login', null, 'exit_to_app', null, false, 0)];
      /*
      
      [
        {
          "href": null,
          "icon": "dashboard",
          "id": 1,
          "parentId": 0,
          "routerLink": "/",
          "target": null,
          "title": "Dashbord"
        },
        {
          "href": null,
          "icon": "dashboard",
          "id": 2,
          "parentId": 0,
          "routerLink": "/",
          "target": null,
          "title": "Renovation"
        }
      ]*/

      /***/
    },

    /***/
    "14Lx":
    /*!*****************************************************!*\
      !*** ./src/app/pipes/pagination/pagination.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: PaginationPipe */

    /***/
    function Lx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationPipe", function () {
        return PaginationPipe;
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

      var PaginationPipe = /*#__PURE__*/function () {
        function PaginationPipe() {
          _classCallCheck(this, PaginationPipe);
        }

        _createClass(PaginationPipe, [{
          key: "transform",
          value: function transform(data, args) {
            if (!args) {
              args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
              };
            }

            return this.paginate(data, args.pageSize, args.pageIndex);
          }
        }, {
          key: "paginate",
          value: function paginate(array, page_size, page_number) {
            return array.slice(page_number * page_size, (page_number + 1) * page_size);
          }
        }]);

        return PaginationPipe;
      }();

      PaginationPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'pagination'
      })], PaginationPipe);
      /***/
    },

    /***/
    "2Bgi":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/error_component/error500/error500.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                          <mat-icon>warning</mat-icon>\r\n                      </button>\r\n                    <h1 class=\"error\">404</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\">Une erreur est survenue!</span>\r\n                        <p class=\"box-text\">Vous pouvez aller à la page d'accueil.</p>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">Aller à l'acceuil</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "3FPT":
    /*!*************************************************************!*\
      !*** ./src/app/layout/flags-menu/flags-menu.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function FPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJmbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsYWdze1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "3dwk":
    /*!*********************************************!*\
      !*** ./src/app/layout/menu/menu.service.ts ***!
      \*********************************************/

    /*! exports provided: MenuService */

    /***/
    function dwk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuService", function () {
        return MenuService;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu */
      "0Hs5");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_Helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/Helper */
      "iR68");
      /* harmony import */


      var src_app_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/features/login/_helper/localStorage */
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

      var MenuService = /*#__PURE__*/function (_src_app_shared_servi) {
        _inherits(MenuService, _src_app_shared_servi);

        var _super = _createSuper(MenuService);

        function MenuService(location, http, token, router) {
          var _this2;

          _classCallCheck(this, MenuService);

          _this2 = _super.call(this);
          _this2.location = location;
          _this2.http = http;
          _this2.token = token;
          _this2.router = router;
          _this2.loading = true;
          _this2.API_MENU = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BACK_END.MENU.MENU_USER;
          return _this2;
        }

        _createClass(MenuService, [{
          key: "getVerticalMenuItems",
          value: function getVerticalMenuItems() {
            return _menu__WEBPACK_IMPORTED_MODULE_4__["verticalMenuItems"];
          }
        }, {
          key: "getAppMenu",
          value: function getAppMenu() {
            if (this.token.getToken()) {
              if (this.datas && this.datas.length > 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.datas);
              } else if (!this.observable) {
                this.observable = this.http.get(this.API_MENU + "" + this.token.getToken());
              }
            }

            return this.observable;
          }
        }, {
          key: "getHorizontalMenuItems",
          value: function getHorizontalMenuItems() {
            return _menu__WEBPACK_IMPORTED_MODULE_4__["horizontalMenuItems"];
          }
        }, {
          key: "expandActiveSubMenu",
          value: function expandActiveSubMenu(menu) {
            var _this3 = this;

            var url = this.location.path();
            var routerLink = url; // url.substring(1, url.length);

            var activeMenuItem = menu.filter(function (item) {
              return item.routerLink === routerLink;
            });

            if (activeMenuItem[0]) {
              (function () {
                var menuItem = activeMenuItem[0];

                while (menuItem.parentId != 0) {
                  var parentMenuItem = menu.filter(function (item) {
                    return item.id == menuItem.parentId;
                  })[0];
                  menuItem = parentMenuItem;

                  _this3.toggleMenuItem(menuItem.id);
                }
              })();
            }
          }
        }, {
          key: "toggleMenuItem",
          value: function toggleMenuItem(menuId) {
            var menuItem = document.getElementById('menu-item-' + menuId);
            var subMenu = document.getElementById('sub-menu-' + menuId);

            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              } else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
              }
            }
          }
        }, {
          key: "closeOtherSubMenus",
          value: function closeOtherSubMenus(menu, menuId) {
            var currentMenuItem = menu.filter(function (item) {
              return item.id == menuId;
            })[0];

            if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
              menu.forEach(function (item) {
                if (item.id != menuId) {
                  var subMenu = document.getElementById('sub-menu-' + item.id);
                  var menuItem = document.getElementById('menu-item-' + item.id);

                  if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                      subMenu.classList.remove('show');
                      menuItem.classList.remove('expanded');
                    }
                  }
                }
              });
            }
          }
        }, {
          key: "getMenuUser",
          value: function getMenuUser() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BACK_END.MENU.MENU_USER);
          }
        }]);

        return MenuService;
      }(src_app_shared_services_Helper__WEBPACK_IMPORTED_MODULE_7__["HelperService"]);

      MenuService.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: src_app_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], src_app_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MenuService);
      /***/
    },

    /***/
    "5VXd":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/utils/app-confirm/app-confirm.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VXd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 mat-dialog-title>{{ data.title }}</h1>\r\n<div mat-dialog-content>\r\n    <p> {{data.message}}</p>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button type=\"button\" mat-raised-button (click)=\"dialogRef.close(false)\">{{data.button1}}</button>\r\n    <button type=\"button\" mat-raised-button (click)=\"dialogRef.close(true)\">{{data.button2}}</button>\r\n</div>";
      /***/
    },

    /***/
    "5at3":
    /*!**************************************************!*\
      !*** ./src/app/pipes/search/user-search.pipe.ts ***!
      \**************************************************/

    /*! exports provided: UserSearchPipe */

    /***/
    function at3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function () {
        return UserSearchPipe;
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

      var UserSearchPipe = /*#__PURE__*/function () {
        function UserSearchPipe() {
          _classCallCheck(this, UserSearchPipe);
        }

        _createClass(UserSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (user) {
                if (user.profile.name) {
                  return user.profile.name.search(searchText) !== -1;
                } else {
                  return user.username.search(searchText) !== -1;
                }
              });
            }
          }
        }]);

        return UserSearchPipe;
      }();

      UserSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'UserSearchPipe',
        pure: false
      })], UserSearchPipe);
      /***/
    },

    /***/
    "5p0f":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/template/template.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function p0f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n    <mat-sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content id=\"main\" perfectScrollbar [disabled]=\"settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\">\r\n        <mat-toolbar color=\"primary\" class=\"flex-p-x\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">                    \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"toggleSidenav()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <!--<button fxShow=\"false\" fxShow.gt-xs *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button> -->\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a>  \r\n                </div>            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                        <form method=\"get\">\r\n                            <input type=\"text\" placeholder=\"Type to search...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                            <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </div>                 -->\r\n                    <app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu>\r\n                    <app-fullscreen></app-fullscreen> \r\n                    <!-- <app-applications fxShow=\"false\" fxShow.gt-sm></app-applications> -->\r\n                    <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>\r\n                    <app-user-menu></app-user-menu> \r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n\r\n        <mat-toolbar id=\"horizontal-menu\" color=\"primary\" *ngIf=\"settings.menu == 'horizontal'\" \r\n            class=\"horizontal-menu flex-p-x transition-2\"  \r\n            [class.fixed-top]=\"!settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n            </div>            \r\n        </mat-toolbar>\r\n\r\n        <div id=\"main-content\" class=\"inner-sidenav-content transition-2\" perfectScrollbar [disabled]=\"!settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\"> \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <div [class.has-footer]=\"settings.hasFooter\">\r\n                <router-outlet></router-outlet>\r\n            </div>           \r\n            <div *ngIf=\"settings.hasFooter\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"footer bg-primary\">\r\n                <div>\r\n                    <small>Copyright © 2016 - {{dateAcu}} tout droits reserver à INVESTITHOR</small>\r\n                </div>\r\n            </div> \r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n\r\n        <div #backToTop fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n    \r\n    <mat-sidenav #options position=\"end\" class=\"options\">        \r\n       \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"control mat-elevation-z1\">\r\n            <h2>Settings</h2>\r\n        </div>  \r\n\r\n        <div perfectScrollbar>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Layout</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Fixed header</span>\r\n                    <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>RTL</span>\r\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Has Footer</span>\r\n                    <mat-slide-toggle [checked]=\"settings.hasFooter\" (change)=\"settings.hasFooter = !settings.hasFooter\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <!--<div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                    <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu type</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                    <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>-->\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose theme skin</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\"> \r\n                    <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Sidenav options</h4>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Opened sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Pinned sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Sidenav user info</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavUserBlock\" (change)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "61gx":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/menu/horizontal-menu/horizontal-menu.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function gx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-menu-item {\n  position: relative;\n}\n.horizontal-menu-item .mat-button {\n  height: 56px;\n  font-weight: 400;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 5px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxZQ0ZTO0VER1QsZ0JBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFWjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0E7RUFDSSxVQUFBO0VBQ0EsTUFBQTtBQUVKIiwiZmlsZSI6Imhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhvcml6b250YWwtbWVudS1pdGVtOmhvdmVyID4gLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5ob3Jpem9udGFsLXN1Yi1tZW51IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufSIsIiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7XHJcbiRtaW5pLXNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDcwcHg7XHJcblxyXG4kZmxleC1kaXN0YW5jZTogOHB4O1xyXG4kaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc6ICRmbGV4LWRpc3RhbmNlO1xyXG5cclxuLy9Mb2dpbiwgUmVnaXN0ZXIsIEVycm9ycyBib3hcclxuJGJveC1oZWlnaHQ6IDE4NnB4O1xyXG4kYm94LXBvc2l0aW9uOiAzNHB4O1xyXG4kcmVnaXN0ZXItYm94LWhlaWdodDogMzAwcHg7XHJcblxyXG4kZm9vdGVyLWhlaWdodDogNTZweDsgIl19 */";
      /***/
    },

    /***/
    "6GRC":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/update-password/update-password.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div mat-dialog-content>\r\n    <div *ngIf=\"isLoadingResults\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n        <mat-spinner color=\"primary\"></mat-spinner>\r\n    </div>\r\n    <form [formGroup]=\"updat\">\r\n        <h3>Modifier Mot de Passe</h3>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                <mat-label>Nouveau Password</mat-label>\r\n                <input matInput #input formControlName=\"password\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" fxLayout.lt-md=\"row wrap\">\r\n            <mat-form-field appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n                <mat-label>Confirmer Password</mat-label>\r\n                <input matInput  formControlName=\"confirm\">\r\n            </mat-form-field>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout.lt-md=\"row wrap\" fxLayoutGap.gt-sm=\"20px\">\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close] >Annuler</button>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"updat.invalid\" (click)=\"onSubmit()\">Enregistrer</button>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "77k+":
    /*!*********************************************!*\
      !*** ./src/app/shared/services/SnackBar.ts ***!
      \*********************************************/

    /*! exports provided: SnackBarService */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
        return SnackBarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

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

      var SnackBarService = /*#__PURE__*/function () {
        function SnackBarService(_snackBar) {
          _classCallCheck(this, SnackBarService);

          this._snackBar = _snackBar;
        }

        _createClass(SnackBarService, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action, temps) {
            this._snackBar.open(message, action, {
              duration: temps
            });
          }
        }]);

        return SnackBarService;
      }();

      SnackBarService.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      };

      SnackBarService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], SnackBarService);
      /***/
    },

    /***/
    "8dJI":
    /*!***********************************************************!*\
      !*** ./src/app/layout/user-menu/user-menu.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function dJI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n.img-profile {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUFSO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6InVzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW1lbnV7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnVzZXItaW5mb3tcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmltZy1wcm9maWxle1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "8loJ":
    /*!************************************************!*\
      !*** ./src/app/features/inscription/_helpe.ts ***!
      \************************************************/

    /*! exports provided: MustMatch */

    /***/
    function loJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      }); // custom validator to check that two fields match


      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "9sgK":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/error_component/error404/error404.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function sgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "9xQd":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/flags-menu/flags-menu.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">      \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu> -->";
      /***/
    },

    /***/
    "AmT5":
    /*!*************************************************************!*\
      !*** ./src/app/features/login/_helper/error.interceptor.ts ***!
      \*************************************************************/

    /*! exports provided: ErrorInterceptor, genericRetryStrategy, ErrorInterceptorProviders */

    /***/
    function AmT5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "genericRetryStrategy", function () {
        return genericRetryStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProviders", function () {
        return ErrorInterceptorProviders;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(router) {
          _classCallCheck(this, ErrorInterceptor);

          this.router = router;

          this.shouldRetry = function (error) {
            return error.status >= 500 && error.status !== 401 && error.status !== 412 && error.status !== 428;
          };
        }

        _createClass(ErrorInterceptor, [{
          key: "getPathUrl",
          value: function getPathUrl(stringUrl) {
            var parsedUrl = new URL(stringUrl);
            return parsedUrl.pathname;
          }
        }, {
          key: "intercept",
          value: function intercept(request, next) {
            var _this4 = this;

            var shouldRetry = this.shouldRetry;
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(genericRetryStrategy({
              shouldRetry: shouldRetry
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              if (err.status > 499 || err.status == 0) {
                _this4.router.navigate(['/error500']);
              } else if (err.status == 403) {
                _this4.router.navigate(['/error404']);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ErrorInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ErrorInterceptor);
      var defaultParams = {
        maxAttempts: 3,
        scalingDuration: 1500,
        shouldRetry: function shouldRetry(_ref) {
          var status = _ref.status;
          return status >= 400;
        }
      };

      var genericRetryStrategy = function genericRetryStrategy() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (attempts) {
          return attempts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (error, i) {
            var _Object$assign = Object.assign(Object.assign({}, defaultParams), params),
                maxAttempts = _Object$assign.maxAttempts,
                scalingDuration = _Object$assign.scalingDuration,
                shouldRetry = _Object$assign.shouldRetry;

            var retryAttempt = i + 1;

            if (retryAttempt > maxAttempts || !shouldRetry(error)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(retryAttempt * scalingDuration);
          }));
        };
      };

      var ErrorInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: ErrorInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        FRONTEND_ROUTES: {
          LOGIN: "login",
          DASHBOARD: '',
          PROFILE_USER: 'profile',
          ERROR: 'error',
          ERROR404: 'error404',
          ERROR500: 'error500',
          RENOVATION: 'renovation',
          VALIDER_FILE_RENOVATION: 'valider-renovation',
          ROLES: 'systeme/roles',
          PROFILES: 'systeme/profiles',
          USER_MENU: 'systeme/user-menu',
          MENU: 'systeme/menu',
          CLIENT: 'user/client',
          GERANT: 'user/gerant',
          RESPONSABLE_TRAVAUX: 'user/responsable-travaux',
          BUREAU_ETUDE: 'user/bureau-etude',
          AUTRE_USER: 'user/autre-user',
          TYPE_SOCIETE: 'types-societe',
          SOCIETE: 'societe',
          PROJET_RENAUVATION: 'projet-renovation',
          DEMARRER_PROJET: 'demarrer-projet',
          CLOTURER_PROJET: 'cloturer-projet',
          PROJET_REALISER: 'projet-realiser',
          STATISTIQUE: 'statistique'
        },
        BACK_END: {
          SOCIETE: {
            SOCIETE: 'http://54.36.181.1:9090/investithorBack/societe/',
            TYPE_SOCIETE: 'http://54.36.181.1:9090/investithorBack/type-societe/'
          },
          LOGIN: {
            CONNEXION: 'http://54.36.181.1:9090/investithorBack/login/',
            CHECK_I_AM_LOGIN: 'http://54.36.181.1:9090/investithorBack/me/',
            PROFILE_UPDATE_USER: 'http://54.36.181.1:9090/investithorBack/me/profile-update/',
            PROFILE_UPDATE_CLIENT: 'http://54.36.181.1:9090/investithorBack/me/profile-update-client/',
            UPDATE_PASSWORD: 'http://54.36.181.1:9090/investithorBack/me/update-password/',
            INSCRIPTION: 'http://54.36.181.1:9090/investithorBack/login/inscription'
          },
          MENU: {
            MENU_USER: 'http://54.36.181.1:9090/investithorBack/menu-front/',
            MENU_ACTION: 'http://54.36.181.1:9090/investithorBack/menu/',
            MENU_FROM_USER: 'http://54.36.181.1:9090/investithorBack/menu-user/'
          },
          UTILISATEUR: {
            CLIENT: "http://54.36.181.1:9090/investithorBack/client/",
            AUTRE_USER: "http://54.36.181.1:9090/investithorBack/autre-user/",
            BUREAU_ETUDE: "http://54.36.181.1:9090/investithorBack/bureau-etude/",
            RESPONSABLE_TRAVAUX: "http://54.36.181.1:9090/investithorBack/responsable-travaux/",
            GERANT: "http://54.36.181.1:9090/investithorBack/gerant/"
          },
          RENOVATION: {
            CLIENT_RENOVATION: "http://54.36.181.1:9090/investithorBack/renovation/",
            VALIDATIOn_RENOVATION: "http://54.36.181.1:9090/investithorBack/valider-renovation/"
          },
          SECURITE: {
            ROLE: "http://54.36.181.1:9090/investithorBack/roles/",
            PROFILES: "http://54.36.181.1:9090/investithorBack/profiles/",
            PROFILES_USER: "http://54.36.181.1:9090/investithorBack/profileUser/"
          },
          FILEUPLOAD: "http://54.36.181.1:9090/investithorBack/files/",
          DEMARRAGERENAUVATION: {
            PROJET_RENAUVATION_GERANT: 'http://54.36.181.1:9090/investithorBack/projet-renovation-gerant/',
            USER_AFFECTER: 'http://54.36.181.1:9090/investithorBack/user-affecter-projet-renovation/',
            GESTION_TACHE: 'http://54.36.181.1:9090/investithorBack/taches/',
            TACHES_USER: 'http://54.36.181.1:9090/investithorBack/taches-effectuer/',
            AGENDA_SYSTEM: 'http://54.36.181.1:9090/investithorBack/agenda-gestion/',
            AGENDA_USER: 'http://54.36.181.1:9090/investithorBack/agenda-utilisateur/',
            DOSSIER_PROJET: 'http://54.36.181.1:9090/investithorBack/dossiers/',
            FICHIER_PROJET: 'http://54.36.181.1:9090/investithorBack/fichiers/',
            GESTION_DOSSIER: 'http://54.36.181.1:9090/investithorBack/gestion-dossiers/',
            CANAL_MESSAGERIE: 'http://54.36.181.1:9090/investithorBack/canal-messagerie/',
            MESSAGERIE_GESTION: 'http://54.36.181.1:9090/investithorBack/ws'
          },
          CLOTURER: 'http://54.36.181.1:9090/investithorBack/cloturer-projet-renovation/',
          BILAN_CLOTURE: 'http://54.36.181.1:9090/investithorBack/projet-realiser/'
        }
      }; //https://accounts.google.com/b/2/DisplayUnlockCaptcha

      /*  [
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
      ] */

      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bf1b":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/utils/view-justificatif/view-justificatif.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bf1b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.lt-md=\"row wrap\">\r\n    <h2 [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">tilte : {{justificatif.appellation}}</h2>\r\n</div>\r\n<div mat-dialog-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <img width=\"400px\" [src]=\"image\">\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <p>action</p>\r\n</div>";
      /***/
    },

    /***/
    "FBhE":
    /*!*****************************************************!*\
      !*** ./src/app/layout/messages/messages.service.ts ***!
      \*****************************************************/

    /*! exports provided: MessagesService */

    /***/
    function FBhE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
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

      var MessagesService = /*#__PURE__*/function () {
        function MessagesService() {
          _classCallCheck(this, MessagesService);

          this.messages = [{
            name: 'ashley',
            text: 'After you get up and running, you can place Font Awesome icons just about...',
            time: '1 min ago'
          }, {
            name: 'michael',
            text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
            time: '2 hrs ago'
          }, {
            name: 'julia',
            text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
            time: '10 hrs ago'
          }, {
            name: 'bruno',
            text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
            time: '1 day ago'
          }, {
            name: 'tereza',
            text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
            time: '1 day ago'
          }, {
            name: 'adam',
            text: 'Need some support to reach your goals? Apply for scholarships across...',
            time: '2 days ago'
          }, {
            name: 'michael',
            text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
            time: '1 week ago'
          }];
          this.files = [{
            text: 'gradus.zip',
            size: '~6.2 MB',
            value: '47',
            color: 'primary'
          }, {
            text: 'documentation.pdf',
            size: '~14.6 MB',
            value: '33',
            color: 'accent'
          }, {
            text: 'wallpaper.jpg',
            size: '~558 KB',
            value: '60',
            color: 'warn'
          }, {
            text: 'letter.doc',
            size: '~57 KB',
            value: '80',
            color: 'primary'
          }, {
            text: 'azimuth.zip',
            size: '~10.2 MB',
            value: '55',
            color: 'warn'
          }, {
            text: 'contacts.xlsx',
            size: '~96 KB',
            value: '75',
            color: 'accent'
          }];
          this.meetings = [{
            day: '09',
            month: 'May',
            title: 'Meeting with Bruno',
            text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
            color: 'danger'
          }, {
            day: '15',
            month: 'May',
            title: 'Training course',
            text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
            color: 'primary'
          }, {
            day: '12',
            month: 'June',
            title: 'Dinner with Ashley',
            text: 'Curabitur rhoncus facilisis augue sed fringilla.',
            color: 'info'
          }, {
            day: '14',
            month: 'June',
            title: 'Sport time',
            text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
            color: 'warning'
          }, {
            day: '29',
            month: 'July',
            title: 'Birthday of Julia',
            text: 'Nam porttitor justo nec elit efficitur vestibulum.',
            color: 'success'
          }];
        }

        _createClass(MessagesService, [{
          key: "getMessages",
          value: function getMessages() {
            return this.messages;
          }
        }, {
          key: "getFiles",
          value: function getFiles() {
            return this.files;
          }
        }, {
          key: "getMeetings",
          value: function getMeetings() {
            return this.meetings;
          }
        }]);

        return MessagesService;
      }();

      MessagesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MessagesService);
      /***/
    },

    /***/
    "GsbR":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/utils/app-confirm/app-confirm.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AppComfirmComponent */

    /***/
    function GsbR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function () {
        return AppComfirmComponent;
      });
      /* harmony import */


      var _raw_loader_app_confirm_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app-confirm.component.html */
      "5VXd");
      /* harmony import */


      var _app_confirm_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-confirm.component.scss */
      "ZBdR");
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

      var AppComfirmComponent = function AppComfirmComponent(dialogRef, data) {
        _classCallCheck(this, AppComfirmComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      };

      AppComfirmComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      AppComfirmComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_app_confirm_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_confirm_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])], AppComfirmComponent);
      /***/
    },

    /***/
    "HqDM":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/horizontal-menu/horizontal-menu.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HqDM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"start center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item w-100\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "IV9b":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/applications/applications.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IV9b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"header\">\r\n               Applications \r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>";
      /***/
    },

    /***/
    "IpfW":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidenav/sidenav.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function IpfW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span *ngIf=\"!lordMenu\">\r\n    <mat-toolbar color=\"primary\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n        <a mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">I</a>\r\n        <a *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">INVEST</a> \r\n        <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n            <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n            <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n        </svg>  \r\n    </mat-toolbar>\r\n    \r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block transition-2\" [class.show]=\"settings.sidenavUserBlock\"> \r\n        <!-- <div [fxLayout]=\"(settings.menuType != 'default') ? 'column' : 'row'\" \r\n             [fxLayoutAlign]=\"(settings.menuType != 'default') ? 'center center' : 'space-around center'\" class=\"user-info-wrapper\">\r\n            <img [src]=\"userImage\" alt=\"user-image\">\r\n            <div class=\"user-info\">\r\n                <p class=\"name\">Emilio Verdines</p>\r\n                <p *ngIf=\"settings.menuType == 'default'\" class=\"position\">Web developer <br> <small class=\"muted-text\">Member since May. 2016</small></p>\r\n            </div>\r\n        </div> -->\r\n        <div *ngIf=\"settings.menuType != 'mini'\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100 muted-text\">\r\n            <a mat-icon-button >\r\n                <button mat-icon-button matBadge=\"25\">\r\n                    <mat-icon>library_books</mat-icon>\r\n                </button>\r\n            </a>\r\n            \r\n            <a mat-icon-button>\r\n                <mat-icon matBadge=\"250\">mail_outline</mat-icon>\r\n            </a>\r\n            <a mat-icon-button matBadge=\"2\">\r\n                <mat-icon>business</mat-icon>\r\n            </a>\r\n        </div>\r\n    </div> \r\n    \r\n    <perfect-scrollbar class=\"sidenav-menu-outer\" [class.user-block-show]=\"settings.sidenavUserBlock\">\r\n        <div id=\"vertical-menu\">\r\n            <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n        </div>   \r\n    </perfect-scrollbar>\r\n</span>\r\n\r\n<span *ngIf=\"lordMenu\">\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>Chargement...</h4>\r\n    </div>\r\n</span>";
      /***/
    },

    /***/
    "JQtQ":
    /*!***********************************************************************!*\
      !*** ./src/app/layout/update-password/update-password.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function JQtQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "L0IE":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/material-modules/materialButtonIndicatorShared.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: MatButtonIndicatorSharedModule */

    /***/
    function L0IE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonIndicatorSharedModule", function () {
        return MatButtonIndicatorSharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

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

      var MatButtonIndicatorSharedModule = function MatButtonIndicatorSharedModule(matIconRegistry, domSanitizer) {
        _classCallCheck(this, MatButtonIndicatorSharedModule);

        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg')); // matIconRegistry.addSvgIconInNamespace('extra', 'thumb_up', domSanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/thumbup_icon.svg'));
      };

      MatButtonIndicatorSharedModule.ctorParameters = function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }];
      };

      MatButtonIndicatorSharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]]
      }), __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])], MatButtonIndicatorSharedModule);
      /***/
    },

    /***/
    "MNMf":
    /*!***********************************************************!*\
      !*** ./src/app/layout/fullscreen/fullscreen.component.ts ***!
      \***********************************************************/

    /*! exports provided: FullScreenComponent */

    /***/
    function MNMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function () {
        return FullScreenComponent;
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

      var FullScreenComponent = /*#__PURE__*/function () {
        function FullScreenComponent() {
          _classCallCheck(this, FullScreenComponent);

          this.toggle = false;
        }

        _createClass(FullScreenComponent, [{
          key: "requestFullscreen",
          value: function requestFullscreen(elem) {
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
              elem.webkitRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
              elem.mozRequestFullScreen();
            } else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
            } else {
              console.log('Fullscreen API is not supported.');
            }
          }
        }, {
          key: "exitFullscreen",
          value: function exitFullscreen() {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            } else {
              console.log('Fullscreen API is not supported.');
            }
          }
        }, {
          key: "getFullscreen",
          value: function getFullscreen() {
            if (this.expand) {
              this.requestFullscreen(document.documentElement);
            }

            if (this.compress) {
              this.exitFullscreen();
            }
          }
        }, {
          key: "onFullScreenChange",
          value: function onFullScreenChange() {
            var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            if (fullscreenElement != null) {
              this.toggle = true;
            } else {
              this.toggle = false;
            }
          }
        }]);

        return FullScreenComponent;
      }();

      FullScreenComponent.propDecorators = {
        expand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['expand']
        }],
        compress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['compress']
        }],
        getFullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onFullScreenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }]
      };
      FullScreenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fullscreen',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
      })], FullScreenComponent);
      /***/
    },

    /***/
    "MNl3":
    /*!******************************************************************!*\
      !*** ./src/app/shared/error_component/error-component.module.ts ***!
      \******************************************************************/

    /*! exports provided: ErrorComponentModule */

    /***/
    function MNl3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponentModule", function () {
        return ErrorComponentModule;
      });
      /* harmony import */


      var _material_modules_materialLayoutShared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../material-modules/materialLayoutShared.module */
      "NUKD");
      /* harmony import */


      var _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error500/error500.component */
      "U4Yu");
      /* harmony import */


      var _error404_error404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error404/error404.component */
      "/eTi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _material_modules_materialNavigationShared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../material-modules/materialNavigationShared.module */
      "fy1d");
      /* harmony import */


      var _material_modules_materialButtonIndicatorShared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../material-modules/materialButtonIndicatorShared.module */
      "L0IE");
      /* harmony import */


      var _material_modules_materialPopupModalShared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../material-modules/materialPopupModalShared.module */
      "Q/eX");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared.module */
      "PCNd");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ErrorComponentModule = function ErrorComponentModule() {
        _classCallCheck(this, ErrorComponentModule);
      };

      ErrorComponentModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_error404_error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__["Error500Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _material_modules_materialLayoutShared_module__WEBPACK_IMPORTED_MODULE_0__["MatLayoutSharedModule"], _material_modules_materialNavigationShared_module__WEBPACK_IMPORTED_MODULE_5__["MatNavigationSharedModule"], _material_modules_materialButtonIndicatorShared_module__WEBPACK_IMPORTED_MODULE_6__["MatButtonIndicatorSharedModule"], _material_modules_materialPopupModalShared_module__WEBPACK_IMPORTED_MODULE_7__["MatPopupModalSharedModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"]],
        exports: [_error404_error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__["Error500Component"]]
      })], ErrorComponentModule);
      /***/
    },

    /***/
    "MQax":
    /*!**********************************************!*\
      !*** ./src/app/shared/utils/utils.module.ts ***!
      \**********************************************/

    /*! exports provided: UtilsModule */

    /***/
    function MQax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsModule", function () {
        return UtilsModule;
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


      var _view_justificatif_view_justificatif_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-justificatif/view-justificatif.component */
      "ZnvB");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared.module */
      "PCNd");
      /* harmony import */


      var _uploard_file_uploard_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./uploard-file/uploard-file.component */
      "Va0h");
      /* harmony import */


      var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-dropzone-wrapper */
      "vV3i");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-confirm/app-confirm.component */
      "GsbR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DEFAULT_DROPZONE_CONFIG = {
        // Change this to your upload POST address:
        url: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BACK_END.FILEUPLOAD + 'file',
        maxFilesize: 50,
        acceptedFiles: 'image/*,application/pdf',
        addRemoveLinks: true
      };

      var UtilsModule = function UtilsModule() {
        _classCallCheck(this, UtilsModule);
      };

      UtilsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_view_justificatif_view_justificatif_component__WEBPACK_IMPORTED_MODULE_2__["ViewJustificatif"], _uploard_file_uploard_file_component__WEBPACK_IMPORTED_MODULE_4__["UploardFileComponent"], _app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_8__["AppComfirmComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__["DropzoneModule"]],
        exports: [_view_justificatif_view_justificatif_component__WEBPACK_IMPORTED_MODULE_2__["ViewJustificatif"], _uploard_file_uploard_file_component__WEBPACK_IMPORTED_MODULE_4__["UploardFileComponent"]],
        providers: [{
          provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__["DROPZONE_CONFIG"],
          useValue: DEFAULT_DROPZONE_CONFIG
        }]
      })], UtilsModule);
      /***/
    },

    /***/
    "NHsC":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/error/error.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function NHsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                          <mat-icon>warning</mat-icon>\r\n                      </button>\r\n                    <h1 class=\"error\">401</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\">Une erreur est survenue</span>\r\n                        <p class=\"box-text\">Il semblerait que vous n'etes pas autoriser a acceder la page!</p>\r\n                        <p class=\"box-text\">Vous pouvez aller à la page d'accueil.</p>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">Aller à l'acceuil</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "NM5i":
    /*!*********************************************************************!*\
      !*** ./src/app/layout/update-password/update-password.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UpdatePasswordComponent */

    /***/
    function NM5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function () {
        return UpdatePasswordComponent;
      });
      /* harmony import */


      var _raw_loader_update_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./update-password.component.html */
      "6GRC");
      /* harmony import */


      var _update_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./update-password.component.scss */
      "JQtQ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_features_inscription_helpe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/features/inscription/_helpe */
      "8loJ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/features/login/_helper/localStorage */
      "+64y");
      /* harmony import */


      var src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/SnackBar */
      "77k+");

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

      var UpdatePasswordComponent = /*#__PURE__*/function () {
        function UpdatePasswordComponent(_fb, token, snackBar, dialogRef, http) {
          _classCallCheck(this, UpdatePasswordComponent);

          this._fb = _fb;
          this.token = token;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.http = http;
          this.isLoadingResults = false;
        }

        _createClass(UpdatePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updat = this._fb.group({
              'password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
              'confirm': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
            }, {
              validator: Object(src_app_features_inscription_helpe__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirm')
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            this.isLoadingResults = true;
            this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BACK_END.LOGIN.UPDATE_PASSWORD + "" + this.token.getMenu(), this.updat.value).subscribe(function (data) {}, function (error) {
              if (error.status < 300) {
                _this5.snackBar.openSnackBar("password modifier avec succes", "success", 4000);

                _this5.dialogRef.close();
              } else {
                _this5.snackBar.openSnackBar("information incorrect", "error", 4000);
              }
            });
          }
        }]);

        return UpdatePasswordComponent;
      }();

      UpdatePasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UpdatePasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-update-password',
        template: _raw_loader_update_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_password_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"], src_app_shared_services_SnackBar__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UpdatePasswordComponent);
      /***/
    },

    /***/
    "NUKD":
    /*!************************************************************************!*\
      !*** ./src/app/shared/material-modules/materialLayoutShared.module.ts ***!
      \************************************************************************/

    /*! exports provided: MatLayoutSharedModule */

    /***/
    function NUKD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLayoutSharedModule", function () {
        return MatLayoutSharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var MatLayoutSharedModule = function MatLayoutSharedModule() {
        _classCallCheck(this, MatLayoutSharedModule);
      };

      MatLayoutSharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]],
        exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]]
      })], MatLayoutSharedModule);
      /***/
    },

    /***/
    "NYPD":
    /*!**************************************************************************!*\
      !*** ./src/app/layout/menu/horizontal-menu/horizontal-menu.component.ts ***!
      \**************************************************************************/

    /*! exports provided: HorizontalMenuComponent */

    /***/
    function NYPD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function () {
        return HorizontalMenuComponent;
      });
      /* harmony import */


      var _raw_loader_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./horizontal-menu.component.html */
      "HqDM");
      /* harmony import */


      var _horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horizontal-menu.component.scss */
      "61gx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../menu.service */
      "3dwk");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

      var HorizontalMenuComponent = /*#__PURE__*/function () {
        function HorizontalMenuComponent(appSettings, menuService, router) {
          _classCallCheck(this, HorizontalMenuComponent);

          this.appSettings = appSettings;
          this.menuService = menuService;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(HorizontalMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.menuItems = this.menuService.getHorizontalMenuItems();
            this.menuItems = this.menuItems.filter(function (item) {
              return item.parentId == _this6.menuParentId;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (_this7.settings.fixedHeader) {
                  var mainContent = document.getElementById('main-content');

                  if (mainContent) {
                    mainContent.scrollTop = 0;
                  }
                } else {
                  document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
              }
            });
          }
        }]);

        return HorizontalMenuComponent;
      }();

      HorizontalMenuComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]
        }, {
          type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      HorizontalMenuComponent.propDecorators = {
        menuParentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['menuParentId']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"]]
        }]
      };
      HorizontalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-horizontal-menu',
        template: _raw_loader_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
        styles: [_horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HorizontalMenuComponent);
      /***/
    },

    /***/
    "P3Of":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/error_component/error404/error404.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P3Of(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                          <mat-icon>warning</mat-icon>\r\n                      </button>\r\n                    <h1 class=\"error\">404</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\" fxLayoutAlign=\"center center\">Page Introuvable!</span>\r\n                        <p class=\"box-text\">Vous pouvez aller à la page d'accueil.</p>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">Aller à l'acceuil</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"]],
        exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"]],
        declarations: []
      })], SharedModule);
      /***/
    },

    /***/
    "PYjW":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/utils/uploard-file/uploard-file.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function PYjW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYXJkLWZpbGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Q/eX":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/material-modules/materialPopupModalShared.module.ts ***!
      \****************************************************************************/

    /*! exports provided: MatPopupModalSharedModule */

    /***/
    function QEX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPopupModalSharedModule", function () {
        return MatPopupModalSharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var MatPopupModalSharedModule = function MatPopupModalSharedModule() {
        _classCallCheck(this, MatPopupModalSharedModule);
      };

      MatPopupModalSharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]],
        exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]
      })], MatPopupModalSharedModule);
      /***/
    },

    /***/
    "QB1r":
    /*!************************************************************************!*\
      !*** ./src/app/layout/menu/vertical-menu/vertical-menu.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function QB1r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu-icon {\n  margin-right: 12px;\n}\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWVcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBSjs7QUFJSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRFI7O0FBR1k7RUFHSSx5QkFBQTtBQURoQjs7QUFNSTtFQUNJLGtCQUFBO0FBSlI7O0FBUUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQU5KOztBQzVCUTtFQUtRLGtCQUFBO0FEMEJoQjs7QUMvQlE7RUFLUSxrQkFBQTtBRDZCaEI7O0FDbENRO0VBS1Esa0JBQUE7QURnQ2hCOztBQ3JDUTtFQUtRLG1CQUFBO0FEbUNoQjs7QUN4Q1E7RUFLUSxtQkFBQTtBRHNDaEI7O0FDM0NRO0VBS1EsbUJBQUE7QUR5Q2hCOztBQzlDUTtFQUtRLG1CQUFBO0FENENoQjs7QUNqRFE7RUFLUSxtQkFBQTtBRCtDaEI7O0FDcERRO0VBS1EsbUJBQUE7QURrRGhCOztBQXBCSTtFQUNJLGtCQUFBO0FBc0JSOztBQXBCSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUFzQlIiLCJmaWxlIjoidmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4ubWVudS1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW17XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiAwOyAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgbWVudS1sZXZlbC1wYWRkaW5nKCdsdHInKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygkZGlyZWN0aW9uKXtcclxuICAgICRlbGVtOiAnJztcclxuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggMTAge1xyXG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAyLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXHJcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1idXR0b24nfSB7IFxyXG4gICAgICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcInJ0bFwiIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIEBlbHNle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "QcjU":
    /*!**************************************************!*\
      !*** ./src/app/pipes/search/mail-search.pipe.ts ***!
      \**************************************************/

    /*! exports provided: MailSearchPipe */

    /***/
    function QcjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function () {
        return MailSearchPipe;
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

      var MailSearchPipe = /*#__PURE__*/function () {
        function MailSearchPipe() {
          _classCallCheck(this, MailSearchPipe);
        }

        _createClass(MailSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                  if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                    return true;
                  }
                }
              });
            }
          }
        }]);

        return MailSearchPipe;
      }();

      MailSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'MailSearch'
      })], MailSearchPipe);
      /***/
    },

    /***/
    "Qxz6":
    /*!*****************************************************!*\
      !*** ./src/app/features/login/_guard/auth.guard.ts ***!
      \*****************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function Qxz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/authentification */
      "ob7d");
      /* harmony import */


      var _helper_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_helper/localStorage */
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

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService, token) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
          this.token = token;
          this.bool = false;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.token.getToken() && this.authenticationService.checkIAmLogin().subscribe()) {
              this.authenticationService.checkIAmLogin();
              return true;
            } else {
              //console.log("pageFirstTime false")
              this.router.navigate(['/login'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _helper_localStorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      };

      AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _helper_localStorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])], AuthGuard);
      /***/
    },

    /***/
    "RaeH":
    /*!*****************************************************!*\
      !*** ./src/app/features/profile/profile.service.ts ***!
      \*****************************************************/

    /*! exports provided: ProfileService */

    /***/
    function RaeH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(http, token) {
          _classCallCheck(this, ProfileService);

          this.http = http;
          this.token = token;
        }

        _createClass(ProfileService, [{
          key: "getMe",
          value: function getMe() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACK_END.LOGIN.CHECK_I_AM_LOGIN + "" + this.token.getToken());
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      };

      ProfileService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _login_helper_localStorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])], ProfileService);
      /***/
    },

    /***/
    "Sf9e":
    /*!*********************************************************!*\
      !*** ./src/app/pipes/search/chat-person-search.pipe.ts ***!
      \*********************************************************/

    /*! exports provided: ChatPersonSearchPipe */

    /***/
    function Sf9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function () {
        return ChatPersonSearchPipe;
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

      var ChatPersonSearchPipe = /*#__PURE__*/function () {
        function ChatPersonSearchPipe() {
          _classCallCheck(this, ChatPersonSearchPipe);
        }

        _createClass(ChatPersonSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (message) {
                if (message.author) {
                  return message.author.search(searchText) !== -1;
                }
              });
            }
          }
        }]);

        return ChatPersonSearchPipe;
      }();

      ChatPersonSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'ChatPersonSearchPipe'
      })], ChatPersonSearchPipe);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.settings */
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

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(appSettings, router) {
          _classCallCheck(this, AppComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.router.events.subscribe(function (event) {
              //console.log(event);
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                setTimeout(function () {
                  _this8.settings.loadingSpinner = true;
                });
              } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                setTimeout(function () {
                  _this8.settings.loadingSpinner = false;
                });
              } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                setTimeout(function () {
                  _this8.settings.loadingSpinner = false;
                });
              } else {
                setTimeout(function () {
                  _this8.settings.loadingSpinner = false;
                });
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AppComponent);
      /***/
    },

    /***/
    "TaRy":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/vertical-menu/vertical-menu.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TaRy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span>\r\n    <div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n            <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n            <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n            <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"menu-title\">{{menu.title}}</span>\r\n            <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n        </a>\r\n    \r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n            <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n        </div>\r\n    </div>\r\n</span>";
      /***/
    },

    /***/
    "Tx//":
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /*! exports provided: LayoutModule */

    /***/
    function Tx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error/error.component */
      "nP6W");
      /* harmony import */


      var _shared_material_modules_materialButtonIndicatorShared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../shared/material-modules/materialButtonIndicatorShared.module */
      "L0IE");
      /* harmony import */


      var _shared_material_modules_materialLayoutShared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../shared/material-modules/materialLayoutShared.module */
      "NUKD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./flags-menu/flags-menu.component */
      "lPmy");
      /* harmony import */


      var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fullscreen/fullscreen.component */
      "MNMf");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      "096P");
      /* harmony import */


      var _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./menu/vertical-menu/vertical-menu.component */
      "vgpo");
      /* harmony import */


      var _menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./menu/horizontal-menu/horizontal-menu.component */
      "NYPD");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      "w/zB");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./messages/messages.component */
      "nfGT");
      /* harmony import */


      var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-menu/user-menu.component */
      "cEj9");
      /* harmony import */


      var _shared_material_modules_materialNavigationShared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../shared/material-modules/materialNavigationShared.module */
      "fy1d");
      /* harmony import */


      var _shared_material_modules_materialPopupModalShared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../shared/material-modules/materialPopupModalShared.module */
      "Q/eX");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _template_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./template/template.component */
      "wJNJ");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _applications_applications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./applications/applications.component */
      "ZXiP");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./update-password/update-password.component */
      "NM5i");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_applications_applications_component__WEBPACK_IMPORTED_MODULE_20__["ApplicationsComponent"], _flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_5__["FlagsMenuComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__["FullScreenComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__["VerticalMenuComponent"], _menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalMenuComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["SidenavComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_12__["UserMenuComponent"], _template_template_component__WEBPACK_IMPORTED_MODULE_17__["TemplateComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_23__["UpdatePasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _shared_material_modules_materialLayoutShared_module__WEBPACK_IMPORTED_MODULE_2__["MatLayoutSharedModule"], _shared_material_modules_materialNavigationShared_module__WEBPACK_IMPORTED_MODULE_13__["MatNavigationSharedModule"], _shared_material_modules_materialButtonIndicatorShared_module__WEBPACK_IMPORTED_MODULE_1__["MatButtonIndicatorSharedModule"], _shared_material_modules_materialPopupModalShared_module__WEBPACK_IMPORTED_MODULE_14__["MatPopupModalSharedModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"]],
        exports: [_applications_applications_component__WEBPACK_IMPORTED_MODULE_20__["ApplicationsComponent"], _flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_5__["FlagsMenuComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__["FullScreenComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__["VerticalMenuComponent"], _menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalMenuComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["SidenavComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_12__["UserMenuComponent"], _template_template_component__WEBPACK_IMPORTED_MODULE_17__["TemplateComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_23__["UpdatePasswordComponent"]]
      })], LayoutModule);
      /***/
    },

    /***/
    "U4Yu":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/error_component/error500/error500.component.ts ***!
      \***********************************************************************/

    /*! exports provided: Error500Component */

    /***/
    function U4Yu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error500Component", function () {
        return Error500Component;
      });
      /* harmony import */


      var _raw_loader_error500_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./error500.component.html */
      "2Bgi");
      /* harmony import */


      var _error500_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error500.component.scss */
      "dd45");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var Error500Component = /*#__PURE__*/function () {
        function Error500Component(appSettings, router) {
          _classCallCheck(this, Error500Component);

          this.appSettings = appSettings;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(Error500Component, [{
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.settings.loadingSpinner = false;
          }
        }]);

        return Error500Component;
      }();

      Error500Component.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      Error500Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-error500',
        template: _raw_loader_error500_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error500_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], Error500Component);
      /***/
    },

    /***/
    "Va0h":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/utils/uploard-file/uploard-file.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UploardFileComponent */

    /***/
    function Va0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploardFileComponent", function () {
        return UploardFileComponent;
      });
      /* harmony import */


      var _raw_loader_uploard_file_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./uploard-file.component.html */
      "tzNW");
      /* harmony import */


      var _uploard_file_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uploard-file.component.scss */
      "PYjW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-dropzone-wrapper */
      "vV3i");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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

      var UploardFileComponent_1;

      var UploardFileComponent = UploardFileComponent_1 = /*#__PURE__*/function () {
        function UploardFileComponent(fb, mediaObserver) {
          _classCallCheck(this, UploardFileComponent);

          this.fb = fb;
          this.mediaObserver = mediaObserver;
          this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BACK_END.FILEUPLOAD + 'download/';
          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();

          this.onChange = function (_) {};

          this.onTouch = function () {};

          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
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
          this.documentPiece = '';
          this.activeMediaQuery = '';
        }

        _createClass(UploardFileComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this9 = this;

            this.mediaObserver.media$.subscribe(function (change) {
              _this9.activeMediaQuery = change ? "".concat(change.mqAlias) : 'xl';
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.subscription.add(this.pieceOfficielle.valueChanges.subscribe(function (value) {
              _this10.onChange(value);
            }));
            this.urlfile = this.urlFile.value;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onDestroy.next();

            this._onDestroy.complete();

            this.subscription.unsubscribe();
          }
        }, {
          key: "onUploadError",
          value: function onUploadError(args) {
            this.dropzoneComponentRef.directiveRef.reset();
          }
        }, {
          key: "resetDropZone",
          value: function resetDropZone() {
            this.dropzoneComponentRef.directiveRef.reset();
            this.urlFile.setValue(null);
          }
        }, {
          key: "onUploadSuccess",
          value: function onUploadSuccess(remoteResponse) {
            this.remarque.setValue(null);
            this.dateCreaction.setValue(new Date());
            this.urlFile.setValue("data:" + remoteResponse[1].contentType + ";base64," + remoteResponse[1].url);
          }
        }, {
          key: "onUploadInit",
          value: function onUploadInit(args) {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(simpleChanges) {
            if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
              this.pieceOfficielle.markAllAsTouched();
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value) {
              this.pieceOfficielle.reset(value);
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "appellation",
          get: function get() {
            return this.pieceOfficielle.get("appellation");
          }
        }, {
          key: "urlFile",
          get: function get() {
            return this.pieceOfficielle.get("urlFile");
          }
        }, {
          key: "remarque",
          get: function get() {
            return this.pieceOfficielle.get("remarque");
          }
        }, {
          key: "dateCreaction",
          get: function get() {
            return this.pieceOfficielle.get("dateCreaction");
          }
        }, {
          key: "dateUpdate",
          get: function get() {
            return this.pieceOfficielle.get('dateUpdate');
          }
        }, {
          key: "valide",
          get: function get() {
            return this.pieceOfficielle.get("valide");
          }
        }]);

        return UploardFileComponent;
      }();

      UploardFileComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]
        }];
      };

      UploardFileComponent.propDecorators = {
        touched: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pieceOfficielle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ["formGroup"]
        }],
        contribuableType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dropzoneComponentRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__["DropzoneComponent"], {
            "static": false
          }]
        }]
      };
      UploardFileComponent = UploardFileComponent_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-uploard-file',
        template: _raw_loader_uploard_file_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
            return UploardFileComponent_1;
          }),
          multi: true
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_uploard_file_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]])], UploardFileComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"settings.theme\" \r\n            [class.fixed-header]=\"settings.fixedHeader\"\r\n            [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n            [class.compact]=\"settings.menuType == 'compact'\" \r\n            [class.mini]=\"settings.menuType == 'mini'\" >\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>Chargement...</h4>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: windowFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "windowFactory", function () {
        return windowFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/authentification */
      "ob7d");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-calendar */
      "kRoH");
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      "L/mj");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _applicationRouting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./applicationRouting */
      "m+u8");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.settings */
      "/RaO");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layout/layout.module */
      "Tx//");
      /* harmony import */


      var _features_login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./features/login/_helper/AuthInterceptorService */
      "ct3H");
      /* harmony import */


      var _features_login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./features/login/_helper/error.interceptor */
      "AmT5");
      /* harmony import */


      var _shared_error_component_error_component_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/error_component/error-component.module */
      "MNl3");
      /* harmony import */


      var _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/utils/utils.module */
      "MQax");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        wheelPropagation: true,
        suppressScrollX: true
      };

      function windowFactory() {
        return window;
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
        }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _applicationRouting__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _shared_error_component_error_component_module__WEBPACK_IMPORTED_MODULE_17__["ErrorComponentModule"], _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_18__["UtilsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        providers: [_features_login_helper_AuthInterceptorService__WEBPACK_IMPORTED_MODULE_15__["authInterceptorProviders"], _app_settings__WEBPACK_IMPORTED_MODULE_13__["AppSettings"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
          useClass: _features_login_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"],
          multi: true
        }, src_app_shared_services_authentification__WEBPACK_IMPORTED_MODULE_1__["LoginService"], {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: "window",
          useFactory: windowFactory
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZBdR":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/utils/app-confirm/app-confirm.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function ZBdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-dialog-content {\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ZI+9":
    /*!*************************************************************!*\
      !*** ./src/app/layout/breadcrumb/breadcrumb.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function ZI9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb {\n  padding: 8px;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRVI7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUVSIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYntcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZle1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgY29udGVudDogXCIvXCI7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "ZXiP":
    /*!***************************************************************!*\
      !*** ./src/app/layout/applications/applications.component.ts ***!
      \***************************************************************/

    /*! exports provided: ApplicationsComponent */

    /***/
    function ZXiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function () {
        return ApplicationsComponent;
      });
      /* harmony import */


      var _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./applications.component.html */
      "IV9b");
      /* harmony import */


      var _applications_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./applications.component.scss */
      "+I49");
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

      var ApplicationsComponent = /*#__PURE__*/function () {
        function ApplicationsComponent() {
          _classCallCheck(this, ApplicationsComponent);
        }

        _createClass(ApplicationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApplicationsComponent;
      }();

      ApplicationsComponent.ctorParameters = function () {
        return [];
      };

      ApplicationsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-applications',
        template: _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_applications_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ApplicationsComponent);
      /***/
    },

    /***/
    "ZnvB":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/utils/view-justificatif/view-justificatif.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ViewJustificatif */

    /***/
    function ZnvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewJustificatif", function () {
        return ViewJustificatif;
      });
      /* harmony import */


      var _raw_loader_view_justificatif_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./view-justificatif.component.html */
      "Bf1b");
      /* harmony import */


      var _view_justificatif_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-justificatif.component.scss */
      "jW5b");
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

      var ViewJustificatif = /*#__PURE__*/function () {
        function ViewJustificatif(dialog, data) {
          _classCallCheck(this, ViewJustificatif);

          this.dialog = dialog;
          this.data = data;
        }

        _createClass(ViewJustificatif, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.file = this.data.file;
            this.justificatif = this.data.justificatif;
            console.log(this.justificatif);
            this.image = "data:" + this.file.type + "/" + this.file.extension + ";base64," + this.file.base64;
          }
        }]);

        return ViewJustificatif;
      }();

      ViewJustificatif.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      ViewJustificatif = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'view-justificatif',
        template: _raw_loader_view_justificatif_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_justificatif_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], Object])], ViewJustificatif);
      /***/
    },

    /***/
    "ZwZj":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-menu/user-menu.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZwZj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span *ngIf=\"!isLoad\">\r\n    <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n        <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    \r\n    <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n        <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n            <mat-toolbar color=\"primary\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                    <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"img-profile rounded mat-elevation-z6\">\r\n                    <p>{{Utilisateur.email}}<br> <small>{{Utilisateur.nom}} {{Utilisateur.prenom}}</small></p>\r\n                </div>  \r\n            </mat-toolbar>\r\n            <a mat-menu-item routerLink=\"/profile\"> \r\n                <mat-icon>person</mat-icon>\r\n                <span>Profile</span> \r\n            </a>\r\n            <!-- <a mat-menu-item routerLink=\"settings\"> \r\n                <mat-icon>settings</mat-icon>\r\n                <span>Settings</span> \r\n            </a> -->\r\n            <a *ngIf=\"Utilisateur.provider ==null || Utilisateur.provider.trim() ==''\"  mat-menu-item (click)=\"openDialog()\"> \r\n                <mat-icon>lock</mat-icon>\r\n                <span>Modifier Password</span> \r\n            </a>\r\n            <!-- <a mat-menu-item routerLink=\"help\"> \r\n                <mat-icon>help</mat-icon>\r\n                <span>Help</span> \r\n            </a> -->\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item (click)=\"signOut()\"> \r\n                <mat-icon>power_settings_new</mat-icon>\r\n                <span>Deconnection</span> \r\n            </a>\r\n        <!--</span>-->\r\n    </mat-menu>\r\n</span>\r\n\r\n<span fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"isLoad\">\r\n    <div id=\"app-spinner\" [class.hide]=\"true\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>Chargement...</h4>\r\n    </div>\r\n</span>";
      /***/
    },

    /***/
    "aQ+B":
    /*!*************************************************************!*\
      !*** ./src/app/pipes/profilePicture/profilePicture.pipe.ts ***!
      \*************************************************************/

    /*! exports provided: ProfilePicturePipe */

    /***/
    function aQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function () {
        return ProfilePicturePipe;
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

      var ProfilePicturePipe = /*#__PURE__*/function () {
        function ProfilePicturePipe() {
          _classCallCheck(this, ProfilePicturePipe);
        }

        _createClass(ProfilePicturePipe, [{
          key: "transform",
          value: function transform(input) {
            var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jpg';
            return '../assets/img/profile/' + input + '.' + ext;
          }
        }]);

        return ProfilePicturePipe;
      }();

      ProfilePicturePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'profilePicture'
      })], ProfilePicturePipe);
      /***/
    },

    /***/
    "bF3J":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/breadcrumb/breadcrumb.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bF3J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\" class=\"flex-p\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Home</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "bwQY":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/messages/messages.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bwQY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<button mat-icon-button matBadge=\"2\" matBadgeColor=\"warn\" [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>-->\r\n<mat-menu #messagesMenu=\"matMenu\"  [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text muted-text\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>";
      /***/
    },

    /***/
    "cEj9":
    /*!*********************************************************!*\
      !*** ./src/app/layout/user-menu/user-menu.component.ts ***!
      \*********************************************************/

    /*! exports provided: UserMenuComponent */

    /***/
    function cEj9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
        return UserMenuComponent;
      });
      /* harmony import */


      var _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "ZwZj");
      /* harmony import */


      var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-menu.component.scss */
      "8dJI");
      /* harmony import */


      var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../update-password/update-password.component */
      "NM5i");
      /* harmony import */


      var _features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../features/login/_helper/localStorage */
      "+64y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_features_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/features/profile/profile.service */
      "RaeH");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

      var UserMenuComponent = /*#__PURE__*/function () {
        function UserMenuComponent(token, dialog, profileService) {
          _classCallCheck(this, UserMenuComponent);

          this.token = token;
          this.dialog = dialog;
          this.profileService = profileService;
          this.userImage = './assets/img/avatars/avatar-1.png';
          this.isLoad = false;
        }

        _createClass(UserMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.isLoad = true;
            this.profileService.getMe().subscribe(function (user) {
              _this11.Utilisateur = user;

              if (_this11.Utilisateur.imgUrl != null) {
                _this11.profileService.userProfile = user;
                _this11.userImage = _this11.Utilisateur.imgUrl;
              }

              _this11.isLoad = false;
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.token.signOut();
            location.reload();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_2__["UpdatePasswordComponent"], {
              width: '600px',
              disableClose: true
            });
          }
        }]);

        return UserMenuComponent;
      }();

      UserMenuComponent.ctorParameters = function () {
        return [{
          type: _features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: src_app_features_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }];
      };

      UserMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-menu',
        template: _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_features_login_helper_localStorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_features_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], UserMenuComponent);
      /***/
    },

    /***/
    "cW2u":
    /*!*******************************************************!*\
      !*** ./src/app/layout/sidenav/sidenav.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function cW2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav-header {\n  padding: 0 10px !important;\n}\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.user-block img {\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.user-block .user-info-wrapper {\n  padding: 0 6px;\n  margin: 6px 0;\n  width: 100%;\n}\n\n.user-block .user-info-wrapper .user-info {\n  text-align: center;\n}\n\n.user-block .user-info-wrapper .user-info .name {\n  font-size: 15px;\n}\n\n.user-block .user-info-wrapper .user-info .position {\n  font-size: 13px;\n}\n\n.user-block.show {\n  height: 156px;\n}\n\n.sidenav-menu-outer {\n  margin-top: 1px;\n}\n\n.sidenav-menu-outer .ps {\n  height: calc(100% - 56px);\n}\n\n.sidenav-menu-outer.user-block-show .ps {\n  height: calc(100% - 212px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7O0FBQVk7RUFDSSxlQUFBO0FBRWhCOztBQUFZO0VBQ0ksZUFBQTtBQUVoQjs7QUFFSTtFQUNJLGFDaENvQjtBRGdDNUI7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBRUk7RUFDSSx5QkFBQTtBQUFSOztBQUdRO0VBQ0ksMEJBQUE7QUFEWiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5waW57XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNpZGVuYXYtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLWJsb2Nre1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZvLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc2l0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBoZWlnaHQ6ICRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0O1xyXG4gICAgfSAgICAgIFxyXG59IFxyXG5cclxuLnNpZGVuYXYtbWVudS1vdXRlcntcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0fSk7IFxyXG4gICAgfSAgICAgICBcclxuICAgICYudXNlci1ibG9jay1zaG93e1xyXG4gICAgICAgIC5wc3sgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0ICsgJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHR9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsIiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7XHJcbiRtaW5pLXNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDcwcHg7XHJcblxyXG4kZmxleC1kaXN0YW5jZTogOHB4O1xyXG4kaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc6ICRmbGV4LWRpc3RhbmNlO1xyXG5cclxuLy9Mb2dpbiwgUmVnaXN0ZXIsIEVycm9ycyBib3hcclxuJGJveC1oZWlnaHQ6IDE4NnB4O1xyXG4kYm94LXBvc2l0aW9uOiAzNHB4O1xyXG4kcmVnaXN0ZXItYm94LWhlaWdodDogMzAwcHg7XHJcblxyXG4kZm9vdGVyLWhlaWdodDogNTZweDsgIl19 */";
      /***/
    },

    /***/
    "ct3H":
    /*!******************************************************************!*\
      !*** ./src/app/features/login/_helper/AuthInterceptorService.ts ***!
      \******************************************************************/

    /*! exports provided: AuthInterceptorService, authInterceptorProviders */

    /***/
    function ct3H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
        return AuthInterceptorService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
        return authInterceptorProviders;
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


      var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./localStorage */
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

      var TOKEN_HEADER_KEY = 'Authorization';

      var AuthInterceptorService = /*#__PURE__*/function () {
        function AuthInterceptorService(token) {
          _classCallCheck(this, AuthInterceptorService);

          this.token = token;
        }

        _createClass(AuthInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authReq = req;
            var token = this.token.getToken();

            if (token != null) {
              // for Spring Boot back-end
              authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
              }); // for Node.js Express back-end
              // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
            }

            return next.handle(authReq);
          }
        }]);

        return AuthInterceptorService;
      }();

      AuthInterceptorService.ctorParameters = function () {
        return [{
          type: _localStorage__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      };

      AuthInterceptorService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_localStorage__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])], AuthInterceptorService);
      var authInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptorService,
        multi: true
      }];
      /***/
    },

    /***/
    "dd45":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/error_component/error500/error500.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function dd45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "fy1d":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/material-modules/materialNavigationShared.module.ts ***!
      \****************************************************************************/

    /*! exports provided: MatNavigationSharedModule */

    /***/
    function fy1d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNavigationSharedModule", function () {
        return MatNavigationSharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var MatNavigationSharedModule = function MatNavigationSharedModule() {
        _classCallCheck(this, MatNavigationSharedModule);
      };

      MatNavigationSharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]],
        exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]]
      })], MatNavigationSharedModule);
      /***/
    },

    /***/
    "iR68":
    /*!*******************************************!*\
      !*** ./src/app/shared/services/Helper.ts ***!
      \*******************************************/

    /*! exports provided: HelperService */

    /***/
    function iR68(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelperService", function () {
        return HelperService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var HelperService = /*#__PURE__*/function () {
        function HelperService() {
          _classCallCheck(this, HelperService);
        }

        _createClass(HelperService, [{
          key: "handleError",
          value: function handleError() {
            var _this12 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this12.log("".concat(operation, " en erreur: ").concat(error.message, ", \xE0 propager vers le serveur pour observabilit\xE9")); // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
            };
          }
        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return HelperService;
      }();
      /***/

    },

    /***/
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagination/pagination.pipe */
      "14Lx");
      /* harmony import */


      var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profilePicture/profilePicture.pipe */
      "aQ+B");
      /* harmony import */


      var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./search/chat-person-search.pipe */
      "Sf9e");
      /* harmony import */


      var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search/user-search.pipe */
      "5at3");
      /* harmony import */


      var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./truncate/truncate.pipe */
      "qo4k");
      /* harmony import */


      var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search/mail-search.pipe */
      "QcjU");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"], _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"], _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"], _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"], _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]],
        exports: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"], _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"], _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"], _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"], _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "jW5b":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/utils/view-justificatif/view-justificatif.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function jW5b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contenu {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1qdXN0aWZpY2F0aWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InZpZXctanVzdGlmaWNhdGlmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "lPmy":
    /*!***********************************************************!*\
      !*** ./src/app/layout/flags-menu/flags-menu.component.ts ***!
      \***********************************************************/

    /*! exports provided: FlagsMenuComponent */

    /***/
    function lPmy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function () {
        return FlagsMenuComponent;
      });
      /* harmony import */


      var _raw_loader_flags_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./flags-menu.component.html */
      "9xQd");
      /* harmony import */


      var _flags_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./flags-menu.component.scss */
      "3FPT");
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

      var FlagsMenuComponent = /*#__PURE__*/function () {
        function FlagsMenuComponent(appSettings) {
          _classCallCheck(this, FlagsMenuComponent);

          this.appSettings = appSettings;
          this.settings = this.appSettings.settings;
        }

        _createClass(FlagsMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlagsMenuComponent;
      }();

      FlagsMenuComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      FlagsMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flags-menu',
        template: _raw_loader_flags_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_flags_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], FlagsMenuComponent);
      /***/
    },

    /***/
    "m+u8":
    /*!***************************************!*\
      !*** ./src/app/applicationRouting.ts ***!
      \***************************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function mU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _shared_error_component_error500_error500_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/error_component/error500/error500.component */
      "U4Yu");
      /* harmony import */


      var _layout_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/error/error.component */
      "nP6W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _features_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./features/login/_guard/auth.guard */
      "Qxz6");
      /* harmony import */


      var _layout_template_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout/template/template.component */
      "wJNJ");
      /* harmony import */


      var _shared_error_component_error404_error404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/error_component/error404/error404.component */
      "/eTi");

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
        canActivate: [_features_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _layout_template_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"],
        children: [{
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.DASHBOARD,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-dashboard-dashboard-module */
            [__webpack_require__.e("default~bilan-bilan-module~features-statistique-statistique-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/dashboard/dashboard.module */
            "/2RN")).then(function (m) {
              return m.DashboardModule;
            });
          },
          data: {
            breadcrumb: 'Dashboard'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.RENOVATION,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-renovations-renovations-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-renovations-renovations-module")]).then(__webpack_require__.bind(null,
            /*! ./features/renovations/renovations.module */
            "AtLv")).then(function (m) {
              return m.RenovationsModule;
            });
          },
          data: {
            breadcrumb: 'Renovations'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.PROFILE_USER,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | features-profile-profile-module */
            "features-profile-profile-module").then(__webpack_require__.bind(null,
            /*! ./features/profile/profile.module */
            "xaGl")).then(function (m) {
              return m.ProfileModule;
            });
          },
          data: {
            breadcrumb: 'Profile'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.VALIDER_FILE_RENOVATION,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-valider-renovation-valider-renovation-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-valider-renovation-valider-renovation-module")]).then(__webpack_require__.bind(null,
            /*! ./features/valider-renovation/valider-renovation.module */
            "H7DI")).then(function (m) {
              return m.ValiderRenovationModule;
            });
          },
          data: {
            breadcrumb: 'Valider-Renovation'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.MENU,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-menus-menus-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-menus-menus-module")]).then(__webpack_require__.bind(null,
            /*! ./features/menus/menus.module */
            "wcfR")).then(function (m) {
              return m.MenusModule;
            });
          },
          data: {
            breadcrumb: 'Menu'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.ROLES,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-roles-roles-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-roles-roles-module")]).then(__webpack_require__.bind(null,
            /*! ./features/roles/roles.module */
            "u9xJ")).then(function (m) {
              return m.RolesModule;
            });
          },
          data: {
            breadcrumb: 'Roles'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.PROFILES,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-profiles-profiles-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-profiles-profiles-module")]).then(__webpack_require__.bind(null,
            /*! ./features/profiles/profiles.module */
            "N+kP")).then(function (m) {
              return m.ProfilesModule;
            });
          },
          data: {
            breadcrumb: 'profiles'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.CLIENT,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-client-client-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("features-client-client-module")]).then(__webpack_require__.bind(null,
            /*! ./features/client/client.module */
            "t79R")).then(function (m) {
              return m.ClientModule;
            });
          },
          data: {
            breadcrumb: 'client'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.TYPE_SOCIETE,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-type-societe-type-societe-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-type-societe-type-societe-module")]).then(__webpack_require__.bind(null,
            /*! ./features/type-societe/type-societe.module */
            "HCO3")).then(function (m) {
              return m.TypeSocieteModule;
            });
          },
          data: {
            breadcrumb: 'types-societe'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.SOCIETE,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-societe-societe-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-societe-societe-module")]).then(__webpack_require__.bind(null,
            /*! ./features/societe/societe.module */
            "h8LF")).then(function (m) {
              return m.SocieteModule;
            });
          },
          data: {
            breadcrumb: 'societe'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.USER_MENU,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-user-menu-user-menu-module */
            [__webpack_require__.e("common"), __webpack_require__.e("features-user-menu-user-menu-module")]).then(__webpack_require__.bind(null,
            /*! ./features/user-menu/user-menu.module */
            "RG9k")).then(function (m) {
              return m.UserMenuModule;
            });
          },
          data: {
            breadcrumb: 'societe'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.AUTRE_USER,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-autres-user-autres-user-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-autres-user-autres-user-module")]).then(__webpack_require__.bind(null,
            /*! ./features/autres-user/autres-user.module */
            "Aupu")).then(function (m) {
              return m.AutresUserModule;
            });
          },
          data: {
            breadcrumb: 'Autres-user'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.BUREAU_ETUDE,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-bureau-etude-bureau-etude-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-bureau-etude-bureau-etude-module")]).then(__webpack_require__.bind(null,
            /*! ./features/bureau-etude/bureau-etude.module */
            "NoDZ")).then(function (m) {
              return m.BureauEtudeModule;
            });
          },
          data: {
            breadcrumb: 'Bureau etude'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.RESPONSABLE_TRAVAUX,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-directeur-travaux-directeur-travaux-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-directeur-travaux-directeur-travaux-module")]).then(__webpack_require__.bind(null,
            /*! ./features/directeur-travaux/directeur-travaux.module */
            "m63q")).then(function (m) {
              return m.DirecteurTravauxModule;
            });
          },
          data: {
            breadcrumb: 'Responsable Travaux'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.GERANT,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-gerant-gerant-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-gerant-gerant-module")]).then(__webpack_require__.bind(null,
            /*! ./features/gerant/gerant.module */
            "gQxV")).then(function (m) {
              return m.GerantModule;
            });
          },
          data: {
            breadcrumb: 'Gerant'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.PROJET_RENAUVATION,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-projet-renovation-projet-renovation-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-projet-renovation-projet-renovation-module")]).then(__webpack_require__.bind(null,
            /*! ./features/projet-renovation/projet-renovation.module */
            "yVXe")).then(function (m) {
              return m.ProjetRenovationModule;
            });
          },
          data: {
            breadcrumb: 'Demarrer projet de renovation'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.DEMARRER_PROJET,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-demarrage-projet-renovation-demarrage-projet-renovation-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-demarrage-projet-renovation-demarrage-projet-renovation-module")]).then(__webpack_require__.bind(null,
            /*! ./features/demarrage-projet-renovation/demarrage-projet-renovation.module */
            "63V8")).then(function (m) {
              return m.DemarrageProjetRenovationModule;
            });
          },
          data: {
            breadcrumb: 'Suivi de chantier'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.PROJET_REALISER,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-fin-projet-renovation-fin-projet-renovation-module */
            [__webpack_require__.e("default~features-autres-user-autres-user-module~features-bureau-etude-bureau-etude-module~features-c~124a0206"), __webpack_require__.e("common"), __webpack_require__.e("features-fin-projet-renovation-fin-projet-renovation-module")]).then(__webpack_require__.bind(null,
            /*! ./features/fin-projet-renovation/fin-projet-renovation.module */
            "0BTE")).then(function (m) {
              return m.FinProjetRenovationModule;
            });
          },
          data: {
            breadcrumb: 'Projet realisé'
          }
        }, {
          path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.STATISTIQUE,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | features-statistique-statistique-module */
            [__webpack_require__.e("default~bilan-bilan-module~features-statistique-statistique-module~pages-dashboard-dashboard-module"), __webpack_require__.e("default~bilan-bilan-module~features-statistique-statistique-module"), __webpack_require__.e("common"), __webpack_require__.e("features-statistique-statistique-module")]).then(__webpack_require__.bind(null,
            /*! ./features/statistique/statistique.module */
            "dTnN")).then(function (m) {
              return m.StatistiqueModule;
            });
          },
          data: {
            breadcrumb: 'Statistique General'
          }
        }]
      }, {
        path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.LOGIN,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("features-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./features/login/login.module */
          "vm+o")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.ERROR,
        component: _layout_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"]
      }, {
        path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.ERROR404,
        component: _shared_error_component_error404_error404_component__WEBPACK_IMPORTED_MODULE_7__["Error404Component"]
      }, {
        path: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].FRONTEND_ROUTES.ERROR500,
        component: _shared_error_component_error500_error500_component__WEBPACK_IMPORTED_MODULE_0__["Error500Component"]
      }, {
        path: '**',
        redirectTo: 'Error/400',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          useHash: true
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "nP6W":
    /*!*************************************************!*\
      !*** ./src/app/layout/error/error.component.ts ***!
      \*************************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function nP6W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./error.component.html */
      "NHsC");
      /* harmony import */


      var _error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error.component.scss */
      "nrxl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var ErrorComponent = /*#__PURE__*/function () {
        function ErrorComponent(appSettings, router) {
          _classCallCheck(this, ErrorComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(ErrorComponent, [{
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/login']);
          }
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ErrorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-error',
        template: _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ErrorComponent);
      /***/
    },

    /***/
    "nfGT":
    /*!*******************************************************!*\
      !*** ./src/app/layout/messages/messages.component.ts ***!
      \*******************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function nfGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./messages.component.html */
      "bwQY");
      /* harmony import */


      var _messages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./messages.component.scss */
      "onN3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./messages.service */
      "FBhE");

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

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent(messagesService) {
          _classCallCheck(this, MessagesComponent);

          this.messagesService = messagesService;
          this.selectedTab = 1;
          this.messages = messagesService.getMessages();
          this.files = messagesService.getFiles();
          this.meetings = messagesService.getMeetings();
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openMessagesMenu",
          value: function openMessagesMenu() {
            this.trigger.openMenu();
            this.selectedTab = 0;
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.trigger.closeMenu();
          }
        }, {
          key: "stopClickPropagate",
          value: function stopClickPropagate(event) {
            event.stopPropagation();
            event.preventDefault();
          }
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ctorParameters = function () {
        return [{
          type: _messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]
        }];
      };

      MessagesComponent.propDecorators = {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"]]
        }]
      };
      MessagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]],
        styles: [_messages_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])], MessagesComponent);
      /***/
    },

    /***/
    "nrxl":
    /*!***************************************************!*\
      !*** ./src/app/layout/error/error.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function nrxl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ob7d":
    /*!*****************************************************!*\
      !*** ./src/app/shared/services/authentification.ts ***!
      \*****************************************************/

    /*! exports provided: LoginService */

    /***/
    function ob7d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _Helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Helper */
      "iR68");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'content-type': 'application/json'
        })
      };

      var LoginService = /*#__PURE__*/function (_Helper__WEBPACK_IMPO) {
        _inherits(LoginService, _Helper__WEBPACK_IMPO);

        var _super2 = _createSuper(LoginService);

        function LoginService(http, router) {
          var _this13;

          _classCallCheck(this, LoginService);

          _this13 = _super2.call(this);
          _this13.http = http;
          _this13.router = router;
          _this13.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACK_END.LOGIN.CONNEXION;
          return _this13;
        }

        _createClass(LoginService, [{
          key: "login",
          value: function login(user) {
            return this.http.post(this.API, {
              username: user.username,
              password: user.password
            }, httpOptions);
          }
        }, {
          key: "inscription",
          value: function inscription(user) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACK_END.LOGIN.INSCRIPTION, user);
          }
        }, {
          key: "checkIAmLogin",
          value: function checkIAmLogin() {
            var _this14 = this;

            return this.http.head(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACK_END.LOGIN.CHECK_I_AM_LOGIN, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              console.log(res);

              if (res.status === 200) {
                return true;
              } else {
                return false;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              _this14.handleErrorServer();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            }));
          }
        }, {
          key: "handleErrorServer",
          value: function handleErrorServer() {
            this.handleError("ERROR SERVER");
            this.router.navigate(['/error']);
          }
        }]);

        return LoginService;
      }(_Helper__WEBPACK_IMPORTED_MODULE_5__["HelperService"]);

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      LoginService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], LoginService);
      /***/
    },

    /***/
    "onN3":
    /*!*********************************************************!*\
      !*** ./src/app/layout/messages/messages.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function onN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUFSO0FBRUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFDUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ1o7QUFFSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXN7XHJcbiAgICAubWF0LXRhYi1sYWJlbHtcclxuICAgICAgICBtaW4td2lkdGg6IDkzLjNweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5uYW1le1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctMXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "qo4k":
    /*!*************************************************!*\
      !*** ./src/app/pipes/truncate/truncate.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TruncatePipe */

    /***/
    function qo4k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
        return TruncatePipe;
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

      var TruncatePipe = /*#__PURE__*/function () {
        function TruncatePipe() {
          _classCallCheck(this, TruncatePipe);
        }

        _createClass(TruncatePipe, [{
          key: "transform",
          value: function transform(value, args) {
            var limit = args > 0 ? parseInt(args) : 10;
            return value.length > limit ? value.substring(0, limit) + '...' : value;
          }
        }]);

        return TruncatePipe;
      }();

      TruncatePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'truncate'
      })], TruncatePipe);
      /***/
    },

    /***/
    "tzNW":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/utils/uploard-file/uploard-file.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tzNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"pieceOfficielle\" *ngIf=\"pieceOfficielle.get('valide').value==null || !pieceOfficielle.get('valide').value\">\r\n    \r\n\r\n    <div fxLayout=\"row\" fxLayout.sm=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.gt-sm=\"20px\" fxLayoutAlign=\"start\">\r\n\r\n        <mat-form-field class=\"sycad-form-line\" appearance=\"outline\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"50\" [fxFlex.lg]=\"50\" [fxFlex.xl]=\"50\">\r\n            <mat-label>Description de la justificatif(*) </mat-label>\r\n            <input matInput placeholder=\"Description de la justificatif\" [attr.autocomplete]=\"'off'\" formControlName=\"appellation\" />\r\n        </mat-form-field>\r\n    </div>\r\n    <div *ngIf=\"urlfile\" fxLayout=\"row\" fxLayout.sm=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.gt-sm=\"20px\" fxLayoutAlign=\"center center\">\r\n        <a [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" href=\"{{URL}}{{urlFile.value.split('/')[2]}}\"\r\n        [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" mat-button color=\"primary\"  target=\"_blank\">\r\n        Visualiser</a>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n        <div class=\"content-container\" [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\">\r\n            <button mat-icon-button color=\"warn\" class=\"delete-icons-2\" type=\"button\">\r\n                <mat-icon (click)=\"resetDropZone()\">clear</mat-icon>\r\n              </button>\r\n            <dropzone class=\"dropzone-container\" [fxFlex]=\"100\" [config]=\"config\" [message]=\"'Cliquez ou faites glisser la pièce ici jointe'\" (init)=\"onUploadInit($event)\" (error)=\"onUploadError($event)\" (success)=\"onUploadSuccess($event)\">\r\n            </dropzone>\r\n        </div>\r\n        <!-- <div fxLayout=\"row\" fxLayout.sm=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.gt-sm=\"20px\" fxLayoutAlign=\"center center\">\r\n            <mat-error [fxFlex.xs]=\"100\" [fxFlex.sm]=\"100\" [fxFlex.md]=\"100\" \r\n            [fxFlex.lg]=\"100\" [fxFlex.xl]=\"100\" mat-button>\r\n            invalide</mat-error>\r\n        </div> -->\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "vgpo":
    /*!**********************************************************************!*\
      !*** ./src/app/layout/menu/vertical-menu/vertical-menu.component.ts ***!
      \**********************************************************************/

    /*! exports provided: VerticalMenuComponent */

    /***/
    function vgpo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function () {
        return VerticalMenuComponent;
      });
      /* harmony import */


      var _raw_loader_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./vertical-menu.component.html */
      "TaRy");
      /* harmony import */


      var _vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vertical-menu.component.scss */
      "QB1r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../menu.service */
      "3dwk");

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

      var VerticalMenuComponent = /*#__PURE__*/function () {
        function VerticalMenuComponent(appSettings, menuService, router) {
          _classCallCheck(this, VerticalMenuComponent);

          this.appSettings = appSettings;
          this.menuService = menuService;
          this.router = router;
          this.onClickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.settings = this.appSettings.settings;
        }

        _createClass(VerticalMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.parentMenu = this.menuItems.filter(function (item) {
              return item.parentId == _this15.menuParentId;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this16 = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (_this16.settings.fixedHeader) {
                  var mainContent = document.getElementById('main-content');

                  if (mainContent) {
                    mainContent.scrollTop = 0;
                  }
                } else {
                  document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
              }
            });
          }
        }, {
          key: "onClick",
          value: function onClick(menuId) {
            this.menuService.toggleMenuItem(menuId);
            this.menuService.closeOtherSubMenus(this.menuItems, menuId);
            this.onClickMenuItem.emit(menuId);
          }
        }]);

        return VerticalMenuComponent;
      }();

      VerticalMenuComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      VerticalMenuComponent.propDecorators = {
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['menuItems']
        }],
        menuParentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['menuParentId']
        }],
        onClickMenuItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      VerticalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vertical-menu',
        template: _raw_loader_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]],
        styles: [_vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], VerticalMenuComponent);
      /***/
    },

    /***/
    "w/zB":
    /*!*****************************************************!*\
      !*** ./src/app/layout/sidenav/sidenav.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function wZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _raw_loader_sidenav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "IpfW");
      /* harmony import */


      var _sidenav_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidenav.component.scss */
      "cW2u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");
      /* harmony import */


      var _menu_menu_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../menu/menu.model */
      "/y/e");
      /* harmony import */


      var _menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../menu/menu.service */
      "3dwk");

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

      var SidenavComponent = /*#__PURE__*/function () {
        function SidenavComponent(appSettings, menuService) {
          _classCallCheck(this, SidenavComponent);

          this.appSettings = appSettings;
          this.menuService = menuService;
          this.userImage = '../assets/img/users/user.jpg';
          this.lordMenu = true;
          this.settings = this.appSettings.settings;
        }

        _createClass(SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            //this.menuService.loading= true;
            //this.menuItems = this.menuService.getVerticalMenuItems();
            this.lordMenu = true;
            this.listMenu = [];
            this.menuService.getAppMenu().subscribe(function (list) {
              _this17.menuService.datas = list;
              list.forEach(function (menu) {
                var m = new _menu_menu_model__WEBPACK_IMPORTED_MODULE_4__["Menu"](menu.id, menu.title, menu.routerLink, menu.href, menu.icon, menu.target, menu.hasSubMenu, menu.parentId);

                _this17.listMenu.push(m);
              }); // console.log(this.menuService.getVerticalMenuItems());
              // this.listMenu = this.menuService.getVerticalMenuItems();

              _this17.menuItems = _this17.listMenu; //console.log(this.listMenu);

              _this17.lordMenu = false;
            });
          }
        }, {
          key: "closeSubMenus",
          value: function closeSubMenus() {
            var menu = document.getElementById("vertical-menu");

            if (menu) {
              for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];

                if (child) {
                  if (child.children[0].classList.contains('expanded')) {
                    child.children[0].classList.remove('expanded');
                    child.children[1].classList.remove('show');
                  }
                }
              }
            }
          }
        }]);

        return SidenavComponent;
      }();

      SidenavComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }, {
          type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }];
      };

      SidenavComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sidenav',
        template: _raw_loader_sidenav_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]],
        styles: [_sidenav_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])], SidenavComponent);
      /***/
    },

    /***/
    "wJNJ":
    /*!*******************************************************!*\
      !*** ./src/app/layout/template/template.component.ts ***!
      \*******************************************************/

    /*! exports provided: TemplateComponent */

    /***/
    function wJNJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
        return TemplateComponent;
      });
      /* harmony import */


      var _raw_loader_template_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./template.component.html */
      "5p0f");
      /* harmony import */


      var _template_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./template.component.scss */
      "zH3P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/app.settings */
      "/RaO");
      /* harmony import */


      var _menu_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../menu/menu.service */
      "3dwk");

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

      var TemplateComponent = /*#__PURE__*/function () {
        function TemplateComponent(appSettings, router, menuService) {
          _classCallCheck(this, TemplateComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.menuService = menuService;
          this.menus = ['vertical', 'horizontal'];
          this.menuTypes = ['default', 'compact', 'mini'];
          this.lastScrollTop = 0;
          this.showBackToTop = false;
          this.toggleSearchBar = false;
          this.settings = this.appSettings.settings;
          this.dateAcu = new Date().getFullYear();
        }

        _createClass(TemplateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (window.innerWidth <= 768) {
              this.settings.menu = 'vertical';
              this.settings.sidenavIsOpened = false;
              this.settings.sidenavIsPinned = false;
            }

            this.menuOption = this.settings.menu;
            this.menuTypeOption = this.settings.menuType;
            this.defaultMenu = this.settings.menu;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this18 = this;

            setTimeout(function () {
              _this18.settings.loadingSpinner = false;
            }, 300);
            this.backToTop.nativeElement.style.display = 'none';
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (!_this18.settings.sidenavIsPinned) {
                  _this18.sidenav.close();
                }

                if (window.innerWidth <= 768) {
                  _this18.sidenav.close();
                }
              }
            });
            if (this.settings.menu == "vertical") this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
          }
        }, {
          key: "chooseMenu",
          value: function chooseMenu() {
            this.settings.menu = this.menuOption;
            this.defaultMenu = this.menuOption;
            this.router.navigate(['/']);
          }
        }, {
          key: "chooseMenuType",
          value: function chooseMenuType() {
            this.settings.menuType = this.menuTypeOption;
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.settings.theme = theme;
          }
        }, {
          key: "toggleSidenav",
          value: function toggleSidenav() {
            this.sidenav.toggle();
          }
        }, {
          key: "onPsScrollY",
          value: function onPsScrollY(event) {
            event.target.scrollTop > 300 ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';

            if (this.settings.menu == 'horizontal') {
              if (this.settings.fixedHeader) {
                var currentScrollTop = event.target.scrollTop > 56 ? event.target.scrollTop : 0;

                if (currentScrollTop > this.lastScrollTop) {
                  document.querySelector('#horizontal-menu').classList.add('sticky');
                  event.target.classList.add('horizontal-menu-hidden');
                } else {
                  document.querySelector('#horizontal-menu').classList.remove('sticky');
                  event.target.classList.remove('horizontal-menu-hidden');
                }

                this.lastScrollTop = currentScrollTop;
              } else {
                if (event.target.scrollTop > 56) {
                  document.querySelector('#horizontal-menu').classList.add('sticky');
                  event.target.classList.add('horizontal-menu-hidden');
                } else {
                  document.querySelector('#horizontal-menu').classList.remove('sticky');
                  event.target.classList.remove('horizontal-menu-hidden');
                }
              }
            }
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.pss.forEach(function (ps) {
              if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
                ps.scrollToTop(0, 250);
              }
            });
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            if (window.innerWidth <= 768) {
              this.settings.sidenavIsOpened = false;
              this.settings.sidenavIsPinned = false;
              this.settings.menu = 'vertical';
            } else {
              this.defaultMenu == 'horizontal' ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
              this.settings.sidenavIsOpened = true;
              this.settings.sidenavIsPinned = true;
            }
          }
        }, {
          key: "closeSubMenus",
          value: function closeSubMenus() {
            var menu = document.querySelector(".sidenav-menu-outer");

            if (menu) {
              for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];

                if (child) {
                  if (child.children[0].classList.contains('expanded')) {
                    child.children[0].classList.remove('expanded');
                    child.children[1].classList.remove('show');
                  }
                }
              }
            }
          }
        }]);

        return TemplateComponent;
      }();

      TemplateComponent.ctorParameters = function () {
        return [{
          type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]
        }];
      };

      TemplateComponent.propDecorators = {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['sidenav']
        }],
        backToTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['backToTop']
        }],
        pss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"]]
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:resize']
        }]
      };
      TemplateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-template',
        template: _raw_loader_template_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]],
        styles: [_template_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]])], TemplateComponent);
      /***/
    },

    /***/
    "wdBf":
    /*!***************************************!*\
      !*** ./src/app/app.settings.model.ts ***!
      \***************************************/

    /*! exports provided: Settings */

    /***/
    function wdBf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Settings", function () {
        return Settings;
      });

      var Settings = function Settings(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl, hasFooter) {
        _classCallCheck(this, Settings);

        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
        this.hasFooter = hasFooter;
      };
      /***/

    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n\n#app-spinner.hide {\n  visibility: hidden;\n  opacity: 0;\n}\n\n#app-spinner h4 {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFLSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUdBLGdEQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFHQSxvRUFBQTtFQUNBLDREQUFBO0FBRVI7O0FBRUE7RUFDSTtJQUFLLFVBQUE7RUFFUDtFQURFO0lBQUssVUFBQTtFQUlQO0VBSEU7SUFBSyxVQUFBO0VBTVA7RUFMRTtJQUFLLFVBQUE7RUFRUDtBQUNGOztBQURBO0VBQ0k7SUFBSyxVQUFBO0VBa0JQO0VBakJFO0lBQUssVUFBQTtFQW9CUDtFQW5CRTtJQUFLLFVBQUE7RUFzQlA7RUFyQkU7SUFBSyxVQUFBO0VBd0JQO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuXHJcbiNhcHAtc3Bpbm5lcntcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgJi5oaWRle1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwOyBcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "zH3P":
    /*!*********************************************************!*\
      !*** ./src/app/layout/template/template.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function zH3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sidenav {\n  width: 250px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0;\n}\n\n.horizontal-menu.sticky {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.horizontal-menu.sticky.fixed-top {\n  position: fixed;\n  top: 0;\n  height: 56px;\n  overflow: visible;\n}\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2));\n}\n\n.inner-sidenav-content .has-footer {\n  min-height: calc(100% - (45px + 56px));\n}\n\n.inner-sidenav-content .footer {\n  height: 56px;\n  margin: 0 -8px -8px -8px;\n  padding: 0 16px;\n}\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden;\n}\n\n.options .control {\n  padding: 6px 14px;\n}\n\n.options .control div {\n  padding: 6px 0;\n}\n\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options .control .skin-primary {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 32px solid;\n  border-left: 32px solid transparent;\n}\n\n.options .control .skin-primary.indigo-light {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.teal-light {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options .control .skin-primary.teal-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.red-light {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options .control .skin-primary.red-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.blue-dark {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.green-dark {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options .control .skin-primary.green-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.pink-dark {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n\n.options .mat-slide-toggle {\n  height: auto;\n}\n\n.options .ps {\n  height: calc(100% - 48px);\n}\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon .mat-icon {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top:hover {\n  opacity: 0.9;\n}\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.search-bar form input.show {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlDRVk7RUREWixnQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUNJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUFRO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxZQ2pCSztFRGtCTCxpQkFBQTtBQUVaOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQ3pCZTtFRDBCZixTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQ3RCYztFRHVCZCx1Q0FBQTtBQUFGOztBQUNFO0VBQ0Usc0NBQUE7QUFDSjs7QUFDRTtFQUNFLFlDcEJZO0VEcUJaLHdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFlDeENZO0VEeUNaLGdCQUFBO0FBQUo7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUFRO0VBQ0ksY0FBQTtBQUVaOztBQUFRO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtBQUVaOztBQUFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRVo7O0FBRFk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0FBR2hCOztBQURZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUdoQjs7QUFGZ0I7RUFDSSw0QkFBQTtBQUlwQjs7QUFEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFHaEI7O0FBRmdCO0VBQ0ksNEJBQUE7QUFJcEI7O0FBRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBR2hCOztBQUZnQjtFQUNJLDRCQUFBO0FBSXBCOztBQURZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUdoQjs7QUFGZ0I7RUFDSSw0QkFBQTtBQUlwQjs7QUFEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFHaEI7O0FBRmdCO0VBQ0ksNEJBQUE7QUFJcEI7O0FBRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBR2hCOztBQUZnQjtFQUNJLDRCQUFBO0FBSXBCOztBQUNJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUFRO0VBQ0ksYUFBQTtBQUVaOztBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUNJO0VBQ0kseUJBQUE7QUFDUjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUVKOztBQURJO0VBQ0ksMENBQUE7RUFFQSxrQ0FBQTtBQUdSOztBQU1BO0VBQ0k7SUFDSSxpQ0FBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLHlCQUFBO0VBRU47QUFDRjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFLUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZaOztBQUdZO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFEZiIsImZpbGUiOiJ0ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICBcclxufVxyXG4uaG9yaXpvbnRhbC1tZW51e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7ICAgIFxyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgJi5zdGlja3l7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLmZpeGVkLXRvcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyLXNpZGVuYXYtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDokdG9vbGJhci1oZWlnaHQ7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7ICBcclxuICBwYWRkaW5nOiAkaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKCN7JHRvb2xiYXItaGVpZ2h0fSArICN7JGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nfSoyKSk7XHJcbiAgLmhhcy1mb290ZXJ7ICBcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICg0NXB4ICsgI3skZm9vdGVyLWhlaWdodH0pKTtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgICBtYXJnaW46IDAgLThweCAtOHB4IC04cHg7IFxyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRyb2x7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMCA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMzJweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMzJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmluZGlnby1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50ZWFsLWxpZ2h0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJlZC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ibHVlLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JlZW4tZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5waW5rLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgxQjYwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgfVxyXG59XHJcbi5vcC1pbWFnZXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLm9wdGlvbnMtaWNvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJhcntcclxuICAgIGZvcm17XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICYuc2hvd3tcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDtcclxuJG1pbmktc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogNzBweDtcclxuXHJcbiRmbGV4LWRpc3RhbmNlOiA4cHg7XHJcbiRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZzogJGZsZXgtZGlzdGFuY2U7XHJcblxyXG4vL0xvZ2luLCBSZWdpc3RlciwgRXJyb3JzIGJveFxyXG4kYm94LWhlaWdodDogMTg2cHg7XHJcbiRib3gtcG9zaXRpb246IDM0cHg7XHJcbiRyZWdpc3Rlci1ib3gtaGVpZ2h0OiAzMDBweDtcclxuXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4OyAiXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map