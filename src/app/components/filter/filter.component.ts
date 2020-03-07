import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  removable = true;
  filteredTrans: Observable<Filter[]>;
  filters: Filter[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  remove(fruit: string): void {
    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

}
