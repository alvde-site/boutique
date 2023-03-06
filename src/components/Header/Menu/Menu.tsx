import { Link } from "react-router-dom";
import { IOpenModifierProps } from "../../../utils/interfaces";

function Menu(props: IOpenModifierProps) {
  return (
    <ul className={`menu ${props.modifier}`} onClick={props.openMenu}>
      <li>
        <a
          href="!#"
          className="menu__link  menu__text menu__link_more"
          onClick={props.openMenu}
        >
          МАГАЗИН
        </a>
      </li>
      <li>
        <a href="!#" className="menu__link menu__text">
          Доставка и оплата
        </a>
      </li>
      <li>
        <Link to="/contacts" className="menu__link menu__text">
          Адреса магазинов и контакты
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
