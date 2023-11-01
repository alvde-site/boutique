import { selectAllAuth } from "../../services/reducers/authSlice";
import { useAppSelector } from "../../utils/hooks";
import { IProductProps } from "../../utils/interfaces";
import ButtonFav from "../ButtonFav/ButtonFav";
import Price from "../Price/Price";

function Product({ product, removeItem }: IProductProps) {
  const auth = useAppSelector(selectAllAuth);
  const userId = `${auth.userId ? auth.userId : "noauth"}`;
  const isInFav =
    product.isInFavorite.includes(auth.userId) ||
    product.isInFavorite.includes("noauth");
  function removeBascketItem() {
    removeItem(product.id, userId);
  }

  return (
    <div className="product">
      <img src={product.img} alt={product.title} className="product__img" />
      <div className="product__content">
        <div className="product__item">
          <div className="product__desc">
            <h3 className="product__title basket__title">{product.title}</h3>
            <ul className="product__details">
              <li className="product__field-wrap">
                <p className="product__field">артикул:</p>
                <p className="product__value">{product.article}</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">Размер:</p>
                <p className="product__value">{product.size}</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">рост:</p>
                <p className="product__value">{product.size}</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">Количество:</p>
                <p className="product__value">{product.quantity}</p>
              </li>
            </ul>
          </div>
          <button
            className="product__remove-button"
            onClick={removeBascketItem}
          >
            Удалить
          </button>
        </div>
        <div className="product__footer">
          <Price product={product} />
          <div className="product__favourite-wrap">
            <p className="product__field product__field_type_favourite">
              {`В ${isInFav ? "избранном" : "избранное"}`}
            </p>
            <ButtonFav product={product} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
