import { ActionReducerMap } from '@ngrx/store';
import {
  CategoriesState,
  categoriesReducer,
} from './reducers/categories.reducers';
import { CategoriesEffects } from './effects/categories.effects';
import { BlogsState, blogsReducer } from './reducers/blogs.reducers';
import { BlogsEffects } from './effects/blogs.effects';

export interface State {
  categories: CategoriesState;
  blogs: BlogsState;
}

export const reducers: ActionReducerMap<State> = {
  categories: categoriesReducer,
  blogs: blogsReducer,
};

export const effects = [CategoriesEffects, BlogsEffects];
