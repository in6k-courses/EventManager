import {Topic} from "../../topic/model/topic";

export class Event{
  id: number;
  name: string;
  details: string;
  topics: Topic[];
}
