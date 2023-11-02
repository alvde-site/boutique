import { useNavigate } from "react-router-dom";
import { IContentButtonProps } from "../../utils/interfaces";
import { handleToElementScroll } from "../../utils/utils";

function ContentButton({
  buttonText,
  navigatePath,
  cssClass,
}: IContentButtonProps) {
  const navigate = useNavigate();
  const mainElement = document.getElementsByClassName("main");

  function handleClick() {
    navigatePath ? navigate(navigatePath) : navigate("/");
    handleToElementScroll(mainElement[0]);
  }
  return (
    <button onClick={handleClick} className={`content-button ${cssClass}`}>
      {buttonText}
    </button>
  );
}

export default ContentButton;
