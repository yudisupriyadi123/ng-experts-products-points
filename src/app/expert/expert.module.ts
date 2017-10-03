import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExpertRoutingModule } from './expert-routing.module';

import { ExpertListComponent } from './expert-list/expert-list.component';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';

import { ExpertService } from '../core/expert.service';

@NgModule({
  imports: [
    SharedModule,
    ExpertRoutingModule,
  ],
  providers: [ExpertService],
  declarations: [ExpertListComponent, ExpertDetailComponent]
})
export class ExpertModule { }

