import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-table',
  templateUrl: './paging-table.component.html',
  styleUrls: ['./paging-table.component.scss'],
})
export class PagingTableComponent implements OnInit {
  products$;

  constructor() {}

  ngOnInit() {}
}
