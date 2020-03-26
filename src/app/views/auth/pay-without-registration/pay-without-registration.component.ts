import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-without-registration',
  templateUrl: './pay-without-registration.component.html',
  styleUrls: ['./pay-without-registration.component.scss'],
})
export class PayWithoutRegistrationComponent implements OnInit {
  public billingAccountNumber = '';
  public zipCode = '';

  constructor() {}

  ngOnInit() {}

  submitForm() {}
}
