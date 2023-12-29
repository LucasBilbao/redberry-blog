import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { LoginService } from '../../../services/login/login.service';
import { Observable } from 'rxjs';
import { BlogCreatingService } from '../../../services/blog-creating/blog-creating.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isAuthorized$: Observable<boolean> = this.loginService.isAuthorized$;
  public isInCreationMode$: Observable<boolean> =
    this.blogCreatingService.isInCreationMode$;

  constructor(
    private modalService: ModalService,
    private loginService: LoginService,
    private blogCreatingService: BlogCreatingService
  ) {}

  public openModal(): void {
    this.modalService.openModal();
  }
}
