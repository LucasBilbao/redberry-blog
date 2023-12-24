import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../../interfaces/category.interface';

@Component({
  selector: 'rb-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() public category!: Category;
  @Input() public isSelectable: boolean = true;
  @Input() public isSelected: boolean = false;
  @Output() public selectCategory: EventEmitter<number> = new EventEmitter();

  public isHovered = false;

  public onSelectCategory(): void {
    if (!this.isSelectable) {
      return;
    }

    this.selectCategory.emit(this.category.id);
  }
}
