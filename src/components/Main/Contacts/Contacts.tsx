import { cityContacts } from "../../../utils/constants";

function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__data">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__info">
          <div className="contacts__adress">
            <h3 className="contacts__city">Москва</h3>
            <h4 className="contacts__subtitle">Адрес студии:</h4>
            <p className="contacts__item">Большая Садовая улица, 3с8</p>
            <h4 className="contacts__subtitle">Режим работы:</h4>
            <p className="contacts__item">
              10:00 - 19:00 по предварительному звонку
            </p>
          </div>
          <div className="contacts__socials">
            <a className="contacts__tel" href="tel:+79268304044">
              +79268304044
            </a>
            <ul className="contacts__icons">
              <li>
                <a
                  href="!#"
                  aria-label="Инстаграмм"
                  className="contacts__icon contacts__icon_type_instagram"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  href="!#"
                  aria-label="Вконтаке"
                  className="contacts__icon contacts__icon_type_vk"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  href="!#"
                  aria-label="Телеграмм"
                  className="contacts__icon contacts__icon_type_tg"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  href="!#"
                  aria-label="Фэйсбук"
                  className="contacts__icon contacts__icon_type_facebook"
                >
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contacts__maps">
        <h2 className="contacts__map-title">как добраться</h2>
        <iframe
          className="contacts__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7a5d4c269ccafb9c334339405d73207cca78899c012b6465ba7a0b7602363ea&amp;source=constructor"
          width="100%"
          height="720"
          title="Яндекс Карты"
        ></iframe>
      </div>
      <div className="contacts__cities">
        <h2 className="contacts__title">другие города</h2>
        <ul className="contacts__cards">
          {cityContacts.map((data, i) => {
            return (
              <li className="contacts__card card" key={i}>
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
