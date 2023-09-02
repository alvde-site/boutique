import { Link } from "react-router-dom";
import { IMenuProps } from "../../utils/interfaces";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  closeAllPopups,
  handlePopupState,
  menuPopup,
} from "../../services/reducers/popupsSlice";
import { MENU_POPUP } from "../../utils/constants";

function Menu(props: IMenuProps) {
  const dispatch = useAppDispatch();
  const menuPopupState = useAppSelector(menuPopup);
  const handleMenuState = () => {
    dispatch(
      handlePopupState({
        popupName: MENU_POPUP,
        popupState: !menuPopupState?.state,
      })
    );
  };

  const handleClosePopup = () => {
    dispatch(closeAllPopups());
  };

  return (
    <ul className={`menu ${props.modifier}`}>
      <li>
        <Link
          onClick={handleClosePopup}
          to="/"
          className="menu__link menu__text"
        >
          Главная
        </Link>
      </li>
      <li className="menu__item menu__item_small">
        <Link
          to=""
          className="menu__link  menu__text"
          onClick={handleMenuState}
        >
          МАГАЗИН
        </Link>
      </li>
      <li>
        <Link
          onClick={handleClosePopup}
          to="/conditions"
          className="menu__link menu__text"
        >
          Доставка и оплата
        </Link>
      </li>
      <li>
        <Link
          onClick={handleClosePopup}
          to="/contacts"
          className="menu__link menu__text"
        >
          Контакты
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
