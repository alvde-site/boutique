function RightHeaderMenu() {
  return (
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
  );
}

export default RightHeaderMenu;
