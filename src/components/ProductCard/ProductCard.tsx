import { useState, useEffect } from "react";
import {
  addFavouriteProduct,
  removeFavouriteProduct,
  selectProductById,
} from "../../services/reducers/productsSlice";
import Content from "../Content/Content";
import Paths from "../Paths/Paths";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { categoryPath } from "../../utils/constants";
import { selectAllCategories } from "../../services/reducers/categoriesSlice";

function ProductCard() {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId!)
  );
  console.log(product)
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

  function toggleFavourite(id: string, isInFavourite: boolean) {
    if (isInFavourite) {
      dispatch(removeFavouriteProduct({ productId: id }));
    } else {
      dispatch(addFavouriteProduct({ productId: id }));
    }
  }

  function toggleFavoriteState() {
    if (product) {
      toggleFavourite(product.id, product.isInFavorite);
    }
  }

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
              <button
                className={`product__favourite ${
                  product?.isInFavorite
                    ? "product__favourite_type_like"
                    : "product__favourite_type_dislike"
                }`}
                aria-label="Избранное"
                onClick={toggleFavoriteState}
              ></button>
            </div>
            <div className="prodcard__scroll"></div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ProductCard;
