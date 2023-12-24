import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogsState, blogsFeatureKey } from '../reducers/blogs.reducers';

export const blogsFeatureSelector =
  createFeatureSelector<BlogsState>(blogsFeatureKey);

export const BlogsSelectors = {
  blogsSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.blogs
  ),

  singleBlogSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.singleBlog
  ),

  isLoadingSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.isLoading
  ),

  errorMessageSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.errorMessage
  ),
};
