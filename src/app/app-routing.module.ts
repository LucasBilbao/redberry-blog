import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './pages/components/blogs/blogs.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'blogs' },
  { path: '**', redirectTo: 'blogs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
