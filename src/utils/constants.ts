// const loginError = "Поле должно быть заполнено";
// const controlError = "Неверное контрольное слово";
// const passwordError = " Пароль должен быть не менее 6 символов";
// const passwordConfirmationError = "Пароли не совпадают";

// export { loginError, controlError, passwordError, passwordConfirmationError };

/* Images */
/*Showcase images*/
import showcaseFoto from "../images/showcase.jpg";
/* Category images */
import categoryDescriptionFoto from "../images/category1.jpg";
import categoryFoto1 from "../images/category2.jpg";
import categoryFoto2 from "../images/category3.jpg";
import categoryFoto3 from "../images/category4.jpg";
import categoryFoto4 from "../images/category5.jpg";
/*Collection images*/
import collectionFoto1 from "../images/collection1.jpg";
import collectionFoto2 from "../images/collection2.jpg";
import collectionFoto3 from "../images/collection3.jpg";
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
export const categoryDesctiption = {
  src: categoryDescriptionFoto,
};
export const categoryFotos = [
  { src: categoryFoto1, title: "sale" },
  { src: categoryFoto2, title: "Юбки" },
  { src: categoryFoto3, title: "Свадебные платья" },
  { src: categoryFoto4, title: "блузки" },
];

/*Collection */
export const COLLECTION_TITLE_TEXT = "Коллекции";
export const COLLECTION_BUTTON_TEXT = "Все коллекции";
export const collectionFotos = [
  {
    src: collectionFoto1,
    title: "urban vogue",
    desc: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. ",
  },
  {
    src: collectionFoto2,
    title: "punk couture",
    desc: "Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
  {
    src: collectionFoto3,
    title: "cruise 2022",
    desc: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
];
