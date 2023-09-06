import { aboutFotos } from "../../utils/constants";
import { ABOUT_TITLE_TEXT, ABOUT_BUTTON_TEXT } from "../../utils/constants";
import Content from "../Content/Content";
import ContentMenu from "../ContentMenu/ContentMenu";

function About() {
  return (
    <Content>
      <ContentMenu
        titleText={ABOUT_TITLE_TEXT}
        buttonText={ABOUT_BUTTON_TEXT}
      />
      <div className="about">
        <p className="about__text about__item about__item_order_1">
          Urban vogue - повседневная одежда, яркая, местами авангардная, с
          большим количеством деталей и смелых цветовых сочетаний. Но в тоже
          время удобная и уместная в любой ситуации.
        </p>
        <div className="about__card about__item about__item_order_2">
          <img
            className="about__image"
            src={aboutFotos[0].src}
            alt={aboutFotos[0].alt}
          />
          <div className="about__overlay">
            <a href="https://github.com/alvde-site" className="about__link">
              Urban vogue
            </a>
          </div>
        </div>
        <p className="about__text about__item about__item_order_3">
          Urban vogue - повседневная одежда, яркая, местами авангардная, с
          большим количеством деталей и смелых цветовых сочетаний. Но в тоже
          время удобная и уместная в любой ситуации.
        </p>
        <div className="about__card about__item about__item_order_4">
          <img
            className="about__image"
            src={aboutFotos[1].src}
            alt={aboutFotos[1].alt}
          />
          <div className="about__overlay">
            <a href="https://github.com/alvde-site" className="about__link">
              PUNK COUTURE
            </a>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default About;
