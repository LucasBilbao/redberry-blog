import { Injectable } from '@angular/core';
import { BlogsStateFacade } from '../../store/facades/blogs.facade';
import { Blog } from '../../interfaces/blog.interface';
import { Observable, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingleBlogService {
  private _blog$: Observable<Blog | null> = this.blogsFacade.blog$;
  private _similarBlogs$: Observable<Blog[]> = combineLatest(
    this.blog$,
    this.blogsFacade.blogs$
  ).pipe(
    map(([singleBlog, blogs]) =>
      blogs.filter((blog) =>
        blog.categories.some(
          ({ id: categoryId }) =>
            singleBlog?.categories.some(
              ({ id: singleCategoryId }) => singleCategoryId === categoryId
            ) && singleBlog.id !== blog.id
        )
      )
    )
  );

  constructor(private blogsFacade: BlogsStateFacade) {}

  public get blog$(): Observable<Blog | null> {
    return this._blog$;
  }

  public get similarBlogs$(): Observable<Blog[]> {
    return this._similarBlogs$;
  }
}
