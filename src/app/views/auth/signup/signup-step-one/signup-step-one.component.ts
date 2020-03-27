import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-signup-step-one',
  templateUrl: './signup-step-one.component.html',
  styleUrls: ['./signup-step-one.component.scss'],
  animations: [SharedAnimations],
})
export class SignupStepOneComponent implements OnInit {
  public termsAgreed = false;

  stepOneForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    zip_code: new FormControl('', Validators.required),
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
    console.log(this.stepOneForm.value);
    this.authService.signUpFormData = this.stepOneForm.value;
    this.router.navigate(['..', 'step-two'], { relativeTo: this.route });
  }
}
