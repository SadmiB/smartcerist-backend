webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signin_signin_component__ = __webpack_require__("./src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_rooms_rooms_component__ = __webpack_require__("./src/app/components/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__ = __webpack_require__("./src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_servers_servers_component__ = __webpack_require__("./src/app/components/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_notifications_notifications_component__ = __webpack_require__("./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_history_history_component__ = __webpack_require__("./src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_analytics_analytics_component__ = __webpack_require__("./src/app/components/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_component__ = __webpack_require__("./src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_homes_homes_component__ = __webpack_require__("./src/app/components/homes/homes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_room_room_component__ = __webpack_require__("./src/app/components/room/room.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: '/dashboard/homes', pathMatch: 'full' },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_4__components_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'homes', component: __WEBPACK_IMPORTED_MODULE_13__components_homes_homes_component__["a" /* HomesComponent */] },
            { path: 'homes/:homeId', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'homes/:homeId/rooms', component: __WEBPACK_IMPORTED_MODULE_6__components_rooms_rooms_component__["a" /* RoomsComponent */] },
            { path: 'homes/:homeId/rooms/:roomId', component: __WEBPACK_IMPORTED_MODULE_15__components_room_room_component__["a" /* RoomComponent */] },
            { path: 'homes/:homeId/users', component: __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */] },
            { path: 'homes/:homeId/rooms/:roomId/users', component: __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */] },
            { path: 'homes/:homeId/servers', component: __WEBPACK_IMPORTED_MODULE_8__components_servers_servers_component__["a" /* ServersComponent */] },
            { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_6__components_rooms_rooms_component__["a" /* RoomsComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */] },
            { path: 'servers', component: __WEBPACK_IMPORTED_MODULE_8__components_servers_servers_component__["a" /* ServersComponent */] },
            { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_9__components_notifications_notifications_component__["a" /* NotificationsComponent */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_10__components_history_history_component__["a" /* HistoryComponent */] },
            { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_11__components_analytics_analytics_component__["a" /* AnalyticsComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_component__["a" /* SettingsComponent */] }
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_signin_signin_component__ = __webpack_require__("./src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_homes_service__ = __webpack_require__("./src/app/services/homes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_homes_homes_component__ = __webpack_require__("./src/app/components/homes/homes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_users_users_component__ = __webpack_require__("./src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_servers_servers_component__ = __webpack_require__("./src/app/components/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_rooms_rooms_component__ = __webpack_require__("./src/app/components/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_notifications_notifications_component__ = __webpack_require__("./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__ = __webpack_require__("./src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_analytics_analytics_component__ = __webpack_require__("./src/app/components/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_history_history_component__ = __webpack_require__("./src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_rooms_service__ = __webpack_require__("./src/app/services/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_room_room_component__ = __webpack_require__("./src/app/components/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_room_service__ = __webpack_require__("./src/app/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_objects_service__ = __webpack_require__("./src/app/services/objects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_cameras_service__ = __webpack_require__("./src/app/services/cameras.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_objects_objects_component__ = __webpack_require__("./src/app/components/objects/objects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_cameras_cameras_component__ = __webpack_require__("./src/app/components/cameras/cameras.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_homes_homes_component__["a" /* HomesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_servers_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_analytics_analytics_component__["a" /* AnalyticsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_room_room_component__["a" /* RoomComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_objects_objects_component__["a" /* ObjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_cameras_cameras_component__["a" /* CamerasComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_paginator__["b" /* MatPaginatorModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_homes_service__["a" /* HomesService */], __WEBPACK_IMPORTED_MODULE_25__services_rooms_service__["a" /* RoomsService */], __WEBPACK_IMPORTED_MODULE_28__services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_29__services_objects_service__["a" /* ObjectsService */], __WEBPACK_IMPORTED_MODULE_30__services_cameras_service__["a" /* CamerasService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Analytics\" search='true'></app-header>"

/***/ }),

/***/ "./src/app/components/analytics/analytics.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-analytics',
            template: __webpack_require__("./src/app/components/analytics/analytics.component.html"),
            styles: [__webpack_require__("./src/app/components/analytics/analytics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/components/cameras/cameras.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cameras works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/cameras/cameras.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cameras/cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CamerasComponent = /** @class */ (function () {
    function CamerasComponent() {
    }
    CamerasComponent.prototype.ngOnInit = function () {
    };
    CamerasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cameras',
            template: __webpack_require__("./src/app/components/cameras/cameras.component.html"),
            styles: [__webpack_require__("./src/app/components/cameras/cameras.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CamerasComponent);
    return CamerasComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav mode='side' opened='true' id=\"sidenav\">\n    <br>\n    <div>\n        <button mat-button><mat-icon>fiber_manual_record</mat-icon> SMARTCERIST</button>\n    </div>\n    <br>\n    <mat-button-toggle-group #group='matButtonToggleGroup' [vertical]='true' value='homes'>\n      <mat-button-toggle value='homes' routerLink='homes' routerLinkActive>\n        <mat-icon>home</mat-icon> Homes\n      </mat-button-toggle>\n      <mat-button-toggle value='rooms' routerLink='rooms' routerLinkActive>\n        <mat-icon>crop_square</mat-icon> Rooms\n      </mat-button-toggle>\n      <mat-button-toggle value='users' routerLink='users' routerLinkActive>\n        <mat-icon>people</mat-icon> Users\n      </mat-button-toggle>\n      <mat-button-toggle value='servers' routerLink='servers' routerLinkActive>\n        <mat-icon>settings_system_daydream</mat-icon> Servers\n      </mat-button-toggle>\n      <mat-button-toggle value='notifications' routerLink='notifications' routerLinkActive>\n        <mat-icon>notifications</mat-icon>Notifications\n      </mat-button-toggle>\n      <mat-button-toggle value='history' routerLink='history' routerLinkActive>\n        <mat-icon>history</mat-icon> History\n      </mat-button-toggle>\n      <mat-button-toggle value='analytics' routerLink='analytics' routerLinkActive>\n        <mat-icon>assessment</mat-icon> Analytics\n      </mat-button-toggle>\n      <mat-button-toggle value='settings' routerLink='settings' routerLinkActive>\n        <mat-icon>settings</mat-icon> Settings\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n    <router-outlet></router-outlet>\n  \n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%; }\n\n#sidenav {\n  overflow-y: auto;\n  height: 100%;\n  width: 20%;\n  height: auto;\n  background: #37474f;\n  color: white;\n  -webkit-box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);\n          box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22); }\n\ndiv > button {\n  width: 100%;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\nmat-button-toggle-group > .mat-button-toggle {\n  width: 75%;\n  color: white;\n  border-radius: 6px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: 5px;\n  margin: 4px; }\n\n.mat-button-toggle-checked {\n  background: #0c66a1; }\n\nmat-button-toggle-group {\n  width: 90%;\n  padding: 4px;\n  margin: 4px; }\n\nmat-sidenav-content {\n  overflow: scroll; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        if (!auth.isAuthenticated) {
            this.router.navigate(['/signin']);
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"left-part\">\n    <button *ngIf=\"back\" (click)='goBack()' mat-mini-fab  color='#fff'><mat-icon>arrow_back</mat-icon></button>\n    <h4>{{ title }}</h4>\n  </div>\n  <div class=\"right-part\">\n    <mat-form-field>\n      <input matInput placeholder=\"Search\" type=\"search\">\n    </mat-form-field>\n    <button matTooltip=\"Search\" mat-mini-fab color='#fff'><mat-icon>search</mat-icon></button>\n    <button matTooltip=\"Notifications\" mat-icon-button><mat-icon>notifications</mat-icon></button>\n    <button matTooltip=\"{{auth.name}}\" mat-icon-button><mat-icon>person</mat-icon></button>\n    <button matTooltip=\"Signout\" mat-icon-button (click)=\"auth.signout()\"><mat-icon>exit_to_app</mat-icon></button>    \n  </div>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.header h4 {\n  color: #555;\n  margin-left: 4px; }\n\n.left-part, .right-part {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.right-part > button {\n  margin: 8px; }\n\n.left-part {\n  margin: 8px; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, location) {
        this.auth = auth;
        this.location = location;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "back", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "search", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"History\" search='true'></app-header >\n"

/***/ }),

/***/ "./src/app/components/history/history.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("./src/app/components/history/history.component.html"),
            styles: [__webpack_require__("./src/app/components/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header back=\"true\" title='Home details' search=\"fasle\"></app-header>\n\n<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/homes/homes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Homes\" search=\"true\"></app-header > \n<mat-grid-list cols=\"3\" >\n  <mat-grid-tile *ngFor=\"let home of homes\" class=\"tile\">\n    <mat-card class=\"card\">\n      <mat-card-title class=\"header\" [routerLink]=\"[home._id, 'rooms']\">\n        <img src=\"../../../assets/img/card-1.jpeg\" alt=\"home image\">\n      </mat-card-title>\n      <mat-card-content>\n        <h4>{{home.name}}</h4>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-icon-button (click)='deleteHome(home._id)'><mat-icon>delete</mat-icon></button>\n        <button mat-icon-button [routerLink]=\"[home._id]\"><mat-icon>settings</mat-icon></button>\n      </mat-card-actions>\n    </mat-card>\n </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/components/homes/homes.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  width: 100%;\n  padding: 15px;\n  margin: 16px;\n  border-radius: 5%; }\n\n.tile {\n  height: inherit; }\n\n.card > mat-card-actions > button {\n  float: right; }\n\n.header {\n  position: relative;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  top: -30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.header img {\n  position: relative;\n  max-width: 100%;\n  border-radius: 6px; }\n"

/***/ }),

/***/ "./src/app/components/homes/homes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_homes_service__ = __webpack_require__("./src/app/services/homes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomesComponent = /** @class */ (function () {
    function HomesComponent(homeService, auth, snackBar) {
        this.homeService = homeService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.tokenHeader = auth.tokenHeader;
    }
    HomesComponent.prototype.ngOnInit = function () {
        this.getHomes();
    };
    HomesComponent.prototype.handleError = function (error, message) {
        console.error(error);
        this.snackBar.open(message, 'close', { duration: 3000 });
    };
    HomesComponent.prototype.getHomes = function () {
        var _this = this;
        this.homeService.getHomes(this.tokenHeader)
            .subscribe(function (res) {
            _this.homes = res;
        }, function (error) {
            _this.handleError(error, 'Unable to retrieve homes!');
        });
    };
    HomesComponent.prototype.deleteHome = function (homeId) {
        var _this = this;
        console.log('comp delete home..');
        this.homeService.deleteHome(homeId, this.tokenHeader)
            .subscribe(function (res) { return res; }, function (error) {
            _this.handleError(error, 'Unable to delete home!');
        });
    };
    HomesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homes',
            template: __webpack_require__("./src/app/components/homes/homes.component.html"),
            styles: [__webpack_require__("./src/app/components/homes/homes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_homes_service__["a" /* HomesService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSnackBar */]])
    ], HomesComponent);
    return HomesComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"left\">\n    <button mat-button ><mat-icon>fiber_manual_record</mat-icon> SMARTCERIST</button>\n  </div>\n  <div class=\"right\">\n  <button *ngIf=\"!auth.isAuthenticated\" routerLinkActive=\"router-active\" mat-button routerLink='/signin'><mat-icon>fingerprint</mat-icon> Signin</button>\n  <button *ngIf=\"!auth.isAuthenticated\"  routerLinkActive=\"router-active\" mat-button routerLink='/signup'><mat-icon>person_add</mat-icon>  Signup</button>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.left * {\n  color: #fff; }\n\n.right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.right button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  margin-right: 25px; }\n\n.right mat-icon {\n  font-size: 20px; }\n\n.router-active {\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 15px 18px 15px 15px;\n  border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Notifications\" search='false'></app-header >\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/components/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/components/notifications/notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/objects/objects.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  objects works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/objects/objects.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/objects/objects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectsComponent = /** @class */ (function () {
    function ObjectsComponent() {
    }
    ObjectsComponent.prototype.ngOnInit = function () {
    };
    ObjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-objects',
            template: __webpack_require__("./src/app/components/objects/objects.component.html"),
            styles: [__webpack_require__("./src/app/components/objects/objects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ObjectsComponent);
    return ObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header back=\"true\" title='Room details' search=\"false\"></app-header>\n\n<h3 *ngIf=\"objects\">Objects:</h3>\n\n<mat-grid-list cols=\"2\" rowHeight='150px'>\n    <mat-grid-tile  *ngFor=\"let obj of objects\" >\n        \n        <mat-card class=\"card\">\n            <mat-card-header>\n                <mat-card-title>\n                    <mat-icon *ngIf=\"obj.type==='LED'\"> lightbulb_outline </mat-icon>\n                    <mat-icon *ngIf=\"obj.type==='LIGHT'\"> highlight </mat-icon>\n                    <mat-icon *ngIf=\"obj.type==='PRESENCE'\"> remove_red_eye </mat-icon>\n                    <mat-icon *ngIf=\"obj.type==='POWER'\" > power </mat-icon>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <h4>{{obj.name}}</h4>\n                <button mat-raised-button *ngIf=\"obj.type==='LED' && obj.status\" (click)='putLed(obj)'>ON/OFF</button>\n                <p *ngIf=\"obj.status==='Disconnected'\">STATUS: {{obj.status}}</p>\n                <p *ngIf=\"obj.mesure\">Measure: {{obj.mesure}}</p>\n            </mat-card-content>\n        </mat-card>\n\n    </mat-grid-tile>\n</mat-grid-list>\n\n\n<h3 *ngIf=\"cameras\">Cameras:</h3>\n\n\n<mat-card class=\"cam-card\">\n    <mat-card-header>\n        <mat-card-title>\n            <h4>Dahua Camera:</h4>\n        </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <canvas id=\"canvas\"></canvas>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/room/room.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 100%;\n  height: 70px;\n  margin: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 10px;\n  cursor: pointer; }\n\ncanvas#canvas {\n  height: 100%;\n  width: 100%; }\n\n.card > mat-card-header {\n  background-image: -webkit-gradient(linear, left top, right top, from(#4cc4ff), to(#4ca6ff));\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n  -webkit-box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff;\n          box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff;\n  border-radius: 10px; }\n\n.card > mat-card-header {\n  color: white;\n  height: 70px;\n  width: 80px; }\n\n.card > mat-card-header mat-card-title mat-icon {\n  margin-left: 12px;\n  margin-top: 20px; }\n\n.card > mat-card-content {\n  margin-left: 16px;\n  width: inherit; }\n\n.card > mat-card-content button {\n    float: right; }\n\nh3 {\n  margin-left: 8px;\n  color: grey; }\n\n.cam-card {\n  width: 90%;\n  height: 100%;\n  margin: 16px; }\n"

/***/ }),

/***/ "./src/app/components/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_service__ = __webpack_require__("./src/app/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_IotObject__ = __webpack_require__("./src/app/models/IotObject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_objects_service__ = __webpack_require__("./src/app/services/objects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RoomComponent = /** @class */ (function () {
    function RoomComponent(roomService, snackBar, router, objectsService) {
        this.roomService = roomService;
        this.snackBar = snackBar;
        this.router = router;
        this.objectsService = objectsService;
        this.objects = [];
        this.cameras = [];
    }
    RoomComponent.prototype.ngOnInit = function () {
        var roomId = this.router.snapshot.params.roomId;
        var homeId = this.router.snapshot.params.homeId;
        this.getRoom(homeId, roomId);
        var canvas = document.getElementById('canvas');
        var client = new WebSocket('ws://10.1.88.167:9999');
        var player = new jsmpeg(client, { canvas: canvas });
    };
    RoomComponent.prototype.putLed = function (obj) {
        var _this = this;
        var val;
        this.getObjectMesure(obj);
        if (obj.mesure === '1') {
            val = '0';
        }
        else {
            val = '1';
        }
        console.log('putLed..', val);
        this.objectsService.putLed(val)
            .subscribe(function (res) {
            _this.getObjectMesure(obj);
        }, function (error) {
            _this.handleError(error, 'Unable to toggle led');
        });
    };
    RoomComponent.prototype.getObjectMesure = function (object) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getObjectMesure...');
                        if (!(object.type !== 'POWER')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.objectsService.getObjectMesure(object)
                                .subscribe(function (res) {
                                object.mesure = res;
                                object.status = 'Connected';
                            }, function (error) {
                                object.status = 'Disconnected';
                                _this.handleError(error, "Unable to get " + object.name + " value");
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RoomComponent.prototype.handleError = function (error, message) {
        console.error(error);
        this.snackBar.open(message, 'close', { duration: 3000 });
    };
    RoomComponent.prototype.getObjects = function (objectsIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getObjects...');
                        return [4 /*yield*/, objectsIds.forEach(function (objectId) {
                                console.log('getObjects...', objectId);
                                _this.objectsService.getServerByObjectId(objectId)
                                    .subscribe(function (res) {
                                    var server = res;
                                    console.log('getObjects server: ', server);
                                    var object = _this.getObject(server, objectId);
                                    _this.objects.push(object);
                                    console.log('this.objects:', _this.objects);
                                    _this.getObjectMesure(object);
                                }, function (error) {
                                    _this.handleError(error, 'Unable to get objects');
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomComponent.prototype.getCameras = function (camerasIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, camerasIds.forEach(function (camera) {
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomComponent.prototype.getObject = function (server, objectId) {
        console.log('getObject server: ', server);
        var theOject = new __WEBPACK_IMPORTED_MODULE_4__models_IotObject__["a" /* IotObject */]();
        server.beacons[0].objects.some(function (object) {
            if (object._id === objectId) {
                theOject.id = object._id;
                theOject.name = object.name;
                theOject.path = object.path;
                theOject.type = object.type.toUpperCase();
                return true;
            }
        });
        theOject.server_ipv6 = server.ipv6;
        theOject.server_lipv6 = server.lipv6;
        theOject.server_ipv4 = server.ipv4;
        theOject.server_lipv4 = server.lipv4;
        theOject.ipv6 = server.beacons[0].ipv6;
        console.log('obj: ', theOject);
        return theOject;
    };
    RoomComponent.prototype.getRoom = function (homeId, roomId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.roomService.getRoom(homeId, roomId)
                            .subscribe(function (res) {
                            _this.room = res;
                            _this.getObjects(_this.room.objects);
                            _this.getCameras(_this.room.cameras);
                        }, function (error) {
                            _this.handleError(error, 'Unable to get room');
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-room',
            template: __webpack_require__("./src/app/components/room/room.component.html"),
            styles: [__webpack_require__("./src/app/components/room/room.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_objects_service__["a" /* ObjectsService */]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/components/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header back=\"true\" title=\"Rooms\" search=\"true\"></app-header >\n<mat-grid-list cols=\"4\">\n    <mat-grid-tile *ngFor='let room of rooms' class=\"tile\">\n        <mat-card class=\"card\">\n            <mat-card-title  class=\"header\"  [routerLink]=\"[room._id]\">\n                <mat-icon>airline_seat_individual_suite</mat-icon>\n            </mat-card-title>\n            <mat-card-content>\n                    <h4>{{room.name}}</h4>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-icon-button><mat-icon>delete</mat-icon></button>\n                <button mat-icon-button><mat-icon>settings</mat-icon></button>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/components/rooms/rooms.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  width: 100%;\n  height: 80px;\n  padding: 16px;\n  margin: 8px;\n  border-radius: 5%; }\n\n.tile {\n  height: inherit; }\n\n.card > mat-card-actions > button {\n  float: right; }\n\n.header {\n  position: relative;\n  top: -40px;\n  float: left;\n  text-align: center;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.2);\n          box-shadow: rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 15px;\n  position: relative;\n  cursor: pointer;\n  overflow: hidden; }\n\n.header mat-icon {\n  font-size: 46px;\n  line-height: 56px;\n  width: 66px;\n  height: 66px;\n  color: #fff;\n  background: linear-gradient(60deg, #0c66a1, #37474f);\n  border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/components/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rooms_service__ = __webpack_require__("./src/app/services/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(roomsService, auth, snackBar, route) {
        this.roomsService = roomsService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.route = route;
        this.tokenHeader = auth.tokenHeader;
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var homeId = this.route.snapshot.params.homeId;
        this.getRooms(homeId);
    };
    RoomsComponent.prototype.handleError = function (error, message) {
        console.error(error);
        this.snackBar.open(message, 'close', { duration: 3000 });
    };
    RoomsComponent.prototype.getRooms = function (homeId) {
        var _this = this;
        this.roomsService.getRooms(homeId, this.tokenHeader).subscribe(function (res) {
            return _this.rooms = res;
        }, function (error) {
            _this.handleError(error, 'Unable to retrieve rooms');
        });
    };
    RoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rooms',
            template: __webpack_require__("./src/app/components/rooms/rooms.component.html"),
            styles: [__webpack_require__("./src/app/components/rooms/rooms.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rooms_service__["a" /* RoomsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/components/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Servers\" search='true'></app-header >\n"

/***/ }),

/***/ "./src/app/components/servers/servers.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-servers',
            template: __webpack_require__("./src/app/components/servers/servers.component.html"),
            styles: [__webpack_require__("./src/app/components/servers/servers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Settings\" search='false'></app-header >\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"background\"></div>  \n<mat-card id='card'>\n  <mat-card-title class=\"card-header\">\n    <h4>Sign In</h4>\n  </mat-card-title>\n  <mat-card-content>\n      <mat-form-field class=\"input\">\n        <input [(ngModel)]='loginData.email' matInput placeholder=\"Email\" type=\"email\">\n        \n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input [(ngModel)]='loginData.password'matInput placeholder=\"Password\" type=\"password\">\n      </mat-form-field>\n      <br><br>\n      <button id='signin-btn' mat-raised-button color='primary' (click)='signin()'>Login</button>\n      <br>\n      <hr>    \n      <button id='signin-btn' mat-raised-button color='#fff'>Google</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ".input {\n  width: 290px; }\n\n#card {\n  width: 295px;\n  height: inherit;\n  margin: auto;\n  margin-top: 3%;\n  border-radius: 6px; }\n\n#signin-btn {\n  width: 290px; }\n\n.card-header {\n  position: relative;\n  overflow: hidden;\n  top: -40px;\n  width: 80%;\n  padding: 25px;\n  border-radius: 5px;\n  background: #37474f;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(158, 154, 155, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(158, 154, 155, 0.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.card-header h4 {\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 25px;\n  margin-top: 5px; }\n\nhr {\n  width: 100px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginData = {
            email: '',
            password: ''
        };
        if (auth.isAuthenticated) {
            this.router.navigate(['/dashboard/homes']);
        }
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function () {
        this.auth.signin(this.loginData);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/components/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"background\"></div>  \n<mat-card id='card'>\n  <mat-card-title class=\"card-header\">\n      <h4>Sign Up</h4>\n  </mat-card-title>\n  <mat-card-content>\n    <form [formGroup]='form' (ngSubmit)='onSubmit()'>\n      <mat-form-field class=\"input\">\n        <input [ngClass]=\"{'error' : isValid('firstName')}\" matInput placeholder=\"First Name\" formControlName='firstName'>\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input [ngClass]=\"{'error' : isValid('lastName')}\" matInput placeholder=\"Last Name\" formControlName='lastName'>  \n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input [ngClass]=\"{'error' : isValid('email')}\" matInput placeholder=\"Email\" type=\"email\" formControlName='email'>  \n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input [ngClass]=\"{'error' : isValid('password')}\" matInput placeholder=\"Password\" type=\"password\" formControlName='password'>   \n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input [ngClass]=\"{'error' : isValid('confirmPassword')}\" matInput placeholder=\"Confirm Password\" type=\"password\" formControlName='confirmPassword'>\n      </mat-form-field>\n     \n      <span *ngIf=\"form.errors?.mismatchedFields\">Password do not match</span>\n      <br>\n      <button id='signup-btn' (click)='signup' mat-raised-button color='primary'>Sign Up</button>\n      <br><hr>\n      <button id='signup-btn' (click)='signup' mat-raised-button color='#fff'>Google</button>      \n    </form>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ".error {\n  background-color: #fff0f0; }\n\n.input {\n  width: 290px; }\n\n#card {\n  width: 295px;\n  height: inherit;\n  margin: auto;\n  border-radius: 6px; }\n\n#signup-btn {\n  width: 290px; }\n\n.card-header {\n  position: relative;\n  overflow: hidden;\n  top: -40px;\n  width: 80%;\n  padding: 25px;\n  border-radius: 5px;\n  background: #37474f;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(158, 154, 155, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(158, 154, 155, 0.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.card-header h4 {\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 25px;\n  margin-top: 5px; }\n\nhr {\n  width: 100px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        if (auth.isAuthenticated) {
            this.router.navigate(['/dashboard/homes']);
        }
        this.form = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, emailValid()]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        }, { validator: matchingFields('password', 'confirmPassword') });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        this.auth.signup(this.form.value);
    };
    SignupComponent.prototype.isValid = function (control) {
        return this.form.controls[control].isValid && this.form.controls[control].touched;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());

function matchingFields(field1, field2) {
    return function (form) {
        if (form.controls[field1].value !== form.controls[field2].value) {
            return { mismatchedFields: true };
        }
    };
}
function emailValid() {
    return function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}


/***/ }),

/***/ "./src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Users\" search='true'></app-header >\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\">\n   \n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matHeaderCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"firstName\">\n      <mat-header-cell *matHeaderCellDef> First Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.firstName}} </mat-cell>\n    </ng-container>\n\n \n    <ng-container matColumnDef=\"lastName\">\n      <mat-header-cell *matHeaderCellDef> Last Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.lastName}} </mat-cell>\n    </ng-container>\n\n \n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n              (click)=\"selection.toggle(row)\" >\n    </mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mat-column-select {\n  overflow: visible; }\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, auth, route, snackBar) {
        this.userService = userService;
        this.auth = auth;
        this.route = route;
        this.snackBar = snackBar;
        this.displayedColumns = ['firstName', 'lastName', 'email'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.tokenHeader = auth.tokenHeader;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsersRoom(this.route.snapshot.params.homeId, this.route.snapshot.params.roomId);
    };
    UsersComponent.prototype.handleError = function (error, message) {
        console.error(error);
        this.snackBar.open(message, 'close', { duration: 3000 });
    };
    UsersComponent.prototype.getUsersHome = function (homeId) {
        var _this = this;
        this.userService.getHomeUsers(this.tokenHeader, homeId)
            .subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatTableDataSource */](res);
        }, function (error) {
            _this.handleError(error, 'Unable to retrieve users!');
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UsersComponent.prototype.getUsersRoom = function (homeId, roomId) {
        var _this = this;
        this.userService.getRoomUsers(this.tokenHeader, homeId, roomId)
            .subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatTableDataSource */](res);
        }, function (error) {
            _this.handleError(error, 'Unable to retrieve users!');
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    /*  getUser(userId){
        this.userService.getUser(this.tokenHeader,userId)
        .subscribe(res => {
          this.user=res;
        }, error => {
          this.handleError(error, 'Unable to retrieve User');
        });
      }*/
    UsersComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    UsersComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/components/users/users.component.html"),
            styles: [__webpack_require__("./src/app/components/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSnackBar */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTableModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTableModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/Consts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consts; });
var Consts = /** @class */ (function () {
    function Consts() {
    }
    Consts.BASE_URL = 'http://10.1.88.167:3000';
    return Consts;
}());



/***/ }),

/***/ "./src/app/models/IotObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IotObject; });
var IotObject = /** @class */ (function () {
    function IotObject() {
    }
    return IotObject;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router, snackBar) {
        this.httpClient = httpClient;
        this.router = router;
        this.snackBar = snackBar;
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "tokenHeader", {
        get: function () {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
            return header;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.handleError = function (error, message) {
        console.error(error);
        this.snackBar.open(message, 'close', { duration: 3000 });
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        delete user.confirmPassword;
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_4__models_Consts__["a" /* Consts */].BASE_URL + '/signup', user)
            .subscribe(function (res) {
            _this.authenticate(res);
        }, function (error) {
            _this.handleError(error, 'Unable to Sign up!');
        });
    };
    AuthService.prototype.signin = function (loginData) {
        var _this = this;
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_4__models_Consts__["a" /* Consts */].BASE_URL + '/signin', loginData)
            .subscribe(function (res) {
            console.log(res);
            _this.authenticate(res);
        }, function (error) {
            _this.handleError(error, 'Unable to Sign in!');
        });
    };
    AuthService.prototype.signout = function () {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/signin']);
    };
    AuthService.prototype.authenticate = function (res) {
        var authResponse = res;
        if (!authResponse.token) {
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/dashboard/homes']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSnackBar */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cameras.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CamerasService = /** @class */ (function () {
    function CamerasService(httpClient) {
        this.httpClient = httpClient;
    }
    CamerasService.prototype.getServerByCameraId = function (cameraId) {
        console.log('get Server by camera Id');
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/cameras/' + cameraId);
    };
    CamerasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CamerasService);
    return CamerasService;
}());



/***/ }),

/***/ "./src/app/services/homes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomesService = /** @class */ (function () {
    function HomesService(httpClient) {
        this.httpClient = httpClient;
    }
    HomesService.prototype.getHomes = function (tokenHeader) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/user/homes', { headers: tokenHeader });
    };
    HomesService.prototype.deleteHome = function (homeId, tokenHeader) {
        console.log('serv delete home..');
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/user/homes/' + homeId, { headers: tokenHeader });
    };
    HomesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomesService);
    return HomesService;
}());



/***/ }),

/***/ "./src/app/services/objects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObjectsService = /** @class */ (function () {
    function ObjectsService(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_1__models_Consts__["a" /* Consts */].BASE_URL + '/api';
    }
    ObjectsService.prototype.getServerByObjectId = function (objectId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_1__models_Consts__["a" /* Consts */].BASE_URL + '/objects/' + objectId);
    };
    ObjectsService.prototype.getObjectMesure = function (object) {
        console.log(object.path, object.type);
        return this.httpClient.get(this.BASE_URL + object.path, { responseType: 'text' });
    };
    ObjectsService.prototype.putLed = function (val) {
        return this.httpClient.put(this.BASE_URL + '/lights/led3', { 'payload': val }, { responseType: 'text' });
    };
    ObjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ObjectsService);
    return ObjectsService;
}());



/***/ }),

/***/ "./src/app/services/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomService = /** @class */ (function () {
    function RoomService(httpClient) {
        this.httpClient = httpClient;
    }
    RoomService.prototype.getRoom = function (homeId, roomId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/user/' + homeId + '/rooms/' + roomId);
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/services/rooms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomsService = /** @class */ (function () {
    function RoomsService(httpClient) {
        this.httpClient = httpClient;
    }
    RoomsService.prototype.getRooms = function (homeId, tokenHeader) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + ("/user/" + homeId + "/rooms"), { headers: tokenHeader });
    };
    RoomsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RoomsService);
    return RoomsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Consts__ = __webpack_require__("./src/app/models/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getHomeUsers = function (tokenHeader, homeId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/' + homeId + '/users', { headers: tokenHeader });
    };
    UserService.prototype.getRoomUsers = function (tokenHeader, homeId, roomId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/' + homeId + '/' + roomId + '/users', { headers: tokenHeader });
    };
    UserService.prototype.getUser = function (tokenHeader, userId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__models_Consts__["a" /* Consts */].BASE_URL + '/users/' + userId, { headers: tokenHeader });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map