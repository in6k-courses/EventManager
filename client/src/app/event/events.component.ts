import {Component, OnInit, Input} from "@angular/core";
import {EventService} from "../service/event-service.component";
import {Event} from "./model/event";
import {Router} from "@angular/router";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {

   events: Event[];
   event: Event;

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


  // private addEvent(name: string): void {
  //  name = name.trim();
  //  if (!name){return; }
  //  this.service.addEvent(name)
  //    .then(event => {
  //      this.events.push(event);
  //    });
  // }

  delete(event:Event):void {
    this.service
      .deleteEvent(event.id)
      .then(()=>{
      this.events= this.events.filter(h => h !== event);
      });
  }

  goToDetails(event: Event): void {
    this.router.navigate(['/events', event.id]);
  }
}
