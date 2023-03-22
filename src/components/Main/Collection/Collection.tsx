import { collectionFotos } from "../../../utils/constants";
import Content from "../Content/Content";
import {
  COLLECTION_BUTTON_TEXT,
  COLLECTION_TITLE_TEXT,
} from "../../../utils/constants";

function Collection() {
  return (
    <Content
      titleText={COLLECTION_TITLE_TEXT}
      buttonText={COLLECTION_BUTTON_TEXT}
    >
      <div className="collection">
        {collectionFotos.map((collection, index) => (
          <article className="collection_item" key={index}>
            <figure className="collection__figure">
              <img
                className="collection__image"
                src={collection.src}
                alt={collection.title}
              />
            </figure>
            <div className="collection__content">
              <h2 className="collection__title">{collection.title}</h2>
              <p className="collection__text">{collection.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Content>
  );
}

export default Collection;
