import { useNavigate } from "react-router-dom";
import { ORDERING_POPUP } from "../../utils/constants";
import { IFormValidator } from "../../utils/formValidationInterfaces";
import { useFormWithValidation } from "../../utils/formValidator";
import InputText from "../InputText/InputText";
import PopupWithPage from "../PopupWithPage/PopupWithPage";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  createNoAuthUser,
  selectAllUsers,
} from "../../services/reducers/usersSlice";
import { selectAllAuth } from "../../services/reducers/authSlice";
import { closeAllPopups } from "../../services/reducers/popupsSlice";
import {
  removeBasketProduct,
  selectAllInBasket,
} from "../../services/reducers/productsSlice";
import { addOrder } from "../../services/reducers/ordersSlice";

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
  const userId = `${auth.userId ? auth.userId : "noauth"}`;
  const basketProducts = useAppSelector(selectAllInBasket);
  const order = basketProducts.filter(
    (p) => p.isInBasket.includes("noauth") || p.isInBasket.includes(auth.userId)
  );

  const users = useAppSelector(selectAllUsers);
  const user = users.filter((u) => auth.userId === u.id)[0];
  if (user) {
    for (let key in user) {
      currentUser[key as keyof typeof currentUser] =
        user[key as keyof typeof currentUser];
    }
  }
  const navigate = useNavigate();
  const { values, handleChange, resetForm, errors }: IFormValidator =
    useFormWithValidation();
  function handleInputChange(e: React.ChangeEvent) {
    handleChange(e);
  }
  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    const noAuthUser = {
      name: values.orderingName || "",
      surname: values.orderingSurname || "",
      tel: values.orderingNumber || "",
      email: values.orderingEmail || "",
      city: values.orderingCity || "",
      street: values.orderingStreet || "",
    };

    const isFilledRequiredFields = Boolean(
      (values["orderingName"] || currentUser.name) &&
        (values["orderingSurname"] || currentUser.surname) &&
        (values["orderingNumber"] || currentUser.tel) &&
        (values["orderingEmail"] || currentUser.email) &&
        (values["orderingCity"] || currentUser.city) &&
        (values["orderingStreet"] || currentUser.street)
    );

    const noErrors = Boolean(
      !errors["orderingName"] &&
        !errors["orderingSurname"] &&
        !errors["orderingNumber"] &&
        !errors["orderingEmail"] &&
        !errors["orderingCity"] &&
        !errors["orderingStreet"]
    );

    const canSumbit = Boolean(noErrors && isFilledRequiredFields);
    console.log(isFilledRequiredFields);
    if (canSumbit) {
      navigate("/receipt");
      dispatch(closeAllPopups());
      dispatch(createNoAuthUser(noAuthUser));
      dispatch(addOrder({ order }));
      order.forEach((p) => {
        dispatch(removeBasketProduct({ productId: p.id, userId }));
      });
      resetForm();
    }
  }
  return (
    <PopupWithPage name={ORDERING_POPUP} title="Оформление заказа">
      <div className="ordering">
        <form
          action="#"
          name={`ordering-form`}
          className="popup__form form"
          onSubmit={handleOrder}
        >
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
              type="tel"
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
              type="submit"
            >
              Оформить
            </button>
          </fieldset>
          <fieldset className="ordering__field"></fieldset>
          <fieldset className="ordering__field"></fieldset>
        </form>
      </div>
    </PopupWithPage>
  );
}

export default PopupWithOrdering;
