import { blackLogo } from "../../utils/constants";

function PopupWithForm(props: any) {
  return (
    <div
      className={`popup popup_opened popup_handle_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img className="popup__logo" src={blackLogo} alt="Логотип" />
        <form
          action="#"
          name={`${props.name}form`}
          className="popop__form form"
        >
          <h2 className="form__title">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
