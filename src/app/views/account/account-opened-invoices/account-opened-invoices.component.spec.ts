import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpenedInvoicesComponent } from './account-opened-invoices.component';

describe('AccountOpenedInvoicesComponent', () => {
  let component: AccountOpenedInvoicesComponent;
  let fixture: ComponentFixture<AccountOpenedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountOpenedInvoicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpenedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
