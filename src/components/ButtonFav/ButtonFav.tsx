import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../../services/reducers/productsSlice";
import { useAppDispatch } from "../../utils/hooks";
import { IButtonFavProps } from "../../utils/interfaces";

function ButtonFav({ product, className }: IButtonFavProps) {
  const dispatch = useAppDispatch();
  function toggleFavouriteState() {
    if (product) {
      if (product.isInFavorite) {
        dispatch(removeFavouriteProduct({ productId: product.id }));
      } else {
        dispatch(addFavouriteProduct({ productId: product.id }));
      }
    }
  }

  return (
    <button
      className={`buttonfav ${className} ${
        product?.isInFavorite ? "buttonfav_type_like" : "buttonfav_type_dislike"
      }`}
      aria-label="Избранное"
      onClick={toggleFavouriteState}
    ></button>
  );
}

export default ButtonFav;
