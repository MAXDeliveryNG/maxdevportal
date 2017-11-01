import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { SharedModule } from '../shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'

import { AuthService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ClarityModule.forRoot(),
    SiteRoutingModule
  ],
  declarations: [HomeComponent, LoginComponent],
  providers: [AuthService]
})
export class SiteModule { }
