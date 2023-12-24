import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { LoginService } from '../../../services/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isAuthorized$: Observable<boolean> = this.loginService.isAuthorized$;

  constructor(
    private modalService: ModalService,
    private loginService: LoginService
  ) {}

  public openModal(): void {
    this.modalService.openModal();
  }
}
