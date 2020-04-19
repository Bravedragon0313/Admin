function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-customers-customers-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.html":
  /*!************************************************************************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.html ***!
    \************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentCustomerTableCustomerOrdersNumberCustomerOrdersNumberComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\n\t<div class=\"badge badge-pill badge-secondary number-qty\">\n\t\t{{ numberQTY }}\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.html":
  /*!********************************************************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.html ***!
    \********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentCustomerTableCustomerTableCustomerImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img\n\tclass=\"redirect-image\"\n\t*ngIf=\"imageUrl\"\n\t(click)=\"redirect()\"\n\tsrc=\"{{ imageUrl }}\"\n/>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/ban-confirm/ban-confirm.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/ban-confirm/ban-confirm.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedUserBanConfirmBanConfirmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\t<h4 class=\"modal-title\" id=\"modal-title\">Profile Ban</h4>\n\t<button\n\t\ttype=\"button\"\n\t\tclass=\"close\"\n\t\taria-label=\"Close button\"\n\t\taria-describedby=\"modal-title\"\n\t\t(click)=\"modal.dismiss()\"\n\t>\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<p>\n\t\t<strong\n\t\t\t>Are you sure you want to {{ user.isBanned ? 'unban' : 'ban' }}\n\t\t\t<span class=\"text-primary\">\"{{ user.name }}\"</span>?</strong\n\t\t>\n\t</p>\n</div>\n<div class=\"modal-footer\">\n\t<button\n\t\ttype=\"button\"\n\t\tclass=\"btn btn-outline-secondary\"\n\t\t(click)=\"modal.dismiss()\"\n\t>\n\t\tCancel\n\t</button>\n\t<button\n\t\ttype=\"button\"\n\t\tngbAutofocus\n\t\tclass=\"btn btn-danger\"\n\t\t(click)=\"modal.close(user)\"\n\t>\n\t\tOk\n\t</button>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+invites/country-render/country-render.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+invites/country-render/country-render.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomersInvitesCountryRenderCountryRenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<select\n\t[(ngModel)]=\"this.cell.newValue\"\n\t(change)=\"onChanged($event)\"\n\tclass=\"form-control ng-pristine ng-valid ng-touched\"\n>\n\t<option *ngFor=\"let country of countries\" value=\"{{ country.name }}\">\n\t\t{{ country.name }}\n\t</option>\n</select>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/customers.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/customers.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n\t<toaster-container></toaster-container>\n\n\t<nb-card-header>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t(click)=\"showCreateUserModal()\"\n\t\t>\n\t\t\t<i class=\"ion-md-add button-icon mr-1\"></i>\n\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'CUSTOMERS_VIEW.CREATE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"danger\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t[disabled]=\"!hasSelectedCustomers\"\n\t\t\t(click)=\"deleteSelectedRows()\"\n\t\t>\n\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'CUSTOMERS_VIEW.DELETE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"info\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t[routerLink]=\"['/devices']\"\n\t\t>\n\t\t\t<i class=\"ion-md-phone-portrait\"></i>&nbsp;&nbsp;\n\t\t\t{{ 'CUSTOMERS_VIEW.CUSTOMERS_DEVICES' | translate }}\n\t\t</button>\n\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"danger\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t[disabled]=\"!isOnlyOneCustomerSelected || showBanLoading\"\n\t\t\t[nbSpinner]=\"showBanLoading\"\n\t\t\t(click)=\"banSelectedRows()\"\n\t\t>\n\t\t\t<i class=\"ion-md-close-circle button-icon mr-1\"></i>\n\n\t\t\t<small _ngcontent-c55=\"\" *ngIf=\"isUserBanned\">{{\n\t\t\t\t'CUSTOMERS_VIEW.UNBAN' | translate\n\t\t\t}}</small>\n\n\t\t\t<small _ngcontent-c55=\"\" *ngIf=\"!isUserBanned\">{{\n\t\t\t\t'CUSTOMERS_VIEW.BAN' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t\t<input\n\t\t\ttype=\"checkbox\"\n\t\t\tname=\"bannedOnly\"\n\t\t\tid=\"showBannedOnly\"\n\t\t\t[(ngModel)]=\"showOnlyBanned\"\n\t\t\t[ngModelOptions]=\"{ standalone: true }\"\n\t\t/>\n\t\t<label for=\"bannedOnly\">Show Banned Only</label>\n\t</nb-card-header>\n\n\t<nb-card-body [nbSpinner]=\"loading\">\n\t\t<ng2-smart-table\n\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t(userRowSelect)=\"selectCustomerTmp($event)\"\n\t\t>\n\t\t</ng2-smart-table>\n\t</nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./src/app/@core/services/notify/notify.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@core/services/notify/notify.service.ts ***!
    \*********************************************************/

  /*! exports provided: NotifyService */

  /***/
  function srcAppCoreServicesNotifyNotifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyService", function () {
      return NotifyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotifyService = /*#__PURE__*/function () {
      function NotifyService(_toasterService) {
        _classCallCheck(this, NotifyService);

        this._toasterService = _toasterService;
      }

      _createClass(NotifyService, [{
        key: "success",
        value: function success(title, body) {
          this._setupToast('success', title, body);

          this._notify();
        }
      }, {
        key: "warn",
        value: function warn(title, body) {
          this._setupToast('warning', title, body);

          this._notify();
        }
      }, {
        key: "error",
        value: function error(title, body) {
          this._setupToast('error', title, body);

          this._notify();
        }
      }, {
        key: "_setupToast",
        value: function _setupToast(type, title, body) {
          this._toast = {
            type: type,
            title: title,
            body: body
          };
        }
      }, {
        key: "_notify",
        value: function _notify() {
          this._toasterService.pop(this._toast);
        }
      }]);

      return NotifyService;
    }();

    NotifyService.ctorParameters = function () {
      return [{
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }];
    };

    NotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]])], NotifyService);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRenderComponentCustomerTableCustomerOrdersNumberCustomerOrdersNumberComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".number-qty {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY3VzdG9tZXItdGFibGUvY3VzdG9tZXItb3JkZXJzLW51bWJlci9jdXN0b21lci1vcmRlcnMtbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY3VzdG9tZXItdGFibGUvY3VzdG9tZXItb3JkZXJzLW51bWJlci9jdXN0b21lci1vcmRlcnMtbnVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBZTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9jdXN0b21lci10YWJsZS9jdXN0b21lci1vcmRlcnMtbnVtYmVyL2N1c3RvbWVyLW9yZGVycy1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyLXF0eSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5udW1iZXItcXR5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: CustomerOrdersNumberComponent */

  /***/
  function srcAppSharedRenderComponentCustomerTableCustomerOrdersNumberCustomerOrdersNumberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerOrdersNumberComponent", function () {
      return CustomerOrdersNumberComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CustomerOrdersNumberComponent = /*#__PURE__*/function () {
      function CustomerOrdersNumberComponent(_router) {
        _classCallCheck(this, CustomerOrdersNumberComponent);

        this._router = _router;
      }

      _createClass(CustomerOrdersNumberComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.numberQTY = this.rowData.ordersQty;
        }
      }]);

      return CustomerOrdersNumberComponent;
    }();

    CustomerOrdersNumberComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CustomerOrdersNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-orders-number.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customer-orders-number.component.scss */
      "./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CustomerOrdersNumberComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-table/customer-table.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-table/customer-table.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: CustomerTableModule */

  /***/
  function srcAppSharedRenderComponentCustomerTableCustomerTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerTableModule", function () {
      return CustomerTableModule;
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


    var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _customer_table_customer_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customer-table/customer-image.component */
    "./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.ts");
    /* harmony import */


    var _customer_orders_number_customer_orders_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customer-orders-number/customer-orders-number.component */
    "./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.ts");

    var COMPONENTS = [_customer_table_customer_image_component__WEBPACK_IMPORTED_MODULE_6__["CustomerImageComponent"], _customer_orders_number_customer_orders_number_component__WEBPACK_IMPORTED_MODULE_7__["CustomerOrdersNumberComponent"]];

    var CustomerTableModule = function CustomerTableModule() {
      _classCallCheck(this, CustomerTableModule);
    };

    CustomerTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["HighlightModule"].forRoot({
        theme: 'github'
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], CustomerTableModule);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRenderComponentCustomerTableCustomerTableCustomerImageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 64px;\n  height: 64px;\n}\n\n.redirect-image {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY3VzdG9tZXItdGFibGUvY3VzdG9tZXItdGFibGUvY3VzdG9tZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9jdXN0b21lci10YWJsZS9jdXN0b21lci10YWJsZS9jdXN0b21lci1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0FDQ2I7O0FERUE7RUFDQyxlQUFlO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L2N1c3RvbWVyLXRhYmxlL2N1c3RvbWVyLXRhYmxlL2N1c3RvbWVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcblx0d2lkdGg6IDY0cHg7XG5cdGhlaWdodDogNjRweDtcbn1cblxuLnJlZGlyZWN0LWltYWdlIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuIiwiaW1nIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnJlZGlyZWN0LWltYWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: CustomerImageComponent */

  /***/
  function srcAppSharedRenderComponentCustomerTableCustomerTableCustomerImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerImageComponent", function () {
      return CustomerImageComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CustomerImageComponent = /*#__PURE__*/function () {
      function CustomerImageComponent(router) {
        _classCallCheck(this, CustomerImageComponent);

        this.router = router;
      }

      _createClass(CustomerImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imageUrl = this.rowData.image;
        }
      }, {
        key: "redirect",
        value: function redirect() {
          if (this.redirectPage) {
            this.router.navigate(["".concat(this.redirectPage, "/").concat(this.rowData.id)]);
          }
        }
      }]);

      return CustomerImageComponent;
    }();

    CustomerImageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CustomerImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-image.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customer-image.component.scss */
      "./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CustomerImageComponent);
    /***/
  },

  /***/
  "./src/app/@shared/user/ban-confirm/ban-confirm.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/@shared/user/ban-confirm/ban-confirm.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedUserBanConfirmBanConfirmComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvdXNlci9iYW4tY29uZmlybS9iYW4tY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/@shared/user/ban-confirm/ban-confirm.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/@shared/user/ban-confirm/ban-confirm.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BanConfirmComponent */

  /***/
  function srcAppSharedUserBanConfirmBanConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanConfirmComponent", function () {
      return BanConfirmComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var BanConfirmComponent = /*#__PURE__*/function () {
      function BanConfirmComponent(modal) {
        _classCallCheck(this, BanConfirmComponent);

        this.modal = modal;
      }

      _createClass(BanConfirmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BanConfirmComponent;
    }();

    BanConfirmComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BanConfirmComponent.prototype, "user", void 0);
    BanConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-ban-confirm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ban-confirm.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/ban-confirm/ban-confirm.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ban-confirm.component.scss */
      "./src/app/@shared/user/ban-confirm/ban-confirm.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], BanConfirmComponent);
    /***/
  },

  /***/
  "./src/app/@shared/user/ban-confirm/ban-confirm.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/@shared/user/ban-confirm/ban-confirm.module.ts ***!
    \****************************************************************/

  /*! exports provided: BanConfirmModule */

  /***/
  function srcAppSharedUserBanConfirmBanConfirmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanConfirmModule", function () {
      return BanConfirmModule;
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


    var _ban_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ban-confirm.component */
    "./src/app/@shared/user/ban-confirm/ban-confirm.component.ts");

    var BanConfirmModule = function BanConfirmModule() {
      _classCallCheck(this, BanConfirmModule);
    };

    BanConfirmModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ban_confirm_component__WEBPACK_IMPORTED_MODULE_3__["BanConfirmComponent"]],
      exports: [_ban_confirm_component__WEBPACK_IMPORTED_MODULE_3__["BanConfirmComponent"]],
      entryComponents: [_ban_confirm_component__WEBPACK_IMPORTED_MODULE_3__["BanConfirmComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], BanConfirmModule);
    /***/
  },

  /***/
  "./src/app/@shared/user/ban-confirm/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/@shared/user/ban-confirm/index.ts ***!
    \***************************************************/

  /*! exports provided: BanConfirmModule, BanConfirmComponent */

  /***/
  function srcAppSharedUserBanConfirmIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ban_confirm_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ban-confirm.module */
    "./src/app/@shared/user/ban-confirm/ban-confirm.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BanConfirmModule", function () {
      return _ban_confirm_module__WEBPACK_IMPORTED_MODULE_1__["BanConfirmModule"];
    });
    /* harmony import */


    var _ban_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ban-confirm.component */
    "./src/app/@shared/user/ban-confirm/ban-confirm.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BanConfirmComponent", function () {
      return _ban_confirm_component__WEBPACK_IMPORTED_MODULE_2__["BanConfirmComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/+customers/+invites/country-render/country-render.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/+customers/+invites/country-render/country-render.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CountryRenderComponent */

  /***/
  function srcAppPagesCustomersInvitesCountryRenderCountryRenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryRenderComponent", function () {
      return CountryRenderComponent;
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


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/server.common/entities/GeoLocation */
    "../common/src/entities/GeoLocation.ts");

    var CountryRenderComponent = /*#__PURE__*/function (_ng2_smart_table__WEB) {
      _inherits(CountryRenderComponent, _ng2_smart_table__WEB);

      var _super = _createSuper(CountryRenderComponent);

      function CountryRenderComponent() {
        _classCallCheck(this, CountryRenderComponent);

        return _super.call(this);
      }

      _createClass(CountryRenderComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "onChanged",
        value: function onChanged(e) {}
      }, {
        key: "countries",
        get: function get() {
          return _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_3__["countriesIdsToNamesArray"];
        }
      }]);

      return CountryRenderComponent;
    }(ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["DefaultEditor"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Cell"])], CountryRenderComponent.prototype, "cell", void 0);
    CountryRenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./country-render.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+invites/country-render/country-render.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CountryRenderComponent);
    /***/
  },

  /***/
  "./src/app/pages/+customers/customers.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/+customers/customers.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCustomersCustomersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card-header {\n  border-bottom: 0;\n}\n\nnb-card-body {\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n:host ::ng-deep ng2-smart-table tr th {\n  padding: 18px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr td {\n  padding: 17px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) input {\n  margin-left: 1px !important;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table td.ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-filters th {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table tr td:first-of-type,\n:host ::ng-deep ng2-smart-table th:first-of-type {\n  border-left: none;\n}\n\n:host ::ng-deep ng2-smart-table tr td:last-of-type,\n:host ::ng-deep ng2-smart-table th:last-of-type {\n  border-right: none;\n}\n\n:host ::ng-deep ng2-smart-table input[type='checkbox'] {\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table .customer-image {\n  width: 74px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy8rY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7QUNDakI7O0FERUE7RUFDQyxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQ0NuQzs7QURFQTtFQUdHLHdCQUF3QjtBQ0QzQjs7QURGQTtFQU1HLHdCQUF3QjtBQ0EzQjs7QUROQTtFQVdFLGtCQUFrQjtFQUNsQixlQUFlO0FDRGpCOztBRFhBO0VBZUcsMkJBQTJCO0VBQzNCLGVBQWU7QUNBbEI7O0FEaEJBO0VBcUJFLGtCQUFrQjtFQUNsQixlQUFlO0FDRGpCOztBRHJCQTtFQTBCRSxrQkFBa0I7QUNEcEI7O0FEekJBOztFQWdDRyxpQkFBaUI7QUNGcEI7O0FEOUJBOztFQW1DRyxrQkFBa0I7QUNBckI7O0FEbkNBO0VBd0NFLGVBQWU7QUNEakI7O0FES0E7RUFDQyxXQUFXO0FDRloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQtaGVhZGVyIHtcblx0Ym9yZGVyLWJvdHRvbTogMDtcbn1cblxubmItY2FyZC1ib2R5IHtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHtcblx0dHIge1xuXHRcdHRoIHtcblx0XHRcdHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcblx0XHR9XG5cdFx0dGQge1xuXHRcdFx0cGFkZGluZzogMTdweCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdHRyLm5nMi1zbWFydC10aXRsZXMgPiB0aDpudGgtY2hpbGQoMSkge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cblx0XHRpbnB1dCB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHR9XG5cblx0dGQubmcyLXNtYXJ0LWFjdGlvbnMubmcyLXNtYXJ0LWFjdGlvbi1tdWx0aXBsZS1zZWxlY3Qge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblxuXHR0ci5uZzItc21hcnQtZmlsdGVycyB0aCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0dHIgdGQsXG5cdHRoIHtcblx0XHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XG5cdFx0fVxuXHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdGJvcmRlci1yaWdodDogbm9uZTtcblx0XHR9XG5cdH1cblxuXHRpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAuY3VzdG9tZXItaW1hZ2Uge1xuXHR3aWR0aDogNzRweDtcbn1cbiIsIm5iLWNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxubmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkIHtcbiAgcGFkZGluZzogMTdweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC10aXRsZXMgPiB0aDpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ci5uZzItc21hcnQtdGl0bGVzID4gdGg6bnRoLWNoaWxkKDEpIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGQubmcyLXNtYXJ0LWFjdGlvbnMubmcyLXNtYXJ0LWFjdGlvbi1tdWx0aXBsZS1zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ci5uZzItc21hcnQtZmlsdGVycyB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZDpmaXJzdC1vZi10eXBlLFxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0aDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGQ6bGFzdC1vZi10eXBlLFxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0aDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAuY3VzdG9tZXItaW1hZ2Uge1xuICB3aWR0aDogNzRweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/+customers/customers.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/+customers/customers.component.ts ***!
    \*********************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppPagesCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _core_data_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../@core/data/users.service */
    "./src/app/@core/data/users.service.ts");
    /* harmony import */


    var _core_data_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@core/data/orders.service */
    "./src/app/@core/data/orders.service.ts");
    /* harmony import */


    var _shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../@shared/user/user-mutation */
    "./src/app/@shared/user/user-mutation/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/Rx */
    "../../node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @modules/server.common/entities/GeoLocation */
    "../common/src/entities/GeoLocation.ts");
    /* harmony import */


    var _invites_country_render_country_render_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./+invites/country-render/country-render.component */
    "./src/app/pages/+customers/+invites/country-render/country-render.component.ts");
    /* harmony import */


    var _shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../@shared/render-component/name-redirect/name-redirect.component */
    "./src/app/@shared/render-component/name-redirect/name-redirect.component.ts");
    /* harmony import */


    var _shared_render_component_customer_table_customer_table_customer_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../@shared/render-component/customer-table/customer-table/customer-image.component */
    "./src/app/@shared/render-component/customer-table/customer-table/customer-image.component.ts");
    /* harmony import */


    var _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../@core/services/notify/notify.service */
    "./src/app/@core/services/notify/notify.service.ts");
    /* harmony import */


    var _shared_render_component_customer_table_customer_orders_number_customer_orders_number_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component */
    "./src/app/@shared/render-component/customer-table/customer-orders-number/customer-orders-number.component.ts");
    /* harmony import */


    var _shared_render_component_customer_email_customer_email_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../@shared/render-component/customer-email/customer-email.component */
    "./src/app/@shared/render-component/customer-email/customer-email.component.ts");
    /* harmony import */


    var _shared_render_component_customer_phone_customer_phone_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../@shared/render-component/customer-phone/customer-phone.component */
    "./src/app/@shared/render-component/customer-phone/customer-phone.component.ts");
    /* harmony import */


    var _app_shared_user_ban_confirm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/@shared/user/ban-confirm */
    "./src/app/@shared/user/ban-confirm/index.ts");

    var CustomersComponent_1;
    var perPage = 7;

    var CustomersComponent = CustomersComponent_1 = /*#__PURE__*/function () {
      function CustomersComponent(_router, _ordersService, _usersService, _modalService, _translateService, _notifyService) {
        _classCallCheck(this, CustomersComponent);

        this._router = _router;
        this._ordersService = _ordersService;
        this._usersService = _usersService;
        this._modalService = _modalService;
        this._translateService = _translateService;
        this._notifyService = _notifyService;
        this.ngDestroy$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.showBanLoading = false;
        this.customers = [];
        this.orders = [];
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this._selectedCustomers = [];

        this._loadSettingsSmartTable();
      }

      _createClass(CustomersComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._addCustomHTMLElements();

          this._applyTranslationOnSmartTable();

          this.smartTableChange();

          this._loadDataSmartTable();
        }
      }, {
        key: "selectUser",
        value: function selectUser(ev) {
          var userId = ev.data.id;

          this._router.navigate(['/customers/list' + userId]);
        }
      }, {
        key: "showCreateUserModal",
        value: function showCreateUserModal() {
          this._modalService.open(_shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_6__["UserMutationComponent"], {
            size: 'lg',
            container: 'nb-layout',
            windowClass: 'ng-custom',
            backdrop: 'static'
          });
        }
      }, {
        key: "selectCustomerTmp",
        value: function selectCustomerTmp(ev) {
          this._selectedCustomers = ev.selected;
        }
      }, {
        key: "deleteSelectedRows",
        value: function deleteSelectedRows() {
          var idsForDelete = this._selectedCustomers.map(function (w) {
            return w.id;
          });

          try {
            this.loading = true;

            this._usersService.removeByIds(idsForDelete).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).toPromise();

            this._selectedCustomers = [];
            this.loading = false;
            var message = "Users was removed";

            this._notifyService.success(message);
          } catch (error) {
            var _message = "Something went wrong";

            if (error.message === 'Validation error') {
              _message = error.message;
            }

            this.loading = false;

            this._notifyService.error(_message);
          }
        }
      }, {
        key: "banSelectedRows",
        value: function banSelectedRows() {
          if (this.isUserBanned) {
            this.showUnbanPopup();
          } else {
            this.showBanPopup();
          }
        }
      }, {
        key: "showUnbanPopup",
        value: function showUnbanPopup() {
          var _this = this;

          var modal = this._modalService.open(_app_shared_user_ban_confirm__WEBPACK_IMPORTED_MODULE_20__["BanConfirmComponent"], {
            size: 'lg',
            container: 'nb-layout',
            windowClass: 'ng-custom',
            backdrop: 'static'
          });

          modal.componentInstance.user = this._selectedCustomers[0];
          modal.result.then(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.showBanLoading = true;
                      _context.next = 3;
                      return this._usersService.unbanUser(user.id);

                    case 3:
                      this._loadDataSmartTable();

                      this.showBanLoading = false;

                      this._notifyService.success("".concat(user.name, " is unbanned!"));

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (_) {});
        }
      }, {
        key: "showBanPopup",
        value: function showBanPopup() {
          var _this2 = this;

          var modal = this._modalService.open(_app_shared_user_ban_confirm__WEBPACK_IMPORTED_MODULE_20__["BanConfirmComponent"], {
            size: 'lg',
            container: 'nb-layout',
            windowClass: 'ng-custom',
            backdrop: 'static'
          });

          modal.componentInstance.user = this._selectedCustomers[0];
          modal.result.then(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.showBanLoading = true;
                      _context2.next = 3;
                      return this._usersService.banUser(user.id);

                    case 3:
                      this._loadDataSmartTable();

                      this.showBanLoading = false;

                      this._notifyService.success("".concat(user.name, " is banned!"));

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          })["catch"](function (_) {});
        }
      }, {
        key: "_loadSettingsSmartTable",
        value: function _loadSettingsSmartTable() {
          var _this3 = this;

          var columnTitlePrefix = 'CUSTOMERS_VIEW.SMART_TABLE_COLUMNS.';

          var getTranslate = function getTranslate(name) {
            return _this3._translateService.get(columnTitlePrefix + name);
          };

          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('EMAIL'), getTranslate('PHONE'), getTranslate('COUNTRY'), getTranslate('CITY'), getTranslate('ADDRESS'), getTranslate('ORDERS_QTY')).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 9),
                id = _ref2[0],
                image = _ref2[1],
                name = _ref2[2],
                email = _ref2[3],
                phone = _ref2[4],
                country = _ref2[5],
                city = _ref2[6],
                address = _ref2[7],
                ordersQty = _ref2[8];

            _this3.settingsSmartTable = {
              actions: false,
              selectMode: 'multi',
              columns: {
                images: {
                  title: image,
                  "class": 'customer-image',
                  type: 'custom',
                  renderComponent: _shared_render_component_customer_table_customer_table_customer_image_component__WEBPACK_IMPORTED_MODULE_15__["CustomerImageComponent"],
                  onComponentInitFunction: function onComponentInitFunction(instance) {
                    instance.redirectPage = 'customers/list';
                  },
                  filter: false
                },
                name: {
                  title: name,
                  type: 'custom',
                  renderComponent: _shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_14__["RedirectNameComponent"],
                  onComponentInitFunction: function onComponentInitFunction(instance) {
                    instance.redirectPage = 'customers/list';
                  }
                },
                email: {
                  title: email,
                  type: 'custom',
                  renderComponent: _shared_render_component_customer_email_customer_email_component__WEBPACK_IMPORTED_MODULE_18__["CustomerEmailComponent"]
                },
                phone: {
                  title: phone,
                  type: 'custom',
                  renderComponent: _shared_render_component_customer_phone_customer_phone_component__WEBPACK_IMPORTED_MODULE_19__["CustomerPhoneComponent"]
                },
                country: {
                  title: country,
                  editor: {
                    type: 'custom',
                    component: _invites_country_render_country_render_component__WEBPACK_IMPORTED_MODULE_13__["CountryRenderComponent"]
                  }
                },
                city: {
                  title: city
                },
                address: {
                  title: address
                },
                ordersQty: {
                  title: ordersQty,
                  type: 'custom',
                  renderComponent: _shared_render_component_customer_table_customer_orders_number_customer_orders_number_component__WEBPACK_IMPORTED_MODULE_17__["CustomerOrdersNumberComponent"],
                  filter: false
                }
              },
              pager: {
                display: true,
                perPage: perPage
              }
            };
          });
        }
      }, {
        key: "_loadDataSmartTable",
        value: function _loadDataSmartTable() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var users, loadData;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.$users) {
                      _context5.next = 3;
                      break;
                    }

                    _context5.next = 3;
                    return this.$users.unsubscribe();

                  case 3:
                    users = [];

                    loadData = function loadData() {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var usersOrders, usersVM, usersData;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this._ordersService.getUsersOrdersCountInfo(users.map(function (u) {
                                  return u.id;
                                }));

                              case 2:
                                usersOrders = _context3.sent;
                                usersVM = users.map(function (user) {
                                  var userOrders = usersOrders.find(function (res) {
                                    return res['id'] === user.id;
                                  });
                                  return {
                                    id: user.id,
                                    image: user.image || CustomersComponent_1.noInfoSign,
                                    name: user.firstName && user.lastName ? "".concat(user.firstName, " ").concat(user.lastName) : user.firstName ? user.firstName : user.lastName ? user.lastName : user.id,
                                    email: user.email || CustomersComponent_1.noInfoSign,
                                    phone: user.phone || CustomersComponent_1.noInfoSign,
                                    country: Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_12__["getCountryName"])(user.geoLocation.countryId).trim() || CustomersComponent_1.noInfoSign,
                                    city: user.geoLocation.city || CustomersComponent_1.noInfoSign,
                                    address: "st. ".concat(user.geoLocation.streetAddress || CustomersComponent_1.noInfoSign, ", hse. \u2116 ").concat(user.geoLocation.house || CustomersComponent_1.noInfoSign),
                                    ordersQty: userOrders ? userOrders.ordersCount : 0,
                                    isBanned: user.isBanned
                                  };
                                });
                                _context3.next = 6;
                                return this.loadDataCount();

                              case 6:
                                if (this.showOnlyBanned) {
                                  usersVM = usersVM.filter(function (user) {
                                    return user.isBanned;
                                  });
                                }

                                usersData = new Array(this.dataCount);
                                usersData.splice.apply(usersData, [perPage * (page - 1), perPage].concat(_toConsumableArray(usersVM)));
                                _context3.next = 11;
                                return this.sourceSmartTable.load(usersData);

                              case 11:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    };

                    this.$users = this._usersService.getUsers({
                      skip: perPage * (page - 1),
                      limit: perPage
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngDestroy$)).subscribe(function (u) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                users = u;
                                _context4.next = 3;
                                return loadData();

                              case 3:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "_applyTranslationOnSmartTable",
        value: function _applyTranslationOnSmartTable() {
          var _this5 = this;

          this._translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngDestroy$)).subscribe(function () {
            _this5._loadSettingsSmartTable();
          });
        }
      }, {
        key: "_addCustomHTMLElements",
        value: function _addCustomHTMLElements() {
          document.querySelector('tr.ng2-smart-filters > th:nth-child(1)').innerHTML = '<i class="fa fa-search" style="font-size: 1.3em"/>';
        }
      }, {
        key: "smartTableChange",
        value: function smartTableChange() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.sourceSmartTable.onChanged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngDestroy$)).subscribe(function (event) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var page;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (event.action === 'page') {
                                  page = event.paging.page;

                                  this._loadDataSmartTable(page);
                                }

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "loadDataCount",
        value: function loadDataCount() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this._usersService.getCountOfUsers();

                  case 2:
                    this.dataCount = _context8.sent;

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }, {
        key: "hasSelectedCustomers",
        get: function get() {
          return this._selectedCustomers.length > 0;
        }
      }, {
        key: "isOnlyOneCustomerSelected",
        get: function get() {
          return this._selectedCustomers.length === 1;
        }
      }, {
        key: "isUserBanned",
        get: function get() {
          return this._selectedCustomers[0] && this._selectedCustomers[0].isBanned;
        }
      }, {
        key: "showOnlyBanned",
        set: function set(v) {
          this._showOnlyBanned = v;

          this._loadDataSmartTable();
        },
        get: function get() {
          return this._showOnlyBanned;
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.noInfoSign = '';

    CustomersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_data_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]
      }, {
        type: _core_data_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_16__["NotifyService"]
      }];
    };

    CustomersComponent = CustomersComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-customers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/customers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! .//customers.component.scss */
      "./src/app/pages/+customers/customers.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_data_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"], _core_data_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_16__["NotifyService"]])], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/pages/+customers/customers.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/+customers/customers.module.ts ***!
    \******************************************************/

  /*! exports provided: CustomersModule */

  /***/
  function srcAppPagesCustomersCustomersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersModule", function () {
      return CustomersModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _customers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customers.component */
    "./src/app/pages/+customers/customers.component.ts");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../@shared/render-component/render-components.module */
    "./src/app/@shared/render-component/render-components.module.ts");
    /* harmony import */


    var _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../@core/data/geo-location.service */
    "./src/app/@core/data/geo-location.service.ts");
    /* harmony import */


    var _shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../@shared/user/user-mutation */
    "./src/app/@shared/user/user-mutation/index.ts");
    /* harmony import */


    var _shared_render_component_customer_table_customer_table_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../@shared/render-component/customer-table/customer-table.module */
    "./src/app/@shared/render-component/customer-table/customer-table.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/@core/services/notify/notify.service */
    "./src/app/@core/services/notify/notify.service.ts");
    /* harmony import */


    var _app_shared_user_ban_confirm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/@shared/user/ban-confirm */
    "./src/app/@shared/user/ban-confirm/index.ts");

    var routes = [{
      path: 'list',
      component: _customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"]
    }, {
      path: 'invites',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | invites-invites-module */
        [__webpack_require__.e("default~app-pages-fakeData-fakeData-module~invites-invites-module"), __webpack_require__.e("invites-invites-module")]).then(__webpack_require__.bind(null,
        /*! ./+invites/invites.module */
        "./src/app/pages/+customers/+invites/invites.module.ts")).then(function (m) {
          return m.InvitesModule;
        });
      }
    }, {
      path: 'list/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | customer-customer-module */
        [__webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-dashboard-dashboard-module~app-pages-warehouses~4afcb34f"), __webpack_require__.e("default~app-pages-products-products-module~app-pages-simulation-simulation-module~app-pages-warehous~00f3e9fb"), __webpack_require__.e("default~app-pages-simulation-simulation-module~app-pages-warehouses-warehouses-module~customer-custo~5b7a2dbc"), __webpack_require__.e("default~app-pages-simulation-simulation-module~app-pages-warehouses-warehouses-module~customer-custo~3ac61467"), __webpack_require__.e("default~app-pages-simulation-simulation-module~customer-customer-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~customer-customer-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-simulation-simulation-module~customer-customer-module"), __webpack_require__.e("default~app-pages-warehouses-warehouses-module~customer-customer-module"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null,
        /*! ./+customer/customer.module */
        "./src/app/pages/+customers/+customer/customer.module.ts")).then(function (m) {
          return m.CustomerModule;
        });
      }
    }];

    var CustomersModule = function CustomersModule() {
      _classCallCheck(this, CustomersModule);
    };

    CustomersModule.routes = routes;
    CustomersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"], _theme__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"].forRoot({
        theme: 'github'
      }), _shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_10__["RenderComponentsModule"], _shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_12__["UserMutationModule"], _shared_render_component_customer_table_customer_table_module__WEBPACK_IMPORTED_MODULE_13__["CustomerTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSpinnerModule"], _app_shared_user_ban_confirm__WEBPACK_IMPORTED_MODULE_16__["BanConfirmModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonModule"]],
      declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_11__["GeoLocationService"], _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_15__["NotifyService"]]
    })], CustomersModule);
    /***/
  }
}]);
//# sourceMappingURL=app-pages-customers-customers-module-es5.js.map