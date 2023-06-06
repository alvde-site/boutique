/* ------  Images --------- */
/* Логотипы */
import blackLogo from "../images/svg/black-logo.svg";

/*Showcase images*/
import showcaseFoto from "../images/showcase.jpg";
/* Category images */
import categoryDescriptionFoto from "../images/category1.jpg";
import categoryFoto1 from "../images/category2.jpg";
import categoryFoto2 from "../images/category3.jpg";
import categoryFoto3 from "../images/category4.jpg";
import categoryFoto4 from "../images/category5.jpg";
import categoryFoto5 from "../images/category6.jpg";
import categoryFoto6 from "../images/category7.jpg";
import categoryFoto7 from "../images/category8.jpg";
import categoryFoto8 from "../images/category9.jpg";
/*Collection images*/
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

export { product1, product2, product3, product4 };
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
export { blackLogo };

/* Header */
const promoTitles = [
  {
    title: "CRUISE 2022",
  },
  {
    title: "CRUISE 2023",
  },
  {
    title: "CRUISE 2024",
  },
  {
    title: "CRUISE 2025",
  },
];

export { promoTitles };

/* Showcase */
export const showcase = {
  src: showcaseFoto,
  alt: "Платье с плиссированной вставкой",
  description: "Платье с плиссированной вставкой",
};

/* Category */
export const CATEGORY_TITLE_TEXT = "Категории";
export const CATEGORY_BUTTON_TEXT = "Все категории";
export const CATEGORY_PATH="/category";
export const categoryFotos = [
  { src: categoryDescriptionFoto, title: "sale" },
  { src: categoryFoto1, title: "Жакеты" },
  { src: categoryFoto2, title: "Юбки" },
  { src: categoryFoto3, title: "Свадебные платья" },
  { src: categoryFoto4, title: "блузки" },
  { src: categoryFoto5, title: "Костюмы" },
  { src: categoryFoto6, title: "Свитеры" },
  { src: categoryFoto7, title: "Верхняя одежда" },
  { src: categoryFoto8, title: "Футболки" },
];

export const categoryPath = ["Главная", "Категории"];

/*Collection */
export const COLLECTION_TITLE_TEXT = "Коллекции";
export const COLLECTION_BUTTON_TEXT = "Все коллекции";
export const collectionFotos = [
  {
    src: collectionFoto1,
    title: "urban vogue",
    text: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. ",
  },
  {
    src: collectionFoto2,
    title: "punk couture",
    text: "Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
  {
    src: collectionFoto3,
    title: "cruise 2022",
    text: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
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
const FAVOURITE_POPUP = "favouritePopop";

export {
  MENU_POPUP,
  REGISTER_POPUP,
  AUTH_POPUP,
  ALERT_POPUP,
  BASKET_POPUP,
  FAVOURITE_POPUP,
};
