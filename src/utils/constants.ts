/* ------  Images --------- */
/* Логотипы */
import blackLogo from "../images/svg/black-logo.svg";
import qr from "../images/qr-code.png";

/*Showcase images*/
import showcaseFoto from "../images/showcase.jpg";
/* Category images */
import categorySaleFoto from "../images/category1.jpg";
import categoryFoto1 from "../images/category2.jpg";
import categoryFoto2 from "../images/category3.jpg";
import categoryFoto3 from "../images/category4.jpg";
import categoryFoto4 from "../images/category5.jpg";
import categoryFoto5 from "../images/category6.jpg";
import categoryFoto6 from "../images/category7.jpg";
import categoryFoto7 from "../images/category8.jpg";
import categoryFoto8 from "../images/category9.jpg";
/*Collection images*/
import collectionFoto from "../images/collection_temp.jpg";
import collectionFoto1 from "../images/collection1.jpg";
import collectionFoto2 from "../images/collection2.jpg";
import collectionFoto3 from "../images/collection3.jpg";
/* Companies logo */
import bazaarLogo from "../images/bazaar-logo.png";
import buroLogo from "../images/buro-logo.png";
import glamourLogo from "../images/glamour-logo.png";
import vogueLogo from "../images/vogue-logo.png";
/* Conditions */
import deliveryLogo from "../images/svg/delivery-icon.svg";
import refundLogo from "../images/svg/finance-icon.svg";
import paymentLogo from "../images/svg/money-icon.svg";
/* About */
import urban from "../images/urban-vogue.jpg";
import punk from "../images/punk-couture.jpg";
/* Products */
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import dress1 from "../images/dress1.jpg";
import dress2 from "../images/dress2.jpg";
import dress3 from "../images/dress3.jpg";
import dress4 from "../images/dress4.jpg";
import dress5 from "../images/dress5.jpg";
import dress6 from "../images/dress6.jpg";
import dress7 from "../images/dress7.jpg";

export {
  product1,
  product2,
  product3,
  product4,
  dress1,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  dress7,
};
/* Errors */
export const AUTH_ERROR = "Неверный логин или пароль";
export const REQUIRED_FIELD = "Заполните обязательные поля";
export const CONFIRM_PASSWORD_ERROR = "Пароли не совпадают";
export const EXIST_USER = "Пользователь с таким email уже существует";

/* Form text */
export const NEED_REGISTRATION =
  "Для входа в личный кабинет необходима регистрация";
export const REGISTRATION = "Регистрация";

/* -------- Components --------- */
export { blackLogo, qr };

/* Showcase */
export const showcase = {
  src: showcaseFoto,
  alt: "Платье с плиссированной вставкой",
  description: "Платье с плиссированной вставкой",
};

/* Category */
export const CATEGOTY_PATH = "/category";
export const CATEGORY_TITLE_TEXT = "Категории";
export const CATEGORY_BUTTON_TEXT = "Все категории";

export {
  categorySaleFoto,
  categoryFoto1,
  categoryFoto2,
  categoryFoto3,
  categoryFoto4,
  categoryFoto5,
  categoryFoto6,
  categoryFoto7,
  categoryFoto8,
};

export const categoryPath = [
  { path: "/", desc: "Главная" },
  { path: "/category", desc: "Категории" },
];

export const dresses = [];

/*Collection */
export const COLLECTION_TITLE_TEXT = "Коллекции";
export const COLLECTION_BUTTON_TEXT = "Все коллекции";
export const COLLECTION_PATH = "/collection";
export { collectionFoto, collectionFoto1, collectionFoto2, collectionFoto3 };

export const collectionPath = [
  { path: "/", desc: "Главная" },
  { path: "/collection", desc: "Коллекции" },
];

export const categoryCruise2022Path = [
  { path: "/", desc: "Главная" },
  { path: "/collection", desc: "Коллекции" },
  { path: "/collection/cruise2022", desc: "Круиз2022" },
];

/* Companies */
export const companiesLogo = [
  { src: bazaarLogo, alt: "Логотип Базар" },
  { src: buroLogo, alt: "Логотип Буро" },
  { src: glamourLogo, alt: "Логотип Гламур" },
  { src: vogueLogo, alt: "Логотип Вожю" },
];

/* Contacts */
export const cityContacts = [
  {
    city: "Санкт-петербург",
    label: "Maker Design Loft",
    address: "ул. Восстания, 3-5",
    time: "10:00 - 19:00 по предварительному звонку",
  },
  {
    city: "Махачкала",
    label: "Cezars",
    address: "ул. Сулеймана Стальского 18",
    time: "10:00 - 19:00 по предварительному звонку",
  },
  {
    city: "Кемерово",
    label: "LOR`IN",
    address: "ул. 50 лет Октября 11, корпус 2",
    time: "10:00 - 19:00 по предварительному звонку",
  },
];

/* Conditions */

export const conditionsLogo = [
  { src: deliveryLogo, alt: "Доставка" },
  { src: refundLogo, alt: "Возврат" },
  { src: paymentLogo, alt: "Оплата" },
];

/* About */
export const ABOUT_TITLE_TEXT = "О нас";
export const ABOUT_BUTTON_TEXT = "Вернуться на главную";

export const aboutFotos = [
  { src: urban, alt: "Городская мода" },
  { src: punk, alt: "Панк кутюр" },
];

/* NotFound */

export const NOTFOUND_TITLE_TEXT = "Ошибка";
export const NOTFOUND_BUTTON_TEXT = "Вернуться на главную";

/* Popups */
const MENU_POPUP = "menuPopup";
const AUTH_POPUP = "authPopup";
const REGISTER_POPUP = "registerPopup";
const ALERT_POPUP = "alertPopup";
const BASKET_POPUP = "basketPopup";
const FAVOURITE_POPUP = "favouritePopup";
const ORDERING_POPUP = "orderingPopup";

export {
  MENU_POPUP,
  REGISTER_POPUP,
  AUTH_POPUP,
  ALERT_POPUP,
  BASKET_POPUP,
  FAVOURITE_POPUP,
  ORDERING_POPUP,
};
