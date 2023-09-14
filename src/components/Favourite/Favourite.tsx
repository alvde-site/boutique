import { IFavouriteProps } from "../../utils/interfaces";
import Price from "../Price/Price";

function Favourite({
  details,
  addToBasket,
  removeFromBasket,
  removeFromFavourite,
  basketProducts,
}: IFavouriteProps) {
  const existingProduct = basketProducts.find((p) => p.id === details.id);
  function addBasketItem() {
    addToBasket(details.id);
  }

  function removeFavoureteItem() {
    removeFromFavourite(details.id);
  }

  function removeBascketItem() {
    removeFromBasket(details.id);
  }
  return (
    <div className="favourite__card">
      <img src={details.img} alt={details.title} className="favourite__img" />
      <div className="favourite__content">
        <h3 className="favourite__title">{details.title}</h3>
        <Price product={details} />
      </div>
      <div className="favourite__handle">
        {existingProduct?.isInBasket ? (
          <button
            className="favourite__button favourite__button_state_added"
            onClick={removeBascketItem}
          >
            ДОБАВЛЕНО
          </button>
        ) : (
          <button
            className="favourite__button favourite__button_state_add"
            onClick={addBasketItem}
          >
            добавить в корзину
          </button>
        )}
        <button
          className="favourite__button favourite__button_state_remove"
          onClick={removeFavoureteItem}
        >
          Убрать из избранного
        </button>
      </div>
    </div>
  );
}

export default Favourite;
