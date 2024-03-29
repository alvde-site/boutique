import { Link } from "react-router-dom";
import {
  handlePopupState,
  menuPopup,
} from "../../services/reducers/popupsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Showcase from "../Showcase/Showcase";
import Menu from "../Menu/Menu";
import RightHeaderMenu from "../RightHeaderMenu/RightHeaderMenu";
import {
  MENU_POPUP,
  categoryPath,
  collectionPath,
} from "../../utils/constants";
import { categoryBD, collectionBD } from "../../utils/boutiqueBD";

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
              {categoryBD.map((item, i) => (
                <li key={i}>
                  <Link
                    className="store__link"
                    onClick={closeMenu}
                    to={`category/${item.id}`}
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
                {collectionBD.slice(0, 3).map((item, i) => (
                  <li key={i}>
                    <Link
                      className="store__link"
                      onClick={closeMenu}
                      to={`collection/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
