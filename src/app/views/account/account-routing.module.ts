import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountMainComponent } from './account-main/account-main.component';
import { AccountOpenedInvoicesComponent } from './account-opened-invoices/account-opened-invoices.component';
import { AccountClosedInvoicesComponent } from './account-closed-invoices/account-closed-invoices.component';
import { SchedulePaymentsComponent } from './schedule-payments/schedule-payments.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';

const routes: Routes = [
  { path: '', component: AccountMainComponent },
  { path: 'opened-invoices', component: AccountOpenedInvoicesComponent },
  { path: 'closed-invoices', component: AccountClosedInvoicesComponent },
  { path: 'schedule-payments', component: SchedulePaymentsComponent },
  { path: 'view-payments', component: ViewPaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
