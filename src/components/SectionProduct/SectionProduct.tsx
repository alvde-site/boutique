import { Link } from "react-router-dom";
import { ISectionProductProps } from "../../utils/interfaces";
import ButtonFav from "../ButtonFav/ButtonFav";
import { handleToElementScroll, mainElement } from "../../utils/utils";

function SectionProduct({ product }: ISectionProductProps) {
  const handleScroll = () => {
    handleToElementScroll(mainElement);
  };
  return (
    <li className="partition__card">
      <Link
        className="partition__link partition__link_add_border"
        to={`/product/${product.id}`}
        onClick={handleScroll}
      >
        <img
          className="partition__img"
          src={product.img}
          alt={product.title}
        ></img>
      </Link>
      <div className="partition__info">
        <div>
          <p className="partition__text">{product.title}</p>
          <p className="partition__price">{`₽ ${product.price}`}</p>
        </div>
        <ButtonFav product={product} className="" />
      </div>
    </li>
  );
}

export default SectionProduct;
