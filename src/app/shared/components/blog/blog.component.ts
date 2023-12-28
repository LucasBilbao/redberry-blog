import { Component, Input } from '@angular/core';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
  selector: 'rb-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  @Input() public blog!: Blog | null;
}
