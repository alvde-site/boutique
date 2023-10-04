import { ORDERING_POPUP } from "../../utils/constants";
import { IFormValidator } from "../../utils/formValidationInterfaces";
import { useFormWithValidation } from "../../utils/formValidator";
import InputText from "../InputText/InputText";
import PopupWithPage from "../PopupWithPage/PopupWithPage";

function PopupWithOrdering() {
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
  return (
    <PopupWithPage name={ORDERING_POPUP} title="Оформление заказа">
      <div className="ordering">
        <fieldset className="ordering__field">
          <InputText
            type="text"
            name="orderingName"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Имя *"}
          />
          <InputText
            type="text"
            name="orderingSurname"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Фамилия *"}
          />
          <InputText
            type="text"
            name="orderingNumber"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Телефон *"}
          />
          <InputText
            type="email"
            name="orderingEmail"
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
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Город *"}
          />
          <InputText
            type="text"
            name="orderingStreet"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Улица, дом, квартира *"}
          />
        </fieldset>
        <fieldset className="ordering__field">
          <button
            className={`ordering__button
         ${true ? " total__button_disabled" : ""}`}
            disabled={true}
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
