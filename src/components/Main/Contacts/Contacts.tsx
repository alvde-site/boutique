import { cityContacts } from "../../../utils/constants";

function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__data">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__info">
          <div className="contacts__adress">
            <p className="contacts__city">Москва</p>
            <h3 className="contacts__subtitle">Адрес студии:</h3>
            <p className="contacts__item">Большая Садовая улица, 3с8</p>
            <h3 className="contacts__subtitle">Режим работы:</h3>
            <p className="contacts__item">
              10:00 - 19:00 по предварительному звонку
            </p>
          </div>
          <div className="contacts__socials">
            <p className="contacts__tel">+79268304044</p>
            <ul className="contacts__icon">
              <li>
                <button aria-label="Инстаграмм"></button>
              </li>
              <li>
                <button aria-label="Вконтаке"></button>
              </li>
              <li>
                <button aria-label="Телеграмм"></button>
              </li>
              <li>
                <button aria-label="Фэйсбук"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contacts__maps">
        <h2 className="contacts__title">как добраться</h2>
        <div className="contacts__map"></div>
      </div>
      <div className="contacts__cities">
        <h2 className="contacts__title">другие города</h2>
        <ul className="contacts__cards">
          {cityContacts.map((data) => {
            return (
              <li className="contacts__card card">
                <h3 className="card__city">{data.city}</h3>
                <p className="card__label">{data.label}</p>
                <p className="card__addres">{data.address}</p>
                <h4 className="card__subtitle">Режим работы:</h4>
                <p className="card__working">{data.time}</p>
                <a className="card__time" href="!#">
                  Яндекс.Карты
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
