import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { EmptyListComponent } from './empty-list/empty-list.component';

import { NumericDirective } from './directives/numeric.directive';
import { PhoneNumberDirective } from './validators/phone/phone.directive';
import { CreditCardNumberDirective } from './validators/credit-cardno/credit-cardno.directive';

import { IntlPhoneNumberPipe } from './pipes/intl-phone-number';
import { CreditCardnoPipe } from './pipes/credit-cardno.pipe';
import { UppercaseFirstCharacterPipe } from './pipes/uppercase-firstcharacter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HttpErrorComponent,
    EmptyListComponent,
    PhoneNumberDirective,
    CreditCardNumberDirective, 
    CreditCardnoPipe,
    IntlPhoneNumberPipe,
    UppercaseFirstCharacterPipe,
    NumericDirective
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    HttpErrorComponent, 
    EmptyListComponent,
    PhoneNumberDirective,
    CreditCardNumberDirective,
    CreditCardnoPipe,
    IntlPhoneNumberPipe,
    UppercaseFirstCharacterPipe,
    NumericDirective
  ],
  providers: [IntlPhoneNumberPipe, CreditCardnoPipe]
})
export class SharedModule { }
