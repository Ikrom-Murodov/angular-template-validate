// tslint:disable: no-non-null-assertion

import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error-handing',
  templateUrl: './form-error-handing.component.html',
  styleUrls: ['./form-error-handing.component.sass'],
})
export class FormErrorHandingComponent implements OnInit {
  @Input()
  inputControl!: FormControl;

  get errors(): ValidationErrors {
    return this.inputControl.errors!;
  }

  get touched(): boolean {
    return this.inputControl.touched;
  }

  ngOnInit(): void {}
}
