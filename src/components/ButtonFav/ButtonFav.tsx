import { selectAllAuth } from "../../services/reducers/authSlice";
import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { IButtonFavProps } from "../../utils/interfaces";

function ButtonFav({ product, className }: IButtonFavProps) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAllAuth);
  const isInFav =
    product.isInFavorite.includes(auth.userId) ||
    product.isInFavorite.includes("noauth");
  const userId = `${auth.userId ? auth.userId : "noauth"}`;
  function toggleFavouriteState() {
    if (product) {
      if (isInFav) {
        dispatch(
          removeFavouriteProduct({
            productId: product.id,
            userId,
          })
        );
      } else {
        dispatch(
          addFavouriteProduct({
            productId: product.id,
            userId,
          })
        );
      }
    }
  }

  return (
    <button
      className={`buttonfav ${className} ${
        isInFav ? "buttonfav_type_like" : "buttonfav_type_dislike"
      }`}
      aria-label="Избранное"
      onClick={toggleFavouriteState}
    ></button>
  );
}

export default ButtonFav;
