import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


import { EventsServiceInterface } from './event-interface.service';
import { Event } from './models/event.model';
// import { Topic } from './models/topic.model';

@Injectable()
export class EventsHttpService extends EventsServiceInterface {

  private baseUrl: string = "http://localhost:8080/api";
  private EVENTS_URL: string = this.baseUrl + "/events";
  private TOPICS_URL: string = this.baseUrl + "/topics";

  constructor(private http: Http) {
    super();

  }

  getAllEvents(): Observable<Event[]> {
    return Observable.create((observer: Observer<Event[]>) => {
      this.http.get(this.EVENTS_URL)
        .subscribe(res => {
          observer.next(res.json());
          observer.complete();
        });
    });
  }

  // addEvent(event: Event): Observable<Event> {
  //   return Observable.create((observer: Observer<Event>) => {
  //     this.http.post(this.EVENTS_URL, event)
  //       .subscribe(res => {
  //         observer.next(res.json());
  //         observer.complete();
  //       });
  //   });
  // }
  //
  //
  // getAllTopics(): Observable<Topic[]> {
  //   return Observable.create((observer: Observer<Topic[]>) => {
  //     this.http.get(this.TOPICS_URL)
  //       .subscribe(res => {
  //         observer.next(res.json());
  //         observer.complete();
  //       });
  //   });
  // }
  //
  // getEventById(id: number): Observable<Event> {
  //   return Observable.create((observer: Observer<Event>) => {
  //     this.http.get(this.EVENTS_URL + "/" + id)
  //       .subscribe(res => {
  //         observer.next(res.json());
  //         observer.complete();
  //       })
  //   });
  // }
  //
  // deleteEventById(id: number): Observable<void> {
  //   return Observable.create((observer: Observer<void>) => {
  //     this.http.delete(this.EVENTS_URL + "/" + id)
  //       .subscribe(res => {
  //         observer.next(null);
  //         observer.complete();
  //       })
  //   });
  // }
}
