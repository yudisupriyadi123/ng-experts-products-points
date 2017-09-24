import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {

  title = 'Expert List';

  experts = [
    {
      id: 11,
      avatar: '',
      name: 'Yudi Supriyadi',
      product_count: 5,
    },
    {
      id: 12,
      avatar: '',
      name: 'Irfan Maulana',
      product_count: 8,
    },
    {
      id: 13,
      avatar: '',
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

