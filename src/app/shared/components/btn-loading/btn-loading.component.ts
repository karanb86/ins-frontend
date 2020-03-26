import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss'],
})
export class BtnLoadingComponent implements OnInit {
  @Input() loading: boolean;
  @Input() btnClass: string;
  @Input() loadingText = 'Please wait';
  @Input() type: 'button' | 'submit' = 'submit';

  constructor() {}

  ngOnInit() {}
}
