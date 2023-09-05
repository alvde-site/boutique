import { useNavigate } from "react-router-dom";
import { IContentProps } from "../../utils/interfaces";

function ContentMenu({
  titleText,
  buttonText,
  navigatePath,
}: IContentProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigatePath ? navigate(navigatePath) : navigate("/");
  }
  return (
    <div className="content-menu">
      <h2 className="content-menu__title" onClick={handleClick}>
        {titleText}
      </h2>
      <button
        onClick={handleClick}
        className="content-menu__button content-menu__button_position_top"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ContentMenu;
