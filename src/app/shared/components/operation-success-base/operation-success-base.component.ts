import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'rb-operation-success-base',
  templateUrl: './operation-success-base.component.html',
  styleUrl: './operation-success-base.component.scss',
})
export class OperationSuccessBaseComponent {
  public successModalMsg: string = 'წარმატებული ავტორიზაცია';
  public successModalBtnTxt: string = 'კარგი';

  constructor(private modalService: ModalService, private router: Router) {}

  public closeModal(): void {
    this.modalService.closeModal();
    this.router.navigate(['blogs'], {
      queryParamsHandling: 'merge',
    });
  }
}
