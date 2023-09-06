import { ISectionMoreProps } from "../../utils/interfaces";
import Content from "../Content/Content";
import ContentMenu from "../ContentMenu/ContentMenu";
import Overlay from "../Overlay/Overlay";

function SectionMore({
  titleText,
  buttonText,
  navigatePath,
  data,
}: ISectionMoreProps) {
  return (
    <Content>
      <ContentMenu
        titleText={titleText}
        buttonText={buttonText}
        navigatePath={navigatePath}
        cssClass={"content-button_position_top"}
      />
      <div className="more">
        {data.slice(1, 4).map((collection, index) => (
          <article className="more_item" key={index}>
            <figure className="more__figure">
              <img
                className="more__image"
                src={collection.src}
                alt={collection.title}
              />
              <Overlay path={navigatePath} item={collection} />
            </figure>
            <h2 className="more__title">{collection.title}</h2>
          </article>
        ))}
      </div>
    </Content>
  );
}

export default SectionMore;
