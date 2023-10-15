import { useEffect, useState } from "react";
import { selectAllInBasket } from "../../services/reducers/productsSlice";
import { useAppSelector } from "../../utils/hooks";
import Content from "../Content/Content";
import { IReclineProps } from "../../utils/interfaces";

function Receipt() {
  const Recline = ({ product }: IReclineProps) => {
    return (
      <>
        <div className="recline">
          <p className="recline__product">{product.title}</p>
        </div>
        <div className="recline">
          <p className="recline__lable">{`${product.article}`}</p>
          <p className="recline__line">
            ...........................................................................................................
          </p>
          <p className="recline__value">{`${product.price}р`}</p>
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
          <h3 className="receipt__field-title">Товары:</h3>
          {receiptProducts.map((product) => (
            <Recline product={product} key={product.id} />
          ))}
          <p className="receipt__product-total">
            <Recline
              product={totalReceiptProducts}
              key={totalReceiptProducts.id}
            />
          </p>
        </div>
      </div>
    </Content>
  );
}

export default Receipt;
