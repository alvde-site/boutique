import { Link } from "react-router-dom";
import { IMenuProps } from "../../../utils/interfaces";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import {
  closeAllPopups,
  handlePopupState,
  menuPopup,
} from "../../../services/reducers/popupsSlice";
import { MENU_POPUP } from "../../../utils/constants";

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
          to="/"
          className="menu__link  menu__text menu__link_more"
          onClick={handleMenuState}
        >
          МАГАЗИН
        </Link>
      </li>
      <li>
        <Link
          onClick={handleClosePopup}
          to="/"
          className="menu__link menu__text menu__link_main"
        >
          Главная
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
          Адреса магазинов и контакты
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
