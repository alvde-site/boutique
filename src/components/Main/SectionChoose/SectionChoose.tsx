import {
  addFavouriteProduct,
  removeFavouriteProduct,
  selectAllDresses,
  selectAllProducts,
} from "../../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { ISectionChooseProps } from "../../../utils/interfaces";
import Paths from "../Paths/Paths";
import SectionProduct from "./SectionProduct/SectionProduct";

function SectionChoose({ path }: ISectionChooseProps) {
  const dispatch = useAppDispatch();
  const dressProducts = useAppSelector(selectAllDresses);
  const allProducts = useAppSelector(selectAllProducts);

  function toggleFavouriteState(id: string, isInFavourite: boolean) {
    if (isInFavourite) {
      dispatch(removeFavouriteProduct({ productId: id }));
    } else {
      dispatch(addFavouriteProduct({ productId: id }));
    }
  }
  return (
    <section className="content">
      <div className="partition">
        <Paths path={path} />
        <ul className="partition__content">
          {dressProducts.map((details) => (
            <SectionProduct
              details={details}
              key={details.id}
              allProducts={allProducts}
              toggleFavourite={toggleFavouriteState}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SectionChoose;
