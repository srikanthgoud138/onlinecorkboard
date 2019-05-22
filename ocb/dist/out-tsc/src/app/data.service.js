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
var http_1 = require("@angular/common/http");
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
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map