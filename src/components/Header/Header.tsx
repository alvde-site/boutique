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
        <RightHeaderMenu modifier={"nav__icon-menu"} />
      </nav>
      <StoreList
        onClose={props.onClose}
        isMenuOpen={props.isMenuOpen}
        openMenu={props.openMenu}
      />
    </header>
  );
}

export default Header;
