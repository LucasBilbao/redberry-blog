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

const components = [
  HeaderComponent,
  TitleComponent,
  FiltersComponent,
  BlogCardsComponent,
  BlogCardComponent,
  FilterComponent,
];

const pipes = [HexToRgbaPipe, PunctuationPipe];

@NgModule({
  declarations: [components, pipes],
  imports: [CommonModule, FontAwesomeModule],
  exports: [components, pipes, CommonModule, FontAwesomeModule],
})
export class SharedModule {}
