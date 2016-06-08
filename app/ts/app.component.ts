import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [CoursesComponent]
})
export class AppComponent { 
}