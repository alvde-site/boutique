import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <Nav />
      <div className="header__content">
        <Link className="header__logo" to="/"></Link>
        <h1 className="header__title">Магазин модной одежды</h1>
        <a className="header__contacts" href="tel:+79268304044">+7 (926) 830-40-44</a>
      </div>
    </header>
  );
}

export default Header;
