import { Injectable } from '@angular/core';
import { CategoriesSelectors } from '../selectors/categories.selectors';
import { CategoriesActions } from '../actions/categories.actions';
import { State } from '..';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CategoriesStateFacade {
  public isLoading$ = this.store.select(CategoriesSelectors.isLoadingSelector);
  public categories$ = this.store.select(
    CategoriesSelectors.categoriesSelector
  );
  public errorMessage$ = this.store.select(
    CategoriesSelectors.errorMessageSelector
  );

  constructor(private store: Store<State>) {}

  public getAllCategories() {
    this.store.dispatch(CategoriesActions.getAllCategories());
  }
}
