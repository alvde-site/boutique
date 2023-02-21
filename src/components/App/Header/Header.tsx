function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__menu nav__menu_type_left">
          <a href="!#" className="nav__link  nav__text nav__link_more">
            МАГАЗИН
          </a>
          <a href="!#" className="nav__link nav__text">
            Доставка и оплата
          </a>
          <a href="!#" className="nav__link nav__text">
            Адреса магазинов и контакты
          </a>
        </div>
        <div className="nav__menu nav__menu_type_right">
          <button className="nav__button  nav__text nav__button_type_enter">Войти</button>
          <button className="nav__button nav__button_type_search" aria-label="Поиск"></button>
          <button className="nav__button nav__button_type_favourite" aria-label="Избранное"></button>
          <button className="nav__button nav__button_type_basket" aria-label="Корзина"><span className="nav__text">2</span></button>
        </div>
      </nav>
      <section className="promo"></section>
    </header>
  );
}

export default Header;
