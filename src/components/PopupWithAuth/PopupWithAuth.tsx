import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function PopupWithAuth(props: any) {
  const [email, setEmail] = useState("");
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target.value);
  }

  function handleInputChange(e: any) {
    setEmail(e.target.value);
  }
  return (
    <PopupWithForm
      name="auth"
      title="Для входа в личный кабинет необходима регистрация"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
      buttonText="Сохранить"
      buttonLoadingText="Сохранение..."
    >
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className="form__input"
            value={email}
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Email / Логин"
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="password">
          <input
            className="form__input"
            value={email}
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Email / Логин"
          />
        </label>
      </fieldset>
      <button type="submit" className="form__submit form__submit_type_auth">Вход</button>
      <button type="submit" className="form__submit form__submit_type_register">регистрация</button>
      <button type="submit" className="form__submit form__submit_type_forgotten">Забыли пароль?</button>
    </PopupWithForm>
  );
}

export default PopupWithAuth;
