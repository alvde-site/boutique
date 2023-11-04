import { useEffect, useState } from "react";
import { useAppSelector } from "../../utils/hooks";
import Content from "../Content/Content";
import { IReclinePriceProps, IReclineUserProps } from "../../utils/interfaces";
import ButtonAccount from "../ButtonAccount/ButtonAccount";
import { useNavigate } from "react-router-dom";
import { qr } from "../../utils/constants";
import { selectAllAuth } from "../../services/reducers/authSlice";
import {
  selectAllUsers,
  selectNoAuthUser,
} from "../../services/reducers/usersSlice";
import { createUserAddress, createUserInents } from "../../utils/utils";
import { selectAllInOrders } from "../../services/reducers/ordersSlice";

function Receipt() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/account");
  };
  const auth = useAppSelector(selectAllAuth);
  const users = useAppSelector(selectAllUsers);
  let currentUser = users.find((u) => u.id === auth.userId);
  const noAuthUser = useAppSelector(selectNoAuthUser);
  const orders = useAppSelector(selectAllInOrders);
  let userIdents = [];
  let userAddress = [];

  let today = new Date();

  let now = today.toLocaleString("ru-RU");

  const [totalRecline, setTotalRecline] = useState(0);
  // const basketProducts = useAppSelector(selectAllInBasket);
  const receiptProducts = orders.map((e) => {
    return {
      title: e.title,
      article: `[${e.article}]`,
      price: e.price,
      id: e.id,
    };
  });
  const totalReceiptProducts = {
    title: "",
    article: "Итого:",
    price: totalRecline,
    id: "totalProducts",
  };
  if (currentUser) {
    userIdents = createUserInents(currentUser);
    userAddress = createUserAddress(currentUser);
  } else {
    userIdents = createUserInents(noAuthUser);
    userAddress = createUserAddress(noAuthUser);
  }

  useEffect(() => {
    if (orders.length) {
      const total = orders.map((e) => e.price).reduce((a, c) => a + c);
      setTotalRecline(() => total);
    } else {
      setTotalRecline(() => 0);
    }
  }, [orders, totalRecline]);
  const ReclinePrice = ({ product }: IReclinePriceProps) => {
    return (
      <>
        <div className="recline">
          <p className="recline__product-title">{product.title}</p>
          <div className="recline-content">
            <p className="recline__lable">{`${product.article}`}</p>
            <p className="recline__line">
              ......................................................................................................................................................................................................................
            </p>
            <p className="recline__value">{`${product.price}р`}</p>
          </div>
        </div>
      </>
    );
  };

  const ReclineUserData = ({ data }: IReclineUserProps) => {
    return (
      <>
        <div className="recline">
          <div className="recline-content">
            <p className="recline__lable">{`${data.title}`}</p>
            <p className="recline__line">
              ......................................................................................................................................................................................................................
            </p>
            <p className="recline__value">{`${data.content}`}</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <Content>
      <div className="receipt">
        <h2 className="receipt__title">Спасибо</h2>
        <p className="receipt__subtitle">Ваши данные о заказе</p>
        <div className="receipt__products">
          <div className="recline-content receipt__line">
            <p className="recline__line">
              --------------------------------------------------------------------
            </p>
          </div>
          <h3 className="receipt__field-title">Товары:</h3>
          {receiptProducts.map((product) => (
            <ReclinePrice product={product} key={product.id} />
          ))}
          <div className="receipt__product-total">
            <ReclinePrice
              product={totalReceiptProducts}
              key={totalReceiptProducts.id}
            />
          </div>
          <div className="receipt__user-info">
            <div className="recline-content">
              <p className="recline__line">
                ****************************************************************************************************************************
              </p>
            </div>
            <h3 className="receipt__field-title">Данные:</h3>
            {userIdents.map((e) => (
              <ReclineUserData
                key={e.lable}
                data={{
                  title: `${e.lable}`,
                  content: `${e.value}`,
                }}
              />
            ))}
            <div className="recline-content">
              <p className="recline__short-line">***</p>
            </div>
            {userAddress.map((e) => (
              <ReclineUserData
                key={e.lable}
                data={{
                  title: `${e.lable}`,
                  content: `${e.value}`,
                }}
              />
            ))}
          </div>
          <div className="recline__rectangle"></div>
          <div className="recline__qr">
            <p className="recline__order-number">Номер заказа: 8176</p>
            <img src={qr} alt="КьюАр код" className="recline__qr-image" />
            <p className="recline__text">Спасибо за покупку!</p>
          </div>
          <ReclineUserData
            data={{
              title: "Дата:",
              content: `${now}`,
            }}
          />
        </div>
        <ButtonAccount
          handleSubmit={handleSubmit}
          buttonText="Вернуться в личный кабинет"
          className=""
        />
      </div>
    </Content>
  );
}

export default Receipt;
