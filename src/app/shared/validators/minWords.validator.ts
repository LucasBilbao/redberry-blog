import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minWords(minWords: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    const words: string[] = value.split(' ');

    const isValueValid =
      words.length >= minWords && words.every((word) => word.length !== 0);

    return isValueValid
      ? null
      : {
          minWordsError: {
            message: `The input field must contain ${minWords} word(s)`,
          },
        };
  };
}
