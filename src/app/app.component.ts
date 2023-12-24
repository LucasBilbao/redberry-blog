import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './services/modal/modal.service';
import { Subscribable } from './shared/components/subscribable/subscribable';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends Subscribable implements OnInit {
  public isModalOpen$: Observable<boolean> = this.modalService.isModalOpen$;

  constructor(private modalService: ModalService) {
    super();
  }

  public ngOnInit(): void {}
}
