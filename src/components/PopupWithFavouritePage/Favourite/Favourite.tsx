import { IFavouriteProps } from "../../../utils/interfaces";

function Favourite({ details }: IFavouriteProps) {
  return (
    <div className="favourite__card">
      <img src={details.img} alt="Штанцы" className="favourite__img" />
      <div className="favourite__content">
        <h3 className="favourite__title">{details.title}</h3>
        <div className="favourite__price-wrap">
          <p className="favourite__discount">{details.discount}</p>
          <p className="favourite__price">
            {details.price}
            <span className="favourite__currency">₽</span>
          </p>
        </div>
      </div>
      <div className="favourite__handle">
        <button className="favourite__button favourite__button_state_add">добавить в корзину</button>
        <button className="favourite__button favourite__button_state_added">ДОБАВЛЕНО</button>
        <button className="favourite__button favourite__button_state_remove">Убрать из избранного</button>
      </div>
    </div>
  );
}

export default Favourite;
