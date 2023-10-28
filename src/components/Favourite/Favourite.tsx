import { selectAllAuth } from "../../services/reducers/authSlice";
import { useAppSelector } from "../../utils/hooks";
import { IFavouriteProps } from "../../utils/interfaces";
import ButtonBasket from "../ButtonBasket/ButtonBasket";
import Price from "../Price/Price";

function Favourite({
  details,
  addToBasket,
  removeFromBasket,
  removeFromFavourite,
  basketProducts,
}: IFavouriteProps) {
  const existingProduct = basketProducts.find((p) => p.id === details.id);
  const auth = useAppSelector(selectAllAuth);
  const userId = `${auth.userId ? auth.userId : "noauth"}`
  function addBasketItem() {
    addToBasket(details.id, userId);
  }

  function removeFavoureteItem() {
    removeFromFavourite(details.id, userId);
  }

  function removeBascketItem() {
    removeFromBasket(details.id, userId);
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
          <ButtonBasket
            className={"buttonbasket_state_added"}
            onClick={removeBascketItem}
            buttonText={"ДОБАВЛЕНО"}
          />
        ) : (
          <ButtonBasket
            className={"buttonbasket_state_add"}
            onClick={addBasketItem}
            buttonText={"добавить в корзину"}
          />
        )}
        <ButtonBasket
          className={"buttonbasket_state_remove"}
          onClick={removeFavoureteItem}
          buttonText={"Убрать из избранного"}
        />
      </div>
    </div>
  );
}

export default Favourite;
