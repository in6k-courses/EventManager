import {Component, OnInit} from "@angular/core";
import {EventSearchService} from "./event-search.service";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";
import {error} from "util";


@Component({
  moduleId: module.id,
  selector: 'event-search',
  templateUrl: 'event-search.component.html',
  providers: [EventSearchService]

})

export class EventSearchComponent implements OnInit{
  events: Observable<Event[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private eventSearchService: EventSearchService,
    private router: Router
  ){}

  search(term: string): void {
      this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.events = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term=>term
        ?this.eventSearchService.search(term)
          :Observable.of<Event[]>([]))
        .catch(error=> {
          console.log(error);
          return Observable.of<Event[]>([]);
        });
  }
}
