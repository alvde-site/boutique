import { ReactNode } from "react";
/* reducers */
export interface IInitialAuth {
  loggedIn: boolean;
  userId: null | string;
}

export interface IPopupState {
  name: string;
  state: boolean;
}

/* header */

interface IModifier {
  modifier: string;
}

export interface IMenuProps extends IModifier {}

export interface IRightHeaderMenuProps extends IModifier {}

export interface IShowcaseProps extends IModifier {}

/* main */

export interface IPromoTitle {
  title: string;
}

export interface IPromoTitles extends Array<IPromoTitle> {}

export interface IPromoProps {
  promoTitles: IPromoTitles;
}

export interface ContentCategoryProps {
  children: ReactNode;
  titleText: string;
  buttonText: string;
}

export interface IOpenModifierProps extends IModifier, IShowcaseProps {}

export interface IErrors {
  login?: string;
  control?: string;
  password?: string;
  confirmation?: string;
}

export interface IFormValidator {
  errors: IErrors;
  isValid: boolean;
  setIsValid: (value: boolean) => void;
  setErrors: (value: IErrors) => void;
  handleChange: (event: React.FormEvent) => void;
  resetForm: () => void;
}

/* Popups */

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
}

export interface IPopupWithFormProps {
  name: string;
  hasErrors?: string | undefined;
  title: string;
  onSubmit?: (e: React.FormEvent) => void;
  children: ReactNode;
}

export interface IPopupWithPageProps {
  name: string;
  children: ReactNode;
}

export interface IProductProps {
  details: {
    img: string;
    title: string;
    article: string;
    size: string;
    height: number;
    quantity: number;
    discount: number | string;
    price: number;
    id: string;
  };
  removeItem: (id: string) => void;
}

export interface IFavouriteProps {
  details: {
    img: string;
    title: string;
    article: string;
    size: string;
    height: number;
    quantity: number;
    discount: number | string;
    price: number;
    id: string;
  };
}
/* Валидация формы */

export interface IFormWithValidation extends IValues {
  values: IValues;
  errors: IValues;
  setErrors: (value: IValues) => void;
  handleChange: (e: React.FormEvent<Element>) => void;
  resetForm: () => void;
}
