import {Injectable} from '@angular/core';
import  { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Event} from '../event/event'


@Injectable()
export class EventService {
  private apiUrl = 'api/events';

  constructor(private http:Http){}

  getAllEvents(): Promise<Event[]>{
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response=>response.json() as Event[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('Error', error);
    return Promise.reject(error.message || error);
  }
}
