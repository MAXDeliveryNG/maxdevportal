import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClarityModule } from 'clarity-angular';
import { MomentModule, DateFormatPipe } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';
import { ClipboardModule } from 'ngx-clipboard';

import { SessionService, UserService, OrderService, AppService } from '../services'

import { DashboardComponent } from './dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { HeaderComponent } from './layout/header/header.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';

import { environment } from '../../environments/environment';
import { AppsComponent } from './apps/apps.component';
import { AppformModalComponent } from './appform-modal/appform-modal.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { AppkeyModalComponent } from './appkey-modal/appkey-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule.forRoot(),
    MomentModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gMapsApiKey
    }),
    ClipboardModule,
    DashboardRoutingModule
  ],
  declarations: [
    HeaderComponent,
    DashboardComponent, 
    DeliveriesComponent, DeliveryDetailComponent, AppsComponent, AppformModalComponent, AppDetailComponent, AppkeyModalComponent
  ],
  providers: [
    DateFormatPipe,
    SessionService,
    UserService,
    OrderService,
    AppService
  ]
})
export class DashboardModule { }
