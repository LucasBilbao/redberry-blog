import { Category } from './category.interface';

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: string | Date;
  categories: Category[];
  author: string;
  email?: string;
}

export interface GetBlogsResponse {
  data: Blog[];
}
