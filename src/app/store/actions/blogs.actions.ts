import { createAction, props } from '@ngrx/store';
import { BlogsConstants } from '../constants/blogs.enum';
import { Blog } from '../../interfaces/blog.interface';

export const BlogsActions = {
  getAllBlogs: createAction(BlogsConstants.GET_ALL_BLOGS),

  getAllBlogsSuccess: createAction(
    BlogsConstants.GET_ALL_BLOGS_SUCCESS,
    props<{ blogs: Blog[] }>()
  ),

  getAllBlogsFail: createAction(
    BlogsConstants.GET_ALL_BLOGS_FAIL,
    props<{ error: string }>()
  ),
};
