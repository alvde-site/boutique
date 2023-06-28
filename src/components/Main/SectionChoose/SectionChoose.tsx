import {
  addFavouriteProduct,
  removeFavouriteProduct,
  selectAllDresses,
  selectAllProducts,
} from "../../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { ISectionChooseProps } from "../../../utils/interfaces";
import Paths from "../Paths/Paths";
import SectionMore from "../SectionMore/SectionMore";
import SectionProduct from "./SectionProduct/SectionProduct";

function SectionChoose({
  path,
  item,
  buttonText,
  titleText,
  categoryData,
}: ISectionChooseProps) {
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
  const copyPath = path.slice();
  const newPath = [...copyPath, { path: item.path, desc: item.title }];
  return (
    <section className="content">
      <div className="partition">
        <Paths path={newPath} />
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
      <SectionMore
        titleText={titleText}
        buttonText={buttonText}
        categoryData={categoryData}
        navigatePath={path[1].path}
      />
    </section>
  );
}

export default SectionChoose;
