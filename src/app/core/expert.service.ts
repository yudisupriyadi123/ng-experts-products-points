import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Expert } from '../expert/shared/expert.model';
import { EXPERTS } from './mock-expert';

@Injectable()
export class ExpertService {

  constructor() { }

  getExperts(): Observable<Expert[]> {
    return Observable.of(EXPERTS);
  }

  getExpert(id: number): Observable<Expert> {
    return Observable.of(EXPERTS.find((expert) => expert.id === id));
  }

  addExpert(rookie: Expert) {
    /* TODO: remove after Backend has build */
    rookie.id = this.generateId();

    /* TODO: change with http post after Backend has build */
    EXPERTS.push(rookie);

    return rookie.id;
  }

  /* TODO: remove after Backend has build */
  private generateId(): number {
    let biggerId = 0;
    for (let i = 0; i < EXPERTS.length; i++) {
      if (EXPERTS[i].id > biggerId) biggerId = EXPERTS[i].id;
    }
    return biggerId+1;
  }
}

