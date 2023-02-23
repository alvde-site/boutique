import { showcase } from "../../../utils/constants";

function Showcase() {
  return (
    <article className="showcase">
      <figure className="showcase__figure">
        <img className="showcase__image" src={showcase.src} alt={showcase.alt} />
      </figure>
      <div className="showcase__content">
        <div className="showcase__title-block">
          <h2 className="showcase__title">{showcase.alt}</h2>
          <p className="showcase__subtitle">{showcase.description}</p>
        </div>
        <button className="showcase__button">Приобрести</button>
        <p className="showcase__description">
          Приталенное платье мини мятного цвета в полу-спортивном стиле.
          Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке
          вставки из гофре плиссе разных цветов. Мятный и розовый лампасы
          придают платью спортивное направление. По спинке длинная леопардовая
          молния.
        </p>
      </div>
    </article>
  );
}

export default Showcase;
