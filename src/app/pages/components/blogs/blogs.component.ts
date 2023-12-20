import { Component } from '@angular/core';

@Component({
  selector: 'rb-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  public categories = [
    {
      id: 1,
      title: 'მარკეტი',
      text_color: '#D6961C',
      background_color: '#FFBB2F',
    },
    {
      id: 2,
      title: 'აპლიკაცია',
      text_color: '#15C972',
      background_color: '#1CD67D',
    },
    {
      id: 3,
      title: 'ხელოვნური ინტელექტი',
      text_color: '#B71FDD',
      background_color: '#B11CD6',
    },
    {
      id: 4,
      title: 'UI/UX',
      text_color: '#DC2828',
      background_color: '#FA5757',
    },
    {
      id: 5,
      title: 'კვლევა',
      text_color: '#60BE16',
      background_color: '#70CF25',
    },
    {
      id: 6,
      title: 'Figma',
      text_color: '#1AC7A8',
      background_color: '#08D2AE',
    },
    {
      id: 7,
      title: 'დამზადება',
      text_color: '#1AC7A8',
      background_color: '#08D2AE',
    },
    {
      id: 8,
      title: 'კოპიუტერული მეცნიერება',
      text_color: '#60BE16',
      background_color: '#70CF25',
    },
    {
      id: 9,
      title: 'სამუშაო გარემო',
      text_color: '#15C972',
      background_color: '#1CD67D',
    },
    {
      id: 10,
      title: 'მუსიკა',
      text_color: '#1AC7A8',
      background_color: '#08D2AE',
    },
    {
      id: 11,
      title: 'სპორტი',
      text_color: '#DC2828',
      background_color: '#FA5757',
    },
    {
      id: 12,
      title: 'სამშენებლო',
      text_color: '#B71FDD',
      background_color: '#B11CD6',
    },
    {
      id: 13,
      title: 'სამედიცინო',
      text_color: '#D6961C',
      background_color: '#FFBB2F',
    },
    {
      id: 14,
      title: 'სხვა',
      text_color: '#DC2828',
      background_color: '#FA5757',
    },
  ];
}
