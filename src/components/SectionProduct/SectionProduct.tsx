import { Link } from "react-router-dom";
import { ISectionProductProps } from "../../utils/interfaces";

function SectionProduct({
  details,
  allProducts,
  toggleFavourite,
}: ISectionProductProps) {
  const existingProduct = allProducts.find((p) => p.id === details.id);
  function toggleFavouriteState() {
    if (existingProduct) {
      console.log("sectionProduct", existingProduct);
      toggleFavourite(details.id, existingProduct.isInFavorite);
    }
  }
  return (
    <li className="partition__card">
      <Link
        className="partition__link partition__link_add_border"
        to={`/product/${details.id}`}
      >
        <img
          className="partition__img"
          src={details.img}
          alt={details.title}
        ></img>
      </Link>
      <div className="partition__info">
        <div>
          <p className="partition__text">{details.title}</p>
          <p className="partition__price">{`₽ ${details.price}`}</p>
        </div>
        <button
          className={`product__favourite ${
            details?.isInFavorite
              ? "product__favourite_type_like"
              : "product__favourite_type_dislike"
          }`}
          aria-label="Избранное"
          onClick={toggleFavouriteState}
        ></button>
      </div>
    </li>
  );
}

export default SectionProduct;
