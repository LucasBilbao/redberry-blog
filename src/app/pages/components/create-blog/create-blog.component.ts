import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogCreatingService } from '../../../services/blog-creating/blog-creating.service';

@Component({
  selector: 'rb-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent implements OnInit, OnDestroy {
  constructor(private blogCreatingService: BlogCreatingService) {}

  public ngOnInit(): void {
    this.blogCreatingService.setCreationMode(true);
  }

  public ngOnDestroy(): void {
    this.blogCreatingService.setCreationMode(false);
  }
}
