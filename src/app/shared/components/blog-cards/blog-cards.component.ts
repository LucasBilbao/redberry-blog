import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../../interfaces/blog.interface';
import { BlogsStateFacade } from '../../../store/facades/blogs.facade';
import { FilterService } from '../../../services/filter/filter.service';

@Component({
  selector: 'rb-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.scss',
})
export class BlogCardsComponent {
  public blogs$: Observable<Blog[]> = this.filterService.filteredBlogs$;

  constructor(private filterService: FilterService) {}
}
