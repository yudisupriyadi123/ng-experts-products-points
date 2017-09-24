import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination/pagination.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    /* exported module */
    CommonModule,
    NgxPaginationModule,
    
    /* exported component */
    PaginationComponent,
  ],
  declarations: [PaginationComponent]
})
export class SharedModule { }

