import { useNavigate } from "react-router-dom";
import { selectAllProducts } from "../../services/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  IHotNew,
  IProductsState,
  IShowcaseProps,
} from "../../utils/interfaces";
import { closeAllPopups } from "../../services/reducers/popupsSlice";
import { handleToElementScroll } from "../../utils/utils";

function Showcase(props: IShowcaseProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let hotNew: IHotNew | IProductsState;

  hotNew = useAppSelector(selectAllProducts)[7];
  if (!hotNew) {
    hotNew = { id: "", title: "", img: "" };
  }

  console.log(hotNew);
  const mainElement = document.getElementsByClassName("main");
  const handleClick = () => {
    dispatch(closeAllPopups());
    navigate(`/product/${hotNew.id}`);
    handleToElementScroll(mainElement[0]);
  };

  return (
    <article className={`showcase ${props.modifier}`}>
      <figure className="showcase__figure">
        <img className="showcase__image" src={hotNew.img} alt={hotNew.title} />
      </figure>
      <div className="showcase__content">
        <div className="showcase__title-block">
          <h2 className="showcase__title">{hotNew.title}</h2>
          <p className="showcase__subtitle">{hotNew.title}</p>
        </div>
        <button className="showcase__button" onClick={handleClick}>
          Приобрести
        </button>
        <p className="showcase__description">
          Приталенное платье мини мятного цвета в полу-спортивном стиле.
          Выполнено из джерси, рукава из мерцающего желтого крепа. На юбке
          вставки из гофре плиссе разных цветов. Мятный и розовый лампасы
          придают платью спортивное направление. По спинке длинная леопардовая
          молния.
        </p>
      </div>
    </article>
  );
}

export default Showcase;
