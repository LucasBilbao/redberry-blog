import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { BlogCardComponent } from './components/blog-cards/blog-card/blog-card.component';
import { FilterComponent } from './components/filters/filter/filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  HeaderComponent,
  TitleComponent,
  FiltersComponent,
  BlogCardsComponent,
  BlogCardComponent,
  FilterComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, FontAwesomeModule],
  exports: [components, CommonModule, FontAwesomeModule],
})
export class SharedModule {}
