import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './event/events.component'
import {NgModule} from "@angular/core";
import {TopicComponent} from "./topic/topic.component";
import {AddEventComponent} from "./event/add-event/add-event.component";
import {EventDetailsComponent} from "./event/event-details/event-details.component";


export const routes: Routes = [
  {path: '', redirectTo: '/events/all', pathMatch: 'full'},
  { path: 'events/all', component: EventsComponent },
  { path: 'topics', component: TopicComponent },

  {path: 'events/create', component: AddEventComponent},
  // {path: 'event-search', component: EventSearchComponent},
  {path: 'events/details/:id', component: EventDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
