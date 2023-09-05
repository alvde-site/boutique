import Content from "../Content/Content";
import {
  CATEGORY_BUTTON_TEXT,
  CATEGORY_TITLE_TEXT,
  CATEGOTY_PATH,
} from "../../utils/constants";
import Overlay from "../Overlay/Overlay";
import { categoryBD } from "../../utils/boutiqueBD";
import ContentButton from "../ContentButton/ContentButton";

function Category() {
  return (
    <Content
      titleText={CATEGORY_TITLE_TEXT}
      buttonText={CATEGORY_BUTTON_TEXT}
      navigatePath={CATEGOTY_PATH}
      cssClass="content-button_position_top"
    >
      <div className="category">
        <div className="category__content">
          <div className="category__description">
            <img
              className="category__cover"
              src={categoryBD[0].src}
              alt={categoryBD[0].title}
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
            {categoryBD.slice(1, 5).map((item, index) => (
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
      <ContentButton
        cssClass="content-button_position_bottom"
        buttonText={CATEGORY_BUTTON_TEXT}
        navigatePath={CATEGOTY_PATH}
      />
    </Content>
  );
}

export default Category;
