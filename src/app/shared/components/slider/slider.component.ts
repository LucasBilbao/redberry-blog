import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Blog } from '../../../interfaces/blog.interface';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { BlogCardsComponent } from '../blog-cards/blog-cards.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'rb-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit, AfterViewChecked {
  @Input() blogs!: Blog[] | null;
  @ViewChild('blogCards') public blogCards!: BlogCardsComponent;

  public activeSlideIndex: number = 0;
  public readonly faChevronLeft = faChevronLeft;
  public readonly faChevronRight = faChevronRight;

  private isAbleToSlideLeft$$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  private isAbleToSlideRight$$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(private changeDetRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }

  public ngAfterViewChecked(): void {
    this.updateIsAbleToSlideLeft();
    this.updateIsAbleToSlideRight();
  }

  public slideInDirection(direction: 1 | -1): void {
    if (direction === -1) {
      this.slideLeft();
      this.updateIsAbleToSlideLeft();
      this.updateIsAbleToSlideRight();
      return;
    }

    this.slideRight();
    this.updateIsAbleToSlideLeft();
    this.updateIsAbleToSlideRight();
  }

  public get isAbleToSlideLeft$(): Observable<boolean> {
    return this.isAbleToSlideLeft$$.asObservable();
  }

  public get isAbleToSlideRight$(): Observable<boolean> {
    return this.isAbleToSlideRight$$.asObservable();
  }

  private set isAbleToSlideLeft$(value: boolean) {
    this.isAbleToSlideLeft$$.next(value);
  }

  private set isAbleToSlideRight$(value: boolean) {
    this.isAbleToSlideRight$$.next(value);
  }

  private updateIsAbleToSlideLeft(): void {
    this.isAbleToSlideLeft$ = this.activeSlideIndex !== 0;
    this.changeDetRef.detectChanges();
  }

  private updateIsAbleToSlideRight(): void {
    if (!this.blogCards?.blogListElement) {
      this.isAbleToSlideRight$ = false;
      this.changeDetRef.detectChanges();
      return;
    }
    const listedBlogsLength = this.blogCards.blogListElement?.toArray().length;
    if (!listedBlogsLength || listedBlogsLength === 0) {
      this.isAbleToSlideRight$ = false;
      this.changeDetRef.detectChanges();
      return;
    }

    this.isAbleToSlideRight$ =
      (this.activeSlideIndex + 1) * 3 <= listedBlogsLength - 1;
    this.changeDetRef.detectChanges();
  }

  private slideLeft(): void {
    if (!this.blogs || this.blogs.length === 0) {
      return;
    }

    if (this.activeSlideIndex - 1 <= 0) {
      this.activeSlideIndex = 0;
      this.slideToBlogByIndex(0);
      return;
    }
    this.activeSlideIndex -= 1;
    this.slideToBlogByIndex(this.activeSlideIndex * 3);
  }

  private slideRight(): void {
    const listedBlogsLength = this.blogCards.blogListElement?.toArray().length;
    if (!listedBlogsLength || listedBlogsLength === 0) {
      return;
    }

    this.activeSlideIndex += 1;
    if (this.activeSlideIndex * 3 >= listedBlogsLength - 1) {
      this.slideToBlogByIndex(listedBlogsLength - 1);
      return;
    }
    this.slideToBlogByIndex(this.activeSlideIndex * 3);
  }

  private slideToBlogByIndex(index: number): void {
    const scrollTarget = this.blogCards.blogListElement?.toArray()[index];

    scrollTarget?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }
}
