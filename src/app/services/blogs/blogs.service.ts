import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog, GetBlogsResponse } from '../../interfaces/blog.interface';
import { BlogEndpoints } from '../../utils/blog-endpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  public getAllBlogs(): Observable<GetBlogsResponse> {
    return this.http.get<GetBlogsResponse>(BlogEndpoints.BLOGS);
  }

  public getSingleBlog(id: string | number): Observable<Blog> {
    return this.http.get<Blog>(`${BlogEndpoints.BLOGS}/${id}`);
  }

  public postBlog({ blog }: { blog: FormData }) {
    return this.http.post(BlogEndpoints.BLOGS, blog);
  }
}
