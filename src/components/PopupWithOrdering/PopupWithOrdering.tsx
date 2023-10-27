import { useNavigate } from "react-router-dom";
import { ORDERING_POPUP } from "../../utils/constants";
import { IFormValidator } from "../../utils/formValidationInterfaces";
import { useFormWithValidation } from "../../utils/formValidator";
import InputText from "../InputText/InputText";
import PopupWithPage from "../PopupWithPage/PopupWithPage";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { selectAllUsers } from "../../services/reducers/usersSlice";
import { selectAllAuth } from "../../services/reducers/authSlice";
import { closeAllPopups } from "../../services/reducers/popupsSlice";

function PopupWithOrdering() {
  const dispatch = useAppDispatch();
  const currentUser = {
    name: "",
    surname: "",
    tel: "",
    email: "",
    city: "",
    street: "",
  };
  const auth = useAppSelector(selectAllAuth);
  const users = useAppSelector(selectAllUsers);
  const user = users.filter((u) => auth.userId === u.id)[0];
  if (user) {
    for (let key in user) {
      currentUser[key as keyof typeof currentUser] =
        user[key as keyof typeof currentUser];
    }
  }
  const navigate = useNavigate();
  const {
    values,
    handleChange,
  }: // errors,
  // setErrors,
  // isValid,
  // setIsValid,
  // resetForm,
  IFormValidator = useFormWithValidation();
  function handleInputChange(e: React.ChangeEvent) {
    handleChange(e);
  }
  function handleOrder() {
    navigate("/receipt");
    dispatch(closeAllPopups());
  }
  return (
    <PopupWithPage name={ORDERING_POPUP} title="Оформление заказа">
      <div className="ordering">
        <fieldset className="ordering__field">
          <InputText
            type="text"
            name="orderingName"
            values={values}
            defaultValue={currentUser.name}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Имя *"}
          />
          <InputText
            type="text"
            name="orderingSurname"
            defaultValue={currentUser.surname}
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Фамилия *"}
          />
          <InputText
            type="text"
            name="orderingNumber"
            defaultValue={currentUser.tel}
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Телефон *"}
          />
          <InputText
            type="email"
            name="orderingEmail"
            defaultValue={currentUser.email}
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Почта *"}
          />
        </fieldset>
        <fieldset className="ordering__field">
          <h3 className="ordering__title">Адрес доставки</h3>
          <InputText
            type="text"
            name="orderingCity"
            defaultValue={currentUser.city}
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Город *"}
          />
          <InputText
            type="text"
            name="orderingStreet"
            defaultValue={currentUser.street}
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Улица, дом, квартира *"}
          />
        </fieldset>
        <fieldset className="ordering__field">
          <button
            className={`ordering__button
         ${false ? " total__button_disabled" : ""}`}
            disabled={false}
            onClick={handleOrder}
          >
            Оформить
          </button>
        </fieldset>
        <fieldset className="ordering__field"></fieldset>
        <fieldset className="ordering__field"></fieldset>
      </div>
    </PopupWithPage>
  );
}

export default PopupWithOrdering;
