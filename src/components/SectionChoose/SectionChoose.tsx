import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { selectCategoryById } from "../../services/reducers/categoriesSlice";
import { selectCollectionsById } from "../../services/reducers/collectionSlice";

function SectionChoose({
  path,
  buttonText,
  titleText,
  data,
}: ISectionChooseProps) {
  const { sectionId } = useParams();

  const category = useAppSelector((state) =>
    selectCategoryById(state, parseInt(sectionId!))
  );
  const collection = useAppSelector((state) =>
    selectCollectionsById(state, parseInt(sectionId!))
  );
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts);

  const [productPath, setProductPath] = useState(path);
  const [sectionProducts, setSectionProducts] = useState(allProducts);
  function toggleFavouriteState(id: string, isInFavourite: boolean) {
    if (isInFavourite) {
      dispatch(removeFavouriteProduct({ productId: id }));
    } else {
      dispatch(addFavouriteProduct({ productId: id }));
    }
  }

  useEffect(() => {
    if (category) {
      const addPath = path.slice();
      addPath[2] = { path: category.path, desc: category.title };
      setProductPath(() => addPath);
      setSectionProducts(() =>
        allProducts.filter((product) => product.category === category.path)
      );
    }
  }, [path, category, allProducts]);

  useEffect(() => {
    if (collection) {
      const addPath = path.slice();
      addPath[2] = { path: collection.path, desc: collection.title };
      setProductPath(() => addPath);
      setSectionProducts(() =>
        allProducts.filter((product) => product.collection === collection.path)
      );
    }
  }, [path, collection, allProducts]);

  return (
    <section className="content">
      <div className="partition">
        <Paths path={productPath} />
        <ul className="partition__content">
          {sectionProducts.map((details) => (
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
