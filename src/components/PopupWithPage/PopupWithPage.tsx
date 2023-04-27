import { IPopupWithPageProps } from "../../utils/interfaces";

function PopupWithPage(props:IPopupWithPageProps) {
  return (
    <div
      className={`page-popup page-popup_handle_${props.name} ${
        props.isOpen ? "page-popup_opened" : ""
      }`}
    >
      <div className="page-popup__container">
        <button
          className="page-popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWithPage;
