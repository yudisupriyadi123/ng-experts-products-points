import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertListComponent } from './expert-list/expert-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ExpertListComponent,
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

