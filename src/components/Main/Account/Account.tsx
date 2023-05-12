import { Link } from "react-router-dom";
import { product2, product3, product4 } from "../../../utils/constants";

function Account() {
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
        <div className="account__order order">
          <div className="order__images">
            <img src={product2} alt="фото"></img>
            <img src={product3} alt="фото"></img>
            <img src={product4} alt="фото"></img>
          </div>
          <div className="order__description"></div>
        </div>
        <div className="account__order order"></div>
      </div>
      <div className="account__profile"></div>
    </section>
  );
}

export default Account;
