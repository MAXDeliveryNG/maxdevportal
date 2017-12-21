import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailComponent } from './app-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from 'clarity-angular';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment/moment.module';
import { ClipboardModule } from 'ngx-clipboard/src';
import { AppService } from 'app/services';
import { HttpClientModule } from '@angular/common/http';
import { AppkeyModalComponent } from 'app/dashboard/appkey-modal/appkey-modal.component';

describe('AppDetailComponent', () => {
  let component: AppDetailComponent;
  let fixture: ComponentFixture<AppDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        ClarityModule.forRoot(),
        MomentModule,
        ClipboardModule,
        SharedModule,
      ],
      declarations: [ 
        AppDetailComponent,
        AppkeyModalComponent
      ],
      providers: [
        AppService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
