import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Topic} from "../topic/model/topic";

@Injectable()
export class TopicService {
  private topicUrl = '/api/topics/';
  constructor(private http: Http) {
  }

  getAllTopics(): Promise<Topic[]> {
    return this.http.get(this.topicUrl)
      .toPromise()
      .then(response => response.json() as Topic[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
