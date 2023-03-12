import { Link } from "react-router-dom";
import { IMenuProps } from "../../../utils/interfaces";

function Menu(props: IMenuProps) {
  return (
    <ul className={`menu ${props.modifier}`}>
      <li>
        <Link
          to="/"
          className="menu__link  menu__text menu__link_more"
          onClick={props.openMenu}
        >
          МАГАЗИН
        </Link>
      </li>
      <li>
        <Link onClick={props.onClose} to="/" className="menu__link menu__text menu__link_main">
          Главная
        </Link>
      </li>
      <li>
        <Link onClick={props.onClose} to="/conditions" className="menu__link menu__text">
          Доставка и оплата
        </Link>
      </li>
      <li>
        <Link onClick={props.onClose} to="/contacts" className="menu__link menu__text">
          Адреса магазинов и контакты
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
