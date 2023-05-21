import { FormEvent, ChangeEventHandler } from "react";
import { IValuesForm } from "../Account";

interface IProfileProps {
  handleSubmit: (e: FormEvent<Element>) => void;
  values: IValuesForm;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

function Profile({ handleSubmit, values, onInputChange }: IProfileProps) {
  return (
    <form
      action="#"
      name="profileform"
      className="profileform"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="profileform__fieldset">
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
          onChange={onInputChange}
          // readOnly={!isEditProfile}
          // disabled={isLoading || !isEditProfile}
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset className="profileform__fieldset profileform__fieldset_type_surname">
        <label htmlFor="profilesurname" className="profileform__field">
          Фамилия
        </label>
        <input
          id="profilesurname"
          type="text"
          className="profileform__input"
          name="profilesurname"
          required
          minLength={2}
          maxLength={30}
          value={values["profilesurname"] || "Фамилия пользователя" || ""}
          onChange={onInputChange}
          // readOnly={!isEditProfile}
          // disabled={isLoading || !isEditProfile}
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset className="profileform__fieldset profileform__fieldset_type_tel">
        <label htmlFor="profiletel" className="profileform__field">
          Телефон
        </label>
        <input
          id="profiletel"
          type="text"
          className="profileform__input"
          name="profiletel"
          required
          minLength={2}
          maxLength={30}
          value={values["profiletel"] || "ТелефонПользователя" || ""}
          onChange={onInputChange}
          // readOnly={!isEditProfile}
          // disabled={isLoading || !isEditProfile}
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
          value={
            values["profileemail"] ||
            "emailПользователя"
            // || currentUser.email
          }
          onChange={onInputChange}
          // readOnly={!isEditProfile}
          // disabled={isLoading || !isEditProfile}
          pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}"
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset className="profileform__submit-fieldset">
        <span
          id="success-submitprofile"
          // className={`profileform__submit-success ${
          // submitSuccess && "profileform__submit-success_active"
          // }`}
        >
          Успешно!
        </span>
        <span
          id="error-submitprofile"
          // className={`profileform__submit-error ${
          //   submitError && "profileform__submit-error_active"
          // }`}
        >
          {/* {submitError} */}
        </span>
        <button
          // className={`profileform__submit ${
          //   isEditProfile &&
          //   `profileform__submit_active ${
          //     !isValid && "profileform__submit_disable"
          //   }`
          // }`}
          type="submit"
          // disabled={!isValid ? true : isLoading ? true : false}
        >
          {/* {!isLoading ? "Сохранить" : "Сохранение..."} */}
        </button>
        <button
          // className={`profileform__edit ${
          //   isEditProfile && "profileform__edit_disabled"
          // }`}
          type="button"
          // onClick={handleEditButton}
        >
          Редактировать
        </button>
        <button
          // className={`profileform__logout ${
          //   isEditProfile && "profileform__logout_disabled"
          // }`}
          // onClick={handleSignout}
          type="button"
          // disabled={isLoading}
        >
          {/* {!isLoading ? "Выйти из аккаунта" : "Выходим..."} */}
        </button>
      </fieldset>
    </form>
  );
}

export default Profile;
