import { IPriceProps } from "../../utils/interfaces";

function Price({ product }: IPriceProps) {
  return (
    <div className="price">
      <p className="price__previous">{product.discount}</p>
      <p className="price__current basket__price">
        {product.price}
        <span className="basket__currency">₽</span>
      </p>
    </div>
  );
}

export default Price;
