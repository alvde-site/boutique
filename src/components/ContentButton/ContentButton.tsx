import { useNavigate } from "react-router-dom";
import { IContentProps } from "../../utils/interfaces";

function ContentButton({
  buttonText,
  navigatePath,
  cssClass,
}: IContentProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigatePath ? navigate(navigatePath) : navigate("/");
  }
  return (
      <button
        onClick={handleClick}
        className={`content-button ${cssClass}`}
      >
        {buttonText}
      </button>
  );
}

export default ContentButton;
