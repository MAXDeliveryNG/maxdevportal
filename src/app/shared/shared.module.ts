import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpErrorComponent } from './http-error/http-error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HttpErrorComponent
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    HttpErrorComponent
  ],
  providers: []
})
export class SharedModule { }
