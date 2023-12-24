import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { BlogCardComponent } from './components/blog-cards/blog-card/blog-card.component';
import { FilterComponent } from './components/filters/filter/filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HexToRgbaPipe } from './pipes/hex-to-rgba/hex-to-rgba.pipe';
import { PunctuationPipe } from './pipes/punctuation/punctuation.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginModalContentComponent } from './components/login-modal-content/login-modal-content.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { OperationSuccessComponent } from './components/operation-success/operation-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  TitleComponent,
  FiltersComponent,
  BlogCardsComponent,
  BlogCardComponent,
  FilterComponent,
  LoaderComponent,
  ModalComponent,
  LoginModalContentComponent,
  InputErrorComponent,
  OperationSuccessComponent,
];

const pipes = [HexToRgbaPipe, PunctuationPipe];

@NgModule({
  declarations: [components, pipes],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [components, pipes, CommonModule, FontAwesomeModule],
})
export class SharedModule {}
