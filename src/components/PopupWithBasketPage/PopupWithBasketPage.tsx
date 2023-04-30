import PopupWithPage from "../PopupWithPage/PopupWithPage";
import Product from "./Product/Product";
import { BASKET_POPUP } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  removeBasketProduct,
  selectAllInBasket,
} from "../../services/reducers/productsSlice";

function PopupWithBasketPage() {
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const basketProducts = useAppSelector(selectAllInBasket);
  useEffect(() => {
    if (basketProducts.length) {
      const total = basketProducts.map((e) => e.price).reduce((a, c) => a + c);
      setTotalPrice(() => total);
    } else {
      setTotalPrice(() => 0);
    }
  }, [basketProducts]);

  function removeBascketItem(id: string) {
    dispatch(removeBasketProduct({ productId: id }));
  }

  return (
    <PopupWithPage name={BASKET_POPUP}>
      <div className="basket">
        <h2 className="basket__title">КОРЗИНА</h2>
        {basketProducts.map((details) => (
          <Product
            details={details}
            key={details.id}
            removeItem={removeBascketItem}
          />
        ))}
        <div className="total">
          <p className="total__text basket__title">ИТОГ</p>
          <p className="total__price basket__price">
            {totalPrice}
            <span className="total__currency basket__currency">₽</span>
          </p>
        </div>
        <button
          className={`total__button${
            !basketProducts.length ? " total__button_disabled" : ""
          }`}
          disabled={!basketProducts.length}
        >
          перейти к Оформлению
        </button>
      </div>
    </PopupWithPage>
  );
}

export default PopupWithBasketPage;
