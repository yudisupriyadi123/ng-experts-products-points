import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Expert } from '../expert/shared/expert.model';

import { EXPERT } from './mock-expert';


@Injectable()
export class ExpertService {

  constructor() { }

  getExperts(): Observable<Expert[]> {
    return Observable.of(EXPERT);
  }
}

