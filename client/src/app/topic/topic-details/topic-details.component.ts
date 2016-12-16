import {Component} from "@angular/core";
import {Topic} from "../model/topic";
import {EventService} from "../../service/event-service.component";
import {TopicService} from "../../service/topic-service";
import {Router} from "@angular/router";

@Component({
  selector: 'topic-details',
  templateUrl:'./topic-details.component.html'
})

export class TopicDetails{
  topic: Topic;

  constructor(
    // private eventService: EventService,
    private topicService: TopicService,
    private router: Router
  ){}



}
