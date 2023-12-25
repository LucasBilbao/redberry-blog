import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function suffixValidator(suffix: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    return value.endsWith(suffix)
      ? null
      : {
          redberrySuffixError: {
            message: `${value} should end with ${suffix}`,
          },
        };
  };
}
