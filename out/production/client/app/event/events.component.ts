import {Component, OnInit} from "@angular/core";
import {EventListComponent} from "./event-list.component";
import {EventService} from "../service/event-service.component";
import {Event} from "./event";

@Component({
  moduleId: module.id.toString(),
  selector: 'events',
  templateUrl: './events.component.html',
  providers: [EventService]
})

export class EventsComponent {

  events: Event[];

  constructor(private service: EventService){}

  getAllEvents():void{
    this.service.getAllEvents().then(events => this.events = events);
  }
}
