import { IContentProps } from "../../utils/interfaces";
import ContentMenu from "../ContentMenu/ContentMenu";

function Content({
  children,
  titleText,
  buttonText,
  navigatePath,
  cssClass,
}: IContentProps) {
  return (
    <section className="content" id="content">
      <ContentMenu
        titleText={titleText}
        buttonText={buttonText}
        navigatePath={navigatePath}
        cssClass={cssClass}
      />
      {children}
    </section>
  );
}

export default Content;
