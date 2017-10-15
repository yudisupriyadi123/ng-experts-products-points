import { Component, OnInit } from '@angular/core';

import { ExpertService } from '../../core/expert.service';

import { Expert } from '../shared/expert.model';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.css']
})
export class ExpertDetailComponent implements OnInit {

  expert: Expert;
  /* products: Product[]; // expert product */
  /* TODO: Remove below, uncomment above */
  products = [
    {
      name: 'Awesome JavaScript Stickers',
      pros_count: 6,
      cons_count: 4,
      'images': {
        '384x192': '',
      },
    },
    {
      name: 'Awesome JavaScript Stickers v2',
      pros_count: 3,
      cons_count: 1,
      'images': {
        '384x192': '',
      },
    }
  ]

  /* TODO: add productService */
  constructor(private expertService: ExpertService) { }

  ngOnInit() {
    /* TODO: catch param :id in url for getting requested expert */
    /* TODO: send caught :id to getExpert() method */
    this.expertService.getExpert()
      .subscribe((expert) => this.expert = expert);
  }

}

