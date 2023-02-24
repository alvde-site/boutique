import { companiesLogo } from "../../../utils/constants";

function Companies() {
  return (
    <section className="companies">
      <div className="companies__container">
        <div className="companies__marquee">
          {companiesLogo.map((i, index) => (
            <img
              className="companies__logo"
              src={i.src}
              alt={i.alt}
              key={index}
            />
          ))}
          {companiesLogo.map((i, index, arr) => (
            <img
              className="companies__logo"
              src={i.src}
              alt={i.alt}
              key={index + arr.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
