import { IHeaderProps } from "../../../utils/interfaces";

function Menu(props: IHeaderProps) {
  return (
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
  );
}

export default Menu;
