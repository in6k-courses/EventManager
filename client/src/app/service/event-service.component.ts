import {Injectable} from '@angular/core';
import  { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Event} from '../event/model/event'


@Injectable()
export class EventService {
  private apiUrl = 'api/events/all';
  private saveEventUrl = 'api/events/create'

  constructor(private http:Http){}

  getAllEvents(): Promise<Event[]>{
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response=>response.json() as Event[])
      .catch(this.handleError);
  }

  addEvent(event: Event): Promise<Event>{
    return this.post(event);
  }

  saveEvent(event: Event): Promise<Event>{
    return this.put(event);
  }

  private post(event: Event): Promise<Event> {
    let body = JSON.stringify(event);

    return this.http.post(this.saveEventUrl, body)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError)
  }

  private put(event: Event): Promise<Event> {
    let body = JSON.stringify(event);

    let url = `${this.saveEventUrl}/${event.id}`;

    return this.http.put(url, body)
      .toPromise()
      .then(res => event)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.log('Error', error);
    return Promise.reject(error.message || error);
  }
}
