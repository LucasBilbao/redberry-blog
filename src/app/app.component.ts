import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading/loading.service';
import { Observable } from 'rxjs';
import { BlogsStateFacade } from './store/facades/blogs.facade';
import { CategoriesStateFacade } from './store/facades/categories.facades';
import { ModalService } from './services/modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from './services/filter/filter.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean> =
    this.loadingService.isSomethingLoading$;
  public isModalOpen$: Observable<boolean> = this.modalService.isModalOpen$;

  constructor(
    private loadingService: LoadingService,
    private blogsFacade: BlogsStateFacade,
    private categoriesFacade: CategoriesStateFacade,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}

  public ngOnInit(): void {
    this.blogsFacade.getAllBlogs();
    this.categoriesFacade.getAllCategories();

    this.route.queryParams.subscribe((queries) => {
      if (!queries['categories']) {
        return;
      }

      const categories = queries['categories']
        .split(',')
        .map((category: string) => Number.parseInt(category));

      this.filterService.selectedCategories$ = new Set(categories);
    });
  }
}
