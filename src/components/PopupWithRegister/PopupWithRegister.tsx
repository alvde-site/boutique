import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/formValidator";
import {
  IFormWithValidation,
  IPopupWithRegisterProps,
} from "../../utils/interfaces";
function PopupWithRegister(props: IPopupWithRegisterProps) {
  const { values, handleChange, errors }: IFormWithValidation =
    useFormWithValidation();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.onClose();
    props.onOpenAlertForm(true);
  }
  return (
    <PopupWithForm
      name="auth"
      title={`Регистарция`}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regname"] && "form__input_type_error"
            }`}
            value={values["regname"] || ""}
            type="text"
            id="regname"
            name="regname"
            onChange={handleChange}
            placeholder="ИМЯ *"
            required
            minLength={2}
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regsurname"] && "form__input_type_error"
            }`}
            value={values["regsurname"] || ""}
            type="text"
            id="regsurname"
            name="regsurname"
            onChange={handleChange}
            placeholder="ФАМИЛИЯ"
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regemail"] && "form__input_type_error"
            }`}
            value={values["regemail"] || ""}
            type="email"
            id="regemail"
            name="regemail"
            onChange={handleChange}
            placeholder="e-mail *"
            required
            minLength={2}
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regtel"] && "form__input_type_error"
            }`}
            value={values["regtel"] || ""}
            type="tel"
            id="regtel"
            name="regtel"
            onChange={handleChange}
            placeholder="телефон *"
            required
            minLength={2}
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regpassword"] && "form__input_type_error"
            }`}
            value={values["regpassword"] || ""}
            type="password"
            id="regpassword"
            name="regpassword"
            onChange={handleChange}
            placeholder="пароль *"
            required
            minLength={4}
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regreppassword"] && "form__input_type_error"
            }`}
            value={values["regreppassword"] || ""}
            type="password"
            id="regreppassword"
            name="regreppassword"
            onChange={handleChange}
            placeholder="повторите пароль *"
            required
            minLength={4}
          />
        </label>
      </fieldset>
      <h3 className="form__title">Адрес доставки</h3>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regcity"] && "form__input_type_error"
            }`}
            value={values["regcity"] || ""}
            type="text"
            id="regcity"
            name="regcity"
            onChange={handleChange}
            placeholder="Город"
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["regaddress"] && "form__input_type_error"
            }`}
            value={values["regaddress"] || ""}
            type="text"
            id="regaddress"
            name="regaddress"
            onChange={handleChange}
            placeholder="Адрес"
          />
        </label>
      </fieldset>

      <button
        type="button"
        onClick={handleSubmit}
        className="form__submit form__submit_type_auth"
      >
        Зарегестрироваться
      </button>
    </PopupWithForm>
  );
}

export default PopupWithRegister;
