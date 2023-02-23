import {
  categoryDesctiption,
  categoryFotos,
} from "../../../utils/constants";

function Category() {
  return (
    <section className="category">
      <div className="category__content">
        <div className="category__description">
          <img
            className="category__cover"
            src={categoryDesctiption.src}
            alt="Реклама одежды"
          />
          <p className="category__text">
            Будучи потомком великого импресарио 19-20 вв, Сергея Дягилева,
            Полина переосмысливает силуэты женского балетного костюма, предлагая
            своим покупательницам неожиданные современные решения. Несмотря на
            женственность линий и обилие цветочных мотивов, образы никак нельзя
            назвать "ванильными". Свобода, бунтарство и панк, как нельзя, лучше
            дополняют Полинины "Балетные Сезоны".
          </p>
        </div>
        <div className="category__gallery">
          {categoryFotos.map((item, index) => (
            <figure className="category__figure" key={index}>
              <img
                className="category__image"
                src={item.src}
                alt={item.title}
              />
              <div className="category__overlay">
                <a className="category__link" href="!#">
                  {item.title}
                </a>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
