import { conditionsLogo } from "../../../utils/constants";

function Conditions() {
  return (
    <section className="conditions">
      <ul className="conditions__icons">
        {conditionsLogo.map((i, index) => (
          <li key={index}>
            <img className="conditions__icon" src={i.src} alt={i.alt} />
          </li>
        ))}
      </ul>
      <div className="conditions__content">
        <div className="conditions__delivery">
          <div className="conditions__title-wrap">
            <h2 className="conditions__title">Доставка и оплата</h2>
            <ul className="conditions__title-icons">
              <li>
                <img
                  className="conditions__title-icon"
                  src={conditionsLogo[0].src}
                  alt={conditionsLogo[0].alt}
                />
              </li>
              <li>
                <img
                  className="conditions__title-icon"
                  src={conditionsLogo[1].src}
                  alt={conditionsLogo[1].alt}
                />
              </li>
            </ul>
          </div>
          <ul className="conditions__list">
            <li>
              <p className="conditions__item">
                При оформлении заказа на сайте, можете выбрать любой удобный для
                вас способ доставки.
              </p>
            </li>
            <li>
              <p className="conditions__item conditions__item_type_end">
                <b>
                  Если вы находитесь в Москве, можете самостоятельно забрать
                  заказ в нашем шоу-руме по адресу: Большая Садовая улица, 3с8,
                  этаж 2, офис 20. При этом необходимо заранее сообщить о своем
                  визите по номеру телефона +7(965)424-42-92.
                </b>{" "}
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Так же вы можете оформить доставку по городу нашей курьерской
                службой.{" "}
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Стоимость доставки в пределах МКАД - 500 руб.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Стоимость доставки с примеркой - 1 000 руб.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Доставка за МКАД рассчитывается индивидуально.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Доставку в другие города по России осуществляет курьерская
                служба СДЭК. Рассчитать стоимость доставки и выбрать тариф можно
                у нас на сайте при оформлении заказа.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Доставку в другие страны осуществляем Почтой России или
                курьерской службой Boxberry.
              </p>
            </li>
          </ul>
        </div>
        <div className="conditions__refund">
          <div className="conditions__title-wrap">
            <h2 className="conditions__title">возврат</h2>
            <ul className="conditions__title-icons">
              <li>
                <img
                  className="conditions__title-icon"
                  src={conditionsLogo[2].src}
                  alt={conditionsLogo[2].alt}
                />
              </li>
            </ul>
          </div>
          <p className="conditions__subtitle">СРОКИ ОБМЕНА/ВОЗВРАТА ОДЕЖДЫ</p>
          <p className="conditions__item">
            Если вы хотите обменять товар или сделать возврат, необходимо в
            течение <b>7 дней</b> уведомить посредством электронной почты
            администрацию нашего интернет-магазина.
          </p>
          <p className="conditions__item">
            В письме необходимо указать следующие данные:
          </p>
          <ol className="conditions__orderlist">
            <li>
              <p className="conditions__item">ФИО;</p>
            </li>
            <li>
              <p className="conditions__item">Номер вашего заказа;</p>
            </li>
            <li>
              <p className="conditions__item">
                Модель, на которую вы хотите оформить возврат или обмен;
              </p>
            </li>
            <li>
              <p className="conditions__item">Обязательно укажите причину.</p>
            </li>
          </ol>
          <p className="conditions__subtitle">
            ПОРЯДОК ВОЗВРАТА И ОБМЕНА ОДЕЖДЫ
          </p>
          <ul className="conditions__list">
            <li>
              <p className="conditions__item">
                Если товар был отправлен вам в другой город, то необходимо
                произвести отправку товара, который вы хотите обменять или
                вернуть, по адресу, указанному на бандероли при ее получении.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Обратите внимание, что стоимость отправки товара оплачивает
                покупатель.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                Если товар был приобретен в нашем шоу-руме в Москве или
                отправлен вам курьерской службой по г. Москве, администратор
                уточнит, каким образом вам будет удобнее отправить товар обратно
                к нам в шоу-рум.
              </p>
            </li>
            <li>
              <p className="conditions__item">
                При получении продавцом товара в случае, если он соответствует
                требованиям идеального состояния, администрация сообщит о
                готовности произвести обмен или возврат.{" "}
              </p>
            </li>
            <li>
              <p className="conditions__item">
                При возврате денежные средства зачисляются на банковский счет
                покупателя.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Conditions;
