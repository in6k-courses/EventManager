import  {Component, Input} from '@angular/core'

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html'
})

export class EventItem {
@Input() event: string;
}
