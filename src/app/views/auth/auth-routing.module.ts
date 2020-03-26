import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupStepOneComponent } from './signup/signup-step-one/signup-step-one.component';
import { SignupStepTwoComponent } from './signup/signup-step-two/signup-step-two.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { PayWithoutRegistrationComponent } from './pay-without-registration/pay-without-registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StartScreenComponent },
  { path: 'signup', pathMatch: 'full', redirectTo: 'signup/step-one' },
  { path: 'signup/step-one', pathMatch: 'full', component: SignupStepOneComponent },
  { path: 'signup/step-two', pathMatch: 'full', component: SignupStepTwoComponent },
  { path: 'signin', pathMatch: 'full', component: SigninComponent },
  { path: 'forgot', pathMatch: 'full', component: ForgotComponent },
  { path: 'without-registration', pathMatch: 'full', component: PayWithoutRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
