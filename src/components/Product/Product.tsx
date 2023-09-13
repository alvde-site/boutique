import { IProductProps } from "../../utils/interfaces";
import ButtonFav from "../ButtonFav/ButtonFav";

function Product({ product, removeItem }: IProductProps) {
  function removeBascketItem() {
    removeItem(product.id);
  }

  return (
    <div className="product">
      <img src={product.img} alt={product.title} className="basket__img" />
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
          <div className="product__price-wrap">
            <p className="product__discount">{product.discount}</p>
            <p className="product__price basket__price">
              {product.price}
              <span className="basket__currency">₽</span>
            </p>
          </div>
          <div className="product__favourite-wrap">
            <p className="product__field product__field_type_favourite">
              {`В ${product?.isInFavorite ? "избранном" : "избранное"}`}
            </p>
            <ButtonFav product={product} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
