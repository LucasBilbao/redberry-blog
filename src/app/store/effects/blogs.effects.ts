import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BlogsService } from '../../services/blogs/blogs.service';
import { BlogsActions } from '../actions/blogs.actions';
import { of } from 'rxjs';

@Injectable()
export class BlogsEffects {
  constructor(private action$: Actions, private blogsService: BlogsService) {}

  public getAllBlogs$ = createEffect(() =>
    this.action$.pipe(
      ofType(BlogsActions.getAllBlogs),
      mergeMap(() =>
        this.blogsService
          .getAllBlogs()
          .pipe(
            map(({ data: blogs }) => BlogsActions.getAllBlogsSuccess({ blogs }))
          )
      ),
      catchError((error) => of(BlogsActions.getAllBlogsFail(error.message)))
    )
  );

  public getSingleBlog$ = createEffect(() =>
    this.action$.pipe(
      ofType(BlogsActions.getSingleBlog),
      mergeMap(({ id }) =>
        this.blogsService
          .getSingleBlog(id)
          .pipe(map((blog) => BlogsActions.getSingleBlogSuccess({ blog })))
      ),
      catchError((error) => of(BlogsActions.getSingleBlogFail(error.message)))
    )
  );

  public postBlog$ = createEffect(() =>
    this.action$.pipe(
      ofType(BlogsActions.postBlog),
      mergeMap((blog) =>
        this.blogsService
          .postBlog(blog)
          .pipe(map(() => BlogsActions.postBlogSuccess()))
      ),
      catchError((error) => of(BlogsActions.postBlogFail(error.message)))
    )
  );
}
