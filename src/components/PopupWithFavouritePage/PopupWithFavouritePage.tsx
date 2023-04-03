import { IPopupWithFavouriteProps } from "../../utils/interfaces";
import PopupWithPage from "../PopupWithPage/PopupWithPage";
import { favouriteDetails } from "../../utils/constants";
import Favourite from "../PopupWithBasketPage/Favourite/Favourite";

function PopupWithFavouritePage(props: IPopupWithFavouriteProps) {
  return (
    <PopupWithPage
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"favourite"}
    >
      <div className="basket">
        <h2 className="basket__title">Избранное</h2>
        {favouriteDetails.map((details, index) => <Favourite details={details} key={index}/>)}
      </div>
    </PopupWithPage>
  );
}

export default PopupWithFavouritePage;
