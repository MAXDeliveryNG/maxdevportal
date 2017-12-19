import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { EmptyListComponent } from './empty-list/empty-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HttpErrorComponent,
    EmptyListComponent
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    HttpErrorComponent, 
    EmptyListComponent
  ],
  providers: []
})
export class SharedModule { }
