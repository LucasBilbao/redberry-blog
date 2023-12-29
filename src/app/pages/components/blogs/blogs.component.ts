import { Component, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { CategoriesStateFacade } from '../../../store/facades/categories.facades';
import { Observable } from 'rxjs';
import { LoadingService } from '../../../services/loading/loading.service';
import { BlogsStateFacade } from '../../../store/facades/blogs.facade';
import { ActivatedRoute } from '@angular/router';
import { Subscribable } from '../../../shared/components/subscribable/subscribable';
import { FilterService } from '../../../services/filter/filter.service';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
  selector: 'rb-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent extends Subscribable implements OnInit {
  public categories$: Observable<Category[]> =
    this.categoriesFacade.categories$;
  public blogs$: Observable<Blog[]> = this.filterService.filteredBlogs$;
  public isLoading$: Observable<boolean> =
    this.loadingService.isSomethingLoading$;

  constructor(
    private categoriesFacade: CategoriesStateFacade,
    private blogsFacade: BlogsStateFacade,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.blogsFacade.getAllBlogs();
    this.categoriesFacade.getAllCategories();

    this.addSubscription(
      this.route.queryParamMap.subscribe((queries) => {
        if (!queries.has('categories')) {
          return;
        }

        const categories = queries
          .get('categories')
          ?.split(',')
          .map((category: string) => Number.parseInt(category));

        this.filterService.selectedCategories$ = new Set(categories);
      })
    );
  }
}
