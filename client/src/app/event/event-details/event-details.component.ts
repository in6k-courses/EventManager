import  {Component, Input, OnInit} from '@angular/core';
import {Event} from "../model/event";
import {EventService} from "../../service/event-service.component";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  moduleId: module.id.toString(),
  selector: 'event-details',
  templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent
implements OnInit{
  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    // private location: Location
  ){}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.eventService.getEvent(+params['id']))
        .subscribe(event => this.event = event);
  }
  // goBack(): void {
  //   this.location.replace('/');
  // }
}
