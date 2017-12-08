import { Injectable } from '@angular/core';
import { PersistenceService, IPersistenceContainer, StorageType } from 'angular-persistence';
import { JwtHelper } from 'angular2-jwt';
import { User } from '../models/responses';

@Injectable()
export class SessionService {

  private container: IPersistenceContainer;

  constructor(private persistence: PersistenceService, private jwtHelper: JwtHelper) { 
    this.container = persistence.createContainer('ng.max.devportal.session', { type: StorageType.LOCAL });
  }

  setUser(user: User) {
    return this.container.set('user', user);
  }

  getUser(): User {
    return this.container.get('user')
  }

  setToken(token: string) {
    return this.container.set('access_token', token);
  }

  getToken(): any | boolean {
    let token = this.container.get('access_token');
    return token ? this.jwtHelper.decodeToken(token) : false;
  }

  readToken(): string {
    let token = this.container.get('access_token');
    return token;
  }

  check(): boolean {
    let token = this.container.get('access_token');
    return token && !this.jwtHelper.isTokenExpired(token) ? true : false;
  }

  end() {
    this.container.removeAll();
  }
}
