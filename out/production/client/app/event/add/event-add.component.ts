// import { Component } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
//
// import { Event } from '../models/event.model';
// import { Topic } from '../models/topic.model';
// import { EventsServiceInterface } from '../event-interface.service';
//
// @Component({
//   moduleId: module.id,
//   selector: 'events-add',
//   templateUrl: './events-add.template.html'
//   // styleUrls: ['./events-add.style.css']
// })
// export class EventsAddComponent {
//   private topics: Topic[];
//   private eventToAdd: Event = new Event(null, null, null);
//
//   constructor(
//     private service: EventsServiceInterface,
//     private router: Router,
//     private route: ActivatedRoute) {
//     service.getAllTopics().subscribe(topics => {
//       this.topics = topics;
//     });
//   }
//
//   addEvent(): void {
//     this.service.addEvent(this.eventToAdd).subscribe(event => {
//       this.router.navigate(['../list'], { relativeTo: this.route });
//     });
//
//   }
// }
