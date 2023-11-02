import { Link } from "react-router-dom";
import Paths from "../Paths/Paths";
import { ISectionSelectionProps } from "../../utils/interfaces";
import Content from "../Content/Content";
import { handleToElementScroll } from "../../utils/utils";

function SectionSelection({ path, fotos }: ISectionSelectionProps) {
  const mainElement = document.getElementsByClassName("main");
  const handleScroll = () => {
    handleToElementScroll(mainElement[0]);
  };
  return (
    <Content>
      <div className="partition">
        <Paths path={path} />
        <ul className="partition__content">
          {fotos.map((f, i) => (
            <li className="partition__card" key={i} onClick={handleScroll}>
              <Link className="partition__link" to={`${f.id}`}>
                <img className="partition__img" src={f.src} alt={f.title}></img>
              </Link>
              <h3 className="partition__title">{f.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </Content>
  );
}

export default SectionSelection;
