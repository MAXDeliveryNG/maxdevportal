import { Component, Input, Output, EventEmitter, SimpleChanges, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.scss']
})
export class HttpErrorComponent implements OnInit, OnChanges {

  @Input('hide') hide: boolean;
  @Input('buttonText') buttonText: string;
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  performButtonAction() {
    this.actionClicked.emit(true);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.hide = changes.hide ? changes.hide.currentValue : this.hide;
    this.buttonText = changes.buttonText ? changes.buttonText.currentValue : 'Reload';
  }
}
