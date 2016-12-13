import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EventsComponent} from './event/events.component'
import {AppRoutingModule} from "./routing";
import {EventService} from "./service/event-service.component";
import {TopicComponent} from "./topic/topic.component";
import {EventFormComponent} from "./event/event-form/event-form.component";



@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TopicComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
