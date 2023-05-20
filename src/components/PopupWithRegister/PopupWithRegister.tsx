import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/formValidator";
import { IFormWithValidation, IValues } from "../../utils/interfaces";
import { useState } from "react";
import {
  ALERT_POPUP,
  CONFIRM_PASSWORD_ERROR,
  REGISTER_POPUP,
  REGISTRATION,
  REQUIRED_FIELD,
} from "../../utils/constants";
import {
  closeAllPopups,
  handlePopupState,
} from "../../services/reducers/popupsSlice";
import { createUser } from "../../services/reducers/usersSlice";
import { useAppDispatch } from "../../utils/hooks";
function PopupWithRegister() {
  const dispatch = useAppDispatch();
  const [hasErrors, setHasErrors] = useState({} as IValues);
  const { values, handleChange, errors, resetForm }: IFormWithValidation =
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

    const canSumbit = Boolean(
      noErrors && isFilledRequiredFields && isPasswordsMatched
    );

    if (canSumbit) {
      dispatch(closeAllPopups());
      dispatch(handlePopupState({ popupName: ALERT_POPUP, popupState: true }));

      dispatch(
        createUser({
          name: values["regname"],
          surname: values["regsurname"] || "",
          email: values["regemail"],
          password: values["regpassword"],
        })
      );

      resetForm();
      setHasErrors({});
    } else {
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
    <PopupWithForm
      name={REGISTER_POPUP}
      hasErrors={hasErrors["title"]}
      title={`${hasErrors["title"] ? hasErrors["title"] : REGISTRATION}`}
    >
      <fieldset className="form__field">
        <label className="form__label" htmlFor="email">
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
        <label className="form__label" htmlFor="email">
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
        <label className="form__label" htmlFor="email">
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
        <label className="form__label" htmlFor="email">
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
        <label className="form__label" htmlFor="email">
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
        <label className="form__label" htmlFor="email">
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
      <button
        type="button"
        onClick={handleSubmit}
        className="form__submit form__submit_type_auth"
      >
        Зарегистрироваться
      </button>
    </PopupWithForm>
  );
}

export default PopupWithRegister;
