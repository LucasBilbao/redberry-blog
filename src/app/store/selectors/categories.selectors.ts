import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CategoriesState,
  categoriesFeatureKey,
} from '../reducers/categories.reducers';

export const categoriesFeatureSelector =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const CategoriesSelectors = {
  categoriesSelector: createSelector(
    categoriesFeatureSelector,
    (state: CategoriesState) => state.categories
  ),

  isLoadingSelector: createSelector(
    categoriesFeatureSelector,
    (state: CategoriesState) => state.isLoading
  ),

  errorMessageSelector: createSelector(
    categoriesFeatureSelector,
    (state: CategoriesState) => state.errorMessage
  ),
};
