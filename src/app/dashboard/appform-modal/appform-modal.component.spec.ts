import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppformModalComponent } from './appform-modal.component';

describe('AppformModalComponent', () => {
  let component: AppformModalComponent;
  let fixture: ComponentFixture<AppformModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppformModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppformModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
