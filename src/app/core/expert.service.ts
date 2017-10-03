import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Expert } from '../expert/shared/expert.model';
import { ExpertDetail } from '../expert/shared/expert-detail.model';
import { EXPERTS, EXPERT } from './mock-expert';

@Injectable()
export class ExpertService {

  constructor() { }

  getExperts(): Observable<Expert[]> {
    return Observable.of(EXPERTS);
  }

  /* TODO: allow caller to get specific Expert profile */
  getExpert(): Observable<ExpertDetail> {
    return Observable.of(EXPERT);
  }
}

