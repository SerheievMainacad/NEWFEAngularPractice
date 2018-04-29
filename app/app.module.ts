import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { SecondComponent } from "./second-component/second-component";
import { Part1Component } from "./part1/part1-component";
import { Part2Component } from "./part2/part2-component";
import { ToDo } from "./todo/todo-component";

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot([
            {path: 'part1', component: Part1Component},
            {path: 'part2', component: Part2Component},
            {path: 'todo', component: ToDo},
            {path: '', redirectTo: 'todo', pathMatch: 'full'}
        ])
    ],
    declarations: [AppComponent, SecondComponent, Part1Component, Part2Component, ToDo],
    bootstrap: [AppComponent]
})


export class AppModule{}