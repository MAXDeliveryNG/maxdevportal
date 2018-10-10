import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[match][formControlName],[match][formControl],[match][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
    ]
})
// tslint:disable-next-line:directive-class-suffix
export class MatchValidator implements Validator {
    constructor(
        @Attribute('match') public match: string,
        @Attribute('reverse') public reverse: string) {}

    private get isReverse() {
        // tslint:disable-next-line:curly
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        const v = c.value;

        // control vlaue
        const e = c.root.get(this.match);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                'match': true
            }
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            return { 'match': false }
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            return { 'match': false }
        }

        return null;
    }
}
