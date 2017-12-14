import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { HomeComponent } from './home.component';
import {FooterComponent} from '../../shared/layout/footer/footer.component';
import {HeaderComponent} from '../../shared/layout/header/header.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FooterComponent, HeaderComponent  ],
      imports: [RouterTestingModule.withRoutes([{
        path: '',
      component: HeaderComponent
    }])
 ]
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
