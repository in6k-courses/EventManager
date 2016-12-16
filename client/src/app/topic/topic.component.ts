import {Component, OnInit} from "@angular/core";
import {Topic} from "./model/topic";
import {Router} from "@angular/router";
import {TopicService} from "../service/topic-service";

@Component({
  selector: 'topics',
  templateUrl: './topic.component.html'
})

export class TopicComponent
implements OnInit{

  name: 'Topics';
  topics: Topic[];

  constructor(private router: Router,
  private topicService: TopicService){}

  getTopics(): void{
    this.topicService.getAllTopics().then(topics=>this.topics=topics);
  }

  ngOnInit(): void {
    this.getTopics();
  }

}
