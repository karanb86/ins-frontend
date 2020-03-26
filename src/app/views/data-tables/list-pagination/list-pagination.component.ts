import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss'],
  animations: [SharedAnimations],
})
export class ListPaginationComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  products: any[] = [];

  constructor() {}

  ngOnInit() {}

  selectAll(e) {
    this.products = this.products.map(p => {
      p.isSelected = this.allSelected;
      return p;
    });
  }
}
