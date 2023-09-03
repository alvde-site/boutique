import { Link } from "react-router-dom";
import { IPathProps } from "../../utils/interfaces";

function Paths({ path }:IPathProps) {
  return (
    <ul className="paths partition__paths">
      {path.map((e, i) => (
        <li className="path" key={i}>
          <Link className="path__link" to={e.path}>
            {e.desc}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Paths;
