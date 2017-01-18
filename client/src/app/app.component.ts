import { Component } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-manager',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;

  constructor(){
    this.name = 'Event manager'
  }
}
