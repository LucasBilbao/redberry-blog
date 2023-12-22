import { Component } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { CategoriesStateFacade } from '../../../store/facades/categories.facades';
import { Observable } from 'rxjs';

@Component({
  selector: 'rb-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  public categories$: Observable<Category[]> =
    this.categoriesFacade.categories$;

  constructor(private categoriesFacade: CategoriesStateFacade) {}
}
