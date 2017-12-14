import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersistenceModule } from 'angular-persistence';
import { FormsModule} from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { JwtHelper } from 'angular2-jwt';

import { LoginComponent } from './login.component';
import { SessionService, AuthService } from '../../services'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule, 
        HttpClientTestingModule, 
        RouterTestingModule, 
        PersistenceModule, 
        ClarityModule
      ],
      providers: [JwtHelper, SessionService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
