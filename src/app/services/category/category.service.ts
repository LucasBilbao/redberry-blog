import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryEndpoints } from '../../utils/category-endpoints.enum';
import { Observable } from 'rxjs';
import { GetCategoryResponse } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<GetCategoryResponse> {
    return this.http.get<GetCategoryResponse>(
      CategoryEndpoints.GET_ALL_CATEGORIES
    );
  }
}
