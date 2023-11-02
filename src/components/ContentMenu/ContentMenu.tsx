import { useNavigate } from "react-router-dom";
import { IContentMenuProps } from "../../utils/interfaces";
import ContentButton from "../ContentButton/ContentButton";
import { handleToElementScroll } from "../../utils/utils";

function ContentMenu({
  titleText,
  buttonText,
  navigatePath,
}: IContentMenuProps) {
  const navigate = useNavigate();
  const mainElement = document.getElementsByClassName("main");
  function handleClick() {
    handleToElementScroll(mainElement[0]);
    navigatePath ? navigate(navigatePath) : navigate("/");
  }
  return (
    <div className="content-menu">
      <h2 className="content-menu__title" onClick={handleClick}>
        {titleText}
      </h2>
      <ContentButton
        buttonText={buttonText}
        navigatePath={navigatePath}
        cssClass="content-button_position_top"
      />
    </div>
  );
}

export default ContentMenu;
