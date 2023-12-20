import { NgModule } from '@angular/core';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';

const components = [BlogsComponent];

@NgModule({
  declarations: [components],
  imports: [SharedModule],
  exports: [components],
})
export class PagesModule {}
