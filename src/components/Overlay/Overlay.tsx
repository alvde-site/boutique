import { Link } from "react-router-dom";
import { IOverlayProps } from "../../utils/interfaces";

function Overlay({path, item}:IOverlayProps) {
    return <div className="overlay">
    <Link className="overlay__link" to={`${path}/${item.path}`}>
      {item.title}
    </Link>
  </div>
}

export default Overlay;