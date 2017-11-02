import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClarityModule } from 'clarity-angular';

import { SessionService } from '../services'

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './layout/header/header.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule.forRoot(),
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, HeaderComponent],
  providers: [SessionService]
})
export class DashboardModule { }
