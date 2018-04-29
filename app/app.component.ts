import { Component } from '@angular/core';





@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component.html',
	styleUrls: ['app/app.component.css']
})


export class AppComponent{
	public appName: string;
	constructor(){
		this.appName = 'My first App';
	}

	public sayHello(){
		alert('Hello')
	}

}