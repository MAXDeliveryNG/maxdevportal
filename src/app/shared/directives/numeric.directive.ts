import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[numeric]'
})

export class NumericDirective {
    private regex: RegExp = new RegExp(/^[0-9 ]+(\.[0-9 ]*){0,1}$/g);

    private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home' ];

    constructor(private el: ElementRef) {}

    @HostListener('keypress', ['$event'])
    onkeypress(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const current: string = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}
