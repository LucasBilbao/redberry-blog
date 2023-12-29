import { Component, OnInit } from '@angular/core';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../services/login/login.service';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Subscribable } from '../subscribable/subscribable';
import { suffixValidator } from '../../validators/suffixValidator.validator';
import { REDBERRY_EMAIL_SUFFIX } from '../../../utils/constants';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'rb-login-modal-content',
  templateUrl: './login-modal-content.component.html',
  styleUrl: './login-modal-content.component.scss',
})
export class LoginModalContentComponent extends Subscribable implements OnInit {
  public readonly faCircleExclamation = faCircleExclamation;
  public isError$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public email: FormControl<string | null> = new FormControl('', [
    Validators.required,
    suffixValidator(REDBERRY_EMAIL_SUFFIX),
  ]);

  constructor(
    private loginService: LoginService,
    private modalService: ModalService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.modalService.isAuthorizing$ = true;
  }

  public onLogin(e: SubmitEvent): void {
    e.preventDefault();

    if (!this.email.valid || !this.email.value) {
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
