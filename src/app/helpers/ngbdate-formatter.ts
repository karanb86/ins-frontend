import { Injectable } from '@angular/core';

import { NgbDateStruct, ɵo } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class USADateFormatter extends ɵo {
  format(date: NgbDateStruct) {
    return `${date.day}/${date.month}/${date.year}`;
  }
}
