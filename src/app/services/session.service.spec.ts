import { TestBed, inject } from '@angular/core/testing';
import { PersistenceModule } from 'angular-persistence';
import { JwtHelper } from 'angular2-jwt';
import { SessionService } from './session.service';

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersistenceModule],
      providers: [JwtHelper, SessionService]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
