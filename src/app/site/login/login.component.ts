import { ViewChild,Component, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: ControlContainer;
  loading: boolean = false;
  disableBtn: boolean;
  error: string;
  cancel$: Subject<any> = new Subject;
  credentials: any = {
    username: null,
    password: null
  }

  constructor(private auth: AuthService) { }

  submitForm() {
    this.loading = true;
    this.disableBtn = true;

    this.auth
      .login(this.credentials)
      .subscribe(response => {
        this.loading = false;
        this.disableBtn = false;

        if (response.status == 'fail') {
          this.error = response.message;
        } else if (response.status == 'success') {
          this.error = null;
        }
      },
      err => {
        this.loading = false;
        this.disableBtn = false;
      })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.cancel$.complete();
  }
}
