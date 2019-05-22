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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row mt-4\">\n  \n  <div class=\"col-12 \">\n  \n                  <h3 class=\"text-center\"><u><b>Online Cork Board:</b></u></h3>\n           \n                  An <b>online cork board</b> is a place where people can leave any types of messages and notifications, for example, to advertise things, announce events or provide any information.\n                  Notice board online it can be placed on digital devices such computers, tabs, mobile phones etc.<br>\n                  \n                  This online cork board project is very helpful for all type of users like existing users and new users. So admin can leave and erase notification for other people to read and see.</div>\n  \n  \n  \n  \n  \n  </div>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students/students.component */ "./src/app/students/students.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noticeboard/noticeboard.component */ "./src/app/noticeboard/noticeboard.component.ts");
/* harmony import */ var _studentupdate_studentupdate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./studentupdate/studentupdate.component */ "./src/app/studentupdate/studentupdate.component.ts");
/* harmony import */ var _facultyupdate_facultyupdate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./facultyupdate/facultyupdate.component */ "./src/app/facultyupdate/facultyupdate.component.ts");
/* harmony import */ var _studentnotifications_studentnotifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./studentnotifications/studentnotifications.component */ "./src/app/studentnotifications/studentnotifications.component.ts");
/* harmony import */ var _facultynotifications_facultynotifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./facultynotifications/facultynotifications.component */ "./src/app/facultynotifications/facultynotifications.component.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sort.pipe */ "./src/app/sort.pipe.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _students_students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_5__["FacultyComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_12__["NoticeboardComponent"],
                _studentupdate_studentupdate_component__WEBPACK_IMPORTED_MODULE_13__["StudentupdateComponent"],
                _facultyupdate_facultyupdate_component__WEBPACK_IMPORTED_MODULE_14__["FacultyupdateComponent"],
                _studentnotifications_studentnotifications_component__WEBPACK_IMPORTED_MODULE_15__["StudentnotificationsComponent"],
                _facultynotifications_facultynotifications_component__WEBPACK_IMPORTED_MODULE_16__["FacultynotificationsComponent"],
                _sort_pipe__WEBPACK_IMPORTED_MODULE_20__["SortPipe"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_21__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
            ],
            providers: [src_app_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n   \n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"https://s8.postimg.cc/fpdzeme39/carousel2.jpg\" alt=\"Second slide\" height=\"500px\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"https://s8.postimg.cc/xffnzpp45/carousel3.jpg\" alt=\"Third slide\" height=\"500px\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(httpclient) {
        this.httpclient = httpclient;
    }
    DataService.prototype.getNotice = function () {
        return this.httpclient.get('/home');
    };
    DataService.prototype.getNotice1 = function () {
        return this.httpclient.get('/faculty/notificationsfaculty');
    };
    DataService.prototype.getNotice2 = function () {
        return this.httpclient.get('/students/notificationsstudents');
    };
    DataService.prototype.getRegister = function (v) {
        console.log(v);
        return this.httpclient.post('/home/register', v);
    };
    DataService.prototype.getLogin = function (v) {
        console.log(v);
        return this.httpclient.post('/home/login', v);
    };
    DataService.prototype.onDelete = function (v) {
        console.log(v);
        return this.httpclient.delete('/del' + "/" + v);
    };
    DataService.prototype.onCreate = function (v) {
        console.log(v);
        return this.httpclient.post('/faculty/notificationsfaculty', v);
    };
    DataService.prototype.onSave = function (v) {
        console.log(v);
        return this.httpclient.put('/faculty/notificationsfaculty', v);
    };
    DataService.prototype.onUpdate = function (v) {
        console.log(v);
        return this.httpclient.put('/students/updateprofilestudents', v);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark \" style=\"background-color: rgb(58, 58, 58)\">\n  <img src=\"/assets/logonavbarhome.png\" height=\"60px\" href=\"#\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"faculty\" >Home </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" style=\"margin-left: 800px\">Logout</a>\n      </li>\n\n\n\n    </ul>\n\n  </div>\n</nav>\n\n<div class=\"row mt-4\">\n\n\n  <div class=\"col-1\"></div>\n  <div class=\"col-2 bg-warning\">\n    <br>\n    <br>\n    <br>\n    <img src=\"/assets/login3.jpg\" height=\"120px\" width=\"150px\">\n    <br>\n    <br>\n    <a routerLink=\"updateprofilefaculty\"> <h3>Update Profile</h3></a>\n    <br>\n    <br>\n    <br>\n    <a routerLink=\"notificationsfaculty\"><h3>Notifications</h3></a>\n\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n\n\n  </div>\n  <div class=\"col-8 bg-info\">\n\n    <router-outlet ></router-outlet>\n\n\n\n  </div>\n  <div class=\"col-1\"></div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacultyComponent = /** @class */ (function () {
    function FacultyComponent() {
    }
    FacultyComponent.prototype.ngOnInit = function () {
    };
    FacultyComponent.prototype.readNotice = function (value) {
        console.log(value);
    };
    FacultyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacultyComponent);
    return FacultyComponent;
}());



/***/ }),

/***/ "./src/app/facultynotifications/facultynotifications.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/facultynotifications/facultynotifications.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facultynotifications/facultynotifications.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/facultynotifications/facultynotifications.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">\n  <u>Faculty Notifications:</u>\n  <button type=\"button\" style=\"margin-left: 400px\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n    Create\n  </button>\n</h2>\n\n\n\n\n<!-- Button trigger modal -->\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Create Notification:</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n\n        <form #refForm=\"ngForm\" (ngSubmit)=\"onCreate(refForm.value)\">\n\n          <label>Sno:</label>\n          <input type=\"number\" class=\"form-control\" name=\"sno\" [(ngModel)]=\"sno1\" #refname=\"ngModel\">\n          <label>Batch no:</label>\n          <input type=\"number\" class=\"form-control\" name=\"batch\" [(ngModel)]=\"batch1\" #refname=\"ngModel\">\n          <label>Notification:</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name1\" #refname=\"ngModel\">\n          <label>Date:</label>\n          <input type=\"date\" class=\"form-control mb-4\" name=\"date\" [(ngModel)]=\"date1\" #refname=\"ngModel\">\n\n          <button type=\"submit\" class=\"btn btn-success\">Create Nofication</button>\n\n\n          <br>\n\n\n\n\n\n\n\n        </form>\n\n\n\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n<br>\n\n\n\n<input [(ngModel)]=\"searchTerm\" placeholder=\"search text goes here\" class=\"form-control\">\n\n<table class=\"table table-hover mt-2\">\n  <thead class=\"table table-dark\" style=\"color:rgb(230, 14, 14)\">\n    <th>\n      <a (click)=\"sort('sno')\">Sno</a>\n    </th>\n    <th>\n      <a (click)=\"sort('batch')\">Batch no</a>\n    </th>\n    <th>\n      <a (click)=\"sort('name')\">Batch Notification</a>\n    </th>\n    <th>\n      <a (click)=\"sort('date')\">Date</a>\n    </th>\n\n  </thead>\n  <!-- sort pipe-->\n  <tr *ngFor=\"let j of datafromnotice| sort:{property: column, direction: direction}| search:searchTerm\" style=\"color:rgb(7, 33, 29)\">\n    <td>{{j.sno}}</td>\n    <td>{{j.batch}}</td>\n    <td>{{j.name}}</td>\n    <td>{{j.date}}</td>\n    <button (click)=onDelete(j) class=\"btn btn-danger\">X</button>\n    <button class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#exampleModal\" \n    (click)=onEdit(j) >Edit</button>\n\n  </tr>\n\n\n\n\n</table>\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Notification:</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n\n\n        <form #refForm=\"ngForm\" (ngSubmit)=\"onSave(refForm.value)\">\n\n          <label>Sno:</label>\n          <input type=\"number\" class=\"form-control\" name=\"sno\" [(ngModel)]=\"sno1\" #refname=\"ngModel\">\n          <label>Batch no:</label>\n          <input type=\"number\" class=\"form-control\" name=\"batch\" [(ngModel)]=\"batch1\" #refname=\"ngModel\">\n          <label>Notification:</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name1\" #refname=\"ngModel\">\n          <label>Date:</label>\n          <input type=\"date\" class=\"form-control mb-4\" name=\"date\" [(ngModel)]=\"date1\" #refname=\"ngModel\">\n\n          <button type=\"submit\" class=\"btn btn-success\">Update</button>\n\n\n          <br>\n\n\n\n\n\n\n\n        </form>\n\n\n\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/facultynotifications/facultynotifications.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/facultynotifications/facultynotifications.component.ts ***!
  \************************************************************************/
/*! exports provided: FacultynotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultynotificationsComponent", function() { return FacultynotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacultynotificationsComponent = /** @class */ (function () {
    function FacultynotificationsComponent(ds) {
        this.ds = ds;
        this.tempobj = {};
    }
    FacultynotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getNotice1().subscribe(function (data) { return _this.datafromnotice = data; });
    };
    FacultynotificationsComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
        //this.sort(this.column);
    };
    ;
    FacultynotificationsComponent.prototype.onDelete = function (d) {
        var _this = this;
        console.log(d._id);
        this.ds.onDelete(d._id).subscribe(function (data) { return _this.datafromnotice = data; });
    };
    FacultynotificationsComponent.prototype.onCreate = function (v) {
        var _this = this;
        console.log(v);
        this.ds.onCreate(v).subscribe(function (data) { return _this.datafromnotice = data; });
    };
    FacultynotificationsComponent.prototype.onSave = function (v) {
        var _this = this;
        console.log(v);
        this.tempobj._id = this._id;
        this.tempobj.sno = this.sno1;
        this.tempobj.batch = this.batch1;
        this.tempobj.name = this.name1;
        this.tempobj.date = this.date1;
        this.ds.onSave(this.tempobj).subscribe(function (data) { return _this.datafromnotice = data; });
    };
    FacultynotificationsComponent.prototype.onEdit = function (v) {
        console.log(v);
        this._id = v._id;
        this.sno1 = v.sno;
        this.batch1 = v.batch;
        this.name1 = v.name;
        this.date1 = v.date;
    };
    FacultynotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facultynotifications',
            template: __webpack_require__(/*! ./facultynotifications.component.html */ "./src/app/facultynotifications/facultynotifications.component.html"),
            styles: [__webpack_require__(/*! ./facultynotifications.component.css */ "./src/app/facultynotifications/facultynotifications.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FacultynotificationsComponent);
    return FacultynotificationsComponent;
}());



/***/ }),

/***/ "./src/app/facultyupdate/facultyupdate.component.css":
/*!***********************************************************!*\
  !*** ./src/app/facultyupdate/facultyupdate.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facultyupdate/facultyupdate.component.html":
/*!************************************************************!*\
  !*** ./src/app/facultyupdate/facultyupdate.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Name</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\"> New Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\"> Confirm Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n\n\n  <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n</form>"

/***/ }),

/***/ "./src/app/facultyupdate/facultyupdate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/facultyupdate/facultyupdate.component.ts ***!
  \**********************************************************/
/*! exports provided: FacultyupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyupdateComponent", function() { return FacultyupdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacultyupdateComponent = /** @class */ (function () {
    function FacultyupdateComponent() {
    }
    FacultyupdateComponent.prototype.ngOnInit = function () {
    };
    FacultyupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facultyupdate',
            template: __webpack_require__(/*! ./facultyupdate.component.html */ "./src/app/facultyupdate/facultyupdate.component.html"),
            styles: [__webpack_require__(/*! ./facultyupdate.component.css */ "./src/app/facultyupdate/facultyupdate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacultyupdateComponent);
    return FacultyupdateComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <app-navbar></app-navbar>\n  <div class=\"row\">\n\n    <div class=\"col-7\">\n\n\n\n    \n        <app-carousel></app-carousel>\n    \n      <div >\n        \n      </div>\n\n\n    </div>\n\n    <div class=\"col-5\">\n\n      <app-noticeboard></app-noticeboard>\n\n\n    </div>\n\n  </div>\n  <router-outlet></router-outlet>\n\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 \">\n  <div class=\"col-2\"></div>\n  <div class=\"col-8  jumbotron\" style=\"background-color: aquamarine\">\n\n    <form #refForm=\"ngForm\" (ngSubmit)=\"onLogin(refForm.value)\">\n      <div class=\"form-group\">\n        <label>Username:</label>\n        <span class=\"alert text-danger\" *ngIf=\"refname1.invalid&&refname1.touched\" >*Atleast 4 characters</span>     \n        \n\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"Enter username\" \n        name=\"uname\" [(ngModel)]=\"uname1\" #refname1=\"ngModel\"  minlength=\"4\" required>\n\n       \n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password:</label>\n        <span class=\"alert text-danger\" *ngIf=\"refname2.invalid&&refname2.touched\" >*Please enter valid password</span>     \n        \n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" \n        name=\"password\" [(ngModel)]=\"password1\"  #refname2=\"ngModel\" minlength=\"4\"  required>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n\n      <button style=\"margin-left: 10px\">Forgot password ?</button>\n\n      <button class=\"btn btn-primary float-right\" (click)=\"onRegister()\">Register</button>\n\n    </form>\n\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ds) {
        this.router = router;
        this.ds = ds;
        this.msg = "user exists";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['/home/register']);
    };
    LoginComponent.prototype.onLogin = function (ref) {
        var _this = this;
        if (ref.uname == "goud" && ref.password == "srikanth") {
            this.router.navigate(['/faculty']);
        }
        else {
            console.log(ref);
            this.ds.getLogin(ref).subscribe(function (msg) {
                alert(msg);
                if (_this.msg == msg) {
                    _this.router.navigate(['/students']);
                }
            });
        }
        // onLogin(ref)
        // {
        //   console.log(ref);
        //   if (ref.username = "goud" && ref.password == "srikanth") {
        //            this.router.navigate(['/faculty']);
        //         }
        //   else{
        //            this.ds.getLogin(ref).subscribe(msg => {
        //                alert(msg);
        //               this.router.navigate(['/students']);
        //         });
        // }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark \" style=\"background-color: rgb(58, 58, 58)\">\n  <img src=\"https://s8.postimg.cc/adz2tzs1h/logonavbarhome.png\" height=\"60px\" href=\"#\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link  \" href=\"#\">Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"aboutus\">About us</a>\n      </li>\n      <li class=\"nav-item text-light\" style=\"margin-left: 150px\">\n        <h3 class=\"text-primary\">\n          <b>\n            <u>\n              Online Cork Board</u>\n          </b>\n        </h3>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"login\" style=\"margin-left: 300px\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"register\">Register</a>\n      </li>\n\n\n    </ul>\n\n  </div>\n</nav>\n\n<div class=\"footer fixed-bottom text-light\" style=\"background-color: rgb(58, 58, 58)\">\n\n  <marquee>All rights reserved</marquee>\n\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/noticeboard/noticeboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/noticeboard/noticeboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .centered {\n    position: absolute;\n    top: 53%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .top-left {\n    position: absolute;\n    top: 130px;\n    left: 130px;\n}"

/***/ }),

/***/ "./src/app/noticeboard/noticeboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/noticeboard/noticeboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <img src=\"/assets/noticeboard4.gif\" alt=\"Snow\" style=\"width:100%;\" height=\"500px\">\n\n  <div class=\"top-left text-light \">\n\n  </div>\n\n  <div class=\"centered text-light mt-3\">\n    <marquee onMouseOver=\"this.stop()\" onMouseOut=\"this.start()\" scrollamount=\"2\" direction=\"up\">\n      <a routerLink=\"login\" *ngFor=\"let i of datafromnotice\">\n        <h4>{{i.name}}</h4>\n      </a>\n    </marquee>\n  </div>\n"

/***/ }),

/***/ "./src/app/noticeboard/noticeboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/noticeboard/noticeboard.component.ts ***!
  \******************************************************/
/*! exports provided: NoticeboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardComponent", function() { return NoticeboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeboardComponent = /** @class */ (function () {
    function NoticeboardComponent(ds) {
        this.ds = ds;
    }
    NoticeboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getNotice().subscribe(function (data) { return _this.datafromnotice = data; });
    };
    NoticeboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticeboard',
            template: __webpack_require__(/*! ./noticeboard.component.html */ "./src/app/noticeboard/noticeboard.component.html"),
            styles: [__webpack_require__(/*! ./noticeboard.component.css */ "./src/app/noticeboard/noticeboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], NoticeboardComponent);
    return NoticeboardComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  \n    <div class=\"col-2\"></div>\n\n\n\n\n\n    <div class=\"col-8 jumbotron\" style=\"background-color: aquamarine\">\n  \n  \n  \n      <form #refForm=\"ngForm\" (ngSubmit)=\"onLogin(refForm.value)\" >\n  \n        <label for=\"fname\" >Full name:</label>\n        <span class=\"alert text-danger\" *ngIf=\"refname1.invalid&&refname1.touched\" >*Plz enter full name</span>     \n        <i class=\"fa fa-user icon\"></i>\n        <input type=\"text\"  id=\"fname\"    minlength=\"4\"  class=\"form-control\"  \n        name=\"fname\"  [(ngModel)]=\"fname1\"  #refname1=\"ngModel\"  required>\n\n        \n\n\n\n        <label>Username:</label>\n\n        <span class=\"alert text-danger\" *ngIf=\"refname2.invalid&&refname2.touched\" >*Atleast 4 characters</span>     \n        <input type=\"text\" class=\"form-control\" name=\"uname\"  [(ngModel)]=\"uname1\"  #refname2=\"ngModel\" minlength=\"4\" required >\n\n\n        <label>Password:</label>\n\n        <span class=\"alert text-danger\" *ngIf=\"refname3.invalid&&refname3.touched\" >*Enter valid password</span>\n        <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"password1\"  #refname3=\"ngModel\"  minlength=\"4\" required>\n\n\n        <label>Mobile number:</label>\n\n        <span class=\"alert text-danger\" *ngIf=\"refname4.invalid&&refname4.touched\" >*Enter valid number</span>\n        <input type=\"number\" class=\"form-control mb-4\" name=\"mobile_number\"  [(ngModel)]=\"mobile_number1\"  #refname4=\"ngModel\" minlength=\"10\" required>\n  \n        <button  type=\"submit\" class=\"btn btn-primary\" >Register</button>\n  \n        <button class=\"btn btn-danger\" style=\"margin-left: 10px\" type=\"reset\">Cancel</button><br><br>\n  \n  \n  \n  \n  \n  \n  \n      </form>\n  \n  \n  \n  \n  \n    </div>\n  \n  \n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, ds) {
        this.router = router;
        this.ds = ds;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onLogin = function (ref) {
        var _this = this;
        console.log(ref);
        this.ds.getRegister(ref).subscribe(function (msg) {
            alert(msg);
            _this.router.navigate(['/home/login']);
        });
        //  
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_students_students_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/students/students.component */ "./src/app/students/students.component.ts");
/* harmony import */ var src_app_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var src_app_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var src_app_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_studentupdate_studentupdate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/studentupdate/studentupdate.component */ "./src/app/studentupdate/studentupdate.component.ts");
/* harmony import */ var src_app_studentnotifications_studentnotifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/studentnotifications/studentnotifications.component */ "./src/app/studentnotifications/studentnotifications.component.ts");
/* harmony import */ var src_app_facultyupdate_facultyupdate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/facultyupdate/facultyupdate.component */ "./src/app/facultyupdate/facultyupdate.component.ts");
/* harmony import */ var src_app_facultynotifications_facultynotifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/facultynotifications/facultynotifications.component */ "./src/app/facultynotifications/facultynotifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: "home", component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                        children: [{ path: "aboutus", component: src_app_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"] },
                            { path: "login", component: src_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                            { path: "register", component: src_app_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
                        ]
                    },
                    {
                        path: "", redirectTo: "home", pathMatch: "full",
                    },
                    {
                        path: "students", component: src_app_students_students_component__WEBPACK_IMPORTED_MODULE_3__["StudentsComponent"],
                        children: [{ path: "updateprofilestudents", component: src_app_studentupdate_studentupdate_component__WEBPACK_IMPORTED_MODULE_9__["StudentupdateComponent"] },
                            { path: "notificationsstudents", component: src_app_studentnotifications_studentnotifications_component__WEBPACK_IMPORTED_MODULE_10__["StudentnotificationsComponent"] }
                        ]
                    },
                    {
                        path: "faculty", component: src_app_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__["FacultyComponent"],
                        children: [{ path: "updateprofilefaculty", component: src_app_facultyupdate_facultyupdate_component__WEBPACK_IMPORTED_MODULE_11__["FacultyupdateComponent"] },
                            { path: "notificationsfaculty", component: src_app_facultynotifications_facultynotifications_component__WEBPACK_IMPORTED_MODULE_12__["FacultynotificationsComponent"] }
                        ]
                    }
                ], { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, searchTerm) {
        if (!data || !searchTerm) {
            return data;
        }
        else {
            return data.filter(function (x) { return x.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; });
        }
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/sort.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sort.pipe.ts ***!
  \******************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/studentnotifications/studentnotifications.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/studentnotifications/studentnotifications.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/studentnotifications/studentnotifications.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/studentnotifications/studentnotifications.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">\n        <u>Student Notifications:</u>\n      </h2>\n      \n      \n      \n      \n      \n      \n      \n      Search by name\n      <input [(ngModel)]=\"searchTerm\" placeholder=\"search text goes here\" class=\"form-control\">\n      \n      <table class=\"table table-hover mt-2\">\n      <thead class=\"table \" style=\"color:rgb(230, 14, 14)\">\n      <th ><a (click)=\"sort('sno')\">Sno</a></th>\n      <th><a (click)=\"sort('name')\">Batch Notification</a></th>\n      <th><a (click)=\"sort('date')\">Date</a></th>\n      \n      </thead> <!-- sort pipe-->\n      <tr *ngFor=\"let j of datafromnotice| sort:{property: column, direction: direction}| search:searchTerm\" style=\"color:rgb(7, 33, 29)\">\n      <td>{{j.sno}}</td>\n      <td>{{j.name}}</td>\n      <td>{{j.date}}</td>\n      \n      </tr>\n      \n      \n      \n      \n      </table>"

/***/ }),

/***/ "./src/app/studentnotifications/studentnotifications.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/studentnotifications/studentnotifications.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentnotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentnotificationsComponent", function() { return StudentnotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentnotificationsComponent = /** @class */ (function () {
    function StudentnotificationsComponent(ds) {
        this.ds = ds;
    }
    StudentnotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getNotice2().subscribe(function (data) { return _this.datafromnotice = data; });
    };
    StudentnotificationsComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
        //this.sort(this.column);
    };
    ;
    StudentnotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studentnotifications',
            template: __webpack_require__(/*! ./studentnotifications.component.html */ "./src/app/studentnotifications/studentnotifications.component.html"),
            styles: [__webpack_require__(/*! ./studentnotifications.component.css */ "./src/app/studentnotifications/studentnotifications.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], StudentnotificationsComponent);
    return StudentnotificationsComponent;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/*!*************************************************!*\
  !*** ./src/app/students/students.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/students/students.component.html":
/*!**************************************************!*\
  !*** ./src/app/students/students.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark \" style=\"background-color: rgb(58, 58, 58)\">\n  <img src=\"/assets/logonavbarhome.png\" height=\"60px\" href=\"#\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link  \"  routerLink=\"students\">Home </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" style=\"margin-left: 800px\">Logout</a>\n      </li>\n\n\n\n    </ul>\n\n  </div>\n</nav>\n\n<div class=\"row  mt-4 container\">\n\n  <div class=\"col-1\"></div>\n  <div class=\"col-2 bg-success \">\n    <br>\n    <br>\n    <br>\n\n    <img src=\"/assets/login3.jpg\" height=\"120px\" width=\"150px\">\n    <br>\n    <br>\n    <a routerLink=\"updateprofilestudents\"> <h3>Update Profile</h3></a>\n    <br>\n    <br>\n    <br> \n    <a routerLink=\"notificationsstudents\"><h3>Notifications</h3></a>\n    \n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n\n\n  </div>\n  <div class=\"col-9 bg-warning\" >\n\n   \n\n    <router-outlet></router-outlet>\n\n\n  </div>\n  \n\n\n</div>"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
  \************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/studentupdate/studentupdate.component.css":
/*!***********************************************************!*\
  !*** ./src/app/studentupdate/studentupdate.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/studentupdate/studentupdate.component.html":
/*!************************************************************!*\
  !*** ./src/app/studentupdate/studentupdate.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<form #refForm=\"ngForm\" (ngSubmit)=\"onUpdate(refForm.value)\" >\n  \n        <label for=\"fname\" >Full name:</label>\n        <span class=\"alert text-danger\" *ngIf=\"refname1.invalid&&refname1.touched\" >*Plz enter full name</span>     \n        <input type=\"text\"  id=\"fname\"    minlength=\"4\"  class=\"form-control\"  \n        name=\"fname\"  [(ngModel)]=\"fname1\"  #refname1=\"ngModel\"  required>\n\n        \n\n\n\n        <label>Username:</label>\n\n        <span class=\"alert text-danger\" *ngIf=\"refname2.invalid&&refname2.touched\" >*Atleast 4 characters</span>     \n        <input type=\"text\" class=\"form-control\" name=\"uname\"  [(ngModel)]=\"uname1\"  #refname2=\"ngModel\" minlength=\"4\" required >\n\n\n        <label>Password:</label>\n\n        <span class=\"alert text-danger\" *ngIf=\"refname3.invalid&&refname3.touched\" >*Enter valid password</span>\n        <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"password1\"  #refname3=\"ngModel\"  minlength=\"4\" required>\n\n\n        <label>Mobile number:</label>\n\n        <span class=\"alert text-danger\" *ngIf=\"refname4.invalid&&refname4.touched\" >*Enter valid number</span>\n        <input type=\"number\" class=\"form-control mb-4\" name=\"mobile_number\"  [(ngModel)]=\"mobile_number1\"  #refname4=\"ngModel\" minlength=\"10\" required>\n  \n        <button  type=\"submit\" class=\"btn btn-primary\" >Update</button>\n  \n        <button class=\"btn btn-danger\" style=\"margin-left: 10px\" type=\"reset\">Cancel</button><br><br>\n   \n  \n  \n  \n  \n      </form>\n  "

/***/ }),

/***/ "./src/app/studentupdate/studentupdate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/studentupdate/studentupdate.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentupdateComponent", function() { return StudentupdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentupdateComponent = /** @class */ (function () {
    function StudentupdateComponent(router, ds) {
        this.router = router;
        this.ds = ds;
    }
    StudentupdateComponent.prototype.ngOnInit = function () {
        // this.ds.getUpdate().subscribe(data=>this.data1=data);
    };
    StudentupdateComponent.prototype.onUpdate = function (v) {
        // if(this.data1.uname=v.uname)
        // {
        var _this = this;
        console.log(v);
        this.ds.onUpdate(v).subscribe(function (msg) {
            alert(msg);
            _this.router.navigate(['/students']);
        });
        // }
    };
    StudentupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studentupdate',
            template: __webpack_require__(/*! ./studentupdate.component.html */ "./src/app/studentupdate/studentupdate.component.html"),
            styles: [__webpack_require__(/*! ./studentupdate.component.css */ "./src/app/studentupdate/studentupdate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], StudentupdateComponent);
    return StudentupdateComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/indriyn/Downloads/OnlineCorkBoard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map