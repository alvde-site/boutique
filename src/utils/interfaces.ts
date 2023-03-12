import { ReactNode } from "react";

/* header */
interface IMenu {
  openMenu: () => void;
  onClose: () => void;
}

interface IIsMenuOpen {
  isMenuOpen: boolean;
}

interface IModifier {
  modifier: string;
}

interface IOnPopupWithAuthOpen {
  onPopupWithAuthOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderProps
  extends IStoreListProps,
    IMenu,
    IOnPopupWithAuthOpen {}

export interface IMenuProps extends IMenu, IModifier {}

export interface IRightHeaderMenuProps
  extends IModifier,
    IOnPopupWithAuthOpen {}

export interface IStoreListProps
  extends IMenu,
    IIsMenuOpen,
    IOnPopupWithAuthOpen {}

export interface IShowcaseProps extends IModifier {}

/* main */

export interface IMainProps {
  onPopupWithAuthOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export interface IOpenModifierProps extends IMenuProps, IShowcaseProps {}

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

export interface IValues {
  title?: string;
  authemail?: string;
  authpassword?: string;
  regname?: string;
}

/* Popups */
interface IHandleOpenPopup {
  isOpen: boolean;
  onClose: () => void;
}

export interface IPopupWithFormProps {}

export interface IPopupWithAuthProps extends IHandleOpenPopup {
  onOpenRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopupWithRegisterProps extends IHandleOpenPopup {}

export interface IFormWithValidation extends IValues {
  values: IValues;
  errors: IValues;
  setErrors: (value: IValues) => void;
  handleChange: (e: React.FormEvent<Element>) => void;
}
