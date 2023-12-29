import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscribable } from '../../../shared/components/subscribable/subscribable';
import { BlogsStateFacade } from '../../../store/facades/blogs.facade';
import { Observable } from 'rxjs';
import { Blog } from '../../../interfaces/blog.interface';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SingleBlogService } from '../../../services/single-blog/single-blog.service';
import { LoadingService } from '../../../services/loading/loading.service';

@Component({
  selector: 'rb-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss',
})
export class SingleBlogComponent extends Subscribable implements OnInit {
  public isLoading$: Observable<boolean> =
    this.loadingService.isSomethingLoading$;
  public blog$: Observable<Blog | null> = this.singleBlogService.blog$;
  public similarBlogs$: Observable<Blog[]> =
    this.singleBlogService.similarBlogs$;
  public readonly faChevronLeft = faChevronLeft;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private blogsFacade: BlogsStateFacade,
    private singleBlogService: SingleBlogService
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
        this.blogsFacade.getAllBlogs();
      })
    );
  }
}
