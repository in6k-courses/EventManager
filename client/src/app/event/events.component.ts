import {Component, OnInit, Input} from "@angular/core";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {EventService} from "../service/event-service.component";
import {Event} from "./model/event";

@Component({
  moduleId: module.id.toString(),
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})

export class EventsComponent {

   events: Event[];

  constructor(private service: EventService){}

  getAllEvents():void{
    this.service.getAllEvents().then(events => this.events = events);
  }

  // ngOnInit(){
  //   this.service.getAllEvents().then(events=>this.events=events);
  // }

  onEventCreated(event: Event): void {
    this.service.addEvent(event).then(event=>this.addEvent(event));
  }

  saveEvent(event: Event): void {
    this.service.saveEvent(event).then(event=>{})
  }

  private addEvent(event: Event): void {
    this.events.push(event);
  }
}
