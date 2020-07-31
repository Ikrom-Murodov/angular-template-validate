import { Component, OnInit } from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';
import { IFormData } from '../formInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  providers: [FormValidationService],
})
export class FormComponent implements OnInit {
  constructor(public formValidationService: FormValidationService) {}

  public title: string = 'Angular форм';

  public formData: IFormData = {
    registration: {
      inputs: [
        {
          controlName: 'email',
          groupName: 'registration',
          type: 'email',
          className: 'form-control',
          id: 'exampleEmailInput',
          labelText: 'Электронная почта',
        },
        {
          controlName: 'password',
          groupName: 'registration',
          type: 'password',
          className: 'form-control',
          id: 'examplePasswordlInput',
          labelText: 'Пароль',
        },
        {
          controlName: 'repeatPassword',
          groupName: 'registration',
          type: 'password',
          className: 'form-control',
          id: 'exampleRepeatPasswordInput',
          labelText: 'Повтор пароля',
        },
      ],
    },
  };

  public onSubmit(): void {
    console.log(this.formValidationService.getFormGroup.value);
    this.formValidationService.getFormGroup.reset();
  }

  ngOnInit(): void {}
}
