import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../services/login/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'rb-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public readonly faXmark = faXmark;
  public isAuthorized$: Observable<boolean> = this.loginService.isAuthorized$;
  public isAuthorizing$: Observable<boolean> = this.modalService.isAuthorizing$;

  constructor(
    private modalService: ModalService,
    private loginService: LoginService,
    private router: Router
  ) {}

  public closeModal(): void {
    this.modalService.closeModal();
    if (this.loginService.isAuthorized) {
      this.router.navigate(['blogs'], {
        queryParamsHandling: 'merge',
      });
    }
  }
}
