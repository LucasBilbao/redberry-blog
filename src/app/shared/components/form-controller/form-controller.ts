import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { minWords } from '../../validators/minWords.validator';
import { georgianSymbols } from '../../validators/georgianSymbols.validator';
import { suffixValidator } from '../../validators/suffixValidator.validator';
import { REDBERRY_EMAIL_SUFFIX } from '../../../utils/constants';
import { BlogCreatingService } from '../../../services/blog-creating/blog-creating.service';
import { BlogForm } from '../../../interfaces/blog-form.interface';
import { getFileFromBase64 } from '../../../utils/getFileFromBase64';

@Component({
  template: '',
})
export class BlogFormController {
  public blogForm = this.fb.group({
    image: new FormControl<File | null>(null, [Validators.required]),
    author: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(4),
          minWords(2),
          georgianSymbols(),
        ],
      },
    ],
    title: ['', { validators: [Validators.required, Validators.minLength(4)] }],
    description: [
      '',
      { validators: [Validators.required, Validators.minLength(4)] },
    ],
    publish_date: ['', { validators: [Validators.required] }],
    categories: this.fb.array<FormControl<number>>([], {
      validators: [Validators.required],
    }),
    email: ['', { validators: [suffixValidator(REDBERRY_EMAIL_SUFFIX)] }],
  });

  constructor(
    private fb: FormBuilder,
    private blogCreatingService: BlogCreatingService
  ) {}

  public get image(): FormControl<File | null> {
    return this.blogForm.get('image') as FormControl;
  }

  public get author(): FormControl<string> {
    return this.blogForm.get('author') as FormControl;
  }

  public get title(): FormControl<string> {
    return this.blogForm.get('title') as FormControl;
  }

  public get description(): FormControl<string> {
    return this.blogForm.get('description') as FormControl;
  }

  public get publish_date(): FormControl<string> {
    return this.blogForm.get('publish_date') as FormControl;
  }

  public get categoriesC(): FormArray<FormControl<number>> {
    return this.blogForm.get('categories') as FormArray<FormControl<number>>;
  }

  public get email(): FormControl<string> {
    return this.blogForm.get('email') as FormControl;
  }

  protected setValues(blog: BlogForm, imageUrl: string) {
    Object.entries(blog).forEach(([key, value]) => {
      if (key === 'image') {
        if (imageUrl === '') {
          return;
        }

        const file = getFileFromBase64(imageUrl) as File;
        this.blogForm.get(key)?.setValue(file);
        this.blogForm.get(key)?.markAsDirty();
        return;
      }

      if (key === 'categories') {
        return;
      }

      if (value === '') {
        return;
      }

      this.blogForm.get(key)?.setValue(value);
      this.blogForm.get(key)?.markAsDirty();
    });
  }

  public saveBlogForm(imgUrl: string): void {
    this.blogCreatingService.saveBlogInLocalStorage(
      imgUrl,
      this.blogForm.value as BlogForm
    );
  }

  public clearBlogForm(): void {
    this.blogCreatingService.clearBlogFromLocalStorage();
  }

  protected addCategoryId(categoryId: number): void {
    this.categoriesC.push(new FormControl(categoryId) as FormControl<number>);
  }

  protected removeByCategoryId(categoryId: number): void {
    const index = this.categoriesC.value.findIndex(
      (categoryCId) => categoryCId === categoryId
    );

    if (index === -1) {
      return;
    }

    this.categoriesC.removeAt(index);
  }

  protected postBlog() {
    const blog = this.blogForm.value;

    const categories = JSON.stringify(blog.categories as number[]);

    const formData = new FormData();
    Object.entries(blog).forEach(([key, value]) => {
      if (key === 'categories') {
        formData.append(key, categories);
        return;
      }

      if (!value || Array.isArray(value)) {
        return;
      }

      formData.append(key, value);
    });

    this.blogCreatingService.postBlog(formData);
    this.clearBlogForm();
  }
}
