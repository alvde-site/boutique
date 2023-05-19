import { Link } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks";
import { selectAllInOrder } from "../../../services/reducers/productsSlice";
import { useEffect, useState } from "react";
import { product1 } from "../../../utils/constants";

function Account() {
  const [totalPrice, setTotalPrice] = useState(0);
  const orderProducts = useAppSelector(selectAllInOrder);
  useEffect(() => {
    if (orderProducts.length) {
      const total = orderProducts.map((e) => e.price).reduce((a, c) => a + c);
      setTotalPrice(() => total);
    } else {
      setTotalPrice(() => 0);
    }
  }, [orderProducts]);

  let order;

  if (orderProducts.length) {
    if (orderProducts.length) {
      order = (
        <div className="account__order order">
          <div className="order__images">
            {orderProducts.map((details) => (
              <img className="order__image" src={details.img} alt={details.title} key={details.id}></img>
            ))}
          </div>
          <div className="order__description">
            <div className="order__field">
              <p className="order__label">№ 2712</p>
              <p className="order__text">19.02.2022</p>
            </div>
            {orderProducts.map((details) => (
              <div className="order__field" key={details.id}>
                <p className="order__label">{details.title}</p>
                <p className="order__text">{details.price} ₽</p>
              </div>
            ))}
            <div className="order__field">
              <p className="order__label">комментарий:</p>
              <p className="order__text">Мирон жду аванс</p>
            </div>
            <div className="order__field">
              <p className="order__label">статус</p>
              <p className="order__text">в обработке</p>
            </div>
            <div className="order__field">
              <p className="order__label">доставка</p>
              <p className="order__text">курьером за пределы мкад (790 ₽)</p>
            </div>
            <div className="order__field">
              <p className="order__label">сумма</p>
              <p className="order__text">{totalPrice} ₽</p>
            </div>
            <div className="order__field">
              <p className="order__label">трек номер</p>
              <p className="order__text">DF43FJOAP009</p>
            </div>
            <button className="order__button">Отменить этот заказ</button>
          </div>
        </div>
      );
    } else {
      <></>;
    }
  }

  return (
    <section className="account">
      <div className="account__menu">
        <div className="account__signout">
          <Link className="account__signout-button" to="/">
            Выйти
          </Link>
        </div>
        <div className="account__buttons">
          <button className="account__button account__button_active">
            ЗАКАЗЫ
          </button>
          <button className="account__button">ПРОФИЛЬ</button>
        </div>
      </div>
      <div className="account__content">
        <div className="account__orders">
          {order}
          <div className="account__order order">
            <div className="order__images">
              <img className="order__image" src={product1} alt="Denim effect pants"></img>
            </div>
            <div className="order__description">
              <div className="order__field">
                <p className="order__label">№ 2712</p>
                <p className="order__text">19.02.2022</p>
              </div>
              <div className="order__field">
                <p className="order__label">Denim effect pants [x1]</p>
                <p className="order__text">8000 ₽</p>
              </div>
              <div className="order__field">
                <p className="order__label">комментарий:</p>
                <p className="order__text">-</p>
              </div>
              <div className="order__field">
                <p className="order__label">статус</p>
                <p className="order__text">Доставлен</p>
              </div>
              <div className="order__field">
                <p className="order__label">доставка</p>
                <p className="order__text">курьер (490 ₽)</p>
              </div>
              <div className="order__field">
                <p className="order__label">сумма</p>
                <p className="order__text">8490 ₽</p>
              </div>
              <div className="order__field">
                <p className="order__label">трек номер</p>
                <p className="order__text">DF43FJOAP009</p>
              </div>
            </div>
          </div>
        </div>
        <div className="account__profile"></div>
      </div>
    </section>
  );
}

export default Account;
