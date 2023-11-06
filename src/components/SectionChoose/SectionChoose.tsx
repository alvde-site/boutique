import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectAllProducts } from "../../services/reducers/productsSlice";
import { useAppSelector } from "../../utils/hooks";
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
    selectCategoryById(state, sectionId!)
  );
  const collection = useAppSelector((state) =>
    selectCollectionsById(state, sectionId!)
  );

  const allProducts = useAppSelector(selectAllProducts);

  const [productPath, setProductPath] = useState(path);
  const [sectionProducts, setSectionProducts] = useState(allProducts);

  useEffect(() => {
    if (category) {
      const addPath = path.slice();
      addPath[2] = { path: `/category/${category.id}`, desc: category.title };
      setProductPath(() => addPath);
      setSectionProducts(() =>
        allProducts.filter((product) => product.category === category.path)
      );
    }
  }, [path, category, allProducts]);

  useEffect(() => {
    if (collection) {
      const addPath = path.slice();
      addPath[2] = {
        path: `/collection/${collection.id}`,
        desc: collection.title,
      };
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
          {sectionProducts.map((product) => (
            <SectionProduct product={product} key={product.id} />
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
