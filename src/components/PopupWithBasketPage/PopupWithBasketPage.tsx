import { IPopupWithBasketProps } from "../../utils/interfaces";
import PopupWithPage from "../PopupWithPage/PopupWithPage";
import Product from "./Product/Product";
import { productDetails } from "../../utils/constants";

function PopupWithBasketPage(props: IPopupWithBasketProps) {
  return (
    <PopupWithPage
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"basket"}
    >
      <div className="basket">
        <h2 className="basket__title">КОРЗИНА</h2>
        {productDetails.map((details) => <Product details={details} key={details.id}/>)}
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
