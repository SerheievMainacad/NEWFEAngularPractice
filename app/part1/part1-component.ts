import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'part1',
    templateUrl: 'part1-component.html',
    styleUrls: ['part1-component.css']
})

export class Part1Component{
    public users;
    public newUser;
    public option;
    
    constructor(){
        this.users = [
            {name: 'Alex', sname: 'Angular', age: 5.23412},
            {name: 'Richard', sname: 'Vue', age: 3},
            {name: 'James', sname: 'React', age: 4},
        ];
        this.newUser = {name: '', sname: '', age: ''};
        this.option = '';
    }
    sayHello(user){
        alert(`Hello my name is ${user.sname}. ${user.name} ${user.sname} `);
    }
    addNew(newUser){
        this.users.push(newUser);
        this.newUser = {name: '', sname: '', age: ''};
    }

}