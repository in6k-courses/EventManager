import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './event/events.component'
import {NgModule} from "@angular/core";
import {TopicComponent} from "./topic/topic.component";


export const routes: Routes = [
  { path: 'api/events/all', component: EventsComponent },
  { path: 'topics', component: TopicComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
