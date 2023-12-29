import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import {
  faChevronDown,
  faCircleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { BlogFormController } from '../form-controller/form-controller';
import { BlogCreatingService } from '../../../services/blog-creating/blog-creating.service';
import {
  BLOG_LOCAL_STORAGE_KEY,
  IMAGE_LOCAL_STORAGE_KEY,
} from '../../../utils/constants';

@Component({
  selector: 'rb-create-blog-form',
  templateUrl: './create-blog-form.component.html',
  styleUrl: './create-blog-form.component.scss',
})
export class CreateBlogFormComponent
  extends BlogFormController
  implements OnInit
{
  @Input() categories!: Category[] | null;
  @ViewChild('fileInput') fileInput!: ElementRef;
  public selectedCategoriesIds: Set<number> = new Set();
  public hasCategoryBeenChosen: boolean = false;
  public imageUrl: string = '';

  public readonly faCircleExclamation = faCircleExclamation;
  public readonly faChevronDown = faChevronDown;
  public readonly faXmark = faXmark;

  private isDropdownExpanded$$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(
    private changeDetRef: ChangeDetectorRef,
    blogCreatingService: BlogCreatingService,
    fb: FormBuilder
  ) {
    super(fb, blogCreatingService);
  }

  public ngOnInit(): void {
    this.imageUrl = localStorage.getItem(IMAGE_LOCAL_STORAGE_KEY) ?? '';

    const blogStr = localStorage.getItem(BLOG_LOCAL_STORAGE_KEY);

    if (!blogStr) {
      return;
    }

    const blog = JSON.parse(blogStr);

    blog.categories.forEach(this.selectCategory.bind(this));

    this.setValues(blog, this.imageUrl);
  }

  public onSubmit(e: SubmitEvent): void {
    e.preventDefault();
    if (this.blogForm.invalid) {
      return;
    }

    this.postBlog();
  }

  public get isDropdownExpanded$(): Observable<boolean> {
    return this.isDropdownExpanded$$.asObservable();
  }

  public toggleDropdown(): void {
    if (this.isDropdownExpanded$$.value) {
      this.isDropdownExpanded$$.next(false);
      return;
    }

    this.isDropdownExpanded$$.next(true);
  }

  public selectCategory(categoryId: number): void {
    if (!this.categories) {
      return;
    }

    if (!this.hasCategoryBeenChosen) {
      this.hasCategoryBeenChosen = true;
    }

    if (this.selectedCategoriesIds.has(categoryId)) {
      this.selectedCategoriesIds.delete(categoryId);
      this.removeByCategoryId(categoryId);
    } else {
      this.selectedCategoriesIds.add(categoryId);
      this.addCategoryId(categoryId);
    }

    this.changeDetRef.detectChanges();
    this.autoSaveBlog();
  }

  public onFileChange(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      this.imageUrl = `${e.target?.result}`;
      this.autoSaveBlog();
    };

    reader.readAsDataURL(file);

    this.blogForm.patchValue({ image: file });
  }

  public onRemoveFile(e: Event): void {
    e.stopPropagation();

    this.fileInput.nativeElement.value = '';
    this.imageUrl = '';

    this.blogForm.patchValue({ image: null });
    this.autoSaveBlog();
  }

  public autoSaveBlog(): void {
    this.saveBlogForm(this.imageUrl);
  }
}
