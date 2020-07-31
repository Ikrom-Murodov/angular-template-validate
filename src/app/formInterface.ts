interface IBase {
  controlName: string;
  className?: string;
  labelText?: string;
  groupName: string;
  id?: string;
}

interface ISelectOption {
  value: string;
  text: string;
}

export interface IInputData extends IBase {
  type: string;
}

export interface ISelectData extends IBase {
  options: ISelectOption[];
  input: IInputData[];
}

export interface ICheckboxData extends IBase {}

interface IRegistration {
  inputs: IInputData[];
}

export interface IFormData {
  registration: IRegistration;
}
