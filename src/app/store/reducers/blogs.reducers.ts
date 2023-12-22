import { createReducer, on } from '@ngrx/store';
import { Blog } from '../../interfaces/blog.interface';
import { BlogsActions } from '../actions/blogs.actions';

export const blogsFeatureKey = 'blogs';

export interface BlogsState {
  blogs: Blog[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: BlogsState = {
  blogs: [],
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
  }))
);
