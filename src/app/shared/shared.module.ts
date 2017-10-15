import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './pagination/pagination.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [
    /* exported module */
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    /* exported component */
    PaginationComponent,
  ],
  declarations: [PaginationComponent]
})
export class SharedModule { }

