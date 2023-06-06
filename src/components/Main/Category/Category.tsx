import { categoryFotos } from "../../../utils/constants";
import Content from "../Content/Content";
import {
  CATEGORY_BUTTON_TEXT,
  CATEGORY_TITLE_TEXT,
  CATEGORY_PATH
} from "../../../utils/constants";

function Category() {
  return (
    <Content titleText={CATEGORY_TITLE_TEXT} buttonText={CATEGORY_BUTTON_TEXT} navigatePath={CATEGORY_PATH}>
      <div className="category">
        <div className="category__content">
          <div className="category__description">
            <img
              className="category__cover"
              src={categoryFotos[0].src}
              alt={categoryFotos[0].title}
            />
            <p className="category__text">
              Будучи потомком великого импресарио 19-20 вв, Сергея Дягилева,
              Полина переосмысливает силуэты женского балетного костюма,
              предлагая своим покупательницам неожиданные современные решения.
              Несмотря на женственность линий и обилие цветочных мотивов, образы
              никак нельзя назвать "ванильными". Свобода, бунтарство и панк, как
              нельзя, лучше дополняют Полинины "Балетные Сезоны".
            </p>
          </div>
          <div className="category__gallery">
            {categoryFotos.slice(1, 5).map((item, index) => (
              <figure className="category__figure" key={index}>
                <img
                  className="category__image"
                  src={item.src}
                  alt={item.title}
                />
                <div className="category__overlay">
                  <a
                    className="category__link"
                    href="https://github.com/alvde-site"
                  >
                    {item.title}
                  </a>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Category;
