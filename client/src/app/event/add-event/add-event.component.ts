import {Component} from "@angular/core";
import {EventService} from "../../service/event-service.component";
import {Event} from "../model/event"

import { Location } from '@angular/common';
import {EventDetailsComponent} from "../event-details/event-details.component";

@Component({
  selector:'add-event',
  templateUrl: './add-event.component.html'
})
export class AddEventComponent {
  events: Event[];
  event: Event;

  constructor(private eventService: EventService,
              private location: Location){}

  addEvent(name: string, details: string):void{
    this.eventService.addEvent(name, details)
      .then(event => {
        this.events.push(event);
      })
  }

  goBack(): void{
    this.location.back();
  }
}
