import {Component, OnInit} from '@angular/core';
import  {Event} from '../models/event';
import {EventService} from '../services/event.service';


@Component({
moduleId: module.id.toString(),
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html.html',
  styleUrls: ['/dashboard.component.html.css'],
  providers: [EventService]
})
export class DashboardComponent implements OnInit{
  events: Event[];

  constructor(private eventService){}

  ngOnInit(){
    this.getEvents();
    alert(this.events)
  }

  getEvents(): void{
    this.eventService.getEvents().then(events => this.events=events);
  }

}
