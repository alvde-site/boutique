import { Link } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks";
import { selectAllInOrder } from "../../../services/reducers/productsSlice";
import { useEffect, useState } from "react";
import { product1 } from "../../../utils/constants";
import { useFormWithValidation } from "../../../utils/formValidator";

interface IValuesFrom {
  profilename?: string;
  profileemail?: string;
}

interface IValidationForm {
  values: IValuesFrom;
  handleChange: (event: React.FormEvent<Element>) => void;
  errors: {};
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  resetForm: (newValues?: {}, newErrors?: {}, newIsValid?: boolean) => void;
}

function Account() {
  const [totalPrice, setTotalPrice] = useState(0);
  const orderProducts = useAppSelector(selectAllInOrder);
  const { values, handleChange, setIsValid }: IValidationForm = useFormWithValidation();
  useEffect(() => {
    if (orderProducts.length) {
      const total = orderProducts.map((e) => e.price).reduce((a, c) => a + c);
      setTotalPrice(() => total);
    } else {
      setTotalPrice(() => 0);
    }
  }, [orderProducts]);

  let order;

  if (orderProducts.length) {
    if (orderProducts.length) {
      order = (
        <div className="account__order order">
          <div className="order__images">
            {orderProducts.map((details) => (
              <img
                className="order__image"
                src={details.img}
                alt={details.title}
                key={details.id}
              ></img>
            ))}
          </div>
          <div className="order__description">
            <div className="order__field">
              <p className="order__label">№ 2712</p>
              <p className="order__text">19.02.2022</p>
            </div>
            {orderProducts.map((details) => (
              <div className="order__field" key={details.id}>
                <p className="order__label">{details.title}</p>
                <p className="order__text">{details.price} ₽</p>
              </div>
            ))}
            <div className="order__field">
              <p className="order__label">комментарий:</p>
              <p className="order__text">Мирон жду аванс</p>
            </div>
            <div className="order__field">
              <p className="order__label">статус</p>
              <p className="order__text">в обработке</p>
            </div>
            <div className="order__field">
              <p className="order__label">доставка</p>
              <p className="order__text">курьером за пределы мкад (790 ₽)</p>
            </div>
            <div className="order__field">
              <p className="order__label">сумма</p>
              <p className="order__text">{totalPrice} ₽</p>
            </div>
            <div className="order__field">
              <p className="order__label">трек номер</p>
              <p className="order__text">DF43FJOAP009</p>
            </div>
            <button className="order__button">Отменить этот заказ</button>
          </div>
        </div>
      );
    } else {
      <></>;
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(e);
    // let name = `${values["profilename"] || currentUser.name}`;
    // let email = `${values["profileemail"] || currentUser.email}`;
    // onEditProfile({
    //   name,
    //   email,
    // });
  }

  function handleSameValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (true
      // e.target.value === currentUser.name ||
      // e.target.value === currentUser.email
    ) {
      setIsValid(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e);
    handleSameValue(e);
  }

  return (
    <section className="account">
      <div className="account__menu">
        <div className="account__signout">
          <Link className="account__signout-button" to="/">
            Выйти
          </Link>
        </div>
        <div className="account__buttons">
          <button className="account__button account__button_active">
            ЗАКАЗЫ
          </button>
          <button className="account__button">ПРОФИЛЬ</button>
        </div>
      </div>
      <div className="account__content">
        <div className="account__orders">
          {order}
          <div className="account__order order">
            <div className="order__images">
              <img
                className="order__image"
                src={product1}
                alt="Denim effect pants"
              ></img>
            </div>
            <div className="order__description">
              <div className="order__field">
                <p className="order__label">№ 2712</p>
                <p className="order__text">19.02.2022</p>
              </div>
              <div className="order__field">
                <p className="order__label">Denim effect pants [x1]</p>
                <p className="order__text">8000 ₽</p>
              </div>
              <div className="order__field">
                <p className="order__label">комментарий:</p>
                <p className="order__text">-</p>
              </div>
              <div className="order__field">
                <p className="order__label">статус</p>
                <p className="order__text">Доставлен</p>
              </div>
              <div className="order__field">
                <p className="order__label">доставка</p>
                <p className="order__text">курьер (490 ₽)</p>
              </div>
              <div className="order__field">
                <p className="order__label">сумма</p>
                <p className="order__text">8490 ₽</p>
              </div>
              <div className="order__field">
                <p className="order__label">трек номер</p>
                <p className="order__text">DF43FJOAP009</p>
              </div>
            </div>
          </div>
        </div>
        <div className="account__profile">
          <form
            action="#"
            name="profileform"
            className="profileform"
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset className="profileform__fieldset profileform__fieldset_type_name">
              <label htmlFor="profilename" className="profileform__field">
                Имя
              </label>
              <input
                id="profilename"
                type="text"
                className="profileform__input"
                name="profilename"
                required
                minLength={2}
                maxLength={30}
                value={values["profilename"] || "ИмяПользователя" || ""}
                onChange={handleInputChange}
                readOnly={!isEditProfile}
                disabled={isLoading || !isEditProfile}
                formNoValidate
              />
              <span className="profileform__input_focus"></span>
            </fieldset>
            <fieldset className="profileform__fieldset">
              <label htmlFor="profileemail" className="profileform__field">
                E-mail
              </label>
              <input
                id="profileemail"
                type="email"
                className="profileform__input"
                name="profileemail"
                required
                minLength={2}
                maxLength={30}
                value={values["profileemail"] || currentUser.email || ""}
                onChange={handleInputChange}
                readOnly={!isEditProfile}
                disabled={isLoading || !isEditProfile}
                pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}"
                formNoValidate
              />
              <span className="profileform__input_focus"></span>
            </fieldset>
            <fieldset className="profileform__submit-fieldset">
              <span
                id="success-submitprofile"
                className={`profileform__submit-success ${
                  submitSuccess && "profileform__submit-success_active"
                }`}
              >
                Успешно!
              </span>
              <span
                id="error-submitprofile"
                className={`profileform__submit-error ${
                  submitError && "profileform__submit-error_active"
                }`}
              >
                {submitError}
              </span>
              <button
                className={`profileform__submit ${
                  isEditProfile &&
                  `profileform__submit_active ${
                    !isValid && "profileform__submit_disable"
                  }`
                }`}
                type="submit"
                disabled={!isValid ? true : isLoading ? true : false}
              >
                {!isLoading ? "Сохранить" : "Сохранение..."}
              </button>
              <button
                className={`profileform__edit ${
                  isEditProfile && "profileform__edit_disabled"
                }`}
                type="button"
                onClick={handleEditButton}
              >
                Редактировать
              </button>
              <button
                className={`profileform__logout ${
                  isEditProfile && "profileform__logout_disabled"
                }`}
                onClick={handleSignout}
                type="button"
                disabled={isLoading}
              >
                {!isLoading ? "Выйти из аккаунта" : "Выходим..."}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Account;
