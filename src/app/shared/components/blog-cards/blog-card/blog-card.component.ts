import { Component } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rb-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  public faExternalLink = faExternalLink;
}
