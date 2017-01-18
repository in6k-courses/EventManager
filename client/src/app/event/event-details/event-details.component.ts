import 'rxjs/add/operator/switchMap';
import  {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location }               from '@angular/common';

import {Event} from "../model/event";
import {EventService} from "../../service/event-service.component";
import {EventsComponent} from "../events.component";

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent implements OnInit{
  events: Event[];
  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.route.params
        .switchMap((p) => this.eventService.getById(+p['id']))
        .subscribe(event => this.event = event);
  }

  delete(event:Event):void {
    this.eventService
      .deleteEvent(event.id)
      .then(()=>{
        this.events = this.events.filter(h => h !== event);
      });
  }
  // getEventDetails
  goBack(): void {
    this.router.navigate(['/']);
  }
}
