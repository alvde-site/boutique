import { 
  IProductProps 
} from "../../../utils/interfaces";

function Product({details, removeItem}:IProductProps
  ) {
  function removeBascketItem() {
    removeItem(details.id);
  }

  return (
    <div className="product">
      <img src={details.img} alt={details.title} className="basket__img" />
      <div className="product__content">
        <div className="product__item">
          <div className="product__desc">
            <h3 className="product__title basket__title">{details.title}</h3>
            <ul className="product__details">
              <li className="product__field-wrap">
                <p className="product__field">артикул:</p>
                <p className="product__value">{details.article}</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">Размер:</p>
                <p className="product__value">{details.size}</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">рост:</p>
                <p className="product__value">{details.size}</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">Количество:</p>
                <p className="product__value">{details.quantity}</p>
              </li>
            </ul>
          </div>
          <button className="product__remove-button" onClick={removeBascketItem}>Удалить</button>
        </div>
        <div className="product__footer">
          <div className="product__price-wrap">
            <p className="product__discount">{details.discount}</p>
            <p className="product__price basket__price">
              {details.price}<span className="basket__currency">₽</span>
            </p>
          </div>
          <div className="product__favorite-wrap">
            <p className="product__field product__field_type_favorite">
              В избранном
            </p>
            <button className="product__favorite"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
