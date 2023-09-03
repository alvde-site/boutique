import { CATEGOTY_PATH, categoryData } from "../../utils/constants";
import Content from "../Content/Content";
import {
  CATEGORY_BUTTON_TEXT,
  CATEGORY_TITLE_TEXT,
  categoryDressPath,
} from "../../utils/constants";
import Overlay from "../Overlay/Overlay";

function Category() {
  return (
    <Content
      titleText={CATEGORY_TITLE_TEXT}
      buttonText={CATEGORY_BUTTON_TEXT}
      navigatePath={categoryDressPath[1].path}
    >
      <div className="category">
        <div className="category__content">
          <div className="category__description">
            <img
              className="category__cover"
              src={categoryData[0].src}
              alt={categoryData[0].title}
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
            {categoryData.slice(1, 5).map((item, index) => (
              <figure className="category__figure" key={index}>
                <img
                  className="category__image"
                  src={item.src}
                  alt={item.title}
                />
                <Overlay path={CATEGOTY_PATH} item={item} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Category;
