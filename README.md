# Инструкция для использования.

1 В сервисе "form-validation.service.ts" создаете нужную вам [группу](https://angular.io/api/forms/FormGroup) и внутри этой группы вы создаете [контрелеры](https://angular.io/api/forms/FormControl) и подключаете нужные вам валидации для ваших [контроллеров](https://angular.io/api/forms/FormControl). Вы можете создавать сколь угодно групп.

### Начальный код

```ts
import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import customValidators from "../helper/validators";

@Injectable({
  providedIn: "root",
})
export class FormValidationService {
  constructor() {}

  private formValidationData: FormGroup = new FormGroup({});

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
```

### Пример

```ts
registration: new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),

  password: new FormControl('', [
    Validators.required,
    Validators.minLength(7),
  ]),

  repeatPassword: new FormControl('', [
    Validators.required,
    Validators.minLength(7),
  ]),
}, [customValidators.passwordMustMatch('password', 'repeatPassword')]),
```

Создали группу(FormGroup) registration внутри данной группы(FormGroup) есть три контроллера(FormControl).

1. email у которого есть две валидации [Validators.required](https://angular.io/api/forms/Validators#required) и [Validators.email](https://angular.io/api/forms/Validators#email).
2. password у которого тоже есть две валидации [Validators.required](https://angular.io/api/forms/Validators#required) и [Validators.minLength(7)](https://angular.io/api/forms/Validators#minLength).
3. repeatPassword: у которого также как у password есть две валидации [Validators.required](https://angular.io/api/forms/Validators#required) и [Validators.minLength(7)](https://angular.io/api/forms/Validators#minLength).

Также в данной [группе](https://angular.io/api/forms/FormGroup) есть кастомная функция для валидации customValidators.passwordMustMatch целю которого является проверка на сходста значений двух
[контроллеров](https://angular.io/api/forms/FormControl).
Мы только что создали [группу](https://angular.io/api/forms/FormGroup) и подключили к данной группе 3 [контроллера](https://angular.io/api/forms/FormControl).

### Код должен выглядит следуйшим образом:

```ts
import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import customValidators from "../helper/validators";

@Injectable({
  providedIn: "root",
})
export class FormValidationService {
  constructor() {}

  private formValidationData: FormGroup = new FormGroup({
    registration: new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.email]),

        password: new FormControl("", [
          Validators.required,
          Validators.minLength(7),
        ]),

        repeatPassword: new FormControl("", [
          Validators.required,
          Validators.minLength(7),
        ]),
      },
      [customValidators.passwordMustMatch("password", "repeatPassword")]
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
```

После того как мы создали нужную [группу](https://angular.io/api/forms/FormGroup) и [контроллеры](https://angular.io/api/forms/FormControl). нужно создать интерфейс для формы.

2 В файле "formInterface.ts" описаны несколько базовых интерфейсов, нам нужно модернизировать интерфейс "IFormData".

```ts
export interface IFormData {}
```

1. Открываем данный интерфейс и создаем атрибута "registration"
   ```ts
   export interface IFormData {
     registration:
   }
   ```
2. Создаем базовый интерфейс для данного атрибута
   ```ts
   interface IRegistration {}
   ```
3. Нужно понять какие именно сущности(input, select, textarea или checkbox) мы хотим создать, так как мы уже создали [группу](https://angular.io/api/forms/FormGroup) которая называется registration, у которого есть три атрибута email, password и repeatPassword и все они должны быть HTML input элементами. Когда мы определили какие именно сущности(input, select, textarea или checkbox) мы хотим создать, самое время модернизировать интерфейс IRegistration

   ```ts
   interface IRegistration {
     inputs: IInputData;
   }
   ```

### Код должен выглядит следуйшим образом:

```ts
interface IRegistration {
  inputs: IInputData[];
}

export interface IFormData {
  registration: IRegistration;
}
```

Когда мы создали [группу](https://angular.io/api/forms/FormGroup) и интерфейс для формы, самое время реализовать все эти интерфейсы в компоненте "form.component.ts"

### Начальный код:

```ts
public formData: IFormData = {
  registration: {
    inputs: [],
  },
};
```

### Модернизированны:

```ts
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
        labelText: 'Повтор пароля'
      },
    ],
  },
};

```

Создали три объекта у каждого их них есть поля

1. groupName: Название [группы](https://angular.io/api/forms/FormGroup)
2. controlName: Название [контроллера](https://angular.io/api/forms/FormControl).
3. type: Тип input элемента (email, password, checkbox).
4. className: Название класса input элемента <input class="className" />.
5. id: атрибут элемента input.
6. labelText: контент тега label.

После того как мы реализовали интерфейс, нам нужно показать данные пользователю. Для таких сушностей как (input, select и checkbox) уже есть нужны компоненты. Мы должны отдавать данные в нужном компоненте и на этом все.

4)Открываем представление компонент "form" "form.component.html"

### Начальный код:

```html
<form [formGroup]="formValidationService.getFormGroup" (ngSubmit)="onSubmit()">
  <button
    [disabled]="!formValidationService.getFormGroup.valid"
    type="submit"
    class="btn btn-success"
  >
    Отправить данные формы
  </button>
</form>
```

### Подключаем компонент form-input:

```html
<form [formGroup]="formValidationService.getFormGroup" (ngSubmit)="onSubmit()">
  <app-form-input></app-form-input>

  <button
    [disabled]="!formValidationService.getFormGroup.valid"
    type="submit"
    class="btn btn-success"
  >
    Отправить данные формы
  </button>
</form>
```

Теперь нужно отдавать данные которые мы создали в этот компонент. Для этого мы воспользуемся структурной директивой \*ngFor который делает итерацию по массиву.

### Пример:

```html
<form [formGroup]="formValidationService.getFormGroup" (ngSubmit)="onSubmit()">
  <app-form-input
    *ngFor="let inputData of formData.registration.inputs"
    [data]="inputData"
  ></app-form-input>

  <button
    [disabled]="!formValidationService.getFormGroup.valid"
    type="submit"
    class="btn btn-success"
  >
    Отправить данные формы
  </button>
</form>
```

Сделали итерацию по массиву, получили нужные данные и отдали их компоненту.Как вы могли заметить, все делается очень просто.

1. Создаете нужную вам [группу](https://angular.io/api/forms/FormGroup) и внутри этой группы вы создаете контрелеры (FormControl) и подключаете нужные вам валидации для ваших [контроллеров](https://angular.io/api/forms/FormControl).
   2)Создаете интерфейс для формы.
   3)Реализуете нужный интерфейс.
   4)Отдаете данные в нужный компонент.

Все поля будут валедированы автоматически, вам не нужно беспокоится о выводе ошибок.
