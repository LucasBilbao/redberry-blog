import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function suffixValidator(suffix: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    if (value === '') {
      return null;
    }

    return value.endsWith(suffix)
      ? null
      : {
          suffixError: {
            message: `${value} should end with ${suffix}`,
          },
        };
  };
}
