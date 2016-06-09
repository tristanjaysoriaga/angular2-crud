
import {Component} from 'angular2/core'
import {SidebarComponent} from './sidebar.component'
import {DataComponent} from './data.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [SidebarComponent,DataComponent]
})
export class AppComponent { 
}

