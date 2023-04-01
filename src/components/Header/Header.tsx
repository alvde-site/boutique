import { IHeaderProps } from "../../utils/interfaces";
import Menu from "./Menu/Menu";
import RightHeaderMenu from "./RightHeaderMenu/RightHeaderMenu";
import StoreList from "./StoreList/StoreList";

function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <nav className="nav">
        <Menu
          onClose={props.onClose}
          openMenu={props.openMenu}
          modifier="menu__position_nav"
        />
        <button
          className={`nav__burger ${props.isMenuOpen && "nav__burger_open"}`}
          aria-label="Меню"
          onClick={props.openMenu}
        ></button>
        <RightHeaderMenu modifier={"nav__icon-menu"} onPopupWithAuthOpen={props.onPopupWithAuthOpen} onPopupWithBasketOpen={props.onPopupWithBasketOpen} setIsMenuOpen={props.setIsMenuOpen}/>
      </nav>
      <StoreList
        onClose={props.onClose}
        setIsMenuOpen={props.setIsMenuOpen}
        isMenuOpen={props.isMenuOpen}
        openMenu={props.openMenu}
        onPopupWithAuthOpen={props.onPopupWithAuthOpen}
        onPopupWithBasketOpen={props.onPopupWithBasketOpen}
      />
    </header>
  );
}

export default Header;
