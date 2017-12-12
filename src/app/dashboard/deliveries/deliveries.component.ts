import { ViewChild, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, SessionService } from 'app/services';
import { User } from 'app/models/responses';
import { State, DatagridPagination } from 'clarity-angular';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/takeUntil';
import { Pageable } from 'app/shared/pagable';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent extends Pageable implements OnInit, OnDestroy {

  @ViewChild('pagination') pager: DatagridPagination;
  loading: boolean = true;
  user: User;
  status: string;
  orders$: Subscription;
  cancel$: Subject<any> = new Subject();
  route$: Subscription;
  orders: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private userService: UserService
  ) { 
    super();
  }

  private toMilliseconds(value) {
    return value * 1000;
  }

  onRowSelected(order) {
    this.router.navigate(['/dashboard/deliveries', order.id]);
  }

  refresh(state: State) {
    if (this.orders$) this.orders$.unsubscribe();

    state.sort = state.sort || {
      by: 'created_at',
      reverse: false
    }

    const options = {
      limit: this.perPage,
      offset: this.nextOffset || 0
    }

    let orders = this.userService.orders(this.user.id, options)

    this.orders$ = orders
      .subscribe(response => {
        this.orders = response.data;
        this.pagination$.next(response.pagination);

        this.orders.map(order => {
          order.created_at = this.toMilliseconds(order.created_at);
          return order;
        })

        this.loading = false;
      }, err => {
        this.loading = false;
      })
  }

  ngOnInit() {
    this.user = this.session.getUser();
    this.setPager(this.pager);
  }

  ngOnDestroy() {
    this.cancel$.complete();
    this.destroyPagination();
    if (this.orders$) this.orders$.unsubscribe();
  }
}
