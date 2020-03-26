import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SharedAnimations } from '../../animations/shared-animations';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [SharedAnimations],
})
export class SearchComponent implements OnInit {
  page = 1;
  pageSize = 6;

  results$: Observable<any[]>;
  searchCtrl: FormControl = new FormControl('');

  constructor(public searchService: SearchService) {}

  ngOnInit() {}
}
