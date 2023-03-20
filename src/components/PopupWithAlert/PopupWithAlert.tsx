import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { IPopupWithAlertProps } from "../../utils/interfaces";

function PopupWithAlert(props: IPopupWithAlertProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.onClose();
  }

  return (
    <PopupWithForm
      name="alert"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
