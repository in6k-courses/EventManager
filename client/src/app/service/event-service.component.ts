import {Injectable} from '@angular/core';
import  { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Event} from '../event/model/event'
import {toPromise} from "rxjs/operator/toPromise";


@Injectable()
export class EventService {
  private apiUrl = 'api/events/all';
  private savedEventUrl = 'api/events/create';
  private detailsUrl = 'api/events/details';

  constructor(private http:Http){}

  getAllEvents(): Promise<Event[]>{
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response=>response.json() as Event[])
      .catch(this.handleError);
  }

  addEvent(name: string): Promise<Event>{
    return this.http
      .post(this.savedEventUrl, JSON.stringify({name: name}))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getById(id: number): Promise<Event>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Event)
      .catch(this.handleError);
  }

  getDetails(name: string): Promise<Event>{
    return this.http.get(this.detailsUrl)
      .toPromise()
      .then(response=>response.json() as Event)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
