(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-simulation-simulation-module~app-pages-warehouses-warehouses-module~customer-custo~3ac61467"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" [formGroup]=\"form\" *ngIf=\"form\">\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.NAME' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.NAME' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"name.errors && (name.dirty || name.touched)\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!name.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.NAME_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [hidden]=\"!name.hasError('minlength')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.NAME_ATLEAST_3_CHARS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [hidden]=\"!name.hasError('maxlength')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.NAME_MORE_THAN_30_CHARS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.PHOTO' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t[name]=\"name?.value\"\n\t\t\t\t\t[fileUrl]=\"logo?.value\"\n\t\t\t\t\t(uploadedImgUrl)=\"logo.setValue($event)\"\n\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t<div *ngIf=\"logo.invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.INVALID_URL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}!\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" *ngIf=\"logo.valid\">\n\t\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<div class=\"row preview-img\" *ngIf=\"showLogoMeta\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc=\"{{ logo.value }}\"\n\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"removeIcon\" (click)=\"deleteImg()\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"ion-md-remove-circle\"\n\t\t\t\t\t\t\tplaceholder=\"Remove image\"\n\t\t\t\t\t\t\ttitle=\"{{ 'PLACEHOLDER.REMOVE_IMAGE' | translate }}\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\" for=\"checkbox\"\n\t\t\t\t>{{ 'WAREHOUSE_VIEW.MUTATION.IS_ACTIVE' | translate }}\n\t\t\t</label>\n\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<div class=\"checkbox\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"checkbox\"\n\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\tformControlName=\"isActive\"\n\t\t\t\t\t/>\n\t\t\t\t\t({{ 'WAREHOUSE_VIEW.MUTATION.RIGHT_NOW' | translate }})\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.USERNAME' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.USERNAME' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\trequired\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tusername.errors && (username.dirty || username.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!username.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.USERNAME_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" *ngIf=\"password\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.PASSWORD' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{ 'PLACEHOLDER.PASSWORD' | translate }}\"\n\t\t\t\t\t[formControl]=\"password\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tpassword.errors && (password.dirty || password.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!password.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.PASSWORD_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CARRIERS' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<div class=\"checkbox\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\tformControlName=\"hasRestrictedCarriers\"\n\t\t\t\t\t/>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.USE_ONLY_SPECIFIC_CARRIERS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"hasRestrictedCarriers.value\">\n\t\t\t\t\t<ss-multiselect-dropdown\n\t\t\t\t\t\t[options]=\"carriersOptions\"\n\t\t\t\t\t\t[settings]=\"{ displayAllSelectedText: true }\"\n\t\t\t\t\t\tformControlName=\"carriersIds\"\n\t\t\t\t\t\tclass=\"carriers-dropdown\"\n\t\t\t\t\t>\n\t\t\t\t\t</ss-multiselect-dropdown>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- TODO add translate -->\n\t\t<div\n\t\t\t*ngIf=\"hasRestrictedCarriers.value && carriersIds?.value.length\"\n\t\t\tclass=\"form-group row\"\n\t\t>\n\t\t\t<label class=\"col-sm-2 control-label\">Delivery</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<nb-radio-group\n\t\t\t\t\t[(value)]=\"delivery\"\n\t\t\t\t\tclass=\"row m-0\"\n\t\t\t\t\tname=\"size\"\n\t\t\t\t>\n\t\t\t\t\t<nb-radio name=\"size\" [value]=\"'all'\">\n\t\t\t\t\t\tUse All Carriers\n\t\t\t\t\t</nb-radio>\n\t\t\t\t\t<nb-radio name=\"size\" [value]=\"'onlyStore'\">\n\t\t\t\t\t\tUse Only Store Carriers\n\t\t\t\t\t</nb-radio>\n\t\t\t\t\t<nb-radio name=\"size\" [value]=\"'preferStore'\">\n\t\t\t\t\t\tPrefer Store Carriers\n\t\t\t\t\t</nb-radio>\n\t\t\t\t</nb-radio-group>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/contact-info/contact-info-form.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/contact-info/contact-info-form.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" [formGroup]=\"form\" *ngIf=\"form\">\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label class=\"control-label\">{{\n\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONTACT_EMAIL' | translate\n\t\t\t\t}}</label>\n\n\t\t\t\t<input\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONTACT_EMAIL' | translate\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"contactEmail\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tcontactEmail.errors &&\n\t\t\t\t\t\t(contactEmail.dirty || contactEmail.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!contactEmail.hasError('email')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.INVALID_EMAIL'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label class=\"control-label\">{{\n\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONTACT_PHONE' | translate\n\t\t\t\t}}</label>\n\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONTACT_PHONE' | translate\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"contactPhone\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tcontactPhone.errors &&\n\t\t\t\t\t\t(contactPhone.dirty || contactPhone.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!contactPhone.hasError('pattern')\">\n\t\t\t\t\t\t<!-- Phone number can start with \"+\" and must contains only only: \"-, ., (space), #\" and digit characters. -->\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.PHONE_CONTAINS_ONLY_DIGIT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- TODO add translate -->\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<nb-checkbox\n\t\t\t\t\t[value]=\"forwardingEmail\"\n\t\t\t\t\t(change)=\"forwardingEmailChange()\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONTACT_INFO_TAB.ORDER_FORWARDING_EMAIL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t\t<input\n\t\t\t\t\t*ngIf=\"forwardingEmail\"\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ORDERS_EMAIL' | translate\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"ordersEmail\"\n\t\t\t\t/>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t(ordersEmail.errors ||\n\t\t\t\t\t\t\tordersEmail.errors ||\n\t\t\t\t\t\t\t(forwardingEmail && ordersEmail.value === '')) &&\n\t\t\t\t\t\t(ordersEmail.dirty || ordersEmail.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!ordersEmail.hasError('email')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.INVALID_EMAIL'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"forwardingEmail && ordersEmail.value === ''\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.ORDERS_EMAIL_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<nb-checkbox\n\t\t\t\t\t[value]=\"forwardingPhone\"\n\t\t\t\t\t(change)=\"forwardingPhoneChange()\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONTACT_INFO_TAB.ORDER_FORWARDING_PHONE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t\t<input\n\t\t\t\t\t*ngIf=\"forwardingPhone\"\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ORDERS_PHONE' | translate\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"ordersPhone\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t(ordersPhone.errors ||\n\t\t\t\t\t\t\tordersPhone.hasError('pattern') ||\n\t\t\t\t\t\t\t(forwardingPhone && ordersPhone.value === '')) &&\n\t\t\t\t\t\t(ordersPhone.dirty || ordersPhone.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!ordersPhone.hasError('pattern')\">\n\t\t\t\t\t\t<!-- Phone number can start with \"+\" and must contains only only: \"-, ., (space), #\" and digit characters.-->\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.PHONE_CONTAINS_ONLY_DIGIT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"forwardingPhone && ordersPhone.value === ''\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.ORDERS_PHONE_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\">\n\t<div class=\"row m-0\">\n\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t<nb-checkbox [(ngModel)]=\"isPaymentEnabled\">\n\t\t\t\t{{\n\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PAYMENTS.ALLOW_ONLINE_PAYMENT'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</nb-checkbox>\n\t\t</div>\n\t</div>\n\t<div [hidden]=\"!isPaymentEnabled\" class=\"row m-0\">\n\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t<ea-payment-gateways\n\t\t\t\t#paymentGateways\n\t\t\t\t[isEdit]=\"isEdit\"\n\t\t\t\t[warehouseLogo]=\"warehouseLogo\"\n\t\t\t\t[warehouseCountry]=\"warehouseCountry\"\n\t\t\t></ea-payment-gateways>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" [formGroup]=\"form\" *ngIf=\"form\">\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\"\n\t\t\t\t>* {{ 'WAREHOUSE_VIEW.MUTATION.USERNAME' | translate }}</label\n\t\t\t>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.USERNAME' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tusername.errors && (username.dirty || username.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!username.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.USERNAME_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" [formGroup]=\"password\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.OLD_PASSWORD' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.OLD_PASSWORD' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"current\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" [formGroup]=\"password\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.NEW_PASSWORD' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.NEW_PASSWORD' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"new\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" [formGroup]=\"password\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONFIRM_PASSWORD' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CONFIRM_PASSWORD' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"confirm\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tpasswordConfirm.errors &&\n\t\t\t\t\t\t(passwordConfirm.dirty || passwordConfirm.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!passwordConfirm.hasError('notMatch')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.PASSWORDS_DO_NOT_MATCH'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.html":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.html ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"delivery-container\">\n\t<div class=\"map-container\">\n\t\t<div #gmap class=\"g-map\"></div>\n\t</div>\n\t<div class=\"zones\">\n\t\t<div class=\"zones-form\">\n\t\t\t<div\n\t\t\t\tclass=\"col-sm-12\"\n\t\t\t\t[formGroup]=\"deliverForm\"\n\t\t\t\t*ngIf=\"deliverForm\"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"!selectedShapeType\"\n\t\t\t\t\t[hidden]=\"isEditing\"\n\t\t\t\t\tclass=\"form-group row mb-4 centered\"\n\t\t\t\t>\n\t\t\t\t\t<span>Select shape to add a new zone</span>\n\t\t\t\t\t<div class=\"col-sm-12 btn-container\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t(click)=\"\n\t\t\t\t\t\t\t\tselectedShapeType = 'circle'; startDrawing()\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tCircle\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t(click)=\"\n\t\t\t\t\t\t\t\tselectedShapeType = 'shape'; startDrawing()\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tShape\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<span\n\t\t\t\t\tclass=\"mb-4\"\n\t\t\t\t\t*ngIf=\"!shapeReady && selectedShapeType\"\n\t\t\t\t\t[hidden]=\"isEditing\"\n\t\t\t\t\t>Draw a shape on the map</span\n\t\t\t\t>\n\n\t\t\t\t<fieldset *ngIf=\"shapeReady || isEditing\">\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label\n\t\t\t\t\t\t\tclass=\"col-sm-4 d-flex align-items-center control-label\"\n\t\t\t\t\t\t\t>Name</label\n\t\t\t\t\t\t>\n\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Zone name\"\n\t\t\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label\n\t\t\t\t\t\t\tclass=\"col-sm-4 d-flex align-items-center control-label\"\n\t\t\t\t\t\t\t>Minimum amount</label\n\t\t\t\t\t\t>\n\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tstep=\"0.1\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Minimum amount\"\n\t\t\t\t\t\t\t\tformControlName=\"amount\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label\n\t\t\t\t\t\t\tclass=\"col-sm-4 d-flex align-items-center control-label\"\n\t\t\t\t\t\t\t>Delivery fee</label\n\t\t\t\t\t\t>\n\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tstep=\"0.1\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Delvery fee\"\n\t\t\t\t\t\t\t\tformControlName=\"fee\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<div *ngIf=\"shapeReady\" class=\"col-sm-12 btn-container\">\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t(click)=\"cancelAdd()\"\n\t\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\t\tclass=\"btn btn-wa rning\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t[disabled]=\"\n\t\t\t\t\t\t\t\t\t!shapeReady ||\n\t\t\t\t\t\t\t\t\tdeliverForm.status === 'INVALID'\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t(click)=\"addZone()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"isEditing && !shapeReady\"\n\t\t\t\t\t\t\tclass=\"col-sm-12 btn-container\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t(click)=\"closeEdit()\"\n\t\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\t\tclass=\"btn btn-warning\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t[disabled]=\"deliverForm.status === 'INVALID'\"\n\t\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t(click)=\"editZone()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"zonesObjects.length > 0\" class=\"zones-list\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let zone of zonesObjects; let i = index\">\n\t\t\t\t\t<div\n\t\t\t\t\t\t(mouseenter)=\"highlightZone(zone)\"\n\t\t\t\t\t\t(mouseleave)=\"removeHighlight(zone)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{ zone.properties.name }}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div class=\"btn-container\">\n\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\tclass=\"far fa-edit\"\n\t\t\t\t\t\t\t\t(click)=\"setSelection(zone)\"\n\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\tclass=\"far fa-trash-alt\"\n\t\t\t\t\t\t\t\t(click)=\"deleteZone(zone)\"\n\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" [formGroup]=\"form\" *ngIf=\"form\">\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.NAME' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.NAME' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"name.errors && (name.dirty || name.touched)\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!name.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.NAME_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [hidden]=\"!name.hasError('minlength')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.NAME_ATLEAST_3_CHARS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [hidden]=\"!name.hasError('maxlength')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.NAME_MORE_THAN_30_CHARS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.PHOTO' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t[name]=\"name?.value\"\n\t\t\t\t\t[fileUrl]=\"logo?.value\"\n\t\t\t\t\t(uploadedImgUrl)=\"logo.setValue($event)\"\n\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t<div *ngIf=\"logo.invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.ERRORS.INVALID_URL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}!\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" [hidden]=\"logo.invalid\">\n\t\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<div class=\"row preview-img\" [hidden]=\"!showLogoMeta\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t#logoPreview\n\t\t\t\t\t\t\tsrc=\"{{ logo.value }}\"\n\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"removeIcon\" (click)=\"deleteImg()\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"ion-md-remove-circle\"\n\t\t\t\t\t\t\tplaceholder=\"Remove image\"\n\t\t\t\t\t\t\ttitle=\"{{ 'PLACEHOLDER.REMOVE_IMAGE' | translate }}\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"col-sm-9 offset-sm-2\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<nb-checkbox status=\"success\" formControlName=\"isActive\">{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.IS_ACTIVE' | translate\n\t\t\t\t\t}}</nb-checkbox>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"col-sm-9 offset-sm-2\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<nb-checkbox\n\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\tformControlName=\"isManufacturing\"\n\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.PRODUCTS_MANUFACTURING'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}</nb-checkbox\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"col-sm-9 offset-sm-2\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<nb-checkbox\n\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\tformControlName=\"isCarrierRequired\"\n\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CARRIER_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}</nb-checkbox\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'WAREHOUSE_VIEW.MUTATION.CARRIERS' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<nb-checkbox\n\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\tformControlName=\"hasRestrictedCarriers\"\n\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.MUTATION.USE_ONLY_SPECIFIC_CARRIERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}</nb-checkbox\n\t\t\t\t\t>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"hasRestrictedCarriers.value\">\n\t\t\t\t\t<ss-multiselect-dropdown\n\t\t\t\t\t\t[options]=\"carriersOptions$ | async\"\n\t\t\t\t\t\t[settings]=\"{ displayAllSelectedText: true }\"\n\t\t\t\t\t\tformControlName=\"carriersIds\"\n\t\t\t\t\t\tclass=\"carriers-dropdown\"\n\t\t\t\t\t>\n\t\t\t\t\t</ss-multiselect-dropdown>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- TODO add translate -->\n\t\t<div\n\t\t\t*ngIf=\"hasRestrictedCarriers.value && carriersIds?.value.length\"\n\t\t\tclass=\"form-group row\"\n\t\t>\n\t\t\t<label class=\"col-sm-2 control-label\">Delivery</label>\n\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<nb-radio-group\n\t\t\t\t\t[(value)]=\"delivery\"\n\t\t\t\t\tclass=\"row m-0\"\n\t\t\t\t\tname=\"size\"\n\t\t\t\t>\n\t\t\t\t\t<nb-radio name=\"size\" [value]=\"'all'\">\n\t\t\t\t\t\tUse All Carriers\n\t\t\t\t\t</nb-radio>\n\t\t\t\t\t<nb-radio name=\"size\" [value]=\"'onlyStore'\">\n\t\t\t\t\t\tUse Only Store Carriers\n\t\t\t\t\t</nb-radio>\n\t\t\t\t\t<nb-radio name=\"size\" [value]=\"'preferStore'\">\n\t\t\t\t\t\tPrefer Store Carriers\n\t\t\t\t\t</nb-radio>\n\t\t\t\t</nb-radio-group>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-tabset #tabSet fullWidth>\n\t<nb-tab\n\t\ttabTitle=\"{{ 'WAREHOUSE_MANAGE.WIZARD_TITLES.DETAILS' | translate }}\n\t\"\n\t\tclass=\"pt-5 pb-3\"\n\t>\n\t\t<ea-warehouse-manage-tabs-details\n\t\t\t#detailsComponent\n\t\t\t[form]=\"details\"\n\t\t></ea-warehouse-manage-tabs-details>\n\t</nb-tab>\n\n\t<nb-tab\n\t\ttabTitle=\"{{ 'WAREHOUSE_MANAGE.WIZARD_TITLES.ACCOUNT' | translate }}\n\t\"\n\t\tclass=\"pt-5 pb-3\"\n\t>\n\t\t<ea-warehouse-manage-tabs-account\n\t\t\t#accountComponent\n\t\t\t[form]=\"account\"\n\t\t></ea-warehouse-manage-tabs-account>\n\t</nb-tab>\n\n\t<nb-tab\n\t\ttabTitle=\"{{\n\t\t\t'WAREHOUSE_MANAGE.WIZARD_TITLES.CONTACT_INFO' | translate\n\t\t}}\n\t\"\n\t\tclass=\"pt-5 pb-3\"\n\t>\n\t\t<ea-warehouse-contact-info-form\n\t\t\t#contactInfoForm\n\t\t\t[form]=\"contactInfo\"\n\t\t></ea-warehouse-contact-info-form>\n\t</nb-tab>\n\n\t<nb-tab\n\t\ttabTitle=\"{{ 'WAREHOUSE_MANAGE.WIZARD_TITLES.LOCATION' | translate }}\n\t\"\n\t\tclass=\"pt-5\"\n\t>\n\t\t<ea-location-form\n\t\t\t#locationForm\n\t\t\t[form]=\"location\"\n\t\t\t[showAutocompleteSearch]=\"true\"\n\t\t\t(mapCoordinatesEmitter)=\"onCoordinatesChanges($event)\"\n\t\t\t(mapGeometryEmitter)=\"onGeometrySend($event)\"\n\t\t>\n\t\t</ea-location-form>\n\t\t<br />\n\t\t<google-map\n\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t>\n\t\t</google-map>\n\t</nb-tab>\n\n\t<nb-tab\n\t\ttabTitle=\"{{ 'WAREHOUSE_MANAGE.WIZARD_TITLES.PAYMENT' | translate }}\n\t\"\n\t\tclass=\"pt-5\"\n\t>\n\t\t<ea-warehouse-payments-settings-form\n\t\t\t#paymentsSettingsForm\n\t\t\t[isEdit]=\"true\"\n\t\t\t[warehouseLogo]=\"detailsComponent.logo.value\"\n\t\t\t[warehouseCountry]=\"locationForm.countryId.value\"\n\t\t></ea-warehouse-payments-settings-form>\n\t</nb-tab>\n\n\t<nb-tab\n\t\ttabTitle=\"{{\n\t\t\t'WAREHOUSE_MANAGE.WIZARD_TITLES.DELIVERY_ZONES' | translate\n\t\t}}\"\n\t\tclass=\"pt-5 pb-3\"\n\t>\n\t\t<ea-warehouse-manage-tabs-delivery-areas\n\t\t\t#deliveryAreasForm\n\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t[form]=\"deliveryAreas\"\n\t\t>\n\t\t</ea-warehouse-manage-tabs-delivery-areas>\n\t</nb-tab>\n</nb-tabset>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\" [nbSpinner]=\"loading\">\n\t<span class=\"modal-title\">{{\n\t\t'WAREHOUSE_VIEW.MUTATION.TITLE' | translate\n\t}}</span>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n\n<form-wizard\n\tclass=\"form-horizontal\"\n\t[formGroup]=\"form\"\n\t[buttonDone]=\"buttonDone\"\n\t[buttonNext]=\"buttonNext\"\n\t[buttonPrevious]=\"buttonPrevious\"\n>\n\t<wizard-step\n\t\t[title]=\"'WAREHOUSE_VIEW.MUTATION.WIZARD_TITLES.BASIC_INFO' | translate\"\n\t\t[isValid]=\"basicInfo.valid && password.valid\"\n\t>\n\t\t<div class=\"pt-5\"></div>\n\t\t<ea-warehouse-basic-info-form\n\t\t\t#basicInfoForm\n\t\t\t[form]=\"basicInfo\"\n\t\t\t[password]=\"password\"\n\t\t></ea-warehouse-basic-info-form>\n\t</wizard-step>\n\n\t<wizard-step\n\t\t[title]=\"\n\t\t\t'WAREHOUSE_VIEW.MUTATION.WIZARD_TITLES.CONTACT_INFO' | translate\n\t\t\"\n\t\t[isValid]=\"isValidContactInfo\"\n\t>\n\t\t<div class=\"pt-5\"></div>\n\t\t<ea-warehouse-contact-info-form\n\t\t\t#contactInfoForm\n\t\t\t[form]=\"contactInfo\"\n\t\t></ea-warehouse-contact-info-form>\n\t</wizard-step>\n\n\t<wizard-step\n\t\t[title]=\"'WAREHOUSE_VIEW.MUTATION.WIZARD_TITLES.LOCATION' | translate\"\n\t\t[isValid]=\"location.valid\"\n\t>\n\t\t<div class=\"pt-4\"></div>\n\n\t\t<ea-location-form\n\t\t\t#locationForm\n\t\t\t[form]=\"location\"\n\t\t\t[showAutocompleteSearch]=\"true\"\n\t\t\t(mapCoordinatesEmitter)=\"onCoordinatesChanges($event)\"\n\t\t\t(mapGeometryEmitter)=\"onGeometrySend($event)\"\n\t\t>\n\t\t</ea-location-form>\n\n\t\t<div class=\"py-3\">\n\t\t\t<google-map\n\t\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t\t>\n\t\t\t</google-map>\n\t\t</div>\n\t</wizard-step>\n\n\t<!-- TODO add translate -->\n\t<wizard-step\n\t\t[title]=\"'Payment'\"\n\t\t[isValid]=\"paymentsSettingsForm.isPaymentValid\"\n\t\t(onComplete)=\"createWarehouse()\"\n\t>\n\t\t<div class=\"pt-4\"></div>\n\n\t\t<ea-warehouse-payments-settings-form\n\t\t\t#paymentsSettingsForm\n\t\t\t[warehouseLogo]=\"basicInfoForm.logo.value\"\n\t\t\t[warehouseCountry]=\"locationForm.countryId.value\"\n\t\t></ea-warehouse-payments-settings-form>\n\t</wizard-step>\n</form-wizard>\n");

/***/ }),

/***/ "../common/src/enums/ForwardOrdersMethod.ts":
/*!**************************************************!*\
  !*** ../common/src/enums/ForwardOrdersMethod.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var ForwardOrdersMethod;
(function (ForwardOrdersMethod) {
    ForwardOrdersMethod[ForwardOrdersMethod["Unselected"] = 0] = "Unselected";
    ForwardOrdersMethod[ForwardOrdersMethod["Phone"] = 1] = "Phone";
    ForwardOrdersMethod[ForwardOrdersMethod["Email"] = 2] = "Email";
})(ForwardOrdersMethod || (ForwardOrdersMethod = {}));
/* harmony default export */ __webpack_exports__["default"] = (ForwardOrdersMethod);


/***/ }),

/***/ "./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .carriers-dropdown .dropdown {\n  width: 100%;\n}\n\n.preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.removeIcon {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS9mb3Jtcy9iYXNpYy1pbmZvL2Jhc2ljLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC93YXJlaG91c2UvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFXO0FDQWI7O0FER0E7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDQXBCOztBREdBO0VBRUMsZ0JBQWdCO0FDRGpCOztBRElBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0RuQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvd2FyZWhvdXNlL2Zvcm1zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJyaWVycy1kcm9wZG93biB7XG5cdC5kcm9wZG93biB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbi5wcmV2aWV3LWltZyB7XG5cdHBhZGRpbmctbGVmdDogMTRweDtcblx0cGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmltZy1yb3VuZGVkIHtcblx0Ly8gd2lkdGg6IDcwcHg7XG5cdG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZW1vdmVJY29uIHtcblx0cGFkZGluZy1sZWZ0OiA0cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbiIsIjo6bmctZGVlcCAuY2FycmllcnMtZHJvcGRvd24gLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmV2aWV3LWltZyB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmltZy1yb3VuZGVkIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnJlbW92ZUljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../forms/helpers */ "./src/app/@shared/forms/helpers.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let BasicInfoFormComponent = class BasicInfoFormComponent {
    constructor(carrierRouter, translateService) {
        this.carrierRouter = carrierRouter;
        this.translateService = translateService;
        this._delivery = 'all';
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            name: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255),
                ],
            ],
            logo: [
                '',
                [
                    (control) => {
                        const isEmpty = control.value === '';
                        if (!isEmpty) {
                            if (!control.value.startsWith('http') ||
                                control.value.match(/s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/) === null) {
                                return { validUrl: true };
                            }
                        }
                        return null;
                    },
                ],
            ],
            isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            hasRestrictedCarriers: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            useOnlyRestrictedCarriersForDelivery: [false],
            preferRestrictedCarriersForDelivery: [false],
            carriersIds: [[]],
        });
    }
    static buildPasswordForm(formBuilder) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    getValue() {
        const basicInfo = this.form.getRawValue();
        if (!basicInfo.logo) {
            const letter = basicInfo.name.charAt(0).toUpperCase();
            basicInfo.logo = Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_7__["getDummyImage"])(300, 300, letter);
        }
        return Object.assign(Object.assign({ isActive: basicInfo.isActive, name: basicInfo.name, username: basicInfo.username, logo: basicInfo.logo }, (basicInfo.hasRestrictedCarriers
            ? {
                hasRestrictedCarriers: basicInfo.hasRestrictedCarriers,
                carriersIds: basicInfo.carriersIds,
            }
            : {})), (basicInfo.hasRestrictedCarriers &&
            basicInfo.carriersIds &&
            basicInfo.carriersIds.length
            ? {
                useOnlyRestrictedCarriersForDelivery: basicInfo.useOnlyRestrictedCarriersForDelivery,
                preferRestrictedCarriersForDelivery: basicInfo.preferRestrictedCarriersForDelivery,
            }
            : {
                useOnlyRestrictedCarriersForDelivery: false,
                preferRestrictedCarriersForDelivery: false,
            }));
    }
    setValue(basicInfo) {
        _forms_helpers__WEBPACK_IMPORTED_MODULE_6__["FormHelpers"].deepMark(this.form, 'dirty');
        basicInfo = Object.assign({
            useOnlyRestrictedCarriersForDelivery: false,
            preferRestrictedCarriersForDelivery: false,
        }, basicInfo);
        this.form.setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["pick"])(basicInfo, [
            ...Object.keys(this.getValue()),
            'hasRestrictedCarriers',
            'carriersIds',
            'useOnlyRestrictedCarriersForDelivery',
            'preferRestrictedCarriersForDelivery',
        ]));
        const onlyStore = basicInfo.useOnlyRestrictedCarriersForDelivery;
        const preferStore = basicInfo.preferRestrictedCarriersForDelivery;
        if (onlyStore) {
            this.delivery = 'onlyStore';
        }
        else if (preferStore) {
            this.delivery = 'preferStore';
        }
        else {
            this.delivery = 'all';
        }
    }
    getPassword() {
        if (!this.password) {
            throw new Error("Form doesn't contain password");
        }
        return this.password.value;
    }
    setPassword(value) {
        this.password.setValue(value);
    }
    get name() {
        return this.form.get('name');
    }
    get logo() {
        return this.form.get('logo');
    }
    get isActive() {
        return this.form.get('isActive');
    }
    get username() {
        return this.form.get('username');
    }
    get hasRestrictedCarriers() {
        return this.form.get('hasRestrictedCarriers');
    }
    get carriersIds() {
        return this.form.get('carriersIds');
    }
    get useOnlyRestrictedCarriersForDelivery() {
        return this.form.get('useOnlyRestrictedCarriersForDelivery');
    }
    get preferRestrictedCarriersForDelivery() {
        return this.form.get('preferRestrictedCarriersForDelivery');
    }
    get delivery() {
        return this._delivery;
    }
    set delivery(value) {
        this._delivery = value;
        this.useOnlyRestrictedCarriersForDelivery.setValue(false);
        this.preferRestrictedCarriersForDelivery.setValue(false);
        switch (value) {
            case 'onlyStore':
                this.useOnlyRestrictedCarriersForDelivery.setValue(true);
                break;
            case 'preferStore':
                this.preferRestrictedCarriersForDelivery.setValue(true);
                break;
        }
    }
    get showLogoMeta() {
        return this.logo && this.logo.value !== '';
    }
    ngOnInit() {
        this.loadCarriersOptions();
        this.getUploaderPlaceholderText();
    }
    deleteImg() {
        this.logo.setValue('');
    }
    getUploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.translateService
                .get(['WAREHOUSE_VIEW.MUTATION.PHOTO', 'OPTIONAL'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            this.uploaderPlaceholder = `${res['WAREHOUSE_VIEW.MUTATION.PHOTO']} (${res['OPTIONAL']})`;
        });
    }
    loadCarriersOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let carriers = yield this.carrierRouter
                .getAllActive()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            carriers = carriers.filter((c) => c.isSharedCarrier);
            this.carriersOptions = carriers.map((c) => {
                return {
                    id: c.id,
                    name: `${c.firstName} ${c.lastName}`,
                };
            });
        });
    }
};
BasicInfoFormComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BasicInfoFormComponent.prototype, "fileInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], BasicInfoFormComponent.prototype, "form", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"])
], BasicInfoFormComponent.prototype, "password", void 0);
BasicInfoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-basic-info-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
], BasicInfoFormComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/basic-info/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/basic-info/index.ts ***!
  \*************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/app/@shared/warehouse/forms/basic-info/basic-info-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse/forms/contact-info/contact-info-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/contact-info/contact-info-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContactInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoFormComponent", function() { return ContactInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/enums/ForwardOrdersMethod */ "../common/src/enums/ForwardOrdersMethod.ts");
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../forms/helpers */ "./src/app/@shared/forms/helpers.ts");





const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9x]*$/;
let ContactInfoFormComponent = class ContactInfoFormComponent {
    static buildForm(formBuilder) {
        return formBuilder.group({
            contactPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(phoneNumberRegex)]],
            contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            forwardOrdersUsing: [],
            ordersPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(phoneNumberRegex)]],
            ordersEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
    }
    getValue() {
        const contactInfo = this.form.getRawValue();
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (contactInfo.contactEmail
            ? { contactEmail: contactInfo.contactEmail }
            : { contactEmail: null })), (contactInfo.contactPhone
            ? { contactPhone: contactInfo.contactPhone }
            : { contactPhone: null })), { forwardOrdersUsing: this.getForwardOrdersUsing() }), (contactInfo.ordersEmail
            ? { ordersEmail: contactInfo.ordersEmail }
            : { ordersEmail: null })), (contactInfo.ordersPhone
            ? { ordersPhone: contactInfo.ordersPhone }
            : { ordersPhone: null }));
    }
    setValue(contactInfo) {
        _forms_helpers__WEBPACK_IMPORTED_MODULE_4__["FormHelpers"].deepMark(this.form, 'dirty');
        this.form.setValue({
            contactEmail: contactInfo.contactEmail
                ? contactInfo.contactEmail
                : '',
            contactPhone: contactInfo.contactPhone
                ? contactInfo.contactPhone
                : '',
            forwardOrdersUsing: contactInfo.forwardOrdersUsing,
            ordersEmail: contactInfo.ordersEmail ? contactInfo.ordersEmail : '',
            ordersPhone: contactInfo.ordersPhone ? contactInfo.ordersPhone : '',
        });
        if (contactInfo.forwardOrdersUsing) {
            this.forwardingEmail = contactInfo.forwardOrdersUsing.includes(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Email);
            this.forwardingPhone = contactInfo.forwardOrdersUsing.includes(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Phone);
        }
    }
    get contactEmail() {
        return this.form.get('contactEmail');
    }
    get contactPhone() {
        return this.form.get('contactPhone');
    }
    get forwardOrdersUsing() {
        return this.form.get('forwardOrdersUsing');
    }
    get ordersEmail() {
        return this.form.get('ordersEmail');
    }
    get ordersPhone() {
        return this.form.get('ordersPhone');
    }
    get validForm() {
        return (this.form &&
            this.form.valid &&
            (this.forwardingEmail ? this.ordersEmail.value !== '' : true) &&
            (this.forwardingPhone ? this.ordersPhone.value !== '' : true));
    }
    forwardingPhoneChange() {
        this.forwardingPhone = !this.forwardingPhone;
        let forwardOrdersUsingArr = this.forwardOrdersUsing.value || [];
        forwardOrdersUsingArr = forwardOrdersUsingArr.filter((v) => v !== _modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Phone);
        if (this.forwardingPhone) {
            forwardOrdersUsingArr.push(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Phone);
        }
        else {
            this.ordersPhone.setValue('');
        }
        this.forwardOrdersUsing.setValue(forwardOrdersUsingArr);
    }
    forwardingEmailChange() {
        this.forwardingEmail = !this.forwardingEmail;
        let forwardOrdersUsingArr = this.forwardOrdersUsing.value || [];
        forwardOrdersUsingArr = forwardOrdersUsingArr.filter((v) => v !== _modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Email);
        if (this.forwardingEmail) {
            forwardOrdersUsingArr.push(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Email);
        }
        else {
            this.ordersEmail.setValue('');
        }
        this.forwardOrdersUsing.setValue(forwardOrdersUsingArr);
    }
    getForwardOrdersUsing() {
        const forwardOrdersUsing = [];
        if (this.forwardingEmail) {
            forwardOrdersUsing.push(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Email);
        }
        if (this.forwardingPhone) {
            forwardOrdersUsing.push(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Phone);
        }
        if (!this.forwardingEmail && !this.forwardingPhone) {
            forwardOrdersUsing.push(_modules_server_common_enums_ForwardOrdersMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Unselected);
        }
        return forwardOrdersUsing;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], ContactInfoFormComponent.prototype, "form", void 0);
ContactInfoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-contact-info-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/contact-info/contact-info-form.component.html")).default,
    })
], ContactInfoFormComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/contact-info/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/contact-info/index.ts ***!
  \***************************************************************/
/*! exports provided: ContactInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contact_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-info-form.component */ "./src/app/@shared/warehouse/forms/contact-info/contact-info-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactInfoFormComponent", function() { return _contact_info_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactInfoFormComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse/forms/index.ts":
/*!**************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/index.ts ***!
  \**************************************************/
/*! exports provided: WarehouseFormsModule, BasicInfoFormComponent, ContactInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/warehouse/forms/basic-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });

/* harmony import */ var _contact_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-info */ "./src/app/@shared/warehouse/forms/contact-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactInfoFormComponent", function() { return _contact_info__WEBPACK_IMPORTED_MODULE_2__["ContactInfoFormComponent"]; });

/* harmony import */ var _warehouse_forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-forms.module */ "./src/app/@shared/warehouse/forms/warehouse-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseFormsModule", function() { return _warehouse_forms_module__WEBPACK_IMPORTED_MODULE_3__["WarehouseFormsModule"]; });







/***/ }),

/***/ "./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PaymentsSettingsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsSettingsFormComponent", function() { return PaymentsSettingsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_payment_gateways_payment_gateways_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/payment-gateways/payment-gateways.component */ "./src/app/@shared/payment-gateways/payment-gateways.component.ts");



let PaymentsSettingsFormComponent = class PaymentsSettingsFormComponent {
    constructor() {
        this.isPaymentEnabled = false;
    }
    get isPaymentValid() {
        return !this.isPaymentEnabled || this.paymentGateways.isValid;
    }
    get paymentsGateways() {
        return this.paymentGateways.paymentsGateways;
    }
    setValue(merchant) {
        this.isPaymentEnabled = merchant.isPaymentEnabled;
        this.paymentGateways.setValue(merchant);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentGateways', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_payment_gateways_payment_gateways_component__WEBPACK_IMPORTED_MODULE_2__["PaymentGatewaysComponent"])
], PaymentsSettingsFormComponent.prototype, "paymentGateways", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PaymentsSettingsFormComponent.prototype, "warehouseLogo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PaymentsSettingsFormComponent.prototype, "warehouseCountry", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], PaymentsSettingsFormComponent.prototype, "isEdit", void 0);
PaymentsSettingsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-payments-settings-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payments-settings-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.html")).default,
    })
], PaymentsSettingsFormComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-forms.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-forms.module.ts ***!
  \*******************************************************************/
/*! exports provided: WarehouseFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseFormsModule", function() { return WarehouseFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/warehouse/forms/basic-info/index.ts");
/* harmony import */ var _contact_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-info */ "./src/app/@shared/warehouse/forms/contact-info/index.ts");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/fesm2015/angular-2-dropdown-multiselect.js");
/* harmony import */ var _warehouse_manage_tabs_warehouse_manage_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./warehouse-manage-tabs/warehouse-manage-tabs.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.ts");
/* harmony import */ var _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/google-map/google-map.module */ "./src/app/@shared/forms/google-map/google-map.module.ts");
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _warehouse_manage_tabs_details_warehouse_manage_tabs_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warehouse-manage-tabs/details/warehouse-manage-tabs-details.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.ts");
/* harmony import */ var _warehouse_manage_tabs_account_warehouse_manage_tabs_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./warehouse-manage-tabs/account/warehouse-manage-tabs-account.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.ts");
/* harmony import */ var _warehouse_manage_tabs_delivery_areas_warehouse_manage_tabs_delivery_areas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.ts");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payments-settings/payments-settings-form.component */ "./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.ts");
/* harmony import */ var _app_shared_payment_gateways_payment_gateways_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/@shared/payment-gateways/payment-gateways.module */ "./src/app/@shared/payment-gateways/payment-gateways.module.ts");


















let WarehouseFormsModule = class WarehouseFormsModule {
};
WarehouseFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiselectDropdownModule"],
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_14__["FileUploaderModule"],
            _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_9__["GoogleMapModule"],
            _forms_location__WEBPACK_IMPORTED_MODULE_10__["LocationFormModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"],
            _app_shared_payment_gateways_payment_gateways_module__WEBPACK_IMPORTED_MODULE_17__["PaymentGatewaysModule"],
        ],
        exports: [
            _warehouse_manage_tabs_warehouse_manage_tabs_component__WEBPACK_IMPORTED_MODULE_8__["WarehouseManageTabsComponent"],
            _warehouse_manage_tabs_details_warehouse_manage_tabs_details_component__WEBPACK_IMPORTED_MODULE_11__["WarehouseManageTabsDetailsComponent"],
            _warehouse_manage_tabs_account_warehouse_manage_tabs_account_component__WEBPACK_IMPORTED_MODULE_12__["WarehouseManageTabsAccountComponent"],
            _basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"],
            _contact_info__WEBPACK_IMPORTED_MODULE_6__["ContactInfoFormComponent"],
            _warehouse_manage_tabs_delivery_areas_warehouse_manage_tabs_delivery_areas_component__WEBPACK_IMPORTED_MODULE_13__["WarehouseManageTabsDeliveryAreasComponent"],
            _payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_16__["PaymentsSettingsFormComponent"],
        ],
        declarations: [
            _warehouse_manage_tabs_warehouse_manage_tabs_component__WEBPACK_IMPORTED_MODULE_8__["WarehouseManageTabsComponent"],
            _warehouse_manage_tabs_details_warehouse_manage_tabs_details_component__WEBPACK_IMPORTED_MODULE_11__["WarehouseManageTabsDetailsComponent"],
            _warehouse_manage_tabs_account_warehouse_manage_tabs_account_component__WEBPACK_IMPORTED_MODULE_12__["WarehouseManageTabsAccountComponent"],
            _basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"],
            _contact_info__WEBPACK_IMPORTED_MODULE_6__["ContactInfoFormComponent"],
            _warehouse_manage_tabs_delivery_areas_warehouse_manage_tabs_delivery_areas_component__WEBPACK_IMPORTED_MODULE_13__["WarehouseManageTabsDeliveryAreasComponent"],
            _payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_16__["PaymentsSettingsFormComponent"],
        ],
    })
], WarehouseFormsModule);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvd2FyZWhvdXNlL2Zvcm1zL3dhcmVob3VzZS1tYW5hZ2UtdGFicy9hY2NvdW50L3dhcmVob3VzZS1tYW5hZ2UtdGFicy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: WarehouseManageTabsAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseManageTabsAccountComponent", function() { return WarehouseManageTabsAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var WarehouseManageTabsAccountComponent_1;



let WarehouseManageTabsAccountComponent = WarehouseManageTabsAccountComponent_1 = class WarehouseManageTabsAccountComponent {
    static initialize(passwordControl) {
        this.password = passwordControl;
    }
    static clean() {
        WarehouseManageTabsAccountComponent_1.password = null;
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: formBuilder.group({
                current: [''],
                new: [''],
                confirm: [
                    '',
                    [
                        (control) => {
                            if (this.password) {
                                return control.value.length > 0 &&
                                    control.value !== this.password.value
                                    ? { notMatch: true }
                                    : null;
                            }
                        },
                    ],
                ],
            }),
        });
    }
    get username() {
        return this.form.get('username');
    }
    get password() {
        return this.form.get('password');
    }
    get passwordNew() {
        return this.password.get('new');
    }
    get passwordConfirm() {
        return this.password.get('confirm');
    }
    ngOnInit() {
        WarehouseManageTabsAccountComponent_1.initialize(this.passwordNew);
    }
    ngOnDestroy() {
        WarehouseManageTabsAccountComponent_1.clean();
    }
    getValue() {
        const accountInfo = this.form.getRawValue();
        return accountInfo;
    }
    setValue(username) {
        this.username.setValue(username);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], WarehouseManageTabsAccountComponent.prototype, "form", void 0);
WarehouseManageTabsAccountComponent = WarehouseManageTabsAccountComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-manage-tabs-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-manage-tabs-account.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-manage-tabs-account.component.scss */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.scss")).default]
    })
], WarehouseManageTabsAccountComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delivery-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.delivery-container .map-container {\n  width: 70%;\n  height: 60vh;\n  margin-left: 14px;\n}\n\n.delivery-container .map-container .g-map {\n  height: 100%;\n  width: 100%;\n}\n\n.delivery-container .zones {\n  height: 100%;\n  width: 30%;\n}\n\n.delivery-container .zones .btn-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  width: 60px;\n}\n\n.delivery-container .zones .zones-form .centered {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.delivery-container .zones .zones-form span {\n  margin-bottom: 8px;\n  font-family: Exo;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  font-size: 1.1em;\n}\n\n.delivery-container .zones .zones-list {\n  color: white;\n}\n\n.delivery-container .zones .zones-list ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0 !important;\n}\n\n.delivery-container .zones .zones-list ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #47d26f;\n  border-radius: 5px;\n  padding: 6px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  border: 2px solid transparent;\n}\n\n.delivery-container .zones .zones-list ul li div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\n.delivery-container .zones .zones-list ul li div span {\n  font-size: 1.2em;\n  font-family: Exo;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.delivery-container .zones .zones-list ul li div div {\n  width: 35px;\n}\n\n.delivery-container .zones .zones-list ul li div div i {\n  font-size: 1em;\n  cursor: pointer;\n}\n\n.delivery-container .zones .zones-list ul li:hover {\n  opacity: 0.9;\n  border: 2px solid mediumseagreen;\n}\n\n.delivery-container .zones .zones-list ul i:hover {\n  color: dimgrey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS9mb3Jtcy93YXJlaG91c2UtbWFuYWdlLXRhYnMvZGVsaXZlcnktYXJlYXMvd2FyZWhvdXNlLW1hbmFnZS10YWJzLWRlbGl2ZXJ5LWFyZWFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS9mb3Jtcy93YXJlaG91c2UtbWFuYWdlLXRhYnMvZGVsaXZlcnktYXJlYXMvd2FyZWhvdXNlLW1hbmFnZS10YWJzLWRlbGl2ZXJ5LWFyZWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7QUNDZDs7QURGQTtFQUlFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FDRW5COztBRFJBO0VBU0csWUFBWTtFQUNaLFdBQVc7QUNHZDs7QURiQTtFQWVFLFlBQVk7RUFDWixVQUFVO0FDRVo7O0FEbEJBO0VBbUJHLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO01BQTdCLDJCQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsV0FBVztBQ0dkOztBRHhCQTtFQTBCSSx5QkFBbUI7TUFBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO01BQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7QUNFMUI7O0FEN0JBO0VBK0JJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ0VwQjs7QUR2Q0E7RUEwQ0csWUFBWTtBQ0NmOztBRDNDQTtFQTZDSSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7TUFBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7TUFBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUNFOUI7O0FEbERBO0VBbURLLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO01BQTlCLHNCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLHlCQUFtQjtNQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FDR2xDOztBRC9EQTtFQStETSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBOEI7TUFBOUIsc0JBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7TUFBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0FDSWxCOztBRHZFQTtFQXNFTyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQ0t4Qjs7QUQ3RUE7RUE0RU8sV0FBVztBQ0tsQjs7QURqRkE7RUErRVEsY0FBYztFQUNkLGVBQWU7QUNNdkI7O0FEdEZBO0VBdUZLLFlBQVk7RUFDWixnQ0FBZ0M7QUNHckM7O0FEM0ZBO0VBNEZLLGNBQWM7QUNHbkIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS9mb3Jtcy93YXJlaG91c2UtbWFuYWdlLXRhYnMvZGVsaXZlcnktYXJlYXMvd2FyZWhvdXNlLW1hbmFnZS10YWJzLWRlbGl2ZXJ5LWFyZWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGl2ZXJ5LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0Lm1hcC1jb250YWluZXIge1xuXHRcdHdpZHRoOiA3MCU7XG5cdFx0aGVpZ2h0OiA2MHZoO1xuXHRcdG1hcmdpbi1sZWZ0OiAxNHB4O1xuXG5cdFx0LmctbWFwIHtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxuXG5cdC56b25lcyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAzMCU7XG5cblx0XHQuYnRuLWNvbnRhaW5lciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFx0XHR3aWR0aDogNjBweDtcblx0XHR9XG5cblx0XHQuem9uZXMtZm9ybSB7XG5cdFx0XHQuY2VudGVyZWQge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRmb250LWZhbWlseTogRXhvO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRmb250LXNpemU6IDEuMWVtO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC56b25lcy1saXN0IHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblxuXHRcdFx0dWwge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcblxuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM0N2QyNmY7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDZweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cblx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogRXhvO1xuXHRcdFx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM1cHg7XG5cblx0XHRcdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGk6aG92ZXIge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDAuOTtcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCBtZWRpdW1zZWFncmVlbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGk6aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiBkaW1ncmV5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIuZGVsaXZlcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlbGl2ZXJ5LWNvbnRhaW5lciAubWFwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNjB2aDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5cbi5kZWxpdmVyeS1jb250YWluZXIgLm1hcC1jb250YWluZXIgLmctbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbGl2ZXJ5LWNvbnRhaW5lciAuem9uZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5kZWxpdmVyeS1jb250YWluZXIgLnpvbmVzIC5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uZGVsaXZlcnktY29udGFpbmVyIC56b25lcyAuem9uZXMtZm9ybSAuY2VudGVyZWQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGVsaXZlcnktY29udGFpbmVyIC56b25lcyAuem9uZXMtZm9ybSBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LWZhbWlseTogRXhvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uZGVsaXZlcnktY29udGFpbmVyIC56b25lcyAuem9uZXMtbGlzdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlbGl2ZXJ5LWNvbnRhaW5lciAuem9uZXMgLnpvbmVzLWxpc3QgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmRlbGl2ZXJ5LWNvbnRhaW5lciAuem9uZXMgLnpvbmVzLWxpc3QgdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA4MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2QyNmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5kZWxpdmVyeS1jb250YWluZXIgLnpvbmVzIC56b25lcy1saXN0IHVsIGxpIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRlbGl2ZXJ5LWNvbnRhaW5lciAuem9uZXMgLnpvbmVzLWxpc3QgdWwgbGkgZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogRXhvO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRlbGl2ZXJ5LWNvbnRhaW5lciAuem9uZXMgLnpvbmVzLWxpc3QgdWwgbGkgZGl2IGRpdiB7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4uZGVsaXZlcnktY29udGFpbmVyIC56b25lcyAuem9uZXMtbGlzdCB1bCBsaSBkaXYgZGl2IGkge1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsaXZlcnktY29udGFpbmVyIC56b25lcyAuem9uZXMtbGlzdCB1bCBsaTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm9yZGVyOiAycHggc29saWQgbWVkaXVtc2VhZ3JlZW47XG59XG5cbi5kZWxpdmVyeS1jb250YWluZXIgLnpvbmVzIC56b25lcy1saXN0IHVsIGk6aG92ZXIge1xuICBjb2xvcjogZGltZ3JleTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: WarehouseManageTabsDeliveryAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseManageTabsDeliveryAreasComponent", function() { return WarehouseManageTabsDeliveryAreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let WarehouseManageTabsDeliveryAreasComponent = class WarehouseManageTabsDeliveryAreasComponent {
    constructor(fb) {
        this.fb = fb;
        this.zonesObjects = [];
        this.shapeReady = false;
        this.isEditing = false;
        this._polyOptions = {
            strokeWeight: 0.5,
            fillOpacity: 0.45,
            editable: true,
            fillColor: '#1E90FF',
        };
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this._setupGoogleMap();
        this._listenForMapCoordinates();
        this._initiliazeForm();
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            deliveryAreas: '',
        });
    }
    get deliveryZones() {
        return this.form.get('deliveryAreas').value;
    }
    set deliveryZones(zonesData) {
        this.form.get('deliveryAreas').setValue(zonesData);
    }
    getValue() {
        const geoJSON = {
            type: 'FeatureCollection',
            features: [],
        };
        const features = [];
        this.zonesObjects.forEach((zoneObject) => {
            if (zoneObject.type === 'circle') {
                const tempObj = {};
                const coordsArr = zoneObject
                    .getCenter()
                    .toUrlValue(7)
                    .split(',');
                tempObj['properties'] = zoneObject.properties;
                tempObj['properties']['radius'] = zoneObject.radius;
                tempObj['type'] = 'Feature';
                tempObj['geometry'] = {
                    type: 'Point',
                    coordinates: [+coordsArr[1], +coordsArr[0]],
                };
                features.push(tempObj);
            }
            else {
                const tempObj = {};
                const coordinates = [[]];
                zoneObject.getPath().forEach((point) => {
                    const mappedCoordinates = point
                        .toUrlValue(7)
                        .split(',')
                        .map((p) => +p);
                    coordinates[0].push(mappedCoordinates);
                });
                tempObj['properties'] = zoneObject.properties;
                tempObj['type'] = 'Feature';
                tempObj['geometry'] = {
                    type: 'Polygon',
                    coordinates,
                };
                features.push(tempObj);
            }
        });
        geoJSON.features = features;
        return geoJSON;
    }
    setValue(data) {
        if (data && data.features.length > 0) {
            data.features.forEach((feature) => {
                if (feature.geometry.type === 'Point') {
                    const circle = new google.maps.Circle({
                        center: {
                            lng: +feature.geometry.coordinates[0],
                            lat: +feature.geometry.coordinates[1],
                        },
                        radius: feature.properties['radius'],
                        strokeWeight: 0.5,
                        fillOpacity: 0.45,
                        fillColor: '#1E90FF',
                        map: this._map,
                    });
                    circle['type'] = 'circle';
                    circle['properties'] = feature.properties;
                    this._addZoneEventListeners(circle);
                    this.zonesObjects.push(circle);
                }
                else if (feature.geometry.type === 'Polygon') {
                    const polygon = new google.maps.Polygon({
                        strokeWeight: 0.5,
                        fillOpacity: 0.45,
                        fillColor: '#1E90FF',
                        paths: this._mapCoordinates(feature.geometry.coordinates),
                    });
                    polygon['properties'] = feature.properties;
                    polygon['type'] = 'polygon';
                    polygon.setMap(this._map);
                    this._addZoneEventListeners(polygon);
                    this.zonesObjects.push(polygon);
                }
            });
            this._zoneNumber = data.features.length;
            this.deliveryZones = data;
        }
    }
    addZone() {
        if (this.shapeReady && this.deliverForm.status === 'VALID') {
            if (this._selectedZone.type ===
                google.maps.drawing.OverlayType.POLYGON) {
                const coordinates = [[]];
                this._selectedZone.getPath().forEach((point) => {
                    const mappedCoordinates = point
                        .toUrlValue(7)
                        .split(',')
                        .map((p) => +p);
                    coordinates[0].push(mappedCoordinates);
                });
                this._selectedZone.properties = {
                    name: this.deliverForm.get('name').value,
                    minimumAmount: this.deliverForm.get('amount').value,
                    fee: this.deliverForm.get('fee').value,
                };
                this.zonesObjects.push(this._selectedZone);
            }
            else {
                this._selectedZone.properties = {
                    name: this.deliverForm.get('name').value,
                    minimumAmount: this.deliverForm.get('amount').value,
                    fee: this.deliverForm.get('fee').value,
                };
                this.zonesObjects.push(this._selectedZone);
            }
            this._clearSelection();
            this._zoneNumber++;
            this.selectedShapeType = null;
            this._selectedZone = null;
            this.shapeReady = false;
            this.deliverForm
                .get('name')
                .setValue('Zone ' + this._zoneNumber || false);
            this.deliverForm.get('fee').setValue('');
            this.deliverForm.get('amount').setValue('');
        }
    }
    startDrawing() {
        this._clearSelection();
        this._drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: this._getShape(),
            drawingControl: false,
            circleOptions: this._polyOptions,
            polygonOptions: this._polyOptions,
            map: this._map,
        });
        google.maps.event.addListener(this._drawingManager, 'overlaycomplete', (zoneObject) => {
            this._drawingManager.setDrawingMode(null);
            this.shapeReady = true;
            const newZone = zoneObject.overlay;
            newZone.type = zoneObject.type;
            this._addZoneEventListeners(newZone);
            this.setSelection(newZone);
        });
        google.maps.event.addListener(this._drawingManager, 'drawingmode_changed', this._clearSelection);
    }
    cancelAdd() {
        this.deleteSelectedShape();
        this.deliverForm.get('fee').setValue('');
        this.deliverForm.get('amount').setValue('');
        this.deliverForm.get('name').setValue('Zone ' + this._zoneNumber);
    }
    closeEdit() {
        this.isEditing = false;
        this._clearSelection();
        this.deliverForm.get('fee').setValue('');
        this.deliverForm.get('amount').setValue('');
        this.deliverForm.get('name').setValue('Zone ' + this._zoneNumber);
    }
    deleteSelectedShape() {
        if (this._selectedZone) {
            this._selectedZone.setMap(null);
            this.shapeReady = false;
            this.selectedShapeType = null;
        }
    }
    setSelection(zone) {
        this._clearSelection();
        this._selectedZone = zone;
        zone.setEditable(true);
        this.highlightZone(zone);
        if (!this.isEditing && !this.selectedShapeType) {
            this._populateForm(zone);
        }
    }
    editZone() {
        this._selectedZone.properties = {
            name: this.deliverForm.get('name').value,
            fee: this.deliverForm.get('fee').value,
            minimumAmount: this.deliverForm.get('amount').value,
        };
        this.closeEdit();
    }
    highlightZone(zone) {
        zone.set('fillColor', '#FF8C00');
    }
    removeHighlight(zone) {
        zone.set('fillColor', '#1E90FF');
    }
    deleteZone(zone) {
        zone.setMap(null);
        const index = this.zonesObjects.indexOf(zone);
        this.zonesObjects.splice(index, 1);
        this._zoneNumber = this.zonesObjects.length;
    }
    _mapCoordinates(coordinates) {
        const tempArr = [];
        coordinates[0].forEach((c) => {
            tempArr.push({
                lat: c[0],
                lng: c[1],
            });
        });
        return tempArr;
    }
    _addZoneEventListeners(zone) {
        google.maps.event.addListener(zone, 'click', () => {
            if (!this.selectedShapeType) {
                this.setSelection(zone);
            }
        });
        google.maps.event.addListener(zone, 'mouseover', () => {
            this.highlightZone(zone);
        });
        google.maps.event.addListener(zone, 'mouseout', () => {
            this.removeHighlight(zone);
        });
    }
    _initiliazeForm() {
        this.deliverForm = this.fb.group({
            name: ['Zone ' + this._zoneNumber || false],
            amount: '',
            fee: '',
        });
    }
    _getShape() {
        if (this.selectedShapeType === 'circle') {
            return google.maps.drawing.OverlayType.CIRCLE;
        }
        else if (this.selectedShapeType === 'shape') {
            return google.maps.drawing.OverlayType.POLYGON;
        }
    }
    _populateForm(zone) {
        this.isEditing = true;
        this.deliverForm.get('name').setValue(zone.properties.name);
        this.deliverForm.get('fee').setValue(zone.properties.fee);
        this.deliverForm.get('amount').setValue(zone.properties.minimumAmount);
    }
    _clearSelection() {
        if (this._selectedZone) {
            this.isEditing = false;
            this._selectedZone.set('fillColor', '#1E90FF');
            this._selectedZone.setEditable(false);
            this._selectedZone = null;
        }
    }
    _listenForMapCoordinates() {
        this.mapCoordEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._ngDestroy$))
            .subscribe((location) => {
            this._map.setCenter(location);
            this._mapMarker = new google.maps.Marker({
                map: this._map,
                position: location,
            });
        });
    }
    _setupGoogleMap() {
        const optionsMap = {
            center: new google.maps.LatLng(0, 0),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        this._map = new google.maps.Map(this.mapElement.nativeElement, optionsMap);
        google.maps.event.addListener(this._map, 'click', this._clearSelection);
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
WarehouseManageTabsDeliveryAreasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseManageTabsDeliveryAreasComponent.prototype, "mapElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
], WarehouseManageTabsDeliveryAreasComponent.prototype, "mapCoordEvent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])
], WarehouseManageTabsDeliveryAreasComponent.prototype, "form", void 0);
WarehouseManageTabsDeliveryAreasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-manage-tabs-delivery-areas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-manage-tabs-delivery-areas.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-manage-tabs-delivery-areas.component.scss */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], WarehouseManageTabsDeliveryAreasComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .carriers-dropdown .dropdown {\n  width: 100%;\n}\n\n.preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.removeIcon {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS9mb3Jtcy93YXJlaG91c2UtbWFuYWdlLXRhYnMvZGV0YWlscy93YXJlaG91c2UtbWFuYWdlLXRhYnMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC93YXJlaG91c2UvZm9ybXMvd2FyZWhvdXNlLW1hbmFnZS10YWJzL2RldGFpbHMvd2FyZWhvdXNlLW1hbmFnZS10YWJzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFXO0FDQWI7O0FESUE7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDRHBCOztBRElBO0VBRUMsZ0JBQWdCO0FDRmpCOztBREtBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0ZuQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvd2FyZWhvdXNlL2Zvcm1zL3dhcmVob3VzZS1tYW5hZ2UtdGFicy9kZXRhaWxzL3dhcmVob3VzZS1tYW5hZ2UtdGFicy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJyaWVycy1kcm9wZG93biB7XG5cdC5kcm9wZG93biB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuLnByZXZpZXctaW1nIHtcblx0cGFkZGluZy1sZWZ0OiAxNHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJvdW5kZWQge1xuXHQvLyB3aWR0aDogNzBweDtcblx0bWF4LWhlaWdodDogNzBweDtcbn1cblxuLnJlbW92ZUljb24ge1xuXHRwYWRkaW5nLWxlZnQ6IDRweDtcblx0cGFkZGluZy1yaWdodDogNHB4O1xufVxuIiwiOjpuZy1kZWVwIC5jYXJyaWVycy1kcm9wZG93biAuZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByZXZpZXctaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJvdW5kZWQge1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4ucmVtb3ZlSWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: WarehouseManageTabsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseManageTabsDetailsComponent", function() { return WarehouseManageTabsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../forms/helpers */ "./src/app/@shared/forms/helpers.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "../../node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is-url */ "../../node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");











let WarehouseManageTabsDetailsComponent = class WarehouseManageTabsDetailsComponent {
    constructor(_carrierRouter, _translateService) {
        this._carrierRouter = _carrierRouter;
        this._translateService = _translateService;
        this.carriersOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]), this._carrierRouter.getAllActive().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((carriers) => carriers
            .filter((c) => c.isSharedCarrier)
            .map((c) => {
            return {
                id: c.id,
                name: `${c.firstName} ${c.lastName}`,
            };
        }))));
        this._delivery = 'all';
    }
    get name() {
        return this.form.get('name');
    }
    get logo() {
        return this.form.get('logo');
    }
    get isActive() {
        return this.form.get('isActive');
    }
    get hasRestrictedCarriers() {
        return this.form.get('hasRestrictedCarriers');
    }
    get carriersIds() {
        return this.form.get('carriersIds');
    }
    get showLogoMeta() {
        return this.logo && this.logo.value !== '';
    }
    get isManufacturing() {
        return this.form.get('isManufacturing');
    }
    get isCarrierRequired() {
        return this.form.get('isCarrierRequired');
    }
    get useOnlyRestrictedCarriersForDelivery() {
        return this.form.get('useOnlyRestrictedCarriersForDelivery');
    }
    get preferRestrictedCarriersForDelivery() {
        return this.form.get('preferRestrictedCarriersForDelivery');
    }
    get delivery() {
        return this._delivery;
    }
    set delivery(value) {
        this._delivery = value;
        this.useOnlyRestrictedCarriersForDelivery.setValue(false);
        this.preferRestrictedCarriersForDelivery.setValue(false);
        switch (value) {
            case 'onlyStore':
                this.useOnlyRestrictedCarriersForDelivery.setValue(true);
                break;
            case 'preferStore':
                this.preferRestrictedCarriersForDelivery.setValue(true);
                break;
        }
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            name: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255),
                ],
            ],
            logo: [
                '',
                [
                    (control) => {
                        const imageUrl = control.value;
                        if (!is_url__WEBPACK_IMPORTED_MODULE_9___default()(imageUrl) && !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(imageUrl)) {
                            return { invalidUrl: true };
                        }
                        return null;
                    },
                ],
            ],
            isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isManufacturing: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isCarrierRequired: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            hasRestrictedCarriers: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            useOnlyRestrictedCarriersForDelivery: [false],
            preferRestrictedCarriersForDelivery: [false],
            carriersIds: [[]],
        });
    }
    ngOnInit() {
        this.getUploaderPlaceholderText();
    }
    ngAfterViewInit() {
        this._setupLogoUrlValidation();
    }
    getValue() {
        const basicInfo = this.form.getRawValue();
        return Object.assign(Object.assign({ isActive: basicInfo.isActive, isManufacturing: basicInfo.isManufacturing, isCarrierRequired: basicInfo.isCarrierRequired, name: basicInfo.name, logo: basicInfo.logo }, (basicInfo.hasRestrictedCarriers
            ? {
                hasRestrictedCarriers: basicInfo.hasRestrictedCarriers,
                carriersIds: basicInfo.carriersIds,
            }
            : {})), (basicInfo.hasRestrictedCarriers &&
            basicInfo.carriersIds &&
            basicInfo.carriersIds.length
            ? {
                useOnlyRestrictedCarriersForDelivery: basicInfo.useOnlyRestrictedCarriersForDelivery,
                preferRestrictedCarriersForDelivery: basicInfo.preferRestrictedCarriersForDelivery,
            }
            : {
                useOnlyRestrictedCarriersForDelivery: false,
                preferRestrictedCarriersForDelivery: false,
            }));
    }
    setValue(basicInfo) {
        _forms_helpers__WEBPACK_IMPORTED_MODULE_6__["FormHelpers"].deepMark(this.form, 'dirty');
        basicInfo = Object.assign({
            useOnlyRestrictedCarriersForDelivery: false,
            preferRestrictedCarriersForDelivery: false,
        }, basicInfo);
        this.form.setValue(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.pick(basicInfo, [
            ...Object.keys(this.getValue()),
            'hasRestrictedCarriers',
            'carriersIds',
            'useOnlyRestrictedCarriersForDelivery',
            'preferRestrictedCarriersForDelivery',
        ]));
        const onlyStore = basicInfo.useOnlyRestrictedCarriersForDelivery;
        const preferStore = basicInfo.preferRestrictedCarriersForDelivery;
        if (onlyStore) {
            this.delivery = 'onlyStore';
        }
        else if (preferStore) {
            this.delivery = 'preferStore';
        }
        else {
            this.delivery = 'all';
        }
    }
    deleteImg() {
        this.logo.setValue('');
    }
    _setupLogoUrlValidation() {
        this.logoPreviewElement.nativeElement.onload = () => {
            this.logo.setErrors(null);
        };
        this.logoPreviewElement.nativeElement.onerror = () => {
            if (this.showLogoMeta) {
                this.logo.setErrors({ invalidUrl: true });
            }
        };
    }
    getUploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._translateService
                .get(['WAREHOUSE_VIEW.MUTATION.PHOTO', 'OPTIONAL'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            this.uploaderPlaceholder = `${res['WAREHOUSE_VIEW.MUTATION.PHOTO']} (${res['OPTIONAL']})`;
        });
    }
};
WarehouseManageTabsDetailsComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WarehouseManageTabsDetailsComponent.prototype, "fileInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoPreview'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WarehouseManageTabsDetailsComponent.prototype, "logoPreviewElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], WarehouseManageTabsDetailsComponent.prototype, "form", void 0);
WarehouseManageTabsDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-manage-tabs-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-manage-tabs-details.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-manage-tabs-details.component.scss */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
], WarehouseManageTabsDetailsComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvd2FyZWhvdXNlL2Zvcm1zL3dhcmVob3VzZS1tYW5hZ2UtdGFicy93YXJlaG91c2UtbWFuYWdlLXRhYnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WarehouseManageTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseManageTabsComponent", function() { return WarehouseManageTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _details_warehouse_manage_tabs_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/warehouse-manage-tabs-details.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/details/warehouse-manage-tabs-details.component.ts");
/* harmony import */ var _account_warehouse_manage_tabs_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/warehouse-manage-tabs-account.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/account/warehouse-manage-tabs-account.component.ts");
/* harmony import */ var _contact_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact-info */ "./src/app/@shared/warehouse/forms/contact-info/index.ts");
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _delivery_areas_warehouse_manage_tabs_delivery_areas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delivery-areas/warehouse-manage-tabs-delivery-areas.component */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/delivery-areas/warehouse-manage-tabs-delivery-areas.component.ts");
/* harmony import */ var _payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payments-settings/payments-settings-form.component */ "./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.ts");









let WarehouseManageTabsComponent = class WarehouseManageTabsComponent {
    constructor() {
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            details: _details_warehouse_manage_tabs_details_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseManageTabsDetailsComponent"].buildForm(formBuilder),
            account: _account_warehouse_manage_tabs_account_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseManageTabsAccountComponent"].buildForm(formBuilder),
            contactInfo: _contact_info__WEBPACK_IMPORTED_MODULE_5__["ContactInfoFormComponent"].buildForm(formBuilder),
            location: _forms_location__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"].buildForm(formBuilder),
            deliverAreas: _delivery_areas_warehouse_manage_tabs_delivery_areas_component__WEBPACK_IMPORTED_MODULE_7__["WarehouseManageTabsDeliveryAreasComponent"].buildForm(formBuilder),
        });
    }
    get details() {
        return this.form.get('details');
    }
    get account() {
        return this.form.get('account');
    }
    get contactInfo() {
        return this.form.get('contactInfo');
    }
    get location() {
        return this.form.get('location');
    }
    get validForm() {
        return (this.form.valid &&
            this.contactInfoForm.validForm &&
            this.paymentsSettingsForm.isPaymentValid);
    }
    get deliveryAreas() {
        return this.form.get('deliverAreas');
    }
    onCoordinatesChanges(coords) {
        this.mapCoordEmitter.emit(coords);
    }
    onGeometrySend(geometry) {
        this.mapGeometryEmitter.emit(geometry);
    }
    getValue() {
        const geoLocationInput = this.locationForm.getValue();
        geoLocationInput.loc.coordinates.reverse();
        const detailsRaw = this.detailsComponent.getValue();
        const accountRaw = this.accountComponent.getValue();
        const contactRaw = this.contactInfoForm.getValue();
        const locationRaw = geoLocationInput;
        const deliveryAreasRaw = this.deliveryAreasForm.getValue();
        const inputResult = {
            basicInfo: Object.assign(Object.assign({}, detailsRaw), { username: accountRaw.username }),
            password: accountRaw.password,
            contactInfo: contactRaw,
            location: locationRaw,
            deliveryAreas: deliveryAreasRaw,
            isPaymentEnabled: this.paymentsSettingsForm.isPaymentEnabled,
            paymentsGateways: this.paymentsSettingsForm.paymentsGateways,
        };
        return inputResult;
    }
    setValue(warehouse) {
        const geoLocationInput = warehouse.geoLocation;
        geoLocationInput.loc.coordinates.reverse();
        this.detailsComponent.setValue(warehouse);
        this.accountComponent.setValue(warehouse.username);
        this.contactInfoForm.setValue(warehouse);
        this.locationForm.setValue(geoLocationInput);
        this.deliveryAreasForm.setValue(warehouse.deliveryAreas);
        this.paymentsSettingsForm.setValue(warehouse);
    }
    warehouseUpdateFinish() {
        this.tabSet.tabs._results[0].activeValue = true;
        this.tabSet.tabs._results[1].activeValue = false;
        this.tabSet.tabs._results[2].activeValue = false;
        this.tabSet.tabs._results[3].activeValue = false;
        this.tabSet.tabs._results[4].activeValue = false;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], WarehouseManageTabsComponent.prototype, "form", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('detailsComponent'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _details_warehouse_manage_tabs_details_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseManageTabsDetailsComponent"])
], WarehouseManageTabsComponent.prototype, "detailsComponent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accountComponent'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _account_warehouse_manage_tabs_account_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseManageTabsAccountComponent"])
], WarehouseManageTabsComponent.prototype, "accountComponent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactInfoForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _contact_info__WEBPACK_IMPORTED_MODULE_5__["ContactInfoFormComponent"])
], WarehouseManageTabsComponent.prototype, "contactInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms_location__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"])
], WarehouseManageTabsComponent.prototype, "locationForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentsSettingsForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_8__["PaymentsSettingsFormComponent"])
], WarehouseManageTabsComponent.prototype, "paymentsSettingsForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deliveryAreasForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _delivery_areas_warehouse_manage_tabs_delivery_areas_component__WEBPACK_IMPORTED_MODULE_7__["WarehouseManageTabsDeliveryAreasComponent"])
], WarehouseManageTabsComponent.prototype, "deliveryAreasForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabSet'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseManageTabsComponent.prototype, "tabSet", void 0);
WarehouseManageTabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-manage-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-manage-tabs.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-manage-tabs.component.scss */ "./src/app/@shared/warehouse/forms/warehouse-manage-tabs/warehouse-manage-tabs.component.scss")).default]
    })
], WarehouseManageTabsComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/warehouse-mutation/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/@shared/warehouse/warehouse-mutation/index.ts ***!
  \***************************************************************/
/*! exports provided: WarehouseMutationComponent, WarehouseMutationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-mutation.component */ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseMutationComponent", function() { return _warehouse_mutation_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseMutationComponent"]; });

/* harmony import */ var _warehouse_mutation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-mutation.module */ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseMutationModule", function() { return _warehouse_mutation_module__WEBPACK_IMPORTED_MODULE_2__["WarehouseMutationModule"]; });






/***/ }),

/***/ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42a948;\n}\n\n:host ::ng-deep .card-footer button {\n  cursor: pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS93YXJlaG91c2UtbXV0YXRpb24vd2FyZWhvdXNlLW11dGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3dhcmVob3VzZS93YXJlaG91c2UtbXV0YXRpb24vd2FyZWhvdXNlLW11dGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVDLDhCQUE4QjtBQ0MvQjs7QURFQTtFQUNDLDBCQUEwQjtBQ0MzQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvd2FyZWhvdXNlL3dhcmVob3VzZS1tdXRhdGlvbi93YXJlaG91c2UtbXV0YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJhOTQ4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtZm9vdGVyIGJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuIiwiLm5nLXZhbGlkW3JlcXVpcmVkXSxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyYTk0ODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZvb3RlciBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WarehouseMutationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseMutationComponent", function() { return WarehouseMutationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms */ "./src/app/@shared/warehouse/forms/index.ts");
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _forms_payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/payments-settings/payments-settings-form.component */ "./src/app/@shared/warehouse/forms/payments-settings/payments-settings-form.component.ts");










let WarehouseMutationComponent = class WarehouseMutationComponent {
    constructor(activeModal, formBuilder, toasterService, warehouseRouter, _translateService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.warehouseRouter = warehouseRouter;
        this._translateService = _translateService;
        this.BUTTON_DONE = 'BUTTON_DONE';
        this.BUTTON_NEXT = 'BUTTON_NEXT';
        this.BUTTON_PREV = 'BUTTON_PREV';
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.formBuilder.group({
            basicInfo: _forms__WEBPACK_IMPORTED_MODULE_6__["BasicInfoFormComponent"].buildForm(this.formBuilder),
            password: _forms__WEBPACK_IMPORTED_MODULE_6__["BasicInfoFormComponent"].buildPasswordForm(this.formBuilder),
            contactInfo: _forms__WEBPACK_IMPORTED_MODULE_6__["ContactInfoFormComponent"].buildForm(this.formBuilder),
            location: _forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormComponent"].buildForm(this.formBuilder),
        });
        this.basicInfo = this.form.get('basicInfo');
        this.contactInfo = this.form.get('contactInfo');
        this.location = this.form.get('location');
        this.password = this.form.get('password');
    }
    get buttonDone() {
        return this._translate(this.BUTTON_DONE);
    }
    get buttonNext() {
        return this._translate(this.BUTTON_NEXT);
    }
    get buttonPrevious() {
        return this._translate(this.BUTTON_PREV);
    }
    get isValidContactInfo() {
        return this.contactInfoForm.validForm !== undefined
            ? this.contactInfoForm.validForm
            : true;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const elementRef = document.querySelector('body > div.pac-container.pac-logo');
            if (elementRef) {
                elementRef['style']['zIndex'] = 10000;
            }
        }, 2000);
        if (this.locationForm) {
            this.locationForm.setDefaultCoords();
        }
    }
    onCoordinatesChanges(coords) {
        this.mapCoordEmitter.emit(coords);
    }
    onGeometrySend(geometry) {
        this.mapGeometryEmitter.emit(geometry);
    }
    createWarehouse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const geoLocationInput = this.locationForm.getValue();
                geoLocationInput.loc.coordinates.reverse();
                this.loading = true;
                const w = yield this.warehouseRouter.register({
                    warehouse: Object.assign(Object.assign(Object.assign({}, this.basicInfoForm.getValue()), this.contactInfoForm.getValue()), { geoLocation: geoLocationInput, isPaymentEnabled: this.paymentsSettingsForm
                            .isPaymentEnabled, paymentGateways: this.paymentsSettingsForm.paymentsGateways }),
                    password: this.basicInfoForm.getPassword(),
                });
                this.loading = false;
                this.toasterService.pop('success', `Warehouse ${w.name} was created!`);
                this.activeModal.close();
            }
            catch (err) {
                this.loading = false;
                this.toasterService.pop('error', `Error in creating warehouse: "${err.message}"`);
            }
        });
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    _translate(key) {
        let translationResult = '';
        this._translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
};
WarehouseMutationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
    { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseRouter"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms__WEBPACK_IMPORTED_MODULE_6__["BasicInfoFormComponent"])
], WarehouseMutationComponent.prototype, "basicInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactInfoForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms__WEBPACK_IMPORTED_MODULE_6__["ContactInfoFormComponent"])
], WarehouseMutationComponent.prototype, "contactInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormComponent"])
], WarehouseMutationComponent.prototype, "locationForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentsSettingsForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms_payments_settings_payments_settings_form_component__WEBPACK_IMPORTED_MODULE_9__["PaymentsSettingsFormComponent"])
], WarehouseMutationComponent.prototype, "paymentsSettingsForm", void 0);
WarehouseMutationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-mutation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-mutation.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-mutation.component.scss */ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
        _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseRouter"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
], WarehouseMutationComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WarehouseMutationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseMutationModule", function() { return WarehouseMutationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _warehouse_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-mutation.component */ "./src/app/@shared/warehouse/warehouse-mutation/warehouse-mutation.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms */ "./src/app/@shared/warehouse/forms/index.ts");
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../forms/google-map/google-map.module */ "./src/app/@shared/forms/google-map/google-map.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");










let WarehouseMutationModule = class WarehouseMutationModule {
};
WarehouseMutationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            _forms__WEBPACK_IMPORTED_MODULE_6__["WarehouseFormsModule"],
            _forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormModule"],
            _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__["GoogleMapModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSpinnerModule"],
        ],
        exports: [_warehouse_mutation_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseMutationComponent"]],
        declarations: [_warehouse_mutation_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseMutationComponent"]],
        entryComponents: [_warehouse_mutation_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseMutationComponent"]],
    })
], WarehouseMutationModule);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-simulation-simulation-module~app-pages-warehouses-warehouses-module~customer-custo~3ac61467-es2015.js.map