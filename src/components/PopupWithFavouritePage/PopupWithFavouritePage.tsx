import PopupWithPage from "../PopupWithPage/PopupWithPage";
import { FAVOURITE_POPUP } from "../../utils/constants";
import Favourite from "../Favourite/Favourite";
import {
  addBasketProduct,
  removeBasketProduct,
  removeFavouriteProduct,
  selectAllInBasket,
  selectAllInFavourite,
} from "../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function PopupWithFavouritePage() {
  const dispatch = useAppDispatch();
  const favouriteProducts = useAppSelector(selectAllInFavourite);
  const basketProducts = useAppSelector(selectAllInBasket);
  function removeFavouriteItem(id: string) {
    dispatch(removeFavouriteProduct({ productId: id }));
  }

  function addBasketItem(id: string) {
    dispatch(addBasketProduct({ productId: id }));
  }

  function removeBascketItem(id: string) {
    dispatch(removeBasketProduct({ productId: id }));
  }
  return (
    <PopupWithPage name={FAVOURITE_POPUP} title="Избранное">
      {favouriteProducts.map((details) => (
        <Favourite
          details={details}
          key={details.id}
          removeFromFavourite={removeFavouriteItem}
          removeFromBasket={removeBascketItem}
          addToBasket={addBasketItem}
          basketProducts={basketProducts}
        />
      ))}
    </PopupWithPage>
  );
}

export default PopupWithFavouritePage;
