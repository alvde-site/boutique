import basket1 from "../../../images/basket1.jpg";

function Product() {
  return (
    <div className="product">
        <img src={basket1} alt="Штанцы" className="basket__img" />
        <div className="product__content">
          <div className="product__itemm">
            <div className="product__desc">
              <h3 className="product__title basket__title">Coral pleated panel dress</h3>
              <ul className="product__details">
                <li className="product__field-wrap">
                  <p className="product__field">артикул:</p>
                  <p className="product__value">А0118</p>
                </li>
                <li className="product__field-wrap">
                  <p className="product__field">Размер:</p>
                  <p className="product__value">L</p>
                </li>
                <li className="product__field-wrap">
                  <p className="product__field">рост:</p>
                  <p className="product__value">160</p>
                </li>
                <li className="product__field-wrap">
                  <p className="product__field">Количество:</p>
                  <p className="product__value">1</p>
                </li>
              </ul>
            </div>
            <button className="product__remove-button">Удалить</button>
          </div>
          <div className="product__footer">
            <div className="product__price-wrap">
              <p className="product__discount">15500</p>
              <p className="product__price basket__price">
                8000<span className="basket__currency">₽</span>
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
