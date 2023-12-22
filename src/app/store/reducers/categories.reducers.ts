import { createReducer, on } from '@ngrx/store';
import { Category } from '../../interfaces/category.interface';
import { CategoriesActions } from '../actions/categories.actions';

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  errorMessage: '',
};

export const categoriesReducer = createReducer(
  initialState,
  // Get All Categories
  on(CategoriesActions.getAllCategories, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CategoriesActions.getAllCategoriesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    categories: action.categories,
  })),
  on(CategoriesActions.getAllCategoriesFail, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.error,
  }))
);
