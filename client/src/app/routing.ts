import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './event/events.component';
import { EventsListComponent } from './event/list/event-list.component';
// import {EventsAddComponent} from './event/add/event-add.component';
import {EventsViewComponent} from './event/view/events-view.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'events', component:EventsComponent,
    children: [
      { path: 'list', component: EventsListComponent },
      // { path: 'add', component: EventsAddComponent },
      { path: 'view/:id', component: EventsViewComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'events', pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
