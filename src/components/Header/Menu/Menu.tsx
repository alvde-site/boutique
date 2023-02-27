import { IHeaderProps } from "../../../utils/interfaces";

function Menu(props: IHeaderProps) {
  return (
    <div className="menu menu__type_left">
      <a
        href="!#"
        className="menu__link  menu__text menu__link_more"
        onClick={props.openMenu}
      >
        МАГАЗИН
      </a>
      <a href="!#" className="menu__link menu__text">
        Доставка и оплата
      </a>
      <a href="!#" className="menu__link menu__text">
        Адреса магазинов и контакты
      </a>
    </div>
  );
}

export default Menu;
