import { ReactNode } from "react";
/* reducers */
export interface TInitialAuth {
  loggedIn: boolean;
  userId: null | string;
}

/* header */
interface IMenu {
  openMenu: () => void;
  onClose: () => void;
}

interface IIsMenuOpen {
  isMenuOpen: boolean;
}

interface ISetIsMenuOpen {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModifier {
  modifier: string;
}

interface IOnPopupWithAuthOpen {
  onPopupWithAuthOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IOnPopupWithBascetOpen {
  onPopupWithBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IOnPopupWithFavouriteOpen {
  onPopupWithFavouriteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderProps
  extends IStoreListProps,
    IMenu,
    ISetIsMenuOpen,
    IOnPopupWithAuthOpen,
    IOnPopupWithBascetOpen {}

export interface IMenuProps extends IMenu, IModifier {}

export interface IRightHeaderMenuProps
  extends IModifier,
    ISetIsMenuOpen,
    IOnPopupWithAuthOpen,
    IOnPopupWithBascetOpen,
    IOnPopupWithFavouriteOpen {}

export interface IStoreListProps
  extends IMenu,
    ISetIsMenuOpen,
    IIsMenuOpen,
    IOnPopupWithAuthOpen,
    IOnPopupWithBascetOpen,
    IOnPopupWithFavouriteOpen {}

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

/* Popups */
interface IHandleOpenPopup {
  isOpen: boolean;
  onClose: () => void;
}

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

export interface IPopupWithFormProps {}

export interface IPopupWithAuthProps extends IHandleOpenPopup {
  onOpenRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopupWithRegisterProps extends IHandleOpenPopup {
  onOpenAlertForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopupWithAlertProps extends IHandleOpenPopup {}

export interface IPopupWithBasketProps extends IHandleOpenPopup {}

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
}

export interface IPopupWithFavouriteProps extends IHandleOpenPopup {}

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
