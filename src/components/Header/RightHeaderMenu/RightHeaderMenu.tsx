import { IShowcaseProps } from "../../../utils/interfaces";

function RightHeaderMenu(props:IShowcaseProps) {
  return (
    <div className={`icon-menu ${props.modifier}`}>
      <button className="icon-menu__button  icon-menu__text icon-menu__button_type_enter">
        Войти
      </button>
      <button
        className="icon-menu__button icon-menu__button_type_search"
        aria-label="Поиск"
      ></button>
      <button
        className="icon-menu__button icon-menu__button_type_favourite"
        aria-label="Избранное"
      ></button>
      <button
        className="icon-menu__button icon-menu__button_type_basket"
        aria-label="Корзина"
      >
        <span className="icon-menu__text">2</span>
      </button>
    </div>
  );
}

export default RightHeaderMenu;
