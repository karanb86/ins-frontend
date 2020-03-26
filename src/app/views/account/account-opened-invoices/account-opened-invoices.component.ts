import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-account-opened-invoices',
  templateUrl: './account-opened-invoices.component.html',
  styleUrls: ['./account-opened-invoices.component.scss'],
})
export class AccountOpenedInvoicesComponent implements OnInit {
  @Output() changeIndex = new EventEmitter();
  paymentStatus = 'pending';
  currentIndex = 1;
  paginationArray: number[] = [];
  currentRows = [];
  public rows = [
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
  ];
  public columns = [
    { prop: 'invoice_date', name: 'Invoice Date' },
    { prop: 'invoice_number', name: 'Invoice #' },
    { prop: 'account_number', name: 'Account Number' },
    { prop: 'due_date', name: 'Due Date' },
    { prop: 'total_amount', name: 'Total Amount' },
    { prop: 'balance_number', name: 'Balance #' },
  ];

  constructor() {}

  ngOnInit() {
    this.getPaginationArray();
    this.getPaginatedData();
    this.changeIndex.subscribe(i => {
      this.currentIndex = i;
        this.getPaginatedData();
    });
  }
  changePaymentStatus(status) {
    this.paymentStatus = status;
  }
  getPaginationArray() {
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
    console.log('current', this.currentIndex);
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
}
