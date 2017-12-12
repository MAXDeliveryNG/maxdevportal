import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'app/services';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs';
import { GeoUtils } from 'app/shared/utils/map';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.scss']
})
export class DeliveryDetailComponent implements OnInit {

  order$: Observable<any>;
  route$: Subscription;
  cancel$: Subject<any> = new Subject();

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

  ngOnInit() {
    this.route$ = this.route.params
      .subscribe(params => {
        this.order$ = this.orders.get(params.id)
          .map((response: any) => {
            response.data.delivery_address.coordinates = GeoUtils.toLatLngObject(response.data.delivery_address.coordinates);
            response.data.pickup_address.coordinates = GeoUtils.toLatLngObject(response.data.pickup_address.coordinates);

            response.data.pickup_window.date = response.data.pickup_window.date * 1000;
            response.data.created_at = response.data.created_at * 1000;

            return response;
          })
          .map((response: any) => {
            response.data.order_status.map(status => {
              status.created_at = status.created_at * 1000;
              status.status = status.status.toUpperCase();
              return status;
            })
            return response;
          })
          .takeUntil(this.cancel$);
      });
  }

  ngOnDestroy() {
    this.route$.unsubscribe();
    this.cancel$.complete();
  }
}
