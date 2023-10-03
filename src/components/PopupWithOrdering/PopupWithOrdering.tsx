import { ORDERING_POPUP } from "../../utils/constants";
import PopupWithPage from "../PopupWithPage/PopupWithPage";

function PopupWithOrdering() {
  return <PopupWithPage name={ORDERING_POPUP} title="Оформление заказа">
    <div>Заказать</div>
  </PopupWithPage>;
}

export default PopupWithOrdering;
