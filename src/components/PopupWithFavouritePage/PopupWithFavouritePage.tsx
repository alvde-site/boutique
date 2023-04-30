import PopupWithPage from "../PopupWithPage/PopupWithPage";
import { FAVOURITE_POPUP } from "../../utils/constants";
import Favourite from "./Favourite/Favourite";
import {
  removeFavouriteProduct,
  selectAllInFavourite,
} from "../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function PopupWithFavouritePage() {
  const dispatch = useAppDispatch();
  const favouriteProducts = useAppSelector(selectAllInFavourite);

  function removeFavouriteItem(id: string) {
    dispatch(removeFavouriteProduct({ productId: id }));
  }
  return (
    <PopupWithPage name={FAVOURITE_POPUP}>
      <div className="favourite">
        <h2 className="favourite__title">Избранное</h2>
        {favouriteProducts.map((details) => (
          <Favourite
            details={details}
            key={details.id}
            removeItem={removeFavouriteItem}
          />
        ))}
      </div>
    </PopupWithPage>
  );
}

export default PopupWithFavouritePage;
