import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertListComponent } from './expert-list/expert-list.component';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';
import { ExpertCreateComponent } from './expert-create/expert-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      /* Important: the order is matter */
      {
        path: 'list',
        component: ExpertListComponent,
      },
      {
        path: 'profile/create',
        component: ExpertCreateComponent,
      },
      {
        path: 'profile/:id',
        component: ExpertDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class ExpertRoutingModule { }

