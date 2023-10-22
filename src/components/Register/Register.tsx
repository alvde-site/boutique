import { useFormWithValidation } from "../../utils/formValidator";
import { IPopupRegisterProps } from "../../utils/interfaces";
import { IFormValidator, IValues } from "../../utils/formValidationInterfaces";
import { useState } from "react";
import {
  ALERT_POPUP,
  CONFIRM_PASSWORD_ERROR,
  EXIST_USER,
  REGISTRATION,
  REQUIRED_FIELD,
} from "../../utils/constants";
import { handlePopupState } from "../../services/reducers/popupsSlice";
import { createUser, selectAllUsers } from "../../services/reducers/usersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
function Register({ setCurrentUser }: IPopupRegisterProps) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const [hasErrors, setHasErrors] = useState({} as IValues);
  const { values, handleChange, errors, resetForm }: IFormValidator =
    useFormWithValidation();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isFilledRequiredFields = Boolean(
      values["regname"] &&
        values["regemail"] &&
        values["regtel"] &&
        values["regpassword"] &&
        values["regreppassword"]
    );

    const isPasswordsMatched = Boolean(
      values["regpassword"] === values["regreppassword"]
    );

    const noErrors = Boolean(
      !errors["regname"] &&
        !errors["regemail"] &&
        !errors["regtel"] &&
        !errors["regpassword"] &&
        !errors["regreppassword"]
    );

    const existUser = users.find((u) => u.email === values["regemail"]);

    const canSumbit = Boolean(
      noErrors && isFilledRequiredFields && isPasswordsMatched && !existUser
    );

    if (canSumbit) {
      dispatch(handlePopupState({ popupName: ALERT_POPUP, popupState: true }));
      dispatch(
        createUser({
          name: values["regname"],
          surname: values["regsurname"] || "",
          email: values["regemail"],
          tel: values["regtel"],
          password: values["regpassword"],
        })
      );
      setCurrentUser({ email: values["regemail"] });
      resetForm();
      setHasErrors({});
    } else {
      if (existUser) {
        setHasErrors({
          ...errors,
          regemail: EXIST_USER,
          title: EXIST_USER,
        });
      }

      if (!isPasswordsMatched) {
        setHasErrors({
          ...errors,
          regpassword: CONFIRM_PASSWORD_ERROR,
          regreppassword: CONFIRM_PASSWORD_ERROR,
          title: CONFIRM_PASSWORD_ERROR,
        });
      }
      if (!noErrors) {
        setHasErrors({ ...errors, title: REQUIRED_FIELD });
      }
      if (!isFilledRequiredFields) {
        setHasErrors({
          ...errors,
          regname: REQUIRED_FIELD,
          regemail: REQUIRED_FIELD,
          regtel: REQUIRED_FIELD,
          regpassword: REQUIRED_FIELD,
          regreppassword: REQUIRED_FIELD,
          title: REQUIRED_FIELD,
        });
      }
    }
  }
  return (
    <div className="register">
      <form
        action="#"
        name={`register-form`}
        className="popup__form form"
        onSubmit={handleSubmit}
      >
        <h2
          className={`form__title ${hasErrors ? "form__title_type_error" : ""}`}
        >
          {`${hasErrors["title"] ? hasErrors["title"] : REGISTRATION}`}
        </h2>
        <fieldset className="form__field">
          <label className="form__label" htmlFor="regname">
            <input
              className={`form__input ${
                hasErrors["regname"] && "form__input_type_error"
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
          <label className="form__label" htmlFor="regsurname">
            <input
              className={`form__input ${
                hasErrors["regsurname"] && "form__input_type_error"
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
          <label className="form__label" htmlFor="regemail">
            <input
              className={`form__input ${
                hasErrors["regemail"] && "form__input_type_error"
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
          <label className="form__label" htmlFor="regtel">
            <input
              className={`form__input ${
                hasErrors["regtel"] && "form__input_type_error"
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
          <label className="form__label" htmlFor="regpassword">
            <input
              className={`form__input ${
                hasErrors["regpassword"] && "form__input_type_error"
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
          <label className="form__label" htmlFor="regreppassword">
            <input
              className={`form__input ${
                hasErrors["regreppassword"] && "form__input_type_error"
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
        <fieldset className="form__field">
          <label className="form__label" htmlFor="regcity">
            <input
              className={`form__input ${
                hasErrors["regcity"] && "form__input_type_error"
              }`}
              value={values["regsurcity"] || ""}
              type="text"
              id="regcity"
              name="regcity"
              onChange={handleChange}
              placeholder="Город"
            />
          </label>
        </fieldset>
        <fieldset className="form__field">
          <label className="form__label" htmlFor="regstreet">
            <input
              className={`form__input ${
                hasErrors["regstreet"] && "form__input_type_error"
              }`}
              value={values["regstreet"] || ""}
              type="text"
              id="regstreet"
              name="regstreet"
              onChange={handleChange}
              placeholder="Улица"
            />
          </label>
        </fieldset>
        <button
          type="button"
          onClick={handleSubmit}
          className="form__submit form__submit_type_auth"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Register;
