import { ViewChild, Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService, UserService, AppService } from 'app/services';
import { User } from 'app/models/responses';
import { Pageable } from 'app/shared/pagable';
import { Subject } from 'rxjs/Subject';
import { AppformModalComponent } from 'app/dashboard/appform-modal/appform-modal.component';
import { Modal } from 'clarity-angular';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent extends Pageable implements OnInit, OnDestroy {
  @ViewChild('appformModal') modal: AppformModalComponent;
  @ViewChild('deleteModal') deleteModal: Modal;
  cancel$: Subject<any> = new Subject();

  user: User;
  apps: any[] = [];
  toDelete: string;
  loading: boolean;
  deleting: boolean = false;
  loadingError: boolean = false;
  noDataMessage: string = `You have not created any MAX apps.`
  
  constructor(
    private session: SessionService,
    private appService: AppService,
    private users: UserService) { 
      super()
    }
  
  deleteApp(id: string) {
    this.toDelete = id;
    this.deleteModal.open();
  }
  
  transformDates(response) {
    response.data.map(app => {
      app.created_at = app.created_at * 1000;
      app.updated_at = app.updated_at * 1000;

      return app;
    })
    
    return response;
  }
  
  delete() {
    this.deleting = true;

    this.appService.delete(this.toDelete)
      .takeUntil(this.cancel$)
      .subscribe(response => {
        if (response.status === "success") {
          this.deleteModal.close();
          this.fetchApps();
          this.toDelete = null;
        }
      }, err => {
        this.deleting = false;
      }, () => {
        this.deleting = false;
      })
  }
  
  fetchApps() {
    this.loading = true;
    this.loadingError = false;

    const options = {
      limit: this.perPage,
      offset: this.nextOffset
    }

    this.users.apps(this.user.id)
      .map(this.transformDates)
      .takeUntil(this.cancel$)
      .subscribe(response => {
        this.total = response.pagination.rowCount;
        this.apps = response.data;
      }, err => {
        this.loading = false;
        this.loadingError = true;
      }, () => {
        this.loading = false;
      })
  }

  ngOnInit() {
    this.user = this.session.getUser();

    this.fetchApps();

    this.modal.appCreated.subscribe(app => {
      this.fetchApps()
    })
  }

  ngOnDestroy() {
    this.cancel$.complete();
    this.modal.appCreated.unsubscribe();
  }
}
