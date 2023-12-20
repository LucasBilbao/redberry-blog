import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() public categories: any;
}
