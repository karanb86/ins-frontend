import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tag-inputs',
  templateUrl: './tag-inputs.component.html',
  styleUrls: ['./tag-inputs.component.scss'],
})
export class TagInputsComponent implements OnInit {
  items = ['Javascript', 'Typescript'];
  autocompletes$;
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([{ display: 'Bangladesh', value: 'BD' }]);

  constructor() {}

  ngOnInit() {}

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }
}
