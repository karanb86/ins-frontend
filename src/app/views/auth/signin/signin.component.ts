import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [SharedAnimations],
})
export class SigninComponent implements OnInit {
  public loading: boolean;
  public loadingText: string;
  public error: string;
  public signinForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.loadingText = 'Loading Account Module...';

        this.loading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.loading = false;
      }
    });
  }

  signin() {
    const { username, password } = this.signinForm.value;
    this.error = '';
    this.loading = true;
    this.loadingText = 'Sigining in...';
    this.authService
      .login(username, password)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.loading = false;
          this.loadingText = '';
          this.error = error.error.message;
          return throwError(error);
        }),
      )
      .subscribe(() => {
        this.router.navigateByUrl('/account');
        this.loading = false;
      });
  }
}
