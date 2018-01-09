import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule} from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { SignupComponent } from './signup.component';
import { AuthService, SessionService, UserService } from '../../services'
import { PersistenceService } from 'angular-persistence/src/services/persistence.service';
import { JwtHelper } from 'angular2-jwt';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, ClarityModule],
      providers: [
        AuthService, 
        SessionService, 
        UserService, 
        JwtHelper,
        PersistenceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
