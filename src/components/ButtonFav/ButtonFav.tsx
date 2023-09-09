import { IButtonFavProps } from "../../utils/interfaces";

function ButtonFav({ productData, onToggle }: IButtonFavProps) {
  return (
    <button
      className={`product__favourite ${
        productData?.isInFavorite
          ? "product__favourite_type_like"
          : "product__favourite_type_dislike"
      }`}
      aria-label="Избранное"
      onClick={onToggle}
    ></button>
  );
}

export default ButtonFav;
