import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private session: SessionService) { }

    canActivate() {
        if (!this.session.check()) {
            this.router.navigate(['/login']);
        } else {
            return true;
        }
    }
}