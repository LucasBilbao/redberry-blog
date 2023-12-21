import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_URL, BEARER_ACCESS_TOKEN } from '../utils/constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
      url: `${BACKEND_URL}${req.url}`,
      headers: req.headers.set('Authorization', `${BEARER_ACCESS_TOKEN}`),
    });

    return next.handle(reqClone);
  }
}
