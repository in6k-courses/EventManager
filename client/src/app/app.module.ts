import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EventsComponent} from './event/events.component'
import {AppRoutingModule} from "./routing";
import {EventService} from "./service/event-service.component";
import {TopicComponent} from "./topic/topic.component";
import {EventSearchComponent} from "./event/event-search/event-search.component";
import {EventDetailsComponent} from "./event/event-details/event-details.component";
import {AddEventComponent} from "./event/add-event/add-event.component";
import {TopicService} from "./service/topic-service";



@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TopicComponent,
    EventDetailsComponent,
    AddEventComponent
    // EventSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
