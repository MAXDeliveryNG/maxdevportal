import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppkeyModalComponent } from './appkey-modal.component';

describe('AppkeyModalComponent', () => {
  let component: AppkeyModalComponent;
  let fixture: ComponentFixture<AppkeyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppkeyModalComponent ]
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
