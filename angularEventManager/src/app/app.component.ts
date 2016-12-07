import {Component, OnInit} from '@angular/core';
import { Event } from './models/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Events';
  ngOnInit() {
  }
}
