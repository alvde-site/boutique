import { Link } from "react-router-dom";
import Paths from "../Paths/Paths";

function SectionSelection({ path, fotos }) {
  return (
    <section className="content">
      <div className="partition">
        <Paths path={path} />
        <ul className="partition__content">
          {fotos.map((f, i) => (
            <li className="partition__card" key={i}>
              <Link className="partition__link" to="/category/dress">
                <img className="partition__img" src={f.src} alt={f.title}></img>
              </Link>
              <h3 className="partition__title">{f.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SectionSelection;
