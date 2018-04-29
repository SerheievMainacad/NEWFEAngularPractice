"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var second_component_1 = require("./second-component/second-component");
var part1_component_1 = require("./part1/part1-component");
var part2_component_1 = require("./part2/part2-component");
var todo_component_1 = require("./todo/todo-component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'part1', component: part1_component_1.Part1Component },
                    { path: 'part2', component: part2_component_1.Part2Component },
                    { path: 'todo', component: todo_component_1.ToDo },
                    { path: '', redirectTo: 'todo', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent, second_component_1.SecondComponent, part1_component_1.Part1Component, part2_component_1.Part2Component, todo_component_1.ToDo],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map