import { IStoreListProps } from "../../../utils/interfaces";
import Showcase from "../../Showcase/Showcase";
import Menu from "../Menu/Menu";
import RightHeaderMenu from "../RightHeaderMenu/RightHeaderMenu";

function StoreList(props: IStoreListProps) {
  return (
    <section className={`store ${props.isMenuOpen && "store_open"}`}>
      <RightHeaderMenu modifier="store__icon-menu" onPopupWithAuthOpen={props.onPopupWithAuthOpen}/>
      <Menu
        onClose={props.onClose}
        openMenu={props.openMenu}
        modifier="store__link-menu"
      />
      <div className="store__wrapper">
        <div className="store__content">
          <div className="store__category">
            <h2 className="store__title">Категории</h2>
            <p className="store__subtitle">Sale</p>
            <ul className="store__links">
              <li>
                <a className="store__link" href="!#">
                  Костюмы
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  платья
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Верхняя одежда
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Свитер
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Олимпийки
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  худи и свитшоты
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  юбки
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Брюки
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Футболки
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  жакеты
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  блузки
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Водолазки
                </a>
              </li>
              <li>
                <a className="store__link" href="!#">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>
          <div className="store__collection">
            <div>
              <h2 className="store__title">коллекции</h2>
              <p className="store__subtitle">cRUISE 2022</p>
              <ul className="store__links">
                <li>
                  <a className="store__link" href="!#">
                    Urban Vogue
                  </a>
                </li>
                <li>
                  <a className="store__link" href="!#">
                    Punk Couture
                  </a>
                </li>
                <li>
                  <a className="store__link" href="!#">
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
