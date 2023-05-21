import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { selectAllInOrder } from "../../../services/reducers/productsSlice";
import { useEffect, useState } from "react";
import { product1 } from "../../../utils/constants";
import { useFormWithValidation } from "../../../utils/formValidator";
import Order from "./Order/Order";
import Profile from "./Profile/Profile";
import { signout } from "../../../services/reducers/authSlice";

export interface IValuesForm {
  profilename?: string;
  profilesurname?:string;
  profiletel?:string;
  profileemail?: string;
}

interface IValidationForm {
  values: IValuesForm;
  handleChange: (event: React.FormEvent<Element>) => void;
  errors: {};
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  resetForm: (newValues?: {}, newErrors?: {}, newIsValid?: boolean) => void;
}

function Account() {
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const orderProducts = useAppSelector(selectAllInOrder);
  const [isOrderShown, setIsOrderShown] = useState(true);
  const [isProfileShown, setIsProfileShown] = useState(true);
  const { values, handleChange, setIsValid }: IValidationForm =
    useFormWithValidation();
  const smDesc = "(max-width: 1400px)";
  const smDesctMediaQuery = window.matchMedia(smDesc);

  useEffect(() => {
    if (smDesctMediaQuery.matches) {
      setIsProfileShown(false);
    }
  }, [smDesctMediaQuery.matches]);

  useEffect(() => {
    if (orderProducts.length) {
      const total = orderProducts.map((e) => e.price).reduce((a, c) => a + c);
      setTotalPrice(() => total);
    } else {
      setTotalPrice(() => 0);
    }
  }, [orderProducts]);

  let order;

  if (orderProducts.length) {
    if (orderProducts.length) {
      order = (
        <div className="account__order order">
          <div className="order__images">
            {orderProducts.map((details) => (
              <img
                className="order__image"
                src={details.img}
                alt={details.title}
                key={details.id}
              ></img>
            ))}
          </div>
          <div className="order__description">
            <div className="order__field">
              <p className="order__label">№ 2712</p>
              <p className="order__text">19.02.2022</p>
            </div>
            {orderProducts.map((details) => (
              <div className="order__field" key={details.id}>
                <p className="order__label">{details.title}</p>
                <p className="order__text">{details.price} ₽</p>
              </div>
            ))}
            <div className="order__field">
              <p className="order__label">комментарий:</p>
              <p className="order__text">Мирон жду аванс</p>
            </div>
            <div className="order__field">
              <p className="order__label">статус</p>
              <p className="order__text">в обработке</p>
            </div>
            <div className="order__field">
              <p className="order__label">доставка</p>
              <p className="order__text">курьером за пределы мкад (790 ₽)</p>
            </div>
            <div className="order__field">
              <p className="order__label">сумма</p>
              <p className="order__text">{totalPrice} ₽</p>
            </div>
            <div className="order__field">
              <p className="order__label">трек номер</p>
              <p className="order__text">DF43FJOAP009</p>
            </div>
            <button className="order__button">Отменить этот заказ</button>
          </div>
        </div>
      );
    } else {
      <></>;
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(e);
    // let name = `${values["profilename"] || currentUser.name}`;
    // let email = `${values["profileemail"] || currentUser.email}`;
    // onEditProfile({
    //   name,
    //   email,
    // });
  }

  function handleSameValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (
      e
      // e.target.value === currentUser.name ||
      // e.target.value === currentUser.email
    ) {
      setIsValid(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e);
    handleSameValue(e);
  }

  function showOrderPage() {
    setIsOrderShown(true);
    setIsProfileShown(false);
  }
  function showProfilePage() {
    setIsOrderShown(false);
    setIsProfileShown(true);
  }

  function handleSignout() {
    dispatch(signout({ loggedIn: false, userId: "1" }));
  }

  return (
    <section className="account">
      <div className="account__menu">
        <div className="account__signout">
          <Link className="account__signout-button" to="/" onClick={handleSignout}>
            Выйти
          </Link>
        </div>
        <div className="account__buttons">
          <button
            className={`account__button ${
              isOrderShown ? "account__button_active" : ""
            }`}
            onClick={showOrderPage}
          >
            ЗАКАЗЫ
          </button>
          <button
            className={`account__button ${
              isProfileShown ? "account__button_active" : ""
            }`}
            onClick={showProfilePage}
          >
            ПРОФИЛЬ
          </button>
        </div>
      </div>
      <div className="account__content">
        <div
          className={`account__orders ${
            isOrderShown ? "account__orders_display" : ""
          }`}
        >
          <Order order={order} productImg={product1} />
        </div>
        <div
          className={`account__profile ${
            isProfileShown ? "account__profile_displayed" : ""
          }`}
        >
          <Profile
            handleSubmit={handleSubmit}
            values={values}
            onInputChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
}

export default Account;
