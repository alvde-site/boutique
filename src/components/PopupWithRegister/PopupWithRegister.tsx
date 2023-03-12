import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/formValidator";
import {
  IFormWithValidation,
  IPopupWithAuthProps,
} from "../../utils/interfaces";
function PopupWithRegister(props: IPopupWithAuthProps) {
  const { values, handleChange, errors }: IFormWithValidation =
    useFormWithValidation();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <PopupWithForm
      name="auth"
      title={`Регистарция`}
      isOpen={props.isOpen}
      handleOpenPopup={props.handleOpenPopup}
      // onClose={props.onClose}
      onSubmit={handleSubmit}
      // isLoading={props.isLoading}
      buttonText="Сохранить"
      buttonLoadingText="Сохранение..."
    >
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              errors["authemail"] && "form__input_type_error"
            }`}
            value={values["regname"] || ""}
            type="email"
            id="regname"
            name="auth"
            onChange={handleChange}
            placeholder="ИМЯ"
            required
            minLength={2}
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
