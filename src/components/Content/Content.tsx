import { IContentProps } from "../../utils/interfaces";
import ContentMenu from "../ContentMenu/ContentMenu";
import ContentButton from "../ContentButton/ContentButton";

function Content({
  children,
  titleText,
  buttonText,
  navigatePath,
  cssClass,
}: IContentProps) {
  return (
    <section className="content">
      <ContentMenu
        titleText={titleText}
        buttonText={buttonText}
        navigatePath={navigatePath}
        cssClass={cssClass}
      />
      {children}
      <ContentButton
        cssClass="content-button_position_bottom"
        buttonText={buttonText}
        navigatePath={navigatePath}
      />
    </section>
  );
}

export default Content;
