import { Injectable } from '@angular/core';
import { CategoriesStateFacade } from '../../store/facades/categories.facades';
import { BlogsStateFacade } from '../../store/facades/blogs.facade';
import { Observable, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isSomethingLoading$: Observable<boolean> = combineLatest([
    this.categoriesFacade.isLoading$,
    this.blogsFacade.isLoading$,
  ]).pipe(
    map((isEveryLoading) => isEveryLoading.some((isLoading) => isLoading))
  );

  constructor(
    private categoriesFacade: CategoriesStateFacade,
    private blogsFacade: BlogsStateFacade
  ) {}
}
