import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Orders } from 'app/models/responses/orders';
import { Apps } from 'app/models/responses/apps';
import { SignupResponse } from 'app/models/responses/signup';

@Injectable()
export class UserService {

  baseUrl: string = `${environment.apiUrl}/users`;
  
  constructor(private httpClient: HttpClient) { }

  create(body: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<SignupResponse>(this.baseUrl, body, { headers });
  }

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

  apps(id: string, options?: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();
    const url = `${this.baseUrl}/${id}/apps`;

    if (options) {
      Object.keys(options).forEach(key => {
        params = params.append(key, options[key]);
      })
    }

    return this.httpClient.get<Apps>(url, { headers, params });
  }
}
