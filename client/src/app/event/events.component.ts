import {Component, OnInit, Input} from "@angular/core";
import {EventService} from "../service/event-service.component";
import {Event} from "./model/event";
import {Router} from "@angular/router";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {AddEventComponent} from "./add-event/add-event.component";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit{
   events: Event[];

  constructor(private service: EventService,
  private router: Router){}

  getAllEvents():void{
    this.service
      .getAllEvents()
      .then(events => this.events = events);
  }

  ngOnInit(){
    this.getAllEvents();
  }
}
