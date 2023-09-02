interface IOrderProps {
  order: JSX.Element | undefined;
  productImg: string;
}

function Order({ order, productImg }: IOrderProps) {
  return (
    <>
      {order}
      <div className="account__order order">
        <div className="order__images">
          <img
            className="order__image"
            src={productImg}
            alt="Denim effect pants"
          ></img>
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
    </>
  );
}

export default Order;
