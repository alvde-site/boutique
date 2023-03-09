import { useFormWithValidation } from "../../utils/formValidator";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
interface IValues {
  authemail?: string;
  authpassword?: string;
}
interface IErrors {
  authemail?: string;
  authpassword?: string;
}

interface IFormWithValidation extends IValues, IErrors {
  values: IValues;
  errors: IErrors;
  handleChange: (e: React.FormEvent<Element>) => void;
}

function PopupWithAuth(props: any) {
  const { values, handleChange, errors }: IFormWithValidation =
    useFormWithValidation();
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(values)
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
            className={`form__input ${
              errors["authemail"] && "form__input_type_error"
            }`}
            value={values["authemail"] || ""}
            type="email"
            id="authemail"
            name="authemail"
            onChange={handleChange}
            placeholder="Email / Логин"
            required
            minLength={2}
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="password">
          <input
            className={`form__input ${
              errors["authpassword"] && "form__input_type_error"
            }`}
            value={values["authpassword"] || ""}
            type="password"
            id="authpassword"
            name="authpassword"
            onChange={handleChange}
            placeholder="Email / Логин"
            required
            minLength={4}
          />
        </label>
      </fieldset>
      <button
        type="button"
        onClick={handleSubmit}
        className="form__submit form__submit_type_auth"
      >
        Вход
      </button>
      <button type="submit" className="form__submit form__submit_type_register">
        регистрация
      </button>
      <button
        type="submit"
        className="form__submit form__submit_type_forgotten"
      >
        Забыли пароль?
      </button>
    </PopupWithForm>
  );
}

export default PopupWithAuth;
