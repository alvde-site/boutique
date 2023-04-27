import { blackLogo } from "../../utils/constants";
import { IPopupWithFormProps } from "../../utils/interfaces";

function PopupWithForm(props:IPopupWithFormProps) {
  return (
    <div
      className={`popup popup_handle_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        >&times;</button>
        <img className="popup__logo" src={blackLogo} alt="Логотип" />
        <form
          action="#"
          name={`${props.name}form`}
          className="popop__form form"
          onSubmit={props.onSubmit}
        >
          <h2 className={`form__title ${props.hasErrors && "form__title_type_error"}`}>{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
