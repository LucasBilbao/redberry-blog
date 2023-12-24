import { Component } from '@angular/core';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../services/login/login.service';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Subscribable } from '../subscribable/subscribable';

@Component({
  selector: 'rb-login-modal-content',
  templateUrl: './login-modal-content.component.html',
  styleUrl: './login-modal-content.component.scss',
})
export class LoginModalContentComponent extends Subscribable {
  public readonly faCircleExclamation = faCircleExclamation;
  public isError$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public email: FormControl<string | null> = new FormControl('');

  constructor(private loginService: LoginService) {
    super();
  }

  public onLogin(e: SubmitEvent): void {
    e.preventDefault();

    if (!this.email.value) {
      return;
    }

    const subscription = this.loginService
      .login(this.email.value)
      .pipe(
        catchError(() => {
          this.isError$.next(true);
          return of();
        })
      )
      .subscribe();

    this.addSubscription(subscription);
  }
}
