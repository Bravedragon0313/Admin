(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-warehouses-warehouses-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<span>{{ mainTextTr() }}</span\n\t><button aria-label=\"Close\" class=\"close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">×</span>\n\t</button>\n</div>\n\n<div class=\"modal-footer\">\n\t<button nbButton status=\"danger\" (click)=\"cancel()\">\n\t\t{{ cancelButtonTr() }}\n\t</button>\n\t<button nbButton status=\"success\" (click)=\"confirmEvent.emit()\">\n\t\t{{ confirmButtonTr() }}\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<nb-card>\n\t\t\t\t\t<nb-card-header>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.TRACK_ALL_MERCHANTS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-card-header>\n\t\t\t\t\t<nb-card-body>\n\t\t\t\t\t\t<div #gmap class=\"googleMap\"></div>\n\t\t\t\t\t</nb-card-body>\n\t\t\t\t</nb-card>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<nb-card>\n\t\t\t\t\t<nb-card-header>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_MERCHANTS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-card-header>\n\t\t\t\t\t<nb-card-body style=\"overflow: inherit;\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"listOfMerchants\"\n\t\t\t\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_BY_NAME'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"merchantName\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"filterByName($event)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template ng-label-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\theight=\"15\"\n\t\t\t\t\t\t\t\t\t\twidth=\"15\"\n\t\t\t\t\t\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<b>{{ item }}</b>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"listOfCities\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"merchantCity\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_BY_CITY'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\tbindLabel=\"city\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"filterByCity($event)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t\tng-option-tmp\n\t\t\t\t\t\t\t\t\tlet-item=\"item\"\n\t\t\t\t\t\t\t\t\tlet-index=\"index\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\t\t\t\t\twidth=\"40\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t{{ item }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"listOfCountries\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_BY_COUNTRY'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\tbindLabel=\"city\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"merchantCountry\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"filterByCountry($event)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t\tng-option-tmp\n\t\t\t\t\t\t\t\t\tlet-item=\"item\"\n\t\t\t\t\t\t\t\t\tlet-index=\"index\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\t\t\t\t\twidth=\"40\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t{{ item }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<nb-card-footer>\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<div class=\"warehouse\" *ngIf=\"selectedStore\">\n\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t<b>{{ selectedStore.name }}</b>\n\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tPhone:\n\t\t\t\t\t\t\t\t\t\t\t{{ selectedStore.contactPhone }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tEmail:\n\t\t\t\t\t\t\t\t\t\t\t{{ selectedStore.contactEmail }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tAddress:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedStore.geoLocation\n\t\t\t\t\t\t\t\t\t\t\t\t\t.streetAddress\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"carrier\" *ngIf=\"selectedCarrier\">\n\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t<b>{{ selectedCarrier.fullName }}</b>\n\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tDelivery Count:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedCarrier.numberOfDeliveries\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tPhone: {{ selectedCarrier.phone }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tAddress:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedCarrier.geoLocation\n\t\t\t\t\t\t\t\t\t\t\t\t\t.streetAddress\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</nb-card-footer>\n\t\t\t\t\t</nb-card-body>\n\t\t\t\t</nb-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/warehouses.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/warehouses.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [nbSpinner]=\"loading\">\n\t<toaster-container></toaster-container>\n\n\t<nb-card-header>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t(click)=\"createWarehouseModel()\"\n\t\t>\n\t\t\t<i class=\"ion-md-add button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'WAREHOUSES_VIEW.CREATE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"danger\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t[disabled]=\"!hasSelectedWarehouses\"\n\t\t\t(click)=\"deleteSelectedRows()\"\n\t\t>\n\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'WAREHOUSES_VIEW.DELETE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"warning\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\trouterLink=\"track\"\n\t\t>\n\t\t\t<i class=\"ion-md-map button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'WAREHOUSES_VIEW.SHOW_ON_MAP' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t</nb-card-header>\n\n\t<nb-card-body>\n\t\t<ng2-smart-table\n\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t(userRowSelect)=\"selectWarehouseTmp($event)\"\n\t\t>\n\t\t</ng2-smart-table>\n\t</nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/rxjs-compat/_esm2015/add/observable/of.js":
/*!****************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/rxjs-compat/_esm2015/add/observable/of.js ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = rxjs__WEBPACK_IMPORTED_MODULE_0__["of"];
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfimationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfimationModalComponent", function() { return ConfimationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let ConfimationModalComponent = class ConfimationModalComponent {
    constructor(activeModal, translateService) {
        this.activeModal = activeModal;
        this.translateService = translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.prefix = 'CONFIRM_MODAL.';
        this.confirmButton = 'YES';
        this.cancelButton = 'NO';
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.mainText) {
            this.mainText = 'ARE_YOU_SURE';
        }
    }
    ngOnInit() { }
    mainTextTr() {
        const forTranslate = this.prefix + this.mainText;
        return this._translate(forTranslate);
    }
    confirmButtonTr() {
        const forTranslate = this.prefix + this.confirmButton;
        return this._translate(forTranslate);
    }
    cancelButtonTr() {
        const forTranslate = this.prefix + this.cancelButton;
        return this._translate(forTranslate);
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    _translate(key) {
        let translationResult = '';
        this.translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
ConfimationModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ConfimationModalComponent.prototype, "confirmEvent", void 0);
ConfimationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmation-modal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmation-modal.component.scss */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], ConfimationModalComponent);



/***/ }),

/***/ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@shared/confirmation-modal/confirmation-modal.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmationModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalModule", function() { return ConfirmationModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-modal.component */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");








const COMPONENTS = [_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfimationModalComponent"]];
let ConfirmationModalModule = class ConfirmationModalModule {
};
ConfirmationModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], ConfirmationModalModule);



/***/ }),

/***/ "./src/app/@theme/index.ts":
/*!*********************************!*\
  !*** ./src/app/@theme/index.ts ***!
  \*********************************/
/*! exports provided: HttpLoaderFactory, ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]; });





/***/ }),

/***/ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".googleMap {\n  height: 700px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy8rd2FyZWhvdXNlcy8rd2FyZWhvdXNlLXRyYWNrL3dhcmVob3VzZS10cmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvK3dhcmVob3VzZS10cmFjay93YXJlaG91c2UtdHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0FDQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rd2FyZWhvdXNlcy8rd2FyZWhvdXNlLXRyYWNrL3dhcmVob3VzZS10cmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb29nbGVNYXAge1xuXHRoZWlnaHQ6IDcwMHB4O1xufVxuIiwiLmdvb2dsZU1hcCB7XG4gIGhlaWdodDogNzAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WarehouseTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTrackComponent", function() { return WarehouseTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@core/data/warehouses.service */ "./src/app/@core/data/warehouses.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");





let WarehouseTrackComponent = class WarehouseTrackComponent {
    constructor(warehouseService) {
        this.warehouseService = warehouseService;
        this.merchantMarkers = [];
        this.merchants = [];
        this.listOfCities = [];
        this.listOfCountries = [];
    }
    ngOnInit() {
        this.showMap();
        const warehouseService = this.warehouseService
            .getStoreLivePosition()
            .subscribe((store) => {
            this.merchants = store;
            if (this.merchantMarkers.length === 0) {
                this.listOfCities = Array.from(new Set(store.map((mer) => mer.geoLocation.city))).sort();
                this.listOfCountries = Array.from(new Set(store.map((mer) => Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["getCountryName"])(mer.geoLocation.countryId)))).sort();
                this.listOfMerchants = this.setSort(store.map((mer) => mer.name));
                this.populateMarkers(store, this.merchantMarkers);
            }
            else if (store.length === this.merchantMarkers.length) {
                this.updateMarkers(store);
            }
            else {
                this.updateMarkers(store);
            }
        });
    }
    setSort(arr) {
        return Array.from(new Set(arr)).sort();
    }
    showMap() {
        const lat = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LATITUDE;
        const lng = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LONGITUDE;
        const mapProp = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
    filterByName(event) {
        if (event) {
            this.merchantName = event;
            this.deleteMarkerStorage();
            const filteredMerchants = this.merchants.filter((mer) => mer.name === this.merchantName);
            this.populateMarkers(filteredMerchants, this.merchantMarkers);
        }
        else {
            this.deleteMarkerStorage();
            this.populateMarkers(this.merchants, this.merchantMarkers);
        }
    }
    filterByCity(event) {
        if (event) {
            this.merchantCity = event;
            this.merchantName = undefined;
            this.deleteMarkerStorage();
            const filteredMerchants = this.merchants.filter((mer) => mer.geoLocation.city === this.merchantCity);
            this.populateMarkers(filteredMerchants, this.merchantMarkers);
            this.listOfMerchants = this.setSort(filteredMerchants.map((mer) => mer.name));
        }
        else {
            this.deleteMarkerStorage();
            this.populateMarkers(this.merchants, this.merchantMarkers);
        }
    }
    filterByCountry(event) {
        if (event) {
            this.merchantCountry = event;
            this.merchantCity = undefined;
            this.merchantName = undefined;
            this.deleteMarkerStorage();
            const filteredMerchants = this.merchants.filter((mer) => Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["getCountryName"])(mer.geoLocation.countryId) ===
                this.merchantCountry);
            this.listOfCities = this.setSort(filteredMerchants.map((mer) => mer.geoLocation.city));
            this.listOfMerchants = this.setSort(filteredMerchants.map((mer) => mer.name));
            this.populateMarkers(filteredMerchants, this.merchantMarkers);
        }
        else {
            this.deleteMarkerStorage();
            this.populateMarkers(this.merchants, this.merchantMarkers);
        }
    }
    populateMarkers(merchantArray, markerStorage) {
        const latlngbounds = new google.maps.LatLngBounds();
        merchantArray.forEach((mer) => {
            const coords = new google.maps.LatLng(mer.geoLocation.loc.coordinates[1], mer.geoLocation.loc.coordinates[0]);
            const storeIcon = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MAP_MERCHANT_ICON_LINK;
            const marker = this.addMarker(coords, this.map, storeIcon);
            markerStorage.push({ marker, id: mer.id });
            latlngbounds.extend(coords);
        });
        this.map.fitBounds(latlngbounds);
    }
    updateMarkers(merchantArray) {
        merchantArray.forEach((mer, index) => {
            const newCoords = new google.maps.LatLng(mer.geoLocation.loc.coordinates[1], mer.geoLocation.loc.coordinates[0]);
            let markerIndex;
            const marker = this.merchantMarkers.find((markerItem, i) => {
                if (markerItem.id === mer.id) {
                    markerIndex = i;
                    return true;
                }
                else {
                    return false;
                }
            });
            if (marker) {
                if (!newCoords.equals(marker.marker.getPosition())) {
                    this.merchantMarkers[markerIndex].marker.setPosition(newCoords);
                }
            }
        });
    }
    deleteMarkerStorage() {
        this.merchantMarkers.forEach((mar) => {
            mar.marker.setMap(null);
        });
        this.merchantMarkers = [];
    }
    addMarker(position, map, icon) {
        return new google.maps.Marker({
            position,
            map,
            icon,
        });
    }
};
WarehouseTrackComponent.ctorParameters = () => [
    { type: _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_2__["WarehousesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseTrackComponent.prototype, "gmapElement", void 0);
WarehouseTrackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-track.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-track.component.scss */ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_2__["WarehousesService"]])
], WarehouseTrackComponent);



/***/ }),

/***/ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/+warehouses/+warehouse-track/warehouse-track.module.ts ***!
  \******************************************************************************/
/*! exports provided: WarehouseTrackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTrackModule", function() { return WarehouseTrackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _warehouse_track_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./warehouse-track.component */ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts");











let WarehouseTrackModule = class WarehouseTrackModule {
};
WarehouseTrackModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular2_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizardModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _app_theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
        ],
        entryComponents: [_warehouse_track_component__WEBPACK_IMPORTED_MODULE_10__["WarehouseTrackComponent"]],
        declarations: [_warehouse_track_component__WEBPACK_IMPORTED_MODULE_10__["WarehouseTrackComponent"]],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]],
    })
], WarehouseTrackModule);



/***/ }),

/***/ "./src/app/pages/+warehouses/warehouses-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/+warehouses/warehouses-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: WarehousesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesRoutingModule", function() { return WarehousesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _warehouses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouses.component */ "./src/app/pages/+warehouses/warehouses.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _warehouse_track_warehouse_track_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+warehouse-track/warehouse-track.component */ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts");





const routes = [
    {
        path: '',
        component: _warehouses_component__WEBPACK_IMPORTED_MODULE_2__["WarehousesComponent"],
    },
    {
        path: 'track',
        component: _warehouse_track_warehouse_track_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseTrackComponent"],
    },
    {
        path: ':id',
        loadChildren: () => Promise.all(/*! import() | warehouse-warehouse-module */[__webpack_require__.e("default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~app-pages-simulation-simulation-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-simulation-simulation-module~customer-customer-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~customer-customer-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-customers-customers-module~app-pages-simulation-simulation-module~warehouse-wareho~f5ccf070"), __webpack_require__.e("default~app-pages-orders-orders-module~warehouse-warehouse-module"), __webpack_require__.e("default~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("common"), __webpack_require__.e("warehouse-warehouse-module")]).then(__webpack_require__.bind(null, /*! ./+warehouse/warehouse.module */ "./src/app/pages/+warehouses/+warehouse/warehouse.module.ts")).then((m) => m.WarehouseModule),
    },
];
let WarehousesRoutingModule = class WarehousesRoutingModule {
};
WarehousesRoutingModule.routes = routes;
WarehousesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], WarehousesRoutingModule);



/***/ }),

/***/ "./src/app/pages/+warehouses/warehouses.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/+warehouses/warehouses.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header {\n  border-bottom: 0;\n}\n\nnb-card-body {\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n:host ::ng-deep ng2-smart-table tr th {\n  padding: 18px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr td {\n  padding: 17px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) input {\n  margin-left: 1px !important;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table td.ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-filters th {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table tr td:first-of-type,\n:host ::ng-deep ng2-smart-table th:first-of-type {\n  border-left: none;\n}\n\n:host ::ng-deep ng2-smart-table tr td:last-of-type,\n:host ::ng-deep ng2-smart-table th:last-of-type {\n  border-right: none;\n}\n\n:host ::ng-deep ng2-smart-table input[type='checkbox'] {\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-name {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-email {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-phone {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-city {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-address {\n  width: 32%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-image {\n  width: 74px;\n}\n\n.ng2-smart-th.qty {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy8rd2FyZWhvdXNlcy93YXJlaG91c2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rd2FyZWhvdXNlcy93YXJlaG91c2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0FDQ2pCOztBREVBO0VBQ0MsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUNDbkM7O0FERUE7RUFHRyx3QkFBd0I7QUNEM0I7O0FERkE7RUFNRyx3QkFBd0I7QUNBM0I7O0FETkE7RUFXRSxrQkFBa0I7RUFDbEIsZUFBZTtBQ0RqQjs7QURYQTtFQWVHLDJCQUEyQjtFQUMzQixlQUFlO0FDQWxCOztBRGhCQTtFQXFCRSxrQkFBa0I7RUFDbEIsZUFBZTtBQ0RqQjs7QURyQkE7RUEwQkUsa0JBQWtCO0FDRHBCOztBRHpCQTs7RUFnQ0csaUJBQWlCO0FDRnBCOztBRDlCQTs7RUFtQ0csa0JBQWtCO0FDQXJCOztBRG5DQTtFQXdDRSxlQUFlO0FDRGpCOztBRHZDQTtFQTRDRSxVQUFVO0FDRFo7O0FEM0NBO0VBK0NFLFVBQVU7QUNBWjs7QUQvQ0E7RUFrREUsVUFBVTtBQ0NaOztBRG5EQTtFQXFERSxVQUFVO0FDRVo7O0FEdkRBO0VBd0RFLFVBQVU7QUNHWjs7QURPQTtFQUNDLFdBQVc7QUNKWjs7QURPQTtFQUNDLGtCQUFrQjtBQ0puQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLyt3YXJlaG91c2VzL3dhcmVob3VzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlciB7XG5cdGJvcmRlci1ib3R0b206IDA7XG59XG5cbm5iLWNhcmQtYm9keSB7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB7XG5cdHRyIHtcblx0XHR0aCB7XG5cdFx0XHRwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdHRkIHtcblx0XHRcdHBhZGRpbmc6IDE3cHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblxuXHR0ci5uZzItc21hcnQtdGl0bGVzID4gdGg6bnRoLWNoaWxkKDEpIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdFx0aW5wdXQge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0fVxuXG5cdHRkLm5nMi1zbWFydC1hY3Rpb25zLm5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cblx0dHIubmcyLXNtYXJ0LWZpbHRlcnMgdGgge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHRyIHRkLFxuXHR0aCB7XG5cdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdGJvcmRlci1sZWZ0OiBub25lO1xuXHRcdH1cblx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRib3JkZXItcmlnaHQ6IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0aW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cblx0LndhcmVob3VzZS1uYW1lIHtcblx0XHR3aWR0aDogMTclO1xuXHR9XG5cdC53YXJlaG91c2UtZW1haWwge1xuXHRcdHdpZHRoOiAxNyU7XG5cdH1cblx0LndhcmVob3VzZS1waG9uZSB7XG5cdFx0d2lkdGg6IDE3JTtcblx0fVxuXHQud2FyZWhvdXNlLWNpdHkge1xuXHRcdHdpZHRoOiAxNyU7XG5cdH1cblx0LndhcmVob3VzZS1hZGRyZXNzIHtcblx0XHR3aWR0aDogMzIlO1xuXHR9XG5cdC8vIC53YXJlaG91c2UtcXR5IHtcblx0Ly8gXHR3aWR0aDogNSU7XG5cdC8vIH1cblx0Ly8gLndhcmVob3VzZS1hY3Rpb25zIHtcblx0Ly8gXHR3aWR0aDogNSU7XG5cdC8vIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAud2FyZWhvdXNlLWltYWdlIHtcblx0d2lkdGg6IDc0cHg7XG59XG5cbi5uZzItc21hcnQtdGgucXR5IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwibmItY2FyZC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG5uYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGgge1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGQge1xuICBwYWRkaW5nOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoOm50aC1jaGlsZCgxKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC10aXRsZXMgPiB0aDpudGgtY2hpbGQoMSkgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ZC5uZzItc21hcnQtYWN0aW9ucy5uZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC1maWx0ZXJzIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkOmZpcnN0LW9mLXR5cGUsXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRoOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZDpsYXN0LW9mLXR5cGUsXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRoOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIC53YXJlaG91c2UtbmFtZSB7XG4gIHdpZHRoOiAxNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgLndhcmVob3VzZS1lbWFpbCB7XG4gIHdpZHRoOiAxNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgLndhcmVob3VzZS1waG9uZSB7XG4gIHdpZHRoOiAxNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgLndhcmVob3VzZS1jaXR5IHtcbiAgd2lkdGg6IDE3JTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAud2FyZWhvdXNlLWFkZHJlc3Mge1xuICB3aWR0aDogMzIlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIC53YXJlaG91c2UtaW1hZ2Uge1xuICB3aWR0aDogNzRweDtcbn1cblxuLm5nMi1zbWFydC10aC5xdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+warehouses/warehouses.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/+warehouses/warehouses.component.ts ***!
  \***********************************************************/
/*! exports provided: WarehousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesComponent", function() { return WarehousesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/data/warehouses.service */ "./src/app/@core/data/warehouses.service.ts");
/* harmony import */ var _core_data_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/data/orders.service */ "./src/app/@core/data/orders.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@shared/warehouse/warehouse-mutation */ "./src/app/@shared/warehouse/warehouse-mutation/index.ts");
/* harmony import */ var _shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@shared/render-component/name-redirect/name-redirect.component */ "./src/app/@shared/render-component/name-redirect/name-redirect.component.ts");
/* harmony import */ var _shared_render_component_warehouse_table_warehouse_actions_warehouse_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.ts");
/* harmony import */ var _shared_render_component_warehouse_table_warehouse_image_warehouse_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.ts");
/* harmony import */ var _shared_render_component_warehouse_table_warehouse_orders_number_warehouse_orders_number_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.ts");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../@shared/confirmation-modal/confirmation-modal.component */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _shared_render_component_warehouse_table_warehouse_email_warehouse_email_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.ts");
/* harmony import */ var _shared_render_component_warehouse_table_warehouse_phone_warehouse_phone_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.ts");
var WarehousesComponent_1;




















const perPage = 5;
let WarehousesComponent = WarehousesComponent_1 = class WarehousesComponent {
    constructor(_translateService, _router, _modalService, _warehousesService, _ordersService, _toasterService, _sanitizer, modalService) {
        this._translateService = _translateService;
        this._router = _router;
        this._modalService = _modalService;
        this._warehousesService = _warehousesService;
        this._ordersService = _ordersService;
        this._toasterService = _toasterService;
        this._sanitizer = _sanitizer;
        this.modalService = modalService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
        this._selectedWarehouses = [];
        this._loadSettingsSmartTable();
    }
    get hasSelectedWarehouses() {
        return this._selectedWarehouses.length > 0;
    }
    ngAfterViewInit() {
        this._addCustomHTMLElements();
        this._applyTranslationOnSmartTable();
        this.smartTableChange();
        this._loadDataSmartTable();
    }
    createWarehouseModel() {
        this._modalService.open(_shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__["WarehouseMutationComponent"], {
            size: 'lg',
            container: 'nb-layout',
            backdrop: 'static',
        });
    }
    selectWarehouseTmp(ev) {
        this._selectedWarehouses = ev.selected;
    }
    deleteSelectedRows() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const activeModal = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__["ConfimationModalComponent"], {
                size: 'sm',
                container: 'nb-layout',
                backdrop: 'static',
            });
            const modalComponent = activeModal.componentInstance;
            yield modalComponent.confirmEvent
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(modalComponent.ngDestroy$))
                .subscribe((dataEvent) => {
                const idsForDelete = this._selectedWarehouses.map((w) => w.id);
                try {
                    this.loading = true;
                    this._warehousesService
                        .removeByIds(idsForDelete)
                        .subscribe(() => {
                        this.loading = false;
                        this._toasterService.pop(`success`, `Selected warehouse are deleted!`);
                        this._selectedWarehouses = [];
                    });
                }
                catch (error) {
                    this.loading = false;
                    this._toasterService.pop('error', `Error: "${error.message}"`);
                }
                modalComponent.cancel();
            });
        });
    }
    _addCustomHTMLElements() {
        document.querySelector('tr.ng2-smart-filters > th:nth-child(1)').innerHTML = '<i class="fa fa-search" style="font-size: 1.3em"/>';
    }
    _selectWarehouse(warehouseId) {
        this._router.navigate(['/stores/' + warehouseId]);
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$))
            .subscribe(() => {
            this._loadSettingsSmartTable();
        });
    }
    _loadDataSmartTable(page = 1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.$merchants) {
                yield this.$merchants.unsubscribe();
            }
            let warehouses = [];
            this.$merchants = this._warehousesService
                .getStores({
                skip: perPage * (page - 1),
                limit: perPage,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$))
                .subscribe((w) => {
                warehouses = w;
                loadData();
            });
            const loadData = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const merchantsOrders = yield this._ordersService.getMerchantsOrdersCountInfo(warehouses.map((w) => w.id));
                const warehousesVM = warehouses.map((warehouse) => {
                    const merchantOrders = merchantsOrders.find((res) => res['id'] === warehouse.id);
                    return {
                        id: warehouse.id,
                        image: warehouse.logo || WarehousesComponent_1.noInfoSign,
                        name: warehouse.name || WarehousesComponent_1.noInfoSign,
                        email: warehouse.contactEmail ||
                            WarehousesComponent_1.noInfoSign,
                        phone: warehouse.contactPhone ||
                            WarehousesComponent_1.noInfoSign,
                        city: warehouse.geoLocation.city ||
                            WarehousesComponent_1.noInfoSign,
                        address: `st. ${warehouse.geoLocation.streetAddress ||
                            WarehousesComponent_1.noInfoSign}, hse. № ${warehouse.geoLocation.house ||
                            WarehousesComponent_1.noInfoSign}`,
                        ordersQty: merchantOrders ? merchantOrders.ordersCount : 0,
                        warehouseInfo: warehouse,
                    };
                });
                yield this.loadDataCount();
                const merchantsData = new Array(this.dataCount);
                merchantsData.splice(perPage * (page - 1), perPage, ...warehousesVM);
                yield this.sourceSmartTable.load(merchantsData);
            });
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'WAREHOUSES_VIEW.SMART_TABLE_COLUMNS.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('EMAIL'), getTranslate('PHONE'), getTranslate('CITY'), getTranslate('ADDRESS'), getTranslate('ORDERS'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$))
            .subscribe(([id, image, name, email, phone, city, address, orders]) => {
            this.settingsSmartTable = {
                actions: false,
                selectMode: 'multi',
                columns: {
                    images: {
                        title: image,
                        class: 'warehouse-image',
                        type: 'custom',
                        renderComponent: _shared_render_component_warehouse_table_warehouse_image_warehouse_image_component__WEBPACK_IMPORTED_MODULE_15__["WarehouseImageComponent"],
                        onComponentInitFunction: (instance) => {
                            instance.redirectPage = 'stores';
                        },
                        filter: false,
                    },
                    name: {
                        title: name,
                        type: 'custom',
                        class: 'warehouse-name',
                        renderComponent: _shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_13__["RedirectNameComponent"],
                        onComponentInitFunction: (instance) => {
                            instance.redirectPage = 'stores';
                        },
                    },
                    email: {
                        title: email,
                        type: 'custom',
                        renderComponent: _shared_render_component_warehouse_table_warehouse_email_warehouse_email_component__WEBPACK_IMPORTED_MODULE_18__["WarehouseEmailComponent"],
                        class: 'warehouse-email',
                    },
                    phone: {
                        title: phone,
                        type: 'custom',
                        renderComponent: _shared_render_component_warehouse_table_warehouse_phone_warehouse_phone_component__WEBPACK_IMPORTED_MODULE_19__["WarehousePhoneComponent"],
                        class: 'warehouse-phone',
                    },
                    city: {
                        title: city,
                        class: 'warehouse-city',
                    },
                    address: {
                        title: address,
                        class: 'warehouse-address',
                    },
                    ordersQty: {
                        title: orders,
                        type: 'custom',
                        filter: false,
                        class: 'warehouse-qty',
                        renderComponent: _shared_render_component_warehouse_table_warehouse_orders_number_warehouse_orders_number_component__WEBPACK_IMPORTED_MODULE_16__["WarehouseOrdersNumberComponent"],
                        onComponentInitFunction: (instance) => {
                            instance.redirectPage = 'stores';
                        },
                    },
                    actions: {
                        title: 'Actions',
                        filter: false,
                        type: 'custom',
                        class: 'warehouse-actions',
                        renderComponent: _shared_render_component_warehouse_table_warehouse_actions_warehouse_actions_component__WEBPACK_IMPORTED_MODULE_14__["WarehouseActionsComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage,
                },
            };
        });
    }
    smartTableChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sourceSmartTable
                .onChanged()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$))
                .subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.action === 'page') {
                    const page = event.paging.page;
                    this._loadDataSmartTable(page);
                }
            }));
        });
    }
    loadDataCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataCount = yield this._warehousesService.getCountOfMerchants();
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
WarehousesComponent.noInfoSign = '';
WarehousesComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_7__["WarehousesService"] },
    { type: _core_data_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
WarehousesComponent = WarehousesComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouses.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/warehouses.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouses.component.scss */ "./src/app/pages/+warehouses/warehouses.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_7__["WarehousesService"],
        _core_data_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], WarehousesComponent);



/***/ }),

/***/ "./src/app/pages/+warehouses/warehouses.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/+warehouses/warehouses.module.ts ***!
  \********************************************************/
/*! exports provided: WarehousesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesModule", function() { return WarehousesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _warehouses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./warehouses.component */ "./src/app/pages/+warehouses/warehouses.component.ts");
/* harmony import */ var _warehouses_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warehouses-routing.module */ "./src/app/pages/+warehouses/warehouses-routing.module.ts");
/* harmony import */ var _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@shared/warehouse/warehouse-mutation */ "./src/app/@shared/warehouse/warehouse-mutation/index.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@shared/render-component/render-components.module */ "./src/app/@shared/render-component/render-components.module.ts");
/* harmony import */ var _shared_render_component_warehouse_table_warehouse_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@shared/render-component/warehouse-table/warehouse-table.module */ "./src/app/@shared/render-component/warehouse-table/warehouse-table.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/@shared/confirmation-modal/confirmation-modal.module */ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");
/* harmony import */ var _warehouse_track_warehouse_track_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./+warehouse-track/warehouse-track.module */ "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.module.ts");



















let WarehousesModule = class WarehousesModule {
};
WarehousesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__["WarehouseMutationModule"],
            _warehouses_routing_module__WEBPACK_IMPORTED_MODULE_11__["WarehousesRoutingModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"],
            _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_17__["ConfirmationModalModule"],
            _warehouse_track_warehouse_track_module__WEBPACK_IMPORTED_MODULE_18__["WarehouseTrackModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                },
            }),
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_13__["HighlightModule"].forRoot({ theme: 'github' }),
            _shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_14__["RenderComponentsModule"],
            _shared_render_component_warehouse_table_warehouse_table_module__WEBPACK_IMPORTED_MODULE_15__["WarehouseTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbButtonModule"],
        ],
        declarations: [_warehouses_component__WEBPACK_IMPORTED_MODULE_10__["WarehousesComponent"]],
        entryComponents: [],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
    })
], WarehousesModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=app-pages-warehouses-warehouses-module-es2015.js.map