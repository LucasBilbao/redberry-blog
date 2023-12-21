import { ActionReducerMap } from '@ngrx/store';
import {
  CategoriesState,
  categoriesReducer,
} from './reducers/categories.reducers';
import { CategoriesEffects } from './effects/categories.effects';

export interface State {
  categories: CategoriesState;
}

export const reducers: ActionReducerMap<State> = {
  categories: categoriesReducer,
};

export const effects = [CategoriesEffects];
