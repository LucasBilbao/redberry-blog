import { createReducer, on } from '@ngrx/store';
import { Blog } from '../../interfaces/blog.interface';
import { BlogsActions } from '../actions/blogs.actions';

export const blogsFeatureKey = 'blogs';

export interface BlogsState {
  blogs: Blog[];
  singleBlog: Blog | null;
  isSingleBlogLoading: boolean;
  isAllBlogsLoading: boolean;
  hasFinishedPosting: boolean;
  hasStartedPosting: boolean;
  errorMessage: string;
}

const initialState: BlogsState = {
  blogs: [],
  singleBlog: null,
  isSingleBlogLoading: false,
  isAllBlogsLoading: false,
  hasFinishedPosting: false,
  hasStartedPosting: false,
  errorMessage: '',
};

export const blogsReducer = createReducer(
  initialState,
  // Get All Blogs
  on(BlogsActions.getAllBlogs, (state) => ({
    ...state,
    isAllBlogsLoading: true,
  })),
  on(BlogsActions.getAllBlogsSuccess, (state, action) => ({
    ...state,
    isAllBlogsLoading: false,
    blogs: action.blogs,
  })),
  on(BlogsActions.getAllBlogsFail, (state, action) => ({
    ...state,
    isAllBlogsLoading: false,
    errorMessage: action.error,
  })),

  // Get Single Blog
  on(BlogsActions.getSingleBlog, (state) => ({
    ...state,
    isSingleBlogLoading: true,
  })),
  on(BlogsActions.getSingleBlogSuccess, (state, action) => ({
    ...state,
    isSingleBlogLoading: false,
    singleBlog: action.blog,
  })),
  on(BlogsActions.getSingleBlogFail, (state, action) => ({
    ...state,
    isSingleBlogLoading: false,
    errorMessage: action.error,
  })),

  // Post Blog
  on(BlogsActions.postBlog, (state) => ({
    ...state,
    isSingleBlogLoading: true,
    hasFinishedPosting: false,
    hasStartedPosting: true,
  })),
  on(BlogsActions.postBlogSuccess, (state) => ({
    ...state,
    isSingleBlogLoading: false,
    hasFinishedPosting: true,
  })),
  on(BlogsActions.postBlogFail, (state, action) => ({
    ...state,
    isSingleBlogLoading: false,
    hasFinishedPosting: true,
    errorMessage: action.error,
  }))
);
