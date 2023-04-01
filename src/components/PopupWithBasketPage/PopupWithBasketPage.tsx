import { IPopupWithBasketProps } from "../../utils/interfaces";
import PopupWithPage from "../PopupWithPage/PopupWithPage";
import Product from "./Product/Product";

function PopupWithBasketPage(props: IPopupWithBasketProps) {
  return (
    <PopupWithPage
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"basket"}
    >
      <div className="basket">
        <h2 className="basket__title">КОРЗИНА</h2>
        <Product />
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
