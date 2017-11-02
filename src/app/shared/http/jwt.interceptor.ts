import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SessionService } from '../../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private session: SessionService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.session.getToken()) {
            const request = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.session.getToken()}`
                }
            });
            return next.handle(request);
        } else {
            return next.handle(req);
        }
    }
}