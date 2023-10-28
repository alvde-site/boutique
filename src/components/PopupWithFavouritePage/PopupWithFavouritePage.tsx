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
import IsEmpty from "../IsEmpty/IsEmpty";

function PopupWithFavouritePage() {
  const dispatch = useAppDispatch();
  const favouriteProducts = useAppSelector(selectAllInFavourite);
  const basketProducts = useAppSelector(selectAllInBasket);
  function removeFavouriteItem(id: string, userId: string) {
    dispatch(removeFavouriteProduct({ productId: id, userId }));
  }

  function addBasketItem(id: string, userId: string) {
    dispatch(addBasketProduct({ productId: id, userId }));
  }

  function removeBascketItem(id: string, userId: string) {
    dispatch(removeBasketProduct({ productId: id, userId }));
  }

  let content;

  if (favouriteProducts.length) {
    content = favouriteProducts.map((details) => (
      <Favourite
        details={details}
        key={details.id}
        removeFromFavourite={removeFavouriteItem}
        removeFromBasket={removeBascketItem}
        addToBasket={addBasketItem}
        basketProducts={basketProducts}
      />
    ));
  } else {
    content = <IsEmpty />;
  }

  return (
    <PopupWithPage name={FAVOURITE_POPUP} title="Избранное">
      {content}
    </PopupWithPage>
  );
}

export default PopupWithFavouritePage;
