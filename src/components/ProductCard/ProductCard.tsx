import { useState, useEffect } from "react";
import { selectProductById } from "../../services/reducers/productsSlice";
import Content from "../Content/Content";
import Paths from "../Paths/Paths";
import { useAppSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { categoryPath } from "../../utils/constants";
import { selectAllCategories } from "../../services/reducers/categoriesSlice";
import ButtonFav from "../ButtonFav/ButtonFav";

function ProductCard() {
  const { productId } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId!)
  );
  const categories = useAppSelector(selectAllCategories);
  const category = categories.filter((c) => c.path === product!.category)[0];
  const [productPath, setProductPath] = useState(categoryPath);
  useEffect(() => {
    if (product && category) {
      const addPath = categoryPath.slice();
      addPath[2] = {
        path: `/category/${category.id}`,
        desc: `${category.title}`,
      };
      addPath[3] = { path: "", desc: "" };
      setProductPath(() => addPath);
    }
  }, [product, category]);

  return (
    <Content>
      <div className="partition">
        {<Paths path={productPath} />}
        <div className="prodcard">
          <div className="prodcard__images">
            <div className="prodcard__image-block">
              <img
                className="prodcard__image"
                src={product?.img}
                alt={product?.title}
              />
              <ButtonFav product={product!} />
            </div>
            <div className="prodcard__scroll"></div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ProductCard;
