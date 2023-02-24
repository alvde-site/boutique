import { collectionFotos } from "../../../utils/constants";

function Collection() {
  return (
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
  );
}

export default Collection;
