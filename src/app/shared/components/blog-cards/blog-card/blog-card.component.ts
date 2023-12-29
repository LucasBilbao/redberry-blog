import { Component, Input } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { Blog } from '../../../../interfaces/blog.interface';

@Component({
  selector: 'rb-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() public blog!: Blog | null;
  public readonly faExternalLink = faExternalLink;
}
