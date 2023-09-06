import Content from "../Content/Content";
import {
  COLLECTION_BUTTON_TEXT,
  COLLECTION_TITLE_TEXT,
  COLLECTION_PATH,
} from "../../utils/constants";
import Overlay from "../Overlay/Overlay";
import { collectionBD } from "../../utils/boutiqueBD";
import ContentButton from "../ContentButton/ContentButton";
import ContentMenu from "../ContentMenu/ContentMenu";

function Collection() {
  return (
    <Content>
      <ContentMenu
       titleText={COLLECTION_TITLE_TEXT}
       buttonText={COLLECTION_BUTTON_TEXT}
       navigatePath={COLLECTION_PATH}
       cssClass="content-button_position_top"
      />
      <div className="collection">
        {collectionBD.slice(0, 3).map((collection, index) => (
          <article className="collection_item" key={index}>
            <figure className="collection__figure">
              <img
                className="collection__image"
                src={collection.src}
                alt={collection.title}
              />
              <Overlay path={COLLECTION_PATH} item={collection} />
            </figure>
            <div className="collection__content">
              <h2 className="collection__title">{collection.title}</h2>
              <p className="collection__text">{collection.text}</p>
            </div>
          </article>
        ))}
      </div>
      <ContentButton
        cssClass="content-button_position_bottom"
        buttonText={COLLECTION_BUTTON_TEXT}
        navigatePath={COLLECTION_PATH}
      />
    </Content>
  );
}

export default Collection;
