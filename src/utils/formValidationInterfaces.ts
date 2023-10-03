export interface IValues {
  title?: string;
  authemail?: string;
  authpassword?: string;
  regname?: string;
  regsurname?: string;
  regemail?: string;
  regtel?: string;
  regpassword?: string;
  regreppassword?: string;
  regcity?: string;
  regaddress?: string;
  orderingName?: string;
  orderingSurname?: string;
  orderingNumber?: string;
  orderingEmail?: string;

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
