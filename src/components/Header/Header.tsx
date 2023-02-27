import { promoTitles } from "../../utils/constants";
import { IHeaderProps } from "../../utils/interfaces";
import SwiperViewing from "../SwiperViewing/SwiperViewing";
import Menu from "./Menu/Menu";
import RightHeaderMenu from "./RightHeaderMenu/RightHeaderMenu";
import StoreList from "./StoreList/StoreList";

function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <nav className="nav">
        <Menu isMenuOpen={props.isMenuOpen} openMenu={props.openMenu} />
        <button
          className={`nav__burger ${props.isMenuOpen && "nav__burger_open"}`}
          aria-label="Меню"
          onClick={props.openMenu}
        ></button>
        <RightHeaderMenu modifier={"nav__icon-menu"} />
      </nav>
      <StoreList isMenuOpen={props.isMenuOpen} />
      <section className="promo">
        <SwiperViewing promoTitles={promoTitles} />
      </section>
    </header>
  );
}

export default Header;
