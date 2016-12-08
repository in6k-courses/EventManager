import { Component } from '@angular/core';

import { EventsServiceInterface } from './event-interface.service';
import {EventsHttpService } from './event.http.service';

@Component({
  moduleId: module.id,
  selector: 'event',
  templateUrl: './event.template.html',
  styleUrls: ['./event.style.css'],
  providers: [
    { provide: EventsServiceInterface, useClass: EventsHttpService }
  ]
})
export class EventsComponent { }
