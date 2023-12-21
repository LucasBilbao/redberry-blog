import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'punctuation',
  pure: true,
})
export class PunctuationPipe implements PipeTransform {
  transform(value: string, size: number, punctuation: string = '...'): unknown {
    if (value.length <= size) {
      return value;
    }

    return `${value.slice(0, size)}${punctuation}`;
  }
}
