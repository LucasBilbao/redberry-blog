import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogCreatingService } from '../../../services/blog-creating/blog-creating.service';
import { CategoriesStateFacade } from '../../../store/facades/categories.facades';
import { LoadingService } from '../../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { Category } from '../../../interfaces/category.interface';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rb-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean> =
    this.loadingService.isSomethingLoading$;
  public categories$: Observable<Category[]> =
    this.categoriesFacade.categories$;

  public readonly faChevronLeft = faChevronLeft;

  constructor(
    private blogCreatingService: BlogCreatingService,
    private categoriesFacade: CategoriesStateFacade,
    private loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.blogCreatingService.setCreationMode(true);
    this.categoriesFacade.getAllCategories();
  }

  public ngOnDestroy(): void {
    this.blogCreatingService.setCreationMode(false);
  }
}
