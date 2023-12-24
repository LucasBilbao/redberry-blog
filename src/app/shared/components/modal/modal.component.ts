import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../services/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rb-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public readonly faXmark = faXmark;
  public isAuthorized$: Observable<boolean> = this.loginService.isAuthorized$;

  constructor(
    private modalService: ModalService,
    private loginService: LoginService
  ) {}

  public closeModal(): void {
    this.modalService.closeModal();
  }
}
