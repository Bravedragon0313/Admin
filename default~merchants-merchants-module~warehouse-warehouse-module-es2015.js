(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~merchants-merchants-module~warehouse-warehouse-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [ngClass]=\"boxShadow === 'none' ? 'no-box-shadow' : ''\">\n\t<ng2-smart-table\n\t\t[settings]=\"settingsSmartTable\"\n\t\t[source]=\"sourceSmartTable\"\n\t>\n\t</ng2-smart-table>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n\t<div class=\"container pt-2 row add-products-modal\">\n\t\t<div class=\"col-6\">\n\t\t\t<button\n\t\t\t\t[ngClass]=\"choiceType == 1 ? 'selected' : ''\"\n\t\t\t\tclass=\"option\"\n\t\t\t\t(click)=\"changeChoice('existing')\"\n\t\t\t\tclass=\"btn btn-outline-secondary p-5\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.NEW_PRODUCT.SELECT_FROM_PRODUCTS_CATALOG'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<button\n\t\t\t\t[ngClass]=\"choiceType == 2 ? 'selected' : ''\"\n\t\t\t\tclass=\"option\"\n\t\t\t\t(click)=\"changeChoice('new')\"\n\t\t\t\tclass=\"btn btn-outline-secondary p-5\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.NEW_PRODUCT.CREATE_NEW_PRODUCT' | translate\n\t\t\t\t}}\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-smart-table\n\t[settings]=\"settingsSmartTable\"\n\t[source]=\"sourceSmartTable\"\n\t(userRowSelect)=\"selectProductTmp($event)\"\n\t(edit)=\"onEdit.emit($event)\"\n\t(delete)=\"onDelete.emit($event)\"\n>\n</ng2-smart-table>\n");

/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AddWarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseProductsComponent", function() { return AddWarehouseProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _render_component_price_countInput_price_countInput_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../render-component/price-countInput/price-countInput.component */ "./src/app/@shared/render-component/price-countInput/price-countInput.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var _app_shared_render_component_customer_orders_table_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@shared/render-component/customer-orders-table/checkbox/checkbox.component */ "./src/app/@shared/render-component/customer-orders-table/checkbox/checkbox.component.ts");









let AddWarehouseProductsComponent = class AddWarehouseProductsComponent {
    constructor(_translateService, warehouseRouter) {
        this._translateService = _translateService;
        this.warehouseRouter = warehouseRouter;
        this.perPage = 5;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this._loadSettingsSmartTable();
    }
    get allWarehouseProducts() {
        return [...this.warehouseProducts];
    }
    productsIsValid() {
        if (this.warehouseProducts) {
            const notRedy = this.warehouseProducts.filter((p) => !p.count ||
                !p.price ||
                (!p['isTakeaway'] && !p['isDeliveryRequired']))[0];
            return notRedy ? false : true;
        }
    }
    loadDataSmartTable(products, warehouseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.warehouseProducts = products.map((p) => {
                return { product: p.id };
            });
            if (warehouseId) {
                this.warehouse = yield this.warehouseRouter
                    .get(warehouseId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .toPromise();
                if (this.warehouseProducts) {
                    this.warehouseProducts.map((p) => {
                        p['isTakeaway'] = this.warehouse.productsTakeaway;
                        p['isDeliveryRequired'] = this.warehouse.productsDelivery;
                        if (!p['isTakeaway'] && !p['isDeliveryRequired']) {
                            p['isDeliveryRequired'] = true;
                        }
                    });
                }
            }
            const productsVM = products.map((product) => {
                const resObj = {
                    name: product.title,
                    id: product.id,
                    takeProductDelivery: this.warehouse.productsDelivery,
                    takeProductTakeaway: this.warehouse.productsTakeaway,
                };
                if (!resObj.takeProductDelivery && !resObj.takeProductTakeaway) {
                    resObj.takeProductDelivery = true;
                }
                return resObj;
            });
            this.sourceSmartTable.load(productsVM);
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'WAREHOUSE_VIEW.SAVE.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(getTranslate('PRODUCT_NAME'), getTranslate('PRICE'), getTranslate('COUNT'), getTranslate('DELIVERY'), getTranslate('TAKEAWAY'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
            .subscribe(([name, price, count, delivery, takeaway]) => {
            this.settingsSmartTable = {
                actions: false,
                hideSubHeader: true,
                columns: {
                    name: {
                        title: name,
                        filter: false,
                    },
                    price: {
                        title: price,
                        type: 'custom',
                        filter: false,
                        renderComponent: _render_component_price_countInput_price_countInput_component__WEBPACK_IMPORTED_MODULE_5__["PriceCountInputComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.placeholder = price;
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((v) => {
                                warehouseProd['initialPrice'] = v;
                                warehouseProd['price'] = v;
                            });
                        }),
                    },
                    count: {
                        title: count,
                        type: 'custom',
                        filter: false,
                        renderComponent: _render_component_price_countInput_price_countInput_component__WEBPACK_IMPORTED_MODULE_5__["PriceCountInputComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.placeholder = count;
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            warehouseProd['count'] = 1;
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((v) => {
                                warehouseProd['count'] = v;
                            });
                        }),
                    },
                    delivery: {
                        title: delivery,
                        type: 'custom',
                        filter: false,
                        renderComponent: _app_shared_render_component_customer_orders_table_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.type = 'delivery';
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((res) => {
                                if (res.type === 'delivery') {
                                    warehouseProd['isDeliveryRequired'] = res.checked;
                                }
                            });
                        }),
                    },
                    takeaway: {
                        title: takeaway,
                        type: 'custom',
                        filter: false,
                        renderComponent: _app_shared_render_component_customer_orders_table_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.type = 'takeaway';
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((res) => {
                                if (res.type === 'takeaway') {
                                    warehouseProd['isTakeaway'] =
                                        res.checked;
                                }
                            });
                        }),
                    },
                },
                pager: {
                    display: true,
                    perPage: this.perPage,
                },
            };
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
AddWarehouseProductsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_7__["WarehouseRouter"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AddWarehouseProductsComponent.prototype, "boxShadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddWarehouseProductsComponent.prototype, "perPage", void 0);
AddWarehouseProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-add-warehouse-products-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-warehouse-products-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_7__["WarehouseRouter"]])
], AddWarehouseProductsComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts ***!
  \***************************************************************************************/
/*! exports provided: AddWarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-warehouse-products-table.component */ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseProductsComponent", function() { return _add_warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__["AddWarehouseProductsComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/index.ts ***!
  \**********************************************************/
/*! exports provided: WarehouseProductFormsModule, WarehouseAddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_product_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-product-forms.module */ "./src/app/@shared/warehouse-product/forms/warehouse-product-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductFormsModule", function() { return _warehouse_product_forms_module__WEBPACK_IMPORTED_MODULE_1__["WarehouseProductFormsModule"]; });

/* harmony import */ var _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-add-choice */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseAddChoiceComponent", function() { return _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_2__["WarehouseAddChoiceComponent"]; });






/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts ***!
  \*******************************************************************************/
/*! exports provided: WarehouseAddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_add_choice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-add-choice.component */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseAddChoiceComponent", function() { return _warehouse_add_choice_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseAddChoiceComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".option {\n  width: 200px;\n  height: 150px;\n  border: 2px solid #dadfe6;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n  color: #2a2a2a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n  font-family: Exo;\n  -webkit-transition: none;\n  transition: none;\n  cursor: default;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  border-radius: 0.375rem;\n  padding-top: 63px;\n}\n\n.option:hover {\n  background: #dadfe6;\n}\n\n.selected {\n  background: #dadfe6;\n}\n\n.add-products-modal {\n  font-size: 0.95rem;\n}\n\n.add-products-modal button {\n  text-transform: uppercase;\n  margin: 10%;\n  margin-top: 11%;\n  margin: auto !important !important;\n  width: 244px;\n  white-space: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS1wcm9kdWN0L2Zvcm1zL3dhcmVob3VzZS1hZGQtY2hvaWNlL3dhcmVob3VzZS1hZGQtY2hvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS1wcm9kdWN0L2Zvcm1zL3dhcmVob3VzZS1hZGQtY2hvaWNlL3dhcmVob3VzZS1hZGQtY2hvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FDQ2xCOztBREVBO0VBQ0MsbUJBQW1CO0FDQ3BCOztBREVBO0VBQ0MsbUJBQW1CO0FDQ3BCOztBREVBO0VBQ0Msa0JBQWtCO0FDQ25COztBREZBO0VBSUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixtQkFBbUI7QUNFckIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS1wcm9kdWN0L2Zvcm1zL3dhcmVob3VzZS1hZGQtY2hvaWNlL3dhcmVob3VzZS1hZGQtY2hvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbiB7XG5cdHdpZHRoOiAyMDBweDtcblx0aGVpZ2h0OiAxNTBweDtcblx0Ym9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogIzJhMmEyYTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LWZhbWlseTogRXhvO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG5cdHRyYW5zaXRpb246IG5vbmU7XG5cdGN1cnNvcjogZGVmYXVsdDtcblx0cGFkZGluZzogMC43NXJlbSAxLjVyZW07XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0bGluZS1oZWlnaHQ6IDEuMjU7XG5cdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuXHRwYWRkaW5nLXRvcDogNjNweDtcbn1cblxuLm9wdGlvbjpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICNkYWRmZTY7XG59XG5cbi5zZWxlY3RlZCB7XG5cdGJhY2tncm91bmQ6ICNkYWRmZTY7XG59XG5cbi5hZGQtcHJvZHVjdHMtbW9kYWwge1xuXHRmb250LXNpemU6IDAuOTVyZW07XG5cblx0YnV0dG9uIHtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdG1hcmdpbjogMTAlO1xuXHRcdG1hcmdpbi10b3A6IDExJTtcblx0XHRtYXJnaW46IGF1dG8gIWltcG9ydGFudCAhaW1wb3J0YW50O1xuXHRcdHdpZHRoOiAyNDRweDtcblx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXHR9XG59XG4iLCIub3B0aW9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGFkZmU2O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBFeG87XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmctdG9wOiA2M3B4O1xufVxuXG4ub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RhZGZlNjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2RhZGZlNjtcbn1cblxuLmFkZC1wcm9kdWN0cy1tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cblxuLmFkZC1wcm9kdWN0cy1tb2RhbCBidXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwJTtcbiAgbWFyZ2luLXRvcDogMTElO1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjQ0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WarehouseAddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseAddChoiceComponent", function() { return WarehouseAddChoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarehouseAddChoiceComponent = class WarehouseAddChoiceComponent {
    constructor() {
        this.choice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    changeChoice(choiceType) {
        this.choiceType = choiceType === 'new' ? 2 : 1;
        this.choice.emit(choiceType);
    }
};
WarehouseAddChoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-add-choice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-add-choice.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-add-choice.component.scss */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WarehouseAddChoiceComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-product-forms.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-product-forms.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WarehouseProductFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductFormsModule", function() { return WarehouseProductFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse-add-choice */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts");
/* harmony import */ var _add_warehouse_products_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-warehouse-products-table */ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _render_component_render_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../render-component/render-components.module */ "./src/app/@shared/render-component/render-components.module.ts");
/* harmony import */ var _warehouse_products_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warehouse-products-table */ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts");
/* harmony import */ var _app_shared_render_component_store_products_table_store_products_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-products-table.module */ "./src/app/@shared/render-component/store-products-table/store-products-table.module.ts");
/* harmony import */ var _app_shared_render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/@shared/render-component/product-categories/product-categories.module */ "./src/app/@shared/render-component/product-categories/product-categories.module.ts");












const COMPONENTS = [
    _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_5__["WarehouseAddChoiceComponent"],
    _add_warehouse_products_table__WEBPACK_IMPORTED_MODULE_6__["AddWarehouseProductsComponent"],
    _warehouse_products_table__WEBPACK_IMPORTED_MODULE_9__["WarehouseProductsComponent"],
];
let WarehouseProductFormsModule = class WarehouseProductFormsModule {
};
WarehouseProductFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
            _render_component_render_components_module__WEBPACK_IMPORTED_MODULE_8__["RenderComponentsModule"],
            _app_shared_render_component_store_products_table_store_products_table_module__WEBPACK_IMPORTED_MODULE_10__["StoreProductsTableModule"],
            _app_shared_render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_11__["ProductCategoriesModule"],
        ],
        exports: COMPONENTS,
        declarations: COMPONENTS,
    })
], WarehouseProductFormsModule);



/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts ***!
  \***********************************************************************************/
/*! exports provided: WarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-products-table.component */ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductsComponent", function() { return _warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseProductsComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductsComponent", function() { return WarehouseProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _app_shared_render_component_store_products_table_store_product_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-product-price.component */ "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts");
/* harmony import */ var _app_shared_render_component_store_products_table_store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component */ "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts");
/* harmony import */ var _app_shared_render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@shared/render-component/product-categories/product-categories */ "./src/app/@shared/render-component/product-categories/product-categories.ts");
/* harmony import */ var _app_shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/render-component/product-title-redirect/product-title-redirect.component */ "./src/app/@shared/render-component/product-title-redirect/product-title-redirect.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _app_shared_render_component_store_products_table_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-product-image/store-product-image.component */ "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts");













let WarehouseProductsComponent = class WarehouseProductsComponent {
    constructor(_translateService, _productLocalesService, _productsCategoryService) {
        this._translateService = _translateService;
        this._productLocalesService = _productLocalesService;
        this._productsCategoryService = _productsCategoryService;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.perPage = 5;
        this.selectMode = 'multi';
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.selectedProducts = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.categoriesInfo = [];
    }
    get hasSelectedProducts() {
        return this.selectedProducts.length > 0;
    }
    ngOnInit() {
        this._getCategories();
        this._loadSettingsSmartTable();
        this._applyTranslationOnSmartTable();
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
    loadDataSmartTable(products, storeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const productsVM = products.map((product) => {
                return {
                    id: product.productId,
                    image: this._productLocalesService.getTranslate(product.product['images']),
                    title: this._productLocalesService.getTranslate(product.product['title']),
                    description: this._productLocalesService.getTranslate(product.product['description']),
                    details: this._productLocalesService.getTranslate(product.product['details']),
                    categories: {
                        ids: product.product['categories'],
                        search: this.categoriesInfo &&
                            this.categoriesInfo
                                .filter((c) => product.product['categories'].includes(c.id))
                                .map((c) => this._productLocalesService.getTranslate(c.name))
                                .toString(),
                    },
                    price: product.price,
                    qty: product.count,
                    storeId,
                    product: product.product,
                    allCategories: this.categoriesInfo,
                };
            });
            this.sourceSmartTable.load(productsVM);
        });
    }
    selectProductTmp(ev) {
        this.selectedProducts = ev.selected;
    }
    _getCategories() {
        this._productsCategoryService
            .getCategories()
            .subscribe((categories) => {
            this.categoriesInfo = categories;
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'WAREHOUSE_VIEW.PRODUCTS_TAB.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('TITLE'), getTranslate('DESCRIPTION'), getTranslate('DETAILS'), getTranslate('CATEGORY'), getTranslate('PRICE'), getTranslate('QUANTITY'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.ngDestroy$))
            .subscribe(([id, image, titleTr, description, details, category, price, quantity,]) => {
            this.settingsSmartTable = {
                mode: 'external',
                actions: {
                    add: false,
                    position: 'left',
                },
                edit: {
                    editButtonContent: '<i class="ion-md-create"></i>',
                },
                delete: {
                    deleteButtonContent: '<i class="ion-md-trash"></i>',
                    confirmDelete: true,
                },
                selectMode: this.selectMode,
                columns: {
                    image: {
                        title: image,
                        type: 'custom',
                        class: 'text-center',
                        renderComponent: _app_shared_render_component_store_products_table_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_12__["StoreProductImageComponent"],
                        filter: false,
                    },
                    title: {
                        title: titleTr,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_6__["ProductTitleRedirectComponent"],
                    },
                    description: { title: description },
                    details: { title: details },
                    categories: {
                        title: category,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_5__["ProductCategoriesComponent"],
                        filterFunction(cell, search) {
                            if (cell.search.includes(search)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        },
                    },
                    price: {
                        title: price,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_store_products_table_store_product_price_component__WEBPACK_IMPORTED_MODULE_3__["StoreProductPriceComponent"],
                    },
                    qty: {
                        title: quantity,
                        class: 'text-center',
                        type: 'custom',
                        renderComponent: _app_shared_render_component_store_products_table_store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_4__["StoreProductAmountComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage: this.perPage,
                },
            };
        });
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange.subscribe(() => {
            this._loadSettingsSmartTable();
        });
    }
};
WarehouseProductsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_10__["ProductLocalesService"] },
    { type: _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseProductsComponent.prototype, "onEdit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseProductsComponent.prototype, "onDelete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], WarehouseProductsComponent.prototype, "perPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseProductsComponent.prototype, "selectMode", void 0);
WarehouseProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-products-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-products-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_10__["ProductLocalesService"],
        _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"]])
], WarehouseProductsComponent);



/***/ })

}]);
//# sourceMappingURL=default~merchants-merchants-module~warehouse-warehouse-module-es2015.js.map