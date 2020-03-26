import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentsModule } from 'shared/components/shared-components.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountOpenedInvoicesComponent } from './account-opened-invoices/account-opened-invoices.component';
import { AccountClosedInvoicesComponent } from './account-closed-invoices/account-closed-invoices.component';
import { SchedulePaymentsComponent } from './schedule-payments/schedule-payments.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgbModule,
    AccountRoutingModule,
  ],
  declarations: [
    AccountMainComponent,
    AccountOpenedInvoicesComponent,
    AccountClosedInvoicesComponent,
    SchedulePaymentsComponent,
    ViewPaymentsComponent,
  ],
})
export class AccountModule {}
