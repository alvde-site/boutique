import { selectAllAuth } from "../../../services/reducers/authSlice";
import { handlePopupState } from "../../../services/reducers/popupsSlice";
import { MENU_POPUP } from "../../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { IRightHeaderMenuProps } from "../../../utils/interfaces";

function RightHeaderMenu(props: IRightHeaderMenuProps) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAllAuth);
  function handleOpenPopup() {
    props.onPopupWithAuthOpen(true);
  }

  function hadleOpenBasket() {
    props.onPopupWithBasketOpen(true);
  }

  function handleOpenFavourite() {
    props.onPopupWithFavouriteOpen(true);
    dispatch(
      handlePopupState({
        popupName: MENU_POPUP,
        handlePopupState: false,
      })
    );
  }
  return (
    <div className={`icon-menu ${props.modifier}`}>
      {auth.loggedIn ? (
        <button
          className="icon-menu__button icon-menu__button_type_account"
          aria-label="Личный кабинет"
        >
          &#129333;
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
        onClick={handleOpenFavourite}
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
