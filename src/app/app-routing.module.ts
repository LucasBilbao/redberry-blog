import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './pages/components/blogs/blogs.component';
import { SingleBlogComponent } from './pages/components/single-blog/single-blog.component';
import { PagesWithHeaderComponent } from './pages/components/pages-with-header/pages-with-header.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: PagesWithHeaderComponent,
    children: [
      { path: '', component: BlogsComponent },
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
