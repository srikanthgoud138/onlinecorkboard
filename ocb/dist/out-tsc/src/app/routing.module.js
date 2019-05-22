"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("src/app/home/home.component");
var students_component_1 = require("src/app/students/students.component");
var faculty_component_1 = require("src/app/faculty/faculty.component");
var aboutus_component_1 = require("src/app/aboutus/aboutus.component");
var login_component_1 = require("src/app/login/login.component");
var register_component_1 = require("src/app/register/register.component");
var forms_1 = require("@angular/forms");
var studentupdate_component_1 = require("src/app/studentupdate/studentupdate.component");
var studentnotifications_component_1 = require("src/app/studentnotifications/studentnotifications.component");
var facultyupdate_component_1 = require("src/app/facultyupdate/facultyupdate.component");
var facultynotifications_component_1 = require("src/app/facultynotifications/facultynotifications.component");
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: "home", component: home_component_1.HomeComponent,
                        children: [{ path: "aboutus", component: aboutus_component_1.AboutusComponent },
                            { path: "login", component: login_component_1.LoginComponent },
                            { path: "register", component: register_component_1.RegisterComponent },
                        ]
                    },
                    {
                        path: "", redirectTo: "home", pathMatch: "full",
                    },
                    {
                        path: "students", component: students_component_1.StudentsComponent,
                        children: [{ path: "updateprofilestudents", component: studentupdate_component_1.StudentupdateComponent },
                            { path: "notificationsstudents", component: studentnotifications_component_1.StudentnotificationsComponent }
                        ]
                    },
                    {
                        path: "faculty", component: faculty_component_1.FacultyComponent,
                        children: [{ path: "updateprofilefaculty", component: facultyupdate_component_1.FacultyupdateComponent },
                            { path: "notificationsfaculty", component: facultynotifications_component_1.FacultynotificationsComponent }
                        ]
                    }
                ])
            ],
            exports: [router_1.RouterModule, forms_1.FormsModule]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=routing.module.js.map