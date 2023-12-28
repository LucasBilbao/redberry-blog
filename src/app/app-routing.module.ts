import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './pages/components/blogs/blogs.component';
import { SingleBlogComponent } from './pages/components/single-blog/single-blog.component';
import { PagesWrapperComponent } from './pages/components/pages-wrapper/pages-wrapper.component';
import { CreateBlogComponent } from './pages/components/create-blog/create-blog.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: PagesWrapperComponent,
    children: [
      { path: '', component: BlogsComponent },
      { path: 'create', component: CreateBlogComponent },
      { path: ':id', component: SingleBlogComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'blogs' },
  { path: '**', redirectTo: 'blogs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
