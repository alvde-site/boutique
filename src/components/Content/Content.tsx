import { useNavigate } from "react-router-dom";
import { IContentProps } from "../../utils/interfaces";
import ContentMenu from "../ContentMenu/ContentMenu";

function Content({
  children,
  titleText,
  buttonText,
  navigatePath,
}: IContentProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigatePath ? navigate(navigatePath) : navigate("/");
  }
  return (
    <section className="content">
      <ContentMenu titleText={titleText} buttonText={buttonText} navigatePath={navigatePath}/>
      {children}
      <button
        onClick={handleClick}
        className="content__button content__button_position_bottom"
      >
        {buttonText}
      </button>
    </section>
  );
}

export default Content;
