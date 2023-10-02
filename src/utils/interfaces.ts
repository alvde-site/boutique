import { ReactNode } from "react";

interface ISectionData {
  id: string;
  src: string;
  title: string;
  path: string;
  text?: string;
}

/* reducers */
export interface IInitialAuth {
  loggedIn: boolean;
  userId: null | string;
}

export interface ICurrentUser {
  email: string | undefined;
}

export interface IPopupState {
  name: string;
  state: boolean;
}

interface IButton {
  size: string;
  disabled: boolean;
}

export interface IProductsState {
  img: string;
  title: string;
  article: string;
  size: string;
  height: number;
  quantity: number;
  discount: number | string;
  price: number;
  id: string;
  isInBasket: boolean;
  isInFavorite: boolean;
  isInOrder: boolean;
  category: string;
  collection: string;
  buttons: IButton[];
}

export interface IProductsInitialState {
  initialProducts: IProductsState[];
  products: IProductsState[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

export interface ICategoryState {
  id: string;
  src: string;
  title: string;
  path: string;
  text?: string;
}

export interface ICollectionState extends ICategoryState {}

/* header */

interface IModifier {
  modifier: string;
}

export interface IMenuProps extends IModifier {}

export interface IRightHeaderMenuProps extends IModifier {}

export interface IShowcaseProps extends IModifier {}

/* main */

export interface IPriceProps {
  product: IProductsState;
}

export interface IButtonFavProps {
  product: IProductsState;
  className: string;
}

export interface IPromoProps {
  promoTitles: ISectionData[];
}

export interface IContentProps {
  children?: ReactNode;
}

export interface IContentMenuProps {
  titleText?: string;
  buttonText?: string;
  navigatePath?: string;
  cssClass?: string;
}

export interface IContentButtonProps {
  buttonText?: string;
  navigatePath?: string;
  cssClass?: string;
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

export interface IPath {
  path: string;
  desc: string;
}

interface IPaths extends Array<IPath> {}

interface ISectionPath {
  path: IPaths;
}

export interface ISectionChooseProps extends ISectionPath {
  buttonText: string;
  titleText: string;
  data: ISectionData[];
}

export interface ISectionSelectionProps {
  path: IPath[];
  fotos: ISectionData[];
}

export interface IOverlayProps {
  path: string | undefined;
  item: ISectionData;
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
  product: IProductsState;
  removeItem: (id: string) => void;
}

export interface ISectionMoreProps extends IContentMenuProps {
  data: ISectionData[];
}

export interface ISectionProductProps {
  product: IProductsState;
}

export interface IFavouriteProps {
  details: IProductsState;
  removeFromFavourite: (id: string) => void;
  addToBasket: (id: string) => void;
  removeFromBasket: (id: string) => void;
  basketProducts: IProductsState[];
}

export interface IPopupRegisterProps {
  setCurrentUser: React.Dispatch<React.SetStateAction<ICurrentUser>>;
}

export interface IPathProps {
  path: IPath[];
}
/* Валидация формы */

export interface IFormWithValidation extends IValues {
  values: IValues;
  errors: IValues;
  setErrors: (value: IValues) => void;
  handleChange: (e: React.FormEvent<Element>) => void;
  resetForm: () => void;
}
