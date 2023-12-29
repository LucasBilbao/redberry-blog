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

  isAllBlogsLoadingSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.isAllBlogsLoading
  ),

  isSingleBlogLoadingSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.isSingleBlogLoading
  ),

  hasStartedPosting: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.hasStartedPosting
  ),

  hasFinishedPosting: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.hasFinishedPosting
  ),

  errorMessageSelector: createSelector(
    blogsFeatureSelector,
    (state: BlogsState) => state.errorMessage
  ),
};
