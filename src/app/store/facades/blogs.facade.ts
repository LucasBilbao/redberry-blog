import { Injectable } from '@angular/core';
import { State } from '..';
import { BlogsActions } from '../actions/blogs.actions';
import { Store } from '@ngrx/store';
import { BlogsSelectors } from '../selectors/blogs.selectors';
import { combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsStateFacade {
  public isLoading$ = combineLatest(
    this.store.select(BlogsSelectors.isAllBlogsLoadingSelector),
    this.store.select(BlogsSelectors.isSingleBlogLoadingSelector)
  ).pipe(map((allLoadings) => allLoadings.some((isLoading) => isLoading)));
  public blogs$ = this.store.select(BlogsSelectors.blogsSelector);
  public blog$ = this.store.select(BlogsSelectors.singleBlogSelector);
  public errorMessage$ = this.store.select(BlogsSelectors.errorMessageSelector);
  public hasStartedPosting$ = this.store.select(
    BlogsSelectors.hasStartedPosting
  );
  public hasFinishedPosting$ = this.store.select(
    BlogsSelectors.hasFinishedPosting
  );

  constructor(private store: Store<State>) {}

  public getAllBlogs() {
    this.store.dispatch(BlogsActions.getAllBlogs());
  }

  public getSingleBlog(id: string | number) {
    this.store.dispatch(BlogsActions.getSingleBlog({ id }));
  }

  public postBlog(blog: FormData) {
    this.store.dispatch(BlogsActions.postBlog({ blog }));
  }
}
