import { createAction, props } from '@ngrx/store';
import { BlogsConstants } from '../constants/blogs.enum';
import { Blog } from '../../interfaces/blog.interface';

export const BlogsActions = {
  // Get All Blogs
  getAllBlogs: createAction(BlogsConstants.GET_ALL_BLOGS),

  getAllBlogsSuccess: createAction(
    BlogsConstants.GET_ALL_BLOGS_SUCCESS,
    props<{ blogs: Blog[] }>()
  ),

  getAllBlogsFail: createAction(
    BlogsConstants.GET_ALL_BLOGS_FAIL,
    props<{ error: string }>()
  ),

  // Get Single Blog
  getSingleBlog: createAction(
    BlogsConstants.GET_SINGLE_BLOG,
    props<{ id: string | number }>()
  ),

  getSingleBlogSuccess: createAction(
    BlogsConstants.GET_SINGLE_BLOG_SUCCESS,
    props<{ blog: Blog }>()
  ),

  getSingleBlogFail: createAction(
    BlogsConstants.GET_SINGLE_BLOG_FAIL,
    props<{ error: string }>()
  ),

  // Post Blog
  postBlog: createAction(BlogsConstants.POST_BLOG, props<{ blog: FormData }>()),

  postBlogSuccess: createAction(BlogsConstants.POST_BLOG_SUCCESS),

  postBlogFail: createAction(
    BlogsConstants.POST_BLOG_FAIL,
    props<{ error: string }>()
  ),
};
