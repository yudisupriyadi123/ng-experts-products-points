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

  /* TODO: allow caller to get specific Expert profile */
  getExpert(): Observable<Expert> {
    /* return Yudi Supriyadi data profile */
    return Observable.of(EXPERTS.find((expert) => expert.id === 11));
  }

  addExpert(rookie: Expert) {
    EXPERTS.push(rookie);
  }
}

