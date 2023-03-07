import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__links">
          <li>
            <a href="!#" className="footer__link">
              О нас
            </a>
          </li>
          <li>
            <Link to="/dealer" className="footer__link">
              Оптовикам
            </Link>
          </li>
          <li>
            <a href="!#" className="footer__link">
              Instagram
            </a>
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
            <a href="!#" className="footer__link">
              Telegram
            </a>
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
            <a href="!#" className="footer__link">
              Facebook
            </a>
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
          <li>
            <a href="!#" className="footer__link">
              Vk
            </a>
          </li>
        </ul>
        <div className="footer__details">
          <ul className="footer__langs">
            <li>
              <button className="footer__link footer__link_type_button">
                RU
              </button>
            </li>
            <li>
              <button className="footer__link footer__link_type_button">
                EN
              </button>
            </li>
          </ul>
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
          <a href="!#" className="footer__link">
            alvde
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
