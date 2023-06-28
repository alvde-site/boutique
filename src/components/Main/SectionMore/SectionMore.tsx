
import { ISectionMoreProps } from "../../../utils/interfaces";
import Content from "../Content/Content";

function SectionMore({ titleText, buttonText, navigatePath, categoryData }: ISectionMoreProps) {
  return (
    <Content titleText={titleText} buttonText={buttonText} navigatePath={navigatePath}>
      <div className="more">
        {categoryData.slice(1, 4).map((collection, index) => (
          <article className="more_item" key={index}>
            <figure className="more__figure">
              <img
                className="more__image"
                src={collection.src}
                alt={collection.title}
              />
            </figure>
            <h2 className="more__title">{collection.title}</h2>
          </article>
        ))}
      </div>
    </Content>
  );
}

export default SectionMore;
