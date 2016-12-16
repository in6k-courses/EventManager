import {Injectable} from '@angular/core';
import  { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Event} from '../event/model/event'
import {toPromise} from "rxjs/operator/toPromise";
import {Observable, Observer} from "rxjs";


@Injectable()
export class EventService {
  private apiUrl = '/api/events/all';
  private savedEventUrl = 'api/events/create';
  private deleteEventUrl = 'api/events/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http){}

  getAllEvents(): Promise<Event[]>{
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response=>response.json() as Event[])
      .catch(this.handleError);
  }

  addEvent(name: string, details: string): Promise<Event>{
    return this.http
      .post(this.savedEventUrl, JSON.stringify({name: name, details: details}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getById(id: number): Observable<Event> {
      return this.http.get("/api/events/" + id)
        .map((res) => res.json() as Event);
  }

  getEventDetails(id: number): Promise<Event>{
    return this.http.get('/events/details/'+id)
      .toPromise()
      .then(res=>res.json())
      .catch(this.handleError);
  }

  deleteEvent(id: number): Promise<void>{
    return this.http.delete((this.deleteEventUrl+id),
      {headers: this.headers})
      .toPromise()
      .then(()=>null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
