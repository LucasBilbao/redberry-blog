import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscribable } from '../../../shared/components/subscribable/subscribable';
import { BlogsStateFacade } from '../../../store/facades/blogs.facade';
import { Observable } from 'rxjs';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
  selector: 'rb-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss',
})
export class SingleBlogComponent extends Subscribable implements OnInit {
  public blog$: Observable<Blog | null> = this.blogsFacade.blog$;

  constructor(
    private route: ActivatedRoute,
    private blogsFacade: BlogsStateFacade
  ) {
    super();
  }

  public ngOnInit(): void {
    this.addSubscription(
      this.route.paramMap.subscribe((params) => {
        if (!params.has('id')) {
          return;
        }

        const id = params.get('id');
        this.blogsFacade.getSingleBlog(`${id}`);
      })
    );
  }
}
