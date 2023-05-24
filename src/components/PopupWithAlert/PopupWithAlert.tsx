import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { closeAllPopups } from "../../services/reducers/popupsSlice";
import { ALERT_POPUP } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { selectAllUsers } from "../../services/reducers/usersSlice";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { signin } from "../../services/reducers/authSlice";

function PopupWithAlert() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const registeredUser = useContext(CurrentUserContext);
  const users = useAppSelector(selectAllUsers);
  const currentUser = users.find((u) => u.email === registeredUser.email);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(signin({ userId: currentUser?.id }));
    dispatch(closeAllPopups());
    navigate("/account");
  }

  return (
    <PopupWithForm
      name={ALERT_POPUP}
      onSubmit={handleSubmit}
      title={"Вы зарегестрированы"}
    >
      <h3 className="form__title">
        пожалуйста, проверьте вашу почту в письме будут ваши данные
      </h3>
      <button
        type="submit"
        onClick={handleSubmit}
        className="form__submit form__submit_type_auth"
      >
        В личный кабинет
      </button>
    </PopupWithForm>
  );
}

export default PopupWithAlert;
