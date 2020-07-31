import { Component, OnInit, Input } from '@angular/core';
import { ISelectData } from '../formInterface';
import { FormValidationService } from '../services/form-validation.service';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.sass'],
})
export class FormSelectComponent implements OnInit {
  constructor(public formValidationService: FormValidationService) {}

  @Input()
  data!: ISelectData;

  ngOnInit(): void {}
}
