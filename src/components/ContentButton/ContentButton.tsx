import { useNavigate } from "react-router-dom";
import { IContentButtonProps } from "../../utils/interfaces";

function ContentButton({
  buttonText,
  navigatePath,
  cssClass,
}: IContentButtonProps) {
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
