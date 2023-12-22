import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBlogsResponse } from '../../interfaces/blog.interface';
import { BlogEndpoints } from '../../utils/blog-endpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  public getAllBlogs(): Observable<GetBlogsResponse> {
    return this.http.get<GetBlogsResponse>(BlogEndpoints.GET_ALL_BLOGS);
  }
}
