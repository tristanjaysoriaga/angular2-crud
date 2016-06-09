import {Component} from 'angular2/core'
import {DataService} from './data.service'

@Component({
    selector: 'datalist-component',
    templateUrl: 'app/ts/data.component.html',
    providers: [DataService]
})
export class DataComponent { 
	DataVar : string[]

	constructor(dataService:DataService){
		this.DataVar = dataService.getCourses()
	}	
}