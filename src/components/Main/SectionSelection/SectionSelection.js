import testImg from "../../../images/product1.jpg";

function SectionSelection() {
  return (
    <section className="partition">
      <ul className="partition__paths">
        <li className="partition__path">Главная</li>
      </ul>
      <ul className="partition__links">
        <li className="partition__link">Категории</li>
      </ul>
      <div className="partition__content">
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
        <div className="partition__card">
          <a className="partition__link" href="!#">
            <img className="partition__img" src={testImg} alt=""></img>
          </a>
          <h3 className="partition__title">SALE</h3>
        </div>
      </div>
    </section>
  );
}

export default SectionSelection;
