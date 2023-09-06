import { useNavigate } from "react-router-dom";
import { IContentMenuProps } from "../../utils/interfaces";
import ContentButton from "../ContentButton/ContentButton";

function ContentMenu({ titleText, buttonText, navigatePath }: IContentMenuProps) {
  const navigate = useNavigate();
  function handleClick() {
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
