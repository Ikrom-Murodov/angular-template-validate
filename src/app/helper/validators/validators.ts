import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMustMatch(cName: string, matchingCName: string): any {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const control = formGroup.controls[cName];
    const matchingControl = formGroup.controls[matchingCName];

    if (matchingControl.errors) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordMustMatch: true });
    }

    return null;
  };
}
