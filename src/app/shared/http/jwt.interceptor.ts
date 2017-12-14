import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SessionService } from '../../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private session: SessionService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.session.readToken()) {
            const request = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.session.readToken()}`
                }
            });
            return next.handle(request);
        } else {
            return next.handle(req);
        }
    }
}