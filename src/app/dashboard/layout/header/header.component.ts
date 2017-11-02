import { ViewChild, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'clarity-angular';
import { SessionService } from '../../../services';
import { User } from '../../../models/responses';

import 'clarity-icons';
import 'clarity-icons/shapes/core-shapes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('logoutModal') logoutModal: Modal;
  user: User;
  logoutModalVisible: boolean = false;

  constructor(private session: SessionService, private router: Router) { }

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
