import { NgModule } from '@angular/core';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { PagesWrapperComponent } from './components/pages-wrapper/pages-wrapper.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';

const components = [
  BlogsComponent,
  SingleBlogComponent,
  PagesWrapperComponent,
  CreateBlogComponent,
];

@NgModule({
  declarations: [components],
  imports: [SharedModule],
  exports: [components],
})
export class PagesModule {}
