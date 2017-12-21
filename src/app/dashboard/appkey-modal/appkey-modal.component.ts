import { ViewChild, Component, Input, Output, SimpleChanges, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { AppKey } from 'app/models/data/app-key';
import { Modal } from 'clarity-angular';
import { AppService } from 'app/services';
import { App } from 'app/models/data/app';

@Component({
  selector: 'appkey-modal',
  templateUrl: './appkey-modal.component.html',
  styleUrls: ['./appkey-modal.component.scss']
})
export class AppkeyModalComponent implements OnInit, OnChanges {

  @Input('app') app: App;
  @ViewChild('modal') modal: Modal;
  @Output() keyCreated: EventEmitter<AppKey> = new EventEmitter();
  saving: boolean = false;
  model: AppKey = {
    name: null
  }

  constructor(private appService: AppService) { }

  open() {
    this.modal.open();
  }

  save() {
    this.saving = true;

    this.appService.createKey(this.app.id, this.model)
      .map(response => {
        response.data.created_at = response.data.created_at * 1000;
        response.data.updated_at = response.data.updated_at * 1000;
        return response;
      })
      .subscribe(response => {
        this.keyCreated.emit(response.data);
        this.modal.close();
      }, err => {
        this.saving = false;
      }, () => {
        this.saving = false;
      })
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.app = changes.app ? changes.app.currentValue : this.app;
  }
}
