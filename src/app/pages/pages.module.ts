import { NgModule } from '@angular/core';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { PagesWithHeaderComponent } from './components/pages-with-header/pages-with-header.component';

const components = [
  BlogsComponent,
  SingleBlogComponent,
  PagesWithHeaderComponent,
];

@NgModule({
  declarations: [components],
  imports: [SharedModule],
  exports: [components],
})
export class PagesModule {}
