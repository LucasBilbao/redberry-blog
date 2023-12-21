import { Category } from './category.interface';

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  categories: Category[];
  author: string;
  email?: string;
}
