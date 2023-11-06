import { Link } from "react-router-dom";
import { IOverlayProps } from "../../utils/interfaces";
import { handleToElementScroll } from "../../utils/utils";

function Overlay({ path, item }: IOverlayProps) {
  const handleScroll = ()=> {
    const element = document.querySelector(".main");
    handleToElementScroll(element);
  }
  return (
    <div className="overlay">
      <Link className="overlay__link" to={`${path}/${item.id}`} onClick={handleScroll}>
        {item.title}
      </Link>
    </div>
  );
}

export default Overlay;
