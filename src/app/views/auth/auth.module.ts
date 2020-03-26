import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupStepOneComponent } from './signup/signup-step-one/signup-step-one.component';
import { SignupStepTwoComponent } from './signup/signup-step-two/signup-step-two.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SharedComponentsModule } from 'shared/components/shared-components.module';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { PayWithoutRegistrationComponent } from './pay-without-registration/pay-without-registration.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedComponentsModule, AuthRoutingModule],
  declarations: [
    SignupStepOneComponent,
    SignupStepTwoComponent,
    SigninComponent,
    ForgotComponent,
    StartScreenComponent,
    PayWithoutRegistrationComponent,
  ],
})
export class AuthModule {}
