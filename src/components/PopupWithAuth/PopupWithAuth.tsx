import { useState } from "react";
import { useFormWithValidation } from "../../utils/formValidator";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {
  AUTH_ERROR,
  AUTH_POPUP,
  NEED_REGISTRATION,
  REGISTER_POPUP,
} from "../../utils/constants";
import { IFormValidator, IValues } from "../../utils/formValidationInterfaces";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { signin } from "../../services/reducers/authSlice";
import {
  closeAllPopups,
  handlePopupState,
} from "../../services/reducers/popupsSlice";
import { selectAllUsers } from "../../services/reducers/usersSlice";

function PopupWithAuth() {
  const dispatch = useAppDispatch();
  const [hasErrors, setHasErrors] = useState({} as IValues);
  const { values, handleChange, errors, resetForm }: IFormValidator =
    useFormWithValidation();
  const users = useAppSelector(selectAllUsers);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHasErrors(errors);
    if (!errors["authemail"] && !errors["authpassword"]) {
      const user = users.find(
        (u) =>
          u.email === values["authemail"] &&
          u.password === values["authpassword"]
      );
      if (!user) {
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
        dispatch(signin({ userId: user.id }));
      }
    }
  }

  function handleOpenRegisterForm() {
    dispatch(closeAllPopups());
    dispatch(handlePopupState({ popupName: REGISTER_POPUP, popupState: true }));
  }

  return (
    <PopupWithForm
      name={AUTH_POPUP}
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
