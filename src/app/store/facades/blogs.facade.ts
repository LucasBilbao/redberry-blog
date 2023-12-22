import { Injectable } from '@angular/core';
import { State } from '..';
import { BlogsActions } from '../actions/blogs.actions';
import { Store } from '@ngrx/store';
import { BlogsSelectors } from '../selectors/blogs.selectors';

@Injectable({
  providedIn: 'root',
})
export class BlogsStateFacade {
  public isLoading$ = this.store.select(BlogsSelectors.isLoadingSelector);
  public blogs$ = this.store.select(BlogsSelectors.blogsSelector);
  public errorMessage$ = this.store.select(BlogsSelectors.errorMessageSelector);

  constructor(private store: Store<State>) {}

  public getAllBlogs() {
    this.store.dispatch(BlogsActions.getAllBlogs());
  }
}
