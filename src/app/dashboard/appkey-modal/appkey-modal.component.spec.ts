import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppkeyModalComponent } from './appkey-modal.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { AppService } from 'app/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppkeyModalComponent', () => {
  let component: AppkeyModalComponent;
  let fixture: ComponentFixture<AppkeyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ClarityModule.forRoot()
      ],
      declarations: [ AppkeyModalComponent ],
      providers: [
        AppService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppkeyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
