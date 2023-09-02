import {
  addFavouriteProduct,
  removeFavouriteProduct,
  selectAllProducts,
} from "../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { ISectionChooseProps } from "../../utils/interfaces";
import Paths from "../Paths/Paths";
import SectionMore from "../SectionMore/SectionMore";
import SectionProduct from "../SectionProduct/SectionProduct";

function SectionChoose({
  path,
  item,
  buttonText,
  titleText,
  data,
}: ISectionChooseProps) {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts);

  function toggleFavouriteState(id: string, isInFavourite: boolean) {
    if (isInFavourite) {
      dispatch(removeFavouriteProduct({ productId: id }));
    } else {
      dispatch(addFavouriteProduct({ productId: id }));
    }
  }

  const productPath = [...path.slice(), { path: item.path, desc: item.title }];

  const categoryProducts = allProducts.filter(
    (product) =>
      product.category === item.path || product.collection === item.path
  );

  return (
    <section className="content">
      <div className="partition">
        <Paths path={productPath} />
        <ul className="partition__content">
          {categoryProducts.map((details) => (
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
        data={data}
        navigatePath={path[1].path}
      />
    </section>
  );
}

export default SectionChoose;
