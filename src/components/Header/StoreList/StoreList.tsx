import { Link } from "react-router-dom";
import {
  handlePopupState,
  menuPopup,
} from "../../../services/reducers/popupsSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import Showcase from "../../Showcase/Showcase";
import Menu from "../Menu/Menu";
import RightHeaderMenu from "../RightHeaderMenu/RightHeaderMenu";
import {
  MENU_POPUP,
  categoryFotos,
  categoryPath,
  collectionFotos,
  collectionPath,
} from "../../../utils/constants";

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
            <Link
              className="store__link"
              to={categoryPath[1].path}
              onClick={closeMenu}
            >
              <h2 className="store__title">Категории</h2>
            </Link>
            <ul className="store__links">
              {categoryFotos.map((item, i) => (
                <li key={i}>
                  <Link
                    className="store__link"
                    onClick={closeMenu}
                    to="category/dress"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="store__collection">
            <div>
              <Link
                className="store__link"
                to={collectionPath[1].path}
                onClick={closeMenu}
              >
                <h2 className="store__title">коллекции</h2>
              </Link>
              <ul className="store__links">
                {collectionFotos.slice(0, 3).map((item, i) => (
                  <li key={i}>
                    <Link
                      className="store__link"
                      onClick={closeMenu}
                      to="category/dress"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
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
