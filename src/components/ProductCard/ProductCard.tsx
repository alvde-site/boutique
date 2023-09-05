function ProductCard() {

  return (
    <div className="product">
      <div className="product__content">
        <div className="product__item">
          <div className="product__desc">
            <ul className="product__details">
              <li className="product__field-wrap">
                <p className="product__field">артикул:</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">Размер:</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">рост:</p>
              </li>
              <li className="product__field-wrap">
                <p className="product__field">Количество:</p>
              </li>
            </ul>
          </div>
          <button
            className="product__remove-button"
          >
            Удалить
          </button>
        </div>
        <div className="product__footer">
          <div className="product__price-wrap">
            <p className="product__price basket__price">
              <span className="basket__currency">₽</span>
            </p>
          </div>
          <div className="product__favourite-wrap">
            <p className="product__field product__field_type_favourite">
            </p>
            <button
              className={`product__favourite`}
              aria-label="Избранное"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
