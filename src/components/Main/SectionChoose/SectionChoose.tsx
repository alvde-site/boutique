import { ISectionChooseProps } from "../../../utils/interfaces";
import Paths from "../Paths/Paths";

function SectionChoose({path, fotos}:ISectionChooseProps) {
  return <section className="content">
  <div className="partition">
    <Paths path={path} />
    <ul className="partition__content">
      {fotos.map((f, i) => (
        <li className="partition__card" key={i}>
          <a className="partition__link" href="!#">
            <img className="partition__img" src={f.src} alt={f.title}></img>
          </a>
          <h3 className="partition__title">{f.title}</h3>
        </li>
      ))}
    </ul>
  </div>
</section>;
}

export default SectionChoose;
