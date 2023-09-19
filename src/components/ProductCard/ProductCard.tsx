import { useState, useEffect } from "react";
import { selectProductById } from "../../services/reducers/productsSlice";
import Content from "../Content/Content";
import Paths from "../Paths/Paths";
import { useAppSelector } from "../../utils/hooks";
import { Link, useParams } from "react-router-dom";
import { categoryPath } from "../../utils/constants";
import { selectAllCategories } from "../../services/reducers/categoriesSlice";
import ButtonFav from "../ButtonFav/ButtonFav";
import { selectAllCollections } from "../../services/reducers/collectionSlice";
import Price from "../Price/Price";

function ProductCard() {
  const { productId } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId!)
  );
  const categories = useAppSelector(selectAllCategories);
  const category = categories.filter((c) => c.path === product!.category)[0];
  const collections = useAppSelector(selectAllCollections);
  const collection = collections.filter(
    (c) => c.path === product?.collection
  )[0];
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

  function Images() {
    return (
      <img
        className="prodcard__miniimage"
        src={product?.img}
        alt={product?.title}
      />
    );
  }

  const images = () => {
    let res: any = [];
    for (let i = 0; i < 10; i++) {
      res.push(<Images key={i} />);
    }
    return res;
  };

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);
  const getDetailsSize = () => {
    const buttonsNumber = 3;
    let buttons = [
      { size: "S", disabled: true },
      { size: "M", disabled: true },
      { size: "L", disabled: true },
    ];
    for (let i = 0; i < buttonsNumber; i++) {
      switch (getRandomInt(2)) {
        case 0:
          buttons[i].disabled = false;
          break;
        case 1:
          buttons[i].disabled = true;
          break;
        default:
          console.log(`Невозможно обработать элемент ${i}`);
      }
    }
    return buttons;
  };
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
              <ButtonFav product={product!} className={"prodcard__buttonfav"} />
            </div>
            <div className="prodcard__scroll">{images()}</div>
          </div>
          <div className="prodcard__description">
            <h2 className="prodcard__title">{product?.title}</h2>
            <div className="prodcard__field">
              <p className="prodcard__article">{product?.article}</p>
              {/* Исправить */}
              <Link
                to={`collection/${collection.id}`}
                className="prodcard__collection"
              ></Link>
            </div>
            <div className="prodcard__field">
              <p className="prodcard__text">
                {`${product?.title} в полу-спортивном стиле. Выполнено из джерси темно-синего
              цвета, подходит, как для повседневной носки, так и на выход.
              Верхняя часть из мерцающего крепа кораллового цвета с кулиской на
              спине и рукавах. На передней части юбки вставки из гофре плиссе в
              темно-синих и голубых тонах. Платье не мнется, прекрасно сохраняет
              форму. Застегивается впереди на молнию в спортивном стиле.`}
              </p>
            </div>
            <div className="prodcard__field">
              <div className="details">
                <h3 className="details__title">Размер</h3>
                <ul className="details__buttons">
                  {getDetailsSize().map((b, i) => (
                    <li key={i}>
                      <button className="details__button details__button_color_standart" disabled={b.disabled}>
                        {b.size}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="prodcard__field">
              <div className="details">
                <h3 className="details__title">Цвет</h3>
                <ul className="details__buttons">
                  <li>
                    <button className="details__button details__button_color_red" aria-label="Цвет"></button>
                  </li>
                  <li>
                    <button className="details__button details__button_color_orange" aria-label="Цвет"></button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="details__order">
              <ul className="details__orderbuttons">
                <li>
                  <button className="details__orderbutton">Купить</button>
                </li>
                <li>
                  <button className="details__orderbutton">В корзину</button>
                </li>
              </ul>
              <div className="details__price">
                <Price product={product!} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ProductCard;
