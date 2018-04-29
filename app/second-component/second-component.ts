import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'second-component',
    templateUrl: 'second-component.html',
    styleUrls: ['second-component.css']
})

export class SecondComponent{
    public name:string;
    constructor(){
        this.name = 'Second component';
    }
}