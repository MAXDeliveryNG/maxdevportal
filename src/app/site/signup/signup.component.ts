import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, SessionService } from '../../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  error: string;
  model: any = {
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    password: null
  }

  constructor(
    private router: Router,
    private session: SessionService,
    private userService: UserService
  ) { }

  signup() {
    this.loading = true;

    this.userService.create(this.model)
      .subscribe(response => {
        this.loading = false;
        if (response.status == 'fail') {
          this.error = response.message;
        } else if (response.status == 'success') {
          this.error = null;
          this.session.setUser(response.data.user);
          this.session.setToken(response.data.access_token);

          this.router.navigate(['/dashboard/deliveries']);
        }
      }, err => {
        this.loading = false;
      })
  }

  ngOnInit() {
  }

}
