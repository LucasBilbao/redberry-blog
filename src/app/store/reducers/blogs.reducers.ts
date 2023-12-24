import { createReducer, on } from '@ngrx/store';
import { Blog } from '../../interfaces/blog.interface';
import { BlogsActions } from '../actions/blogs.actions';

export const blogsFeatureKey = 'blogs';

export interface BlogsState {
  blogs: Blog[];
  singleBlog: Blog | null;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: BlogsState = {
  blogs: [],
  singleBlog: null,
  isLoading: false,
  errorMessage: '',
};

export const blogsReducer = createReducer(
  initialState,
  // Get All Blogs
  on(BlogsActions.getAllBlogs, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BlogsActions.getAllBlogsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    blogs: action.blogs,
  })),
  on(BlogsActions.getAllBlogsFail, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.error,
  })),

  // Get Single Blogs
  on(BlogsActions.getSingleBlog, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BlogsActions.getSingleBlogSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    singleBlog: action.blog,
  })),
  on(BlogsActions.getSingleBlogFail, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.error,
  }))
);
