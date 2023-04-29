import PopupWithPage from "../PopupWithPage/PopupWithPage";
import Product from "./Product/Product";
import { productDetails } from "../../utils/constants";
import { useState, useEffect } from "react";

function PopupWithBasketPage() {
  const [productList, setProductList] = useState(productDetails);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (productList.length) {
      const total = productList.map((e) => e.price).reduce((a, c) => a + c);
      setTotalPrice(() => total);
    } else {
      setTotalPrice(() => 0);
    }
  }, [productList]);

  function removeBascketItem(id: string) {
    setProductList((list) => list.filter((e) => e.id !== id));
  }

  return (
    <PopupWithPage name={"basket"}>
      <div className="basket">
        <h2 className="basket__title">КОРЗИНА</h2>
        {productList.map((details) => (
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
            !productList.length ? " total__button_disabled" : ""
          }`}
          disabled={!productList.length}
        >
          перейти к Оформлению
        </button>
      </div>
    </PopupWithPage>
  );
}

export default PopupWithBasketPage;
