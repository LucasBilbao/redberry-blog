import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BlogsService } from '../../services/blogs/blogs.service';
import { BlogsActions } from '../actions/blogs.actions';
import { of } from 'rxjs';

@Injectable()
export class BlogsEffects {
  constructor(private action$: Actions, private blogService: BlogsService) {}

  public getAllBlogs$ = createEffect(() =>
    this.action$.pipe(
      ofType(BlogsActions.getAllBlogs),
      mergeMap(() =>
        this.blogService
          .getAllBlogs()
          .pipe(
            map(({ data: blogs }) => BlogsActions.getAllBlogsSuccess({ blogs }))
          )
      ),
      catchError((error) => of(BlogsActions.getAllBlogsFail(error.message)))
    )
  );
}
