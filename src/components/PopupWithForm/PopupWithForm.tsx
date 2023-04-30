import { closeAllPopups } from "../../services/reducers/popupsSlice";
import { blackLogo } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { IPopupWithFormProps } from "../../utils/interfaces";

function PopupWithForm(props: IPopupWithFormProps) {
  const dispatch = useAppDispatch();
  const popupState = useAppSelector((state) =>
    state.popups.find((popup) => popup.name === props.name)
  );

  const closePopup = () => {
    dispatch(closeAllPopups());
  };

  return (
    <div
      className={`popup popup_handle_${props.name} ${
        popupState?.state ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={closePopup}
        >
          &times;
        </button>
        <img className="popup__logo" src={blackLogo} alt="Логотип" />
        <form
          action="#"
          name={`${props.name}form`}
          className="popop__form form"
          onSubmit={props.onSubmit}
        >
          <h2
            className={`form__title ${
              props.hasErrors && "form__title_type_error"
            }`}
          >
            {props.title}
          </h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
