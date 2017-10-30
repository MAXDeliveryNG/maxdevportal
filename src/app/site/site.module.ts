import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SiteRoutingModule
  ],
  declarations: [HomeComponent, LoginComponent]
})
export class SiteModule { }
