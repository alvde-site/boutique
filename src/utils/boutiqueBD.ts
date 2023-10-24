import {
  dress1,
  categorySaleFoto,
  categoryFoto1,
  categoryFoto2,
  categoryFoto3,
  categoryFoto4,
  categoryFoto5,
  categoryFoto6,
  categoryFoto7,
  categoryFoto8,
  collectionFoto,
  collectionFoto1,
  collectionFoto2,
  collectionFoto3,
} from "./constants";

const categoryBD = [
  { id: "101", src: categorySaleFoto, title: "Распродажа", path: "sale" },
  { id: "102", src: dress1, title: "Платья", path: "dress" },
  { id: "103", src: categoryFoto1, title: "Жакеты", path: "jackets" },
  { id: "104", src: categoryFoto2, title: "Юбки", path: "skirts" },
  { id: "105", src: categoryFoto3, title: "Свадебные платья", path: "wedding" },
  { id: "106", src: categoryFoto4, title: "блузки", path: "blouses" },
  { id: "107", src: categoryFoto5, title: "Костюмы", path: "costumes" },
  { id: "108", src: categoryFoto6, title: "Свитеры", path: "sweaters" },
  { id: "109", src: categoryFoto7, title: "Верхняя одежда", path: "outerwear" },
  { id: "110", src: categoryFoto8, title: "Футболки", path: "tshirt" },
  { id: "111", src: collectionFoto, title: "Олимпийки", path: "olympians" },
  { id: "112", src: collectionFoto, title: "Худи и свитшоты", path: "hoodies" },
  { id: "113", src: collectionFoto, title: "Брюки", path: "pant" },
  { id: "114", src: collectionFoto, title: "Водолазки", path: "turtlenecks" },
  { id: "115", src: collectionFoto, title: "Аксессуары", path: "accessories" },
];

const collectionBD = [
  {
    id: "200",
    src: collectionFoto1,
    title: "Городская мода",
    path: "urban",
    text: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. ",
  },
  {
    id: "201",
    src: collectionFoto2,
    title: "Панк-кутюр",
    path: "punk",
    text: "Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
  {
    id: "202",
    src: collectionFoto3,
    title: "круиз 2022",
    path: "cruise",
    text: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
  {
    id: "203",
    src: collectionFoto,
    title: "Коллекция 1",
    path: "collection1",
    text: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
  {
    id: "204",
    src: collectionFoto,
    title: "Коллекция 2",
    path: "collection2",
    text: "Приталенное платье мини мятного цвета в полу-спортивном стиле. Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке вставки из гофре плиссе разных цветов. Мятный и розовый лампасы придают платью спортивное направление. По спинке длинная леопардовая молния.",
  },
];

export {
  categoryBD,
  collectionBD,
};
