import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogCreatingService {
  private isInCreationMode$$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  public setCreationMode(isInCreationMode: boolean): void {
    this.isInCreationMode$$.next(isInCreationMode);
  }

  public get isInCreationMode$(): Observable<boolean> {
    return this.isInCreationMode$$.asObservable();
  }
}
