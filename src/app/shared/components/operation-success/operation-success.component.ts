import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'rb-operation-success',
  templateUrl: './operation-success.component.html',
  styleUrl: './operation-success.component.scss',
})
export class OperationSuccessComponent {
  constructor(private modalService: ModalService) {}

  public closeModal(): void {
    this.modalService.closeModal();
  }
}
