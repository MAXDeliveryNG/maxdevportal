import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'app/services';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/operator/catch';
import { Subject } from 'rxjs';
import { GeoUtils } from 'app/shared/utils/map';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.scss']
})
export class DeliveryDetailComponent implements OnInit {

  route$: Subscription;
  cancel$: Subject<any> = new Subject();

  loading: boolean;
  loadingError: boolean = false;
  orderID: string;
  order: any;

  mapDefaultCenter: object = {
    lat: 6.4811612,
    lng: 3.4569946
  }
  pickupMarkerIcon: string = 'https://res.cloudinary.com/max-ng/image/upload/v1512817372/max-devportal/now-pickup.png';
  dropoffMarkerIcon: string = 'https://res.cloudinary.com/max-ng/image/upload/v1512817372/max-devportal/now-dropoff.png';

  constructor(
    private route: ActivatedRoute,
    private orders: OrderService
  ) { }

  private transformAddresses(response) {
    response.data.delivery_address.coordinates = GeoUtils.toLatLngObject(response.data.delivery_address.coordinates);
    response.data.pickup_address.coordinates = GeoUtils.toLatLngObject(response.data.pickup_address.coordinates);

    return response;
  } 

  private transformDates(response) {
    response.data.order_status.map(status => {
      status.created_at = status.created_at * 1000;
      status.status = status.status.toUpperCase();
      return status;
    })

    response.data.pickup_window.date = response.data.pickup_window.date * 1000;
    response.data.created_at = response.data.created_at * 1000;

    return response
  }

  fetchOrder(id: string) {
    this.loading = true;
    this.loadingError = false;    

    this.orders.get(id)
      .map(this.transformAddresses)
      .map(this.transformDates)
      .takeUntil(this.cancel$)
      .subscribe(response => {
        this.order = response.data;
      }, err => {
        this.loading = false;
        this.loadingError = true;
      }, () => {
        this.loading = false;
      });
  }

  ngOnInit() {
    this.route$ = this.route.params
      .subscribe(params => {
        this.orderID = params.id;
        this.fetchOrder(params.id)
      });
  }

  ngOnDestroy() {
    this.route$.unsubscribe();
    this.cancel$.complete();
  }
}
