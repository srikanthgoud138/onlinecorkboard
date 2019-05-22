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
var data_service_1 = require("src/app/data.service");
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
        core_1.Component({
            selector: 'app-facultynotifications',
            templateUrl: './facultynotifications.component.html',
            styleUrls: ['./facultynotifications.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], FacultynotificationsComponent);
    return FacultynotificationsComponent;
}());
exports.FacultynotificationsComponent = FacultynotificationsComponent;
//# sourceMappingURL=facultynotifications.component.js.map