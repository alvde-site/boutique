import { IPopupWithBasketProps } from "../../utils/interfaces";
import PopupWithPage from "../PopupWithPage/PopupWithPage";
import basket1 from "../../images/basket1.jpg";

function PopupWithBasketPage(props: IPopupWithBasketProps) {
  return (
    <PopupWithPage
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"basket"}
    >
      <div className="basket">
        <h2 className="basket__title">КОРЗИНА</h2>
        <div className="basket__card">
          <img src={basket1} alt="Штанцы" className="basket__img" />
          <div className="basket__content">
            <div className="basket__product">
              <div className="basket__desc">
                <h3 className="basket__title">Coral pleated panel dress</h3>
                <ul className="basket__details">
                  <li className="basket__field-wrap">
                    <p className="basket__field">артикул:</p>
                    <p className="basket__value">А0118</p>
                  </li>
                  <li className="basket__field-wrap">
                    <p className="basket__field">Размер:</p>
                    <p className="basket__value">L</p>
                  </li>
                  <li className="basket__field-wrap">
                    <p className="basket__field">рост:</p>
                    <p className="basket__value">160</p>
                  </li>
                  <li className="basket__field-wrap">
                    <p className="basket__field">Количество:</p>
                    <p className="basket__value">1</p>
                  </li>
                </ul>
              </div>
              <button className="basket__remove-button">Удалить</button>
            </div>
            <div className="basket__card-footer">
              <div className="basket__price-wrap">
                <p className="basket__discount">15500</p>
                <p className="basket__price">
                  8000<span className="basket__currency">₽</span>
                </p>
              </div>
              <div className="basket__favorite-wrap">
                <p className="basket__field basket__field_type_favorite">В избранном</p>
                <button className="basket__favorite"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <p className="total__text basket__title">ИТОГ</p>
          <p className="total__price basket__price">
            46000 <span className="total__currency basket__currency">₽</span>
          </p>
        </div>
        <button className="total__button">перейти к Оформлению</button>
      </div>
    </PopupWithPage>
  );
}

export default PopupWithBasketPage;
