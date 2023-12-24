import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { BlogsStateFacade } from '../../store/facades/blogs.facade';
import { Blog } from '../../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public filteredBlogs$: Observable<Blog[]> = combineLatest(
    this.selectedCategories$,
    this.blogsFacade.blogs$
  ).pipe(
    map(([selectedCategories, blogs]) => {
      if (selectedCategories.size === 0) {
        return blogs;
      }

      return blogs.filter((blog) =>
        blog.categories.some(({ id }) => selectedCategories.has(id))
      );
    })
  );

  private selectedCategories$$: BehaviorSubject<Set<number>> =
    new BehaviorSubject(new Set());

  constructor(private blogsFacade: BlogsStateFacade) {}

  public selectCategory(categoryId: number): void {
    const selectedCategories = this.selectedCategories$$.value;

    selectedCategories.add(categoryId);

    this.selectedCategories$ = selectedCategories;
  }

  public unSelectCategory(categoryId: number): void {
    const selectedCategories: Set<number> = this.selectedCategories$$.value;

    selectedCategories.delete(categoryId);

    this.selectedCategories$ = selectedCategories;
  }

  public updateSelectedCategories(categoryId: number): void {
    if (this.selectedCategories$$.value.has(categoryId)) {
      this.unSelectCategory(categoryId);
      return;
    }

    this.selectCategory(categoryId);
  }

  public get selectedCategoriesSize(): number {
    return this.selectedCategories$$.value.size;
  }

  public get selectedCategoriesAsArray(): number[] {
    return [...this.selectedCategories$$.value];
  }

  public get selectedCategories$(): Observable<Set<number>> {
    return this.selectedCategories$$.asObservable();
  }

  public set selectedCategories$(selectedCategories: Set<number>) {
    this.selectedCategories$$.next(selectedCategories);
  }
}
