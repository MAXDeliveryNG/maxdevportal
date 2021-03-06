import { ViewChild, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'app/services';
import { Subscription } from 'rxjs/Subscription';
import { App } from 'app/models/data/app';
import { AppKey } from 'app/models/data/app-key';
import { Modal } from 'clarity-angular';
import { AppkeyModalComponent } from 'app/dashboard/appkey-modal/appkey-modal.component';
import { ObjectUtils } from 'app/shared/utils/object';
import { merge } from 'lodash';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})

export class AppDetailComponent implements OnInit, OnDestroy {

  route$: Subscription;
  loading = true;
  loadingError = false;
  data: App;
  id: string;
  toDelete: AppKey;
  deleting = false;
  saving = false;
  @ViewChild('form') form;
  @ViewChild('deleteModal') keyDeleteModal: Modal;
  @ViewChild('keyModal') keyModal: AppkeyModalComponent;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService) { }

  private transform(response) {
    response.data.keys.map(key => {
      key.visible = false;
      key.created_at = key.created_at * 1000;
      key.updated_at = key.updated_at * 1000;
      return key;
    })
    return response;
  }

  showDeleteModal(key: AppKey) {
    this.keyDeleteModal.open();
    this.toDelete = key;
  }

  deleteKey() {
    if (this.data.keys.length < 2) {
      this.errorMessage = 'Your app must have at least one key';
    } else {
      this.deleting = true;

      this.appService.deleteKey(this.toDelete.id)
        .subscribe(response => {
          this.deleting = false;
          this.keyDeleteModal.close();
          this.data.keys.splice(this.data.keys.indexOf(this.toDelete), 1);
        }, err => {
          this.deleting = false;
        })
    }
  }

  updateAppKeys($event: AppKey) {
    this.data.keys.unshift($event);
  }

  save() {
    this.saving = true;
    const model = ObjectUtils.getDirtyValues(this.form);

    this.appService.update(this.data.id, model)
      .subscribe(response => {
        this.data = merge(this.data, response.data);
      }, err => {
        this.saving = false;
      }, () => {
        this.saving = false;
      })
  }

  fetchData(id: string) {
    this.loadingError = false;

    this.appService.read(id)
      .map(this.transform)
      .subscribe(response => {
        this.data = response.data;
        this.loadingError = false;
      }, err => {
        this.loading = false;
        this.loadingError = true;
      }, () => {
        this.loading = false
      })
  }

  ngOnInit() {
    this.route$ = this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchData(params.id);
    })

    this.keyDeleteModal._openChanged.subscribe(open => {
      if (!open) {
        this.toDelete = null;
        this.errorMessage = null;
      }
    })
  }

  ngOnDestroy() {
    this.keyDeleteModal._openChanged.unsubscribe();
  }
}
