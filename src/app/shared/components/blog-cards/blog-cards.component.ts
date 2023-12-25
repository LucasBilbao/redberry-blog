import { Component, Input } from '@angular/core';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
  selector: 'rb-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.scss',
})
export class BlogCardsComponent {
  @Input() public blogs!: Blog[] | null;

  public isFromEarlierDate(date: string | Date): boolean {
    return new Date() > new Date(date);
  }
}
