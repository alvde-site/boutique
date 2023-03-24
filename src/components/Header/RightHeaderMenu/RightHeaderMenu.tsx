import { selectAllAuth } from "../../../services/reducers/authSlice";
import { useAppSelector } from "../../../utils/hooks";
import { IRightHeaderMenuProps } from "../../../utils/interfaces";

function RightHeaderMenu(props: IRightHeaderMenuProps) {
  const auth = useAppSelector(selectAllAuth);
  function handleOpenPopup() {
    props.onPopupWithAuthOpen(true);
  }

  function hadleOpenBasket() {
    props.onPopupWithBasketOpen(true);
  }
  return (
    <div className={`icon-menu ${props.modifier}`}>
      {auth.loggedIn ? (
        <button
          className="icon-menu__button icon-menu__button_type_account"
          aria-label="Личный кабинет"
        >
        </button>
      ) : (
        <button
          onClick={handleOpenPopup}
          className="icon-menu__button  icon-menu__text icon-menu__button_type_enter"
        >
          Войти
        </button>
      )}
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
        onClick={hadleOpenBasket}
      >
        <span className="icon-menu__text">2</span>
      </button>
    </div>
  );
}

export default RightHeaderMenu;
