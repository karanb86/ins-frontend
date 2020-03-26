import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss'],
})
export class AccountMainComponent implements OnInit {
  constructor(private authService: AuthService ) {}

  ngOnInit() {}
}
