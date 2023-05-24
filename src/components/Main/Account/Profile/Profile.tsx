import { ChangeEventHandler, useState, useEffect } from "react";
import { IValuesForm } from "../Account";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
import { selectAllAuth } from "../../../../services/reducers/authSlice";
import { selectAllUsers } from "../../../../services/reducers/usersSlice";
import { updatedUser } from "../../../../services/reducers/usersSlice";

interface IProfileProps {
  values: IValuesForm;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

function Profile({ values, onInputChange }: IProfileProps) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAllAuth);
  const users = useAppSelector(selectAllUsers);
  const currentUser = users.find((u) => u.id === auth.userId);
  const [canEditProfile, setCanEditProfile] = useState(false);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessSubmit(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSuccessSubmit]);

  function handleEditButton() {
    setCanEditProfile(true);
    setIsSuccessSubmit(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let id = `${currentUser?.id}`;
    let name = `${values["profilename"] || currentUser?.name}`;
    let surname = `${values["profilesurname"] || currentUser?.surname}`;
    let tel = `${values["profiletel"] || currentUser?.tel}`;
    let email = `${values["profileemail"] || currentUser?.email}`;
    dispatch(updatedUser({ id, name, surname, tel, email }));
    setCanEditProfile(false);
    setIsSuccessSubmit(true);
    console.log(id, name, surname, tel, email);
  }
  return (
    <form
      action="#"
      name="profileform"
      className="profileform"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset
        className={`profileform__fieldset ${
          canEditProfile ? "profileform__fieldset_editable" : ""
        }`}
      >
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
          readOnly={!canEditProfile}
          disabled={!canEditProfile}
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset
        className={`profileform__fieldset profileform__fieldset_type_surname ${
          canEditProfile ? "profileform__fieldset_editable" : ""
        }`}
      >
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
          readOnly={!canEditProfile}
          disabled={!canEditProfile}
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset
        className={`profileform__fieldset profileform__fieldset_type_tel ${
          canEditProfile ? "profileform__fieldset_editable" : ""
        }`}
      >
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
          readOnly={!canEditProfile}
          disabled={!canEditProfile}
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset
        className={`profileform__fieldset ${
          canEditProfile ? "profileform__fieldset_editable" : ""
        }`}
      >
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
          value={values["profileemail"] || currentUser?.email || ""}
          onChange={onInputChange}
          readOnly={!canEditProfile}
          disabled={!canEditProfile}
          pattern="[A-Z0-9a-z._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,6}"
          formNoValidate
        />
        <span className="profileform__input_focus"></span>
      </fieldset>
      <fieldset className="profileform__submit-fieldset">
        <span
          id="success-submitprofile"
          className={`profileform__submit-success ${
            isSuccessSubmit && "profileform__submit-success_active"
          }`}
        >
          Успешно!
        </span>
        <button
          className={`profileform__submit ${
            canEditProfile &&
            `profileform__submit_active ${
              !canEditProfile && "profileform__submit_disable"
            }`
          }`}
          type="submit"
          disabled={!canEditProfile}
        >
          Сохранить
        </button>
        <button
          className={`profileform__edit ${
            canEditProfile && "profileform__edit_disabled"
          }`}
          type="button"
          onClick={handleEditButton}
        >
          Редактировать
        </button>
      </fieldset>
    </form>
  );
}

export default Profile;
