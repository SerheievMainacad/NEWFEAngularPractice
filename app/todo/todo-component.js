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
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.newTask = '';
        this.taskList = [
            { taskName: 'Learn Angular', edit: false, completed: false },
            { taskName: 'Create Barrel file', edit: false, completed: false }
        ];
    }
    ToDo.prototype.addNew = function (newTaskName) {
        this.taskList.push({ taskName: newTaskName, edit: false, completed: false });
        this.newTask = '';
    };
    ToDo.prototype.delete = function (i) {
        this.taskList.splice(i, 1);
    };
    ToDo.prototype.edit = function (task) {
        task.edit = true;
    };
    ToDo.prototype.save = function (task) {
        task.edit = false;
    };
    ToDo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "todo",
            templateUrl: "todo-component.html",
            styleUrls: ['todo-component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ToDo);
    return ToDo;
}());
exports.ToDo = ToDo;
//# sourceMappingURL=todo-component.js.map