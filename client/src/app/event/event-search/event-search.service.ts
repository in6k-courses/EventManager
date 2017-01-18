import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class EventSearchService {
  constructor(private http:Http){}

  search(term: string): Observable<Event[]>{
    return this.http
      .get(`api/events/?name=${term}`)
      .map((r:Response)=>r.json().data as Event[]);
  }
}
