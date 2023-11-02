import { useEffect, useState } from "react";
import { selectAllInBasket } from "../../services/reducers/productsSlice";
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

function Receipt() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/account");
  };
  const auth = useAppSelector(selectAllAuth);
  const users = useAppSelector(selectAllUsers);
  let currentUser = users.find((u) => u.id === auth.userId);
  const noAuthUser = useAppSelector(selectNoAuthUser);
  let userIdents: any = [];
  let userAddress: any = [];

  const createUserInents = (userData: any) => {
    const user = [];
    for (let key in userData) {
      switch (key) {
        case "name":
          user.push({
            lable: "Имя:",
            value: userData[key as keyof typeof userData],
          });
          break;
        case "surname":
          user.push({
            lable: "Фамилия:",
            value: userData[key as keyof typeof userData],
          });
          break;
        case "email":
          user.push({
            lable: "E-mail:",
            value: userData[key as keyof typeof userData],
          });
          break;
        case "tel":
          user.push({
            lable: "Тел:",
            value: userData[key as keyof typeof userData],
          });
          break;
        default:
          break;
      }
    }
    return user;
  };

  const createUserAddress = (userData: any) => {
    const user = [];
    for (let key in userData) {
      switch (key) {
        case "city":
          user.push({
            lable: "Улица:",
            value: userData[key as keyof typeof userData],
          });
          break;
        case "street":
          user.push({
            lable: "Адрес:",
            value: userData[key as keyof typeof userData],
          });
          break;
        default:
          break;
      }
    }
    return user;
  };

  if (currentUser) {
    userIdents = createUserInents(currentUser);
    userAddress = createUserAddress(currentUser);
  } else {
    userIdents = createUserInents(noAuthUser);
    userAddress = createUserAddress(noAuthUser);
  }

  let today = new Date();

  let now = today.toLocaleString("ru-RU");

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

  const [totalRecline, setTotalRecline] = useState(0);
  const basketProducts = useAppSelector(selectAllInBasket);
  const receiptProducts = basketProducts.map((e) => {
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
  useEffect(() => {
    if (basketProducts.length) {
      const total = basketProducts.map((e) => e.price).reduce((a, c) => a + c);
      setTotalRecline(() => total);
    } else {
      setTotalRecline(() => 0);
    }
  }, [basketProducts, totalRecline]);

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
            {userIdents.map((e: any) => (
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
            {userAddress.map((e: any) => (
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
