import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Event } from '../models/event.model';
import { EventsServiceInterface } from '../event-interface.service';

@Component({
  moduleId: module.id,
  selector: 'events-view',
  templateUrl: './events-view.template.html'
})
export class EventsViewComponent {

  private event: Event = new Event(null, null);

  constructor(
    service: EventsServiceInterface,
    route: ActivatedRoute) {
    //let id: number = parseInt(route.params['id']);
    route.params.forEach((params: Params) => {
      let id: number = +params['id'];

      service.getEventById(id)
        .subscribe(event => {
          this.event = event;
        });
    });
  }
}
