import { Component, OnInit } from '@angular/core';

import { Expert } from '../shared/expert.model';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {

  title = 'Expert List';

  experts: Expert[] = [
    {
      id: 11,
      avatar: {'32x32': '', '64x64': '', '176x176': ''},
      name: 'Yudi Supriyadi',
      product_count: 5,
    },
    {
      id: 12,
      avatar: {'32x32': '', '64x64': '', '176x176': ''},
      name: 'Irfan Maulana',
      product_count: 8,
    },
    {
      id: 13,
      avatar: {'32x32': '', '64x64': '', '176x176': ''},
      name: 'Batman',
      product_count: 100,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  sortAlphabetically(event : any): void {
    if ( !event.target.checked ) return;

    // code here
  }
}

