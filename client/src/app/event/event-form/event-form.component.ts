import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'event-form',
  templateUrl: 'event-form.component.html'
})

export class EventFormComponent{

  @Output() created: EventEmitter<Event>;

  constructor(){
    this.created = new EventEmitter<Event>();
  }

  create(name: string){
    if (name){
      let event = new Event(name);
      this.created.emit(event);
    }
  }
}
