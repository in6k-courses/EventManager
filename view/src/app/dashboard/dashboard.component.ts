import {Component, OnInit} from '@angular/core';
import  {Event} from '../models/event';
import {EventService} from '../services/event.service';


@Component({
moduleId: module.id.toString(),
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['/dashboard.component.css'],
  providers: [EventService]
})
export class DashboardComponent implements OnInit{
  events: Event[];
  constructor(private eventService : EventService){}


  ngOnInit(){
    this.eventService.getEvents()
      .then(events => this.events=events);
  }

}
