import { Link } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks";
import { selectAllInOrder } from "../../../services/reducers/productsSlice";
import { useEffect, useState } from "react";

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
  return (
    <section className="account">
      <div className="account__menu">
        <Link className="account__signout-button" to="/">
          Выйти
        </Link>
        <div className="account__buttons">
          <button className="account__button">ЗАКАЗЫ</button>
          <button className="account__button">ПРОФИЛЬ</button>
        </div>
      </div>
      <div className="account__orders">
        <div className="account__images order">
          <div className="order__images">
            {orderProducts.map((details) => (
              <img src={details.img} alt={details.title}></img>
            ))}
          </div>
          <div className="order__description">
            <div className="order__field">
              <p className="order__lable">№ 2712</p>
              <p className="order__text">19.02.2022</p>
            </div>
            {orderProducts.map((details) => (
              <div className="order__field">
                <p className="order__lable">{details.title}</p>
                <p className="order__text">{details.price} ₽</p>
              </div>
            ))}
          </div>
          <div className="order__field">
            <p className="order__lable">комментарий:</p>
            <p className="order__text">комментарий: Мирон жду аванс</p>
          </div>
          <div className="order__field">
            <p className="order__lable">статус</p>
            <p className="order__text">в обработке</p>
          </div>
          <div className="order__field">
            <p className="order__lable">доставка</p>
            <p className="order__text">курьером за пределы мкад (790 ₽)</p>
          </div>
          <div className="order__field">
            <p className="order__lable">сумма</p>
            <p className="order__text">{totalPrice} ₽</p>
          </div>
          <div className="order__field">
            <p className="order__lable">трек номер</p>
            <p className="order__text">DF43FJOAP009</p>
          </div>
        </div>
        <div className="account__order order"></div>
      </div>
      <div className="account__profile"></div>
    </section>
  );
}

export default Account;
