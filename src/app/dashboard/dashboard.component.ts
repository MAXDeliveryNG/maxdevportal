import { ViewChild, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services';
import { User } from '../models/responses';
import { Modal } from 'clarity-angular';

import 'clarity-icons';
import 'clarity-icons/shapes/core-shapes';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/travel-shapes';
import 'clarity-icons/shapes/technology-shapes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @ViewChild('logoutModal') logoutModal: Modal;
  navCollasped: boolean = false;
  user: User;

  constructor(private router: Router, private session: SessionService) { }

  showLogoutModal() {
    this.logoutModal.open();
  }

  hideLogoutModal() {
    this.logoutModal.close();
  }

  logout() {
    this.session.end();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.user = this.session.getUser();
  }

}
