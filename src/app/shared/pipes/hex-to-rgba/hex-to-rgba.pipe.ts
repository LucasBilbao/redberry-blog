import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToRgba',
  pure: true,
})
export class HexToRgbaPipe implements PipeTransform {
  transform(hex: string, opacity: string = '1'): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return `rgba(255, 255, 255, ${opacity})`;
    }
    const rgb = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
  }
}
