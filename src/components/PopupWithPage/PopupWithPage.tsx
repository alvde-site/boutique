import { closeAllPopups } from "../../services/reducers/popupsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { IPopupWithPageProps } from "../../utils/interfaces";

function PopupWithPage(props: IPopupWithPageProps) {
  const dispatch = useAppDispatch();
  const closePopup = () => {
    dispatch(closeAllPopups());
  };
  const popupState = useAppSelector((state) =>
    state.popups.find((popup) => popup.name === props.name)
  );
  return (
    <div
      className={`page-popup page-popup_handle_${props.name} ${
        popupState?.state ? "page-popup_opened" : ""
      }`}
    >
      <div className="page-popup__container">
        <button
          className="page-popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={closePopup}
        ></button>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWithPage;
