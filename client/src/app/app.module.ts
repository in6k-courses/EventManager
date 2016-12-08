import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './event/events.component';
import { EventsListComponent } from './event/list/event-list.component';
// import {EventsAddComponent} from './event/add/event-add.component';
import {EventsViewComponent} from './event/view/events-view.component';
import { appRouting } from './routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRouting],
  declarations: [AppComponent, EventsComponent, EventsListComponent, EventsViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
