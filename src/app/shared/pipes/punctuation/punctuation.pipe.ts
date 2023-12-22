import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'punctuation',
  pure: true,
})
export class PunctuationPipe implements PipeTransform {
  public transform(
    value: string,
    size: number,
    punctuation: string = '...'
  ): string {
    if (value.length <= size) {
      return value;
    }

    return `${value.slice(0, size)}${punctuation}`;
  }
}
