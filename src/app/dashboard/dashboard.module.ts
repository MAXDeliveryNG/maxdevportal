import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClarityModule } from 'clarity-angular';
import { MomentModule, DateFormatPipe } from 'angular2-moment';

import { SessionService, UserService, OrderService } from '../services'

import { DashboardComponent } from './dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule.forRoot(),
    MomentModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    DeliveriesComponent
  ],
  providers: [
    DateFormatPipe,
    SessionService,
    UserService,
    OrderService
  ]
})
export class DashboardModule { }
