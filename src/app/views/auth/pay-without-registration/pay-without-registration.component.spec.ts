import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWithoutRegistrationComponent } from './pay-without-registration.component';

describe('PayWithoutRegistrationComponent', () => {
  let component: PayWithoutRegistrationComponent;
  let fixture: ComponentFixture<PayWithoutRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayWithoutRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayWithoutRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
