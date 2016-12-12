import  {Component, Input} from '@angular/core';
import {Event} from "../model/event";

@Component({
  selector: 'event-list',
  templateUrl: 'event-details.component.html'
  // inputs: ['events']
})

export class EventDetailsComponent {
  @Input() events: Event[];

}
