import { promoTitles } from "../../utils/constants";
import SwiperViewing from "../SwiperViewing/SwiperViewing";
import Category from "./Category/Category";
import Collection from "./Collection/Collection";
import Companies from "./Companies/Companies";
import Showcase from "../Showcase/Showcase";

function Main() {
  return (
    <>
      <section className="promo">
        <SwiperViewing promoTitles={promoTitles} />
      </section>
      <Showcase modifier="showcase_position_main" />
      <Category />
      <Collection />
      <Companies />
    </>
  );
}

export default Main;
