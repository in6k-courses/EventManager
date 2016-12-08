import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import {Event} from '../models/event';
import {Topic} from  '../topic/'


@Injectable()
export class EventService {
  url:string = 'api/event/';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getHeader() : any {
    let headers : Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return {headers};
  }

  getEvents(): Promise<Event[]> {
    alert("from event");
      .toPromise()
      .then(response => response.json() as Event[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert("allert");
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getEvent(id: number): Promise<Event>{
    return this.getEvents()
      .then(events => events.find(event => event.id === id))
  }
}

