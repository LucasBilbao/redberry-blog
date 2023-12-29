import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { BlogForm } from '../../interfaces/blog-form.interface';
import {
  BLOG_LOCAL_STORAGE_KEY,
  IMAGE_LOCAL_STORAGE_KEY,
} from '../../utils/constants';
import { BlogsStateFacade } from '../../store/facades/blogs.facade';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root',
})
export class BlogCreatingService {
  private isInCreationMode$$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(
    private blogsFacade: BlogsStateFacade,
    private modalService: ModalService
  ) {}

  public setCreationMode(isInCreationMode: boolean): void {
    this.isInCreationMode$$.next(isInCreationMode);
  }

  public get isInCreationMode$(): Observable<boolean> {
    return this.isInCreationMode$$.asObservable();
  }

  public getBlogFromLocalStorage(): BlogForm | null {
    const blogFormString = localStorage.getItem(BLOG_LOCAL_STORAGE_KEY) ?? '';

    if (blogFormString.length === 0) {
      return null;
    }

    return JSON.parse(blogFormString);
  }

  public saveBlogInLocalStorage(imgUrl: string, blogForm: BlogForm): void {
    localStorage.setItem(BLOG_LOCAL_STORAGE_KEY, JSON.stringify(blogForm));
    localStorage.setItem(IMAGE_LOCAL_STORAGE_KEY, imgUrl);
  }

  public clearBlogFromLocalStorage(): void {
    localStorage.removeItem(BLOG_LOCAL_STORAGE_KEY);
    localStorage.removeItem(IMAGE_LOCAL_STORAGE_KEY);
  }

  public postBlog(blog: FormData) {
    this.blogsFacade.postBlog(blog);

    combineLatest([
      this.blogsFacade.hasStartedPosting$,
      this.blogsFacade.hasFinishedPosting$,
    ]).subscribe(([hasStartedPosting, hasFinishedPosting]) => {
      if (!hasStartedPosting || !hasFinishedPosting) {
        return;
      }

      this.modalService.isAuthorizing$ = false;
      this.modalService.isModalOpen$ = true;
    });
  }
}
