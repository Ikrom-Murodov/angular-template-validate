import { Component, OnInit, Input } from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';

import { ICheckboxData } from '../formInterface';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.sass'],
})
export class FormCheckboxComponent implements OnInit {
  constructor(public formValidationService: FormValidationService) {}

  @Input()
  public data!: ICheckboxData;

  public check: boolean = false;

  ngOnInit(): void {}
}
