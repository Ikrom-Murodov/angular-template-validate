import { Component, OnInit, Input } from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';

import { IInputData } from '../formInterface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.sass'],
})
export class FormInputComponent implements OnInit {
  constructor(public formValidationService: FormValidationService) {}

  @Input()
  public data!: IInputData;

  ngOnInit(): void {}
}
