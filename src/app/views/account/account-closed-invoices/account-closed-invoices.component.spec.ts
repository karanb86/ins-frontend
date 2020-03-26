import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosedInvoicesComponent } from './account-closed-invoices.component';

describe('AccountClosedInvoicesComponent', () => {
  let component: AccountClosedInvoicesComponent;
  let fixture: ComponentFixture<AccountClosedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountClosedInvoicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
