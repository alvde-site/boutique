import { FormEvent, ChangeEventHandler } from "react";
import { IValuesForm } from "../Account";
import { useAppSelector } from "../../../../utils/hooks";
import { selectAllAuth } from "../../../../services/reducers/authSlice";
import { selectAllUsers } from "../../../../services/reducers/usersSlice";

interface IProfileProps {
  handleSubmit: (e: FormEvent<Element>) => void;
  values: IValuesForm;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

function Profile({ handleSubmit, values, onInputChange }: IProfileProps) {
  const auth = useAppSelector(selectAllAuth);
  const users = useAppSelector(selectAllUsers);
  const currentUser = users.find((u) => u.id === auth.userId);
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
          value={values["profilename"] || currentUser?.name || ""}
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
          value={values["profilesurname"] || currentUser?.surname || ""}
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
          value={values["profiletel"] || currentUser?.tel || ""}
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
            values["profileemail"] || currentUser?.email || ""
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
