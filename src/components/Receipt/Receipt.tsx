import Content from "../Content/Content";

function Receipt() {
  const Recline = () => {
    return (
      <div className="recline">
        <p className="recline__lable">{`[A0118b-L-1]`}</p>
        <p className="recline__line">
          ...........................................................................................................
        </p>
        <p className="recline__value">{`8000р`}</p>
      </div>
    );
  };
  return (
    <Content>
      <div className="receipt">
        <h2 className="receipt__title">Спасибо</h2>
        <p className="receipt__subtitle">Ваши данные о заказе</p>
        <div className="receipt__products">
          <h3 className="receipt__field-title">Товары:</h3>
          <p className="receipt__product">Coral pleated panel dress blue</p>
          <Recline />
        </div>
      </div>
    </Content>
  );
}

export default Receipt;
