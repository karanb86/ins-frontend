import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-payments',
  templateUrl: './schedule-payments.component.html',
  styleUrls: ['./schedule-payments.component.scss'],
})
export class SchedulePaymentsComponent implements OnInit {
  @ViewChild('paidDate', { static: true }) paidDate: NgbDatepicker;
  public rows = [
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      schedule_date: '9/31/2019',
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      schedule_date: '9/31/2019',
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      schedule_date: '9/31/2019',
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '31.08.2019',
      total_amount: 5,
      schedule_date: '9/31/2019',
    },
  ];
  public columns = [
    { prop: 'invoice_date', name: 'Invoice Date' },
    { prop: 'invoice_number', name: 'Invoice #' },
    { prop: 'account_number', name: 'Account #' },
    { prop: 'due_date', name: 'Due Date' },
    { prop: 'total_amount', name: 'Total Amount' },
    { prop: 'schedule_date', name: 'Schedule Date' },
  ];

  constructor() {}

  ngOnInit() {
    this.paidDate.dayTemplateData = date => `${date.day}/${date.month}/${date.year}`;
  }
}
