import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../models/responses';

@Injectable()
export class AuthService {

  private baseUrl: string = environment.apiUrl + '/auths';
  
  constructor(private httpClient: HttpClient) { }

  login(credentials: object) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.baseUrl}/login`;

    return this.httpClient.post<LoginResponse>(url, credentials, { headers: headers });
  }
}
