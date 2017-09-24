import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExpertRoutingModule } from './expert-routing.module';

import { ExpertListComponent } from './expert-list/expert-list.component';

@NgModule({
  imports: [
    SharedModule,
    ExpertRoutingModule,
  ],
  declarations: [ExpertListComponent]
})
export class ExpertModule { }

