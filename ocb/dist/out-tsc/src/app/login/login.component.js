"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("src/app/data.service");
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
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map