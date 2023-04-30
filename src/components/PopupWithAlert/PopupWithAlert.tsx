import { closeAllPopups } from "../../services/reducers/popupsSlice";
import { ALERT_POPUP } from "../../utils/constants";
import { useAppDispatch } from "../../utils/hooks";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function PopupWithAlert() {
  const dispatch = useAppDispatch();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(closeAllPopups());
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
