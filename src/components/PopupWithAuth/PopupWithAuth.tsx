import { useState } from "react";
import { useFormWithValidation } from "../../utils/formValidator";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {
  AUTH_ERROR,
  NEED_REGISTRATION,
  REGISTER_POPUP,
} from "../../utils/constants";
import { IFormWithValidation, IValues } from "../../utils/interfaces";
import { useAppDispatch } from "../../utils/hooks";
import { signin } from "../../services/reducers/authSlice";
import {
  closeAllPopups,
  handlePopupState,
} from "../../services/reducers/popupsSlice";

function PopupWithAuth() {
  const dispatch = useAppDispatch();
  const [hasErrors, setHasErrors] = useState({} as IValues);
  const { values, handleChange, errors, resetForm }: IFormWithValidation =
    useFormWithValidation();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHasErrors(errors);
    if (!errors["authemail"] && !errors["authpassword"]) {
      if (
        values["authemail"] !== "admin@mail.ru" ||
        values["authpassword"] !== "1234"
      ) {
        setHasErrors({
          ...errors,
          authemail: AUTH_ERROR,
          authpassword: AUTH_ERROR,
          title: AUTH_ERROR,
        });
      } else {
        dispatch(closeAllPopups());
        resetForm();
        setHasErrors({});
        dispatch(signin({ loggedIn: true, userId: "1" }));
      }
    }
  }

  function handleOpenRegisterForm() {
    dispatch(closeAllPopups());
    dispatch(handlePopupState({ namePopup: REGISTER_POPUP, statePopup: true }));
  }

  return (
    <PopupWithForm
      name="auth"
      hasErrors={hasErrors["title"]}
      title={`${hasErrors["title"] ? AUTH_ERROR : NEED_REGISTRATION}`}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
          <input
            className={`form__input ${
              hasErrors["authemail"] && "form__input_type_error"
            }`}
            value={values["authemail"] || ""}
            type="email"
            id="authemail"
            name="authemail"
            onChange={handleChange}
            placeholder="E-MAIL"
            required
            minLength={2}
          />
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="form__label" htmlFor="password">
          <input
            className={`form__input ${
              hasErrors["authpassword"] && "form__input_type_error"
            }`}
            value={values["authpassword"] || ""}
            type="password"
            id="authpassword"
            name="authpassword"
            onChange={handleChange}
            placeholder="ПАРОЛЬ"
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
      <button
        onClick={handleOpenRegisterForm}
        type="button"
        className="form__submit form__submit_type_register"
      >
        регистрация
      </button>
      <button
        type="button"
        className="form__submit form__submit_type_forgotten"
      >
        Забыли пароль?
      </button>
    </PopupWithForm>
  );
}

export default PopupWithAuth;
