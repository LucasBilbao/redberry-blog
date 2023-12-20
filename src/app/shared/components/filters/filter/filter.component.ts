import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() category: any;
}
