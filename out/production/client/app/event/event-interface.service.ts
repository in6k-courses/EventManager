import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event } from './models/event.model';
// import {Topic} from './models/topic.model';

@Injectable()
export abstract class EventsServiceInterface {
  getAllEvents(): Observable<Event[]> {
    return null;
  }

  // addEvent(event: Event): Observable<Event> {
  //   return null;
  // }
  //
  // getAllTopics(): Observable<Topic[]> {
  //   return null;
  // }
  //
  // getEventById(id: number): Observable<Event> {
  //   return null;
  // }
  //
  // deleteEventById(id: number): Observable<void> {
  //   return null;
  // }
}
