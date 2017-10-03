import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertListComponent } from './expert-list/expert-list.component';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ExpertListComponent,
      },
      {
        path: 'profile/:id',
        component: ExpertDetailComponent,
      }
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class ExpertRoutingModule { }

