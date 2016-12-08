import { Component } from '@angular/core';

import { Event } from '../models/event.model';
import { EventsServiceInterface } from '../event-interface.service';
import Events = NodeJS.Events;

@Component({
  moduleId: module.id,
  selector: 'events-list',
  templateUrl: './event-list.template.html'
  // styleUrls: ['./events-list.style.css']
})
export class EventsListComponent {

  private events: Event[];

  constructor(private service: EventsServiceInterface) {
    this.reloadData();
  }

  reloadData(): void {
    this.service.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

  deleteEvent(id: number): void {
    this.service.deleteEventById(id).subscribe(result => {
      this.reloadData();
    });
  }
}
