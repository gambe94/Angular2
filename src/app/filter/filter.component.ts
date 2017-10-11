import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../models';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filter: Filter;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
