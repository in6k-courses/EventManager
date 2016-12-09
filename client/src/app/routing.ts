import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './event/events.component'
import {NgModule} from "@angular/core";


export const routes: Routes = [
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
