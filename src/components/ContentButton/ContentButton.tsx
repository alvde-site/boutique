import { useNavigate } from "react-router-dom";
import { IContentButtonProps } from "../../utils/interfaces";
import { mainElement, handleToElementScroll } from "../../utils/utils";

function ContentButton({
  buttonText,
  navigatePath,
  cssClass,
}: IContentButtonProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigatePath ? navigate(navigatePath) : navigate("/");
    handleToElementScroll(mainElement);
  }
  return (
    <button onClick={handleClick} className={`content-button ${cssClass}`}>
      {buttonText}
    </button>
  );
}

export default ContentButton;
