import PopupWithPage from "../PopupWithPage/PopupWithPage";
import Product from "../Product/Product";
import { BASKET_POPUP, ORDERING_POPUP } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  removeBasketProduct,
  selectAllInBasket,
} from "../../services/reducers/productsSlice";
import IsEmpty from "../IsEmpty/IsEmpty";
import { handlePopupState } from "../../services/reducers/popupsSlice";
import { handleToElementScroll } from "../../utils/utils";
import { selectAllAuth } from "../../services/reducers/authSlice";

function PopupWithBasketPage() {
  const scrollElement = document.getElementsByClassName("ordering")[0];
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const auth = useAppSelector(selectAllAuth);
  const basketProducts = useAppSelector(selectAllInBasket);
  const filteredBasketProducts = basketProducts.filter(
    (p) => p.isInBasket.includes("noauth") || p.isInBasket.includes(auth.userId)
  );

  useEffect(() => {
    if (filteredBasketProducts.length) {
      const total = filteredBasketProducts
        .map((e) => e.price)
        .reduce((a, c) => a + c);
      setTotalPrice(() => total);
    } else {
      setTotalPrice(() => 0);
    }
  }, [filteredBasketProducts]);

  function removeBascketItem(id: string, userId: string) {
    dispatch(removeBasketProduct({ productId: id, userId }));
  }

  function handlePurchase() {
    dispatch(handlePopupState({ popupName: BASKET_POPUP, popupState: false }));
    dispatch(handlePopupState({ popupName: ORDERING_POPUP, popupState: true }));
    handleToElementScroll(scrollElement);
  }

  let content;
  if (filteredBasketProducts.length) {
    content = filteredBasketProducts.map((product) => (
      <Product
        product={product}
        key={product.id}
        removeItem={removeBascketItem}
      />
    ));
  } else {
    content = <IsEmpty />;
  }

  return (
    <PopupWithPage name={BASKET_POPUP} title="Корзина">
      {content}
      <div className="total">
        <p className="total__text basket__title">ИТОГ:</p>
        <p className="total__price basket__price">
          {totalPrice}
          <span className="total__currency basket__currency">₽</span>
        </p>
      </div>
      <button
        className={`total__button${
          !filteredBasketProducts.length ? " total__button_disabled" : ""
        }`}
        disabled={!filteredBasketProducts.length}
        onClick={handlePurchase}
      >
        перейти к Оформлению
      </button>
    </PopupWithPage>
  );
}

export default PopupWithBasketPage;
