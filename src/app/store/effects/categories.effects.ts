import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../../services/category/category.service';
import { CategoriesActions } from '../actions/categories.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}

  public getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.getAllCategories),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map(({ data: categories }) =>
            CategoriesActions.getAllCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(CategoriesActions.getAllCategoriesFail(error.message))
          )
        )
      )
    )
  );
}
