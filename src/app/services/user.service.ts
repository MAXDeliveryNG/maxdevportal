import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Orders } from 'app/models/responses/orders';

@Injectable()
export class UserService {

  baseUrl: string = `${environment.apiUrl}/users`;
  
  constructor(private httpClient: HttpClient) { }
  
  /*
  activeOrders(id: string, options?: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();
    const url = `${this.baseUrl}/${id}/orders/active`;

    if (options) {
      Object.keys(options).forEach(key => {
        params = params.append(key, options[key]);
      })
    }

    return this.httpClient.get<Orders>(url, { headers, params });
  }*/

  orders(id: string, options?: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();
    const url = `${this.baseUrl}/${id}/orders`;

    if (options) {
      Object.keys(options).forEach(key => {
        params = params.append(key, options[key]);
      })
    }

    return this.httpClient.get<Orders>(url, { headers, params });
  }
}
