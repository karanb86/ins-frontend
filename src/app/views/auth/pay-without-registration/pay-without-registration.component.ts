import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pay-without-registration',
  templateUrl: './pay-without-registration.component.html',
  styleUrls: ['./pay-without-registration.component.scss'],
})
export class PayWithoutRegistrationComponent implements OnInit {

  withoutRegForm = new FormGroup({
    billingAccountNumber: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  submitForm() {}

  onGoBack() {
    this.router.navigate(['../signin'], {relativeTo: this.route});
  }
}
