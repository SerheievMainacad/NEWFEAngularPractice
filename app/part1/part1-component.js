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
var Part1Component = /** @class */ (function () {
    function Part1Component() {
        this.users = [
            { name: 'Alex', sname: 'Angular', age: 5.23412 },
            { name: 'Richard', sname: 'Vue', age: 3 },
            { name: 'James', sname: 'React', age: 4 },
        ];
        this.newUser = { name: '', sname: '', age: '' };
        this.option = '';
    }
    Part1Component.prototype.sayHello = function (user) {
        alert("Hello my name is " + user.sname + ". " + user.name + " " + user.sname + " ");
    };
    Part1Component.prototype.addNew = function (newUser) {
        this.users.push(newUser);
        this.newUser = { name: '', sname: '', age: '' };
    };
    Part1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'part1',
            templateUrl: 'part1-component.html',
            styleUrls: ['part1-component.css']
        }),
        __metadata("design:paramtypes", [])
    ], Part1Component);
    return Part1Component;
}());
exports.Part1Component = Part1Component;
//# sourceMappingURL=part1-component.js.map