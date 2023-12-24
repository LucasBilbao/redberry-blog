import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginEndpoints } from '../../utils/login-endpoints.enum';
import { EMAIL_LOCAL_STORAGE_KEY } from '../../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuthorized$$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private email$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    const storageEmail = localStorage.getItem(EMAIL_LOCAL_STORAGE_KEY);
    if (storageEmail && storageEmail !== '') {
      this.assignValues(storageEmail, true);
    }
  }

  public get isAuthorized$(): Observable<boolean> {
    return this.isAuthorized$$.asObservable();
  }

  public set isAuthorized$(isAuthorized: boolean) {
    this.isAuthorized$$.next(isAuthorized);
  }

  public get email$(): Observable<string> {
    return this.email$$.asObservable();
  }

  public set email$(email: string) {
    this.email$$.next(email);
  }

  public login(email: string): Observable<any> {
    return this.http.post(LoginEndpoints.LOGIN, { email }).pipe(
      tap(() => {
        this.assignValues(email, true);
      })
    );
  }

  public logout(): void {
    this.assignValues();
  }

  public assignValues(email: string = '', isAuthorized: boolean = false): void {
    this.email$ = email;
    this.isAuthorized$ = isAuthorized;
    localStorage.setItem(EMAIL_LOCAL_STORAGE_KEY, email);
  }
}
