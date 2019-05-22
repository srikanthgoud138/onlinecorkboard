"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var students_component_1 = require("./students/students.component");
var faculty_component_1 = require("./faculty/faculty.component");
var routing_module_1 = require(".//routing.module");
var aboutus_component_1 = require("./aboutus/aboutus.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var navbar_component_1 = require("./navbar/navbar.component");
var carousel_component_1 = require("./carousel/carousel.component");
var noticeboard_component_1 = require("./noticeboard/noticeboard.component");
var studentupdate_component_1 = require("./studentupdate/studentupdate.component");
var facultyupdate_component_1 = require("./facultyupdate/facultyupdate.component");
var studentnotifications_component_1 = require("./studentnotifications/studentnotifications.component");
var facultynotifications_component_1 = require("./facultynotifications/facultynotifications.component");
var data_service_1 = require("src/app/data.service");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var sort_pipe_1 = require("./sort.pipe");
var search_pipe_1 = require("./search.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                students_component_1.StudentsComponent,
                faculty_component_1.FacultyComponent,
                aboutus_component_1.AboutusComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                navbar_component_1.NavbarComponent,
                carousel_component_1.CarouselComponent,
                noticeboard_component_1.NoticeboardComponent,
                studentupdate_component_1.StudentupdateComponent,
                facultyupdate_component_1.FacultyupdateComponent,
                studentnotifications_component_1.StudentnotificationsComponent,
                facultynotifications_component_1.FacultynotificationsComponent,
                sort_pipe_1.SortPipe,
                search_pipe_1.SearchPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                routing_module_1.RoutingModule, forms_1.FormsModule, http_1.HttpClientModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map