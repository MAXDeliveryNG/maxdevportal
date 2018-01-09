import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { SharedModule } from '../shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { SessionService, AuthService, UserService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ClarityModule.forRoot(),
    SiteRoutingModule
  ],
  declarations: [HomeComponent, LoginComponent, SignupComponent],
  providers: [SessionService, AuthService, UserService]
})
export class SiteModule { }
