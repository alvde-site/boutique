import { useEffect, useState } from "react";
import { selectAllInBasket } from "../../services/reducers/productsSlice";
import { useAppSelector } from "../../utils/hooks";
import Content from "../Content/Content";
import { IReclinePriceProps, IReclineUserProps } from "../../utils/interfaces";
import ButtonAccount from "../ButtonAccount/ButtonAccount";
import { useNavigate } from "react-router-dom";
import { qr } from "../../utils/constants";

function Receipt() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/account");
  };

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
            <ReclineUserData
              data={{
                title: "Имя:",
                content: "Александр",
              }}
            />
            <div className="recline-content">
              <p className="recline__short-line">***</p>
            </div>
            <ReclineUserData
              data={{
                title: "Адрес:",
                content: "Граничная 9",
              }}
            />
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
              content: "12.01.2023 14:56",
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
