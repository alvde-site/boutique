import {
  handlePopupState,
  menuPopup,
} from "../../services/reducers/popupsSlice";
import { MENU_POPUP } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Menu from "../Menu/Menu";
import RightHeaderMenu from "../RightHeaderMenu/RightHeaderMenu";
import StoreList from "../StoreList/StoreList";

function Nav() {
  const dispatch = useAppDispatch();
  function handleMenuState() {
    dispatch(
      handlePopupState({
        popupName: MENU_POPUP,
        popupState: !menuPopupState?.state,
      })
    );
  }
  const menuPopupState = useAppSelector(menuPopup);
  return (
    <nav className="nav">
      <div className="nav__content">
        <Menu modifier="menu__position_nav" />
        <button
          className={`nav__burger ${
            menuPopupState?.state && "nav__burger_open"
          }`}
          aria-label="Меню"
          onClick={handleMenuState}
        ></button>
        <RightHeaderMenu modifier={"nav__icon-menu"} />
      </div>
      <StoreList />
    </nav>
  );
}

export default Nav;
