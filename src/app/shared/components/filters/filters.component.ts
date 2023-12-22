import { Component, Input } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';

@Component({
  selector: 'rb-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() public categories!: Category[] | null;
  @Input() public isSelectable: boolean = true;
}
