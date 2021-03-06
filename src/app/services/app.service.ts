import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {

  baseUrl: string = `${environment.apiUrl}/apps`;

  constructor(private httpClient: HttpClient) { }

  create(body: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.baseUrl, body, { headers });
  }

  createKey(id: string, body: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.baseUrl}/${id}/keys`;

    return this.httpClient.post<any>(url, body, { headers });
  }

  read(id: string, options?: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();
    const url = `${this.baseUrl}/${id}`;

    if (options) {
      Object.keys(options).forEach(key => {
        params = params.append(key, options[key]);
      })
    }

    return this.httpClient.get<any>(url, { headers, params });
  }

  revokeKey(id: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.baseUrl}/keys/${id}/revoke`;

    return this.httpClient.put<any>(url, {}, { headers });
  }

  update(id: string, data: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.baseUrl}/${id}`;

    return this.httpClient.put<any>(url, data, { headers });
  }

  delete(id: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.baseUrl}/${id}`;

    return this.httpClient.delete<any>(url, { headers });
  }

  deleteKey(id: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.baseUrl}/keys/${id}`;

    return this.httpClient.delete<any>(url, { headers });
  }
}
