import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormErrorHandingComponent } from './form-error-handing/form-error-handing.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormInputComponent,
    FormErrorHandingComponent,
    FormSelectComponent,
    FormCheckboxComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
