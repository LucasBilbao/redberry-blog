import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function georgianSymbols(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    const isValueValid = /^[ა-ჰ\s\.\-]*$/g.test(value);

    return isValueValid
      ? null
      : {
          georgianSymbolsError: {
            message: 'The input must contain Georgian symbols',
          },
        };
  };
}
