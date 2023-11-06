import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__links">
          <li>
            <Link to="/about" className="footer__link">
              О нас
            </Link>
          </li>
          <li>
            <Link to="/dealer" className="footer__link">
              Оптовикам
            </Link>
          </li>

          <li>
            <Link to="/press" className="footer__link">
              Пресса
            </Link>
          </li>
          <li>
            <Link to="/conditions" className="footer__link">
              Условия доставки
            </Link>
          </li>

          <li>
            <Link to="/contacts" className="footer__link">
              Контакты
            </Link>
          </li>
          <li>
            <Link to="/conditions" className="footer__link">
              Условия возврата
            </Link>
          </li>

          <li>
            <Link to="/conditions" className="footer__link">
              Оплата
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="footer__link">
              Политика конфиденциальности
            </Link>
          </li>
        </ul>
        <div className="footer__details">
          <ul className="footer__pays">
            <li>
              <button
                className="footer__pay footer__pay_type_mir"
                aria-label="Карта мир"
              ></button>
            </li>
            <li>
              <button
                className="footer__pay  footer__pay_type_visa"
                aria-label="Карта виза"
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
