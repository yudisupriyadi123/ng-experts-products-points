import { Component, OnInit } from '@angular/core';

import { ExpertService } from '../../core/expert.service';

import { Expert } from '../shared/expert.model';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {

  title = 'Expert List';

  experts: Expert[];

  constructor(private expertService: ExpertService) { }

  ngOnInit() {
    this.expertService.getExperts()
      .subscribe((experts) => this.experts = experts);
  }

  sortAlphabetically(event : any): void {
    if ( !event.target.checked ) return;

    // code here
  }
}

