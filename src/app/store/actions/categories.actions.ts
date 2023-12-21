import { createAction, props } from '@ngrx/store';
import { CategoryConstants } from '../constants/categories.enum';
import { Category } from '../../interfaces/category.interface';

export const getAllCategories = createAction(
  CategoryConstants.GET_ALL_CATEGORIES
);

export const getAllCategoriesSuccess = createAction(
  CategoryConstants.GET_ALL_CATEGORIES_SUCCESS,
  props<{ categories: Category[] }>()
);

export const getAllCategoriesFail = createAction(
  CategoryConstants.GET_ALL_CATEGORIES_FAIL,
  props<{ error: string }>()
);
