export interface BlogForm {
  image: File;
  author: string;
  title: string;
  description: string;
  publish_date: string;
  categories: number[];
  email?: string;
}
