import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClarityModule } from 'clarity-angular';
import { MomentModule, DateFormatPipe } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';

import { SessionService, UserService, OrderService } from '../services'

import { DashboardComponent } from './dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { HeaderComponent } from './layout/header/header.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule.forRoot(),
    MomentModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gMapsApiKey
    }),
    DashboardRoutingModule
  ],
  declarations: [
    HeaderComponent,
    DashboardComponent, 
    DeliveriesComponent, DeliveryDetailComponent
  ],
  providers: [
    DateFormatPipe,
    SessionService,
    UserService,
    OrderService
  ]
})
export class DashboardModule { }
