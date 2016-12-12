import  {Component, Input} from '@angular/core';
import {Event} from "./event";

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html'
  // inputs: ['events']
})

export class EventListComponent {
  @Input() events: Event[];

}
