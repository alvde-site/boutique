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
            name="orderingName"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Имя *"}
          />
          <InputText
            name="orderingSurname"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Фамилия *"}
          />
          <InputText
            name="orderingNumber"
            values={values}
            onChange={handleInputChange}
            className={"ordering__input"}
            placeholder={"Телефон *"}
          />
          <input
            type="email"
            id="orderingEmail"
            name="orderingEmail"
            minLength={2}
            maxLength={30}
            value={values["orderingEmail"] || ""}
            onChange={handleInputChange}
            className="ordering__input"
            placeholder="Почта *"
          />
        </fieldset>
        <fieldset className="ordering__field"></fieldset>
        <fieldset className="ordering__field"></fieldset>
        <fieldset className="ordering__field"></fieldset>
        <fieldset className="ordering__field"></fieldset>
      </div>
    </PopupWithPage>
  );
}

export default PopupWithOrdering;
