import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Event} from "../models/event";

@Injectable()
export class EventService {
  url:string = 'http://localhost:8081/event';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }
  getHeader() : any {

    let headers : Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return {headers};

  }
  getEvents(): Promise<Event[]> {
    alert("Hello from event");

    return this.http.get('/event')
      .toPromise()
      .then(response => response.json() as Event[])
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    alert("allert");
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

