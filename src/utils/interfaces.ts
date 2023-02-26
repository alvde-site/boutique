import { ReactNode } from "react";

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

export interface IShowcaseProps {
  modifier: string;
}

// export interface IFormValidator {
//   values: IValues;
//   errors: IErrors;
//   isValid: boolean;
//   setIsValid: (value: boolean) => void;
//   setErrors: (value: IErrors) => void;
//   handleChange: (event: React.FormEvent)=> void;
//   resetForm: () => void;
// }
