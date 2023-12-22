import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading/loading.service';
import { Observable } from 'rxjs';
import { BlogsStateFacade } from './store/facades/blogs.facade';
import { CategoriesStateFacade } from './store/facades/categories.facades';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean> =
    this.loadingService.isSomethingLoading$;

  constructor(
    private loadingService: LoadingService,
    private blogsFacade: BlogsStateFacade,
    private categoriesFacade: CategoriesStateFacade
  ) {}

  public ngOnInit(): void {
    this.blogsFacade.getAllBlogs();
    this.categoriesFacade.getAllCategories();
  }
}
