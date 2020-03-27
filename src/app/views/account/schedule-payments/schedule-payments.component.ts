import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from 'services/auth.service';

@Component({
  selector: 'app-schedule-payments',
  templateUrl: './schedule-payments.component.html',
  styleUrls: ['./schedule-payments.component.scss'],
})
export class SchedulePaymentsComponent implements OnInit {
  @Output() changeIndex = new EventEmitter();
  currentIndex = 1;
  paginationArray: number[] = [];
  currentRows = [];
  @ViewChild('paidDate', { static: true }) paidDate: NgbDatepicker;

  rows = [];
  public columns = [
    { prop: 'invoice_date', name: 'Invoice Date' },
    { prop: 'invoice_number', name: 'Invoice #' },
    { prop: 'account_number', name: 'Account #' },
    { prop: 'due_date', name: 'Due Date' },
    { prop: 'total_amount', name: 'Total Amount' },
    { prop: 'schedule_date', name: 'Schedule Date' },
  ];
  username: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.fetchdata();
    this.paidDate.dayTemplateData = date => `${date.day}/${date.month}/${date.year}`;
    this.changeIndex.subscribe(i => {
      this.currentIndex = i;
      this.getPaginatedData();
    });
  }

  getPaginationArray() {
    this.paginationArray = [];
    let range;
    if (this.rows.length <= 7) {
      range = 1;
    } else if (this.rows.length > 7 && this.rows.length % 7 > 0) {
      range = (this.rows.length / 7) + 1;
    }
    for (let i = 1; i <= range; i++) {
      this.paginationArray.push(i);
    }
    this.getPaginatedData();
  }

  getPaginatedData() {
    this.currentRows = this.rows.slice((this.currentIndex - 1) * 7, this.currentIndex * 7);
  }

  onChangeIndex(i) {
    this.changeIndex.emit(i);
  }

  onPreviousPage() {
    if (this.currentIndex > 1) {
      this.currentIndex -= 1;
      this.onChangeIndex(this.currentIndex);
    }
  }

  onNextPage() {
    if (this.currentIndex < this.paginationArray.length) {
      this.currentIndex += 1;
      this.onChangeIndex(this.currentIndex);
    }
  }

  fetchdata () {
    const baseUrl = 'http://invengerdev-back.deliveryweb.ru/scheduled_payments/?';
    this.authService.genericgetapi(baseUrl).subscribe(value => {
      this.rows = [];
      value['results'].forEach((v) => {
        this.rows.push({
          invoice_date: v['invoice_date'] || ' ',
          invoice_number: v['invoice_number'] || ' ',
          account_number: v['billing_account_number'] || ' ',
          due_date: v['due_date'] || ' ',
          total_amount: v['amount'] || ' ',
          balance_number: v['balance_number'] || ' ',
        });
      });
      this.getPaginationArray();
    });
  }
}
