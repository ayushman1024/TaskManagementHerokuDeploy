(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouting, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_tasks_task_creator_task_creator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/tasks/task-creator/task-creator.component */ "./src/app/views/tasks/task-creator/task-creator.component.ts");
/* harmony import */ var _views_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error-page/error-page.component */ "./src/app/views/error-page/error-page.component.ts");
/* harmony import */ var _views_tdashboard_tdashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/tdashboard/tdashboard.component */ "./src/app/views/tdashboard/tdashboard.component.ts");
/* harmony import */ var _views_tasks_my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/tasks/my-tasks/my-tasks.component */ "./src/app/views/tasks/my-tasks/my-tasks.component.ts");
/* harmony import */ var _views_create_program_create_program_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/create-program/create-program.component */ "./src/app/views/create-program/create-program.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _views_select_prgm_select_prgm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/select-prgm/select-prgm.component */ "./src/app/views/select-prgm/select-prgm.component.ts");
/* harmony import */ var _views_udashboard_udashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/udashboard/udashboard.component */ "./src/app/views/udashboard/udashboard.component.ts");
/* harmony import */ var _views_enter_program_enter_program_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/enter-program/enter-program.component */ "./src/app/views/enter-program/enter-program.component.ts");
/* harmony import */ var _views_tasks_task_calendar_task_calendar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/tasks/task-calendar/task-calendar.component */ "./src/app/views/tasks/task-calendar/task-calendar.component.ts");
/* harmony import */ var _views_tasks_task_work_task_work_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/tasks/task-work/task-work.component */ "./src/app/views/tasks/task-work/task-work.component.ts");















var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'signup', component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'errorPage', component: _views_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"] },
    { path: 'u',
        component: _views_udashboard_udashboard_component__WEBPACK_IMPORTED_MODULE_11__["UdashboardComponent"],
        children: [
            { path: 'prg', component: _views_select_prgm_select_prgm_component__WEBPACK_IMPORTED_MODULE_10__["SelectPrgmComponent"] },
            { path: 'enterPrg', component: _views_enter_program_enter_program_component__WEBPACK_IMPORTED_MODULE_12__["EnterProgramComponent"] },
            { path: 'createProgram', component: _views_create_program_create_program_component__WEBPACK_IMPORTED_MODULE_7__["CreateProgramComponent"] }
        ]
    },
    { path: 't',
        component: _views_tdashboard_tdashboard_component__WEBPACK_IMPORTED_MODULE_5__["TdashboardComponent"],
        children: [
            { path: 'taskCreate', component: _views_tasks_task_creator_task_creator_component__WEBPACK_IMPORTED_MODULE_3__["TaskCreatorComponent"] },
            { path: 'myTasks', component: _views_tasks_my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_6__["MyTasksComponent"] },
            { path: 'cal', component: _views_tasks_task_calendar_task_calendar_component__WEBPACK_IMPORTED_MODULE_13__["TaskCalendarComponent"] },
            { path: 'wrk', component: _views_tasks_task_work_task_work_component__WEBPACK_IMPORTED_MODULE_14__["TaskWorkComponent"] }
        ]
    }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TASK MANAGEMENT';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/error-page/error-page.component */ "./src/app/views/error-page/error-page.component.ts");
/* harmony import */ var _views_tasks_task_creator_task_creator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/tasks/task-creator/task-creator.component */ "./src/app/views/tasks/task-creator/task-creator.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _core_modules_material_module_import_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/modules/material-module-import.module */ "./src/app/core/modules/material-module-import.module.ts");
/* harmony import */ var _core_modules_primeng_module_import_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/modules/primeng-module-import.module */ "./src/app/core/modules/primeng-module-import.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _framework_services_global_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _views_tasks_new_task_review_new_task_review_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/tasks/new-task-review/new-task-review.component */ "./src/app/views/tasks/new-task-review/new-task-review.component.ts");
/* harmony import */ var _views_tdashboard_tdashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/tdashboard/tdashboard.component */ "./src/app/views/tdashboard/tdashboard.component.ts");
/* harmony import */ var _views_tasks_my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/tasks/my-tasks/my-tasks.component */ "./src/app/views/tasks/my-tasks/my-tasks.component.ts");
/* harmony import */ var _views_create_program_create_program_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/create-program/create-program.component */ "./src/app/views/create-program/create-program.component.ts");
/* harmony import */ var _views_select_prgm_select_prgm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/select-prgm/select-prgm.component */ "./src/app/views/select-prgm/select-prgm.component.ts");
/* harmony import */ var _views_udashboard_udashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/udashboard/udashboard.component */ "./src/app/views/udashboard/udashboard.component.ts");
/* harmony import */ var _views_enter_program_enter_program_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/enter-program/enter-program.component */ "./src/app/views/enter-program/enter-program.component.ts");
/* harmony import */ var _framework_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./framework/auth/auth-interceptor */ "./src/app/framework/auth/auth-interceptor.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_tasks_task_calendar_task_calendar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/tasks/task-calendar/task-calendar.component */ "./src/app/views/tasks/task-calendar/task-calendar.component.ts");
/* harmony import */ var _views_tasks_task_work_task_work_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/tasks/task-work/task-work.component */ "./src/app/views/tasks/task-work/task-work.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_tasks_task_creator_task_creator_component__WEBPACK_IMPORTED_MODULE_10__["TaskCreatorComponent"],
                _views_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _views_tasks_new_task_review_new_task_review_component__WEBPACK_IMPORTED_MODULE_17__["NewTaskReviewComponent"],
                _views_tdashboard_tdashboard_component__WEBPACK_IMPORTED_MODULE_18__["TdashboardComponent"],
                _views_tasks_my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_19__["MyTasksComponent"],
                _views_create_program_create_program_component__WEBPACK_IMPORTED_MODULE_20__["CreateProgramComponent"],
                _views_select_prgm_select_prgm_component__WEBPACK_IMPORTED_MODULE_21__["SelectPrgmComponent"],
                _views_udashboard_udashboard_component__WEBPACK_IMPORTED_MODULE_22__["UdashboardComponent"],
                _views_enter_program_enter_program_component__WEBPACK_IMPORTED_MODULE_23__["EnterProgramComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _views_tasks_task_calendar_task_calendar_component__WEBPACK_IMPORTED_MODULE_26__["TaskCalendarComponent"],
                _views_tasks_task_work_task_work_component__WEBPACK_IMPORTED_MODULE_27__["TaskWorkComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _core_modules_material_module_import_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModuleImportModule"],
                _core_modules_primeng_module_import_module__WEBPACK_IMPORTED_MODULE_14__["PrimengModuleImportModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _framework_services_global_service__WEBPACK_IMPORTED_MODULE_16__["GlobalService"], _framework_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["httpInterceptorProviders"]],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/modules/material-module-import.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/modules/material-module-import.module.ts ***!
  \***************************************************************/
/*! exports provided: MaterialModuleImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleImportModule", function() { return MaterialModuleImportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");








var MaterialModuleImportModule = /** @class */ (function () {
    function MaterialModuleImportModule() {
    }
    MaterialModuleImportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]
            ]
        })
    ], MaterialModuleImportModule);
    return MaterialModuleImportModule;
}());



/***/ }),

/***/ "./src/app/core/modules/primeng-module-import.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/modules/primeng-module-import.module.ts ***!
  \**************************************************************/
/*! exports provided: PrimengModuleImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengModuleImportModule", function() { return PrimengModuleImportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/panelmenu */ "./node_modules/primeng/panelmenu.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tieredmenu */ "./node_modules/primeng/tieredmenu.js");
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/steps */ "./node_modules/primeng/steps.js");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_steps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/picklist.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_picklist__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_20__);





















var PrimengModuleImportModule = /** @class */ (function () {
    function PrimengModuleImportModule() {
    }
    PrimengModuleImportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__["PanelMenuModule"],
                primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_4__["TieredMenuModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                primeng_steps__WEBPACK_IMPORTED_MODULE_7__["StepsModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__["ToolbarModule"],
                primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__["SplitButtonModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_10__["EditorModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_11__["PickListModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__["InputMaskModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__["OverlayPanelModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_15__["DataViewModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_16__["PanelModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_18__["ToastModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_19__["PasswordModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_20__["FullCalendarModule"]
            ],
            exports: [
                primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__["PanelMenuModule"],
                primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_4__["TieredMenuModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                primeng_steps__WEBPACK_IMPORTED_MODULE_7__["StepsModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__["ToolbarModule"],
                primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__["SplitButtonModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_10__["EditorModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_11__["PickListModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__["InputMaskModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__["OverlayPanelModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_15__["DataViewModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_16__["PanelModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_18__["ToastModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_19__["PasswordModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_20__["FullCalendarModule"]
            ]
        })
    ], PrimengModuleImportModule);
    return PrimengModuleImportModule;
}());



/***/ }),

/***/ "./src/app/framework/auth/auth-interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/framework/auth/auth-interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/framework/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/framework/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/framework/auth/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.loginUrl = this.url + '/auth/signin';
        this.signupUrl = this.url + '/auth/signup';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/framework/auth/login-info.ts":
/*!**********************************************!*\
  !*** ./src/app/framework/auth/login-info.ts ***!
  \**********************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo() {
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/framework/auth/signup-info.ts":
/*!***********************************************!*\
  !*** ./src/app/framework/auth/signup-info.ts ***!
  \***********************************************/
/*! exports provided: SignUpInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfo", function() { return SignUpInfo; });
var SignUpInfo = /** @class */ (function () {
    function SignUpInfo() {
    }
    return SignUpInfo;
}());



/***/ }),

/***/ "./src/app/framework/auth/token-storage.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/framework/auth/token-storage.service.ts ***!
  \*********************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/framework/models/CodeDTO.ts":
/*!*********************************************!*\
  !*** ./src/app/framework/models/CodeDTO.ts ***!
  \*********************************************/
/*! exports provided: CodeDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDTO", function() { return CodeDTO; });
var CodeDTO = /** @class */ (function () {
    function CodeDTO() {
    }
    return CodeDTO;
}());



/***/ }),

/***/ "./src/app/framework/models/NewProgram.ts":
/*!************************************************!*\
  !*** ./src/app/framework/models/NewProgram.ts ***!
  \************************************************/
/*! exports provided: NewProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgram", function() { return NewProgram; });
var NewProgram = /** @class */ (function () {
    function NewProgram() {
        this.users = [];
    }
    return NewProgram;
}());



/***/ }),

/***/ "./src/app/framework/models/NewTask.ts":
/*!*********************************************!*\
  !*** ./src/app/framework/models/NewTask.ts ***!
  \*********************************************/
/*! exports provided: NewTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTask", function() { return NewTask; });
var NewTask = /** @class */ (function () {
    function NewTask() {
        this.user = [];
    }
    return NewTask;
}());



/***/ }),

/***/ "./src/app/framework/models/ProgramList.ts":
/*!*************************************************!*\
  !*** ./src/app/framework/models/ProgramList.ts ***!
  \*************************************************/
/*! exports provided: ProgramList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramList", function() { return ProgramList; });
var ProgramList = /** @class */ (function () {
    function ProgramList() {
    }
    return ProgramList;
}());



/***/ }),

/***/ "./src/app/framework/models/Task.ts":
/*!******************************************!*\
  !*** ./src/app/framework/models/Task.ts ***!
  \******************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/framework/models/work.ts":
/*!******************************************!*\
  !*** ./src/app/framework/models/work.ts ***!
  \******************************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
var Work = /** @class */ (function () {
    function Work() {
    }
    return Work;
}());



/***/ }),

/***/ "./src/app/framework/services/global.service.ts":
/*!******************************************************!*\
  !*** ./src/app/framework/services/global.service.ts ***!
  \******************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.logged = false;
    }
    GlobalService.prototype.getToken = function () {
        this.token = sessionStorage.getItem('token');
        return this.token;
    };
    GlobalService.prototype.setToken = function (tokenValue) {
        this.token = tokenValue;
        sessionStorage.setItem('token', this.token);
    };
    GlobalService.prototype.getCurrentProgramId = function () {
        this.currentProgramId = +sessionStorage.getItem('currentProgramID');
        return this.currentProgramId;
    };
    GlobalService.prototype.setCurrentProgramId = function (programId) {
        this.currentProgramId = programId;
        sessionStorage.setItem('currentProgramID', '' + this.currentProgramId);
    };
    GlobalService.prototype.getUid = function () {
        this.uid = +sessionStorage.getItem('uid');
        return this.uid;
    };
    GlobalService.prototype.setUid = function (uid) {
        this.uid = uid;
        sessionStorage.setItem('uid', '' + this.uid);
    };
    GlobalService.prototype.getSUid = function () {
        this.suid = +sessionStorage.getItem('suid');
        return this.suid;
    };
    GlobalService.prototype.setSUid = function (suid) {
        this.suid = suid;
        sessionStorage.setItem('suid', '' + this.suid);
    };
    GlobalService.prototype.getProgramName = function () {
        this.programName = sessionStorage.getItem('programName');
        return this.programName;
    };
    GlobalService.prototype.setProgramName = function (programName) {
        this.programName = programName;
        sessionStorage.setItem('programName', this.programName);
    };
    GlobalService.prototype.setLogged = function (v) {
        if (!v) {
            sessionStorage.clear();
            sessionStorage.setItem('logged', 'false'); // again created "logged" sessionstorage item, bcoz it is needed to be checked
        }
        else {
            sessionStorage.setItem('logged', 'true');
        }
        this.logged = v;
    };
    GlobalService.prototype.getLogged = function () {
        if (sessionStorage.getItem('logged') === 'true') {
            this.logged = true;
        }
        if (sessionStorage.getItem('logged') === 'false') {
            this.logged = false;
        }
        return this.logged;
    };
    GlobalService.prototype.getSelectedTask = function () {
        return this.selectedTask;
    };
    GlobalService.prototype.setSelectedTask = function (task) {
        this.selectedTask = task;
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/framework/services/program.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/framework/services/program.service.ts ***!
  \*******************************************************/
/*! exports provided: ProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramService", function() { return ProgramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _models_CodeDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/CodeDTO */ "./src/app/framework/models/CodeDTO.ts");






var ProgramService = /** @class */ (function () {
    function ProgramService(http, global) {
        this.http = http;
        this.global = global;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    ProgramService.prototype.create = function (newProgram) {
        return this.http.post(this.url + '/createProgram/' + this.global.getUid(), newProgram);
    };
    ProgramService.prototype.getAll = function () {
        return this.http.get(this.url + '/getAllProgram');
    };
    ProgramService.prototype.getAllByAdmin = function (id) {
        return this.http.get(this.url + '/getAllProgramByAdmin/' + id);
    };
    ProgramService.prototype.getAllByUser = function () {
        return this.http.get(this.url + '/getAllProgramByUser/' + this.global.getUid());
    };
    ProgramService.prototype.enterPass = function (code) {
        var dto = new _models_CodeDTO__WEBPACK_IMPORTED_MODULE_5__["CodeDTO"]();
        dto.code = code;
        dto.uid = this.global.getUid();
        return this.http.post(this.url + '/enterPrg', dto);
    };
    ProgramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], ProgramService);
    return ProgramService;
}());



/***/ }),

/***/ "./src/app/framework/services/task.service.ts":
/*!****************************************************!*\
  !*** ./src/app/framework/services/task.service.ts ***!
  \****************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/framework/services/global.service.ts");





var TaskService = /** @class */ (function () {
    function TaskService(http, global) {
        this.http = http;
        this.global = global;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    TaskService.prototype.create = function (newTask) {
        return this.http.post(this.url + '/createTask', newTask);
    };
    TaskService.prototype.getWork = function () {
        var path = this.url + '/getTaskWork/' + this.global.getCurrentProgramId() + '/' +
            this.global.getUid() + '/' + this.global.getSelectedTask().id.toString();
        return this.http.get(path);
    };
    TaskService.prototype.setWork = function (work) {
        var path = this.url + '/addTaskWork/' + this.global.getCurrentProgramId() + '/' +
            this.global.getUid() + '/' + this.global.getSelectedTask().id;
        return this.http.post(path, work);
    };
    TaskService.prototype.getTaskById = function (id) {
        return this.http.get(this.url + '/getTaskById/' + id);
    };
    TaskService.prototype.getallTaskByUser = function () {
        return this.http.get(this.url + '/getAllTaskByUser/' + this.global.getCurrentProgramId() + '/' + this.global.getUid());
    };
    TaskService.prototype.getallTaskRecordByUser = function (id) {
        var path = this.url + '/getAllTaskRecordByUser/' + this.global.getCurrentProgramId() + '/' + this.global.getUid();
        return this.http.get(path);
    };
    TaskService.prototype.getAllTaskCalendar = function () {
        var path = this.url + '/getTaskCalendar/' + this.global.getCurrentProgramId() + '/' + this.global.getUid();
        return this.http.get(path);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/framework/services/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/framework/services/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/framework/services/global.service.ts");





var UserService = /** @class */ (function () {
    function UserService(http, global) {
        this.http = http;
        this.global = global;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    UserService.prototype.getAllUserByProgram = function () {
        return this.http.get(this.url + '/getAllUser/' + this.global.getCurrentProgramId());
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get(this.url + '/getAllUser');
    };
    UserService.prototype.getUser = function (uid) {
        return this.http.get(this.url + '/getUser/' + uid);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/create-program/create-program.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/create-program/create-program.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-span {\r\n  margin: 20px;\r\n}\r\n.nxt-btn {\r\n  margin: 40px;\r\n  width: 20vw;\r\n  height: 5vh;\r\n  font-size: 20px;\r\n}\r\n#pname {\r\n  margin-top: 30px;\r\n  width: 30%;\r\n}\r\n.nxt-btn {\r\n  margin: 5px;\r\n  height: 38px;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY3JlYXRlLXByb2dyYW0vY3JlYXRlLXByb2dyYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NyZWF0ZS1wcm9ncmFtL2NyZWF0ZS1wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3BhbiB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5ueHQtYnRuIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNwbmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubnh0LWJ0biB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/create-program/create-program.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/create-program/create-program.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [modal]=\"true\"></p-toast>\n<div id=\"page\">\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepChange($event)\">\n    <br><mat-divider></mat-divider>\n    <!-- 1 -->\n    <mat-step>\n      <ng-template matStepLabel>Create New Program</ng-template>\n      <div>\n        <button *ngIf=\"newProgram.name && newProgram.description\" class=\"nxt-btn\" mat-stroked-button color=\"primary\" matStepperNext>Next</button>\n      </div>\n      <mat-form-field appearance=\"outline\" id=\"pname\">\n        <input [(ngModel)]=\"newProgram.name\" matInput type=\"text\" name=\"name\" id=\"name\" placeholder=\"Program Name\">\n      </mat-form-field><br>\n      <p-editor [(ngModel)]=\"newProgram.description\" [style]=\"{'height':'320px'}\"></p-editor>\n    </mat-step>\n\n<!-- 3 -->\n<mat-step>\n  <form>\n    <br>\n    <ng-template matStepLabel>Invite Users</ng-template>\n    <div>\n      <button class=\"nxt-btn\" mat-stroked-button matStepperNext (click)=\"onSubmit()\">Done</button>\n    </div><br>\n    <div class=\"forms f3\">\n      <p-pickList  [source]= \"sourceUser\" [target]=\"assignedUser\" sourceHeader=\"All Users\" targetHeader=\"Users Invited\" [responsive]=\"true\" filterBy=\"name\"\n      dragdrop=\"true\" sourceFilterPlaceholder=\"Search by name\" targetFilterPlaceholder=\"Search by name\" [sourceStyle]=\"{'height':'60vh'}\" [targetStyle]=\"{'height':'60vh'}\">\n      <ng-template let-u pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix \" style=\"display: flex;flex-wrap: nowrap;\">\n          <div style=\"position: relative;display:flex;align-items:center;margin:2px 2px 2px 2px\">\n          <mat-icon style=\"font-size: 38px;\">person</mat-icon></div>\n          <ul class=\"u-list\">\n            <li matToolTip=\"User ID\">{{u.id}}</li>\n            <li matToolTip=\"User Name\">{{u.name}}</li>\n            <li matToolTip=\"User Email\">{{u.email}}</li>\n          </ul>\n        </div>\n      </ng-template>\n      </p-pickList>\n    </div>\n  </form>\n</mat-step>\n</mat-horizontal-stepper>\n</div>\n"

/***/ }),

/***/ "./src/app/views/create-program/create-program.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/create-program/create-program.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProgramComponent", function() { return CreateProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _framework_services_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/services/program.service */ "./src/app/framework/services/program.service.ts");
/* harmony import */ var _framework_models_NewProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/models/NewProgram */ "./src/app/framework/models/NewProgram.ts");
/* harmony import */ var src_app_framework_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/framework/services/user.service */ "./src/app/framework/services/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);








var CreateProgramComponent = /** @class */ (function () {
    function CreateProgramComponent(msg, service, userService, datePipe, global) {
        this.msg = msg;
        this.service = service;
        this.userService = userService;
        this.datePipe = datePipe;
        this.global = global;
        this.newProgram = new _framework_models_NewProgram__WEBPACK_IMPORTED_MODULE_5__["NewProgram"]();
        this.isLinear = true;
    }
    CreateProgramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.global.setCurrentProgramId(0);
        this.userService.getAllUser().subscribe(function (res) { return _this.sourceUser = res.userList; });
        this.assignedUser = [];
    };
    CreateProgramComponent.prototype.stepChange = function (ev) {
        if (ev.selectedIndex) {
        }
    };
    CreateProgramComponent.prototype.onSubmit = function () {
        var _this = this;
        if ((this.newProgram.name.length > 2) && this.newProgram.description.length > 0) {
            this.newProgram.users = [];
            this.assignedUser.forEach(function (u) { _this.newProgram.users.push(u.id); });
            this.newProgram.admin = this.global.getUid();
            this.service.create(this.newProgram).subscribe();
        }
        else {
            if (!(this.newProgram.name.length > 2)) {
                this.msg.add({ severity: 'error', summary: 'Invalid Name', detail: 'Name field is blank' });
            }
            if (!this.newProgram.description) {
                this.msg.add({ severity: 'error', summary: 'Invalid Description', detail: 'No description is provided' });
            }
        }
    };
    CreateProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-program',
            template: __webpack_require__(/*! ./create-program.component.html */ "./src/app/views/create-program/create-program.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
            styles: [__webpack_require__(/*! ./create-program.component.css */ "./src/app/views/create-program/create-program.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _framework_services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"], src_app_framework_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], CreateProgramComponent);
    return CreateProgramComponent;
}());



/***/ }),

/***/ "./src/app/views/enter-program/enter-program.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/enter-program/enter-program.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#passcode {\r\n  font-size: 25px;\r\n  width: 40%;\r\n  margin: 20% auto;\r\n  margin-left: 15%;\r\n  height: 80px\r\n}\r\n\r\nbutton {\r\n  font-size: 25px;\r\n  height: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW50ZXItcHJvZ3JhbS9lbnRlci1wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9lbnRlci1wcm9ncmFtL2VudGVyLXByb2dyYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXNzY29kZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAyMCUgYXV0bztcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIGhlaWdodDogODBweFxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/enter-program/enter-program.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/enter-program/enter-program.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [modal]=\"true\"></p-toast>\n<mat-form-field appearance=\"outline\" id=\"passcode\">\n    <input [(ngModel)]=\"passcode\" matInput type=\"text\" name=\"passcode\" id=\"code\" placeholder=\"Enter Passcode you recieved\">\n  </mat-form-field>\n<button (click)=\"send()\" mat-raised-button color=\"primary\">Enter</button>\n"

/***/ }),

/***/ "./src/app/views/enter-program/enter-program.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/enter-program/enter-program.component.ts ***!
  \****************************************************************/
/*! exports provided: EnterProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterProgramComponent", function() { return EnterProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/services/program.service */ "./src/app/framework/services/program.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




var EnterProgramComponent = /** @class */ (function () {
    function EnterProgramComponent(msg, prgService) {
        this.msg = msg;
        this.prgService = prgService;
    }
    EnterProgramComponent.prototype.ngOnInit = function () {
    };
    EnterProgramComponent.prototype.send = function () {
        var _this = this;
        this.prgService.enterPass(this.passcode).subscribe(function (data) {
            _this.msg.add({ severity: 'success', summary: 'Service Message', detail: 'You are now member of this program' });
        }, function (error) {
            _this.msg.add({ severity: 'error', summary: 'Service Message', detail: 'Wrong Passcode' });
        });
    };
    EnterProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enter-program',
            template: __webpack_require__(/*! ./enter-program.component.html */ "./src/app/views/enter-program/enter-program.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./enter-program.component.css */ "./src/app/views/enter-program/enter-program.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], src_app_framework_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]])
    ], EnterProgramComponent);
    return EnterProgramComponent;
}());



/***/ }),

/***/ "./src/app/views/error-page/error-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/error-page/error-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/error-page/error-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/error-page/error-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>ERROR NOT FOUND</h1>\n"

/***/ }),

/***/ "./src/app/views/error-page/error-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/error-page/error-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/views/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/views/error-page/error-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 100px 0px;\r\n}\r\n\r\n#page{\r\n  box-shadow: -17px 16px 32px 2px rgba(79,79,79,1);\r\n}\r\n\r\n.form{\r\n  margin: 25px auto;\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 0.3rem !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTAwcHggMHB4O1xyXG59XHJcblxyXG4jcGFnZXtcclxuICBib3gtc2hhZG93OiAtMTdweCAxNnB4IDMycHggMnB4IHJnYmEoNzksNzksNzksMSk7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gIG1hcmdpbjogMjVweCBhdXRvO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-toast></p-toast> -->\n<div id=\"page\" class=\"back\">\n<mat-card>\n  <mat-card-title><p class=\"h4\">LOGIN</p></mat-card-title>\n  <mat-card-content>\n  <div class=\"form row col-sm-6\" style=\"max-width:350px;\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\" />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div class=\"error-field\" *ngIf=\"f.controls['username'].errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\"\n         #password=\"ngModel\" required minlength=\"6\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"/>\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div class=\"error-field\" *ngIf=\"f.controls['password'].errors.required\">Password is required</div>\n          <div class=\"error-field\" *ngIf=\"f.controls['password'].errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-primary\">\n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Login failed: {{errorMessage}}\n        </div>\n      </div>\n    </form>\n    <hr/>\n    <p>Don't have an account?</p>\n    <a href=\"signup\" class=\"btn btn-success\">Sign Up</a>\n  </div>\n  </mat-card-content>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_auth_login_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/auth/login-info */ "./src/app/framework/auth/login-info.ts");
/* harmony import */ var src_app_framework_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/auth/auth.service */ "./src/app/framework/auth/auth.service.ts");
/* harmony import */ var src_app_framework_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/framework/auth/token-storage.service */ "./src/app/framework/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);








var LoginComponent = /** @class */ (function () {
    function LoginComponent(msg, authService, tokenStorage, router, route, global) {
        this.msg = msg;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.route = route;
        this.global = global;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
            this.router.navigate(['./u/prg']);
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.msg.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginInfo = new src_app_framework_auth_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"]();
        this.loginInfo.username = this.form.username;
        this.loginInfo.password = this.form.password;
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.global.setUid(data.uid);
            _this.global.setCurrentProgramId(data.pid);
            _this.global.setLogged(true);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.router.navigate(['./u/prg']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], src_app_framework_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_framework_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  margin: 25px auto;\r\n}\r\nlabel {\r\n  margin-bottom: 0.3rem !important;\r\n}\r\n.auth {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1hcmdpbjogMjVweCBhdXRvO1xyXG59XHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF1dGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSignedUp; else signupForm\">\r\n  Your registration is successful. Please login!\r\n</div>\r\n\r\n<ng-template #signupForm>\r\n  <div class=\"form row col-sm-6 auth\" style=\"max-width:350px;\">\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n    <div><p class=\"h4\">REGISTER</p></div>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Your name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"signupInfo.name\" #name=\"ngModel\" required\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"/>\r\n        <div *ngIf=\"f.submitted && name.invalid\">\r\n          <div class=\"error-field\" *ngIf=\"f.controls['name'].errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"signupInfo.username\" #username=\"ngModel\" required\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"/>\r\n        <div *ngIf=\"f.submitted && username.invalid\">\r\n          <div class=\"error-field\" *ngIf=\"f.controls['username'].errors.required\">Username is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"signupInfo.email\" #email=\"ngModel\" required email\r\n          [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"/>\r\n          <div *ngIf=\"f.submitted && email.invalid\">\r\n            <div class=\"error-field\" *ngIf=\"f.controls['email'].errors.required\">Email is required</div>\r\n            <div class=\"error-field\" *ngIf=\"f.controls['email'].errors.email\">Email must be a valid email address</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input pPassword type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"signupInfo.password\" #password=\"ngModel\"\r\n            required minlength=\"6\" [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"/>\r\n          <div *ngIf=\"f.submitted && password.invalid\">\r\n            <div class=\"error-field\" *ngIf=\"f.controls['password'].errors.required\">Password is required</div>\r\n            <div class=\"error-field\" *ngIf=\"f.controls['password'].errors.minlength\">Password must be at least 6 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [routerLink]=\"['/signup']\">Register</button>\r\n          <div class=\"error-field\" *ngIf=\"f.submitted && isSignUpFailed\" class=\"alert alert-warning\">\r\n            Signup failed!<br/>{{errorMessage}}\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_auth_signup_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/auth/signup-info */ "./src/app/framework/auth/signup-info.ts");
/* harmony import */ var src_app_framework_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/auth/auth.service */ "./src/app/framework/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.form = {};
        this.signupInfo = new src_app_framework_auth_signup_info__WEBPACK_IMPORTED_MODULE_2__["SignUpInfo"]();
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.signupInfo.user = 'U';
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
            _this.router.navigate(['./login']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_framework_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/select-prgm/select-prgm.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/select-prgm/select-prgm.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prgm {\r\n  cursor: pointer !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VsZWN0LXByZ20vc2VsZWN0LXByZ20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlbGVjdC1wcmdtL3NlbGVjdC1wcmdtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJnbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/select-prgm/select-prgm.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/select-prgm/select-prgm.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \" style=\"width: 50em;margin:0 auto;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Select PROGRAM</h5>\n    <p class=\"card-text\">Select the program from the list below to continue. You will be redirected to your dashboard.</p>\n    <div class=\"list-group\">\n<!--  -->\n      <div *ngFor=\"let p of prgmList.programList\">\n        <a class=\"prgm list-group-item list-group-item-action flex-column align-items-start\" (click)=\"selectPrgm(p)\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <h5 class=\"mb-1\">{{p.id}}</h5>\n            <h5 class=\"mb-1\">{{p.name}}</h5>\n            <small>program ID: PROGRAM</small>\n          </div>\n          <p class=\"mb-1\"></p>\n        </a>\n      </div>\n<!--  -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/select-prgm/select-prgm.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/select-prgm/select-prgm.component.ts ***!
  \************************************************************/
/*! exports provided: SelectPrgmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPrgmComponent", function() { return SelectPrgmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _framework_models_ProgramList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/models/ProgramList */ "./src/app/framework/models/ProgramList.ts");
/* harmony import */ var src_app_framework_services_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/services/program.service */ "./src/app/framework/services/program.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SelectPrgmComponent = /** @class */ (function () {
    function SelectPrgmComponent(service, router, route, datePipe, global) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.global = global;
        this.prgmList = new _framework_models_ProgramList__WEBPACK_IMPORTED_MODULE_2__["ProgramList"]();
    }
    SelectPrgmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllByUser().subscribe(function (list) { return _this.prgmList = list; });
    };
    SelectPrgmComponent.prototype.selectPrgm = function (p) {
        this.global.setCurrentProgramId(p.id);
        this.global.setProgramName(p.name);
        this.router.navigate(['./../../t', 'myTasks'], { relativeTo: this.route });
    };
    SelectPrgmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-prgm',
            template: __webpack_require__(/*! ./select-prgm.component.html */ "./src/app/views/select-prgm/select-prgm.component.html"),
            styles: [__webpack_require__(/*! ./select-prgm.component.css */ "./src/app/views/select-prgm/select-prgm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_framework_services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
    ], SelectPrgmComponent);
    return SelectPrgmComponent;
}());



/***/ }),

/***/ "./src/app/views/tasks/my-tasks/my-tasks.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/tasks/my-tasks/my-tasks.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-row {\r\n  cursor: pointer;\r\n}\r\n#descBox {\r\n  cursor: zoom-in;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvbXktdGFza3MvbXktdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUVFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90YXNrcy9teS10YXNrcy9teS10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stcm93IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2Rlc2NCb3gge1xyXG4gIGN1cnNvcjogLXdlYmtpdC16b29tLWluO1xyXG4gIGN1cnNvcjogem9vbS1pbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/tasks/my-tasks/my-tasks.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/tasks/my-tasks/my-tasks.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-4\">\n  <mat-card #panel>\n    <mat-card-title>Description</mat-card-title>\n    <mat-card-content id=\"descBox\" (click)=\"toggleDescDialog()\">\n      <div #desc>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n<table class=\"table table-striped table-bordered col-8\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Task ID</th>\n        <th scope=\"col\">Task Name</th>\n        <th scope=\"col\">Started</th>\n        <th scope=\"col\">Deadline</th>\n        <!-- <th scope=\"col\">Status</th> -->\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"task-row\" (click)=\"taskWork(t)\" (mouseenter)=\"descHover(t)\" *ngFor=\"let t of taskList;let i = index\" [ngClass]=\"{ 'table-danger' : isLate(t) }\">\n        <th scope=\"row\"><mat-icon>create</mat-icon> {{i+1}}</th>\n        <th >{{t.id}}</th>\n        <td>{{t.name}}</td>\n        <td>{{t.startTime}}</td>\n        <td>{{t.deadline}}</td>\n        <!-- <td>{{t.status}}</td> -->\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p-dialog header=\"Description\" [style]=\"[{'max-width':'30vw'},{'max-width':'75vh'}]\" [(visible)]=\"descDialogVisible\" (onShow)=\"loadDialogData()\">\n    <mat-card #panel>\n      <mat-card-title>Description</mat-card-title>\n      <mat-card-content id=\"descBox\">\n        <div #dialog></div>\n        <!-- task description is appended over here  -->\n      </mat-card-content>\n    </mat-card>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/views/tasks/my-tasks/my-tasks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/tasks/my-tasks/my-tasks.component.ts ***!
  \************************************************************/
/*! exports provided: MyTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTasksComponent", function() { return MyTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/services/task.service */ "./src/app/framework/services/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MyTasksComponent = /** @class */ (function () {
    function MyTasksComponent(service, router, route, datePipe, global) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.global = global;
        this.list = [];
        this.descDialogVisible = false;
        this.dialogDescData = '';
    }
    MyTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getallTaskByUser().subscribe(function (tr) { return _this.taskList = tr.taskList; });
    };
    MyTasksComponent.prototype.descHover = function (t) {
        var child = document.createElement('div');
        this.dialogDescData = t.description;
        child.innerHTML = this.dialogDescData;
        this.desc.nativeElement.innerHTML = '';
        this.desc.nativeElement.appendChild(child);
    };
    MyTasksComponent.prototype.appendChild = function (source, target) {
        target.appendChild(source);
    };
    MyTasksComponent.prototype.toggleDescDialog = function () {
        if (this.descDialogVisible) {
            this.descDialogVisible = false;
        }
        else {
            this.descDialogVisible = true;
        }
    };
    MyTasksComponent.prototype.loadDialogData = function () {
        var child = document.createElement('div');
        child.innerHTML = this.dialogDescData;
        this.dialog.nativeElement.innerHTML = '';
        this.dialog.nativeElement.appendChild(child);
    };
    MyTasksComponent.prototype.isLate = function (t) {
        if (new Date(t.deadline) < new Date()) {
            return true;
        }
        return false;
    };
    MyTasksComponent.prototype.taskWork = function (task) {
        this.global.setSelectedTask(task);
        this.router.navigate(['./t/wrk']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('desc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyTasksComponent.prototype, "desc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyTasksComponent.prototype, "dialog", void 0);
    MyTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-tasks',
            template: __webpack_require__(/*! ./my-tasks.component.html */ "./src/app/views/tasks/my-tasks/my-tasks.component.html"),
            styles: [__webpack_require__(/*! ./my-tasks.component.css */ "./src/app/views/tasks/my-tasks/my-tasks.component.css")]
        })
        /**
         * This Component Lists all the Tasks Of Trainee.
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], MyTasksComponent);
    return MyTasksComponent;
}());



/***/ }),

/***/ "./src/app/views/tasks/new-task-review/new-task-review.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/tasks/new-task-review/new-task-review.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f1 {\r\n  width:40vw;\r\n  align-self: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvbmV3LXRhc2stcmV2aWV3L25ldy10YXNrLXJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Rhc2tzL25ldy10YXNrLXJldmlldy9uZXctdGFzay1yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mMSB7XHJcbiAgd2lkdGg6NDB2dztcclxuICBhbGlnbi1zZWxmOiBsZWZ0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/tasks/new-task-review/new-task-review.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/tasks/new-task-review/new-task-review.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"form-group row\">\n      <label for=\"f1\" class=\"col-sm-2 col-form-label\">Task Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" readonly class=\"form-control-plaintext\" class=\"f1\" value=\"{{task.name}}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"f1\" class=\"col-sm-2 col-form-label\">Start Time</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" readonly class=\"form-control-plaintext\" class=\"f1\" value=\"{{task.startTime}}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"f1\" class=\"col-sm-2 col-form-label\">Deadline</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" readonly class=\"form-control-plaintext\" class=\"f1\" value=\"{{task.deadline}}\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"f1\" class=\"col-sm-2 col-form-label\">Program </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" readonly class=\"form-control-plaintext\" class=\"f1\" value=\"{{task.program}}\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"f1\" class=\"col-sm-2 col-form-label\">Created at</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" readonly class=\"form-control-plaintext\" class=\"f1\" value=\"{{task.createdTime}}\">\n      </div>\n    </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/views/tasks/new-task-review/new-task-review.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/tasks/new-task-review/new-task-review.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewTaskReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskReviewComponent", function() { return NewTaskReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_models_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/models/Task */ "./src/app/framework/models/Task.ts");



var NewTaskReviewComponent = /** @class */ (function () {
    function NewTaskReviewComponent() {
    }
    NewTaskReviewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_framework_models_Task__WEBPACK_IMPORTED_MODULE_2__["Task"])
    ], NewTaskReviewComponent.prototype, "task", void 0);
    NewTaskReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task-review',
            template: __webpack_require__(/*! ./new-task-review.component.html */ "./src/app/views/tasks/new-task-review/new-task-review.component.html"),
            styles: [__webpack_require__(/*! ./new-task-review.component.css */ "./src/app/views/tasks/new-task-review/new-task-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewTaskReviewComponent);
    return NewTaskReviewComponent;
}());



/***/ }),

/***/ "./src/app/views/tasks/task-calendar/task-calendar.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/tasks/task-calendar/task-calendar.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host >>> .fc-view-container {\r\n  height: 70%;\r\n  width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvdGFzay1jYWxlbmRhci90YXNrLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGFza3MvdGFzay1jYWxlbmRhci90YXNrLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+Pj4gLmZjLXZpZXctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/tasks/task-calendar/task-calendar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/tasks/task-calendar/task-calendar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"f-cal\">\n  <p-fullCalendar [style]=\"{'height':'75%'}\" [events]=\"events\" [options]=\"options\">\n  </p-fullCalendar>\n</div>\n"

/***/ }),

/***/ "./src/app/views/tasks/task-calendar/task-calendar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/tasks/task-calendar/task-calendar.component.ts ***!
  \**********************************************************************/
/*! exports provided: TaskCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCalendarComponent", function() { return TaskCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/services/task.service */ "./src/app/framework/services/task.service.ts");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__);








var TaskCalendarComponent = /** @class */ (function () {
    function TaskCalendarComponent(service, global, router, route) {
        this.service = service;
        this.global = global;
        this.router = router;
        this.route = route;
    }
    TaskCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllTaskCalendar().subscribe(function (data) { return _this.events = data.events; });
        this.options = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default.a],
            defaultDate: Date.now(),
            header: {
                left: 'prev,next,month,agendaWeek,agendaDay',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            dateClick: function (e) { console.log(e); }
        };
    };
    TaskCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-calendar',
            template: __webpack_require__(/*! ./task-calendar.component.html */ "./src/app/views/tasks/task-calendar/task-calendar.component.html"),
            styles: [__webpack_require__(/*! ./task-calendar.component.css */ "./src/app/views/tasks/task-calendar/task-calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TaskCalendarComponent);
    return TaskCalendarComponent;
}());



/***/ }),

/***/ "./src/app/views/tasks/task-creator/task-creator.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/tasks/task-creator/task-creator.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-span {\r\n  margin: 20px;\r\n}\r\n\r\n#tname {\r\n  margin-top: 30px;\r\n  width: 30%;\r\n}\r\n\r\n.form {\r\n  margin: 2em;\r\n}\r\n\r\n.nxt-btn {\r\n  margin: 5px;\r\n  height: 38px;\r\n  font-size: 18px;\r\n\r\n}\r\n\r\n#edt {\r\n  resize: both;\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvdGFzay1jcmVhdG9yL3Rhc2stY3JlYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Rhc2tzL3Rhc2stY3JlYXRvci90YXNrLWNyZWF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zcGFuIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiN0bmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbi5mb3JtIHtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG4ubnh0LWJ0biB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbiNlZHQge1xyXG4gIHJlc2l6ZTogYm90aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/tasks/task-creator/task-creator.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/tasks/task-creator/task-creator.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [modal]=\"true\"></p-toast>\r\n<div id=\"page\">\r\n  <!-- 1 -->\r\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepChange($event)\">\r\n    <br><mat-divider></mat-divider>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Create New Task</ng-template>\r\n      <div>\r\n        <button *ngIf=\"taskModel.name && taskModel.description\" class=\"nxt-btn\" mat-stroked-button color=\"primary\" matStepperNext>Next</button>\r\n      </div>\r\n      <div class=\"forms f1\">\r\n      <mat-form-field appearance=\"outline\" id=\"tname\">\r\n        <input [(ngModel)]=\"taskModel.name\" matInput type=\"text\" name=\"name\" id=\"name\" placeholder=\"Task name\">\r\n      </mat-form-field><br>\r\n      <div>\r\n      <p-editor [(ngModel)]=\"taskModel.description\" [style]=\"{'height':'320px'}\"></p-editor>\r\n      </div>\r\n    </div>\r\n\r\n    </mat-step>\r\n    <!-- 2 -->\r\n    <mat-step>\r\n          <ng-template matStepLabel>Schedule Task</ng-template>\r\n          <div class=\"forms f2\">\r\n            <div>\r\n              <button *ngIf=\"taskModel.startTime && taskModel.deadline\" class=\"nxt-btn\" mat-stroked-button matStepperNext>Next</button>\r\n            </div>\r\n            <span class=\"label-span\">Task Start Date and Time</span>\r\n            <mat-form-field class=\"date-time\" appearance=\"outline\">\r\n              <mat-label>Task Start Date and Time</mat-label>\r\n              <input matInput [(ngModel)]=\"taskModel.startTime\" matInput type=\"datetime-local\" name=\"startTime\" id=\"start\">\r\n            </mat-form-field><br>\r\n            <span class=\"label-span\">Task End Date and Time</span>\r\n            <mat-form-field class=\"date-time\" appearance=\"outline\">\r\n                <mat-label>Task End Date and Time</mat-label>\r\n              <input matInput [(ngModel)]=\"taskModel.deadline\" matInput type=\"datetime-local\" name=\"deadline\" id=\"deadline\">\r\n            </mat-form-field><br>\r\n            <hr>\r\n            <!--  -->\r\n            <!--  -->\r\n          </div>\r\n      </mat-step>\r\n      <!-- 3 -->\r\n      <mat-step>\r\n        <form>\r\n          <ng-template matStepLabel>Assign Task</ng-template>\r\n          <div>\r\n            <button *ngIf=\"assignedUser !== []\" mat-stroked-button matStepperNext class=\"nxt-btn\" >Done</button>\r\n          </div>\r\n          <div class=\"forms f3\">\r\n            <p-pickList  [source]= \"sourceUser\" [target]=\"assignedUser\" sourceHeader=\"All Users\" targetHeader=\"Users Invited\" [responsive]=\"true\" filterBy=\"name\"\r\n            dragdrop=\"true\" sourceFilterPlaceholder=\"Search by name\" targetFilterPlaceholder=\"Search by name\" [sourceStyle]=\"{'height':'60vh'}\" [targetStyle]=\"{'height':'60vh'}\">\r\n            <ng-template let-u pTemplate=\"item\">\r\n              <div class=\"ui-helper-clearfix \" style=\"display: flex;flex-wrap: nowrap;\">\r\n                <div style=\"position: relative;display:flex;align-items:center;margin:2px 2px 2px 2px\">\r\n                <mat-icon style=\"font-size: 35px;\">person</mat-icon></div>\r\n                <ul>\r\n                  <li matToolTip=\"User ID\">{{u.id}}</li>\r\n                  <li matToolTip=\"User Name\">{{u.name}}</li>\r\n                  <li matToolTip=\"User Email\">{{u.email}}</li>\r\n                  <hr>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n            </p-pickList>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <!-- 4 -->\r\n      <mat-step>\r\n        <ng-template matStepLabel>Review and Publish</ng-template>\r\n        <div class=\"forms f3\">\r\n        <div>\r\n          <button (click)=\"onPublish()\" class=\"nxt-btn\" mat-stroked-button><mat-icon>done</mat-icon>PUBLISH TASK</button>\r\n        </div>\r\n        <app-new-task-review *ngIf=\"showReview\" [task]=\"taskModel\"></app-new-task-review>\r\n        <mat-card>\r\n          <mat-card-title>Description</mat-card-title>\r\n          <mat-card-content>\r\n            <div id=\"decriptionBox\">\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        </div>\r\n      </mat-step>\r\n  </mat-horizontal-stepper>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/tasks/task-creator/task-creator.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/tasks/task-creator/task-creator.component.ts ***!
  \********************************************************************/
/*! exports provided: TaskCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreatorComponent", function() { return TaskCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_framework_models_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/models/Task */ "./src/app/framework/models/Task.ts");
/* harmony import */ var src_app_framework_models_NewTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/models/NewTask */ "./src/app/framework/models/NewTask.ts");
/* harmony import */ var src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/services/task.service */ "./src/app/framework/services/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var src_app_framework_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/framework/services/user.service */ "./src/app/framework/services/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);









var TaskCreatorComponent = /** @class */ (function () {
    function TaskCreatorComponent(msg, service, userService, datePipe, global) {
        this.msg = msg;
        this.service = service;
        this.userService = userService;
        this.datePipe = datePipe;
        this.global = global;
        this.showReview = false;
        this.taskModel = new src_app_framework_models_Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.newTaskModel = new src_app_framework_models_NewTask__WEBPACK_IMPORTED_MODULE_3__["NewTask"]();
        this.reviewIndex = 3;
        this.assignIndex = 2;
        this.isLinear = true;
    }
    TaskCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUserByProgram().subscribe(function (res) { return _this.sourceUser = res.userList; });
        this.assignedUser = [];
        this.lastStepIndex = 4;
        this.stepSize = 5;
    };
    TaskCreatorComponent.prototype.prepareForReview = function () {
        var _this = this;
        this.newTaskModel.user = [];
        this.assignedUser.forEach(function (t) { _this.newTaskModel.user.push(t.id); });
        this.taskModel.createdBy = this.global.getUid(); // The same user
        this.taskModel.program = this.global.getCurrentProgramId(); // The program of this dashboard
        this.taskModel.modifiedBy = this.global.getUid(); // The same user who created
        this.taskModel.status = 'created';
        this.taskModel.modifiedTime = this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm');
        this.taskModel.createdTime = this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm');
        try {
            this.taskModel.startTime = this.taskModel.startTime.replace('T', ' ');
            this.taskModel.deadline = this.taskModel.deadline.replace('T', ' ');
            this.taskModel.createdTime = this.taskModel.createdTime.replace('T', ' ');
            this.taskModel.modifiedTime = this.taskModel.modifiedTime.replace('T', ' ');
        }
        catch (error) {
            console.log('Wrong format datetime-local');
        }
        this.newTaskModel.task = this.taskModel;
    };
    TaskCreatorComponent.prototype.initialize = function () {
        this.prepareForReview();
    };
    TaskCreatorComponent.prototype.onPublish = function () {
        var _this = this;
        this.prepareForReview();
        var valid = false;
        if (this.newTaskModel.task.name.length > 0 && this.newTaskModel.task.description.length > 0
            && this.newTaskModel.task.startTime.length > 0 && this.newTaskModel.task.deadline.length > 0) {
            valid = true;
        }
        if (valid) {
            this.service.create(this.newTaskModel).subscribe(function (data) {
                _this.msg.add({ severity: 'success', summary: 'Task Created',
                    detail: 'New task has been created successfully' });
            }, function (error) {
                _this.msg.add({ severity: 'error', summary: 'Incomplete Form',
                    detail: 'New Task will be created after all neccessary fields are provided.' });
            });
        }
        else {
            this.msg.add({ severity: 'error', summary: 'Incomplete Form',
                detail: 'New Task will be created after all neccessary fields are provided.' });
        }
    };
    TaskCreatorComponent.prototype.stepChange = function (ev) {
        var _this = this;
        if (ev.selectedIndex === this.reviewIndex) {
            this.showReview = true;
            var child = document.createElement('div');
            child.innerHTML = this.taskModel.description;
            document.getElementById('decriptionBox').innerHTML = ''; // empty earlier values
            document.getElementById('decriptionBox').appendChild(child);
        }
        else {
            this.showReview = false;
        }
        if (ev.selectedIndex === this.assignIndex) {
            this.assignedUser = [];
            this.newTaskModel.user = [];
            this.userService.getAllUserByProgram().subscribe(function (res) { return _this.sourceUser = res.userList; });
        }
    };
    TaskCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-creator',
            template: __webpack_require__(/*! ./task-creator.component.html */ "./src/app/views/tasks/task-creator/task-creator.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
            styles: [__webpack_require__(/*! ./task-creator.component.css */ "./src/app/views/tasks/task-creator/task-creator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"], src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], src_app_framework_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
    ], TaskCreatorComponent);
    return TaskCreatorComponent;
}());



/***/ }),

/***/ "./src/app/views/tasks/task-work/task-work.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/tasks/task-work/task-work.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 5px;\r\n}\r\n\r\n#tn {\r\n  margin-left: 8%;\r\n  background-color: rgb(41, 127, 197);\r\n  color:rgb(252, 252, 252);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvdGFzay13b3JrL3Rhc2std29yay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Rhc2tzL3Rhc2std29yay90YXNrLXdvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiN0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMTI3LCAxOTcpO1xyXG4gIGNvbG9yOnJnYigyNTIsIDI1MiwgMjUyKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/tasks/task-work/task-work.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/tasks/task-work/task-work.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [modal]=\"true\"></p-toast>\n<p-toolbar>\n    <div class=\"ui-toolbar-group-left\">\n        <i class=\"pi pi-bars\"></i>\n        <button class =\"btn btn-md btn-primary\" (click)=\"submit()\" >\n          <mat-icon>publish</mat-icon> SAVE YOUR WORK</button>\n    </div>\n    <div class=\"ui-toolbar-group-right\">\n      <p class=\"h4\">TASK-NAME: {{taskName}}</p>\n    </div>\n</p-toolbar>\n<p-editor [(ngModel)]=\"workModel.work\" [style]=\"{'height':'320px'}\"></p-editor>\n"

/***/ }),

/***/ "./src/app/views/tasks/task-work/task-work.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/tasks/task-work/task-work.component.ts ***!
  \**************************************************************/
/*! exports provided: TaskWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskWorkComponent", function() { return TaskWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/services/task.service */ "./src/app/framework/services/task.service.ts");
/* harmony import */ var src_app_framework_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/services/user.service */ "./src/app/framework/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var src_app_framework_models_work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/framework/models/work */ "./src/app/framework/models/work.ts");








var TaskWorkComponent = /** @class */ (function () {
    function TaskWorkComponent(msg, service, userService, taskService, datePipe, global) {
        this.msg = msg;
        this.service = service;
        this.userService = userService;
        this.taskService = taskService;
        this.datePipe = datePipe;
        this.global = global;
    }
    TaskWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getWork().subscribe(function (data) { _this.workModel = data; _this.original = _this.workModel.work; }, function (error) {
            _this.workModel = new src_app_framework_models_work__WEBPACK_IMPORTED_MODULE_7__["Work"]();
            _this.workModel.work = '';
        });
        this.prgName = this.global.getProgramName();
        this.taskName = this.global.getSelectedTask().name;
    };
    TaskWorkComponent.prototype.submit = function () {
        var _this = this;
        if (this.workModel.work === this.original) {
            this.msg.add({ severity: 'warn', summary: 'No Changes', detail: '' });
        }
        else {
            this.msg.add({ severity: 'info', summary: 'Saving Changes', detail: 'Wait' });
            this.service.setWork(this.workModel).subscribe(function (data) {
                _this.msg.add({ severity: 'success', summary: 'UPDATED', detail: 'Changes are saved' });
                _this.original = _this.workModel.work;
            }, function (error) {
                _this.msg.add({ severity: 'error', summary: 'ERROR', detail: 'Cannot save your work' });
            });
        }
    };
    TaskWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-work',
            template: __webpack_require__(/*! ./task-work.component.html */ "./src/app/views/tasks/task-work/task-work.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__webpack_require__(/*! ./task-work.component.css */ "./src/app/views/tasks/task-work/task-work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], src_app_framework_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_framework_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
    ], TaskWorkComponent);
    return TaskWorkComponent;
}());



/***/ }),

/***/ "./src/app/views/tdashboard/tdashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/tdashboard/tdashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-list  a {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  color: rgb(202, 240, 142);\r\n}\r\n\r\n.t2 {\r\n  color: rgb(253, 197, 183);\r\n  font-size: 22px;\r\n  margin-left: 15%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGRhc2hib2FyZC90ZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RkYXNoYm9hcmQvdGRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saXN0ICBhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZ2IoMjAyLCAyNDAsIDE0Mik7XHJcbn1cclxuLnQyIHtcclxuICBjb2xvcjogcmdiKDI1MywgMTk3LCAxODMpO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/tdashboard/tdashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/tdashboard/tdashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Dashboard</mat-toolbar>\n    <mat-nav-list class=\"nav-list\">\n      <mat-list-item><a (click)=\"page = 'ALL TASKS'\" [routerLink]=\"['./myTasks']\">My Tasks</a></mat-list-item>\n      <mat-list-item><a (click)=\"page = 'CREATE TASK'\" [routerLink]=\"['./taskCreate']\">Create Task</a></mat-list-item>\n      <mat-list-item><a (click)=\"page = 'CALENDAR'\" [routerLink]=\"['./cal']\">My Calendar</a></mat-list-item>\n      <mat-list-item><a (click)=\"page = 'WORKING ON TASK'\" [routerLink]=\"['./wrk']\">Work with Task</a></mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span class=\"title\">[ {{data.prgmName | uppercase}} ] Dashboard</span>\n      <span class=\"title t2\">{{page}}</span>\n      <div matTooltip=\"LOGOUT\"style=\"cursor:pointer; font-size: 25px;\" class=\"topright\" (click)=\"logout()\"><mat-icon aria-label=\"Side nav toggle icon\">input</mat-icon></div>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/views/tdashboard/tdashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/tdashboard/tdashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: TdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdashboardComponent", function() { return TdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");






var TdashboardComponent = /** @class */ (function () {
    function TdashboardComponent(global, router, route, breakpointObserver) {
        this.global = global;
        this.router = router;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.data = { prgmName: this.global.getProgramName() };
        this.page = 'ALL TASKS';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    TdashboardComponent.prototype.ngOnInit = function () {
        if (!this.global.getLogged()) {
            this.router.navigate(['/login']);
        }
    };
    TdashboardComponent.prototype.logout = function () {
        window.sessionStorage.clear();
        this.router.navigate(['/login']);
        this.global.setLogged(false);
    };
    TdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tdashboard',
            template: __webpack_require__(/*! ./tdashboard.component.html */ "./src/app/views/tdashboard/tdashboard.component.html"),
            styles: [__webpack_require__(/*! ./tdashboard.component.css */ "./src/app/views/tdashboard/tdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], TdashboardComponent);
    return TdashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/udashboard/udashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/udashboard/udashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VkYXNoYm9hcmQvdWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/udashboard/udashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/udashboard/udashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n  <mat-toolbar>Mentor</mat-toolbar>\n  <mat-nav-list class=\"nav-list\">\n    <mat-list-item><a [routerLink]=\"['./']\">Account</a></mat-list-item>\n    <mat-list-item><a [routerLink]=\"['./enterPrg']\">Enter Program With Passcode</a></mat-list-item>\n    <mat-list-item><a [routerLink]=\"['./prg']\">My Programs</a></mat-list-item>\n    <mat-list-item><a [routerLink]=\"['./createProgram']\">Create New Program</a></mat-list-item>\n  </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">apps</mat-icon>\n      </button>\n      <span class=\"title\">USER Dashboard</span>\n      <div matTooltip=\"LOGOUT\"style=\"cursor:pointer; font-size: 25px;\" class=\"topright\" (click)=\"logout()\"><mat-icon aria-label=\"Side nav toggle icon\">input</mat-icon></div>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/views/udashboard/udashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/udashboard/udashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: UdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UdashboardComponent", function() { return UdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/services/global.service */ "./src/app/framework/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UdashboardComponent = /** @class */ (function () {
    function UdashboardComponent(global, router, route, breakpointObserver) {
        this.global = global;
        this.router = router;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    UdashboardComponent.prototype.ngOnInit = function () {
        if (!this.global.getLogged()) {
            this.router.navigate(['/login']);
        }
    };
    UdashboardComponent.prototype.logout = function () {
        window.sessionStorage.clear();
        this.router.navigate(['/login']);
        this.global.setLogged(false);
    };
    UdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-udashboard',
            template: __webpack_require__(/*! ./udashboard.component.html */ "./src/app/views/udashboard/udashboard.component.html"),
            styles: [__webpack_require__(/*! ./udashboard.component.css */ "./src/app/views/udashboard/udashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_framework_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], UdashboardComponent);
    return UdashboardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    // baseURL: 'http://localhost:8001'
    baseURL: ''
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\GDRIVE\CODE\Aysr_frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map