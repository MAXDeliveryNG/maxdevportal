import { ViewChild, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'app/services';
import { Subscription } from 'rxjs';
import { App } from 'app/models/data/app';
import { AppKey } from 'app/models/data/app-key';
import { Modal } from 'clarity-angular';
import { AppkeyModalComponent } from 'app/dashboard/appkey-modal/appkey-modal.component';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})

export class AppDetailComponent implements OnInit, OnDestroy {

  route$: Subscription;
  loading: boolean = true;
  loadingError: boolean = false;
  data: App;
  id: string;
  toDelete: AppKey;
  deleting: boolean = false;
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

  deleteKey(id: string) {
    if (this.data.keys.length < 2) {
      this.errorMessage = "Your app must have at least one key";
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
