import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-signup-step-one',
  templateUrl: './signup-step-one.component.html',
  styleUrls: ['./signup-step-one.component.scss'],
  animations: [SharedAnimations],
})
export class SignupStepOneComponent implements OnInit {
  public termsAgreed = false;
  public stepOneForm = this.fb.group({
    first_name: this.fb.control(''),
    last_name: this.fb.control(''),
    date_of_birth: this.fb.control(''),
    zip_code: this.fb.control(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    if (this.authService.signUpFormData) {
      this.stepOneForm.patchValue(this.authService.signUpFormData);
    }
  }

  public termsChanged(value: boolean) {
    this.termsAgreed = value;
  }

  public submitForm() {
    this.authService.signUpFormData = this.stepOneForm.value;
    this.router.navigate(['..', 'step-two'], { relativeTo: this.route });
  }
}
