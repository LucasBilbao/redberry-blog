import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../../interfaces/blog.interface';
import { BlogsStateFacade } from '../../../store/facades/blogs.facade';

@Component({
  selector: 'rb-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.scss',
})
export class BlogCardsComponent implements OnInit {
  public blogs$: Observable<Blog[]> = this.blogsFacade.blogs$;

  constructor(private blogsFacade: BlogsStateFacade) {}

  ngOnInit(): void {
    this.blogsFacade.getAllBlogs();
  }
}
