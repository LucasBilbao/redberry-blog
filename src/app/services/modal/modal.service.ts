import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isModalOpen$$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(private rendererFactory: RendererFactory2) {}

  public get isModalOpen$(): Observable<boolean> {
    return this.isModalOpen$$.asObservable();
  }

  public set isModalOpen$(isModalOpen: boolean) {
    this.isModalOpen$$.next(isModalOpen);
  }

  public openModal(): void {
    this.isModalOpen$ = true;
    this.renderer.addClass(document.body, 'no_scroll');
  }

  public closeModal(): void {
    this.isModalOpen$ = false;
    this.renderer.removeClass(document.body, 'no_scroll');
  }
}
