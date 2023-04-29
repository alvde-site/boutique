import PopupWithPage from "../PopupWithPage/PopupWithPage";
import { favouriteDetails } from "../../utils/constants";
import Favourite from "./Favourite/Favourite";

function PopupWithFavouritePage() {
  return (
    <PopupWithPage name={"favourite"}>
      <div className="favourite">
        <h2 className="favourite__title">Избранное</h2>
        {favouriteDetails.map((details) => (
          <Favourite details={details} key={details.id} />
        ))}
      </div>
    </PopupWithPage>
  );
}

export default PopupWithFavouritePage;
