import { promoTitles } from "../../utils/constants";
import SwiperViewing from "../SwiperViewing/SwiperViewing";
import StoreList from "./StoreList/StoreList";

interface IHeaderProps {
  openMenu: () => void;
  isMenuOpen: boolean;
}

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
        <button className="nav__burger" aria-label="Меню"></button>
        <div className="nav__menu nav__menu_type_right">
          <button className="nav__button  nav__text nav__button_type_enter">
            Войти
          </button>
          <button
            className="nav__button nav__button_type_search"
            aria-label="Поиск"
          ></button>
          <button
            className="nav__button nav__button_type_favourite"
            aria-label="Избранное"
          ></button>
          <button
            className="nav__button nav__button_type_basket"
            aria-label="Корзина"
          >
            <span className="nav__text">2</span>
          </button>
        </div>
      </nav>
      <StoreList isMenuOpen={props.isMenuOpen}/>
      <section className="promo">
        <SwiperViewing promoTitles={promoTitles} />
      </section>
    </header>
  );
}

export default Header;
