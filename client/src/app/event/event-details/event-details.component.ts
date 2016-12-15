import 'rxjs/add/operator/switchMap';
import  {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {Event} from "../model/event";
import {EventService} from "../../service/event-service.component";

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent {
  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.eventService.getById(+params['id']))
        .subscribe(event => this.event = event);
  }
  // save(): void {
  //   this.eventService.update(this.event)
  //     .then(bookService => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}
