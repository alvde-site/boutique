import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../../services/reducers/productsSlice";
import { useAppDispatch } from "../../utils/hooks";
import { IButtonFavProps } from "../../utils/interfaces";

function ButtonFav({ product }: IButtonFavProps) {
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
      className={`product__favourite ${
        product?.isInFavorite
          ? "product__favourite_type_like"
          : "product__favourite_type_dislike"
      }`}
      aria-label="Избранное"
      onClick={toggleFavouriteState}
    ></button>
  );
}

export default ButtonFav;
