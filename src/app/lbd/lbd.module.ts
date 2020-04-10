
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';

import { LbdChartComponent } from './lbd-chart/lbd-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  declarations: [

    LbdChartComponent

  ],
  exports: [
    LbdChartComponent,
    ButtonModule
  ]
})
export class LbdModule { }
