import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-signup-step-two',
  templateUrl: './signup-step-two.component.html',
  styleUrls: ['./signup-step-two.component.scss'],
  animations: [SharedAnimations],
})
export class SignupStepTwoComponent implements OnInit {
  public stepTwoForm = this.fb.group({
    billing_account_number: this.fb.control(''),
    username: this.fb.control(''),
    email: this.fb.control(''),
    phone: this.fb.control(''),
    otp: this.fb.control(''),
    password: this.fb.control(''),
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.signUpFormData) {
      this.router.navigate(['/signup/step-one']);
    }
  }

  public submitForm() {
    const userData = { ...this.stepTwoForm.value, ...this.authService.signUpFormData };
    this.authService.signUp(userData).subscribe(() => {
      this.authService.signUpFormData = null;
      this.router.navigate(['/login']);
    });
  }
}
