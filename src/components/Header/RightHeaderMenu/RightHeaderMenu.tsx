import { Link } from "react-router-dom";
import { selectAllAuth } from "../../../services/reducers/authSlice";
import { handlePopupState } from "../../../services/reducers/popupsSlice";
import { selectAllInBasket } from "../../../services/reducers/productsSlice";
import {
  AUTH_POPUP,
  BASKET_POPUP,
  FAVOURITE_POPUP,
  MENU_POPUP,
} from "../../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { IRightHeaderMenuProps } from "../../../utils/interfaces";

function RightHeaderMenu(props: IRightHeaderMenuProps) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAllAuth);
  const basketProducts = useAppSelector(selectAllInBasket);
  function handleOpenAuthPopup() {
    dispatch(handlePopupState({ popupName: AUTH_POPUP, popupState: true }));
  }

  function hadleOpenBasket() {
    dispatch(handlePopupState({ popupName: BASKET_POPUP, popupState: true }));
  }

  function handleOpenFavourite() {
    dispatch(
      handlePopupState({ popupName: FAVOURITE_POPUP, popupState: true })
    );
    dispatch(
      handlePopupState({
        popupName: MENU_POPUP,
        popupState: false,
      })
    );
  }
  return (
    <div className={`icon-menu ${props.modifier}`}>
      {auth.loggedIn ? (
        <Link
          to="/account"
          className="icon-menu__button icon-menu__button_type_account"
          aria-label="Личный кабинет"
        >
          &#129333;
        </Link>
      ) : (
        <button
          onClick={handleOpenAuthPopup}
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
        <span className="icon-menu__text">
          {basketProducts.length ? basketProducts.length : ""}
        </span>
      </button>
    </div>
  );
}

export default RightHeaderMenu;
