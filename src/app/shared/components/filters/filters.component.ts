import { Component, Input } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../../../services/filter/filter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rb-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() public categories!: Category[] | null;
  @Input() public isSelectable: boolean = true;

  public selectedCategories: Observable<Set<number>> =
    this.filterService.selectedCategories$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}

  public onSelectCategory(selectedCategoryId: number): void {
    let categories: string | null;

    this.filterService.updateSelectedCategories(selectedCategoryId);

    if (this.filterService.selectedCategoriesSize === 0) {
      categories = null;
      this.navigateWithQueries({ categories });
      return;
    }

    categories = JSON.stringify([
      ...this.filterService.selectedCategoriesAsArray,
    ]).replace(/[\[\]]+/g, '');

    this.navigateWithQueries({ categories });
  }

  private navigateWithQueries(queries: { [key: string]: string | null }): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...queries },
    });
  }
}
