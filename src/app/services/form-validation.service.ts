// tslint:disable: no-non-null-assertion

import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import customValidators from '../helper/validators';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  private formValidationData: FormGroup = new FormGroup({
    registration: new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),

        password: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),

        repeatPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
      },
      [customValidators.passwordMustMatch('password', 'repeatPassword')]
    ),
  });

  public getFormControl(gName: string, cName: string): FormControl {
    if (gName) {
      return this.formValidationData.get(gName)!.get(cName)! as FormControl;
    } else {
      return this.formValidationData.get(cName)! as FormControl;
    }
  }

  public get getFormGroup(): FormGroup {
    return this.formValidationData;
  }
}
