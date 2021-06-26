(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projekte\Universität\PWA\note-app\src\main.ts */"zUnb");


/***/ }),

/***/ "8ZTx":
/*!************************************************!*\
  !*** ./src/app/note-add/note-add.component.ts ***!
  \************************************************/
/*! exports provided: NoteAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteAddComponent", function() { return NoteAddComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../note */ "hbpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _remote_managing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../remote-managing.service */ "t4z3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = ["closeButton"];
class NoteAddComponent {
    constructor(managingService) {
        this.managingService = managingService;
        this.faAdd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.model = new _note__WEBPACK_IMPORTED_MODULE_1__["Note"](0, '', '', 0, 0);
        this.submitted = false;
    }
    onSubmit(form) {
        this.closeButton.nativeElement.click();
        console.log(this.model);
        this.managingService.addNote(this.model, form).then(r => r);
        this.submitted = true;
    }
    ngOnInit() {
    }
}
NoteAddComponent.ɵfac = function NoteAddComponent_Factory(t) { return new (t || NoteAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_remote_managing_service__WEBPACK_IMPORTED_MODULE_3__["RemoteManagingService"])); };
NoteAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NoteAddComponent, selectors: [["app-note-add"]], viewQuery: function NoteAddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
    } }, decls: 28, vars: 4, consts: [[1, "footer", "fixed-right"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#newNoteModal", "title", "new Note", 1, "btn", "btn-pink", "rounded-circle"], ["size", "3x", 3, "icon"], ["id", "newNoteModal", "tabindex", "-1", "aria-labelledby", "noteLabel", "aria-hidden", "true", 1, "modal"], [1, "modal-dialog", "modal-xl"], [3, "ngSubmit"], ["noteForm", "ngForm"], [1, "modal-content"], [1, "modal-header"], [1, "mb-3"], ["id", "noteLabel", 1, "modal-title", "d-inline-flex", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "required", "", "name", "title", "placeholder", "Note title ...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "message", 1, "form-label"], ["id", "message", "rows", "7", "required", "", "name", "message", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "pt-0"], ["type", "submit", 1, "btn", "btn-pink", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["closeButton", ""]], template: function NoteAddComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NoteAddComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Create new note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Note title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NoteAddComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Note text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NoteAddComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.model.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Save note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLWFkZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "OdHV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MessagesComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2);
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessagesComponent_div_0_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "btn", "btn-pink", 3, "click"], ["class", "alert alert-info mt-2", "role", "alert", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-info", "mt-2"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "OdHV":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RU7T":
/*!******************************************************!*\
  !*** ./src/app/note-detail/note-detail.component.ts ***!
  \******************************************************/
/*! exports provided: NoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailComponent", function() { return NoteDetailComponent; });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../note */ "hbpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _remote_managing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remote-managing.service */ "t4z3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["closeButton"];
const _c1 = ["title"];
const _c2 = ["text"];
function NoteDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Title:\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Note text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "textarea", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteDetailComponent_div_4_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Delete note");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Save note");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx_r1.note.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.note.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("created: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 7, ctx_r1.note.created), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("last edited: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 9, ctx_r1.note.last_edited), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
} }
class NoteDetailComponent {
    constructor(managingService, title, text) {
        this.managingService = managingService;
        this.title = title;
        this.text = text;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.closeButton.nativeElement.click();
        if (this.note === undefined) {
            return;
        }
        const editedNote = new _note__WEBPACK_IMPORTED_MODULE_0__["Note"](this.note.id, this.title.nativeElement.value, this.text.nativeElement.value, this.note.created, this.note.last_edited);
        this.managingService.setNode(editedNote).then(r => r);
    }
    deleteNote() {
        if (this.note === undefined) {
            return;
        }
        this.managingService.deleteNote(this.note.id).then(r => r);
    }
}
NoteDetailComponent.ɵfac = function NoteDetailComponent_Factory(t) { return new (t || NoteDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_remote_managing_service__WEBPACK_IMPORTED_MODULE_2__["RemoteManagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NoteDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteDetailComponent, selectors: [["app-note-detail"]], viewQuery: function NoteDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
    } }, inputs: { note: "note" }, decls: 5, vars: 1, consts: [["id", "noteModal", "tabindex", "-1", "aria-labelledby", "noteLabel", "aria-hidden", "true", 1, "modal"], [1, "modal-dialog", "modal-xl"], [3, "ngSubmit"], ["noteForm", "ngForm"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header"], [1, "mb-3"], ["id", "noteLabel", 1, "modal-title", "d-inline-flex"], ["type", "text", "id", "noteTitle", "placeholder", "Note title", 1, "form-control", 3, "value"], ["title", ""], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["for", "noteText", 1, "form-label"], ["id", "noteText", "rows", "7", 1, "form-control"], ["text", ""], [1, "modal-footer", "pt-0"], [1, "w-100", "row", "fs-es"], [1, "col-6", "text-left"], [1, "col-6", "text-end"], ["type", "button", 1, "btn", "btn-danger", "force-left", 3, "click"], ["type", "submit", 1, "btn", "btn-pink", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["closeButton", ""]], template: function NoteDetailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NoteDetailComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NoteDetailComponent_div_4_Template, 31, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.note);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".force-left[_ngcontent-%COMP%] {\n  margin-right: 74%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGUtZGV0YWlsLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJub3RlLWRldGFpbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JjZS1sZWZ0XHJcbiAgbWFyZ2luLXJpZ2h0OiA3NCVcclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "DetJ");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _remote_managing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remote-managing.service */ "t4z3");
/* harmony import */ var _note_header_note_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-header/note-header.component */ "c45A");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes/notes.component */ "TEms");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AppComponent {
    constructor(auth, manager) {
        this.auth = auth;
        this.manager = manager;
        this.title = '(My™®©℠ Notes™®©℠)™®©℠';
    }
    ngOnInit() {
        window.addEventListener('online', this.onNetworkStatusChange.bind(this));
        window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
        this.auth.getLoginState();
    }
    onNetworkStatusChange() {
        // if app was offline and getting online and push the new notes to the server
        if (this.auth.getOfflineState() && !navigator.onLine) {
            this.manager.setNotes(this.manager.getOfflineNotes()).then();
        }
        this.auth.setOfflineState(!navigator.onLine);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_remote_managing_service__WEBPACK_IMPORTED_MODULE_3__["RemoteManagingService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[3, "title"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-note-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title);
    } }, directives: [_note_header_note_header_component__WEBPACK_IMPORTED_MODULE_4__["NoteHeaderComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "TEms":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _remote_managing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remote-managing.service */ "t4z3");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "OdHV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../note-detail/note-detail.component */ "RU7T");
/* harmony import */ var _note_add_note_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../note-add/note-add.component */ "8ZTx");






function NotesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const note_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", note_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r1.message.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 2, note_r1.message, 0, 60) + "..." : note_r1.message);
} }
class NotesComponent {
    constructor(managingService, messageService) {
        this.managingService = managingService;
        this.messageService = messageService;
        this.notes = [];
    }
    ngOnInit() {
        this.getNotes();
    }
    onSelect(note) {
        this.selectedNote = note;
        this.messageService.add(`NotesComponent: Selected note id=${note.id}`);
    }
    updateNote(note) {
        for (const existingNotes of this.notes) {
            if (existingNotes.id === note.id) {
                existingNotes.title = note.title;
                existingNotes.message = note.message;
                existingNotes.last_edited = note.last_edited;
                return;
            }
        }
        this.notes.push(note);
    }
    getNotes() {
        console.log('note.component: load notes');
        // TODO subscribe to managing service
        this.managingService.callback = this.updateNote.bind(this);
        this.managingService.getNotes().then(notes => this.notes = notes);
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_remote_managing_service__WEBPACK_IMPORTED_MODULE_1__["RemoteManagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 4, vars: 2, consts: [[1, "row", "row-cols-auto"], ["class", "card col-lg-2 col-md-3 m-lg-2", "data-bs-toggle", "modal", "data-bs-target", "#noteModal", 3, "click", 4, "ngFor", "ngForOf"], [3, "note"], ["data-bs-toggle", "modal", "data-bs-target", "#noteModal", 1, "card", "col-lg-2", "col-md-3", "m-lg-2", 3, "click"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesComponent_div_1_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-note-detail", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-note-add");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", ctx.selectedNote);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailComponent"], _note_add_note_add_component__WEBPACK_IMPORTED_MODULE_5__["NoteAddComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  transition: all 0.5s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  background-color: #0dcaf0;\n  color: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGVzLmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUFIRjtBQUlFO0VBQ0UseUJDdUNNO0VEdENOLGNDUU87QURWWCIsImZpbGUiOiJub3Rlcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCJcclxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIlxyXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiXHJcblxyXG4uY2FyZFxyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxuICAmOmhvdmVyXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3lhbi01MDBcclxuICAgIGNvbG9yOiAkZGFya1xyXG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyYXktY29sb3ItdmFyaWFibGVzXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGdyYXktY29sb3ItdmFyaWFibGVzXG5cbi8vIGZ1c3YtZGlzYWJsZVxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyYXktY29sb3JzLW1hcFxuJGdyYXlzOiAoXG4gIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgXCIyMDBcIjogJGdyYXktMjAwLFxuICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgXCI1MDBcIjogJGdyYXktNTAwLFxuICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgXCI4MDBcIjogJGdyYXktODAwLFxuICBcIjkwMFwiOiAkZ3JheS05MDBcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGdyYXktY29sb3JzLW1hcFxuLy8gZnVzdi1lbmFibGVcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbG9yLXZhcmlhYmxlc1xuJGJsdWU6ICAgICMwZDZlZmQgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNkNjMzODQgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE5ODc1NCAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMwZGNhZjAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbG9yLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sb3JzLW1hcFxuJGNvbG9yczogKFxuICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sb3JzLW1hcFxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvcnMtbWFwXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmtcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWNvbG9ycy1tYXBcblxuLy8gVGhlIGNvbnRyYXN0IHJhdGlvIHRvIHJlYWNoIGFnYWluc3Qgd2hpdGUsIHRvIGRldGVybWluZSBpZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJsaWdodFwiIHRvIFwiZGFya1wiLiBBY2NlcHRhYmxlIHZhbHVlcyBmb3IgV0NBRyAyLjAgYXJlIDMsIDQuNSBhbmQgNy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3RcbiRtaW4tY29udHJhc3QtcmF0aW86ICAgNC41ICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJGNvbG9yLWNvbnRyYXN0LWRhcms6ICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNvbG9yLWNvbnRyYXN0LWxpZ2h0OiAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBmdXN2LWRpc2FibGVcbiRibHVlLTEwMDogdGludC1jb2xvcigkYmx1ZSwgODAlKSAhZGVmYXVsdDtcbiRibHVlLTIwMDogdGludC1jb2xvcigkYmx1ZSwgNjAlKSAhZGVmYXVsdDtcbiRibHVlLTMwMDogdGludC1jb2xvcigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcbiRibHVlLTQwMDogdGludC1jb2xvcigkYmx1ZSwgMjAlKSAhZGVmYXVsdDtcbiRibHVlLTUwMDogJGJsdWUgIWRlZmF1bHQ7XG4kYmx1ZS02MDA6IHNoYWRlLWNvbG9yKCRibHVlLCAyMCUpICFkZWZhdWx0O1xuJGJsdWUtNzAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcbiRibHVlLTgwMDogc2hhZGUtY29sb3IoJGJsdWUsIDYwJSkgIWRlZmF1bHQ7XG4kYmx1ZS05MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA4MCUpICFkZWZhdWx0O1xuXG4kaW5kaWdvLTEwMDogdGludC1jb2xvcigkaW5kaWdvLCA4MCUpICFkZWZhdWx0O1xuJGluZGlnby0yMDA6IHRpbnQtY29sb3IoJGluZGlnbywgNjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tMzAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDQwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTQwMDogdGludC1jb2xvcigkaW5kaWdvLCAyMCUpICFkZWZhdWx0O1xuJGluZGlnby01MDA6ICRpbmRpZ28gIWRlZmF1bHQ7XG4kaW5kaWdvLTYwMDogc2hhZGUtY29sb3IoJGluZGlnbywgMjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNzAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA0MCUpICFkZWZhdWx0O1xuJGluZGlnby04MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDYwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTkwMDogc2hhZGUtY29sb3IoJGluZGlnbywgODAlKSAhZGVmYXVsdDtcblxuJHB1cnBsZS0xMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgODAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtMjAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDYwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTMwMDogdGludC1jb2xvcigkcHVycGxlLCA0MCUpICFkZWZhdWx0O1xuJHB1cnBsZS00MDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgMjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNTAwOiAkcHVycGxlICFkZWZhdWx0O1xuJHB1cnBsZS02MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDIwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTcwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgNDAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtODAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA2MCUpICFkZWZhdWx0O1xuJHB1cnBsZS05MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDgwJSkgIWRlZmF1bHQ7XG5cbiRwaW5rLTEwMDogdGludC1jb2xvcigkcGluaywgODAlKSAhZGVmYXVsdDtcbiRwaW5rLTIwMDogdGludC1jb2xvcigkcGluaywgNjAlKSAhZGVmYXVsdDtcbiRwaW5rLTMwMDogdGludC1jb2xvcigkcGluaywgNDAlKSAhZGVmYXVsdDtcbiRwaW5rLTQwMDogdGludC1jb2xvcigkcGluaywgMjAlKSAhZGVmYXVsdDtcbiRwaW5rLTUwMDogJHBpbmsgIWRlZmF1bHQ7XG4kcGluay02MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCAyMCUpICFkZWZhdWx0O1xuJHBpbmstNzAwOiBzaGFkZS1jb2xvcigkcGluaywgNDAlKSAhZGVmYXVsdDtcbiRwaW5rLTgwMDogc2hhZGUtY29sb3IoJHBpbmssIDYwJSkgIWRlZmF1bHQ7XG4kcGluay05MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA4MCUpICFkZWZhdWx0O1xuXG4kcmVkLTEwMDogdGludC1jb2xvcigkcmVkLCA4MCUpICFkZWZhdWx0O1xuJHJlZC0yMDA6IHRpbnQtY29sb3IoJHJlZCwgNjAlKSAhZGVmYXVsdDtcbiRyZWQtMzAwOiB0aW50LWNvbG9yKCRyZWQsIDQwJSkgIWRlZmF1bHQ7XG4kcmVkLTQwMDogdGludC1jb2xvcigkcmVkLCAyMCUpICFkZWZhdWx0O1xuJHJlZC01MDA6ICRyZWQgIWRlZmF1bHQ7XG4kcmVkLTYwMDogc2hhZGUtY29sb3IoJHJlZCwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtNzAwOiBzaGFkZS1jb2xvcigkcmVkLCA0MCUpICFkZWZhdWx0O1xuJHJlZC04MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDYwJSkgIWRlZmF1bHQ7XG4kcmVkLTkwMDogc2hhZGUtY29sb3IoJHJlZCwgODAlKSAhZGVmYXVsdDtcblxuJG9yYW5nZS0xMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgODAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtMjAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDYwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTMwMDogdGludC1jb2xvcigkb3JhbmdlLCA0MCUpICFkZWZhdWx0O1xuJG9yYW5nZS00MDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgMjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNTAwOiAkb3JhbmdlICFkZWZhdWx0O1xuJG9yYW5nZS02MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDIwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTcwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgNDAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtODAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA2MCUpICFkZWZhdWx0O1xuJG9yYW5nZS05MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDgwJSkgIWRlZmF1bHQ7XG5cbiR5ZWxsb3ctMTAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDgwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTIwMDogdGludC1jb2xvcigkeWVsbG93LCA2MCUpICFkZWZhdWx0O1xuJHllbGxvdy0zMDA6IHRpbnQtY29sb3IoJHllbGxvdywgNDAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNDAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDIwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTUwMDogJHllbGxvdyAhZGVmYXVsdDtcbiR5ZWxsb3ctNjAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy03MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDQwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTgwMDogc2hhZGUtY29sb3IoJHllbGxvdywgNjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctOTAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA4MCUpICFkZWZhdWx0O1xuXG4kZ3JlZW4tMTAwOiB0aW50LWNvbG9yKCRncmVlbiwgODAlKSAhZGVmYXVsdDtcbiRncmVlbi0yMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA2MCUpICFkZWZhdWx0O1xuJGdyZWVuLTMwMDogdGludC1jb2xvcigkZ3JlZW4sIDQwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNDAwOiB0aW50LWNvbG9yKCRncmVlbiwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi01MDA6ICRncmVlbiAhZGVmYXVsdDtcbiRncmVlbi02MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi03MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgNDAlKSAhZGVmYXVsdDtcbiRncmVlbi04MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgNjAlKSAhZGVmYXVsdDtcbiRncmVlbi05MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgODAlKSAhZGVmYXVsdDtcblxuJHRlYWwtMTAwOiB0aW50LWNvbG9yKCR0ZWFsLCA4MCUpICFkZWZhdWx0O1xuJHRlYWwtMjAwOiB0aW50LWNvbG9yKCR0ZWFsLCA2MCUpICFkZWZhdWx0O1xuJHRlYWwtMzAwOiB0aW50LWNvbG9yKCR0ZWFsLCA0MCUpICFkZWZhdWx0O1xuJHRlYWwtNDAwOiB0aW50LWNvbG9yKCR0ZWFsLCAyMCUpICFkZWZhdWx0O1xuJHRlYWwtNTAwOiAkdGVhbCAhZGVmYXVsdDtcbiR0ZWFsLTYwMDogc2hhZGUtY29sb3IoJHRlYWwsIDIwJSkgIWRlZmF1bHQ7XG4kdGVhbC03MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA0MCUpICFkZWZhdWx0O1xuJHRlYWwtODAwOiBzaGFkZS1jb2xvcigkdGVhbCwgNjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTkwMDogc2hhZGUtY29sb3IoJHRlYWwsIDgwJSkgIWRlZmF1bHQ7XG5cbiRjeWFuLTEwMDogdGludC1jb2xvcigkY3lhbiwgODAlKSAhZGVmYXVsdDtcbiRjeWFuLTIwMDogdGludC1jb2xvcigkY3lhbiwgNjAlKSAhZGVmYXVsdDtcbiRjeWFuLTMwMDogdGludC1jb2xvcigkY3lhbiwgNDAlKSAhZGVmYXVsdDtcbiRjeWFuLTQwMDogdGludC1jb2xvcigkY3lhbiwgMjAlKSAhZGVmYXVsdDtcbiRjeWFuLTUwMDogJGN5YW4gIWRlZmF1bHQ7XG4kY3lhbi02MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCAyMCUpICFkZWZhdWx0O1xuJGN5YW4tNzAwOiBzaGFkZS1jb2xvcigkY3lhbiwgNDAlKSAhZGVmYXVsdDtcbiRjeWFuLTgwMDogc2hhZGUtY29sb3IoJGN5YW4sIDYwJSkgIWRlZmF1bHQ7XG4kY3lhbi05MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA4MCUpICFkZWZhdWx0O1xuLy8gZnVzdi1lbmFibGVcblxuLy8gQ2hhcmFjdGVycyB3aGljaCBhcmUgZXNjYXBlZCBieSB0aGUgZXNjYXBlLXN2ZyBmdW5jdGlvblxuJGVzY2FwZWQtY2hhcmFjdGVyczogKFxuICAoXCI8XCIsIFwiJTNjXCIpLFxuICAoXCI+XCIsIFwiJTNlXCIpLFxuICAoXCIjXCIsIFwiJTIzXCIpLFxuICAoXCIoXCIsIFwiJTI4XCIpLFxuICAoXCIpXCIsIFwiJTI5XCIpLFxuKSAhZGVmYXVsdDtcblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVkdWNlZC1tb3Rpb246ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNtb290aC1zY3JvbGw6ICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtYnV0dG9uLXBvaW50ZXJzOiAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJmczogICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtbmVnYXRpdmUtbWFyZ2luczogICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllczogIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgOnJvb3QgQ1NTIHZhcmlhYmxlc1xuXG4kdmFyaWFibGUtcHJlZml4OiAgICAgICAgICAgICBicy0gIWRlZmF1bHQ7XG5cbi8vIEdyYWRpZW50XG4vL1xuLy8gVGhlIGdyYWRpZW50IHdoaWNoIGlzIGFkZGVkIHRvIGNvbXBvbmVudHMgaWYgYCRlbmFibGUtZ3JhZGllbnRzYCBpcyBgdHJ1ZWBcbi8vIFRoaXMgZ3JhZGllbnQgaXMgYWxzbyBhZGRlZCB0byBlbGVtZW50cyB3aXRoIGAuYmctZ3JhZGllbnRgXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdmFyaWFibGUtZ3JhZGllbnRcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgkd2hpdGUsIC4xNSksIHJnYmEoJHdoaXRlLCAwKSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHZhcmlhYmxlLWdyYWRpZW50XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgc3BhY2VyLXZhcmlhYmxlcy1tYXBzXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6IChcbiAgMDogMCxcbiAgMTogJHNwYWNlciAvIDQsXG4gIDI6ICRzcGFjZXIgLyAyLFxuICAzOiAkc3BhY2VyLFxuICA0OiAkc3BhY2VyICogMS41LFxuICA1OiAkc3BhY2VyICogMyxcbikgIWRlZmF1bHQ7XG5cbiRuZWdhdGl2ZS1zcGFjZXJzOiBpZigkZW5hYmxlLW5lZ2F0aXZlLW1hcmdpbnMsIG5lZ2F0aXZpZnktbWFwKCRzcGFjZXJzKSwgbnVsbCkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHNwYWNlci12YXJpYWJsZXMtbWFwc1xuXG4vLyBQb3NpdGlvblxuLy9cbi8vIERlZmluZSB0aGUgZWRnZSBwb3NpdGlvbmluZyBhbmNob3JzIG9mIHRoZSBwb3NpdGlvbiB1dGlsaXRpZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwb3NpdGlvbi1tYXBcbiRwb3NpdGlvbi12YWx1ZXM6IChcbiAgMDogMCxcbiAgNTA6IDUwJSxcbiAgMTAwOiAxMDAlXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwb3NpdGlvbi1tYXBcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kYm9keS10ZXh0LWFsaWduOiAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4kbGluay1zaGFkZS1wZXJjZW50YWdlOiAgICAgICAgICAgICAgICAgICAyMCUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBzaGlmdC1jb2xvcigkbGluay1jb2xvciwgJGxpbmstc2hhZGUtcGVyY2VudGFnZSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kc3RyZXRjaGVkLWxpbmstcHNldWRvLWVsZW1lbnQ6ICAgICAgICAgICBhZnRlciAhZGVmYXVsdDtcbiRzdHJldGNoZWQtbGluay16LWluZGV4OiAgICAgICAgICAgICAgICAgIDEgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyaWQtYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JpZC1icmVha3BvaW50c1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHhcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuJGd1dHRlcnM6ICRzcGFjZXJzICFkZWZhdWx0O1xuXG4vLyBDb250YWluZXIgcGFkZGluZ1xuXG4kY29udGFpbmVyLXBhZGRpbmcteDogJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXZhcmlhYmxlc1xuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci13aWR0aHM6IChcbiAgMTogMXB4LFxuICAyOiAycHgsXG4gIDM6IDNweCxcbiAgNDogNHB4LFxuICA1OiA1cHhcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiAgICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtdmFyaWFibGVzXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJldC12YXJpYWJsZXNcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sbGFwc2UtdHJhbnNpdGlvblxuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtdHJhbnNpdGlvblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbi8vIHNjc3MtZG9jcy1zdGFydCBhc3BlY3QtcmF0aW9zXG4kYXNwZWN0LXJhdGlvczogKFxuICBcIjF4MVwiOiAxMDAlLFxuICBcIjR4M1wiOiBjYWxjKDMgLyA0ICogMTAwJSksXG4gIFwiMTZ4OVwiOiBjYWxjKDkgLyAxNiAqIDEwMCUpLFxuICBcIjIxeDlcIjogY2FsYyg5IC8gMjEgKiAxMDAlKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYXNwZWN0LXJhdGlvc1xuLy8gc3R5bGVsaW50LWVuYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC12YXJpYWJsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICB2YXIoLS0jeyR2YXJpYWJsZS1wcmVmaXh9Zm9udC1zYW5zLXNlcmlmKSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1jb2RlOiAgICAgICAgICAgIHZhcigtLSN7JHZhcmlhYmxlLXByZWZpeH1mb250LW1vbm9zcGFjZSkgIWRlZmF1bHQ7XG5cbi8vICRmb250LXNpemUtcm9vdCBlZmZlY3RzIHRoZSB2YWx1ZSBvZiBgcmVtYCwgd2hpY2ggaXMgdXNlZCBmb3IgYXMgd2VsbCBmb250IHNpemVzLCBwYWRkaW5ncyBhbmQgbWFyZ2luc1xuLy8gJGZvbnQtc2l6ZS1iYXNlIGVmZmVjdHMgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgYm9keSB0ZXh0XG4kZm9udC1zaXplLXJvb3Q6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuODc1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDIgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9udC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvbnQtc2l6ZXNcbiRmb250LXNpemVzOiAoXG4gIDE6ICRoMS1mb250LXNpemUsXG4gIDI6ICRoMi1mb250LXNpemUsXG4gIDM6ICRoMy1mb250LXNpemUsXG4gIDQ6ICRoNC1mb250LXNpemUsXG4gIDU6ICRoNS1mb250LXNpemUsXG4gIDY6ICRoNi1mb250LXNpemVcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvbnQtc2l6ZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGhlYWRpbmdzLXZhcmlhYmxlc1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtc3R5bGU6ICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGhlYWRpbmdzLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZGlzcGxheS1oZWFkaW5nc1xuJGRpc3BsYXktZm9udC1zaXplczogKFxuICAxOiA1cmVtLFxuICAyOiA0LjVyZW0sXG4gIDM6IDRyZW0sXG4gIDQ6IDMuNXJlbSxcbiAgNTogM3JlbSxcbiAgNjogMi41cmVtXG4pICFkZWZhdWx0O1xuXG4kZGlzcGxheS1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZGlzcGxheS1oZWFkaW5nc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdHlwZS12YXJpYWJsZXNcbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIC44NzVlbSAhZGVmYXVsdDtcblxuJHN1Yi1zdXAtZm9udC1zaXplOiAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGluaXRpYWxpc20tZm9udC1zaXplOiAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGhyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRoci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaHItb3BhY2l0eTogICAgICAgICAgICAgICAgICAuMjUgIWRlZmF1bHQ7XG5cbiRsZWdlbmQtbWFyZ2luLWJvdHRvbTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGxlZ2VuZC1mb250LXNpemU6ICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGxlZ2VuZC1mb250LXdlaWdodDogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdHlwZS12YXJpYWJsZXNcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS12YXJpYWJsZXNcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jZWxsLXZlcnRpY2FsLWFsaWduOiAgIHRvcCAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtY29sb3I6ICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLXN0cmlwZWQtYmctZmFjdG9yOiAgICAgLjA1ICFkZWZhdWx0O1xuJHRhYmxlLXN0cmlwZWQtYmc6ICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1zdHJpcGVkLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY3RpdmUtY29sb3I6ICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmctZmFjdG9yOiAgICAgIC4xICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1hY3RpdmUtYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnLWZhY3RvcjogICAgICAgLjA3NSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtaG92ZXItYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci1mYWN0b3I6ICAgICAgICAgLjEgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtZ3JvdXAtc2VwYXJhdG9yLWNvbG9yOiBjdXJyZW50Q29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctc2NhbGU6ICAgICAgICAgICAgICAtODAlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0YWJsZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRhYmxlLWxvb3BcbiR0YWJsZS12YXJpYW50czogKFxuICBcInByaW1hcnlcIjogICAgc2hpZnQtY29sb3IoJHByaW1hcnksICR0YWJsZS1iZy1zY2FsZSksXG4gIFwic2Vjb25kYXJ5XCI6ICBzaGlmdC1jb2xvcigkc2Vjb25kYXJ5LCAkdGFibGUtYmctc2NhbGUpLFxuICBcInN1Y2Nlc3NcIjogICAgc2hpZnQtY29sb3IoJHN1Y2Nlc3MsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwiaW5mb1wiOiAgICAgICBzaGlmdC1jb2xvcigkaW5mbywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJ3YXJuaW5nXCI6ICAgIHNoaWZ0LWNvbG9yKCR3YXJuaW5nLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImRhbmdlclwiOiAgICAgc2hpZnQtY29sb3IoJGRhbmdlciwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgXCJkYXJrXCI6ICAgICAgICRkYXJrLFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGFibGUtbG9vcFxuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgaW5wdXQtYnRuLXZhcmlhYmxlc1xuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yLW9wYWNpdHk6IC4yNSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgJGlucHV0LWJ0bi1mb2N1cy1jb2xvci1vcGFjaXR5KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYmx1cjogICAgICAgICAgMCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogICAgMCAwICRpbnB1dC1idG4tZm9jdXMtYmx1ciAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaW5wdXQtYnRuLXZhcmlhYmxlc1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJ0bi12YXJpYWJsZXNcbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGJ0bi13aGl0ZS1zcGFjZTogICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1jb2xvcjogICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJGJ0bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kYnRuLWhvdmVyLWJnLXNoYWRlLWFtb3VudDogICAgICAgMTUlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1iZy10aW50LWFtb3VudDogICAgICAgIDE1JSAhZGVmYXVsdDtcbiRidG4taG92ZXItYm9yZGVyLXNoYWRlLWFtb3VudDogICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJvcmRlci10aW50LWFtb3VudDogICAgMTAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYmctc2hhZGUtYW1vdW50OiAgICAgIDIwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJnLXRpbnQtYW1vdW50OiAgICAgICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3JkZXItc2hhZGUtYW1vdW50OiAgMjUlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm9yZGVyLXRpbnQtYW1vdW50OiAgIDEwJSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYnRuLXZhcmlhYmxlc1xuXG5cbi8vIEZvcm1zXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXRleHQtdmFyaWFibGVzXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtc3R5bGU6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXRleHQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWxhYmVsLXZhcmlhYmxlc1xuJGZvcm0tbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXN0eWxlOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tbGFiZWwtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWlucHV0LXZhcmlhYmxlc1xuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA1MCUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1pbnB1dC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tY2hlY2stdmFyaWFibGVzXG4kZm9ybS1jaGVjay1pbnB1dC13aWR0aDogICAgICAgICAgICAgICAgICAxZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1taW4taGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXBhZGRpbmctc3RhcnQ6ICAgICAgICAgICAgICAgICRmb3JtLWNoZWNrLWlucHV0LXdpZHRoICsgLjVlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1sYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbGFiZWwtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWFjdGl2ZS1maWx0ZXI6ICAgICAgICAgIGJyaWdodG5lc3MoOTAlKSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtYm9yZGVyOiAgICAgICAgICAgICAgICAgMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjI1KSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stcmFkaW8tYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm9yZGVyOiAgICAgICAgICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcjogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAgICRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nTTYgMTBsMyAzbDYtNicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXJhZGlvLWNoZWNrZWQtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzInIGZpbGw9JyN7JGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogICAkZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwaDgnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC1kaXNhYmxlZC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stYnRuLWNoZWNrLWRpc2FibGVkLW9wYWNpdHk6ICAgICRidG4tZGlzYWJsZWQtb3BhY2l0eSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi1lbmQ6ICAgIDFyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tY2hlY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcbiRmb3JtLXN3aXRjaC1jb2xvcjogICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4yNSkgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgMmVtICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXBhZGRpbmctc3RhcnQ6ICAgICAgICRmb3JtLXN3aXRjaC13aWR0aCArIC41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtYmctaW1hZ2U6ICAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWJvcmRlci1yYWRpdXM6ICAgICAgICRmb3JtLXN3aXRjaC13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC10cmFuc2l0aW9uOiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXN3aXRjaC1mb2N1cy1jb2xvcjogICAgICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWZvY3VzLWJnLWltYWdlOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWZvY3VzLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tc3dpdGNoLWNoZWNrZWQtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctaW1hZ2U6ICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctcG9zaXRpb246IHJpZ2h0IGNlbnRlciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1zd2l0Y2gtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1ncm91cC12YXJpYWJsZXNcbiRpbnB1dC1ncm91cC1hZGRvbi1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaW5wdXQtZ3JvdXAtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXNlbGVjdC12YXJpYWJsZXNcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAgICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggKiAzICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIGZvciBiYWNrZ3JvdW5kLWltYWdlXG4kZm9ybS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZy1wb3NpdGlvbjogICAgICAgICAgIHJpZ2h0ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgICAgMTZweCAxMnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTIgNWw2IDYgNi02Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLWVuZDogJGZvcm0tc2VsZWN0LXBhZGRpbmcteCAqIDIuNSArICRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICBjZW50ZXIgcmlnaHQgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkZm9ybS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tc2VsZWN0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1yYW5nZS12YXJpYWJsZXNcbiRmb3JtLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRmb3JtLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBFZGdlXG4kZm9ybS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgdGludC1jb2xvcigkY29tcG9uZW50LWFjdGl2ZS1iZywgNzAlKSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXJhbmdlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1maWxlLXZhcmlhYmxlc1xuJGZvcm0tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kZm9ybS1maWxlLWJ1dHRvbi1ob3Zlci1iZzogICAgICAgc2hhZGUtY29sb3IoJGZvcm0tZmlsZS1idXR0b24tYmcsIDUlKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1maWxlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1mbG9hdGluZy12YXJpYWJsZXNcbiRmb3JtLWZsb2F0aW5nLWhlaWdodDogICAgICAgICAgICBhZGQoMy41cmVtLCAkaW5wdXQtaGVpZ2h0LWJvcmRlcikgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1wYWRkaW5nLXg6ICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXBhZGRpbmcteTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy10OiAgIDEuNjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy1iOiAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1sYWJlbC1vcGFjaXR5OiAgICAgLjY1ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGFiZWwtdHJhbnNmb3JtOiAgIHNjYWxlKC44NSkgdHJhbnNsYXRlWSgtLjVyZW0pIHRyYW5zbGF0ZVgoLjE1cmVtKSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1mbG9hdGluZy12YXJpYWJsZXNcblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZlZWRiYWNrLXZhcmlhYmxlc1xuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvcm0tdGV4dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXN0eWxlOiAgICAgICAgICAkZm9ybS10ZXh0LWZvbnQtc3R5bGUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgICRkYW5nZXIgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDEyJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9Jz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWZlZWRiYWNrLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IChcbiAgXCJ2YWxpZFwiOiAoXG4gICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICApLFxuICBcImludmFsaWRcIjogKFxuICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXG4gIClcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgemluZGV4LXN0YWNrXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW9mZmNhbnZhczogICAgICAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA4MCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgemluZGV4LXN0YWNrXG5cblxuLy8gTmF2c1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2LXZhcmlhYmxlc1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRuYXYtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbmF2LWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRuYXYtbGluay10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2LXZhcmlhYmxlc1xuXG5cbi8vIE5hdmJhclxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLXZhcmlhYmxlc1xuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLW1hcmdpbi1lbmQ6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvY3VzLXdpZHRoOiAgICAgICAgJGJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci10cmFuc2l0aW9uOiAgICAgICAgIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLXRoZW1lLXZhcmlhYmxlc1xuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdmJhci10aGVtZS12YXJpYWJsZXNcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkcm9wZG93bi12YXJpYWJsZXNcbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgc2hhZGUtY29sb3IoJGdyYXktOTAwLCAxMCUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgICRzcGFjZXIgLyA0ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgJGRyb3Bkb3duLXBhZGRpbmcteSAkZHJvcGRvd24taXRlbS1wYWRkaW5nLXggIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGRyb3Bkb3duLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tZGFyay12YXJpYWJsZXNcbiRkcm9wZG93bi1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJvcmRlci1jb2xvcjogICAgICAgICRkcm9wZG93bi1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1kaXZpZGVyLWJnOiAgICAgICAgICAkZHJvcGRvd24tZGl2aWRlci1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJveC1zaGFkb3c6ICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWNvbG9yOiAgICAgICAgICAkZHJvcGRvd24tZGFyay1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstaG92ZXItY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstaG92ZXItYmc6ICAgICAgIHJnYmEoJHdoaXRlLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtY29sb3I6ICAgJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtYmc6ICAgICAgJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstaGVhZGVyLWNvbG9yOiAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBkcm9wZG93bi1kYXJrLXZhcmlhYmxlc1xuXG5cbi8vIFBhZ2luYXRpb25cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBhZ2luYXRpb24tdmFyaWFibGVzXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbWFyZ2luLXN0YXJ0OiAgICAgICAgICAgLSRwYWdpbmF0aW9uLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwYWdpbmF0aW9uLXZhcmlhYmxlc1xuXG5cbi8vIENhcmRzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjYXJkLXZhcmlhYmxlc1xuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS1zcGFjZXIteTogICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteCAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNhcmQtdmFyaWFibGVzXG5cbi8vIEFjY29yZGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYWNjb3JkaW9uLXZhcmlhYmxlc1xuJGFjY29yZGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgc3VidHJhY3QoJGFjY29yZGlvbi1ib3JkZXItcmFkaXVzLCAkYWNjb3JkaW9uLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICRhY2NvcmRpb24tcGFkZGluZy15ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLXBhZGRpbmcteTogICAgICAgICAgICAgICRhY2NvcmRpb24tcGFkZGluZy15ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy14OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYmc6ICAgICAgICAgICAgICAgICAgICAgJGFjY29yZGlvbi1iZyAhZGVmYXVsdDtcbiRhY2NvcmRpb24tdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiwgYm9yZGVyLXJhZGl1cyAuMTVzIGVhc2UgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA5MCUpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgc2hhZGUtY29sb3IoJHByaW1hcnksIDEwJSkgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24taWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi10cmFuc2Zvcm06ICAgICAgICAgICAgICAgIHJvdGF0ZSgxODBkZWcpICFkZWZhdWx0O1xuXG4kYWNjb3JkaW9uLWJ1dHRvbi1pY29uOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRhY2NvcmRpb24taWNvbi1jb2xvcn0nPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1pY29uOiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGFjY29yZGlvbi1pY29uLWFjdGl2ZS1jb2xvcn0nPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYWNjb3JkaW9uLXZhcmlhYmxlc1xuXG4vLyBUb29sdGlwc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdG9vbHRpcC12YXJpYWJsZXNcbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gNCAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0b29sdGlwLXZhcmlhYmxlc1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdG9vbHRpcC1mZWVkYmFjay12YXJpYWJsZXNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1zdGFydCB0b29sdGlwLWZlZWRiYWNrLXZhcmlhYmxlc1xuXG5cbi8vIFBvcG92ZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwb3BvdmVyLXZhcmlhYmxlc1xuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgIHN1YnRyYWN0KCRwb3BvdmVyLWJvcmRlci1yYWRpdXMsICRwb3BvdmVyLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgc2hhZGUtY29sb3IoJHBvcG92ZXItYmcsIDYlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwb3BvdmVyLXZhcmlhYmxlc1xuXG5cbi8vIFRvYXN0c1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdG9hc3QtdmFyaWFibGVzXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcbiR0b2FzdC1zcGFjaW5nOiAgICAgICAgICAgICAgICAgICAgICRjb250YWluZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdG9hc3QtdmFyaWFibGVzXG5cblxuLy8gQmFkZ2VzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBiYWRnZS12YXJpYWJsZXNcbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC43NWVtICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMzVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC42NWVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJhZGdlLXZhcmlhYmxlc1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbW9kYWwtdmFyaWFibGVzXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgJGJveC1zaGFkb3ctc20gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBtb2RhbC12YXJpYWJsZXNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGFsZXJ0LXZhcmlhYmxlc1xuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kYWxlcnQtYmctc2NhbGU6ICAgICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXNjYWxlOiAgICAgICAgICAgIC03MCUgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3Itc2NhbGU6ICAgICAgICAgICAgIDQwJSAhZGVmYXVsdDtcbiRhbGVydC1kaXNtaXNzaWJsZS1wYWRkaW5nLXI6ICAgJGFsZXJ0LXBhZGRpbmcteCAqIDMgIWRlZmF1bHQ7IC8vIDN4IGNvdmVycyB3aWR0aCBvZiB4IHBsdXMgZGVmYXVsdCBwYWRkaW5nIG9uIGVpdGhlciBzaWRlXG4vLyBzY3NzLWRvY3MtZW5kIGFsZXJ0LXZhcmlhYmxlc1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHByb2dyZXNzLXZhcmlhYmxlc1xuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwcm9ncmVzcy12YXJpYWJsZXNcblxuXG4vLyBMaXN0IGdyb3VwXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBsaXN0LWdyb3VwLXZhcmlhYmxlc1xuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLWJnLXNjYWxlOiAgICAgICAgICAtODAlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1jb2xvci1zY2FsZTogICAgICAgNDAlICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbGlzdC1ncm91cC12YXJpYWJsZXNcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aHVtYm5haWwtdmFyaWFibGVzXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgICRib3gtc2hhZG93LXNtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aHVtYm5haWwtdmFyaWFibGVzXG5cblxuLy8gRmlndXJlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZmlndXJlLXZhcmlhYmxlc1xuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZmlndXJlLXZhcmlhYmxlc1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBicmVhZGNydW1iLXZhcmlhYmxlc1xuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItZmxpcHBlZDogICAgICAgICRicmVhZGNydW1iLWRpdmlkZXIgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBicmVhZGNydW1iLXZhcmlhYmxlc1xuXG4vLyBDYXJvdXNlbFxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2Fyb3VzZWwtdmFyaWFibGVzXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1vcGFjaXR5OiAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLW9wYWNpdHk6ICAxICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tcGFkZGluZy15OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1zcGFjZXI6ICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nPjxwYXRoIGQ9J00xMS4zNTQgMS42NDZhLjUuNSAwIDAgMSAwIC43MDhMNS43MDcgOGw1LjY0NyA1LjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC02LTZhLjUuNSAwIDAgMSAwLS43MDhsNi02YS41LjUgMCAwIDEgLjcwOCAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nPjxwYXRoIGQ9J000LjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA0LjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG4kY2Fyb3VzZWwtZGFyay1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgJGJsYWNrICFkZWZhdWx0O1xuJGNhcm91c2VsLWRhcmstY2FwdGlvbi1jb2xvcjogICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjYXJvdXNlbC1kYXJrLWNvbnRyb2wtaWNvbi1maWx0ZXI6ICBpbnZlcnQoMSkgZ3JheXNjYWxlKDEwMCkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNhcm91c2VsLXZhcmlhYmxlc1xuXG5cbi8vIFNwaW5uZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBzcGlubmVyLXZhcmlhYmxlc1xuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogICAgLjI1ZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1hbmltYXRpb24tc3BlZWQ6IC43NXMgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHNwaW5uZXItdmFyaWFibGVzXG5cblxuLy8gQ2xvc2VcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNsb3NlLXZhcmlhYmxlc1xuJGJ0bi1jbG9zZS13aWR0aDogICAgICAgICAgICAxZW0gIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWhlaWdodDogICAgICAgICAgICRidG4tY2xvc2Utd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXBhZGRpbmcteDogICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1wYWRkaW5nLXk6ICAgICAgICAkYnRuLWNsb3NlLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tY2xvc2UtY29sb3I6ICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1iZzogICAgICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skYnRuLWNsb3NlLWNvbG9yfSc+PHBhdGggZD0nTS4yOTMuMjkzYTEgMSAwIDAxMS40MTQgMEw4IDYuNTg2IDE0LjI5My4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEw5LjQxNCA4bDYuMjkzIDYuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDggOS40MTRsLTYuMjkzIDYuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDYuNTg2IDggLjI5MyAxLjcwN2ExIDEgMCAwMTAtMS40MTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1mb2N1cy1zaGFkb3c6ICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLW9wYWNpdHk6ICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1ob3Zlci1vcGFjaXR5OiAgICAuNzUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWZvY3VzLW9wYWNpdHk6ICAgIDEgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWRpc2FibGVkLW9wYWNpdHk6IC4yNSAhZGVmYXVsdDtcbiRidG4tY2xvc2Utd2hpdGUtZmlsdGVyOiAgICAgaW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIwMCUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjbG9zZS12YXJpYWJsZXNcblxuXG4vLyBPZmZjYW52YXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG9mZmNhbnZhcy12YXJpYWJsZXNcbiRvZmZjYW52YXMtcGFkZGluZy15OiAgICAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWhvcml6b250YWwtd2lkdGg6ICAgICAgICA0MDBweCAhZGVmYXVsdDtcbiRvZmZjYW52YXMtdmVydGljYWwtaGVpZ2h0OiAgICAgICAgIDMwdmggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAuM3MgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJvcmRlci13aWR0aDogICAgICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAkbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJnLWNvbG9yOiAgICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1iZyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWNvbG9yICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib2R5LWJhY2tkcm9wLWNvbG9yOiAgICAgcmdiYSgkbW9kYWwtYmFja2Ryb3AtYmcsICRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5KSAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG9mZmNhbnZhcy12YXJpYWJsZXNcblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes/notes.component */ "TEms");
/* harmony import */ var _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./note-detail/note-detail.component */ "RU7T");
/* harmony import */ var _note_add_note_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./note-add/note-add.component */ "8ZTx");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _note_header_note_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./note-header/note-header.component */ "c45A");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"],
        _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_8__["NoteDetailComponent"],
        _note_add_note_add_component__WEBPACK_IMPORTED_MODULE_9__["NoteAddComponent"],
        _note_header_note_header_component__WEBPACK_IMPORTED_MODULE_11__["NoteHeaderComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "a8fi":
/*!*********************************!*\
  !*** ./src/app/note.service.ts ***!
  \*********************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "OdHV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class NoteService {
    constructor(messageService, http, auth) {
        this.messageService = messageService;
        this.http = http;
        this.auth = auth;
    }
    getNotes() {
        return this.http.get(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].host)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getNotes', [])));
    }
    createNote(note) {
        console.log(note + ' loaded to server');
        return this.http.post(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].host + _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].create, { username: 'test', auth: 'test', note: JSON.stringify(note) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('createNote', []))).subscribe(o => {
            console.log(o);
            return o;
        });
    }
    editNote(note) {
        return this.http.put(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].host + _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].edit + '/' + note.id, note)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('editNote', [])));
    }
    deleteNote(id) {
        return this.http.delete(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].host + _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"].delete + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('deleteNote', [])));
    }
    /** Log a NotesService message with the MessageService */
    log(message) {
        this.messageService.add(`NoteService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            this.auth.setOfflineState(true);
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
NoteService.ɵfac = function NoteService_Factory(t) { return new (t || NoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"])); };
NoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NoteService, factory: NoteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c45A":
/*!******************************************************!*\
  !*** ./src/app/note-header/note-header.component.ts ***!
  \******************************************************/
/*! exports provided: NoteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteHeaderComponent", function() { return NoteHeaderComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function NoteHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NoteHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteHeaderComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.hideCanvas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NoteHeaderComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "currently offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NoteHeaderComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "not logged in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NoteHeaderComponent {
    constructor(authentication) {
        this.authentication = authentication;
        this.open = false;
        this.login = true;
        this.faSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignInAlt"];
    }
    ngOnInit() {
    }
    showCanvas(b) {
        this.login = b;
        this.open = !this.open;
    }
    hideCanvas() {
        this.open = false;
    }
    keyDown(e) {
        if (e.key === 'Escape') {
            this.open = false;
        }
    }
}
NoteHeaderComponent.ɵfac = function NoteHeaderComponent_Factory(t) { return new (t || NoteHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NoteHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteHeaderComponent, selectors: [["app-note-header"]], inputs: { title: "title" }, decls: 17, vars: 8, consts: [["id", "off-canvas", "class", "sidenav", 4, "ngIf"], ["class", "canvas-hide", "style", "z-index: 1031", 3, "click", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-pink", 3, "keydown"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbar-collapse-menu", "aria-controls", "navbar-collapse-menu", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar-collapse-menu", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-brand"], ["class", "badge bg-cyan", 4, "ngIf"], ["class", "badge bg-cyan ms-2", 4, "ngIf"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "d-flex"], ["type", "button", "title", "register", 1, "btn", "btn-pink", "me-1"], ["type", "button", "title", "Login", 1, "btn", "btn-pink", 3, "click"], [3, "icon"], ["id", "off-canvas", 1, "sidenav"], [1, "row", "g-3"], [1, "col-auto"], ["for", "username", 1, "visually-hidden"], ["type", "text", "id", "username", "placeholder", "username", 1, "form-control"], ["for", "password", 1, "visually-hidden"], ["type", "password", "id", "password", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-pink", "w-100"], [1, "canvas-hide", 2, "z-index", "1031", 3, "click"], [1, "badge", "bg-cyan"], [1, "badge", "bg-cyan", "ms-2"]], template: function NoteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NoteHeaderComponent_div_0_Template, 13, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NoteHeaderComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function NoteHeaderComponent_Template_nav_keydown_2_listener($event) { return ctx.keyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NoteHeaderComponent_span_9_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NoteHeaderComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteHeaderComponent_Template_button_click_15_listener() { return ctx.showCanvas(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mt-nav", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authentication.getOfflineState());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authentication.getLoginState());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faSign);


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "OdHV");



class AuthService {
    constructor(messageService) {
        this.messageService = messageService;
        this.offline = false;
    }
    getLoginState() {
        // this.http.post<Error>(AuthService.host + AuthService.auth, {username: 'test', auth: 'test'})
        //  .toPromise().then(r => console.log('in' + r)).catch(r => console.log('in' + r))
        this.offline = true;
        return false;
    }
    getOfflineState() {
        return this.offline;
    }
    setOfflineState(offline) {
        if (this.offline && !offline) {
        }
        this.offline = offline;
    }
    /** Log a NotesService message with the MessageService */
    log(message) {
        this.messageService.add(`AuthService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            this.offline = true;
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`)
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
}
AuthService.host = 'http://localhost:8765/';
AuthService.auth = 'api/authenticate';
AuthService.register = 'api/register';
AuthService.create = 'api/createNote';
AuthService.notes = 'api/getNotes';
AuthService.edit = 'api/editNote';
AuthService.delete = 'api/deleteNote';
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gvvY":
/*!******************************************!*\
  !*** ./src/app/local-storage.service.ts ***!
  \******************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalStorageService {
    constructor() {
    }
    addItem(key, value) {
        const tmpItems = this.getItem(key);
        if (tmpItems === null) {
            this.setItem(key, JSON.stringify([value]));
        }
        else {
            const newNotes = JSON.parse(tmpItems);
            newNotes.push(value);
            this.setItem(key, JSON.stringify(newNotes));
        }
    }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
    getNotes() {
        const tmpItems = this.getItem('notes');
        if (tmpItems === null) {
            return [];
        }
        else {
            return JSON.parse(tmpItems);
        }
    }
    addNote(note) {
        this.addItem('notes', note);
    }
    setNote(note) {
        const notes = this.getNotes();
        for (const storedNode of notes) {
            if (storedNode.id === note.id) {
                storedNode.title = note.title;
                storedNode.message = note.message;
                storedNode.last_edited = note.last_edited;
            }
        }
        this.setNotes(notes);
    }
    setNotes(notes) {
        this.setItem('notes', JSON.stringify(notes));
        // TODO: resolve merge conflicts
    }
    deleteNote(id) {
        const notes = this.getNotes();
        notes.forEach((element, index) => {
            if (element.id === id) {
                notes.splice(index, 1);
            }
        });
        this.setNotes(notes);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hbpG":
/*!*************************!*\
  !*** ./src/app/note.ts ***!
  \*************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
    constructor(id, title, message, created, 
    // tslint:disable-next-line:variable-name
    last_edited) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.created = created;
        this.last_edited = last_edited;
    }
}


/***/ }),

/***/ "t4z3":
/*!********************************************!*\
  !*** ./src/app/remote-managing.service.ts ***!
  \********************************************/
/*! exports provided: RemoteManagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteManagingService", function() { return RemoteManagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "gvvY");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note.service */ "a8fi");





class RemoteManagingService {
    constructor(authService, storageService, noteService) {
        this.authService = authService;
        this.storageService = storageService;
        this.noteService = noteService;
    }
    getNotes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.authService.getLoginState()) {
                console.log('remote-managing.service: try to load online notes');
                return this.noteService.getNotes().toPromise().then(notes => {
                    this.storageService.setNotes(notes);
                    return notes;
                });
            }
            else {
                return this.getOfflineNotes();
            }
        });
    }
    getOfflineNotes() {
        console.log('remote-managing.service: try to load offline notes');
        return this.storageService.getNotes();
    }
    addNote(note, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            note.id = Math.floor(Math.random() * (99999 - 1) + 1);
            if (note.last_edited === 0) {
                note.last_edited = Date.now();
            }
            if (note.created === 0) {
                note.created = Date.now();
            }
            // TODO: subscriber.notify
            this.callback(note);
            console.log('remote-managing.service: callback called');
            if (this.authService.getLoginState()) {
                console.log('remote-managing.service: remote create note');
                this.noteService.createNote(note);
            }
            else {
                console.log('remote-managing.service: local add note');
                this.storageService.addNote(note);
            }
            form.resetForm();
            window.location.reload();
        });
    }
    deleteNote(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('remote-managing.service: delete note');
            if (this.authService.getLoginState()) {
                console.log('remote-managing.service: delete remote note');
                this.noteService.deleteNote(id);
            }
            else {
                console.log('remote-managing.service: delete local note');
                this.storageService.deleteNote(id);
            }
            window.location.reload();
        });
    }
    getNote(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.getNotes().then((o) => {
                for (const note of o) {
                    if (note.id === id) {
                        return note;
                    }
                }
                return undefined;
            });
        });
    }
    setNode(note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.authService.getLoginState()) {
                this.noteService.editNote(note);
            }
            else {
                this.storageService.setNote(note);
            }
            window.location.reload();
        });
    }
    setNotes(notes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            notes.forEach(note => {
                this.setNode(note);
            });
        });
    }
}
RemoteManagingService.ɵfac = function RemoteManagingService_Factory(t) { return new (t || RemoteManagingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_note_service__WEBPACK_IMPORTED_MODULE_4__["NoteService"])); };
RemoteManagingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RemoteManagingService, factory: RemoteManagingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map