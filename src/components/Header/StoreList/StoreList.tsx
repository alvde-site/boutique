import { Link } from "react-router-dom";
import {
  handlePopupState,
  menuPopup,
} from "../../../services/reducers/popupsSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import Showcase from "../../Showcase/Showcase";
import Menu from "../Menu/Menu";
import RightHeaderMenu from "../RightHeaderMenu/RightHeaderMenu";
import { MENU_POPUP } from "../../../utils/constants";

function StoreList() {
  const dispatch = useAppDispatch();
  const menuPopupState = useAppSelector(menuPopup);
  function closeMenu() {
    dispatch(
      handlePopupState({
        popupName: MENU_POPUP,
        popupState: !menuPopupState?.state,
      })
    );
  }
  return (
    <section className={`store ${menuPopupState?.state && "store_open"}`}>
      <RightHeaderMenu modifier="store__icon-menu" />
      <Menu modifier="store__link-menu" />
      <div className="store__wrapper">
        <div className="store__content">
          <div className="store__category">
            <h2 className="store__title" onClick={closeMenu}>
              Категории
            </h2>
            <p className="store__subtitle" onClick={closeMenu}>
              Sale
            </p>
            <ul className="store__links">
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Костюмы
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  платья
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Верхняя одежда
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Свитер
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Олимпийки
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  худи и свитшоты
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  юбки
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Брюки
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Футболки
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  жакеты
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  блузки
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Водолазки
                </Link>
              </li>
              <li>
                <Link
                  className="store__link"
                  onClick={closeMenu}
                  to="category/dress"
                >
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>
          <div className="store__collection">
            <div>
              <h2 className="store__title">коллекции</h2>
              <p className="store__subtitle">cRUISE 2022</p>
              <ul className="store__links">
                <li>
                  <a
                    className="store__link"
                    href="https://github.com/alvde-site"
                  >
                    Urban Vogue
                  </a>
                </li>
                <li>
                  <a
                    className="store__link"
                    href="https://github.com/alvde-site"
                  >
                    Punk Couture
                  </a>
                </li>
                <li>
                  <a
                    className="store__link"
                    href="https://github.com/alvde-site"
                  >
                    Moscow Fashion Week
                  </a>
                </li>
              </ul>
            </div>
            <div className="store__advertisement advertisement">
              <h3 className="advertisement__title">cRUISE 2022</h3>
              <p className="advertisement__subtitle">
                Рады рассказать вам о недавнем мероприятии, в котором мы
                поучаствовали и представили на ней новую коллекцию йоу
              </p>
            </div>
          </div>
          <div className="store__new">
            <h2 className="store__title">Новинки</h2>
            <Showcase modifier="showcase_position_header" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreList;
