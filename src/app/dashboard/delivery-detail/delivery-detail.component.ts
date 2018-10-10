import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'app/services';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GeoUtils } from 'app/shared/utils/map';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.scss']
})
export class DeliveryDetailComponent implements OnInit {

  loadingError = false;
  order$: Observable<any>;

  mapDefaultCenter = {
    lat: 6.4811612,
    lng: 3.4569946
  }
  pickupMarkerIcon = 'https://res.cloudinary.com/max-ng/image/upload/v1512817372/max-devportal/now-pickup.png';
  dropoffMarkerIcon = 'https://res.cloudinary.com/max-ng/image/upload/v1512817372/max-devportal/now-dropoff.png';

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
    response.order_status.map(status => {
      status.created_at = status.created_at * 1000;
      status.status = status.status.toUpperCase();
      return status;
    })

    response.pickup_window.date = response.pickup_window.date * 1000;
    response.created_at = response.created_at * 1000;

    return response
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.order$ = this.orders.get(params.id)
          .pipe(
            map((response: any) => {
              return response.data;
            }),
            map(this.transformDates)
          )
      });
  }
}
