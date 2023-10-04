export interface IValues {
  [key: string]: string;

}

export interface IErrors extends IValues {}

export interface IFormValidator {
  values: IValues;
  errors: IErrors;
  isValid: boolean;
  setIsValid: (value: boolean) => void;
  setErrors: (value: IErrors) => void;
  handleChange: (event: React.FormEvent) => void;
  resetForm: () => void;
}
