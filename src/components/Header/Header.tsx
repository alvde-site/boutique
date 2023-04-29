import {
  handlePopupState,
  menuPopup,
} from "../../services/reducers/popupsSlice";
import { MENU_POPUP } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { IHeaderProps } from "../../utils/interfaces";
import Menu from "./Menu/Menu";
import RightHeaderMenu from "./RightHeaderMenu/RightHeaderMenu";
import StoreList from "./StoreList/StoreList";

function Header(props: IHeaderProps) {
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
    <header className="header">
      <nav className="nav">
        <Menu modifier="menu__position_nav" />
        <button
          className={`nav__burger ${
            menuPopupState?.state && "nav__burger_open"
          }`}
          aria-label="Меню"
          onClick={handleMenuState}
        ></button>
        <RightHeaderMenu
          modifier={"nav__icon-menu"}
          onPopupWithAuthOpen={props.onPopupWithAuthOpen}
          onPopupWithBasketOpen={props.onPopupWithBasketOpen}
          onPopupWithFavouriteOpen={props.onPopupWithFavouriteOpen}
        />
      </nav>
      <StoreList
        onPopupWithAuthOpen={props.onPopupWithAuthOpen}
        onPopupWithBasketOpen={props.onPopupWithBasketOpen}
        onPopupWithFavouriteOpen={props.onPopupWithFavouriteOpen}
      />
    </header>
  );
}

export default Header;
