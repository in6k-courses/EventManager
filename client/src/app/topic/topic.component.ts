import {Component} from "@angular/core";
import {TOPICS} from "./model/topics-array";

@Component({
  selector: 'topics',
  templateUrl: './topic.component.html'
})

export class TopicComponent {
  name: 'Topics';
  topics = TOPICS;
}
