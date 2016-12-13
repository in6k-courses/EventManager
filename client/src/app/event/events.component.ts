import {Component, OnInit, Input} from "@angular/core";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {EventService} from "../service/event-service.component";
import {Event} from "./model/event";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id.toString(),
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {

   events: Event[];

  constructor(private service: EventService,
  private router: Router){}

  getAllEvents():void{
    this.service
      .getAllEvents()
      .then(events => this.events = events);
  }

  // ngOnInit(){
  //   this.service.getAllEvents().then(events=>this.events=events);
  // }


  private addEvent(name: string): void {
   name = name.trim();
   if (!name){return; }
   this.service.addEvent(name)
     .then(event => {
       this.events.push(event);
     });
  }

  gotoDetails(): void {
    this.router.navigate([ 'event-details']);
  }
}
