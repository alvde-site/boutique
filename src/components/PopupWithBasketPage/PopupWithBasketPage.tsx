import { IPopupWithBasketProps } from "../../utils/interfaces";
import PopupWithPage from "../PopupWithPage/PopupWithPage";

function PopupWithBasketPage(props: IPopupWithBasketProps) {
  return (
    <PopupWithPage
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"basket"}
    ></PopupWithPage>
  );
}

export default PopupWithBasketPage;
