import { promoTitles } from "../../utils/constants";
import { IHeaderProps } from "../../utils/interfaces";
import SwiperViewing from "../SwiperViewing/SwiperViewing";
import RightHeaderMenu from "./RightHeaderMenu/RightHeaderMenu";
import StoreList from "./StoreList/StoreList";

function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__menu nav__menu_type_left">
          <a
            href="!#"
            className="nav__link  nav__text nav__link_more"
            onClick={props.openMenu}
          >
            МАГАЗИН
          </a>
          <a href="!#" className="nav__link nav__text">
            Доставка и оплата
          </a>
          <a href="!#" className="nav__link nav__text">
            Адреса магазинов и контакты
          </a>
        </div>
        <button
          className={`nav__burger ${props.isMenuOpen&&"nav__burger_open"}`}
          aria-label="Меню"
          onClick={props.openMenu}
        ></button>
        <RightHeaderMenu modifier={"nav__icon-menu"}/>
      </nav>
      <StoreList isMenuOpen={props.isMenuOpen} />
      <section className="promo">
        <SwiperViewing promoTitles={promoTitles} />
      </section>
    </header>
  );
}

export default Header;
