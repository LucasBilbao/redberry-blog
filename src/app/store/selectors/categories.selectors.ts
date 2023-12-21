import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CategoriesState,
  categoriesFeatureKey,
} from '../reducers/categories.reducers';

export const categoriesFeatureSelector =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesSelector = createSelector(
  categoriesFeatureSelector,
  (state: CategoriesState) => state.categories
);

export const isLoadingSelector = createSelector(
  categoriesFeatureSelector,
  (state: CategoriesState) => state.isLoading
);

export const errorMessageSelector = createSelector(
  categoriesFeatureSelector,
  (state: CategoriesState) => state.errorMessage
);
