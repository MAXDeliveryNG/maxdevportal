import { ViewChild, Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'app/services';
import { Modal } from 'clarity-angular';
import { ControlContainer } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'appform-modal',
  templateUrl: './appform-modal.component.html',
  styleUrls: ['./appform-modal.component.scss']
})
export class AppformModalComponent implements OnInit, OnDestroy {

  @ViewChild('modal') modal: Modal;
  @ViewChild('form') form: ControlContainer;
  @Output() appCreated: EventEmitter<any> = new EventEmitter();
  modal$: Subscription;
  cancel$: Subject<any> = new Subject();
  saving: boolean = false;
  tos: boolean = true;
  model: any = {}

  constructor(private appService: AppService) { }

  open() {
    this.modal.open();
  }

  save() {
    this.saving = true;
    delete this.model.tos;
    
    this.appService.create(this.model)
      .takeUntil(this.cancel$)
      .subscribe(response => {
        this.appCreated.emit(response.data);
        this.modal.close();
      }, err => {
        this.saving = false;
      }, () => {
        this.saving = false;
      })
  }

  ngOnInit() {
    this.modal$ = this.modal._openChanged.subscribe(open => {
      if (!open) {
        this.form.reset();
        this.cancel$.next();
      }
    })
  }

  ngOnDestroy() {
    this.modal$.unsubscribe();
    this.cancel$.complete();
  }

}
