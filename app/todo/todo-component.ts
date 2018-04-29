import { Component } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "todo",
    templateUrl: "todo-component.html",
    styleUrls: ['todo-component.css']
})

export class ToDo{
    taskList:any;
    newTask:string = '';
    constructor(){
        this.taskList = [
            {taskName: 'Learn Angular', edit: false, completed: false},
            {taskName: 'Create Barrel file', edit: false, completed: false}
        ];
    }
    addNew(newTaskName){
        this.taskList.push(
            {taskName: newTaskName, edit: false, completed: false}
        )
        this.newTask = '';
    }
    delete(i){
        this.taskList.splice(i,1);
    }
    edit(task){
        task.edit = true;
    }
    save(task){
        task.edit = false;
    }
}