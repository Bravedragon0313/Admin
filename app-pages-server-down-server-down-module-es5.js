function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-server-down-server-down-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+server-down/server-down.page.html":
  /*!************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+server-down/server-down.page.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesServerDownServerDownPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\t<nb-layout-column class=\"login-view info-page\" scroll=\"false\">\n\t\t<div class=\"server-down-content\">\n\t\t\t<div class=\"logo app-hide-on-keyboard-open\">\n\t\t\t\t<img src=\"{{ noInternetLogo }}\" />\n\t\t\t</div>\n\n\t\t\t<div class=\"info-massage\">\n\t\t\t\t<h3 class=\"mt-4\">\n\t\t\t\t\t{{ 'NO_SERVER_VIEW.NO_SERVER' | translate }}\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\t</nb-layout-column>\n</nb-layout>\n";
    /***/
  },

  /***/
  "./src/app/@theme/index.ts":
  /*!*********************************!*\
    !*** ./src/app/@theme/index.ts ***!
    \*********************************/

  /*! exports provided: HttpLoaderFactory, ThemeModule */

  /***/
  function srcAppThemeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"];
    });
    /***/

  },

  /***/
  "./src/app/pages/+server-down/server-down.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/+server-down/server-down.module.ts ***!
    \**********************************************************/

  /*! exports provided: HttpLoaderFactory, ServerDownModule */

  /***/
  function srcAppPagesServerDownServerDownModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerDownModule", function () {
      return ServerDownModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _server_down_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./server-down.page */
    "./src/app/pages/+server-down/server-down.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, '../../../assets/i18n/', '.json');
    }

    var routes = [{
      path: '',
      component: _server_down_page__WEBPACK_IMPORTED_MODULE_5__["ServerDownPage"]
    }];

    var ServerDownModule = function ServerDownModule() {
      _classCallCheck(this, ServerDownModule);
    };

    ServerDownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_theme__WEBPACK_IMPORTED_MODULE_9__["ThemeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
        }
      })],
      declarations: [_server_down_page__WEBPACK_IMPORTED_MODULE_5__["ServerDownPage"]]
    })], ServerDownModule);
    /***/
  },

  /***/
  "./src/app/pages/+server-down/server-down.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/+server-down/server-down.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesServerDownServerDownPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-page {\n  padding: 0 !important;\n}\n\n.info-page .server-down-content {\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.info-page .info-massage h3 {\n  color: red;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy8rc2VydmVyLWRvd24vc2VydmVyLWRvd24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy8rc2VydmVyLWRvd24vc2VydmVyLWRvd24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0MscUJBQXFCO0FDSHRCOztBREVBO0VBSUUsWUFBWTtFQUlaLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO01BQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO01BQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw0QkFBc0I7RUFBdEIsNkJBQXNCO01BQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7QUNMeEI7O0FEUkE7RUFpQkUsVUFBVTtFQUNWLFdBQVc7QUNMYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytzZXJ2ZXItZG93bi9zZXJ2ZXItZG93bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICdAbW9kdWxlcy9jbGllbnQuY29tbW9uLmFuZ3VsYXIyL3Njc3MvZXZlcmJpZS5jb21tb24nO1xuLy8gQGltcG9ydCBcIn5AbW9kdWxlcy9jbGllbnQuY29tbW9uLmFuZ3VsYXIyL3Njc3MvZXZlcmJpZS5jb21tb24uc2Nzcyc7XG4vLyBAaW1wb3J0IFwifkBldmVyLXBsYXRmb3JtL2NvbW1vbi1hbmd1bGFyL3Njc3MvZXZlcmJpZS5jb21tb24uc2Nzcyc7XG5cbi5pbmZvLXBhZ2Uge1xuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cblx0LnNlcnZlci1kb3duLWNvbnRlbnQge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblxuXHRcdC8vIGJhY2tncm91bmQ6ICRicmFuZDtcblxuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblxuXHQuaW5mby1tYXNzYWdlIGgzIHtcblx0XHRjb2xvcjogcmVkO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG4iLCIuaW5mby1wYWdlIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uaW5mby1wYWdlIC5zZXJ2ZXItZG93bi1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbmZvLXBhZ2UgLmluZm8tbWFzc2FnZSBoMyB7XG4gIGNvbG9yOiByZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/+server-down/server-down.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/+server-down/server-down.page.ts ***!
    \********************************************************/

  /*! exports provided: ServerDownPage */

  /***/
  function srcAppPagesServerDownServerDownPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerDownPage", function () {
      return ServerDownPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/@core/data/store.service */
    "./src/app/@core/data/store.service.ts");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/client.common.angular2/services/server-connection.service */
    "../common-angular/src/services/server-connection.service.ts");

    var ServerDownPage = /*#__PURE__*/function () {
      function ServerDownPage(store, http, location, translate, serverConnectionService) {
        _classCallCheck(this, ServerDownPage);

        this.store = store;
        this.http = http;
        this.location = location;
        this.translate = translate;
        this.serverConnectionService = serverConnectionService;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|bg|he|ru/) ? browserLang : 'en-US');
        this.noInternetLogo = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]['NO_INTERNET_LOGO'];
        this.testConnection();
      }

      _createClass(ServerDownPage, [{
        key: "testConnection",
        value: function testConnection() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.interval = setInterval(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.serverConnectionService.checkServerConnection(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVICES_ENDPOINT, this.store);

                              case 2:
                                if (Number(this.store.serverConnection) !== 0) {
                                  clearInterval(this.interval);
                                  this.location.back();
                                }

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, 5000);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.interval);
        }
      }]);

      return ServerDownPage;
    }();

    ServerDownPage.ctorParameters = function () {
      return [{
        type: _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_7__["ServerConnectionService"]
      }];
    };

    ServerDownPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./server-down.page.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+server-down/server-down.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./server-down.page.scss */
      "./src/app/pages/+server-down/server-down.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_7__["ServerConnectionService"]])], ServerDownPage);
    /***/
  }
}]);
//# sourceMappingURL=app-pages-server-down-server-down-module-es5.js.map